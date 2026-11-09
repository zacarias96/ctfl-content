---
title: "Temas recorrentes e estratégia de prova"
description: "Os temas que mais aparecem nos simulados oficiais, com link para a nota de cada um, e dicas práticas para resolver as questões no dia da prova."
sidebar:
  label: "Temas recorrentes e estratégia"
---

## Temas que mais se repetem nos simulados oficiais

Levantamento feito pelo repositório [Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP) a partir dos simulados oficiais A, B, C e D:

| Tema | Onde estudar | Frequência |
|---|---|---|
| Objetivos do teste | [O que é teste?](../01-fundamentos-de-teste/01-o-que-e-teste.md#objetivos-do-teste-fl-111) | Sets A, C, D |
| Teste x depuração | [O que é teste?](../01-fundamentos-de-teste/01-o-que-e-teste.md#teste-e-depuração-fl-112) | Set C |
| Testes exaustivos são impossíveis | [Os sete princípios](../01-fundamentos-de-teste/03-principios-de-teste.md#2-testes-exaustivos-são-impossíveis) | Sets A, B |
| Falácia da ausência de defeitos | [Os sete princípios](../01-fundamentos-de-teste/03-principios-de-teste.md#7-falácia-da-ausência-de-defeitos) | Sets C, D |
| Análise x modelagem x implementação x execução | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) | **Todos os sets** |
| Tarefas do papel de gerenciamento x testador | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md#papéis-no-teste-fl-145) | Sets A, D |
| Abordagem de equipe completa | [Habilidades e independência](../01-fundamentos-de-teste/06-habilidades-e-independencia.md#abordagem-de-equipe-completa-fl-152) | **Todos os sets** |
| ATDD | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) e [Histórias, critérios de aceite e ATDD](../04-analise-e-modelagem-de-teste/08-abordagens-colaborativas.md#atdd-na-prática-fl-453) | Sets A, B, C |
| Shift-left | [DevOps, shift-left e retrospectivas](../02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas.md#abordagem-shift-left-fl-215) | Sets A, C |
| Aceite x sistema x integração | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) | Sets A, B, C |
| Regressão x confirmação | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md#teste-de-confirmação-e-teste-de-regressão-fl-223) | Sets A, B, C |
| Valor do teste estático; estático x dinâmico | [Noções básicas de teste estático](../03-teste-estatico/01-nocoes-basicas-de-teste-estatico.md) | **Todos os sets** |
| Tipos de revisão | [Tipos de revisão e fatores de sucesso](../03-teste-estatico/03-tipos-de-revisao-e-fatores-de-sucesso.md) | **Todos os sets** |
| EP e BVA (cálculo de cobertura) | [Particionamento de equivalência](../04-analise-e-modelagem-de-teste/02-particionamento-de-equivalencia.md) e [Análise de valor limite](../04-analise-e-modelagem-de-teste/03-analise-de-valor-limite.md) | **Todos os sets** |
| Tabela de decisão | [Tabela de decisão](../04-analise-e-modelagem-de-teste/04-tabela-de-decisao.md) | **Todos os sets** |
| Transição de estado | [Transição de estado](../04-analise-e-modelagem-de-teste/05-transicao-de-estado.md) | **Todos os sets** |
| Cobertura de instrução e ramificação | [Caixa-branca](../04-analise-e-modelagem-de-teste/06-caixa-branca.md) | **Todos os sets** |
| Suposição de erro, exploratório e checklist | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) | **Todos os sets** |
| Critérios de saída e planejamento | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) | **Todos os sets** |
| Técnicas de estimativa | [Técnicas de estimativa](../05-gerenciamento-das-atividades-de-teste/02-tecnicas-de-estimativa.md) | Sets A, B |

## Como resolver as questões

### Leia o enunciado inteiro, duas vezes

Palavras como **NÃO**, **MELHOR**, **MAIS provável**, **PRINCIPAL** e **PRIMEIRO** mudam a resposta. Uma técnica simples: antes de olhar as alternativas, reescreva mentalmente a pergunta em uma frase ("ele quer o item que NÃO é um benefício").

### Use a terminologia do syllabus, não a do mercado

A prova cobra o vocabulário do ISTQB:

| No mercado se fala... | Na prova é... |
|---|---|
| teste unitário | teste de **componente** (ou de unidade) |
| design de teste | **modelagem** de teste |
| QA (como sinônimo de testador) | teste é **controle de qualidade**; QA é outra coisa |
| bug | **defeito** (e falha, e erro, cada um no seu lugar) |
| homologação | depende: pode ser teste de **sistema** ou de **aceite** |

### Desconfie de alternativas absolutas

"Sempre", "nunca", "garante", "elimina", "prova que não há defeitos" e "todos" costumam indicar a alternativa errada. O syllabus é cheio de "geralmente", "pode", "normalmente".

### Questões de cenário: identifique o conceito antes de responder

Muitas questões K2 descrevem uma situação. Pergunte-se: "de qual seção do syllabus é esse cenário?". Depois, lembre a lista daquela seção (benefícios, fatores, atividades) e compare com as alternativas.

### Gerencie o tempo

São 60 minutos para 40 questões, 1 minuto e meio por questão.

- Faça primeiro as questões K1 e K2 rápidas.
- Marque as de cálculo (K3) para o fim, quando você souber quanto tempo sobra.
- Não deixe nenhuma em branco: não há penalidade por erro.

## Antes da prova

- Revise as **palavras-chave** do início de cada capítulo (todas podem cair em K1).
- Refaça os **exercícios resolvidos** das notas do capítulo 4 e de estimativa sem olhar a resposta.
- Faça pelo menos um **simulado oficial** cronometrado. Os exemplos de exame A e B estão nos [simulados interativos](https://zacarias96.github.io/ctfl-content/mock-exams/), em modo treino ou prova de 60 minutos.
- Revise os [pares que confundem](02-pares-que-confundem.md) e o [roteiro de cálculos](03-roteiro-de-calculos.md) na véspera, e consulte o [glossário de apoio](04-glossario-de-apoio.md) para os termos que não são palavras-chave.

## Referências

- [CTFL - Certified Tester Foundation Level](https://bstqb.online/ctfl) - BSTQB, português (syllabus, glossário e exemplos de exame)
- [ISTQB-CTFL-4.0-EXAM-PREP](https://github.com/Mitesh411/ISTQB-CTFL-4.0-EXAM-PREP) - Mitesh411, inglês (notas, quizzes, flashcards e análise dos simulados)
