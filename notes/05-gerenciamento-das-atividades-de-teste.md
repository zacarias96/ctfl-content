---
title: "Gerenciamento das Atividades de Teste (335 min)"
sidebar:
  label: "Gerenciamento"
---

> Segundo maior capítulo. Tem questões **K3** de **estimativa** (três pontos, índices), **priorização** e **relatório de defeitos**.

## Palavras-chave (K1)

gerenciamento de defeitos, relatório de defeitos, critérios de entrada, critérios de saída, risco de produto, risco de projeto, risco, análise de risco, avaliação de risco, controle de risco, identificação de risco, nível de risco, gerenciamento de risco, mitigação de risco, monitoramento de risco, teste baseado em risco, abordagem de teste, relatório de conclusão de teste, controle de teste, monitoramento de teste, plano de teste, planejamento de teste, relatório de progresso de teste, pirâmide de teste, quadrantes de teste

## Objetivos de aprendizagem

| LO       | Nível  | Descrição                                                                        |
| -------- | ------ | -------------------------------------------------------------------------------- |
| FL-5.1.1 | K2     | Exemplificar a finalidade e o conteúdo de um plano de teste                      |
| FL-5.1.2 | K1     | Reconhecer como o testador agrega valor ao planejamento de iteração e liberação  |
| FL-5.1.3 | K2     | Comparar e contrastar critérios de entrada e de saída                            |
| FL-5.1.4 | **K3** | Usar técnicas de estimativa para calcular o esforço de teste                     |
| FL-5.1.5 | **K3** | Aplicar a priorização de casos de teste                                          |
| FL-5.1.6 | K1     | Relembrar os conceitos da pirâmide de teste                                      |
| FL-5.1.7 | K2     | Resumir os quadrantes de teste e sua relação com níveis e tipos                  |
| FL-5.2.1 | K1     | Identificar o nível de risco por probabilidade e impacto                         |
| FL-5.2.2 | K2     | Distinguir riscos de projeto e de produto                                        |
| FL-5.2.3 | K2     | Explicar como a análise de risco do produto influencia rigor e escopo dos testes |
| FL-5.2.4 | K2     | Explicar as medidas de resposta aos riscos de produto analisados                 |
| FL-5.3.1 | K1     | Relembrar as métricas usadas em testes                                           |
| FL-5.3.2 | K2     | Resumir finalidade, conteúdo e público dos relatórios de teste                   |
| FL-5.3.3 | K2     | Exemplificar como comunicar o status do teste                                    |
| FL-5.4.1 | K2     | Resumir como o gerenciamento de configuração apoia os testes                     |
| FL-5.5.1 | **K3** | Preparar um relatório de defeitos                                                |

## 5.1 Planejamento de Teste

### 5.1.1 Objetivo e conteúdo de um Plano de Teste

O **plano de teste** descreve **objetivos, recursos e processos** de um projeto de teste. Ele:

- Documenta **meios e cronograma** para atingir os objetivos do teste;
- Ajuda a garantir que as atividades atendam aos **critérios estabelecidos**;
- Serve de **meio de comunicação** com a equipe e os stakeholders;
- Demonstra que os testes seguirão a **política e a estratégia de teste** existentes (ou explica os desvios).

Planejar força os testadores a pensar nos desafios futuros: riscos, cronogramas, pessoas, ferramentas, custos, esforço. **O processo de preparar o plano já é útil**.

Conteúdo típico:

| Seção                      | Exemplos                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contexto do teste**      | Escopo, objetivos, restrições, base de teste                                                                                                                                                 |
| **Premissas e restrições** | Do projeto de teste                                                                                                                                                                          |
| **Stakeholders**           | Papéis, responsabilidades, relevância para os testes, necessidade de contratação e treinamento                                                                                               |
| **Comunicação**            | Formas, frequência, modelos de documentação                                                                                                                                                  |
| **Registro de riscos**     | Riscos de produto e de projeto                                                                                                                                                               |
| **Abordagem de teste**     | Níveis, tipos, técnicas, entregáveis, critérios de entrada e saída, independência, métricas a coletar, requisitos de dados e de ambiente, desvios da política e da estratégia organizacional |
| **Orçamento e cronograma** | -                                                                                                                                                                                            |

