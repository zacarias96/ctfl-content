// Mock exam simulator for the ISTQB CTFL 4.0 sample exams.
// Two modes:
//   - practice: one question at a time, graded with explanations right after answering;
//   - exam: 40 timed questions, full grading only at the end.
// No dependencies: takes the questions JSON and a root element.
// Helpers are exported for the unit tests in tests/mock-exams/.
// UI text is in Portuguese (the site's language); code and identifiers are in English.

export const EXAM = { minutes: 60, extraPct: 25, passMark: 26 };
// Timed practice keeps the exam pace: 60 min / 40 questions = 1.5 min per question.
export const PRACTICE_MS_PER_Q = (EXAM.minutes * 60000) / 40;

// slug = first note of the section (each chapter is a folder in notes/).
export const CHAPTERS = {
  1: {
    title: "Fundamentos de Teste",
    slug: "01-fundamentos-de-teste/01-o-que-e-teste",
  },
  2: {
    title: "Testes no Ciclo de Vida",
    slug: "02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas",
  },
  3: {
    title: "Teste Estático",
    slug: "03-teste-estatico/01-nocoes-basicas-de-teste-estatico",
  },
  4: {
    title: "Análise e Modelagem",
    slug: "04-analise-e-modelagem-de-teste/01-visao-geral-das-tecnicas",
  },
  5: {
    title: "Gerenciamento",
    slug: "05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios",
  },
  6: {
    title: "Ferramentas de Teste",
    slug: "06-ferramentas-de-teste/01-ferramentas-e-automacao",
  },
};

// Note that covers each learning objective, keyed by LO prefix. List the more
// specific prefixes first: FL-1.4.3 must match "1.4" only after "1.4.1"/"1.4.2" fail.
export const NOTES = [
  ["1.1", "01-fundamentos-de-teste/01-o-que-e-teste", "O que é teste?"],
  [
    "1.2",
    "01-fundamentos-de-teste/02-por-que-testar",
    "Por que os testes são necessários?",
  ],
  [
    "1.3",
    "01-fundamentos-de-teste/03-principios-de-teste",
    "Os sete princípios de teste",
  ],
  [
    "1.4.1",
    "01-fundamentos-de-teste/04-processo-de-teste",
    "Processo de teste",
  ],
  [
    "1.4.2",
    "01-fundamentos-de-teste/04-processo-de-teste",
    "Processo de teste",
  ],
  [
    "1.4",
    "01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis",
    "Testware, rastreabilidade e papéis",
  ],
  [
    "1.5",
    "01-fundamentos-de-teste/06-habilidades-e-independencia",
    "Habilidades, equipe completa e independência",
  ],
  [
    "2.1.3",
    "02-testes-no-ciclo-de-vida/02-abordagens-test-first",
    "TDD, ATDD e BDD",
  ],
  [
    "2.1.4",
    "02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas",
    "DevOps, shift-left e retrospectivas",
  ],
  [
    "2.1.5",
    "02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas",
    "DevOps, shift-left e retrospectivas",
  ],
  [
    "2.1.6",
    "02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas",
    "DevOps, shift-left e retrospectivas",
  ],
  [
    "2.1",
    "02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas",
    "Teste no ciclo de vida de desenvolvimento",
  ],
  ["2.2.1", "02-testes-no-ciclo-de-vida/04-niveis-de-teste", "Níveis de teste"],
  [
    "2.2",
    "02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao",
    "Tipos de teste, confirmação e regressão",
  ],
  [
    "2.3",
    "02-testes-no-ciclo-de-vida/06-teste-de-manutencao",
    "Teste de manutenção",
  ],
  [
    "3.1",
    "03-teste-estatico/01-nocoes-basicas-de-teste-estatico",
    "Noções básicas de teste estático",
  ],
  [
    "3.2.4",
    "03-teste-estatico/03-tipos-de-revisao-e-fatores-de-sucesso",
    "Tipos de revisão e fatores de sucesso",
  ],
  [
    "3.2.5",
    "03-teste-estatico/03-tipos-de-revisao-e-fatores-de-sucesso",
    "Tipos de revisão e fatores de sucesso",
  ],
  [
    "3.2",
    "03-teste-estatico/02-processo-de-revisao",
    "Feedback e processo de revisão",
  ],
  [
    "4.1",
    "04-analise-e-modelagem-de-teste/01-visao-geral-das-tecnicas",
    "Visão geral das técnicas de teste",
  ],
  [
    "4.2.1",
    "04-analise-e-modelagem-de-teste/02-particionamento-de-equivalencia",
    "Particionamento de equivalência",
  ],
  [
    "4.2.2",
    "04-analise-e-modelagem-de-teste/03-analise-de-valor-limite",
    "Análise de valor limite",
  ],
  [
    "4.2.3",
    "04-analise-e-modelagem-de-teste/04-tabela-de-decisao",
    "Teste de tabela de decisão",
  ],
  [
    "4.2.4",
    "04-analise-e-modelagem-de-teste/05-transicao-de-estado",
    "Teste de transição de estado",
  ],
  [
    "4.3",
    "04-analise-e-modelagem-de-teste/06-caixa-branca",
    "Técnicas caixa-branca",
  ],
  [
    "4.4",
    "04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia",
    "Técnicas baseadas na experiência",
  ],
  [
    "4.5",
    "04-analise-e-modelagem-de-teste/08-abordagens-colaborativas",
    "Histórias, critérios de aceite e ATDD",
  ],
  [
    "5.1.4",
    "05-gerenciamento-das-atividades-de-teste/02-tecnicas-de-estimativa",
    "Técnicas de estimativa",
  ],
  [
    "5.1.5",
    "05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes",
    "Priorização, pirâmide e quadrantes",
  ],
  [
    "5.1.6",
    "05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes",
    "Priorização, pirâmide e quadrantes",
  ],
  [
    "5.1.7",
    "05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes",
    "Priorização, pirâmide e quadrantes",
  ],
  [
    "5.1",
    "05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios",
    "Plano de teste e critérios",
  ],
  [
    "5.2",
    "05-gerenciamento-das-atividades-de-teste/04-gerenciamento-de-risco",
    "Gerenciamento de risco",
  ],
  [
    "5.3",
    "05-gerenciamento-das-atividades-de-teste/05-monitoramento-controle-e-conclusao",
    "Monitoramento, controle e conclusão",
  ],
  [
    "5.4",
    "05-gerenciamento-das-atividades-de-teste/06-gerenciamento-de-configuracao",
    "Gerenciamento de configuração",
  ],
  [
    "5.5",
    "05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos",
    "Gerenciamento de defeitos",
  ],
  [
    "6",
    "06-ferramentas-de-teste/01-ferramentas-e-automacao",
    "Ferramentas de teste e automação",
  ],
];

