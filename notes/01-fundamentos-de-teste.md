---
title: "Fundamentos de Teste (180 min)"
sidebar:
  label: "Fundamentos de Teste"
---

## Palavras-chave (K1)

Definições do [Glossário ISTQB](https://glossary.istqb.org/pt_BR/) (pt-BR), agrupadas por assunto, com uma leitura "em outras palavras" para fixar.

**Conceitos centrais**

| Termo                 | Definição (Glossário ISTQB)                                                                                                                            | Em outras palavras                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| teste                 | O processo no ciclo de vida do desenvolvimento de software que avalia a qualidade de um componente ou sistema e dos produtos de trabalho relacionados. | Vai muito além de "executar o sistema": inclui revisar, planejar, analisar... |
| qualidade             | O grau em que um produto de trabalho atende aos requisitos declarados e implícitos.                                                                    | Não é só o que está escrito: o implícito também conta.                        |
| garantia de qualidade | Atividades focadas em proporcionar confiança de que os requisitos de qualidade serão cumpridos.                                                        | QA = **processo**, preventivo. Teste é QC (produto, corretivo).               |
| verificação           | O processo de confirmar se um produto final atende às suas especificações.                                                                             | "Fizemos **conforme a especificação**?"                                       |
| validação             | Confirmação, por meio de análise, de que um produto do trabalho atende às necessidades de uma parte interessada.                                       | "Fizemos **o que o usuário precisa**?"                                        |
| depuração             | O processo de encontrar, analisar e remover as causas de falhas em um componente ou sistema.                                                           | Teste **mostra** a falha; depuração **corrige** a causa (tarefa do dev).      |
| cobertura             | O grau em que os itens de uma abrangência específica são executados por um conjunto de testes, expresso como uma porcentagem.                          | "Quantos % do que eu queria exercitar foi exercitado?"                        |

**Da causa ao sintoma** (a cadeia cai muito na prova)

| Termo      | Definição (Glossário ISTQB)                                                                                                                  | Em outras palavras                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| causa raiz | Uma fonte de um defeito tal que, se ele for removido, a ocorrência do tipo do defeito é reduzida ou removida.                                | O "porquê" do erro (pressa, falta de treino...).  |
| erro       | Uma ação humana que resulta em um defeito.                                                                                                   | Engano de **uma pessoa**.                         |
| defeito    | Uma imperfeição ou deficiência em um produto de trabalho que não atende aos seus requisitos ou especificações ou prejudica o uso pretendido. | O "bug" **no artefato** (código, requisito, doc). |
| falha      | Uma situação em que um componente ou sistema não atende aos requisitos dentro dos limites especificados durante sua execução.                | O defeito **se manifestando em execução**.        |

> Cadeia: **causa raiz → erro → defeito → falha**. Nem todo defeito gera falha (o trecho pode nunca ser executado), e falhas também podem vir de condições ambientais (radiação, campo magnético).

**Atividades do processo de teste** (na ordem do processo)

| Termo                  | Definição (Glossário ISTQB)                                                                                                                                                   | Em outras palavras                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| planejamento de teste  | Atividade de criação ou atualização de um plano de teste.                                                                                                                     | Definir objetivos e a abordagem.                                    |
| monitoramento de teste | A atividade que verifica o status das atividades de teste, identifica quaisquer desvios do planejado ou esperado e relata o status aos stakeholders.                          | **Observar** e medir.                                               |
| controle de teste      | A atividade que desenvolve e aplica ações corretivas para colocar um projeto de teste no caminho certo quando ele se desvia do que foi planejado.                             | **Agir** sobre o que o monitoramento mostrou.                       |
| análise de teste       | A atividade que identifica as condições de teste, analisando a base do teste.                                                                                                 | **O que** testar.                                                   |
| modelagem de teste     | Atividade que deriva e especifica os casos e condições de teste.                                                                                                              | **Como** testar.                                                    |
| implementação de teste | A atividade que prepara o testware necessário para a execução do teste.                                                                                                       | Deixar **tudo pronto** para rodar (procedimentos, dados, ambiente). |
| execução de teste      | Atividade que executa um teste em um componente ou sistema produzindo resultados reais.                                                                                       | Rodar e comparar real x esperado.                                   |
| conclusão do teste     | A atividade que torna o testware disponível para uso posterior, deixando o ambiente de teste em condições satisfatórias e comunicando os resultados obtidos aos stakeholders. | Arquivar, limpar, lições aprendidas.                                |

**Artefatos e elementos do teste**

| Termo                 | Definição (Glossário ISTQB)                                                                                                                                                                                     | Em outras palavras                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| objetivo de teste     | O propósito do teste.                                                                                                                                                                                           | Por que estou testando (achar defeitos, reduzir risco...).     |
| objeto de teste       | O produto de trabalho a ser testado.                                                                                                                                                                            | **O alvo** do teste.                                           |
| base de teste         | O conjunto de conhecimentos usado como base para a análise e o modelagem de teste.                                                                                                                              | **De onde** tiro os testes (requisitos, histórias, código...). |
| condição de teste     | Um aspecto testável de um componente ou sistema que se pretenda testar.                                                                                                                                         | Resultado da **análise**.                                      |
| caso de teste         | Um conjunto de pré-condições, entradas, ações (quando aplicável), resultados esperados e pós-condições, desenvolvidos com base nas condições de teste.                                                          | Resultado da **modelagem**.                                    |
| procedimento de teste | Uma sequência de casos de teste em ordem de execução e quaisquer ações associadas que possam ser necessárias para estabelecer as pré-condições iniciais e quaisquer atividades de encerramento após a execução. | Resultado da **implementação**.                                |
| dados de teste        | Dados necessários para a execução de um teste.                                                                                                                                                                  | Valores concretos usados nos casos.                            |
| resultado de teste    | O status da execução de um teste.                                                                                                                                                                               | Passou, falhou, bloqueado...                                   |
| testware              | Produtos de trabalho produzidos durante o processo de teste para uso no planejamento, projeto, execução, avaliação e relatório de testes.                                                                       | **Tudo** o que o teste produz.                                 |

## Objetivos de aprendizagem

| LO       | Nível | Descrição                                                        |
| -------- | ----- | ---------------------------------------------------------------- |
| FL-1.1.1 | K1    | Identificar objetivos típicos de teste                           |
| FL-1.1.2 | K2    | Diferenciar teste de depuração                                   |
| FL-1.2.1 | K2    | Exemplificar por que os testes são necessários                   |
| FL-1.2.2 | K1    | Relembrar a relação entre testes e garantia de qualidade         |
| FL-1.2.3 | K2    | Distinguir causa raiz, erro, defeito e falha                     |
| FL-1.3.1 | K2    | Explicar os sete princípios de teste                             |
| FL-1.4.1 | K2    | Resumir as atividades e tarefas de teste                         |
| FL-1.4.2 | K2    | Explicar o impacto do contexto no processo de teste              |
| FL-1.4.3 | K2    | Diferenciar o testware de cada atividade                         |
| FL-1.4.4 | K2    | Explicar o valor da rastreabilidade                              |
| FL-1.4.5 | K2    | Comparar os papéis no teste                                      |
| FL-1.5.1 | K2    | Dar exemplos de habilidades genéricas para testar                |
| FL-1.5.2 | K1    | Relembrar as vantagens da abordagem de equipe completa           |
| FL-1.5.3 | K2    | Distinguir benefícios e desvantagens da independência dos testes |

## 1.1 O que é teste?

Software que não funciona bem pode causar perda de dinheiro, tempo, reputação e, em casos extremos, lesões ou morte. **Teste de software** é um **conjunto de atividades para descobrir defeitos e avaliar a qualidade de artefatos de software**. O artefato sendo testado é o **objeto de teste**.

Dois equívocos comuns:

1. **"Teste é só executar o software."** Errado: teste inclui várias outras atividades (planejar, analisar, modelar, revisar...) e deve estar alinhado ao **SDLC** (ciclo de vida de desenvolvimento de software).
2. **"Teste é só verificação."** Errado: teste envolve:
   - **Verificação**: o sistema atende aos **requisitos especificados**? ("construímos o produto certo conforme a especificação?")
   - **Validação**: o sistema atende às **necessidades dos usuários e stakeholders** no ambiente operacional? ("construímos o produto certo para o usuário?")

Tipos de teste quanto à execução:

- **Teste dinâmico**: executa o software. Usa técnicas de teste para derivar casos de teste (cap. 4).
- **Teste estático**: **não** executa o software. Inclui **revisões** e **análise estática** (cap. 3).

Teste também é atividade de gestão (planejado, estimado, monitorado e controlado - cap. 5) e, apesar do uso de ferramentas (cap. 6), é em grande parte uma **atividade intelectual**: exige conhecimento especializado, habilidades analíticas, pensamento crítico e sistêmico.

> Leitura complementar: ISO/IEC/IEEE 29119-1 (conceitos de teste).

### 1.1.1 Objetivos do teste

Objetivos típicos:

- Avaliar produtos de trabalho (requisitos, histórias de usuário, projeto, código).
- Detectar falhas e defeitos.
- Garantir a cobertura necessária do objeto de teste.
- Reduzir o nível de risco de qualidade inadequada.
- Verificar se os requisitos especificados foram atendidos.
- Verificar conformidade com requisitos contratuais, legais e normativos.
- Fornecer informações aos stakeholders para decisões informadas.
- Criar confiança na qualidade do objeto de teste.
- Validar se o objeto de teste está completo e funciona como os stakeholders esperam.

Os objetivos **variam conforme o contexto**: produto testado, nível de teste, riscos, SDLC adotado, fatores de negócio (estrutura corporativa, concorrência, time-to-market).

### 1.1.2 Teste e depuração

São **atividades distintas**.

|                       | Teste                                                                         | Depuração (debugging)                              |
| --------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------- |
| O que faz             | Dispara **falhas** (dinâmico) ou encontra **defeitos** diretamente (estático) | Encontra, analisa e **remove a causa** (o defeito) |
| Quem costuma fazer    | Testadores (e outros)                                                         | Desenvolvedores                                    |
| É atividade de teste? | Sim                                                                           | **Não**                                            |

Processo típico de depuração após uma falha em teste dinâmico:

1. **Reproduzir** a falha.
2. **Diagnosticar** (encontrar a causa).
3. **Corrigir** a causa.

Depois vem:

- **Teste de confirmação**: verifica se a correção resolveu o problema. De preferência feito **pela mesma pessoa** que fez o teste inicial.
- **Teste de regressão**: verifica se a correção causou falhas em outras partes (ver 2.2.3).

Quando o **teste estático** encontra um defeito, a depuração só precisa **removê-lo**: não há reprodução nem diagnóstico, porque o teste estático acha o defeito diretamente e não causa falhas.

## 1.2 Por que os testes são necessários?

Teste é uma forma de **controle de qualidade** que ajuda a atingir os objetivos dentro do escopo, tempo, qualidade e orçamento. A contribuição não se limita à equipe de teste: **qualquer stakeholder** pode usar habilidades de teste para levar o projeto ao sucesso.

### 1.2.1 Contribuições dos testes para o sucesso

- **Meio econômico de detectar defeitos.** Os defeitos são removidos pela depuração (que não é teste), então o teste contribui **indiretamente** para a qualidade.
- **Avalia diretamente a qualidade** do objeto de teste em vários estágios do SDLC, apoiando decisões como a de **liberação**.
- **Representa indiretamente os usuários** no projeto: os testadores levam o entendimento das necessidades do usuário ao longo do ciclo (envolver usuários reais costuma ser caro e inviável).
- **Atende a requisitos contratuais, legais ou normativos.**

### 1.2.2 Testes e Garantia da Qualidade (QA)

Teste **não é** o mesmo que QA. Teste é uma forma de **Controle de Qualidade (QC)**.

|                             | Controle de Qualidade (QC)                                                                    | Garantia da Qualidade (QA)                                  |
| --------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Natureza                    | **Corretiva**                                                                                 | **Preventiva**                                              |
| Foco                        | **Produto**                                                                                   | **Processo**                                                |
| Ideia                       | Atividades que levam a níveis adequados de qualidade                                          | Bom processo seguido corretamente gera bom produto          |
| Exemplos                    | Testes, métodos formais (verificação de modelos, prova de corretude), simulação, prototipagem | Implementar e melhorar processos de desenvolvimento e teste |
| Responsável                 | -                                                                                             | **Todos** no projeto                                        |
| Uso dos resultados de teste | Corrigir defeitos                                                                             | Feedback sobre o desempenho dos processos                   |

### 1.2.3 Erros, Defeitos, Falhas e Causas-raiz

Cadeia: **erro (engano humano) → defeito (falta, bug) → falha**

- **Erro (equívoco/engano)**: ação humana incorreta. Causas: pressão de tempo, complexidade (de produtos, processos, infraestrutura, interações), cansaço, falta de treinamento.
- **Defeito (falta, bug)**: imperfeição em um artefato - documentação (requisitos, script de teste), código-fonte ou artefato de suporte (ex.: arquivo de build).
  - Defeitos nos artefatos iniciais do SDLC, se não detectados, geram artefatos defeituosos depois.
- **Falha**: quando um defeito no código é **executado** e o sistema deixa de fazer o que deveria ou faz o que não deveria.
  - Alguns defeitos **sempre** causam falha quando executados; outros só em **circunstâncias específicas**; alguns **nunca** causam.
- Falhas também podem vir de **condições ambientais** (ex.: radiação ou campo eletromagnético causando defeitos no firmware), não só de erros/defeitos.
- **Causa raiz**: motivo fundamental para a ocorrência de um problema (ex.: a situação que levou ao erro). Identificada pela **análise de causa raiz**, normalmente feita quando ocorre uma falha ou se identifica um defeito. Tratar a causa raiz ajuda a **prevenir** ou reduzir defeitos semelhantes no futuro.

> Exemplo: o analista estava sob pressão de prazo (**causa raiz**) e entendeu errado uma regra de juros (**erro**), escrevendo um requisito incorreto e depois o código errado (**defeito**). Em produção, clientes recebem cobranças erradas (**falha**).

## 1.3 Os Sete Princípios de Teste

| #   | Princípio                                                  | Ideia central                                                                                                                                                                                                                              |
| --- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **O teste mostra a presença, não a ausência de defeitos**  | Testes reduzem a probabilidade de defeitos não descobertos, mas **não provam a corretude** (Buxton 1970).                                                                                                                                  |
| 2   | **Testes exaustivos são impossíveis**                      | Testar tudo só é viável em casos triviais. Use técnicas de teste, priorização de casos de teste e teste baseado em risco para focar o esforço (Manna 1978).                                                                                |
| 3   | **Testes antecipados economizam tempo e dinheiro**         | Defeitos removidos cedo não geram defeitos derivados; o custo da qualidade cai. Inicie testes estáticos e dinâmicos o quanto antes (Boehm 1981). Base do **shift-left**.                                                                   |
| 4   | **Os defeitos se agrupam**                                 | Poucos componentes concentram a maioria dos defeitos ou falhas operacionais - ilustração do **Princípio de Pareto** (Enders 1975). Agrupamentos previstos e observados alimentam o teste baseado em risco.                                 |
| 5   | **Os testes se degradam** (antigo "paradoxo do pesticida") | Repetir os mesmos testes os torna menos eficazes para achar **novos** defeitos. Solução: modificar testes e dados, criar novos. Exceção benéfica: **regressão automatizada** (Beizer 1990).                                                |
| 6   | **Os testes dependem do contexto**                         | Não existe abordagem universal; testa-se de forma diferente em contextos diferentes (Kaner 2011).                                                                                                                                          |
| 7   | **Falácia da ausência de defeitos**                        | Verificar tudo e corrigir todos os defeitos **não garante** sucesso: o sistema pode não atender às necessidades do usuário, aos objetivos de negócio ou ser inferior à concorrência. Além da verificação, faça **validação** (Boehm 1981). |

> Dica de prova: questões costumam descrever uma situação e pedir o princípio. "Rodamos os mesmos testes há meses e não acham nada novo" = **testes se degradam**. "Software sem bugs mas ninguém usa" = **falácia da ausência de defeitos**. "80% dos defeitos em 2 módulos" = **defeitos se agrupam**.

## 1.4 Atividades de teste, Testware e Papéis no teste

O conjunto de atividades comuns forma o **processo de teste**, que é adaptado à situação. Quais atividades entram, como e quando são implementadas é decidido no **planejamento do teste** (5.1).

> Leitura complementar: ISO/IEC/IEEE 29119-2 (processos de teste).

### 1.4.1 Atividades e Tarefas de Teste

Embora pareçam sequenciais, as atividades costumam ser **iterativas ou paralelas** e precisam ser adaptadas ao sistema e ao projeto.

| Atividade                    | O que envolve                                                                                                                                                                                                                                                                                                                       | Pergunta-chave                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Planejamento**             | Definir os **objetivos do teste** e selecionar a abordagem que melhor os atinge dentro das restrições do contexto (5.1).                                                                                                                                                                                                            | Por que e como vamos testar?                                          |
| **Monitoramento e Controle** | **Monitoramento**: verificar continuamente as atividades e comparar o progresso real com o plano. **Controle**: tomar as ações necessárias para atingir os objetivos (5.3).                                                                                                                                                         | Estamos no caminho? O que ajustar?                                    |
| **Análise**                  | Analisar a **base de teste** para identificar recursos testáveis; definir e **priorizar condições de teste** com riscos associados; avaliar base e objeto de teste para achar defeitos e avaliar a **testabilidade**. Apoiada por técnicas de teste.                                                                                | **"O que testar?"** (em termos de critérios de cobertura mensuráveis) |
| **Modelagem (design)**       | Elaborar condições de teste em **casos de teste** e outros materiais (ex.: **cartas de teste**); identificar **itens de cobertura**; definir **requisitos de dados de teste**; projetar o **ambiente de teste** e identificar infraestrutura e ferramentas.                                                                         | **"Como testar?"**                                                    |
| **Implementação**            | Criar ou adquirir o testware necessário à execução (ex.: **dados de teste**); organizar casos em **procedimentos de teste** e **conjuntos (suítes)**; criar **scripts** manuais e automatizados; priorizar e montar o **cronograma de execução**; **montar e verificar o ambiente de teste**.                                       | Está tudo pronto para rodar?                                          |
| **Execução**                 | Rodar os testes conforme o cronograma (manual ou automatizado, incluindo testes contínuos ou em pares); **comparar resultados reais x esperados**; **registrar** resultados; **analisar anomalias** para identificar causas prováveis e **relatar defeitos** (5.5).                                                                 | Funcionou?                                                            |
| **Conclusão**                | Ocorre em **marcos** (lançamento, fim de iteração, fim de nível de teste): tratar defeitos não resolvidos, solicitações de mudança ou itens de backlog; **arquivar** ou entregar testware útil; **encerrar o ambiente** em estado acordado; analisar **lições aprendidas** (2.1.6); criar e comunicar o **relatório de conclusão**. | O que aprendemos?                                                     |

> Dica de prova: é muito comum perguntarem a qual atividade pertence uma tarefa. Memorize: **condições de teste = análise**; **casos de teste e itens de cobertura = modelagem**; **procedimentos, scripts, suítes, dados, ambiente pronto e cronograma = implementação**; **comparar resultado e registrar = execução**.

### 1.4.2 Processo de Teste no Contexto

Testes não acontecem isolados: fazem parte dos processos de desenvolvimento e são financiados pelos stakeholders para atender às necessidades de negócio. Fatores de contexto:

- **Stakeholders**: necessidades, expectativas, requisitos, disposição para cooperar.
- **Membros da equipe**: habilidades, conhecimento, experiência, disponibilidade, necessidade de treinamento.
- **Domínio do negócio**: criticidade do objeto de teste, riscos, necessidades de mercado, normas legais.
- **Fatores técnicos**: tipo de software, arquitetura, tecnologia.
- **Restrições do projeto**: escopo, tempo, orçamento, recursos.
- **Fatores organizacionais**: estrutura, políticas, práticas.
- **SDLC**: práticas de engenharia, métodos de desenvolvimento.
- **Ferramentas**: disponibilidade, usabilidade, conformidade.

Esses fatores impactam: **estratégia de teste, técnicas usadas, grau de automação, nível de cobertura, nível de detalhe da documentação, relatórios** etc.

### 1.4.3 Testware

**Testware** = produtos de trabalho gerados pelas atividades de teste. O **gerenciamento de configuração** (5.4) garante consistência e integridade. Lista (não exaustiva):

| Atividade                | Testware produzido                                                                                                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Planejamento             | Plano de teste, cronograma de teste, **registro de riscos**, critérios de entrada e saída (os três últimos geralmente fazem parte do plano)                                                           |
| Monitoramento e controle | Relatórios de progresso, documentação das diretrizes de controle, informações sobre riscos                                                                                                            |
| Análise                  | **Condições de teste** (priorizadas, ex.: critérios de aceite) e relatórios de defeitos sobre a base de teste (se não corrigidos diretamente)                                                         |
| Modelagem                | **Casos de teste** (priorizados), **cartas de teste**, **itens de cobertura**, requisitos de dados de teste, requisitos de ambiente de teste                                                          |
| Implementação            | **Procedimentos de teste**, scripts automatizados, **conjuntos de teste**, dados de teste, cronograma de execução, elementos do ambiente (**stubs, drivers, simuladores, virtualização de serviços**) |
| Execução                 | **Registros de teste (logs)** e relatórios de defeitos                                                                                                                                                |
| Conclusão                | Relatório de conclusão, itens de ação de melhoria, lições aprendidas, solicitações de mudança (ex.: itens de backlog)                                                                                 |

**Registro de riscos**: lista de riscos com probabilidade, impacto e informações de mitigação.

### 1.4.4 Rastreabilidade entre a Base de Teste e o Testware

Manter rastreabilidade entre **elementos da base de teste ↔ testware (condições, riscos, casos de teste) ↔ resultados ↔ defeitos** é essencial para monitorar e controlar os testes.

Benefícios:

- **Avaliar cobertura** (critérios de cobertura mensuráveis podem funcionar como KPIs):
  - Casos de teste → requisitos: verifica se os requisitos estão cobertos.
  - Resultados → riscos: avalia o **risco residual**.
- Determinar o **impacto de mudanças**.
- Facilitar **auditorias** e atender critérios de **governança de TI**.
- Tornar relatórios de progresso e conclusão mais compreensíveis (incluindo status de cada elemento da base de teste).
- Comunicar aspectos técnicos de forma compreensível aos stakeholders.
- Fornecer informação para avaliar qualidade do produto, capacidade do processo e progresso do projeto.

### 1.4.5 Papéis no Teste

| Papel                      | Responsabilidade                                                   | Foco nas atividades                                   |
| -------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| **Gerenciamento de teste** | Responsabilidade geral pelo processo, pela equipe e pela liderança | **Planejamento, monitoramento e controle, conclusão** |
| **Testador**               | Aspecto de engenharia (técnico) do teste                           | **Análise, modelagem, implementação e execução**      |

- No ágil, parte das tarefas de gestão pode ser feita pela própria equipe; tarefas que abrangem várias equipes podem ficar com gerentes de teste de fora.
- O papel de gestão pode ser exercido por Líder de Equipe, Gerente de Teste, Gerente de Desenvolvimento etc.
- **Uma mesma pessoa pode ter os dois papéis** ao mesmo tempo.

## 1.5 Habilidades essenciais e boas práticas em testes

**Habilidade** = capacidade de fazer algo bem, vinda de conhecimento, prática e aptidão.

### 1.5.1 Habilidades genéricas necessárias para testes

- **Conhecimento de teste** → aumenta a **eficácia** (ex.: uso de técnicas).
- **Meticulosidade, cuidado, curiosidade, atenção aos detalhes, ser metódico** → achar defeitos difíceis.
- **Comunicação, escuta ativa, trabalho em equipe** → interagir com stakeholders, relatar e discutir defeitos.
- **Pensamento analítico, crítico, criatividade** → aumenta a eficácia.
- **Conhecimento técnico** → aumenta a **eficiência** (ex.: uso de ferramentas).
- **Conhecimento do domínio** → entender e se comunicar com usuários e representantes de negócio.

Testadores costumam ser **portadores de más notícias**, e é comum "culpar o mensageiro". O resultado do teste pode soar como crítica ao produto e ao autor; o **viés de confirmação** dificulta aceitar informações contrárias às crenças atuais. Por isso, comunique defeitos e falhas de forma **construtiva**.

### 1.5.2 Abordagem de equipe completa (Whole Team)

Prática vinda do **Extreme Programming (XP)**:

- **Qualquer membro** com conhecimento e habilidade pode executar **qualquer tarefa**.
- **Todos são responsáveis pela qualidade.**
- Equipe compartilha o **mesmo espaço** (físico ou virtual); a colocalização facilita a comunicação.
- Melhora a dinâmica da equipe, a comunicação e a colaboração, e gera **sinergia** entre as diferentes habilidades.

O testador colabora com:

- **Representantes de negócio**: ajudando a criar testes de aceite adequados.
- **Desenvolvedores**: acordando a estratégia de teste e as abordagens de automação.

Assim transfere conhecimento de teste e influencia o produto. **Nem sempre é adequada**: em contextos **críticos para a segurança**, pode ser necessário alto grau de independência.

### 1.5.3 Independência dos testes

Independência ajuda a achar defeitos por causa das **diferenças de vieses cognitivos** entre autor e testador. Mas **não substitui a familiaridade**: desenvolvedores acham muitos defeitos no próprio código com eficiência.

Níveis de independência:

| Quem testa                                          | Independência |
| --------------------------------------------------- | ------------- |
| O próprio autor                                     | Nenhuma       |
| Colegas da mesma equipe                             | Alguma        |
| Testadores de fora da equipe, dentro da organização | Alta          |
| Testadores de fora da organização                   | Muito alta    |

Na maioria dos projetos, o ideal é **combinar vários níveis** (ex.: devs fazem teste de componente e integração de componentes; equipe de teste faz sistema e integração de sistemas; negócio faz aceite).

| Benefícios                                                                                                      | Desvantagens                                                                                                    |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Reconhecem tipos **diferentes** de falhas e defeitos (outra formação, perspectiva e vieses)                     | **Isolamento** da equipe de desenvolvimento: falta de colaboração, problemas de comunicação, relação adversária |
| Podem **verificar, contestar ou refutar suposições** feitas pelos stakeholders na especificação e implementação | Desenvolvedores podem **perder o senso de responsabilidade** pela qualidade                                     |
|                                                                                                                 | Testadores vistos como **gargalo** ou culpados por atrasos                                                      |

## Resumo rápido do capítulo

- Teste = verificação + validação; dinâmico + estático.
- Teste ≠ depuração; teste (QC, corretivo, produto) ≠ QA (preventivo, processo).
- Erro → defeito → falha; causa raiz é o motivo fundamental.
- 7 princípios: presença de defeitos, exaustivo impossível, antecipado, agrupamento, degradação, contexto, falácia da ausência.
- 7 grupos de atividades: planejamento, monitoramento e controle, análise (o quê), modelagem (como), implementação, execução, conclusão.
- Dois papéis: gestão de teste e testador.
- Equipe completa: todos responsáveis pela qualidade. Independência: benefícios x isolamento.
