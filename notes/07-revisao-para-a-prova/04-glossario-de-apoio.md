---
title: "Glossário de apoio"
description: "Termos do Glossário ISTQB que não são palavras-chave oficiais, mas aparecem nas notas e nas alternativas das questões, com link para a nota onde cada um é usado."
sidebar:
  label: "Glossário de apoio"
---

As **palavras-chave (K1)** de cada capítulo já estão definidas na seção "Palavras-chave" de cada nota. Esta página reúne **outros termos que aparecem nas notas** (ou ajudam a entendê-las) e que não são palavras-chave oficiais, mas costumam surgir nas alternativas das questões.

Todas as definições vêm do [Glossário ISTQB](https://glossary.istqb.org/pt-br/search/) em português. A coluna "Onde aparece" leva à nota em que o termo é usado.

> **Como estudar com o glossário:** leia a definição, feche a página e tente explicá-la com suas palavras e um exemplo. Se não conseguir dar um exemplo, volte à nota indicada.

## Execução e resultados

| Termo                    | Definição (Glossário ISTQB)                                                                                                                             | Onde aparece                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| oráculo de teste | Uma fonte para determinar um resultado esperado. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| precondição | O estado necessário de um item de teste e seu ambiente de teste antes da execução do teste. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| pós-condição | O estado esperado de um item de teste e seu ambiente de teste no final da execução do teste. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| resultado esperado | O comportamento previsto observável de um item de teste sob condições específicas com relação à base de teste. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| resultado real | Comportamento produzido/observado quando um componente ou sistema é testado. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| passou | Resultado do teste, caso o resultado real corresponda ao resultado esperado. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| falhou | Resultado de um teste quando o resultado real não corresponde ao resultado esperado. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| resultado falso-positivo | Resultado de teste em que um defeito é relatado embora nenhum defeito realmente exista no objeto de teste. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |
| resultado falso-negativo | Um resultado de teste que não consegue identificar um defeito que está realmente presente em um objeto de teste. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |
| suíte de teste | Um conjunto de scripts de teste ou procedimentos de teste utilizados na execução de um teste específico. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| script de teste | Uma sequência de instruções para a execução de uma suite de teste. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| ambiente de teste | Um ambiente que contém hardware, instrumentação, simuladores, ferramentas de software e outros elementos de suporte necessários para realizar um teste. | [Processo de teste](../01-fundamentos-de-teste/04-processo-de-teste.md) |
| registro de teste | Um registro cronológico dos detalhes relevantes sobre a execução do teste. | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |

> **Pegadinha clássica:** falso-**positivo** = o teste "acusou" um defeito que não existe (alarme falso). Falso-**negativo** = o teste passou, mas o defeito estava lá (defeito escapou).

## Organização e pessoas

| Termo                     | Definição (Glossário ISTQB)                                                                                                         | Onde aparece                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| independência do teste | A separação das responsabilidades de teste das de desenvolvimento para um objeto de teste. | [Habilidades e independência](../01-fundamentos-de-teste/06-habilidades-e-independencia.md) |
| rastreabilidade | A capacidade de estabelecer relações explícitas entre produtos de trabalho relacionados ou itens dos produtos de trabalho. | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| matriz de rastreabilidade | Uma matriz que relaciona os produtos de trabalho ou itens dentro desses produtos para determinar a cobertura alcançada. | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| testador | Pessoa que executa os testes. | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| gerente de teste | A pessoa responsável pela gestão das atividades de teste, dos recursos de teste e pela avaliação do objeto de teste. | [Testware, rastreabilidade e papéis](../01-fundamentos-de-teste/05-testware-rastreabilidade-e-papeis.md) |
| estratégia de teste | Uma descrição de como realizar testes para atingir os seus objetivos em determinadas circunstâncias. | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) |
| política de teste | Documentação de alto nível que descreve os princípios, a abordagem e os principais objetivos da organização com relação aos testes. | [Plano de teste e critérios](../05-gerenciamento-das-atividades-de-teste/01-plano-de-teste-e-criterios.md) |

## Ciclo de vida e abordagens test-first