export const noteOf = (q) => {
  const lo = (q.lo || "").replace(/^FL-/, "");
  return NOTES.find(([p]) => lo === p || lo.startsWith(p + ".")) || null;
};

export const STORE_KEY = "ctfl-mock-exams-v1";
export const HISTORY_MAX = 30; // finished exams kept in storage
const HISTORY_SHOWN = 8; // rows on the home screen before "show all"

// Time used, with the overtime shown apart: "60:00 + 12:34".
export const fmtUsed = ({ time, limit, over }) =>
  over > 0 ? `${fmtTime(limit)} + ${fmtTime(over)}` : fmtTime(time);

const fmtDate = (ms) =>
  new Date(ms).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

// ---------- utilities ----------

export const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export const inline = (s) =>
  esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

export const chapterOf = (q) => Number((q.lo || "FL-0").slice(3, 4)) || 0;

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function fmtTime(ms) {
  // mm:ss format (minutes may exceed 60, e.g. "75:00" with extended time).
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export const sameSet = (a = [], b = []) =>
  a.length === b.length && a.every((x) => b.includes(x));

// Storage key used before the files were renamed; migrated on first load.
export const LEGACY_STORE_KEY = "ctfl-simulados-v1";

export function loadStore() {
  try {
    const legacy = localStorage.getItem(LEGACY_STORE_KEY);
    if (legacy !== null) {
      if (localStorage.getItem(STORE_KEY) === null)
        localStorage.setItem(STORE_KEY, legacy);
      localStorage.removeItem(LEGACY_STORE_KEY);
    }
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

export function saveStore(data) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: continue without persistence */
  }
}

// ---------- content rendering ----------

export function renderBlocks(blocks, imgBase) {
  let html = "";
  let list = [];
  const flush = () => {
    if (list.length)
      html += `<ul class="sim-list">${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`;
    list = [];
  };
  for (const b of blocks) {
    if (typeof b === "string") {
      flush();
      html += renderExplLine(b);
      continue;
    }
    if (b.li !== undefined) {
      list.push(b.li);
      continue;
    }
    flush();
    if (b.p !== undefined) html += `<p>${inline(b.p)}</p>`;
    else if (b.quote)
      html += `<blockquote class="sim-quote">${b.quote.map(inline).join("<br>")}</blockquote>`;
    else if (b.pre !== undefined)
      html += `<pre class="sim-pre">${esc(b.pre)}</pre>`;
    else if (b.img)
      html += `<figure class="sim-fig"><img src="${imgBase}${esc(b.img)}" alt="${esc(b.alt || "")}" loading="lazy"></figure>`;
    else if (b.table) {
      const { head, rows } = b.table;
      html += `<div class="sim-table-wrap"><table class="sim-table"><thead><tr>${head
        .map((h) => `<th>${inline(h)}</th>`)
        .join("")}</tr></thead><tbody>${rows
        .map(
          (r) =>
            `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join("")}</tr>`,
        )
        .join("")}</tbody></table></div>`;
    }
  }
  flush();
  return html;
}

export function renderExplLine(line) {
  const m = /^([a-e])\) (Correta|Incorreta)\.\s*(.*)$/.exec(line);
  if (m) {
    const ok = m[2] === "Correta";
    return `<p class="sim-expl-opt ${ok ? "is-ok" : "is-bad"}"><span class="sim-tag">${m[1]}) ${m[2]}</span> ${inline(m[3])}</p>`;
  }
  return `<p>${inline(line)}</p>`;
}

export function chapterLink(q, base) {
  const note = noteOf(q);
  if (note) return `<a href="${base}${note[1]}/">Revisar: ${esc(note[2])}</a>`;
  const ch = CHAPTERS[chapterOf(q)];
  if (!ch) return "";
  return `<a href="${base}${ch.slug}/">Revisar cap. ${chapterOf(q)}: ${esc(ch.title)}</a>`;
}

export function metaBadges(q, label) {
  return `<div class="sim-meta">
    <span class="sim-badge">${esc(label)}</span>
    ${q.lo ? `<span class="sim-badge">${esc(q.lo)}</span>` : ""}
    ${q.k ? `<span class="sim-badge sim-badge-k">${esc(q.k)}</span>` : ""}
    ${q.answer.length > 1 ? '<span class="sim-badge sim-badge-warn">Selecione DUAS opções</span>' : ""}
  </div>`;
}

export function optionsHtml(q, name, selected, reveal) {
  const multi = q.answer.length > 1;
  return `<fieldset class="sim-options" ${reveal ? "disabled" : ""}>
    <legend class="sr-only">Alternativas</legend>
    ${q.options
      .map((o) => {
        const isSel = selected.includes(o.key);
        const isAns = q.answer.includes(o.key);
        let cls = "";
        if (reveal) cls = isAns ? "is-correct" : isSel ? "is-wrong" : "is-dim";
        else if (isSel) cls = "is-selected";
        const mark = reveal
          ? isAns
            ? '<span class="sim-mark" aria-label="resposta correta">✓</span>'
            : isSel
              ? '<span class="sim-mark" aria-label="sua resposta, incorreta">✗</span>'
              : ""
          : "";
        return `<label class="sim-option ${cls}">
          <input type="${multi ? "checkbox" : "radio"}" name="${name}" value="${o.key}" ${isSel ? "checked" : ""}>
          <span class="sim-key">${o.key})</span>
          <span class="sim-text">${inline(o.text)}</span>
          ${mark}
        </label>`;
      })
      .join("")}
  </fieldset>`;
}

