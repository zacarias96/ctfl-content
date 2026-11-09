---
title: "Dicas de Prova e Revisão Final"
sidebar:
  label: "Dicas de Prova"
---

## Temas que mais se repetem nos simulados oficiais

Levantamento feito no repositório [Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP) a partir dos simulados oficiais A, B, C e D:

| Tema                                              | Onde estudar                                                                                                                                                                                       | Frequência        |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Objetivos do teste                                | [1.1.1](01-fundamentos-de-teste.md#111-objetivos-do-teste)                                                                                                                                         | Sets A, C, D      |
| Teste x depuração                                 | [1.1.2](01-fundamentos-de-teste.md#112-teste-e-depuração)                                                                                                                                          | Set C             |
| Testes exaustivos são impossíveis                 | [1.3](01-fundamentos-de-teste.md#13-os-sete-princípios-de-teste)                                                                                                                                   | Sets A, B         |
| Falácia da ausência de defeitos                   | [1.3](01-fundamentos-de-teste.md#13-os-sete-princípios-de-teste)                                                                                                                                   | Sets C, D         |
| Análise x modelagem x implementação x execução    | [1.4.1](01-fundamentos-de-teste.md#141-atividades-e-tarefas-de-teste)                                                                                                                              | **Todos os sets** |
| Tarefas do papel de gestão x testador             | [1.4.5](01-fundamentos-de-teste.md#145-papéis-no-teste)                                                                                                                                            | Sets A, D         |
| Abordagem de equipe completa                      | [1.5.2](01-fundamentos-de-teste.md#152-abordagem-de-equipe-completa-whole-team)                                                                                                                    | **Todos os sets** |
| ATDD                                              | [2.1.3](02-testes-no-ciclo-de-vida.md#213-teste-como-motivador-do-desenvolvimento-test-first) e [4.5.3](04-analise-e-modelagem-de-teste.md#453-desenvolvimento-orientado-por-teste-de-aceite-atdd) | Sets A, B, C      |
| Shift-left                                        | [2.1.5](02-testes-no-ciclo-de-vida.md#215-abordagem-shift-left)                                                                                                                                    | Sets A, C         |
| Aceite x sistema x integração                     | [2.2.1](02-testes-no-ciclo-de-vida.md#221-níveis-de-teste)                                                                                                                                         | Sets A, B, C      |
| Regressão x confirmação                           | [2.2.3](02-testes-no-ciclo-de-vida.md#223-teste-de-confirmação-e-teste-de-regressão)                                                                                                               | Sets A, B, C      |
| Benefícios do teste estático; estático x dinâmico | [3.1.2](03-teste-estatico.md#312-valor-do-teste-estático) e [3.1.3](03-teste-estatico.md#313-diferenças-entre-teste-estático-e-dinâmico)                                                           | **Todos os sets** |
| Tipos de revisão                                  | [3.2.4](03-teste-estatico.md#324-tipos-de-revisão)                                                                                                                                                 | **Todos os sets** |
| EP e BVA (cálculo de cobertura)                   | [4.2.1](04-analise-e-modelagem-de-teste.md#421-particionamento-de-equivalência-ep) e [4.2.2](04-analise-e-modelagem-de-teste.md#422-análise-de-valor-de-limite-bva)                                | **Todos os sets** |
| Tabela de decisão                                 | [4.2.3](04-analise-e-modelagem-de-teste.md#423-teste-de-tabela-de-decisão)                                                                                                                         | **Todos os sets** |
| Transição de estado                               | [4.2.4](04-analise-e-modelagem-de-teste.md#424-teste-de-transição-de-estado)                                                                                                                       | **Todos os sets** |
| Cobertura de instrução e ramificação              | [4.3](04-analise-e-modelagem-de-teste.md#43-técnicas-de-teste-caixa-branca)                                                                                                                        | **Todos os sets** |
| Suposição de erro e checklist                     | [4.4.1](04-analise-e-modelagem-de-teste.md#441-suposição-de-erro-error-guessing) e [4.4.3](04-analise-e-modelagem-de-teste.md#443-testes-baseados-em-lista-de-verificação-checklist)               | **Todos os sets** |
| Teste exploratório                                | [4.4.2](04-analise-e-modelagem-de-teste.md#442-testes-exploratórios)                                                                                                                               | **Todos os sets** |
| Critérios de saída e planejamento                 | [5.1.3](05-gerenciamento-das-atividades-de-teste.md#513-critérios-de-entrada-e-critérios-de-saída)                                                                                                 | **Todos os sets** |
| Técnicas de estimativa                            | [5.1.4](05-gerenciamento-das-atividades-de-teste.md#514-técnicas-de-estimativa)                                                                                                                    | Sets A, B         |

## Distribuição aproximada das questões

O peso de cada capítulo acompanha o tempo de estudo. Estimativa usual para as 40 questões:

| Capítulo               | Questões (aprox.) |
| ---------------------- | ----------------- |
| 1. Fundamentos         | 8                 |
| 2. Ciclo de vida       | 6                 |
| 3. Teste estático      | 4                 |
| 4. Análise e modelagem | 11                |
| 5. Gerenciamento       | 9                 |
| 6. Ferramentas         | 2                 |

> Confirme a distribuição atual no documento _Exam Structures and Rules_ do ISTQB/BSTQB.

## Pares que mais confundem

| Conceito A                | Conceito B             | Diferença-chave                                                                      |
| ------------------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| Verificação               | Validação              | Atende à **especificação** x atende às **necessidades do usuário**                   |
| Teste                     | Depuração              | **Achar** falhas/defeitos x **remover** a causa                                      |
| QC                        | QA                     | **Produto, corretivo** x **processo, preventivo**                                    |
| Erro                      | Defeito                | Engano **humano** x imperfeição **no artefato**                                      |
| Defeito                   | Falha                  | Está no artefato x **manifesta-se na execução**                                      |
| Análise                   | Modelagem              | **O que** testar (condições) x **como** testar (casos)                               |
| Modelagem                 | Implementação          | Casos de teste x procedimentos, scripts, suítes, ambiente pronto                     |
| Confirmação               | Regressão              | O defeito **foi corrigido?** x a mudança **quebrou algo?**                           |
| Nível de teste            | Tipo de teste          | **Estágio** (componente...aceite) x **característica** (funcional, não funcional...) |
| Integração de componentes | Integração de sistemas | Interfaces **internas** x interfaces com **sistemas externos**                       |
| Walkthrough               | Inspeção               | Conduzido pelo **autor** x **mais formal**, autor não lidera, métricas               |
| Revisão técnica           | Inspeção               | **Consenso/decisão técnica** x **máximo de anomalias**                               |
| Gerente (revisão)         | Líder da revisão       | **O que** revisar e recursos x **quem**, **quando** e **onde**                       |
| Instrução                 | Ramificação            | Ramificação **subsume** instrução                                                    |
| Transições válidas        | Todas as transições    | Só válidas x válidas **+ tentar inválidas**                                          |
| BVA 2 valores             | BVA 3 valores          | Limite + vizinho adjacente x limite + **ambos** vizinhos                             |
| Risco de projeto          | Risco de produto       | Prazo, pessoas, fornecedor x **qualidade do software**                               |
| Severidade                | Prioridade             | **Impacto** x **urgência**                                                           |
| DoR                       | DoD                    | Critério de **entrada** x critério de **saída**                                      |
| Relatório de progresso    | Relatório de conclusão | **Periódico**, controle x **final**, lições aprendidas                               |
| Q3                        | Q4                     | Usabilidade, exploratório, UAT (manual) x smoke e não funcional (automatizado)       |

## Estratégia para questões de cálculo (K3)

1. **EP**: liste **todas** as partições (válidas **e inválidas**) antes de olhar as alternativas.
2. **BVA**: identifique mínimo e máximo de **cada** partição; acrescente vizinhos conforme 2 ou 3 valores; elimine repetidos.
3. **Tabela de decisão**: n condições booleanas → 2ⁿ regras; exclua as inviáveis; conte colunas viáveis.
4. **Transição de estado**: desenhe a tabela de estados; células vazias = transições inválidas.
5. **Cobertura de código**: desenhe o fluxo de controle; marque V e F de cada decisão.
6. **Três pontos**: E = (o + 4m + p) / 6 e SD = (p - o) / 6.
7. **Priorização**: ordene por prioridade e depois **ajuste por dependências**.

## Dicas gerais

- Leia a pergunta **até o final**: palavras como **"NÃO"**, **"MELHOR"**, **"MAIS provável"** mudam tudo.
- A prova cobra **a terminologia do syllabus**, não a do mercado. Ex.: "teste de componente" (não só "unitário"), "modelagem de teste".
- Desconfie de alternativas absolutas ("sempre", "nunca", "garante", "prova que não há defeitos").
- Todas as **palavras-chave** listadas no início de cada capítulo podem cair em K1: revise-as.
- Faça os **simulados oficiais** (A, B, C, D) disponíveis no site do BSTQB/ISTQB e revise os erros pelo syllabus.

## Materiais complementares do repositório de apoio

O repositório [Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP) (em inglês) tem:

- **Notes/**: notas por capítulo.
- **QUIZ/**: quizzes por capítulo.
- **FlashCard/**: flashcards dos capítulos 1, 4 e 5.
- **ISTQB_Sample_paper/**: simulado A comentado e visão geral dos temas recorrentes.
- **Time-Table.md**: sugestão de cronograma de estudos.

Fonte oficial: syllabus CTFL v4.0 (tradução BSTQB) em [bstqb.online](https://bstqb.online) e [istqb.org](https://www.istqb.org).
