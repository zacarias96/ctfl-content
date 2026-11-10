---
name: exam-performance
description: Analisa o resultado de uma prova CTFL 4.0 a partir da lista de percentuais por objetivo de aprendizagem (ex. "LO 1.2.1: 0.00% LO 1.3.1: 100.00% ..."), cruza com a estrutura oficial do exame da ISTQB, o syllabus em references/ e as notas deste repositório, e gera um levantamento de desempenho com os pontos a aprofundar e um mapa de estudos priorizado para um futuro exame. Use quando a pessoa colar ou indicar um arquivo com resultados por LO, pedir para avaliar o desempenho na prova ou pedir um plano de estudos baseado no resultado. Parâmetro obrigatório: os resultados (texto colado ou caminho de arquivo). Parâmetros opcionais: data do próximo exame e horas de estudo por semana.
---

# Levantamento de desempenho CTFL 4.0

O relatório pós-prova da CTFL não mostra as questões nem o gabarito. Ele mostra só o percentual de acerto por **objetivo de aprendizagem (LO)**. Esta skill transforma essa lista num diagnóstico e num mapa de estudos que aponta o que aprofundar, em que ordem e com qual material deste repositório.

## O que a skill sabe sobre a prova

Os dados ficam em `data/lo-catalog.json` e vêm da estrutura oficial **ISTQB Exam Structure and Rules Tables v1.18 (27/05/2026), CTFL v4.0**:

- 40 questões, nota de corte 26 (65%), 60 minutos (75 com tempo extra).
- Distribuição por nível: 8 K1, 24 K2, 8 K3. Por capítulo: 8, 6, 4, 11, 9, 2.
- Os 64 LOs estão reunidos em **29 grupos**. Cada grupo sorteia um número fixo de questões entre os seus LOs. Exemplos: o grupo `FL-4.2.1 a 4.2.4 + FL-4.5.3` (K3) sempre rende 5 questões; o grupo `FL-1.4.1 a 1.4.5` rende 3; o grupo `FL-5.1.2, 5.1.6, 5.2.1, 5.3.1` rende só 1.
- Consequência prática: um LO que **não apareceu** na lista não foi avaliado, mas pode ser sorteado na próxima prova no lugar de um LO "irmão" do mesmo grupo. Esses são pontos cegos, não pontos fortes.
- Cada LO tem a página do syllabus (`references/ctfl-4.0-syllabus-pt-br.pdf`, página física do PDF), a nota que o cobre em `notes/` e as questões dos simulados A e B (`src/data/mock-exams.json`) com o mesmo LO.

## Fluxo

### 1. Receber os resultados

- Aceite texto colado ou um caminho de arquivo. O formato esperado é `LO x.y.z: NN.NN%`, em qualquer quebra de linha; também aceita `FL-x.y.z`.
- Se a pessoa não informou, pergunte uma única vez (com `AskUserQuestion`) quanto tempo falta para o próximo exame e quantas horas por semana ela pode estudar. Se ela não souber ou preferir não dizer, use **4 semanas com 5 horas por semana** e deixe essa suposição escrita no relatório.

### 2. Rodar a análise

Grave o texto num arquivo temporário (scratchpad) e rode, a partir da raiz do repositório:

```bash
python -I .claude/skills/exam-performance/scripts/analyze.py --input <arquivo> --repo .
```

Use `--json` quando precisar dos números em formato estruturado. O script:

- deduz quantas questões cada LO teve pelo percentual (100% ou 0% = 1 questão, 50% = 2 questões, 33,33% = 3 questões, e assim por diante);
- soma acertos, compara com a nota de corte e quebra o resultado por capítulo, por nível K e por grupo oficial;
- dá a cada um dos 64 LOs uma **prioridade** = questões esperadas por LO na prova (questões do grupo / LOs do grupo) x peso do resultado (errou 1,0; parcial 0,7; não sorteado num grupo onde houve erro 0,6; não sorteado 0,4; acertou 0,15), com 20% a mais para K3 não acertado;
- lista avisos (LO inexistente, total diferente de 40, grupo com mais questões que o previsto).

Leia os avisos antes de seguir. Se o total não fechar em 40, confirme com a pessoa se a lista foi colada inteira.

### 3. Interpretar com cuidado

Antes de escrever, tire do resultado os padrões que os números sozinhos não contam:

- **Uma questão por LO.** Na maioria dos LOs o resultado é 0% ou 100% de uma única questão. Um acerto isolado pode ter sido chute (1 em 4) e um erro isolado pode ter sido distração. Conclusões por **capítulo**, **nível K** e **grupo** são mais confiáveis que por LO; diga isso no relatório.
- **Nível K mais fraco.** Erros em K1 indicam vocabulário e definições (glossário, palavras-chave). Erros em K2 indicam diferenças entre conceitos parecidos (comparar, distinguir, classificar). Erros em K3 indicam falta de prática nos cálculos e na aplicação das técnicas.
- **Onde estão os pontos mais baratos.** Os grupos K3 (`G4.5` com 5 questões e `G5.7` com 3) aparecem inteiros em toda prova e respondem bem a treino deliberado. Um erro ali vale mais que um erro num grupo K1 de 4 LOs que sorteia 1 questão.
- **Grupos com erro.** Se a pessoa errou um LO de um grupo, os LOs irmãos não sorteados merecem atenção junto, porque costumam tratar de assuntos próximos.
- **Distância da nota de corte.** Calcule quantas questões a mais seriam necessárias e mostre de onde elas podem vir de forma realista (por exemplo: "recuperar 2 das 3 questões K3 erradas e 1 de K2 no capítulo 5"). Recomende mirar uma margem de segurança, de 30 acertos ou mais nos simulados.

