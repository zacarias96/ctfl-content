# CTFL Content

Notas de estudo em português para a certificação **ISTQB® CTFL 4.0** (Certified Tester Foundation Level), publicadas como site em https://zacarias96.github.io/ctfl-content/.

O conteúdo fica em [`notes/`](notes/index.md), em Markdown, e pode ser lido direto no GitHub. O site é gerado com [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), com diagramas [Mermaid](https://mermaid.js.org) renderizados pelo [astro-mermaid](https://github.com/joesaby/astro-mermaid).

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
| `notes/index.md` | Página inicial do site, com o escopo de cada seção. |
| `notes/<NN-secao>/` | Uma pasta por capítulo do syllabus. Cada arquivo `NN-nome.md` vira uma página, e o prefixo numérico define a ordem dentro da seção. |
| `sidebar.json` | Ordem e rótulo das seções (pastas) na barra lateral. |
| `astro.config.mjs` | Configuração do site. Monta a sidebar a partir do `sidebar.json`. |
| `src/content.config.ts` | Diz ao Starlight para ler as notas de `notes/`. |
| `plugins/remark-note-links.mjs` | Converte links relativos entre notas (`../01-fundamentos-de-teste/03-principios-de-teste.md#...`) em rotas do site. |
| `src/pages/mock-exams.astro` | Página dos simulados (`/mock-exams/`). |
| `src/scripts/mock-exams.js`, `src/styles/mock-exams.css` | Lógica e estilos dos simulados (modos treino e prova). O mapa `NOTES` em `mock-exams.js` liga cada objetivo de aprendizagem (FL-x.y.z) à nota que o cobre; se uma nota for renomeada, atualize esse mapa. |
| `src/data/mock-exams.json` | Questões, gabarito e justificativas dos simulados A e B. |
| `public/mock-exams/` | Diagramas usados nas questões. |
| `references/` | Material de consulta. `ctfl-4.0-syllabus-pt-br.pdf` é o syllabus CTFL 4.0 na tradução do BSTQB. |
| `.claude/skills/exam-performance/` | Skill do Claude Code (`/exam-performance`) que analisa o resultado da prova por objetivo de aprendizagem e monta um mapa de estudos. Os relatórios ficam em `reports/`, fora do git. |
| `.github/workflows/deploy.yml` | Publica o site no GitHub Pages a cada push na `main`. |

## Padrão das notas

Cada nota corresponde a uma seção (ou a um grupo pequeno de seções) do syllabus e segue a mesma estrutura:

1. Frontmatter com `title`, `description` e `sidebar.label`.
2. Aviso com a seção do syllabus e, quando relevante, o peso na prova.
3. `## Objetivos de aprendizagem`, com códigos FL-x.y.z e níveis K, e as palavras-chave da seção.
4. Conteúdo didático, com exemplos, tabelas e diagramas Mermaid.
5. Exercícios resolvidos nas notas de nível K3.
6. `## Teste seu conhecimento`, com respostas dentro de `<details>`.
7. `## Referências`, com fontes em português sempre que possível.

## Adicionando uma nota

1. Crie o arquivo na pasta da seção, com o próximo prefixo numérico (ex.: `notes/04-analise-e-modelagem-de-teste/09-nova-nota.md`). Se entrar no meio da sequência, renumere os arquivos seguintes e corrija os links que apontam para eles.
2. Comece com o frontmatter:

   ```md
   ---
   title: "Título da página"
   description: "Uma ou duas frases sobre o conteúdo."
   sidebar:
     label: "Rótulo curto na sidebar"
   ---
   ```

3. Para linkar outra nota, use o caminho relativo do arquivo `.md`, com o prefixo numérico: `[Princípios](../01-fundamentos-de-teste/03-principios-de-teste.md)`. O link funciona no GitHub e o plugin converte para a rota do site.

Uma seção nova (pasta) também precisa entrar no `sidebar.json`.
