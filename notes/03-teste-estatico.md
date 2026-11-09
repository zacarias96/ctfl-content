---
title: "Teste Estático (80 min)"
sidebar:
  label: "Teste Estático"
---

## Palavras-chave (K1)

anomalia, teste dinâmico, revisão formal, revisão informal, inspeção, revisão, análise estática, teste estático, revisão técnica, walkthrough

## Objetivos de aprendizagem

| LO       | Nível | Descrição                                                                       |
| -------- | ----- | ------------------------------------------------------------------------------- |
| FL-3.1.1 | K1    | Reconhecer os produtos de trabalho examináveis pelas técnicas de teste estático |
| FL-3.1.2 | K2    | Explicar o valor do teste estático                                              |
| FL-3.1.3 | K2    | Comparar e contrastar teste estático e dinâmico                                 |
| FL-3.2.1 | K1    | Identificar os benefícios do feedback antecipado e frequente dos stakeholders   |
| FL-3.2.2 | K2    | Resumir as atividades do processo de revisão                                    |
| FL-3.2.3 | K1    | Relembrar as responsabilidades das funções principais nas revisões              |
| FL-3.2.4 | K2    | Comparar e contrastar os tipos de revisão                                       |
| FL-3.2.5 | K1    | Relembrar os fatores de sucesso das revisões                                    |

## 3.1 Noções básicas de Teste Estático

No teste estático **o software não é executado**. Código, especificações de processo, de arquitetura e outros produtos de trabalho são avaliados por:

- **Exame manual** → **revisões**;
- **Ferramenta** → **análise estática**.

Objetivos: melhorar a qualidade, detectar defeitos e avaliar características como **legibilidade, completude (integridade), corretude, testabilidade e consistência**. Serve para **verificação e validação**.

No ágil, testadores, negócio e desenvolvedores colaboram em **mapeamento de exemplos**, **escrita colaborativa de histórias** e **refinamento do backlog** para garantir que as histórias atendam a critérios como a **Definição de Pronto (DoR - Definition of Ready)**. Técnicas de revisão garantem histórias completas, compreensíveis e com **critérios de aceite testáveis**. Fazendo as perguntas certas, o testador explora, desafia e melhora as histórias.

**Análise estática**:

- Identifica problemas **antes** do teste dinâmico, geralmente com **menos esforço** (não precisa de casos de teste; usa ferramentas).
- Frequentemente **incorporada à CI**.
- Detecta defeitos específicos no código e também avalia **manutenibilidade** e **segurança**.
- Exemplos de ferramentas: analisadores de código (linters), **verificadores ortográficos**, ferramentas de **legibilidade**.

### 3.1.1 Produtos de trabalho examináveis por testes estáticos

**Quase todos** os produtos de trabalho: especificações de requisitos, código-fonte, planos de teste, casos de teste, itens do backlog, cartas de teste, documentação de projeto, contratos, modelos.

- **Revisão**: qualquer produto que possa ser **lido e compreendido**.
- **Análise estática**: o produto precisa ter uma **estrutura** para ser verificado (modelos, código, texto com **sintaxe formal**).
- **Não apropriados**: produtos difíceis de interpretar por humanos e que também não podem ser analisados por ferramentas (ex.: **código executável de terceiros**, por motivos legais).

### 3.1.2 Valor do teste estático

- Detecta defeitos **nas primeiras fases** do SDLC (princípio do teste antecipado).
- Encontra defeitos que o **teste dinâmico não consegue** detectar: **código inacessível**, padrões de projeto não implementados como desejado, defeitos em produtos **não executáveis**.
- Avalia a qualidade e cria **confiança** nos produtos de trabalho; stakeholders confirmam se os requisitos descrevem suas **necessidades reais**.
- Cria **entendimento compartilhado** entre stakeholders e melhora a **comunicação** (por isso, envolver participantes variados).
- Revisões podem ser caras de implementar, mas o **custo total do projeto costuma ser bem menor** do que sem revisões (menos retrabalho tardio).
- **Análise estática** detecta defeitos de código de forma **mais eficiente** que o teste dinâmico → menos defeitos e menor esforço geral.

### 3.1.3 Diferenças entre teste estático e dinâmico