| Termo                                              | Definição (Glossário ISTQB)                                                                                                                                                                                                                                                                                        | Onde aparece                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| ciclo de vida de desenvolvimento de software | As atividades realizadas em cada fase do desenvolvimento de software e como elas se relacionam entre si, tanto do ponto de vista lógico quanto cronológico. | [SDLC e boas práticas](../02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas.md) |
| modelo de desenvolvimento sequencial | Um tipo de modelo de ciclo de vida de desenvolvimento de software em que um sistema completo é desenvolvido de uma forma linear de várias fases discretas e sucessivas, sem sobreposição entre elas. | [SDLC e boas práticas](../02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas.md) |
| modelo de desenvolvimento incremental | Um tipo de modelo de ciclo de vida de desenvolvimento de software no qual o componente ou sistema é desenvolvido por meio de uma série de incrementos. | [SDLC e boas práticas](../02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas.md) |
| modelo V | Um modelo de ciclo de vida de desenvolvimento sequencial que descreve um relacionamento um-para-um entre as principais fases de desenvolvimento de software, desde a especificação de requisitos de negócios até a entrega, e seus respectivos níveis de teste, desde o teste de aceite até o teste de componente. | [SDLC e boas práticas](../02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas.md) |
| desenvolvimento ágil de software | Um conjunto de modelos do ciclo de vida do desenvolvimento de software baseados no desenvolvimento iterativo e incremental, nos quais os requisitos e as soluções evoluem por meio da colaboração entre equipes multifuncionais auto-organizadas. | [SDLC e boas práticas](../02-testes-no-ciclo-de-vida/01-sdlc-e-boas-praticas.md) |
| abordagem de testar primeiro | Uma abordagem de desenvolvimento de software na qual os casos de teste são modelados e implementados antes do componente ou sistema associado ser desenvolvido. | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) |
| desenvolvimento orientado por teste (TDD) | Uma técnica de desenvolvimento de software na qual os casos de teste são elaborados, automatizados e, em seguida, o software é desenvolvido de forma incremental para passar nesses casos de teste. | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) |
| desenvolvimento orientado pelo comportamento (BDD) | Uma abordagem colaborativa ao desenvolvimento, na qual a equipe está focada em fornecer o comportamento esperado de um componente ou sistema para o cliente, compondo a base para o teste. | [TDD, ATDD e BDD](../02-testes-no-ciclo-de-vida/02-abordagens-test-first.md) |
| shift right | Uma abordagem de teste para testar um sistema continuamente em produção. | [DevOps, shift-left e retrospectivas](../02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas.md) |
| retrospectiva | Um evento habitual no qual os membros da equipe discutem os resultados, revisam suas práticas e identificam melhorias. | [DevOps, shift-left e retrospectivas](../02-testes-no-ciclo-de-vida/03-devops-shift-left-e-retrospectivas.md) |

> **TDD x ATDD x BDD em uma linha:** TDD guia o **código** por testes de unidade; ATDD guia o desenvolvimento por **testes de aceite** escritos com os stakeholders; BDD descreve o **comportamento** desejado em linguagem natural (Dado/Quando/Então).

## Variações do teste de aceite

| Termo                       | Definição (Glossário ISTQB)                                                                                                                          | Onde aparece                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| teste de aceite de usuário | Um tipo de teste de aceite realizado para determinar se os usuários pretendidos aceitam o sistema. | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| teste de aceite operacional | Um tipo de teste de aceite realizado para determinar se a organização responsável pela operação do sistema possa aceitá-lo. | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| teste de aceite regulatório | Um tipo de teste de aceite realizado para determinar a conformidade de um objeto de teste. | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| alfa teste | Um tipo de teste de aceite realizado no ambiente de testes do desenvolvedor por pessoas fora da organização de desenvolvimento. | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |
| beta teste | Um tipo de teste de aceite realizado em um local externo ao ambiente de testes do desenvolvedor, por pessoas fora da organização de desenvolvimento. | [Níveis de teste](../02-testes-no-ciclo-de-vida/04-niveis-de-teste.md) |