> Leitura complementar: ISO/IEC/IEEE 29119-3 (documentação de teste).

### 5.1.2 Contribuição do testador para o planejamento de iteração e liberação

Em SDLCs iterativos há dois tipos de planejamento:

|               | Planejamento de **liberação** (release)                                                                                                                                                                                                          | Planejamento de **iteração**                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Horizonte     | Lançamento de um produto                                                                                                                                                                                                                         | Fim de **uma** iteração                                                                                                                                                                                                                                             |
| Foco          | **Backlog do produto** (definir, redefinir, quebrar histórias grandes em menores); base para abordagem e plano de teste de todas as iterações                                                                                                    | **Backlog da iteração**                                                                                                                                                                                                                                             |
| O testador... | Participa da escrita de **histórias e critérios de aceite testáveis**; participa das análises de **risco de projeto e de qualidade**; **estima** o esforço de teste das histórias; determina a **abordagem de teste**; planeja o teste da versão | Participa da **análise de risco detalhada** das histórias; determina a **testabilidade**; divide histórias em **tarefas** (especialmente de teste); **estima** o esforço de todas as tarefas de teste; identifica e refina aspectos **funcionais e não funcionais** |

### 5.1.3 Critérios de Entrada e Critérios de Saída

- **Critérios de entrada**: **pré-condições** para iniciar uma atividade. Se não forem atendidos, a atividade tende a ser mais difícil, demorada, cara e arriscada.
- **Critérios de saída**: o que deve ser alcançado para a atividade ser **considerada concluída**.
- Devem ser definidos **para cada nível de teste** e variam conforme os objetivos.

| Critérios de entrada típicos                                                                       | Critérios de saída típicos                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disponibilidade de recursos**: pessoas, ferramentas, ambientes, dados de teste, orçamento, tempo | **Medidas de precisão**: nível de cobertura alcançado, nº de defeitos não resolvidos, densidade de defeitos, nº de casos de teste com falha                                |
| **Disponibilidade de testware**: base de teste, requisitos testáveis, histórias, casos de teste    | **Critérios de conclusão**: testes planejados executados, testes estáticos realizados, todos os defeitos encontrados relatados, todos os testes de regressão automatizados |
| **Nível de qualidade inicial do objeto de teste**: ex.: todos os **smoke tests** passaram          |                                                                                                                                                                            |

- **Esgotamento de tempo ou orçamento** também pode ser um critério de saída válido, **se os stakeholders analisaram e aceitaram o risco** de entrar em produção sem mais testes.
- No ágil:
  - Critério de saída = **DoD - Definition of Done (Definição de Feito)**: métricas objetivas para um item liberável.
  - Critério de entrada de uma história = **DoR - Definition of Ready (Definição de Pronto)**.

> Macete: **DoR** = pronta para **começar** (entrada). **DoD** = **feita**, pode ser entregue (saída).

### 5.1.4 Técnicas de estimativa

Estimar = prever a quantidade de trabalho de teste. Deixe claro aos stakeholders que a estimativa se baseia em **suposições** e está **sujeita a erros**. Tarefas pequenas são estimadas com mais precisão, então **decomponha tarefas grandes**.

| Técnica                         | Tipo          | Como funciona                                                                                                                                                                                                                         |
| ------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Baseada em índices (razões)** | Métricas      | Usa **dados históricos da própria organização** para derivar "índices padrão" para projetos semelhantes                                                                                                                               |
| **Extrapolação**                | Métricas      | Mede **o mais cedo possível no projeto atual** e extrapola o trabalho restante (modelo matemático). Muito adequada a SDLCs **iterativos**                                                                                             |
| **Wideband Delphi**             | Especialistas | Cada especialista estima **isoladamente**; se os desvios ficarem fora dos limites acordados, discutem e **reestimam isoladamente**, repetindo até o **consenso**. **Planning Poker** é uma variante (cartas numeradas), comum no ágil |
| **Três pontos**                 | Especialistas | Três estimativas: **otimista (o)**, **mais provável (m)** e **pessimista (p)**. Resultado = média ponderada                                                                                                                           |