São **complementares** e têm objetivos semelhantes (detectar defeitos). Diferenças:

| Teste estático                                                                                    | Teste dinâmico                                                                         |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Encontra **defeitos diretamente**                                                                 | Provoca **falhas**; os defeitos são achados por análise posterior                      |
| Detecta com mais facilidade defeitos em **caminhos raramente executados** ou difíceis de alcançar | Precisa executar o caminho                                                             |
| Aplica-se a produtos **não executáveis** (e executáveis)                                          | Só produtos **executáveis**                                                            |
| Mede características que **não dependem da execução** (ex.: **manutenibilidade**)                 | Mede características que **dependem da execução** (ex.: **eficiência de performance**) |

Ambos detectam defeitos, mas **alguns tipos só são encontrados por um deles**.

Defeitos típicos **mais fáceis ou baratos** de achar com teste estático:

- **Requisitos**: inconsistências, ambiguidades, contradições, omissões, imprecisões, duplicações.
- **Projeto (design)**: estruturas de banco de dados ineficientes, modularização deficiente.
- **Codificação** (certos tipos): variáveis com valores indefinidos, variáveis não declaradas, código inacessível ou duplicado, complexidade excessiva.
- **Desvios de padrões**: ex.: convenções de nomenclatura.
- **Especificações de interface incorretas**: número, tipo ou ordem de parâmetros incompatíveis.
- **Vulnerabilidades de segurança** específicas: ex.: **estouro de buffer**.
- **Lacunas ou imprecisões na cobertura da base de teste**: ex.: falta de testes para um critério de aceite.

## 3.2 Processo de feedback e revisão

### 3.2.1 Benefícios do feedback antecipado e frequente dos stakeholders

- Permite **comunicação precoce** de possíveis problemas de qualidade.
- Pouco envolvimento dos stakeholders → produto pode não atender à visão deles → **retrabalho caro, prazos perdidos, jogo de culpa e até fracasso do projeto**.
- Feedback frequente **evita mal-entendidos** sobre requisitos e faz com que mudanças sejam compreendidas e implementadas **mais cedo**.
- Melhora o entendimento da equipe sobre o que está sendo construído e permite focar nos recursos de **maior valor** e com maior impacto positivo sobre os **riscos**.

### 3.2.2 Atividades do processo de revisão

A **ISO/IEC 20246** define um processo de revisão genérico, estruturado mas flexível, que pode ser adaptado. Quanto **mais formal** a revisão, **mais tarefas** de cada atividade são necessárias. Produtos grandes podem exigir **várias rodadas** de revisão.

| Atividade                                 | O que acontece                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Planejamento**                       | Define o **escopo**: objetivo, produto a revisar, características de qualidade a avaliar, áreas de foco, **critérios de saída**, informações de apoio (ex.: padrões), esforço e prazos                                                                                                                           |
| **2. Início da revisão**                  | Garantir que todos estejam **preparados**: acesso ao produto, entendimento das funções e responsabilidades, material necessário                                                                                                                                                                                  |
| **3. Revisão individual**                 | Cada revisor avalia a qualidade e identifica **anomalias, recomendações e perguntas**, usando técnicas de revisão (ex.: **baseada em checklist**, **baseada em cenário**). Tudo é **registrado**                                                                                                                 |
| **4. Comunicação e análise de problemas** | Anomalias **não são necessariamente defeitos**, então são analisadas e discutidas. Para cada uma: decidir **status, responsável e ações**. Geralmente numa **reunião de revisão**, onde também se decide o **nível de qualidade** do produto e as ações de acompanhamento (pode haver revisão de acompanhamento) |
| **5. Correção e relatório**               | Criar **relatório de defeito** para cada defeito, para acompanhar a correção. Atingidos os **critérios de saída**, o produto pode ser **aceito**. Os resultados são relatados                                                                                                                                    |

> Macete: **P-I-R-C-C** - **P**lanejar, **I**niciar, **R**evisar individualmente, **C**omunicar e analisar, **C**orrigir e relatar.

### 3.2.3 Funções e responsabilidades nas revisões

