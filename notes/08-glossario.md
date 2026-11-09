---
title: "Glossário de Apoio"
sidebar:
  label: "Glossário"
---

As **palavras-chave (K1)** de cada capítulo já estão definidas no topo da nota correspondente. Esta página reúne **outros termos que aparecem nas notas** (ou ajudam a entendê-las) e que não são palavras-chave oficiais, mas costumam surgir nas alternativas das questões.

Todas as definições vêm do [Glossário ISTQB](https://glossary.istqb.org/pt_BR/) em português. A coluna "Onde aparece" leva ao capítulo em que o termo é usado.

> **Como estudar com o glossário:** leia a definição, feche a página e tente explicá-la com suas palavras e um exemplo. Se não conseguir dar um exemplo, volte ao capítulo indicado.

## Execução e resultados

| Termo                    | Definição (Glossário ISTQB)                                                                                                                             | Onde aparece                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| oráculo de teste         | Uma fonte para determinar um resultado esperado.                                                                                                        | [Cap. 1](01-fundamentos-de-teste.md)                  |
| precondição              | O estado necessário de um item de teste e seu ambiente de teste antes da execução do teste.                                                             | [Cap. 1](01-fundamentos-de-teste.md)                  |
| pós-condição             | O estado esperado de um item de teste e seu ambiente de teste no final da execução do teste.                                                            | [Cap. 1](01-fundamentos-de-teste.md)                  |
| resultado esperado       | O comportamento previsto observável de um item de teste sob condições específicas com relação à base de teste.                                          | [Cap. 1](01-fundamentos-de-teste.md)                  |
| resultado real           | Comportamento produzido/observado quando um componente ou sistema é testado.                                                                            | [Cap. 1](01-fundamentos-de-teste.md)                  |
| passou                   | Resultado do teste, caso o resultado real corresponda ao resultado esperado.                                                                            | [Cap. 1](01-fundamentos-de-teste.md)                  |
| falhou                   | Resultado de um teste quando o resultado real não corresponde ao resultado esperado.                                                                    | [Cap. 1](01-fundamentos-de-teste.md)                  |
| resultado falso-positivo | Resultado de teste em que um defeito é relatado embora nenhum defeito realmente exista no objeto de teste.                                              | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| resultado falso-negativo | Um resultado de teste que não consegue identificar um defeito que está realmente presente em um objeto de teste.                                        | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| suíte de teste           | Um conjunto de scripts de teste ou procedimentos de teste utilizados na execução de um teste específico.                                                | [Cap. 1](01-fundamentos-de-teste.md)                  |
| script de teste          | Uma sequência de instruções para a execução de uma suite de teste.                                                                                      | [Cap. 1](01-fundamentos-de-teste.md)                  |
| ambiente de teste        | Um ambiente que contém hardware, instrumentação, simuladores, ferramentas de software e outros elementos de suporte necessários para realizar um teste. | [Cap. 1](01-fundamentos-de-teste.md)                  |
| registro de teste        | Um registro cronológico dos detalhes relevantes sobre a execução do teste.                                                                              | [Cap. 1](01-fundamentos-de-teste.md)                  |

> **Pegadinha clássica:** falso-**positivo** = o teste "acusou" um defeito que não existe (alarme falso). Falso-**negativo** = o teste passou, mas o defeito estava lá (defeito escapou).

## Organização e pessoas

| Termo                     | Definição (Glossário ISTQB)                                                                                                         | Onde aparece                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| independência do teste    | A separação das responsabilidades de teste das de desenvolvimento para um objeto de teste.                                          | [Cap. 1](01-fundamentos-de-teste.md)                  |
| rastreabilidade           | A capacidade de estabelecer relações explícitas entre produtos de trabalho relacionados ou itens dos produtos de trabalho.          | [Cap. 1](01-fundamentos-de-teste.md)                  |
| matriz de rastreabilidade | Uma matriz que relaciona os produtos de trabalho ou itens dentro desses produtos para determinar a cobertura alcançada.             | [Cap. 1](01-fundamentos-de-teste.md)                  |
| testador                  | Pessoa que executa os testes.                                                                                                       | [Cap. 1](01-fundamentos-de-teste.md)                  |
| gerente de teste          | A pessoa responsável pela gestão das atividades de teste, dos recursos de teste e pela avaliação do objeto de teste.                | [Cap. 1](01-fundamentos-de-teste.md)                  |
| estratégia de teste       | Uma descrição de como realizar testes para atingir os seus objetivos em determinadas circunstâncias.                                | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| política de teste         | Documentação de alto nível que descreve os princípios, a abordagem e os principais objetivos da organização com relação aos testes. | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |

## Ciclo de vida e abordagens test-first

| Termo                                              | Definição (Glossário ISTQB)                                                                                                                                                                                                                                                                                        | Onde aparece                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| ciclo de vida de desenvolvimento de software       | As atividades realizadas em cada fase do desenvolvimento de software e como elas se relacionam entre si, tanto do ponto de vista lógico quanto cronológico.                                                                                                                                                        | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| modelo de desenvolvimento sequencial               | Um tipo de modelo de ciclo de vida de desenvolvimento de software em que um sistema completo é desenvolvido de uma forma linear de várias fases discretas e sucessivas, sem sobreposição entre elas.                                                                                                               | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| modelo de desenvolvimento incremental              | Um tipo de modelo de ciclo de vida de desenvolvimento de software no qual o componente ou sistema é desenvolvido por meio de uma série de incrementos.                                                                                                                                                             | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| modelo V                                           | Um modelo de ciclo de vida de desenvolvimento sequencial que descreve um relacionamento um-para-um entre as principais fases de desenvolvimento de software, desde a especificação de requisitos de negócios até a entrega, e seus respectivos níveis de teste, desde o teste de aceite até o teste de componente. | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| desenvolvimento ágil de software                   | Um conjunto de modelos do ciclo de vida do desenvolvimento de software baseados no desenvolvimento iterativo e incremental, nos quais os requisitos e as soluções evoluem por meio da colaboração entre equipes multifuncionais auto-organizadas.                                                                  | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| abordagem de testar primeiro                       | Uma abordagem de desenvolvimento de software na qual os casos de teste são modelados e implementados antes do componente ou sistema associado ser desenvolvido.                                                                                                                                                    | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| desenvolvimento orientado por teste (TDD)          | Uma técnica de desenvolvimento de software na qual os casos de teste são elaborados, automatizados e, em seguida, o software é desenvolvido de forma incremental para passar nesses casos de teste.                                                                                                                | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| desenvolvimento orientado pelo comportamento (BDD) | Uma abordagem colaborativa ao desenvolvimento, na qual a equipe está focada em fornecer o comportamento esperado de um componente ou sistema para o cliente, compondo a base para o teste.                                                                                                                         | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| shift right                                        | Uma abordagem de teste para testar um sistema continuamente em produção.                                                                                                                                                                                                                                           | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| retrospectiva                                      | Um evento habitual no qual os membros da equipe discutem os resultados, revisam suas práticas e identificam melhorias.                                                                                                                                                                                             | [Cap. 2](02-testes-no-ciclo-de-vida.md) |

> **TDD x ATDD x BDD em uma linha:** TDD guia o **código** por testes de unidade; ATDD guia o desenvolvimento por **testes de aceite** escritos com os stakeholders; BDD descreve o **comportamento** desejado em linguagem natural (Dado/Quando/Então).

## Variações do teste de aceite

| Termo                       | Definição (Glossário ISTQB)                                                                                                                          | Onde aparece                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| teste de aceite de usuário  | Um tipo de teste de aceite realizado para determinar se os usuários pretendidos aceitam o sistema.                                                   | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| teste de aceite operacional | Um tipo de teste de aceite realizado para determinar se a organização responsável pela operação do sistema possa aceitá-lo.                          | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| teste de aceite regulatório | Um tipo de teste de aceite realizado para determinar a conformidade de um objeto de teste.                                                           | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| alfa teste                  | Um tipo de teste de aceite realizado no ambiente de testes do desenvolvedor por pessoas fora da organização de desenvolvimento.                      | [Cap. 2](02-testes-no-ciclo-de-vida.md) |
| beta teste                  | Um tipo de teste de aceite realizado em um local externo ao ambiente de testes do desenvolvedor, por pessoas fora da organização de desenvolvimento. | [Cap. 2](02-testes-no-ciclo-de-vida.md) |

> **Alfa x beta:** nos dois casos quem testa é **de fora** da organização; o que muda é **onde**: alfa no ambiente do desenvolvedor, beta no ambiente do próprio usuário.

## Tipos de teste e características de qualidade

| Termo                     | Definição (Glossário ISTQB)                                                                                                                                                                                                                          | Onde aparece                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| adequação funcional       | O grau em que as funções facilitam o cumprimento de tarefas e objetivos específicos.                                                                                                                                                                 | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| eficiência de performance | O grau em que um componente ou sistema desempenha suas funções com uso eficiente de recursos sob condições, rendimento e tempo especificados.                                                                                                        | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| compatibilidade           | O grau em que um componente ou sistema pode trocar informações com outros componentes ou sistemas, ou executar suas funções requeridas ao compartilhar o mesmo ambiente de hardware ou software.                                                     | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| usabilidade               | O grau em que um componente ou sistema pode ser usado por usuários específicos para atingir objetivos específicos em um contexto de uso específico.                                                                                                  | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| confiabilidade            | O grau em que um componente ou sistema executa funções específicas sob condições específicas por um período de tempo específico.                                                                                                                     | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| segurança                 | O grau em que um componente ou sistema se defende contra ataques à segurança e fornece acesso adequado aos tipos e níveis de autorização.                                                                                                            | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| manutenibilidade          | O grau em que um componente ou sistema pode ser modificado por seus mantenedores.                                                                                                                                                                    | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| portabilidade             | O grau para o qual um componente ou sistema pode ser transferido de um hardware, software ou outro ambiente operacional ou de utilização para outro.                                                                                                 | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| teste de performance      | Um tipo de teste para determinar a eficiência do desempenho de um componente ou sistema.                                                                                                                                                             | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| teste de carga            | Um tipo de teste de desempenho conduzido para avaliar o comportamento de um componente ou sistema sob cargas variáveis, geralmente entre condições antecipadas de uso baixo, típico e de pico.                                                       | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| teste de estresse         | Um tipo de teste de desempenho realizado para avaliar se um sistema ou componente está no limite ou além do limite da sua carga de trabalho prevista ou especificada, ou com menor disponibilidade de recursos, como acesso à memória ou servidores. | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| teste de usabilidade      | Teste que determina a extensão até a qual o produto de software é entendido, fácil de aprender, fácil de operar e atraente para os usuários sob condições específicas.                                                                               | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| teste de segurança        | Um tipo de teste para determinar se um componente ou sistema é seguro.                                                                                                                                                                               | [Cap. 2](02-testes-no-ciclo-de-vida.md)               |
| smoke testing             | Um tipo de teste destinado a garantir confiança suficiente de que um objeto de teste está pronto para os testes planejados.                                                                                                                          | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| teste de ponta-a-ponta    | Um tipo de teste no qual os processos de negócio são testados do início ao fim em circunstâncias semelhantes às da produção.                                                                                                                         | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |

> As características de qualidade seguem a **ISO/IEC 25010**. Carga = **dentro** do esperado (baixo, típico, pico); estresse = **no limite ou além**.

## Técnicas: termos de apoio

| Termo                        | Definição (Glossário ISTQB)                                                                                                                                 | Onde aparece                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| partição de equivalência     | Um subconjunto de um domínio de valores para o qual se espera que um componente ou sistema trate todos os valores da mesma forma com base na especificação. | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| valor limite                 | Um valor mínimo ou máximo de uma partição de equivalência ordenada.                                                                                         | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| ramo                         | Uma transferência de controle entre dois nós no gráfico de fluxo de controle de um item de teste.                                                           | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| cobertura de decisão         | A cobertura dos resultados da decisão.                                                                                                                      | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| teste de decisão             | Uma técnica de teste caixa-branca em que os casos de teste são projetados para executar os resultados da decisão.                                           | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| ataque de falha              | Uma técnica de teste para avaliar uma característica de qualidade específica de um objeto de teste, tentando acionar falhas específicas.                    | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| carta de teste               | Uma declaração de missão que orienta uma sessão de teste exploratório.                                                                                      | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| sessão de teste              | Um período ininterrupto de tempo gasto na execução de testes.                                                                                               | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| teste baseado em sessão      | Uma abordagem de teste onde as atividades de teste são planejadas como sessões de teste.                                                                    | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| teste de história de usuário | Uma técnica de teste caixa-preta na qual as condições de teste são os critérios de aceite das histórias de usuários.                                        | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |
| teste exaustivo              | Uma abordagem de teste em que o conjunto de testes compreende todas as combinações de valores de entrada e condições prévias.                               | [Cap. 1](01-fundamentos-de-teste.md) (princípio 2: é impossível) |
| testes ad hoc                | Testes informais realizados sem análise e modelagem de teste.                                                                                               | [Cap. 4](04-analise-e-modelagem-de-teste.md)                     |

> **Cuidado:** teste exploratório **não é** ad hoc. O exploratório é estruturado (carta, sessão com tempo definido, registro); o ad hoc não tem análise nem modelagem.

## Gestão: termos de apoio

| Termo                              | Definição (Glossário ISTQB)                                                                                                                       | Onde aparece                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| estimativa de teste                | Uma aproximação relacionada com vários aspectos dos testes.                                                                                       | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| probabilidade de risco             | A probabilidade estimada de que um risco se tornará um resultado real ou evento.                                                                  | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| impacto do risco                   | O dano que será causado se um risco se tornar um resultado ou evento real.                                                                        | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| progresso do teste                 | O progresso dos testes em relação a uma baseline.                                                                                                 | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| densidade do defeito               | O número de defeitos por tamanho de unidade de um produto de trabalho.                                                                            | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| percentual de detecção de defeitos | Número de defeitos encontrados em uma fase de teste, dividido pelo número encontrado em todas as fases do teste ou em qualquer outro meio depois. | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| severidade                         | O grau de impacto que um defeito tem no desenvolvimento, nos testes ou na operação de um componente ou sistema.                                   | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| prioridade                         | O nível de importância atribuído a uma tarefa de acordo com critérios específicos.                                                                | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| defeito escapado                   | Um defeito que não é detectado por uma atividade de teste que deveria encontrá-lo.                                                                | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |
| fluxo de trabalho de defeitos      | O modelo de transição de estado de um ciclo de vida de defeitos, incluindo responsabilidades.                                                     | [Cap. 5](05-gerenciamento-das-atividades-de-teste.md) |

> **Exemplo de severidade x prioridade:** logotipo errado na página inicial = severidade **baixa** (nada quebra), prioridade **alta** (imagem da empresa). Falha rara em relatório anual = severidade **alta**, prioridade possivelmente **baixa**.

## Para ir além

O glossário completo tem mais de 600 termos, incluindo vocabulário dos módulos avançados (segurança, IA, automação, desempenho). Para o CTFL, foque nas palavras-chave de cada capítulo e nos termos desta página; o restante é bônus.