**Fórmulas da estimativa de três pontos**

```
E  = (o + 4m + p) / 6
SD = (p - o) / 6        (desvio padrão / erro de medição)
Resultado: E ± SD
```

**Exemplo do syllabus**: o = 6, m = 9, p = 18 (homens/hora)

- E = (6 + 4×9 + 18) / 6 = (6 + 36 + 18) / 6 = 60 / 6 = **10**
- SD = (18 - 6) / 6 = **2**
- Estimativa: **10 ± 2** → entre **8 e 12** homens/hora.

**Exemplo de índices (syllabus)**: no projeto anterior, a razão desenvolvimento:teste foi **3:2**. Esforço de desenvolvimento atual = **600** h/h → teste = 600 × 2/3 = **400** homens/hora.

**Exemplo de extrapolação (syllabus)**: esforço de teste da próxima iteração = **média das três últimas iterações**.

### 5.1.5 Priorização de casos de teste

Os conjuntos de teste são organizados num **cronograma de execução** que define a ordem. Estratégias mais comuns:

| Estratégia                           | Ordem de execução                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Baseada em risco**                 | Pelos resultados da **análise de risco**: casos que cobrem os **riscos mais importantes** primeiro |
| **Baseada em cobertura**             | Casos com **maior cobertura** (ex.: de instrução) primeiro                                         |
| ↳ **Cobertura adicional** (variante) | O de maior cobertura primeiro; cada seguinte é o que traz a **maior cobertura adicional**          |
| **Baseada em requisitos**            | Pela **prioridade dos requisitos** (definida pelos **stakeholders**) rastreados aos casos de teste |

Restrições práticas:

- **Dependências**: se um caso de **prioridade alta depende** de um de prioridade baixa, o de **prioridade baixa roda antes**.
- **Disponibilidade de recursos**: ferramentas, ambientes ou pessoas disponíveis só em certos períodos.

> Dica para questões K3: monte a ordem por prioridade e depois **ajuste pelas dependências** (pré-requisitos sempre antes).

### 5.1.6 Pirâmide de Teste

Modelo que mostra que testes têm **granularidades diferentes**; apoia a **automação** e a **alocação de esforço**.

```
        /\        Ponta a ponta / UI: poucos, lentos, alto nível, cobrem muito
       /  \
      /----\      Serviço / integração
     /      \
    /--------\    Unidade (componente): muitos, pequenos, isolados, rápidos
```

- **Base**: testes pequenos, **isolados, rápidos**, verificam pequena parte da funcionalidade → são necessários **muitos**.
- **Topo**: testes complexos, de alto nível, **ponta a ponta**, mais **lentos**, cobrem grande parte da funcionalidade → bastam **poucos**.
- Quanto mais alta a camada, **menor a granularidade, o isolamento e a velocidade** (maior o tempo de execução).
- Camadas variam por modelo:
  - **Original (Mike Cohn, 2009)**: testes de **unidade**, de **serviço** e de **interface do usuário**.
  - Outro popular: **unidade (componente)**, **integração (integração de componentes)** e **ponta a ponta**.

### 5.1.7 Quadrantes de Teste (Brian Marick)

Agrupam níveis, tipos, atividades, técnicas e produtos de trabalho no **desenvolvimento ágil**. Ajudam a gestão a garantir que **todos os tipos e níveis adequados** estejam no SDLC e a comunicar os tipos de teste a todos os stakeholders.

Dois eixos:

- **Voltado para o negócio** x **voltado para a tecnologia**;
- **Apoia a equipe** (orienta o desenvolvimento) x **critica/avalia o produto** (mede o comportamento frente às expectativas).

