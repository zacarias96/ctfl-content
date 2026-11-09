---
title: "Testes ao longo do Ciclo de Vida de Desenvolvimento de Software (130 min)"
sidebar:
  label: "Testes no Ciclo de Vida"
---

## Palavras-chave (K1)

Definições do [Glossário ISTQB](https://glossary.istqb.org/pt_BR/) (pt-BR), agrupadas por assunto.

**Níveis de teste** (estágios: _quando/onde_ se testa)

| Termo                              | Definição (Glossário ISTQB)                                                                                        | Em outras palavras                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| nível de teste                     | Uma instância específica de um processo de teste.                                                                  | Um "estágio" com objetivo, base e objeto próprios.                                                         |
| teste de componentes               | Um nível de teste que se concentra em componentes individuais de hardware ou software.                             | Também chamado **teste de unidade**; geralmente feito pelo dev.                                            |
| teste de integração                | Um nível de teste que se concentra nas interações entre componentes ou sistemas.                                   | Termo "guarda-chuva" para os dois abaixo.                                                                  |
| teste de integração de componentes | Testes de integração de componentes.                                                                               | Interfaces **internas** entre componentes.                                                                 |
| teste de integração de sistemas    | Um nível de teste que se concentra na integração de sistemas.                                                      | Interfaces com **sistemas externos** (APIs, serviços de terceiros).                                        |
| teste de sistemas                  | Nível de teste que se concentra na verificação de que um sistema como um todo atenda aos requisitos especificados. | Visão **ponta a ponta** do sistema; costuma ter equipe independente.                                       |
| teste de aceite                    | Nível de teste que se concentra na determinação de aceitar o sistema.                                              | Foco em **validação** e prontidão para implantação (UAT, operacional, contratual, regulatório, alfa/beta). |

**Tipos de teste** (características: _o que_ se avalia)

| Termo               | Definição (Glossário ISTQB)                                                                                                          | Em outras palavras                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| tipo de teste       | Um grupo de atividades de teste com base em objetivos específicos que visam características específicas de um componente ou sistema. | Qualquer tipo pode ocorrer em qualquer nível.                 |
| teste funcional     | Um tipo de teste para determinar a adequação funcional de um objeto de teste.                                                        | **O que** o sistema faz.                                      |
| teste não funcional | Um tipo de teste para avaliar se um componente ou sistema está em conformidade com os requisitos não funcionais.                     | **Quão bem** ele faz (desempenho, segurança, usabilidade...). |
| teste caixa-preta   | Uma abordagem de teste baseada na especificação de um componente ou sistema.                                                         | Olha o **comportamento**, sem ver o código.                   |
| teste caixa-branca  | Uma abordagem de teste baseada na estrutura interna de um componente ou sistema.                                                     | Olha a **estrutura** (código, arquitetura, fluxo).            |

**Testes relacionados a mudanças**

| Termo                | Definição (Glossário ISTQB)                                                                                                                                | Em outras palavras                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| teste de confirmação | Um tipo de teste relacionado à mudança realizado após a correção de um defeito para confirmar que uma falha causada por esse defeito não ocorre novamente. | "O defeito **foi corrigido**?"                                                            |
| teste de regressão   | Um tipo de teste relacionado a mudanças para detectar se os defeitos foram introduzidos ou descobertos em áreas inalteradas do software.                   | "A mudança **quebrou algo** que funcionava?" Ótimo candidato à automação.                 |
| teste de manutenção  | Um tipo de teste que avalia o efeito das alterações feitas em um sistema operacional ou em seu ambiente.                                                   | Testes **depois que o sistema já está em produção** (correções, migração, aposentadoria). |

**Outros**

| Termo           | Definição (Glossário ISTQB)                                                                                                                            | Em outras palavras                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| objeto de teste | O produto de trabalho a ser testado.                                                                                                                   | Muda conforme o nível (componente, sistema...).                                                        |
| shift-left      | Uma abordagem de teste para realizar atividades de teste e garantia de qualidade o mais cedo possível no ciclo de vida de desenvolvimento de software. | Testar **antes** = defeito mais barato. Contraponto: _shift right_ (testar continuamente em produção). |

## Objetivos de aprendizagem

| LO       | Nível | Descrição                                                           |
| -------- | ----- | ------------------------------------------------------------------- |
| FL-2.1.1 | K2    | Explicar o impacto do SDLC escolhido nos testes                     |
| FL-2.1.2 | K1    | Relembrar boas práticas de teste válidas para qualquer SDLC         |
| FL-2.1.3 | K1    | Relembrar exemplos de abordagens que priorizam o teste (test-first) |
| FL-2.1.4 | K2    | Resumir o impacto do DevOps nos testes                              |
| FL-2.1.5 | K2    | Explicar a abordagem shift-left                                     |
| FL-2.1.6 | K2    | Explicar como retrospectivas servem para melhoria de processos      |
| FL-2.2.1 | K2    | Distinguir os níveis de teste                                       |
| FL-2.2.2 | K2    | Distinguir os tipos de teste                                        |
| FL-2.2.3 | K2    | Distinguir teste de confirmação de teste de regressão               |
| FL-2.3.1 | K2    | Resumir testes de manutenção e seus acionadores                     |

## 2.1 Testes no contexto de um SDLC

Um **modelo de SDLC** é uma representação abstrata e de alto nível do processo de desenvolvimento: define como fases e atividades se relacionam lógica e cronologicamente.

| Categoria   | Exemplos                 |
| ----------- | ------------------------ |
| Sequencial  | Cascata, **Modelo em V** |
| Iterativo   | Espiral, Prototipagem    |
| Incremental | Processo Unificado (RUP) |

Métodos e práticas mais detalhados (muitos ágeis): **ATDD, BDD, DDD** (Domain-Driven Design), **XP** (Extreme Programming), **FDD** (Feature-Driven Development), **Kanban, Lean IT, Scrum, TDD**.

### 2.1.1 Impacto do SDLC nos testes

O teste precisa ser **adaptado ao SDLC**. A escolha do SDLC impacta:

- **Escopo e cronograma** das atividades de teste (ex.: níveis e tipos de teste).
- **Nível de detalhe** da documentação de teste.
- Escolha das **técnicas** e da **abordagem** de teste.
- **Extensão da automação**.
- **Papel e responsabilidades** do testador.

Por tipo de modelo:

- **Sequencial**: no início, testadores participam de **revisões de requisitos, análise e modelagem de teste**. O código executável só surge nas fases finais, então **testes dinâmicos não podem ocorrer cedo**.
- **Iterativo e incremental**: cada iteração entrega protótipo ou incremento funcional, então em cada iteração podem ocorrer **testes estáticos e dinâmicos em todos os níveis**. Entregas frequentes exigem **feedback rápido e muita regressão**.
- **Ágil**: pressupõe mudanças ao longo do projeto. Favorece **documentação leve** e **ampla automação** (para regressão). A maior parte do teste manual usa **técnicas baseadas na experiência** (4.4), que não exigem análise e modelagem prévias extensas.

### 2.1.2 Boas práticas de teste (para qualquer SDLC)

- Para **cada atividade de desenvolvimento** existe uma **atividade de teste correspondente** (tudo passa por controle de qualidade).
- **Cada nível de teste** tem objetivos **específicos e diferentes**: testes abrangentes sem redundância.
- **Análise e modelagem** de um nível começam **durante a fase de desenvolvimento correspondente** (princípio do teste antecipado).
- Testadores revisam os produtos de trabalho **assim que existirem rascunhos** (apoia o shift-left).

### 2.1.3 Teste como motivador do desenvolvimento (test-first)

**TDD, ATDD e BDD**: os testes são definidos **antes** do código e direcionam o desenvolvimento. Todos implementam o **teste antecipado**, seguem o **shift-left** e apoiam modelos **iterativos**.

| Abordagem                                     | Características                                                                                                                                                                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TDD** (Test-Driven Development)             | Direciona a **codificação** por meio de casos de teste (em vez de um projeto extenso). Ciclo: **escreve o teste → escreve o código para passar → refatora** teste e código. (Beck 2003)                                                     |
| **ATDD** (Acceptance Test-Driven Development) | Deriva testes dos **critérios de aceite** como parte do desenho do sistema. Testes escritos **antes** de desenvolver a parte da aplicação correspondente (ver 4.5.3).                                                                       |
| **BDD** (Behavior-Driven Development)         | Expressa o **comportamento desejado** em **linguagem natural simples**, compreensível pelos stakeholders, geralmente no formato **Dado / Quando / Então** (Given/When/Then). Os casos são traduzidos automaticamente em testes executáveis. |

Em todas, os testes podem **persistir como testes automatizados**, garantindo qualidade em refatorações futuras.

### 2.1.4 DevOps e Testes

**DevOps**: abordagem organizacional que une **desenvolvimento (incluindo testes) e operações** em torno de objetivos comuns. Exige **mudança cultural**, valorizando igualmente as duas funções. Promove autonomia da equipe, feedback rápido, cadeias de ferramentas integradas e práticas como **CI (Integração Contínua)** e **CD (Entrega Contínua)**, por meio de um **pipeline de entrega**.

| Benefícios para os testes                                                                 | Riscos e desafios                                                                  |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Feedback rápido** sobre qualidade e impacto das mudanças                                | O **pipeline** de entrega precisa ser definido e estabelecido                      |
| CI promove **shift-left**: devs enviam código com testes de componente e análise estática | Ferramentas de **CI/CD** precisam ser introduzidas e mantidas                      |
| Processos automatizados (CI/CD) facilitam **ambientes de teste estáveis**                 | **Automação** exige recursos adicionais e pode ser difícil de estabelecer e manter |
| Mais visibilidade das **características não funcionais** (performance, confiabilidade)    |                                                                                    |
| Menos **testes manuais repetitivos**                                                      |                                                                                    |
| **Risco de regressão minimizado** pela escala da regressão automatizada                   |                                                                                    |

Mesmo com muita automação, **testes manuais** (sobretudo da perspectiva do usuário) **continuam necessários**.

### 2.1.5 Abordagem Shift-Left

É o princípio do **teste antecipado**: testar **mais cedo** no SDLC (não esperar o código ou a integração). **Não** significa negligenciar os testes posteriores.

Boas práticas de shift-left:

- **Revisar a especificação** sob a ótica de testes (acha ambiguidades, incompletudes, inconsistências).
- **Escrever casos de teste antes do código** e rodar o código contra eles durante a implementação.
- Usar **CI** e, melhor ainda, **CD** (feedback rápido, testes de componente automatizados a cada commit).
- Fazer **análise estática** do código antes do teste dinâmico ou dentro de processo automatizado.
- Fazer **testes não funcionais já no nível de componente**, quando possível.

Custo: pode exigir treinamento, esforço e custo extra **no início**, mas espera-se economia **no final**. É importante **convencer os stakeholders** a aceitar o conceito.

### 2.1.6 Retrospectivas e melhoria de processos

Retrospectivas ("reuniões pós-projeto") ocorrem ao fim de projeto, iteração, marco de lançamento ou quando necessário. Participam testadores, desenvolvedores, arquitetos, PO, analistas de negócio etc. Discutem:

- O que deu certo e deve ser mantido?
- O que não deu certo e pode melhorar?
- Como incorporar melhorias e manter os sucessos?

Os resultados são **registrados** e geralmente fazem parte do **relatório de conclusão do teste**. São essenciais para a **melhoria contínua**; as melhorias precisam ser acompanhadas.

Benefícios típicos para os testes:

- Mais **eficácia e eficiência** do teste.
- Mais **qualidade do testware**.
- **Vínculo e aprendizado** da equipe.
- Melhor **qualidade da base de teste** (ex.: requisitos).
- Melhor **cooperação entre desenvolvimento e teste**.

## 2.2 Níveis de Teste e Tipos de Teste

- **Nível de teste**: grupo de atividades organizadas e gerenciadas juntas; é uma **instância do processo de teste** aplicada a um estágio do desenvolvimento (de componente até sistema de sistemas).
  - Em modelos sequenciais, os **critérios de saída** de um nível costumam fazer parte dos **critérios de entrada** do próximo. Em modelos iterativos, isso pode não valer; níveis podem se sobrepor no tempo.
- **Tipo de teste**: grupo de atividades relacionado a **características de qualidade específicas**. A maioria pode ser feita **em todos os níveis**.

### 2.2.1 Níveis de Teste

| Nível                                                              | Foco                                                                                                         | Quem / como                                                                                                                                                                                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Teste de Componente** (de unidade)                               | Componentes **isolados**                                                                                     | Normalmente **desenvolvedores**, no ambiente de desenvolvimento, com frameworks de teste de unidade                                                                                                                           |
| **Teste de Integração de Componentes** (de integração de unidades) | **Interfaces e interações entre componentes**                                                                | Depende da estratégia de integração: **bottom-up, top-down, big-bang**                                                                                                                                                        |
| **Teste de Sistema**                                               | **Comportamento geral** e recursos do sistema completo: testes funcionais **ponta a ponta** e não funcionais | Pode ser feito por **equipe de teste independente**; baseado nas especificações do sistema; algumas características (ex.: usabilidade) exigem sistema completo em ambiente representativo; pode usar simulação de subsistemas |
| **Teste de Integração de Sistemas**                                | **Interfaces com outros sistemas e serviços externos**                                                       | Exige ambiente semelhante ao operacional                                                                                                                                                                                      |
| **Teste de Aceite**                                                | **Validação** e demonstração de que está **pronto para implantação** (atende às necessidades de negócio)     | Idealmente pelos **usuários previstos**                                                                                                                                                                                       |

Formas de **teste de aceite**:

- **UAT** - Teste de Aceite do Usuário.
- **Teste de Aceite Operacional** (ex.: backup, recuperação, administração).
- **Teste de Aceite Contratual e Normativo** (regulatório).
- **Teste Alfa** (no ambiente do desenvolvedor, por usuários/clientes).
- **Teste Beta** (no ambiente do usuário).

Atributos que diferenciam os níveis (evitando sobreposição):

- Objeto de teste;
- Objetivos do teste;
- Base de teste;
- Defeitos e falhas típicos;
- Abordagem e responsabilidades.

### 2.2.2 Tipos de Teste

O syllabus aborda quatro tipos:

| Tipo              | O que avalia                                                                          | Objetivo principal                                        |
| ----------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Funcional**     | **"O que"** o sistema faz (suas funções)                                              | Verificar **completude, corretude e adequação funcional** |
| **Não funcional** | **"Quão bem"** o sistema se comporta                                                  | Verificar características não funcionais de qualidade     |
| **Caixa-preta**   | Baseado em **especificações** (documentação externa ao objeto)                        | Verificar o comportamento frente às especificações        |
| **Caixa-branca**  | Baseado na **estrutura interna** (código, arquitetura, fluxos de trabalho e de dados) | **Cobrir a estrutura** até um nível aceitável             |

Características não funcionais segundo a **ISO/IEC 25010**:

1. Eficiência de performance
2. Compatibilidade
3. Usabilidade
4. Confiabilidade
5. Segurança
6. Capacidade de manutenção (manutenibilidade)
7. Portabilidade

> (A adequação funcional é a 8ª característica da ISO 25010, coberta pelo teste funcional.)

Sobre testes não funcionais:

- Podem e às vezes devem começar **cedo** (revisões, testes de componente).
- Muitos derivam de testes funcionais: usam o mesmo teste e verificam uma restrição não funcional (ex.: tempo de resposta, portabilidade para nova plataforma).
- **Descobrir defeitos não funcionais tarde** pode ameaçar seriamente o projeto.
- Às vezes exigem ambiente muito específico (ex.: laboratório de usabilidade).

**Os quatro tipos podem ser aplicados em todos os níveis**, com focos diferentes em cada um.

### 2.2.3 Teste de Confirmação e Teste de Regressão

Mudanças (novo recurso ou correção) exigem os dois:

|           | Teste de Confirmação                                                                                                                                                                                            | Teste de Regressão                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo  | Confirmar que o **defeito original foi corrigido**                                                                                                                                                              | Confirmar que a mudança **não causou consequências adversas** (inclusive uma correção já confirmada)                                           |
| Como      | Reexecutar os casos que falharam por causa do defeito e/ou adicionar novos testes para as mudanças da correção. Com pouco tempo/dinheiro: só repetir os passos que reproduziam a falha e ver que ela não ocorre | Reexecutar testes nas áreas que podem ter sido afetadas: mesmo componente, outros componentes, outros sistemas conectados e até o **ambiente** |
| Apoio     | -                                                                                                                                                                                                               | **Análise de impacto** antes, para otimizar a extensão da regressão                                                                            |
| Automação | -                                                                                                                                                                                                               | **Forte candidata à automação** (executada muitas vezes, cresce a cada iteração). Automatizar desde o início; incluir na CI                    |

Ambos são necessários **em todos os níveis** em que houver correções ou mudanças.

## 2.3 Teste de Manutenção

Categorias de manutenção (ISO/IEC 14764): **corretiva**, **adaptativa** (mudanças no ambiente), **melhoria de performance ou de manutenibilidade**. Pode envolver liberações **planejadas** e **não planejadas (hot fixes)**.

- **Análise de impacto** antes da mudança ajuda a decidir se ela deve ser feita, avaliando consequências em outras áreas.
- Testar mudanças em produção inclui avaliar se a mudança foi implementada com sucesso e verificar **regressões** nas partes inalteradas (geralmente a maior parte do sistema).

O **escopo** do teste de manutenção depende de:

- **Grau de risco** da mudança;
- **Tamanho do sistema** existente;
- **Tamanho da mudança**.

**Acionadores (gatilhos)** da manutenção e do teste de manutenção:

| Acionador                                             | Exemplos e testes associados                                                                                                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Modificações**                                      | Melhorias planejadas (por versão), mudanças corretivas, hot fixes                                                                                  |
| **Atualizações ou migrações do ambiente operacional** | Troca de plataforma: testes no novo ambiente e no software alterado; **testes de conversão de dados** quando dados de outra aplicação são migrados |
| **Aposentadoria (desativação)**                       | Fim da vida útil: **testes de arquivamento de dados** (retenção longa); testes de **restauração e recuperação** dos dados arquivados               |

## Resumo rápido do capítulo

- O SDLC influencia escopo, documentação, técnicas, automação e papel do testador.
- Boas práticas: atividade de teste para cada atividade de desenvolvimento, objetivos distintos por nível, análise/modelagem cedo, revisão de rascunhos.
- Test-first: TDD (código), ATDD (critérios de aceite), BDD (comportamento em Dado/Quando/Então).
- DevOps: CI/CD, feedback rápido, menos regressão manual; testes manuais ainda necessários.
- Shift-left = testar mais cedo, sem abandonar testes tardios.
- 5 níveis: componente, integração de componentes, sistema, integração de sistemas, aceite.
- 4 tipos: funcional, não funcional, caixa-preta, caixa-branca (todos aplicáveis em todos os níveis).
- Confirmação (corrigiu?) x Regressão (quebrou algo?).
- Manutenção: modificação, migração, aposentadoria; escopo depende de risco e tamanhos.