> **Alfa x beta:** nos dois casos quem testa é **de fora** da organização; o que muda é **onde**: alfa no ambiente do desenvolvedor, beta no ambiente do próprio usuário.

## Tipos de teste e características de qualidade

| Termo                     | Definição (Glossário ISTQB)                                                                                                                                                                                                                          | Onde aparece                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| adequação funcional | O grau em que as funções facilitam o cumprimento de tarefas e objetivos específicos. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| eficiência de performance | O grau em que um componente ou sistema desempenha suas funções com uso eficiente de recursos sob condições, rendimento e tempo especificados. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| compatibilidade | O grau em que um componente ou sistema pode trocar informações com outros componentes ou sistemas, ou executar suas funções requeridas ao compartilhar o mesmo ambiente de hardware ou software. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| usabilidade | O grau em que um componente ou sistema pode ser usado por usuários específicos para atingir objetivos específicos em um contexto de uso específico. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| confiabilidade | O grau em que um componente ou sistema executa funções específicas sob condições específicas por um período de tempo específico. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| segurança | O grau em que um componente ou sistema se defende contra ataques à segurança e fornece acesso adequado aos tipos e níveis de autorização. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| manutenibilidade | O grau em que um componente ou sistema pode ser modificado por seus mantenedores. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| portabilidade | O grau para o qual um componente ou sistema pode ser transferido de um hardware, software ou outro ambiente operacional ou de utilização para outro. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| teste de performance | Um tipo de teste para determinar a eficiência do desempenho de um componente ou sistema. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| teste de carga | Um tipo de teste de desempenho conduzido para avaliar o comportamento de um componente ou sistema sob cargas variáveis, geralmente entre condições antecipadas de uso baixo, típico e de pico. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| teste de estresse | Um tipo de teste de desempenho realizado para avaliar se um sistema ou componente está no limite ou além do limite da sua carga de trabalho prevista ou especificada, ou com menor disponibilidade de recursos, como acesso à memória ou servidores. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| teste de usabilidade | Teste que determina a extensão até a qual o produto de software é entendido, fácil de aprender, fácil de operar e atraente para os usuários sob condições específicas. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| teste de segurança | Um tipo de teste para determinar se um componente ou sistema é seguro. | [Tipos de teste e regressão](../02-testes-no-ciclo-de-vida/05-tipos-de-teste-confirmacao-e-regressao.md) |
| smoke testing | Um tipo de teste destinado a garantir confiança suficiente de que um objeto de teste está pronto para os testes planejados. | [Priorização, pirâmide e quadrantes](../05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes.md) |
| teste de ponta-a-ponta | Um tipo de teste no qual os processos de negócio são testados do início ao fim em circunstâncias semelhantes às da produção. | [Priorização, pirâmide e quadrantes](../05-gerenciamento-das-atividades-de-teste/03-priorizacao-piramide-e-quadrantes.md) |

> As características de qualidade seguem a **ISO/IEC 25010**. Carga = **dentro** do esperado (baixo, típico, pico); estresse = **no limite ou além**.

## Técnicas: termos de apoio

