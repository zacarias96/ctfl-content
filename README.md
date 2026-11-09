# CTFL Content

Notas de estudo em português para a certificação **ISTQB® CTFL 4.0** (Certified Tester Foundation Level), publicadas como site em https://zacarias96.github.io/ctfl-content/.

O conteúdo fica em [`notes/`](notes/README.md), em Markdown puro, e pode ser lido direto no GitHub. O site é gerado com [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Rodando localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321/ctfl-content/.

## Estrutura

| Caminho | O que é |
|---|---|
| `notes/` | As notas. O `README.md` vira a página inicial do site e cada arquivo vira uma página. |
| `astro.config.mjs` | Configuração do site, incluindo a ordem da sidebar. |
| `src/content.config.ts` | Diz ao Starlight para ler as notas de `notes/`. |
| `plugins/remark-note-links.mjs` | Converte links entre notas (`01-fundamentos-de-teste.md#...`) em rotas do site. |
| `src/pages/mock-exams.astro` | Página dos simulados (`/mock-exams/`). |
| `src/scripts/mock-exams.js`, `src/styles/mock-exams.css` | Lógica e estilos dos simulados (modos treino e prova). |
| `src/data/mock-exams.json` | Questões, gabarito e justificativas dos simulados A e B. |
| `public/mock-exams/` | Diagramas usados nas questões. |
| `.github/workflows/deploy.yml` | Publica o site no GitHub Pages a cada push na `main`. |

## Adicionando uma nota

1. Crie o arquivo em `notes/` com o frontmatter:

   ```md
   ---
   title: "Título da página"
   sidebar:
     label: "Rótulo curto na sidebar"
   ---
   ```

2. Inclua o nome do arquivo (sem `.md`) na `sidebar` de `astro.config.mjs`.
