---
title: "Pares de conceitos que confundem"
description: "Os pares de termos que mais derrubam candidatos na prova CTFL, com a diferença-chave e um exemplo curto de cada um."
sidebar:
  label: "Pares que confundem"
---

Boa parte dos erros na prova não vem de não saber o conceito, e sim de **trocar um conceito pelo vizinho**. Esta tabela reúne os pares mais perigosos. Cada linha tem um link para a nota onde o assunto é explicado.

## Capítulo 1: fundamentos

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| Verificação | Validação | Atende à **especificação**? x atende às **necessidades do usuário**? | [O que é teste?](../01-fundamentos-de-teste/01-o-que-e-teste.md) |
| Teste | Depuração | **Encontrar** falhas e defeitos x **remover** a causa (depuração não é teste) | [O que é teste?](../01-fundamentos-de-teste/01-o-que-e-teste.md) |
| QC (controle de qualidade) | QA (garantia da qualidade) | **Produto, corretivo** x **processo, preventivo**, responsabilidade de todos | [Por que testar?](../01-fundamentos-de-teste/02-por-que-testar.md) |
| Erro | Defeito | Engano **humano** x imperfeição **no artefato** | [Por que testar?](../01-fundamentos-de-teste/02-por-que-testar.md) |
| Defeito | Falha | Está **no artefato** x se **manifesta na execução** | [Por que testar?](../01-fundamentos-de-teste/02-por-que-testar.md) |
| Erro | Causa raiz | O engano em si x o **motivo de fundo** que levou ao engano | [Por que testar?](../01-fundamentos-de-teste/02-por-que-testar.md) |
| Princípio 1 (presença, não ausência) | Princípio 7 (falácia da ausência de defeitos) | O que o teste **consegue provar** x um produto sem defeitos ainda pode ser o **produto errado** | [Os sete princípios](../01-fundamentos-de-teste/03-principios-de-teste.md) |
| Análise | Modelagem | **O que** testar (condições de teste) x **como** testar (casos de teste, itens de cobertura) | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| Modelagem | Implementação | **Requisitos** de dados e ambiente x **criar** dados, montar ambiente, procedimentos, scripts, suítes | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| Monitoramento | Controle | **Comparar** progresso com o plano x **agir** para corrigir | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| Stub | Driver | **Responde** no lugar de quem é chamado (abaixo) x **chama** o componente (acima) | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| Papel de gerenciamento | Papel de testador | Planejamento, monitoramento e controle, conclusão x análise, modelagem, implementação, execução | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| Eficácia | Eficiência | Achar os defeitos certos (conhecimento de teste, pensamento analítico) x achar com menos esforço (conhecimento técnico, ferramentas) | [Habilidades e independência](../01-fundamentos-de-teste/06-habilidades-e-independencia.md) |

## Capítulo 2: ciclo de vida

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| TDD | BDD | Teste unitário antes do código (vermelho, verde, refatorar) x comportamento em **Dado/Quando/Então** | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) |
| TDD | ATDD | Testes guiados pelo dev x testes derivados dos **critérios de aceite**, em colaboração | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) |
| Nível de teste | Tipo de teste | **Estágio** (componente ... aceite) x **característica** (funcional, não funcional, caixa-preta, caixa-branca) | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| Integração de componentes | Integração de sistemas | Interfaces **internas** x interfaces com **sistemas externos** | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| Teste alfa | Teste beta | Nas instalações de **quem desenvolve** x nas instalações **do cliente** | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| Top-down | Bottom-up | Precisa de **stubs** x precisa de **drivers** | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| Teste de confirmação | Teste de regressão | O defeito **foi corrigido**? x a mudança **quebrou algo**? | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| Funcional | Não funcional | **O que** o sistema faz x **quão bem** faz | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |

## Capítulo 3: teste estático

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| Teste estático | Teste dinâmico | Encontra **defeitos** sem executar x provoca **falhas** executando | [Noções básicas](../03-teste-estatico/01-nocoes-basicas-de-teste-estatico.md) |
| Revisão | Análise estática | Exame **manual** (qualquer coisa legível) x com **ferramenta** (precisa de estrutura formal) | [Noções básicas](../03-teste-estatico/01-nocoes-basicas-de-teste-estatico.md) |
| Anomalia | Defeito | Algo encontrado que **pode ou não** ser defeito x defeito confirmado | [Processo de revisão](../03-teste-estatico/02-processo-de-revisao.md) |
| Gerente | Líder da revisão | **O que** revisar e **recursos** x **quem**, **quando** e **onde** | [Processo de revisão](../03-teste-estatico/02-processo-de-revisao.md) |
| Moderador | Relator | **Conduz** a reunião x **registra** | [Processo de revisão](../03-teste-estatico/02-processo-de-revisao.md) |
| Walkthrough | Inspeção | Conduzido pelo **autor**, vários objetivos x **mais formal**, autor não lidera nem relata, métricas | [Tipos de revisão](../03-teste-estatico/03-tipos-de-revisao-e-fatores-de-sucesso.md) |
| Revisão técnica | Inspeção | **Consenso e decisão técnica** x **máximo de anomalias** | [Tipos de revisão](../03-teste-estatico/03-tipos-de-revisao-e-fatores-de-sucesso.md) |