### 4. Levantar o conteúdo de cada ponto a aprofundar

Para cada LO de prioridade alta e média (todos os errados e os não sorteados de grupos com erro, no mínimo):

1. Leia a nota indicada no catálogo e identifique as seções (`##`/`###`) que cobrem o LO, as palavras-chave da seção e os exercícios do "Teste seu conhecimento".
2. Quando a nota não for suficiente para detalhar o tema, leia a página do syllabus com `Read` (`pages: "<página>"`) em `references/ctfl-4.0-syllabus-pt-br.pdf`.
3. Consulte também as notas de revisão quando o tema aparecer nelas: `notes/07-revisao-para-a-prova/02-pares-que-confundem.md` (K2), `03-roteiro-de-calculos.md` (K3) e `04-glossario-de-apoio.md` (K1).
4. Anote, em uma ou duas linhas por LO, **o que exatamente revisar** (os subtemas e as confusões típicas), não apenas o título do objetivo.
5. Liste as questões dos simulados com o mesmo LO para treino no modo prática (`/ctfl-content/mock-exams/`). As identificações vêm do script: `A20` é a questão 20 do Simulado A; `extra A2` é uma questão adicional do Simulado A.

Pesquise na internet só se faltar algo que nem a nota nem o syllabus cobrem, priorizando fontes oficiais (ISTQB, BSTQB) e conteúdo em pt-BR.

### 5. Montar o mapa de estudos

Distribua o tempo disponível em fases, nesta ordem:

| Fase | Foco                                                          | Como estudar                                                                                                                          |
| ---- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | LOs errados com maior prioridade, começando pelos K3          | Refazer os exemplos da nota no papel, resolver as questões de simulado do LO, explicar a resposta em voz alta                         |
| 2    | LOs não sorteados de grupos com erro e LOs errados restantes  | Ler a seção da nota, responder o "Teste seu conhecimento" sem abrir a resposta, revisar os pares que confundem                        |
| 3    | Demais LOs não sorteados e palavras-chave K1 de cada capítulo | Leitura ativa e flashcards com as definições do glossário                                                                             |
| 4    | Consolidação                                                  | Simulados A e B completos no modo prova cronometrado, revisão dos erros pelos links de cada questão, revisão rápida dos LOs acertados |

Regras para o cronograma:

- Use a data e as horas informadas. Divida em semanas (ou dias, se faltar menos de duas semanas) e dê a cada bloco os LOs, a nota, o syllabus e as questões de simulado.
- Reserve cerca de 40% do tempo para a fase 1, 25% para a fase 2, 15% para a fase 3 e 20% para a fase 4. Ajuste se houver poucos itens numa fase.
- Os capítulos 4 e 5 somam 20 das 40 questões. Se estiverem abaixo de 65%, eles recebem a maior parte do tempo, mesmo que outro capítulo tenha percentual menor com menos questões.
- Termine o plano com critérios objetivos de prontidão: 30 ou mais acertos em cada simulado no modo prova, nenhum capítulo abaixo de 60% e todos os LOs da fase 1 acertados em duas tentativas seguidas.

### 6. Gerar o relatório

Salve em `reports/AAAA-MM-DD-exam-performance.md` (data de hoje). A pasta `reports/` está no `.gitignore`, porque o resultado é pessoal. Estrutura:

1. Título `# Levantamento de desempenho CTFL 4.0` e uma linha com a data e a fonte dos dados.
2. `## Resultado geral`, `## Por capítulo` e `## Por nível cognitivo`: tabelas do script, com um gráfico Mermaid opcional (`xychart-beta` com o aproveitamento por capítulo e uma linha de 65%).
3. `## Diagnóstico`: de 4 a 6 observações com base no passo 3, incluindo a ressalva sobre uma questão por LO.
4. `## Pontos a aprofundar`: dividido em `### Prioridade alta`, `### Prioridade média` e `### Manter`. Em cada item: código e título do LO, nível K, resultado, o que revisar (passo 4), link para a nota (`../notes/...`), página do syllabus e questões de simulado.
5. `## Mapa de estudos`: tabela por semana ou dia (passo 5), com as suposições de tempo explícitas.
6. `## Como acompanhar o progresso`: critérios de prontidão e um checklist (`- [ ]`) dos LOs das fases 1 e 2.
7. `## Dados completos`: a tabela de grupos e a tabela de prioridades geradas pelo script.

No chat, responda com o placar, os três pontos mais críticos, a meta de acertos e o link para o arquivo.

## Escrita

- pt-BR, linguagem simples e encorajadora, sem julgamento.
- Sem travessão (use hífen ou vírgula), sem `---` como separador, sem seção chamada "Resumo" ou "Conclusão".
- Use os termos do glossário ISTQB em pt-BR, iguais aos das notas.
- O relatório é um levantamento de desempenho e um plano para o próximo exame. Não suponha nem comente se a pessoa foi aprovada ou reprovada além do que o placar mostra.

## Manutenção

- Quando a ISTQB publicar uma nova versão das tabelas de estrutura do exame, confira os grupos e as quantidades em `data/lo-catalog.json` (campo `groups`) e atualize `source.structure`.
- Se notas forem renomeadas ou movidas, atualize o campo `note` de cada LO, seguindo o mapa `NOTES` de `src/scripts/mock-exams.js`.
- As páginas do syllabus (`syllabus_page`) são páginas físicas do PDF em `references/`; se o PDF for trocado, revise-as.