| Função                             | Responsabilidade                                                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Gerente**                        | Decide **o que** será revisado e fornece **recursos** (pessoas e tempo)                                           |
| **Autor**                          | **Cria e corrige** o produto de trabalho                                                                          |
| **Moderador** (facilitador)        | Garante o **andamento eficaz das reuniões**: mediação, gestão do tempo, **ambiente seguro** para todos falarem    |
| **Relator** (registrador, escriba) | **Reúne as anomalias** dos revisores e **registra** informações da revisão (decisões, novas anomalias da reunião) |
| **Revisor**                        | **Realiza** a revisão. Pode ser alguém do projeto, especialista no assunto ou qualquer stakeholder                |
| **Líder da revisão**               | **Responsabilidade geral** pela revisão: decide **quem** participa, organiza **quando e onde**                    |

A ISO/IEC 20246 descreve outras funções mais detalhadas.

> Pegadinha comum: **gerente** decide _o que_ revisar e dá recursos; **líder da revisão** decide _quem_ participa e _quando/onde_; **moderador** conduz a _reunião_.

### 3.2.4 Tipos de revisão

O nível de formalidade depende de: SDLC, maturidade do processo, importância e complexidade do produto, requisitos legais/regulatórios, necessidade de **trilha de auditoria**. O mesmo produto pode passar por vários tipos (ex.: primeiro informal, depois formal). A escolha considera também necessidades do projeto, recursos, tipo e riscos do produto, domínio de negócio e cultura da empresa.

| Tipo                            | Formalidade   | Quem conduz                                      | Objetivo principal                                                                                                                                           | Características                                                                                                                                               |
| ------------------------------- | ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Revisão informal**            | Mínima        | -                                                | **Detectar anomalias**                                                                                                                                       | Sem processo definido; sem resultado formal documentado                                                                                                       |
| **Walkthrough** (passo a passo) | Baixa a média | **Autor**                                        | Muitos: avaliar qualidade e criar confiança, **instruir/educar os revisores**, obter consenso, gerar ideias, motivar e capacitar o autor, detectar anomalias | Revisão individual antes é **opcional**                                                                                                                       |
| **Revisão técnica**             | Média a alta  | **Moderador**                                    | **Obter consenso e tomar decisões sobre um problema técnico**                                                                                                | Revisores **tecnicamente qualificados**; também detecta anomalias, avalia qualidade, gera ideias, motiva o autor                                              |
| **Inspeção**                    | **Máxima**    | Líder da revisão / moderador (**nunca o autor**) | **Encontrar o número máximo de anomalias**                                                                                                                   | Segue o **processo genérico completo**; **coleta métricas** para melhorar o SDLC e o próprio processo de inspeção; o autor **não pode** ser líder nem relator |

> Dicas de prova: "conduzida pelo autor" = **walkthrough**. "Consenso sobre problema técnico" = **revisão técnica**. "Mais formal, métricas, máximo de anomalias" = **inspeção**. "Sem processo nem documentação" = **informal**.

### 3.2.5 Fatores de sucesso para revisões

- Definir **objetivos claros** e **critérios de saída mensuráveis**. **Avaliar os participantes nunca deve ser um objetivo.**
- Escolher o **tipo de revisão adequado** aos objetivos, ao produto, aos participantes e ao contexto.
- Revisar em **pequenas partes**, para os revisores não perderem a concentração.
- Dar **feedback** das revisões a stakeholders e autores, para melhorarem o produto e suas atividades.
- Dar **tempo suficiente** para a preparação.
- **Apoio da gerência** ao processo de revisão.
- Tornar as revisões parte da **cultura** da organização (aprendizado e melhoria).
- **Treinamento** adequado para todos os participantes.
- **Facilitação** das reuniões.

## Resumo rápido do capítulo

- Estático = sem executar; revisões (manual) + análise estática (ferramenta).
- Quase tudo pode ser revisado; análise estática exige estrutura formal.
- Estático acha defeitos direto, cedo, em caminhos raros e em produtos não executáveis; mede manutenibilidade.
- Processo de revisão: planejamento, início, revisão individual, comunicação e análise, correção e relatório.
- Funções: gerente, autor, moderador, relator, revisor, líder da revisão.
- Tipos: informal < walkthrough < revisão técnica < inspeção.