|                          | **Apoia a equipe**                                                                                                                                                                | **Avalia o produto**                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Voltado ao negócio**   | **Q2**: testes funcionais, exemplos, testes de histórias de usuário, protótipos de UX, testes de API, simulações. Verificam **critérios de aceite**. **Manuais ou automatizados** | **Q3**: testes **exploratórios**, de **usabilidade**, **UAT**. Orientados ao usuário, geralmente **manuais** |
| **Voltado à tecnologia** | **Q1**: testes de **componente** e de **integração de componentes**. **Automatizados** e na **CI**                                                                                | **Q4**: **smoke tests** e testes **não funcionais** (**exceto usabilidade**). Geralmente **automatizados**   |

> Pegadinha: **usabilidade fica no Q3**, não no Q4, mesmo sendo não funcional.

## 5.2 Gerenciamento de Risco

Gerenciar riscos aumenta a probabilidade de atingir os objetivos, melhora a qualidade e aumenta a confiança dos stakeholders (ISO 31000). Atividades principais:

- **Análise de risco** = **identificação** + **avaliação**;
- **Controle de risco** = **mitigação** + **monitoramento**.

**Teste baseado em risco**: abordagem em que as atividades de teste são **selecionadas, priorizadas e gerenciadas** com base na análise e no controle de riscos.

### 5.2.1 Definição de risco e atributos

**Risco**: possível evento, perigo, ameaça ou situação cuja ocorrência causa **efeito adverso**. Dois fatores:

- **Probabilidade**: chance de ocorrer (**maior que 0 e menor que 1**; se fosse 1 seria um problema, não um risco).
- **Impacto (dano)**: consequências da ocorrência.

Juntos expressam o **nível de risco**. Quanto **maior o nível**, mais importante é tratá-lo.

### 5.2.2 Riscos de projeto x riscos de produto

|                | **Riscos de projeto**                                                                                                                                                                                                                                                                                                                       | **Riscos de produto**                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relacionados a | **Gestão e controle do projeto**                                                                                                                                                                                                                                                                                                            | **Características de qualidade do produto** (ISO 25010)                                                                                                                                                              |
| Exemplos       | **Organizacionais**: atrasos em entregas, estimativas imprecisas, cortes de custo. **Pessoal**: habilidades insuficientes, conflitos, problemas de comunicação, falta de pessoal. **Técnicos**: aumento de escopo (scope creep), suporte ruim de ferramentas. **Fornecedores**: falha de entrega de terceiros, falência da empresa de apoio | Funcionalidade ausente ou errada, cálculos incorretos, erros de execução, arquitetura ruim, algoritmos ineficientes, tempo de resposta inadequado, má experiência do usuário, vulnerabilidades de segurança          |
| Consequências  | Impacto no **cronograma, orçamento ou escopo**                                                                                                                                                                                                                                                                                              | Insatisfação do usuário; perda de receita, confiança e reputação; danos a terceiros; alto custo de manutenção e sobrecarga do helpdesk; **penalidades criminais**; em casos extremos, danos físicos, lesões ou morte |

> Macete: se o risco afeta **como o projeto anda** (prazo, pessoas, fornecedores) é de **projeto**. Se afeta **o que o software faz ou quão bem faz** é de **produto**.

### 5.2.3 Análise de Risco do Produto

Objetivo (do ponto de vista do teste): dar **consciência do risco** para **focar o esforço** e **minimizar o risco residual**. Idealmente começa **cedo no SDLC**.

- **Identificação**: gerar uma lista abrangente de riscos. Técnicas: **brainstorming, workshops, entrevistas, diagramas de causa e efeito**.
- **Avaliação**: **categorizar** os riscos, determinar **probabilidade, impacto e nível**, **priorizar** e **propor** formas de tratá-los. A categorização ajuda porque riscos da mesma categoria costumam ter mitigação semelhante.
  - **Quantitativa**: nível = **probabilidade × impacto**.
  - **Qualitativa**: **matriz de risco**.
  - Pode combinar as duas.

