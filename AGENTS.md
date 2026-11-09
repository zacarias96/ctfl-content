# AGENTS.md

Guidance for coding agents working in this repository.

## Project

Study notes in Brazilian Portuguese for the **ISTQB® CTFL 4.0** certification, published as a static site with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) at https://zacarias96.github.io/ctfl-content/ (base path `/ctfl-content`). The site also has an interactive mock exam page at `/mock-exams/`.

## Language convention

Keep this split strict, for consistency:

| English                                                              | Portuguese (pt-BR)                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| Code, identifiers, CSS classes, JSON keys, data attributes           | Everything the reader sees: UI text, labels, messages         |
| File and folder names (except notes)                                 | Note file names in `notes/` (e.g. `03-teste-estatico.md`)     |
| Code comments, config files, workflow names                          | Note content and the READMEs (`README.md`, `notes/README.md`) |
| Commit messages (Conventional Commits, e.g. `feat(mock-exams): ...`) | Sidebar labels in `astro.config.mjs`                          |

Page file names become URLs, so new pages also get English names.

## Commands

Requires Node.js 22 or newer (CI uses 24).

```bash
npm install
npm run dev      # http://localhost:4321/ctfl-content/
npm run build    # output in dist/
```

There is no test suite. Validate changes with `npm run build`, and check UI changes in the browser in both light and dark themes and at phone width.

Deploys run on every push to `main` (`.github/workflows/deploy.yml`, GitHub Pages).

## Structure

| Path                            | Purpose                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `notes/`                        | The notes (plain Markdown, readable on GitHub). `README.md` is the site home page. |
| `astro.config.mjs`              | Site config and sidebar order. New notes must be added to `sidebar`.               |
| `src/content.config.ts`         | Loads the Starlight docs collection from `notes/` instead of `src/content/docs`.   |
| `plugins/remark-note-links.mjs` | Rewrites relative links between notes (`01-...md#anchor`) into site routes.        |
| `src/pages/mock-exams.astro`    | Mock exam page, rendered inside `StarlightPage`.                                   |
| `src/scripts/mock-exams.js`     | Mock exam app (vanilla JS, no dependencies): practice mode and timed exam mode.    |
| `src/styles/mock-exams.css`     | Mock exam styles.                                                                  |
| `src/data/mock-exams.json`      | Questions, answer keys and explanations for sample exams A and B.                  |
| `public/mock-exams/`            | Diagrams referenced by the questions.                                              |

## Notes

- Each note starts with frontmatter (`title`, `sidebar.label`).
- Link between notes with relative `.md` links (`[Cap. 4](04-analise-e-modelagem-de-teste.md)`) so they work both on GitHub and on the site.
- Each chapter opens with a **Palavras-chave (K1)** table: term, official definition from the [ISTQB glossary (pt-BR)](https://glossary.istqb.org/pt_BR/), and a plain-language explanation.
- Content follows the CTFL 4.0 syllabus (BSTQB translation). Cite sources, and quote ISTQB material only for non-commercial study, as its terms allow.

## Mock exams

- Exam rules live in `EXAM` in `src/scripts/mock-exams.js`: 60 minutes, 40 questions, pass mark 26, +25% time for foreigners taking the exam in Portuguese (per https://bstqb.online/ctfl).
- Data shape: `exams[] -> { id, title, version, questions[], extra[] }`. Each question has `id`, `stem` (blocks), `options[{ key, text }]`, `answer[]` (two keys for "select TWO" questions), `lo`, `k` and `explanation[]`. Stem and explanation blocks are `{ p }`, `{ li }`, `{ quote: [] }`, `{ pre }`, `{ img, alt }` or `{ table: { head, rows } }`; explanation entries can also be plain strings.
- `src/data/mock-exams.json` was extracted from the official sample exam PDFs (v1.7, BSTQB translation). Those PDFs are not tracked in git. The pt-BR translation has errors, so option verdicts are normalized to `x) Correta.` / `x) Incorreta.` from the official answer key, which is the source of truth.
- Progress and history are stored in `localStorage` under `ctfl-mock-exams-v1`. Every access goes through `try/catch`, and the page must work without storage.

## Styling

- Use Starlight color tokens (`--sl-color-*`), so pages follow light and dark themes. In Starlight's light theme, `--sl-color-white` is near-black and `--sl-color-black` is white.
- The mock exam container has Starlight's `.not-content` class, which turns off the automatic Markdown spacing inside it. Base element styles use `:where(#mock-exam-app)` (zero specificity) so `.sim-*` classes can override them. Do not reintroduce blanket margin resets.
- Keep text contrast at 4.5:1 or higher, including on colored buttons.
