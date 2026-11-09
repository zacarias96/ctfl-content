---
title: "Ferramentas de Teste (20 min)"
sidebar:
  label: "Ferramentas de Teste"
---

## Palavras-chave (K1)

automação de testes

## Objetivos de aprendizagem

| LO       | Nível | Descrição                                                         |
| -------- | ----- | ----------------------------------------------------------------- |
| FL-6.1.1 | K2    | Explicar como os diferentes tipos de ferramentas apoiam os testes |
| FL-6.2.1 | K1    | Relembrar benefícios e riscos da automação de testes              |

## 6.1 Suporte de Ferramentas para Testes

Ferramentas apoiam e facilitam muitas atividades de teste. Exemplos (lista não exaustiva):

| Tipo de ferramenta                               | Como apoia                                                                                     | Exemplos reais (ilustrativos)                       |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Gerenciamento**                                | Aumenta a eficiência do processo gerenciando SDLC, requisitos, testes, defeitos e configuração | Jira, Azure DevOps, TestRail, Git                   |
| **Teste estático**                               | Apoia **revisões** e **análise estática**                                                      | SonarQube, ESLint, ferramentas de revisão de código |
| **Projeto e implementação de testes**            | Facilita a geração de **casos, dados e procedimentos** de teste                                | Geradores de dados, ferramentas de modelagem        |
| **Execução e cobertura**                         | Facilita a **execução automatizada** e a **medição de cobertura**                              | JUnit, pytest, Selenium, Cypress, JaCoCo            |
| **Teste não funcional**                          | Permite testes **difíceis ou impossíveis de fazer manualmente**                                | JMeter, k6, OWASP ZAP                               |
| **DevOps**                                       | Apoia o **pipeline de entrega**, rastreamento de fluxo, **build automatizado**, **CI/CD**      | Jenkins, GitHub Actions, GitLab CI                  |
| **Colaboração**                                  | Facilita a **comunicação**                                                                     | Slack, Teams, Confluence                            |
| **Escalabilidade e padronização da implantação** | Ex.: **máquinas virtuais**, **contêineres**                                                    | Docker, Kubernetes, VMs                             |
| **Qualquer outra que ajude no teste**            | Ex.: uma **planilha** é uma ferramenta de teste nesse contexto                                 | Excel, Google Sheets                                |

> Os exemplos de produtos não fazem parte do syllabus; servem apenas para fixar os tipos.

## 6.2 Benefícios e Riscos da Automação de Teste

**Só adquirir uma ferramenta não garante sucesso.** Cada ferramenta exige esforço para gerar benefícios reais e duradouros (introdução, manutenção, treinamento), e há riscos a analisar e mitigar.

| Benefícios potenciais                                                                                                                                                                                          | Riscos potenciais                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Economia de tempo** reduzindo trabalho manual repetitivo (rodar regressão, reinserir dados, comparar esperado x real, checar padrões de código)                                                              | **Expectativas irreais** sobre a ferramenta (funcionalidade, facilidade de uso)                                             |
| **Prevenção de erros humanos simples** por mais **consistência e repetibilidade** (testes derivados sistematicamente dos requisitos, dados criados de forma sistemática, execução na mesma ordem e frequência) | **Estimativas imprecisas** de tempo, custo e esforço para introduzir a ferramenta, manter scripts e mudar o processo manual |
| **Avaliação mais objetiva** (ex.: cobertura) e medidas complexas demais para humanos                                                                                                                           | Usar ferramenta quando o **teste manual é mais apropriado**                                                                 |
| **Acesso mais fácil a informações** para gestão e relatórios (estatísticas, gráficos, dados de progresso, taxas de defeitos, duração da execução)                                                              | **Confiar demais** na ferramenta, ignorando o **pensamento crítico humano**                                                 |
| **Execução mais rápida**: detecção antecipada de defeitos, feedback mais rápido, menor **time-to-market**                                                                                                      | **Dependência do fornecedor** (pode fechar, aposentar ou vender a ferramenta, dar suporte ruim)                             |
| **Mais tempo para os testadores** criarem testes novos, mais profundos e eficazes                                                                                                                              | **Software open source abandonado** (sem atualizações) ou que exige atualizações internas muito frequentes                  |
|                                                                                                                                                                                                                | Ferramenta **incompatível com a plataforma** de desenvolvimento                                                             |
|                                                                                                                                                                                                                | Ferramenta **inadequada** que não cumpre **requisitos normativos** e/ou **normas de segurança**                             |

## Resumo rápido do capítulo

- Tipos de ferramentas: gerenciamento, estático, projeto/implementação, execução/cobertura, não funcional, DevOps, colaboração, escalabilidade (VMs/contêineres), qualquer outra (até planilha).
- Benefícios: tempo, consistência, objetividade, informação, velocidade, mais tempo para testes melhores.
- Riscos: expectativas irreais, estimativas erradas, uso indevido, excesso de confiança, dependência de fornecedor, open source abandonado, incompatibilidade, não conformidade normativa.