> Exemplo de matriz qualitativa:
>
> | Probabilidade \ Impacto | Baixo | Médio | Alto  |
> | ----------------------- | ----- | ----- | ----- |
> | **Alta**                | Médio | Alto  | Alto  |
> | **Média**               | Baixo | Médio | Alto  |
> | **Baixa**               | Baixo | Baixo | Médio |

A análise de risco do produto influencia o **rigor e o escopo** dos testes. Os resultados servem para:

- Determinar o **escopo** dos testes;
- Determinar os **níveis** e propor os **tipos** de teste;
- Determinar as **técnicas** e a **cobertura** a alcançar;
- **Estimar** o esforço de cada tarefa;
- **Priorizar** os testes para achar defeitos críticos o mais cedo possível;
- Determinar se **outras atividades além de testes** podem reduzir o risco.

### 5.2.4 Controle de Risco do Produto

Todas as medidas tomadas em resposta aos riscos identificados e avaliados:

- **Mitigação**: implementar as ações propostas para **reduzir o nível de risco**.
- **Monitoramento**: garantir que a mitigação é **eficaz**, obter mais informações para melhorar a avaliação e identificar **riscos emergentes**.

Opções de resposta a um risco analisado:

- **Mitigação por meio de testes**;
- **Aceitação** do risco;
- **Transferência** do risco;
- **Plano de contingência**.

Ações de **mitigação por meio de testes**:

- Selecionar testadores com **experiência e habilidade adequadas** ao tipo de risco;
- Aplicar um nível adequado de **independência**;
- Conduzir **revisões** e **análise estática**;
- Aplicar **técnicas de teste** e **níveis de cobertura** adequados;
- Aplicar **tipos de teste** que abordem as características de qualidade afetadas;
- Realizar **testes dinâmicos**, incluindo **regressão**.

## 5.3 Monitoramento, Controle e Conclusão do Teste

- **Monitoramento**: **coleta de informações** sobre os testes para avaliar o progresso e medir se os **critérios de saída** (ou tarefas ligadas a eles) foram atendidos, ex.: metas de cobertura de riscos, requisitos ou critérios de aceite.
- **Controle**: usa as informações do monitoramento para dar **orientação e ações corretivas** (**diretrizes de controle**). Exemplos:
  - **Repriorizar** testes quando um risco vira problema;
  - **Reavaliar** se um item atende aos critérios de entrada ou saída após retrabalho;
  - **Ajustar o cronograma** por atraso na entrega do ambiente de teste;
  - **Adicionar recursos** quando e onde necessário.
- **Conclusão**: coleta dados das atividades concluídas para consolidar experiência, testware e informações. Ocorre em **marcos**: fim de nível de teste, fim de iteração ágil, conclusão (ou **cancelamento**) de projeto de teste, lançamento de sistema, conclusão de versão de manutenção.

### 5.3.1 Métricas usadas em testes

Mostram progresso frente a cronograma e orçamento, qualidade atual do objeto de teste e eficácia das atividades.

| Categoria                | Exemplos                                                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Progresso do projeto** | Conclusão de tarefas, uso de recursos, esforço de teste                                                                                        |
| **Progresso do teste**   | Progresso da implementação de casos, da preparação do ambiente, nº de casos executados/não executados, aprovados/reprovados, tempo de execução |
| **Qualidade do produto** | Disponibilidade, tempo de resposta, **tempo médio até a falha (MTTF)**                                                                         |
| **Defeitos**             | Nº e prioridades de defeitos encontrados/corrigidos, **densidade de defeitos**, **porcentagem de detecção de defeitos (DDP)**                  |
| **Risco**                | Nível de **risco residual**                                                                                                                    |
| **Cobertura**            | Cobertura de requisitos, cobertura de código                                                                                                   |
| **Custo**                | Custo do teste, custo organizacional da qualidade                                                                                              |

### 5.3.2 Relatórios de Teste: objetivo, conteúdo e público