| Termo                        | Definição (Glossário ISTQB)                                                                                                                                 | Onde aparece                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| partição de equivalência | Um subconjunto de um domínio de valores para o qual se espera que um componente ou sistema trate todos os valores da mesma forma com base na especificação. | [Particionamento de equivalência](../04-analise-e-modelagem-de-teste/02-particionamento-de-equivalencia.md) |
| valor limite | Um valor mínimo ou máximo de uma partição de equivalência ordenada. | [Análise de valor limite](../04-analise-e-modelagem-de-teste/03-analise-de-valor-limite.md) |
| ramo | Uma transferência de controle entre dois nós no gráfico de fluxo de controle de um item de teste. | [Caixa-branca](../04-analise-e-modelagem-de-teste/06-caixa-branca.md) |
| cobertura de decisão | A cobertura dos resultados da decisão. | [Caixa-branca](../04-analise-e-modelagem-de-teste/06-caixa-branca.md) |
| teste de decisão | Uma técnica de teste caixa-branca em que os casos de teste são projetados para executar os resultados da decisão. | [Caixa-branca](../04-analise-e-modelagem-de-teste/06-caixa-branca.md) |
| ataque de falha | Uma técnica de teste para avaliar uma característica de qualidade específica de um objeto de teste, tentando acionar falhas específicas. | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |
| carta de teste | Uma declaração de missão que orienta uma sessão de teste exploratório. | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |
| sessão de teste | Um período ininterrupto de tempo gasto na execução de testes. | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |
| teste baseado em sessão | Uma abordagem de teste onde as atividades de teste são planejadas como sessões de teste. | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |
| teste de história de usuário | Uma técnica de teste caixa-preta na qual as condições de teste são os critérios de aceite das histórias de usuários. | [Histórias, critérios de aceite e ATDD](../04-analise-e-modelagem-de-teste/08-abordagens-colaborativas.md) |
| teste exaustivo | Uma abordagem de teste em que o conjunto de testes compreende todas as combinações de valores de entrada e condições prévias. | [Os sete princípios](../01-fundamentos-de-teste/03-principios-de-teste.md) (princípio 2: é impossível) |
| testes ad hoc | Testes informais realizados sem análise e modelagem de teste. | [Baseadas na experiência](../04-analise-e-modelagem-de-teste/07-baseadas-na-experiencia.md) |

> **Cuidado:** teste exploratório **não é** ad hoc. O exploratório é estruturado (carta, sessão com tempo definido, registro); o ad hoc não tem análise nem modelagem.

## Gestão: termos de apoio

| Termo                              | Definição (Glossário ISTQB)                                                                                                                       | Onde aparece                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| estimativa de teste | Uma aproximação relacionada com vários aspectos dos testes. | [Técnicas de estimativa](../05-gerenciamento-das-atividades-de-teste/02-tecnicas-de-estimativa.md) |
| probabilidade de risco | A probabilidade estimada de que um risco se tornará um resultado real ou evento. | [Gerenciamento de risco](../05-gerenciamento-das-atividades-de-teste/04-gerenciamento-de-risco.md) |
| impacto do risco | O dano que será causado se um risco se tornar um resultado ou evento real. | [Gerenciamento de risco](../05-gerenciamento-das-atividades-de-teste/04-gerenciamento-de-risco.md) |
| progresso do teste | O progresso dos testes em relação a uma baseline. | [Monitoramento, controle e relatórios](../05-gerenciamento-das-atividades-de-teste/05-monitoramento-controle-e-conclusao.md) |
| densidade do defeito | O número de defeitos por tamanho de unidade de um produto de trabalho. | [Monitoramento, controle e relatórios](../05-gerenciamento-das-atividades-de-teste/05-monitoramento-controle-e-conclusao.md) |
| percentual de detecção de defeitos | Número de defeitos encontrados em uma fase de teste, dividido pelo número encontrado em todas as fases do teste ou em qualquer outro meio depois. | [Monitoramento, controle e relatórios](../05-gerenciamento-das-atividades-de-teste/05-monitoramento-controle-e-conclusao.md) |
| severidade | O grau de impacto que um defeito tem no desenvolvimento, nos testes ou na operação de um componente ou sistema. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |
| prioridade | O nível de importância atribuído a uma tarefa de acordo com critérios específicos. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |
| defeito escapado | Um defeito que não é detectado por uma atividade de teste que deveria encontrá-lo. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |
| fluxo de trabalho de defeitos | O modelo de transição de estado de um ciclo de vida de defeitos, incluindo responsabilidades. | [Gerenciamento de defeitos](../05-gerenciamento-das-atividades-de-teste/07-gerenciamento-de-defeitos.md) |

> **Exemplo de severidade x prioridade:** logotipo errado na página inicial = severidade **baixa** (nada quebra), prioridade **alta** (imagem da empresa). Falha rara em relatório anual = severidade **alta**, prioridade possivelmente **baixa**.

## Para ir além

O glossário completo tem mais de 600 termos, incluindo vocabulário dos módulos avançados (segurança, IA, automação, desempenho). Para o CTFL, foque nas palavras-chave de cada capítulo e nos termos desta página; o restante é bônus.
