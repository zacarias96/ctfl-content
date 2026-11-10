# AGENTS.md

Guidance for coding agents working in this repository.

## Project

Study notes in Brazilian Portuguese for the **ISTQB® CTFL 4.0** certification, published as a static site with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) at https://zacarias96.github.io/ctfl-content/ (base path `/ctfl-content`). The site also has an interactive mock exam page at `/mock-exams/`.

## Language convention

Keep this split strict, for consistency:

| English                                                              | Portuguese (pt-BR)                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| Code, identifiers, CSS classes, JSON keys, data attributes           | Everything the reader sees: UI text, labels, messages         |
| File and folder names (except notes)                                 | Note folder and file names in `notes/` (e.g. `03-teste-estatico/01-nocoes-basicas-de-teste-estatico.md`) |
| Code comments, config files, workflow names                          | Note content, `README.md` and `notes/index.md`                |
| Commit messages (Conventional Commits, e.g. `feat(mock-exams): ...`) | Sidebar labels (`sidebar.json`, note frontmatter)             |

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
| `notes/index.md`                | Site home page: scope of each section.                                             |
| `notes/<NN-section>/`           | One folder per syllabus chapter; each `NN-name.md` is a page, ordered by prefix.   |
| `sidebar.json`                  | Order and labels of the sections (folders); optional `links` (e.g. mock exams).    |
| `astro.config.mjs`              | Site config. Builds the sidebar from `sidebar.json` and the files in each folder.  |
| `src/content.config.ts`         | Loads the Starlight docs collection from `notes/` instead of `src/content/docs`.   |
| `plugins/remark-note-links.mjs` | Rewrites relative links between notes (`../01-.../03-...md#anchor`) into routes.   |
| `src/pages/mock-exams.astro`    | Mock exam page, rendered inside `StarlightPage`.                                   |
| `src/scripts/mock-exams.js`     | Mock exam app (vanilla JS, no dependencies): practice mode and timed exam mode.    |
| `src/styles/mock-exams.css`     | Mock exam styles.                                                                  |
| `src/data/mock-exams.json`      | Questions, answer keys and explanations for sample exams A and B.                  |
| `public/mock-exams/`            | Diagrams referenced by the questions.                                              |
| `references/`                   | Reference material: `ctfl-4.0-syllabus-pt-br.pdf` (CTFL 4.0 syllabus, BSTQB pt-BR). |
| `.claude/skills/exam-performance/` | Skill that turns per-LO exam results into a study map. `data/lo-catalog.json` holds the official LO groups (ISTQB exam structure tables), syllabus pages and note paths; reports go to `reports/` (gitignored). |

## Notes

- One note per syllabus section (or a small group of sections). A new note goes in its chapter folder with the next numeric prefix; if it lands mid-sequence, renumber the following files and fix every link to them. A new folder also needs an entry in `sidebar.json`.
- Frontmatter: `title`, `description`, `sidebar.label`. No H1 in the body (Starlight renders the title).
- Titles and labels carry no ordinal numbering (no `1.` or `1.1` prefixes) in note frontmatter or in `sidebar.json`. Order comes only from the numeric file/folder prefixes and the order of entries in `sidebar.json`. Descriptions keep their syllabus section reference, e.g. `(seção 1.1)`. Order comes only from the numeric file/folder prefixes and the order of entries in `sidebar.json`.
- Note layout: a quote with the syllabus section (and exam weight when relevant), `## Objetivos de aprendizagem` (LO codes and K-levels), `## Palavras-chave` (term, official definition from the [ISTQB glossary (pt-BR)](https://glossary.istqb.org/pt-br/search/), plain-language explanation), the content, worked exercises for K3 objectives, `## Teste seu conhecimento` (answers inside `<details>`) and `## Referências` (pt-BR sources when available).
- Link between notes with relative `.md` paths including the numeric prefix (`[Princípios](../01-fundamentos-de-teste/03-principios-de-teste.md)`), so they work both on GitHub and on the site.
- Diagrams use Mermaid code blocks (rendered client-side by `astro-mermaid`). Avoid `<` inside Mermaid labels.
- Writing: pt-BR, beginner-friendly, no em dash (use a hyphen or comma), no `---` separators outside frontmatter, no "Resumo"/"Conclusão" section at the end.
- Content follows the CTFL 4.0 syllabus (BSTQB translation). Cite sources, and quote ISTQB material only for non-commercial study, as its terms allow.

## Mock exams

- Exam rules live in `EXAM` in `src/scripts/mock-exams.js`: 60 minutes, 40 questions, pass mark 26, +25% time for foreigners taking the exam in Portuguese (per https://bstqb.online/ctfl).
- Data shape: `exams[] -> { id, title, version, questions[], extra[] }`. Each question has `id`, `stem` (blocks), `options[{ key, text }]`, `answer[]` (two keys for "select TWO" questions), `lo`, `k` and `explanation[]`. Stem and explanation blocks are `{ p }`, `{ li }`, `{ quote: [] }`, `{ pre }`, `{ img, alt }` or `{ table: { head, rows } }`; explanation entries can also be plain strings.
- `src/data/mock-exams.json` was extracted from the official sample exam PDFs (v1.7, BSTQB translation). Those PDFs are not tracked in git. The pt-BR translation has errors, so option verdicts are normalized to `x) Correta.` / `x) Incorreta.` from the official answer key, which is the source of truth.
- Review links: each question links to the note that covers its learning objective, through the `NOTES` map (LO prefix -> note path) in `src/scripts/mock-exams.js`. `CHAPTERS[].slug` points to the first note of each chapter (used by the per-chapter score table). Update both, and the `note` fields in `.claude/skills/exam-performance/data/lo-catalog.json`, when notes are renamed or moved.
- Progress and history are stored in `localStorage` under `ctfl-mock-exams-v1`. Every access goes through `try/catch`, and the page must work without storage.

## Styling

- Use Starlight color tokens (`--sl-color-*`), so pages follow light and dark themes. In Starlight's light theme, `--sl-color-white` is near-black and `--sl-color-black` is white.
- The mock exam container has Starlight's `.not-content` class, which turns off the automatic Markdown spacing inside it. Base element styles use `:where(#mock-exam-app)` (zero specificity) so `.sim-*` classes can override them. Do not reintroduce blanket margin resets.
- Keep text contrast at 4.5:1 or higher, including on colored buttons.