|          | **Relatório de progresso**                                                                                                                                                             | **Relatório de conclusão**                                                                                                                                                                                                                                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quando   | **Regularmente** durante o teste (diário, semanal...)                                                                                                                                  | Na **conclusão** de projeto, nível ou tipo de teste, idealmente com critérios de saída atendidos                                                                                                                                                                                                                                            |
| Objetivo | Apoiar o **controle contínuo**; informação suficiente para ajustar cronograma, recursos ou plano                                                                                       | **Resumir um estágio** do teste e informar testes subsequentes                                                                                                                                                                                                                                                                              |
| Conteúdo | Período do teste; progresso (adiantado/atrasado) e desvios notáveis; **impedimentos e soluções**; métricas; riscos **novos e alterados**; testes **planejados para o próximo período** | Resumo do teste; avaliação dos testes e da **qualidade do produto** frente ao plano original (objetivos e critérios de saída); **desvios do plano** (cronograma, duração, esforço); impedimentos e soluções alternativas; métricas (dos relatórios de progresso); **riscos não mitigados e defeitos não corrigidos**; **lições aprendidas** |

- **Públicos diferentes** exigem informações, **formalidade e frequência** diferentes: para a própria equipe, relatórios **frequentes e informais**; para um projeto concluído, **modelo definido e uma única vez**.
- A ISO/IEC/IEEE 29119-3 chama o relatório de progresso de **relatório de status de teste**.

### 5.3.3 Comunicação do status dos testes

O meio depende das preocupações da gestão, das estratégias da organização, de normas ou, em equipes auto-organizadas, da própria equipe. Opções:

- **Comunicação verbal** com a equipe e stakeholders;
- **Painéis (dashboards)**: de CI/CD, de tarefas, **gráficos de burn-down**;
- **Canais eletrônicos**: e-mail, chat;
- **Documentação on-line**;
- **Relatórios formais** de teste.

Podem ser combinados. **Equipes distribuídas** (distância ou fuso horário) tendem a precisar de comunicação **mais formal**. Adapte a informação ao interesse de cada stakeholder.

## 5.4 Gerenciamento de Configuração (CM)

O **CM** oferece disciplina para **identificar, controlar e rastrear** produtos de trabalho (planos, estratégias, condições, casos, scripts, resultados, logs e relatórios de teste) como **itens de configuração**.

- Para item complexo (ex.: **ambiente de teste**), registra os itens que o compõem, seus **relacionamentos e versões**.
- Item aprovado para teste vira **linha de base (baseline)** e só muda via **processo formal de controle de mudanças**.
- Registra os itens alterados quando uma nova baseline é criada; permite **reverter a uma baseline anterior** para **reproduzir resultados** de testes anteriores.

Para apoiar os testes, o CM garante que:

- **Todos os itens de configuração** (inclusive itens de teste) são **identificados de forma única**, **versionados**, têm **alterações rastreadas** e são **relacionados entre si**, mantendo a **rastreabilidade**;
- Todos os itens de documentação e software são **referenciados sem ambiguidade** na documentação de teste.

CI, entrega contínua, implantação contínua e testes associados costumam fazer parte de um **pipeline DevOps automatizado**, que normalmente inclui **CM automatizado**.

## 5.5 Gerenciamento de Defeitos

Como achar defeitos é um objetivo central, é essencial ter um processo estabelecido. As **anomalias** relatadas podem ser **defeitos reais** ou outra coisa (ex.: **falso positivo**, **solicitação de mudança**), o que se resolve durante o tratamento do relatório. Podem ser relatadas em **qualquer fase do SDLC**.

O processo inclui, no mínimo:

- Um **fluxo de trabalho** da descoberta ao fechamento: **registrar → analisar → classificar → decidir a resposta (corrigir ou manter como está) → fechar**;
- **Regras de classificação**.

Deve ser seguido por **todos os stakeholders**. Defeitos de testes estáticos (especialmente análise estática) devem ser tratados de forma semelhante.

**Objetivos do relatório de defeitos**:

- Dar aos responsáveis **informações suficientes para resolver** o problema;
- Fornecer meios de **rastrear a qualidade** do produto;
- Fornecer **ideias para melhorar** os processos de desenvolvimento e teste.

