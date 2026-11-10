"""Analyze CTFL 4.0 results by learning objective (LO).

Reads the per-LO percentages shown after the exam (e.g. "LO 1.2.1: 0.00%"),
joins them with the official exam structure in data/lo-catalog.json and prints
a Markdown (or JSON) summary used by the exam-performance skill.

Usage:
    python -I analyze.py --input results.txt [--repo .] [--json]
    python -I analyze.py --repo . < results.txt
"""

import argparse
import json
import re
import sys
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent.parent
CATALOG = SKILL_DIR / "data" / "lo-catalog.json"

LO_RE = re.compile(
    r"(?:LO|FL)?[\s-]*([1-6]\.\d\.\d)\s*[:=\-–]?\s*(\d{1,3}(?:[.,]\d+)?)\s*%",
    re.IGNORECASE,
)

STATUS_LABEL = {
    "wrong": "Errou",
    "partial": "Parcial",
    "right": "Acertou",
    "untested": "Não sorteado",
}

# Weight applied to the expected number of questions per LO.
STATUS_FACTOR = {"wrong": 1.0, "partial": 0.7, "untested_in_weak_group": 0.6, "untested": 0.4, "right": 0.15}


def infer_questions(pct):
    """Smallest question count (1-4) that turns the percentage into whole hits."""
    for n in range(1, 5):
        hits = pct * n / 100
        if abs(hits - round(hits)) < 0.02:
            return n, round(hits)
    return 1, round(pct / 100)


def parse(text):
    results, warnings = {}, []
    for code, pct in LO_RE.findall(text):
        lo = "FL-" + code
        value = float(pct.replace(",", "."))
        if lo in results:
            warnings.append(f"{lo} aparece mais de uma vez; mantido o primeiro valor.")
            continue
        results[lo] = value
    return results, warnings


def load_mock_questions(repo):
    path = repo / "src" / "data" / "mock-exams.json"
    by_lo = {}
    if not path.exists():
        return by_lo
    data = json.loads(path.read_text(encoding="utf-8"))
    for exam in data.get("exams", []):
        for kind in ("questions", "extra"):
            for q in exam.get(kind, []):
                lo = q.get("lo")
                if not lo:
                    continue
                tag = f"{exam['id']}{q['id']}" if kind == "questions" else f"extra {q['id']}"
                by_lo.setdefault(lo, []).append(tag)
    return by_lo


def analyze(results, catalog, mock):
    los = catalog["los"]
    warnings = []
    unknown = [lo for lo in results if lo not in los]
    for lo in unknown:
        warnings.append(f"{lo} não existe no syllabus CTFL 4.0; ignorado.")

    per_lo = {}
    for lo, info in los.items():
        row = {"lo": lo, **info, "mock": mock.get(lo, [])}
        if lo in results:
            pct = results[lo]
            n, hits = infer_questions(pct)
            row.update(pct=pct, questions=n, hits=hits)
            row["status"] = "right" if hits == n else "wrong" if hits == 0 else "partial"
        else:
            row.update(pct=None, questions=0, hits=0, status="untested")
        per_lo[lo] = row

    groups = []
    for g in catalog["groups"]:
        rows = [per_lo[lo] for lo in g["los"]]
        asked = sum(r["questions"] for r in rows)
        hits = sum(r["hits"] for r in rows)
        weak = any(r["status"] in ("wrong", "partial") for r in rows)
        expected = g["questions"] / len(g["los"])
        for r in rows:
            key = r["status"]
            if key == "untested" and weak:
                key = "untested_in_weak_group"
            factor = STATUS_FACTOR[key]
            if r["k"] == "K3" and r["status"] != "right":
                factor *= 1.2  # calculation questions: high return on deliberate practice
            r["expected_questions"] = round(expected, 2)
            r["priority"] = round(expected * factor, 3)
            r["weak_group"] = weak
        groups.append({**g, "asked": asked, "hits": hits, "weak": weak})
        if asked != g["questions"] and asked:
            warnings.append(
                f"Grupo {g['id']} ({', '.join(g['los'])}): {asked} questão(ões) no resultado, "
                f"a estrutura oficial prevê {g['questions']}."
            )

    chapters = []
    for c in catalog["chapters"]:
        rows = [r for r in per_lo.values() if r["chapter"] == c["chapter"]]
        asked = sum(r["questions"] for r in rows)
        hits = sum(r["hits"] for r in rows)
        chapters.append({**c, "asked": asked, "hits": hits, "lost": asked - hits})

    kstats = {}
    for k in ("K1", "K2", "K3"):
        rows = [r for r in per_lo.values() if r["k"] == k]
        asked = sum(r["questions"] for r in rows)
        hits = sum(r["hits"] for r in rows)
        kstats[k] = {"official": catalog["exam"]["k"][k], "asked": asked, "hits": hits}

    total = sum(r["questions"] for r in per_lo.values())
    hits = sum(r["hits"] for r in per_lo.values())
    exam = catalog["exam"]
    if total != exam["questions"]:
        warnings.append(
            f"O resultado soma {total} questões; a prova oficial tem {exam['questions']}. "
            "Confira se a lista foi colada inteira."
        )
    return {
        "summary": {
            "questions": total,
            "hits": hits,
            "pct": round(100 * hits / total, 1) if total else 0,
            "pass_mark": exam["pass_mark"],
            "pass_pct": round(100 * exam["pass_mark"] / exam["questions"]),
            "gap": exam["pass_mark"] - hits,
        },
        "chapters": chapters,
        "k_levels": kstats,
        "groups": groups,
        "los": sorted(per_lo.values(), key=lambda r: (-r["priority"], r["lo"])),
        "warnings": warnings,
        "source": catalog["source"],
    }