## Capítulo 4: técnicas

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| Caixa-preta | Caixa-branca | Da **especificação** (casos sobrevivem a mudanças de código) x da **estrutura** (só depois do código) | [Visão geral](../04-analise-e-modelagem-de-teste/01-visao-geral-das-tecnicas.md) |
| Condição de teste | Item de cobertura | Aspecto testável (análise) x o que a técnica manda exercitar (modelagem) | [Visão geral](../04-analise-e-modelagem-de-teste/01-visao-geral-das-tecnicas.md) |
| BVA 2 valores | BVA 3 valores | Limite + vizinho da partição **adjacente** x limite + **os dois** vizinhos | [Análise de valor limite](../04-analise-e-modelagem-de-teste/03-analise-de-valor-limite.md) |
| "-" na tabela de decisão | "N/A" | Condição **irrelevante** x condição **inviável** | [Tabela de decisão](../04-analise-e-modelagem-de-teste/04-tabela-de-decisao.md) |
| Diagrama de estados | Tabela de estados | Mostra só as **válidas** x mostra também as **inválidas** (células vazias) | [Transição de estado](../04-analise-e-modelagem-de-teste/05-transicao-de-estado.md) |
| Transições válidas (0-switch) | Todas as transições | Só as válidas x válidas **+ tentar** as inválidas | [Transição de estado](../04-analise-e-modelagem-de-teste/05-transicao-de-estado.md) |
| Cobertura de instrução | Cobertura de ramificação | Ramificação **engloba** instrução; o contrário não | [Caixa-branca](../04-analise-e-modelagem-de-teste/06-caixa-branca.md) |
| Suposição de erro | Teste exploratório | Prever onde vai falhar (lista de ataques) x aprender e testar ao mesmo tempo (carta de teste) | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |
| Critério orientado a cenários | Critério orientado a regras | **Dado/Quando/Então** x **lista** de verificação ou **tabela** | [Histórias, critérios e ATDD](../04-analise-e-modelagem-de-teste/08-abordagens-colaborativas.md) |

## Capítulo 5: gerenciamento

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| Critério de entrada | Critério de saída | **Posso começar?** x **posso dizer que acabou?** | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) |
| DoR | DoD | Critério de **entrada** x critério de **saída** | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) |
| Planejamento de liberação | Planejamento de iteração | **Backlog do produto**, versão inteira x **backlog da iteração**, tarefas | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) |
| Baseada em índices | Extrapolação | Dados de **projetos anteriores** x dados do **projeto atual** | [Técnicas de estimativa](../05-gerenciamento-das-atividades-de-teste/02-tecnicas-de-estimativa.md) |
| Wideband Delphi | Três pontos | Rodadas até o **consenso** x fórmula (o + 4m + p) / 6 | [Técnicas de estimativa](../05-gerenciamento-das-atividades-de-teste/02-tecnicas-de-estimativa.md) |
| Q3 | Q4 | Exploratório, **usabilidade**, UAT (manual) x **smoke** e não funcionais (automatizado) | [Priorização, pirâmide e quadrantes](../05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes.md) |
| Q1 | Q2 | Componente e integração de componentes x funcionais, exemplos, histórias, API | [Priorização, pirâmide e quadrantes](../05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes.md) |
| Risco de projeto | Risco de produto | Prazo, pessoas, fornecedor, custo x **qualidade do software** | [Gerenciamento de risco](../05-gerenciamento-das-atividades-de-teste/04-gerenciamento-de-risco.md) |
| Análise de risco | Controle de risco | Identificação + avaliação x mitigação + monitoramento | [Gerenciamento de risco](../05-gerenciamento-das-atividades-de-teste/04-gerenciamento-de-risco.md) |
| Relatório de progresso | Relatório de conclusão | **Periódico**, apoia o controle x **final**, com lições aprendidas | [Monitoramento, controle e relatórios](../05-gerenciamento-das-atividades-de-teste/05-monitoramento-controle-e-conclusao.md) |
| Severidade | Prioridade | **Impacto** x **urgência** | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |

## Capítulo 6: ferramentas

| Conceito A | Conceito B | Diferença-chave | Onde estudar |
|---|---|---|---|
| Benefício da automação | Risco da automação | Menos trabalho repetitivo, consistência, medidas objetivas x expectativas irreais, confiança excessiva, dependência de fornecedor | [Ferramentas e automação](../06-ferramentas-de-teste/01-ferramentas-e-automacao.md) |