// ---------- app ----------

export function mount(root, data, { base = "/" } = {}) {
  const imgBase = `${base}mock-exams/`;
  const exams = Object.fromEntries(data.exams.map((e) => [e.id, e]));
  let store = loadStore();
  let state = null; // current session
  let timer = null;

  const persist = () => {
    store.session = state;
    saveStore(store);
  };

  const clearTimer = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  function questionsFor(examId, includeExtra) {
    const e = exams[examId];
    return [
      ...e.questions.map((q) => ({ ...q, label: `${e.title} · ${q.id}` })),
      ...(includeExtra
        ? e.extra.map((q) => ({
            ...q,
            label: `${e.title} · adicional ${q.id}`,
          }))
        : []),
    ];
  }

  function findQ(ref) {
    const [examId, id] = ref.split(":");
    const e = exams[examId];
    const q =
      e.questions.find((x) => x.id === id) || e.extra.find((x) => x.id === id);
    const extra = id.startsWith("A");
    return {
      ...q,
      label: extra ? `${e.title} · adicional ${id}` : `${e.title} · ${id}`,
    };
  }

  // ----- history -----

  // Entries saved before answers were stored, or that point to questions no
  // longer in the data, cannot be reviewed.
  function canReview(h) {
    if (!h.order || !h.answers || !exams[h.examId]) return false;
    return h.order.every((ref) => {
      const [examId, id] = ref.split(":");
      const e = exams[examId];
      return (
        e &&
        (e.questions.some((x) => x.id === id) ||
          e.extra.some((x) => x.id === id))
      );
    });
  }

  // Exams use the official pass mark; practice uses the same 65% on its own size.
  function resultPill(h) {
    if (h.kind === "practice") {
      const pct = Math.round((h.score / h.total) * 100);
      return `<span class="sim-pill ${pct >= 65 ? "is-ok" : "is-bad"}">${pct}%</span>`;
    }
    return h.score >= EXAM.passMark
      ? '<span class="sim-pill is-ok">Aprovado</span>'
      : '<span class="sim-pill is-bad">Reprovado</span>';
  }

  // Read-only session snapshot rendered by renderResults.
  function historyView(h) {
    return {
      mode: h.kind === "practice" ? "practice" : "exam",
      examId: h.examId,
      order: h.order,
      answers: h.answers,
      flags: h.flags || {},
      minutes: h.minutes,
      timeUp: !!h.timeUp,
      startedAt: h.date - h.time,
      finishedAt: h.date,
      finished: true,
      fromHistory: true,
      date: h.date,
      limitMs: h.limit || null,
      over: h.over || 0,
    };
  }

  // ----- home screen -----

  function renderHome() {
    clearTimer();
    const s = store.session;
    const best = store.history || [];
    root.innerHTML = `
      ${
        s && !s.finished
          ? `<div class="sim-resume">
              <p><strong>Você tem um ${s.mode === "exam" ? "simulado cronometrado" : "treino"} em andamento</strong> (${esc(exams[s.examId].title)}, ${Object.keys(s.answers).length} de ${s.order.length} respondidas).</p>
              <div class="sim-actions">
                <button class="sim-btn sim-btn-primary" data-act="resume">Continuar</button>
                <button class="sim-btn" data-act="discard">Descartar</button>
              </div>
            </div>`
          : ""
      }
      <form class="sim-setup" novalidate>
        <div class="sim-field">
          <span class="sim-label">Simulado</span>
          <div class="sim-seg">
            ${data.exams
              .map(
                (e, i) =>
                  `<label><input type="radio" name="exam" value="${e.id}" ${i === 0 ? "checked" : ""}><span>${esc(e.title)}<small>${e.questions.length} questões${e.extra.length ? ` + ${e.extra.length} adicionais` : ""}</small></span></label>`,
              )
              .join("")}
          </div>
        </div>

        <div class="sim-modes">
          <section class="sim-card">
            <h2>Treino: questão a questão</h2>
            <p>Responda uma questão por vez e veja na hora se acertou, qual é a resposta certa e a justificativa oficial de cada alternativa.</p>
            <label class="sim-check"><input type="checkbox" name="extra"> Incluir as questões adicionais (só o Simulado A tem)</label>
            <label class="sim-check"><input type="checkbox" name="shuffle"> Embaralhar a ordem</label>
            <label class="sim-check"><input type="checkbox" name="timed"> Cronometrar no ritmo da prova (1,5 min por questão)</label>
            <label class="sim-check sim-check-sub"><input type="checkbox" name="practiceExtended" disabled> Tempo estendido: +${EXAM.extraPct}%</label>
            <label class="sim-field-inline">Capítulo
              <select name="chapter">
                <option value="0">Todos</option>
                ${Object.entries(CHAPTERS)
                  .map(
                    ([n, c]) =>
                      `<option value="${n}">${n}. ${esc(c.title)}</option>`,
                  )
                  .join("")}
              </select>
            </label>
            <button type="button" class="sim-btn sim-btn-primary" data-act="start-practice">Começar treino</button>
          </section>

          <section class="sim-card">
            <h2>Prova: simulado completo</h2>
            <p>As 40 questões do simulado em ${EXAM.minutes} minutos, como na prova oficial do BSTQB. A correção aparece só no final. Para passar, é preciso acertar <strong>${EXAM.passMark} de 40</strong> (65%).</p>
            <label class="sim-check"><input type="checkbox" name="extended"> Tempo estendido: +${EXAM.extraPct}% (${Math.round(EXAM.minutes * (1 + EXAM.extraPct / 100))} min), para estrangeiros que fazem a prova em português</label>
            <button type="button" class="sim-btn sim-btn-primary" data-act="start-exam">Iniciar simulado</button>
          </section>
        </div>
      </form>

      ${
        best.length
          ? `<section class="sim-history">
              <h2>Histórico de simulados e treinos cronometrados</h2>
              <p class="sim-hint">Abra a correção de uma tentativa para ver o que você respondeu, o que acertou e o que errou em cada questão.</p>
              <div class="sim-table-wrap">
              <table class="sim-table"><thead><tr><th>Data</th><th>Simulado</th><th>Acertos</th><th>Tempo</th><th>Resultado</th><th><span class="sr-only">Correção</span></th></tr></thead><tbody>
              ${best
                .map((h, i) => ({ h, i }))
                .reverse()
                .map(
                  ({ h, i }, n) =>
                    `<tr ${n >= HISTORY_SHOWN ? 'class="sim-history-more" hidden' : ""}><td data-label="Data">${fmtDate(h.date)}</td><td data-label="Simulado">${esc(h.title)}${h.kind === "practice" ? ' <span class="sim-badge">Treino</span>' : ""}</td><td data-label="Acertos">${h.score}/${h.total}</td><td data-label="Tempo">${fmtUsed(h)}</td><td data-label="Resultado">${resultPill(h)}</td><td>${
                      canReview(h)
                        ? `<button class="sim-btn sim-btn-small" data-hist="${i}">Ver correção<span class="sr-only"> do ${esc(h.title)} de ${fmtDate(h.date)}</span></button>`
                        : '<span class="sim-muted" title="Tentativas feitas antes desta versão não guardaram as respostas">Sem respostas</span>'
                    }</td></tr>`,
                )
                .join("")}
              </tbody></table>
              </div>
              ${best.length > HISTORY_SHOWN ? `<button class="sim-btn sim-btn-small" data-act="history-all">Mostrar todos (${best.length})</button>` : ""}
            </section>`
          : ""
      }

      <p class="sim-credits">Questões e justificativas: <em>ISTQB® Certified Tester Foundation Level v4.0, Sample Exam A e B, v1.7</em>, tradução BSTQB. © International Software Testing Qualifications Board, usado para estudo não comercial com citação da fonte. Na tradução em português, algumas justificativas dizem "está correto" para alternativas erradas; aqui, o rótulo Correta/Incorreta segue o gabarito oficial.</p>
    `;

    root.querySelector('[data-act="start-practice"]').onclick = () => {
      // form.elements: named access to the fields, as in the HTML spec.
      const f = root.querySelector("form").elements;
      const examId = f.exam.value;
      const chapter = Number(f.chapter.value);
      let qs = questionsFor(examId, f.extra.checked);
      if (chapter) qs = qs.filter((q) => chapterOf(q) === chapter);
      if (!qs.length) return alert("Nenhuma questão para esse filtro.");
      if (f.shuffle.checked) qs = shuffle(qs);
      const timing = f.timed.checked
        ? {
            limitMs: Math.round(
              qs.length *
                PRACTICE_MS_PER_Q *
                (f.practiceExtended.checked ? 1 + EXAM.extraPct / 100 : 1),
            ),
          }
        : null;
      startSession("practice", examId, qs, null, timing);
    };
    const timed = root.querySelector('input[name="timed"]');
    timed.onchange = () => {
      const ext = root.querySelector('input[name="practiceExtended"]');
      ext.disabled = !timed.checked;
      if (!timed.checked) ext.checked = false;
    };
    root.querySelector('[data-act="start-exam"]').onclick = () => {
      // form.elements: named access to the fields, as in the HTML spec.
      const f = root.querySelector("form").elements;
      const examId = f.exam.value;
      const minutes = f.extended.checked
        ? Math.round(EXAM.minutes * (1 + EXAM.extraPct / 100))
        : EXAM.minutes;
      startSession("exam", examId, questionsFor(examId, false), minutes);
    };
    root.querySelectorAll("[data-hist]").forEach((b) => {
      b.onclick = () => {
        renderResults(historyView(best[Number(b.dataset.hist)]));
        root.scrollIntoView({ block: "start" });
      };
    });
    const all = root.querySelector('[data-act="history-all"]');
    if (all)
      all.onclick = () => {
        root
          .querySelectorAll(".sim-history-more")
          .forEach((tr) => (tr.hidden = false));
        all.remove();
      };
    const resume = root.querySelector('[data-act="resume"]');
    if (resume) {
      resume.onclick = () => {
        state = store.session;
        state.mode === "exam" ? renderExam() : renderPractice();
      };
      root.querySelector('[data-act="discard"]').onclick = () => {
        store.session = null;
        saveStore(store);
        renderHome();
      };
    }
  }

  // timing (practice only): { limitMs } turns on the countdown.
  function startSession(mode, examId, qs, minutes, timing = null) {
    const now = Date.now();
    state = {
      mode,
      examId,
      order: qs.map((q) => `${examId}:${q.id}`),
      index: 0,
      answers: {}, // ref -> [keys]
      checked: {}, // practice: ref -> true once graded
      flags: {},
      startedAt: now,
      deadline:
        mode === "exam"
          ? now + minutes * 60000
          : timing
            ? now + timing.limitMs
            : null,
      minutes: minutes || null,
      timed: !!timing,
      limitMs: timing ? timing.limitMs : null,
      overtime: false, // practice: chose to go on after the time ran out
      stopped: false, // practice: chose to stop when the time ran out
      finished: false,
    };
    persist();
    mode === "exam" ? renderExam() : renderPractice();
    root.scrollIntoView({ block: "start" });
  }

  function readSelection(scope) {
    return [...scope.querySelectorAll(".sim-options input:checked")]
      .map((i) => i.value)
      .sort();
  }

  function wireOptions(scope, q, onChange) {
    const multi = q.answer.length > 1;
    scope.querySelectorAll(".sim-options input").forEach((input) => {
      input.addEventListener("change", () => {
        if (multi) {
          const checked = [
            ...scope.querySelectorAll(".sim-options input:checked"),
          ];
          if (checked.length > q.answer.length) {
            // keep at most N checked: uncheck the oldest one that is not the current input
            const other = checked.find((c) => c !== input);
            if (other) other.checked = false;
          }
        }
        scope
          .querySelectorAll(".sim-option")
          .forEach((l) =>
            l.classList.toggle("is-selected", l.querySelector("input").checked),
          );
        onChange(readSelection(scope));
      });
    });
  }

  // ----- practice mode -----

  function renderPractice() {
    clearTimer();
    const total = state.order.length;
    if (state.index >= total) return renderPracticeSummary();
    const ref = state.order[state.index];
    const q = findQ(ref);
    const selected = state.answers[ref] || [];
    const checked = !!state.checked[ref];
    const correct = checked && sameSet(selected, q.answer);
    const done = Object.keys(state.checked).length;
    const hits = Object.keys(state.checked).filter((r) =>
      sameSet(state.answers[r], findQ(r).answer),
    ).length;

    root.innerHTML = `
      <div class="sim-bar ${state.timed ? "sim-bar-sticky" : ""}">
        ${
          state.timed
            ? `<span class="sim-timer" aria-live="off"><span class="sr-only">Tempo restante: </span><span data-timer>--:--</span><span class="sim-overtime" data-over hidden></span></span>`
            : ""
        }
        <span><strong>Treino</strong> · questão ${state.index + 1} de ${total}</span>
        <span>${hits} acerto${hits === 1 ? "" : "s"} em ${done} respondida${done === 1 ? "" : "s"}</span>
        <button class="sim-btn sim-btn-small" data-act="home">Sair</button>
      </div>
      <div class="sim-progress"><span style="width:${(done / total) * 100}%"></span></div>
      <article class="sim-question">
        ${metaBadges(q, q.label)}
        <div class="sim-stem">${renderBlocks(q.stem, imgBase)}</div>
        ${optionsHtml(q, "opt", selected, checked)}
        ${
          checked
            ? `<div class="sim-feedback ${correct ? "is-ok" : "is-bad"}" role="status" tabindex="-1">
                <p class="sim-verdict">${correct ? "✓ Você acertou!" : `✗ Resposta incorreta. A correta é <strong>${q.answer.join(", ")}</strong>.`}</p>
                <div class="sim-expl">${renderBlocks(q.explanation, imgBase)}</div>
                <p class="sim-review-link">${chapterLink(q, base)}</p>
              </div>`
            : ""
        }
        <div class="sim-actions">
          <button class="sim-btn" data-act="prev" ${state.index === 0 ? "disabled" : ""}>← Anterior</button>
          ${
            checked
              ? `<button class="sim-btn sim-btn-primary" data-act="next">${state.index + 1 === total ? "Ver resultado" : "Próxima →"}</button>`
              : `<button class="sim-btn sim-btn-primary" data-act="check" ${selected.length === q.answer.length ? "" : "disabled"}>Responder</button>`
          }
        </div>
        <p class="sim-hint">Atalhos: teclas <kbd>a</kbd>–<kbd>e</kbd> marcam a alternativa e <kbd>Enter</kbd> responde ou avança.</p>
      </article>
    `;

    root.querySelector('[data-act="home"]').onclick = renderHome;
    root.querySelector('[data-act="prev"]').onclick = () => {
      state.index--;
      persist();
      renderPractice();
    };
    const next = root.querySelector('[data-act="next"]');
    if (next)
      next.onclick = () => {
        state.index++;
        persist();
        renderPractice();
        root.scrollIntoView({ block: "start" });
      };
    const check = root.querySelector('[data-act="check"]');
    if (check) {
      wireOptions(root, q, (sel) => {
        state.answers[ref] = sel;
        check.disabled = sel.length !== q.answer.length;
        persist();
      });
      check.onclick = () => {
        state.answers[ref] = readSelection(root);
        state.checked[ref] = true;
        persist();
        renderPractice();
        root.querySelector(".sim-feedback")?.focus({ preventScroll: false });
      };
    }
    if (state.timed) startPracticeTimer();
  }

  // Countdown for timed practice. When it reaches zero, a dialog asks whether to
  // go on (an increasing overtime counter starts) or stop (the rest stays blank).
  function startPracticeTimer() {
    const tick = () => {
      const el = root.querySelector("[data-timer]");
      if (!el) return clearTimer();
      const left = state.deadline - Date.now();
      el.textContent = fmtTime(Math.max(0, left));
      el.parentElement.classList.toggle(
        "is-low",
        left > 0 && left <= 5 * 60000,
      );
      el.parentElement.classList.toggle("is-out", left <= 0);
      const over = root.querySelector("[data-over]");
      if (state.overtime) {
        over.hidden = false;
        over.textContent = ` + ${fmtTime(-left)}`;
        over.setAttribute("aria-label", `tempo extra ${fmtTime(-left)}`);
      }
      if (
        left <= 0 &&
        !state.overtime &&
        !root.querySelector(".sim-dialog[open]")
      )
        openTimeUpDialog();
    };
    tick();
    timer = setInterval(tick, 1000);
  }

  function openTimeUpDialog() {
    const total = state.order.length;
    const done = Object.keys(state.checked).length;
    const dialog = document.createElement("dialog");
    dialog.className = "sim-dialog";
    dialog.setAttribute("aria-labelledby", "sim-dialog-title");
    dialog.innerHTML = `
      <h2 id="sim-dialog-title">Tempo esgotado</h2>
      <p>Os ${fmtTime(state.limitMs)} do treino acabaram. Você respondeu <strong>${done} de ${total}</strong> questões.</p>
      <p>Você pode continuar e o tempo a mais será contado à parte, ou parar agora e considerar as ${total - done} restantes como não respondidas.</p>
      <div class="sim-actions">
        <button class="sim-btn sim-btn-primary" data-act="overtime">Continuar e contar o tempo extra</button>
        <button class="sim-btn" data-act="stop">Parar e ver o resultado</button>
      </div>`;
    root.append(dialog);
    // Esc must not dismiss the choice.
    dialog.addEventListener("cancel", (e) => e.preventDefault());
    dialog.querySelector('[data-act="overtime"]').onclick = () => {
      state.overtime = true;
      persist();
      dialog.close();
      dialog.remove();
    };
    dialog.querySelector('[data-act="stop"]').onclick = () => {
      state.stopped = true;
      state.finishedAt = state.deadline;
      state.index = total;
      persist();
      dialog.close();
      clearTimer();
      renderPracticeSummary();
      root.scrollIntoView({ block: "start" });
    };
    dialog.showModal();
  }

  // Only questions graded with "Responder" count; the rest is blank.
  const gradedAnswers = (s) =>
    Object.fromEntries(
      s.order.filter((r) => s.checked[r]).map((r) => [r, s.answers[r] || []]),
    );

  function practiceEntry(s) {
    const answers = gradedAnswers(s);
    const end = s.finishedAt;
    return {
      kind: "practice",
      date: end,
      title: exams[s.examId].title,
      score: s.order.filter((r) => sameSet(answers[r], findQ(r).answer)).length,
      total: s.order.length,
      time: end - s.startedAt,
      limit: s.limitMs,
      over: Math.max(0, end - s.deadline),
      examId: s.examId,
      order: s.order,
      answers,
      flags: {},
      minutes: null,
      timeUp: s.stopped,
    };
  }

  function renderPracticeSummary() {
    clearTimer();
    const refs = state.order;
    const answers = gradedAnswers(state);
    const wrong = refs.filter((r) => !sameSet(answers[r], findQ(r).answer));
    const blank = refs.filter((r) => !answers[r]).length;
    const hits = refs.length - wrong.length;
    if (!state.finished) {
      state.finished = true;
      state.finishedAt = state.finishedAt || Date.now();
      // Timed practice goes to the history, so it can be reviewed later.
      if (state.timed)
        store.history = [...(store.history || []), practiceEntry(state)].slice(
          -HISTORY_MAX,
        );
    }
    persist();
    const entry = state.timed ? practiceEntry(state) : null;
    root.innerHTML = `
      <div class="sim-score ${hits / refs.length >= 0.65 ? "is-ok" : "is-bad"}">
        <p class="sim-score-big">${hits}/${refs.length}</p>
        <p>${Math.round((hits / refs.length) * 100)}% de acertos no treino</p>
        ${
          entry
            ? `<p>${wrong.length - blank} erradas · ${blank} não respondidas · tempo ${fmtUsed(entry)}${entry.over > 0 ? " (tempo do treino + tempo extra)" : ` de ${fmtTime(entry.limit)}`}${state.stopped ? " · encerrado no fim do tempo" : ""}</p>`
            : ""
        }
      </div>
      ${byChapterTable(refs, answers)}
      <div class="sim-actions">
        ${wrong.length ? '<button class="sim-btn sim-btn-primary" data-act="redo-wrong">Refazer só as que errei</button>' : ""}
        ${entry ? '<button class="sim-btn" data-act="review">Ver correção completa</button>' : ""}
        <button class="sim-btn" data-act="home">Voltar ao início</button>
      </div>
    `;
    root.querySelector('[data-act="home"]').onclick = () => {
      store.session = null;
      saveStore(store);
      renderHome();
    };
    const redo = root.querySelector('[data-act="redo-wrong"]');
    if (redo)
      redo.onclick = () =>
        startSession("practice", state.examId, wrong.map(findQ));
    const review = root.querySelector('[data-act="review"]');
    if (review)
      review.onclick = () => {
        store.session = null;
        saveStore(store);
        renderResults(historyView(entry));
        root.scrollIntoView({ block: "start" });
      };
  }

  // ----- exam mode -----

  function renderExam() {
    clearTimer();
    if (state.finished) return renderResults();
    const total = state.order.length;
    const ref = state.order[state.index];
    const q = findQ(ref);
    const selected = state.answers[ref] || [];
    const answered = state.order.filter(
      (r) => (state.answers[r] || []).length,
    ).length;

    root.innerHTML = `
      <div class="sim-bar sim-bar-sticky">
        <span class="sim-timer" aria-live="off"><span class="sr-only">Tempo restante: </span><span data-timer>--:--</span></span>
        <span>${answered}/${total} respondidas</span>
        <button class="sim-btn sim-btn-small sim-btn-primary" data-act="finish">Finalizar</button>
      </div>
      <nav class="sim-palette" aria-label="Questões do simulado">
        ${state.order
          .map((r, i) => {
            const cls = [
              i === state.index ? "is-current" : "",
              (state.answers[r] || []).length ? "is-answered" : "",
              state.flags[r] ? "is-flagged" : "",
            ].join(" ");
            return `<button class="${cls}" data-goto="${i}" aria-label="Questão ${i + 1}${state.flags[r] ? ", marcada" : ""}${(state.answers[r] || []).length ? ", respondida" : ""}" ${i === state.index ? 'aria-current="true"' : ""}>${i + 1}</button>`;
          })
          .join("")}
      </nav>
      <article class="sim-question">
        ${metaBadges({ ...q, lo: null, k: null }, `Questão ${state.index + 1} de ${total}`)}
        <div class="sim-stem">${renderBlocks(q.stem, imgBase)}</div>
        ${optionsHtml(q, "opt", selected, false)}
        <div class="sim-actions">
          <button class="sim-btn" data-act="prev" ${state.index === 0 ? "disabled" : ""}>← Anterior</button>
          <label class="sim-check sim-flag"><input type="checkbox" data-act="flag" ${state.flags[ref] ? "checked" : ""}> Marcar para revisar</label>
          <button class="sim-btn sim-btn-primary" data-act="next" ${state.index + 1 === total ? "disabled" : ""}>Próxima →</button>
        </div>
      </article>
    `;

    wireOptions(root, q, (sel) => {
      state.answers[ref] = sel;
      persist();
      const btn = root.querySelector(`[data-goto="${state.index}"]`);
      btn.classList.toggle("is-answered", sel.length > 0);
      const count = state.order.filter(
        (r) => (state.answers[r] || []).length,
      ).length;
      root.querySelector(".sim-bar span:nth-child(2)").textContent =
        `${count}/${total} respondidas`;
    });
    root
      .querySelectorAll("[data-goto]")
      .forEach((b) => (b.onclick = () => go(Number(b.dataset.goto))));
    root.querySelector('[data-act="prev"]').onclick = () => go(state.index - 1);
    root.querySelector('[data-act="next"]').onclick = () => go(state.index + 1);
    root.querySelector('[data-act="flag"]').onchange = (e) => {
      state.flags[ref] = e.target.checked;
      persist();
      root
        .querySelector(`[data-goto="${state.index}"]`)
        .classList.toggle("is-flagged", e.target.checked);
    };
    root.querySelector('[data-act="finish"]').onclick = () => {
      const blank = state.order.filter(
        (r) => !(state.answers[r] || []).length,
      ).length;
      const flagged = state.order.filter((r) => state.flags[r]).length;
      const msg = [
        blank ? `${blank} questão(ões) em branco` : "",
        flagged ? `${flagged} marcada(s) para revisar` : "",
      ]
        .filter(Boolean)
        .join(" e ");
      if (
        confirm(
          `${msg ? `Você tem ${msg}. ` : ""}Finalizar o simulado e ver a correção?`,
        )
      )
        finishExam();
    };

    const tick = () => {
      const left = state.deadline - Date.now();
      const el = root.querySelector("[data-timer]");
      if (!el) return clearTimer();
      el.textContent = fmtTime(left);
      el.parentElement.classList.toggle("is-low", left <= 5 * 60000);
      if (left <= 0) {
        clearTimer();
        finishExam(true);
      }
    };
    tick();
    timer = setInterval(tick, 1000);
  }

  function go(i) {
    if (i < 0 || i >= state.order.length) return;
    state.index = i;
    persist();
    renderExam();
    root.querySelector(".sim-question")?.scrollIntoView({ block: "nearest" });
  }

  function finishExam(timeUp = false) {
    clearTimer();
    state.finished = true;
    state.finishedAt = Math.min(Date.now(), state.deadline);
    state.timeUp = timeUp;
    const score = state.order.filter((r) =>
      sameSet(state.answers[r], findQ(r).answer),
    ).length;
    // The answers are kept so each attempt can be reviewed later from the home screen.
    const entry = {
      kind: "exam",
      date: Date.now(),
      title: exams[state.examId].title,
      score,
      total: state.order.length,
      time: state.finishedAt - state.startedAt,
      examId: state.examId,
      order: state.order,
      answers: state.answers,
      flags: state.flags,
      minutes: state.minutes,
      timeUp: timeUp,
    };
    store.history = [...(store.history || []), entry].slice(-HISTORY_MAX);
    persist();
    renderResults();
  }

  function byChapterTable(refs, answers) {
    const rows = {};
    for (const r of refs) {
      const q = findQ(r);
      const ch = chapterOf(q);
      rows[ch] = rows[ch] || { ok: 0, total: 0 };
      rows[ch].total++;
      if (sameSet(answers[r], q.answer)) rows[ch].ok++;
    }
    return `<section class="sim-chapters">
      <h2>Desempenho por capítulo</h2>
      <table class="sim-table"><thead><tr><th>Capítulo</th><th>Acertos</th><th></th></tr></thead><tbody>
      ${Object.entries(rows)
        .sort(([a], [b]) => a - b)
        .map(([ch, v]) => {
          const pct = Math.round((v.ok / v.total) * 100);
          const c = CHAPTERS[ch];
          return `<tr><th scope="row">${c ? `<a href="${base}${c.slug}/">${ch}. ${esc(c.title)}</a>` : "-"}</th><td>${v.ok}/${v.total}</td><td><span class="sim-meter ${pct >= 65 ? "is-ok" : "is-bad"}" style="--pct:${pct}%" role="img" aria-label="${pct}%"></span></td></tr>`;
        })
        .join("")}
      </tbody></table>
    </section>`;
  }

  function renderResults(view = null) {
    clearTimer();
    // view: a read-only snapshot from the history; otherwise the current session.
    const s = view || state;
    const refs = s.order;
    const status = (r) => {
      const a = s.answers[r] || [];
      if (!a.length) return "blank";
      return sameSet(a, findQ(r).answer) ? "ok" : "bad";
    };
    const score = refs.filter((r) => status(r) === "ok").length;
    const blank = refs.filter((r) => status(r) === "blank").length;
    const isExam = s.mode === "exam";
    const passed = isExam
      ? score >= EXAM.passMark
      : score / refs.length >= 0.65;
    const used = (s.finishedAt || Date.now()) - s.startedAt;

    root.innerHTML = `
      ${
        s.fromHistory
          ? `<div class="sim-bar">
              <span><strong>Histórico</strong> · ${esc(exams[s.examId].title)} · ${fmtDate(s.date)}</span>
              <button class="sim-btn sim-btn-small" data-act="home">← Voltar</button>
            </div>`
          : ""
      }
      <div class="sim-score ${passed ? "is-ok" : "is-bad"}">
        <p class="sim-score-big">${score}/${refs.length}</p>
        ${
          isExam
            ? `<p><strong>${passed ? "Aprovado" : "Reprovado"}</strong> · ${Math.round((score / refs.length) * 100)}% (mínimo: ${EXAM.passMark} acertos)</p>
        <p>${refs.length - score - blank} erradas · ${blank} em branco · tempo usado ${fmtTime(used)} de ${s.minutes} min${s.timeUp ? " (tempo esgotado)" : ""}</p>`
            : `<p><strong>Treino cronometrado</strong> · ${Math.round((score / refs.length) * 100)}% de acertos</p>
        <p>${refs.length - score - blank} erradas · ${blank} não respondidas · tempo ${fmtUsed({ time: used, limit: s.limitMs, over: s.over })}${s.over > 0 ? " (tempo do treino + tempo extra)" : ` de ${fmtTime(s.limitMs)}`}${s.timeUp ? " · encerrado no fim do tempo" : ""}</p>`
        }
      </div>
      ${byChapterTable(refs, s.answers)}
      <section class="sim-review">
        <h2>Correção</h2>
        <div class="sim-seg sim-filter" role="group" aria-label="Filtrar correção">
          <label><input type="radio" name="filter" value="all" checked><span>Todas</span></label>
          <label><input type="radio" name="filter" value="bad"><span>${isExam ? "Erradas e em branco" : "Erradas e não respondidas"} (${refs.length - score})</span></label>
          ${isExam ? '<label><input type="radio" name="filter" value="flag"><span>Marcadas</span></label>' : ""}
        </div>
        <ol class="sim-review-list">
          ${refs
            .map((r, i) => {
              const q = findQ(r);
              const st = status(r);
              const sel = s.answers[r] || [];
              return `<li class="sim-review-item is-${st}" data-status="${st}" data-flag="${s.flags[r] ? 1 : 0}">
                <details ${st !== "ok" ? "open" : ""}>
                  <summary>
                    <span class="sim-pill ${st === "ok" ? "is-ok" : "is-bad"}">${st === "ok" ? "✓ Certa" : st === "bad" ? "✗ Errada" : isExam ? "○ Em branco" : "○ Não respondida"}</span>
                    <span>Questão ${i + 1}</span>
                    <span class="sim-review-ans">sua: <strong>${sel.length ? sel.join(", ") : "-"}</strong> · correta: <strong>${q.answer.join(", ")}</strong></span>
                    ${s.flags[r] ? '<span class="sim-badge">marcada</span>' : ""}
                  </summary>
                  ${metaBadges(q, q.label)}
                  <div class="sim-stem">${renderBlocks(q.stem, imgBase)}</div>
                  ${optionsHtml(q, `rev-${i}`, sel, true)}
                  <div class="sim-feedback ${st === "ok" ? "is-ok" : "is-bad"}">
                    <div class="sim-expl">${renderBlocks(q.explanation, imgBase)}</div>
                    <p class="sim-review-link">${chapterLink(q, base)}</p>
                  </div>
                </details>
              </li>`;
            })
            .join("")}
        </ol>
      </section>
      <div class="sim-actions">
        ${score < refs.length ? '<button class="sim-btn sim-btn-primary" data-act="train-wrong">Treinar as que errei</button>' : ""}
        <button class="sim-btn" data-act="again">${isExam ? "Refazer o simulado" : "Refazer o treino"}</button>
        <button class="sim-btn" data-act="home">${s.fromHistory ? "Voltar ao histórico" : "Voltar ao início"}</button>
      </div>
    `;

    root.querySelectorAll('input[name="filter"]').forEach((input) =>
      input.addEventListener("change", () => {
        const v = input.value;
        root.querySelectorAll(".sim-review-item").forEach((li) => {
          li.hidden =
            v === "bad"
              ? li.dataset.status === "ok"
              : v === "flag"
                ? li.dataset.flag !== "1"
                : false;
        });
      }),
    );
    const examId = s.examId;
    const minutes = s.minutes;
    const wrong = refs.filter((r) => status(r) !== "ok").map(findQ);
    const leave = () => {
      store.session = null;
      saveStore(store);
    };
    root.querySelectorAll('[data-act="home"]').forEach(
      (b) =>
        (b.onclick = () => {
          // A history view must not discard the session in progress.
          if (!s.fromHistory) leave();
          renderHome();
          if (s.fromHistory)
            root
              .querySelector(".sim-history")
              ?.scrollIntoView({ block: "start" });
        }),
    );
    // Starting from a history view replaces any unfinished session, so ask first.
    const okToReplace = () =>
      !s.fromHistory ||
      !store.session ||
      store.session.finished ||
      confirm(
        "Isso descarta o treino ou simulado que está em andamento. Continuar?",
      );
    root.querySelector('[data-act="again"]').onclick = () =>
      okToReplace() &&
      (isExam
        ? startSession("exam", examId, questionsFor(examId, false), minutes)
        : startSession("practice", examId, refs.map(findQ), null, {
            limitMs: s.limitMs,
          }));
    const train = root.querySelector('[data-act="train-wrong"]');
    if (train)
      train.onclick = () =>
        okToReplace() && startSession("practice", examId, wrong);
  }

  // ----- keyboard (practice and exam) -----

  document.addEventListener("keydown", (e) => {
    if (!state || state.finished || e.ctrlKey || e.metaKey || e.altKey) return;
    if (
      !root.querySelector(".sim-question") ||
      root.querySelector(".sim-dialog[open]")
    )
      return;
    if (
      e.target.matches(
        'select, textarea, input[type="text"], input[type="search"]',
      )
    )
      return;
    const key = e.key.toLowerCase();
    if (/^[a-e]$/.test(key)) {
      const input = root.querySelector(
        `.sim-options:not([disabled]) input[value="${key}"]`,
      );
      if (input) {
        input.checked = input.type === "checkbox" ? !input.checked : true;
        input.dispatchEvent(new Event("change"));
        e.preventDefault();
      }
    } else if (
      e.key === "Enter" &&
      state.mode === "practice" &&
      !e.target.matches("button, summary, a")
    ) {
      const btn = root.querySelector(
        '[data-act="check"]:not([disabled]), [data-act="next"]',
      );
      if (btn) {
        btn.click();
        e.preventDefault();
      }
    }
  });

  renderHome();
}