**Conteúdo típico** (teste dinâmico):

| Campo                                              | Descrição                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Identificador único**                            | -                                                                                                             |
| **Título**                                         | Breve resumo da anomalia                                                                                      |
| **Data, organização emissora e autor** (com cargo) | Quando e por quem foi observada                                                                               |
| **Objeto de teste e ambiente de teste**            | Identificação (versão, configuração)                                                                          |
| **Contexto**                                       | Caso de teste em execução, atividade de teste, fase do SDLC, técnica, checklist ou dados usados               |
| **Descrição da falha**                             | Para permitir **reprodução e resolução**: passos, logs, dumps de banco, capturas de tela, gravações           |
| **Resultado esperado e resultado real**            | -                                                                                                             |
| **Severidade**                                     | **Grau de impacto** nos interesses dos stakeholders ou nos requisitos                                         |
| **Prioridade**                                     | **Urgência da correção**                                                                                      |
| **Status**                                         | Aberto, adiado, duplicado, aguardando correção, aguardando teste de confirmação, reaberto, fechado, rejeitado |
| **Referências**                                    | Ex.: ao caso de teste                                                                                         |

Ferramentas de gerenciamento de defeitos podem preencher alguns campos automaticamente (ID, data, autor, status inicial). A ISO/IEC/IEEE 29119-3 chama relatórios de defeitos de **relatórios de incidentes**.

> **Severidade x prioridade**: severidade = **impacto** (técnico/negócio); prioridade = **urgência** de corrigir. Um erro de digitação no logo da home pode ter **baixa severidade e alta prioridade**; um crash numa função raramente usada pode ter **alta severidade e prioridade menor**.

**Exemplo de relatório de defeito**

```
ID:            DEF-0142
Título:        Checkout aceita cupom expirado e aplica desconto
Data/Autor:    09/11/2026 - Ana Souza (Analista de Testes), Equipe QA
Objeto/Amb.:   Loja Web v2.3.1 - Homologação, Chrome 130, Windows 11
Contexto:      Caso de teste CT-077 (cupons), teste de sistema, BVA nas datas de validade
Passos:        1. Logar como cliente padrão
               2. Adicionar produto de R$ 200 ao carrinho
               3. Aplicar cupom "BLACK10" (validade 08/11/2026)
               4. Finalizar a compra
Esperado:      Mensagem "Cupom expirado" e total de R$ 200
Real:          Desconto de 10% aplicado; total de R$ 180
Anexos:        screenshot_checkout.png, log_api_cupom.txt
Severidade:    Alta (perda de receita)
Prioridade:    Alta
Status:        Aberto
Referências:   RQ-031 (regras de cupom), CT-077
```

## Resumo rápido do capítulo

- Plano de teste: contexto, premissas, stakeholders, comunicação, riscos, abordagem, orçamento e cronograma.
- Critérios de entrada (DoR) x saída (DoD); fim de tempo/orçamento é saída válida se o risco for aceito.
- Estimativa: índices e extrapolação (métricas); Wideband Delphi/Planning Poker e três pontos (especialistas). E = (o + 4m + p)/6; SD = (p - o)/6.
- Priorização: risco, cobertura (e cobertura adicional), requisitos; dependências mandam.
- Pirâmide: base com muitos testes rápidos e isolados; topo com poucos testes E2E lentos.
- Quadrantes: Q1 tecnologia/apoia (unidade), Q2 negócio/apoia (funcional, API), Q3 negócio/avalia (exploratório, usabilidade, UAT), Q4 tecnologia/avalia (smoke, não funcional).
- Risco = probabilidade × impacto; projeto x produto; análise (identificar + avaliar) e controle (mitigar + monitorar).
- Métricas, relatórios de progresso x conclusão, formas de comunicar status.
- CM: itens de configuração, baseline, controle de mudanças, rastreabilidade.
- Defeitos: fluxo do registro ao fechamento; relatório com dados para reproduzir, severidade, prioridade e status.