def num(value, digits=1):
    return f"{value:.{digits}f}".replace(".", ",")


def pct(a, b):
    return f"{100 * a / b:.0f}%" if b else "-"


def md_link(path):
    # Report files live in reports/, one level below the repo root.
    return f"[{Path(path).stem}](../{path})"


def to_markdown(r):
    s = r["summary"]
    out = []
    out.append("## Resultado geral\n")
    out.append("| Item | Valor |\n|---|---|")
    out.append(f"| Acertos | {s['hits']} de {s['questions']} ({num(s['pct'])}%) |")
    out.append(f"| Nota de corte | {s['pass_mark']} ({s['pass_pct']}%) |")
    diff = -s["gap"]
    out.append(f"| Distância da nota de corte | {diff:+d} questão(ões) |\n")

    out.append("## Por capítulo\n")
    out.append("| Cap. | Tema | Questões (oficial) | Acertos | Aproveitamento | Pontos perdidos | K1/K2/K3 oficial |")
    out.append("|---|---|---|---|---|---|---|")
    for c in r["chapters"]:
        k = c["k"]
        out.append(
            f"| {c['chapter']} | {c['title']} | {c['asked']} ({c['questions']}) | {c['hits']} | "
            f"{pct(c['hits'], c['asked'])} | {c['lost']} | {k['K1']}/{k['K2']}/{k['K3']} |"
        )
    out.append("")

    out.append("## Por nível cognitivo\n")
    out.append("| Nível | Questões (oficial) | Acertos | Aproveitamento |\n|---|---|---|---|")
    for k, v in r["k_levels"].items():
        out.append(f"| {k} | {v['asked']} ({v['official']}) | {v['hits']} | {pct(v['hits'], v['asked'])} |")
    out.append("")

    out.append("## Grupos de objetivos da estrutura oficial\n")
    out.append("Cada grupo sorteia o número de questões indicado entre os LOs listados.\n")
    out.append("| Grupo | K | Questões por prova | Resultado | Não sorteados |\n|---|---|---|---|---|")
    by_lo = {x["lo"]: x for x in r["los"]}
    for g in r["groups"]:
        done = ", ".join(
            f"{lo} {'✔' if by_lo[lo]['status'] == 'right' else '✘' if by_lo[lo]['status'] == 'wrong' else '½'}"
            for lo in g["los"] if by_lo[lo]["status"] != "untested"
        ) or "-"
        untested = ", ".join(lo for lo in g["los"] if by_lo[lo]["status"] == "untested") or "-"
        out.append(f"| {g['id']} | {g['k']} | {g['questions']} | {done} | {untested} |")
    out.append("")

    out.append("## Objetivos por prioridade\n")
    out.append(
        "Prioridade = questões esperadas por LO na prova (pela estrutura oficial) "
        "x peso do resultado (errou 1,0; parcial 0,7; não sorteado em grupo com erro 0,6; "
        "não sorteado 0,4; acertou 0,15), com bônus de 20% para K3 não acertado.\n"
    )
    out.append("| # | LO | K | Objetivo | Resultado | Prioridade | Nota | Syllabus (pág.) | Simulados |")
    out.append("|---|---|---|---|---|---|---|---|---|")
    for i, x in enumerate(r["los"], 1):
        res = STATUS_LABEL[x["status"]]
        if x["status"] == "untested" and x["weak_group"]:
            res += " (grupo com erro)"
        mock = ", ".join(x["mock"]) or "-"
        out.append(
            f"| {i} | {x['lo']} | {x['k']} | {x['title']} | {res} | {num(x['priority'], 2)} | "
            f"{md_link(x['note'])} | {x['syllabus_page']} | {mock} |"
        )
    out.append("")

    if r["warnings"]:
        out.append("## Avisos\n")
        out.extend(f"- {w}" for w in r["warnings"])
        out.append("")
    out.append(f"Fonte da estrutura: {r['source']['structure']}.")
    return "\n".join(out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", type=Path, help="file with the results (default: stdin)")
    ap.add_argument("--repo", type=Path, default=Path.cwd(), help="repository root")
    ap.add_argument("--json", action="store_true", help="print JSON instead of Markdown")
    args = ap.parse_args()

    text = args.input.read_text(encoding="utf-8") if args.input else sys.stdin.read()
    results, warnings = parse(text)
    if not results:
        sys.exit("Nenhum resultado no formato 'LO x.y.z: NN%' foi encontrado.")

    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    report = analyze(results, catalog, load_mock_questions(args.repo))
    report["warnings"] = warnings + report["warnings"]

    sys.stdout.reconfigure(encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2) if args.json else to_markdown(report))


if __name__ == "__main__":
    main()
