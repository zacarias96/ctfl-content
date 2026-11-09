---
title: "Análise e Modelagem de Teste (390 min)"
sidebar:
  label: "Análise e Modelagem"
---

> Maior capítulo do syllabus e onde estão as questões **K3** (aplicação/cálculo). Pratique os exemplos.

## Palavras-chave (K1)

Definições do [Glossário ISTQB](https://glossary.istqb.org/pt_BR/) (pt-BR). Repare como quase toda técnica é definida por **qual é a condição de teste** que ela usa.

**Base: técnica, cobertura e item de cobertura**

| Termo             | Definição (Glossário ISTQB)                                                                                                   | Em outras palavras                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| técnica de teste  | Um procedimento usado para definir condições de teste, modelar casos de teste e especificar dados de teste.                   | O "método" que guia análise e modelagem.                                                              |
| cobertura         | O grau em que os itens de uma abrangência específica são executados por um conjunto de testes, expresso como uma porcentagem. | itens exercitados ÷ itens identificados × 100%.                                                       |
| item de cobertura | Um atributo ou combinação de atributos derivados de uma ou mais condições de teste por meio de uma técnica de teste.          | **O que se conta** para medir cobertura (partições, limites, colunas, transições, instruções, ramos). |

**Caixa-preta** (baseadas na especificação)

| Termo                           | Definição (Glossário ISTQB)                                                                                                                               | Item de cobertura                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| técnica de teste caixa-preta    | Uma técnica de teste baseada na especificação de um componente ou sistema.                                                                                | -                                                   |
| particionamento de equivalência | Uma técnica de teste caixa-preta na qual as condições de teste são partições de equivalência exercidas por um membro representativo de cada partição.     | Partições (válidas **e** inválidas).                |
| análise de valor limite         | Uma técnica de teste caixa-preta na qual as condições de teste são valores limite.                                                                        | Limites (+ vizinhos, em 2 ou 3 valores).            |
| teste de tabela de decisão      | Uma técnica de teste caixa preta na qual as condições de teste são as combinações de condições e as ações resultantes mostradas em uma tabela de decisão. | Colunas **viáveis**.                                |
| teste de transição de estado    | Uma técnica de teste caixa-preta na qual as condições de teste são transições de estado ou sequências delas.                                              | Estados, transições válidas ou todas as transições. |

> Apoio: **partição de equivalência** = subconjunto de valores que o sistema deve tratar **da mesma forma**; **valor limite** = valor mínimo ou máximo de uma partição de equivalência **ordenada**.

**Caixa-branca** (baseadas na estrutura)

| Termo                         | Definição (Glossário ISTQB)                                                    | Em outras palavras                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| técnica de teste caixa-branca | Uma técnica de teste baseada na estrutura interna de um componente ou sistema. | Precisa enxergar o código.                                                                    |
| cobertura de instrução        | A cobertura das instruções de código-fonte executáveis.                        | Cada linha executável rodou ao menos uma vez?                                                 |
| cobertura de ramificação      | A cobertura de ramificações em um gráfico de fluxo de controle.                | Cada caminho de cada decisão (if/else, case, loop) foi seguido? 100% ramos ⇒ 100% instruções. |

**Baseadas na experiência**

| Termo                                   | Definição (Glossário ISTQB)                                                                                                                                                                      | Em outras palavras                                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| técnica de teste baseada na experiência | Uma técnica de teste baseada na experiência, no conhecimento e na intuição do testador.                                                                                                          | Complementa as técnicas sistemáticas.                                                                   |
| suposição de erro                       | Uma técnica de teste na qual as condições de teste são baseadas no conhecimento do testador sobre falhas passadas ou modos de falha.                                                             | No glossário atual aparece como **adivinhação de erros**. Ataques de falha são uma forma metódica dela. |
| teste exploratório                      | Uma abordagem de teste na qual os testes são modelados e executados dinamicamente com base no conhecimento do testador, na exploração de um item de teste e nos resultados de testes anteriores. | Modelar, executar e aprender **ao mesmo tempo**; pode ser em sessões com **carta de teste**.            |
| teste baseado em lista de verificação   | Uma técnica de teste baseada em experiência na qual os casos de teste são modelados para executar os itens de uma lista de verificação.                                                          | Checklist em forma de **perguntas**, sem itens verificáveis automaticamente.                            |

**Baseadas na colaboração**

| Termo                                         | Definição (Glossário ISTQB)                                                                                         | Em outras palavras                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| abordagem de teste baseada na colaboração     | Uma abordagem de teste que se concentra na prevenção de defeitos por meio da colaboração entre stakeholders.        | Foco em **prevenir**, não em detectar.                      |
| critérios de aceite                           | Os critérios que um produto de trabalho deve satisfazer para ser aceito pelos stakeholders.                         | As condições que dizem "esta história está pronta".         |
| desenvolvimento orientado por teste de aceite | Uma abordagem de teste baseada em colaboração que define testes de aceite na linguagem de domínio dos stakeholders. | ATDD: os testes de aceite são escritos **antes** do código. |

## Objetivos de aprendizagem

| LO       | Nível  | Descrição                                                               |
| -------- | ------ | ----------------------------------------------------------------------- |
| FL-4.1.1 | K2     | Distinguir técnicas caixa-preta, caixa-branca e baseadas na experiência |
| FL-4.2.1 | **K3** | Usar particionamento de equivalência para derivar casos de teste        |
| FL-4.2.2 | **K3** | Usar análise de valor limite para derivar casos de teste                |
| FL-4.2.3 | **K3** | Usar tabela de decisão para derivar casos de teste                      |
| FL-4.2.4 | **K3** | Usar transição de estado para derivar casos de teste                    |
| FL-4.3.1 | K2     | Explicar o teste de instrução                                           |
| FL-4.3.2 | K2     | Explicar o teste de ramificação                                         |
| FL-4.3.3 | K2     | Explicar o valor do teste caixa-branca                                  |
| FL-4.4.1 | K2     | Explicar a suposição de erro                                            |
| FL-4.4.2 | K2     | Explicar o teste exploratório                                           |
| FL-4.4.3 | K2     | Explicar o teste baseado em lista de verificação                        |
| FL-4.5.1 | K2     | Explicar a escrita colaborativa de histórias de usuário                 |
| FL-4.5.2 | K2     | Classificar as opções de escrita de critérios de aceite                 |
| FL-4.5.3 | **K3** | Usar ATDD para derivar casos de teste                                   |

## 4.1 Visão geral das técnicas de teste

Técnicas de teste apoiam a **análise** (o que testar) e a **modelagem** (como testar), ajudando a criar de forma **sistemática** um conjunto **pequeno, mas suficiente**, de casos de teste. Ajudam a definir **condições de teste**, identificar **itens de cobertura** e identificar **dados de teste**.

> Leitura complementar: ISO/IEC/IEEE 29119-4.

| Categoria                  | Também chamada de            | Base                                                          | Características                                                                                                             |
| -------------------------- | ---------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Caixa-preta**            | Baseada em **especificação** | Comportamento especificado, **sem olhar a estrutura interna** | Casos independentes da implementação: se a implementação mudar e o comportamento não, **os casos continuam úteis**          |
| **Caixa-branca**           | Baseada em **estrutura**     | **Estrutura interna** e processamento                         | Casos dependem do projeto: só podem ser criados **após o projeto ou implementação**                                         |
| **Baseada na experiência** | -                            | **Conhecimento e experiência** do testador                    | Eficácia depende muito das **habilidades** do testador; acha defeitos que as outras não acham; é **complementar** às outras |

## 4.2 Técnicas de Teste Caixa-Preta

### 4.2.1 Particionamento de Equivalência (EP)

Divide os dados em **partições de equivalência**, esperando que todos os elementos de uma partição sejam **processados da mesma forma**. Se um valor da partição detecta um defeito, qualquer outro valor dela também detectaria. Logo, **um teste por partição basta**.

- Partições podem ser definidas para **qualquer elemento de dados**: entradas, saídas, itens de configuração, valores internos, valores de tempo, parâmetros de interface.
- Podem ser contínuas ou discretas, ordenadas ou não, finitas ou infinitas.
- Partições **não podem se sobrepor** e **não podem ser vazias**.
- **Partição válida**: valores válidos. **Partição inválida**: valores inválidos. (A definição de válido/inválido pode variar entre equipes: "deve ser processado" x "deve ser rejeitado/ignorado" ou "sem processamento especificado".)

**Cobertura EP**

- **Itens de cobertura**: as partições (inclusive as **inválidas**).
- 100% = cada partição exercitada **pelo menos uma vez**.
- Cobertura = partições exercitadas / total de partições × 100%.

**Each Choice Coverage (ECC - cobertura de cada escolha)**: com **vários conjuntos de partições** (vários parâmetros), exige que cada partição de **cada conjunto** seja exercitada ao menos uma vez. **Não considera combinações** entre partições.

**Exemplo**

> Campo "idade" aceita inteiros de 18 a 65.

| Partição | Faixa   | Tipo     | Valor de teste |
| -------- | ------- | -------- | -------------- |
| P1       | ≤ 17    | Inválida | 10             |
| P2       | 18 a 65 | Válida   | 30             |
| P3       | ≥ 66    | Inválida | 70             |

Mínimo de **3 casos** para 100% de cobertura EP.

> Exemplo ECC: parâmetro A com 3 partições e parâmetro B com 2 partições. Cada teste cobre uma partição de A e uma de B ao mesmo tempo, então o mínimo é **max(3, 2) = 3 casos**.

### 4.2.2 Análise de Valor de Limite (BVA)

Exercita os **limites** das partições de equivalência. Só serve para **partições ordenadas**. Os valores **mínimo e máximo** de uma partição são seus **valores de limite**.

- Foco nos limites porque desenvolvedores **erram mais neles**.
- Defeitos típicos: limite implementado **deslocado** (acima ou abaixo do pretendido) ou **omitido**.

| Versão               | Itens de cobertura por limite                                            | Cobertura                                                     |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- |
| **BVA de 2 valores** | O **valor de limite** + o **vizinho mais próximo na partição adjacente** | limites exercitados / total de limites                        |
| **BVA de 3 valores** | O **valor de limite** + **os dois vizinhos** (um de cada lado)           | (limites + vizinhos) exercitados / total (limites + vizinhos) |

O **BVA de 3 valores é mais rigoroso**: detecta defeitos que o de 2 valores não detecta.

> Exemplo do syllabus: `se (x ≤ 10)` implementado errado como `se (x = 10)`. Com BVA de 2 valores (x = 10 e x = 11) o defeito **não aparece**. Com BVA de 3 valores, x = **9** revela o defeito.

**Exemplo** (idade de 18 a 65, inteiros)

- Limites: 17 | 18 ... 65 | 66 (os limites das partições são 17, 18, 65, 66).
- **BVA 2 valores**: **17, 18, 65, 66** → 4 valores.
- **BVA 3 valores**: para o limite 18 → 17, 18, 19; para o limite 65 → 64, 65, 66. Somando os limites das partições inválidas (17 e 66) e removendo repetidos: **16, 17, 18, 19, 64, 65, 66, 67** → 8 valores.

> Dica: em questões de BVA, **liste todas as partições, marque mínimo e máximo de cada uma e só depois acrescente os vizinhos**. Valores repetidos contam uma vez só.

### 4.2.3 Teste de Tabela de Decisão

Usado para testar requisitos em que **combinações de condições** geram **resultados diferentes**. Ótimo para registrar lógica complexa, como **regras de negócio**.

- **Linhas** = **condições** e **ações**.
- **Colunas** = **regras de decisão** (combinação única de condições + ações associadas).
- **Entrada limitada**: valores booleanos (V/F).
- **Entrada estendida**: condições/ações com múltiplos valores (intervalos, partições, valores discretos).

Notação:

| Símbolo     | Significado                            |
| ----------- | -------------------------------------- |
| **V** (T)   | Condição satisfeita                    |
| **F**       | Condição não satisfeita                |
| **-**       | Valor **irrelevante** para o resultado |
| **N/A**     | Condição **inviável** para a regra     |
| **X**       | A ação **deve ocorrer**                |
| (em branco) | A ação **não** deve ocorrer            |

- **Tabela completa**: colunas para **todas as combinações** (com n condições booleanas → **2ⁿ** colunas).
- Pode ser **simplificada** removendo combinações inviáveis e **minimizada** fundindo colunas em que alguma condição não afeta o resultado (algoritmos de minimização estão fora do escopo).

**Cobertura**

- **Itens de cobertura**: colunas com combinações **viáveis**.
- Cobertura = colunas exercitadas / total de colunas viáveis × 100%.

Pontos fortes: abordagem sistemática para achar **todas as combinações** (algumas seriam esquecidas) e encontrar **lacunas ou contradições** nos requisitos. Ponto fraco: o número de regras cresce **exponencialmente**; use tabela minimizada ou abordagem **baseada em risco**.

**Exemplo**

> Desconto: cliente VIP **e** compra acima de R$ 100 → 10%. Só VIP → 5%. Não VIP → sem desconto.

|                      | R1  | R2  | R3  | R4  |
| -------------------- | --- | --- | --- | --- |
| C1: Cliente VIP?     | V   | V   | F   | F   |
| C2: Compra > R$ 100? | V   | F   | V   | F   |
| A1: 10% de desconto  | X   |     |     |     |
| A2: 5% de desconto   |     | X   |     |     |
| A3: Sem desconto     |     |     | X   | X   |

Minimizando: R3 e R4 têm a mesma ação e C2 não importa quando C1 = F → regra única (C1 = F, C2 = -). Ficam **3 colunas** → 3 casos para 100%.

### 4.2.4 Teste de Transição de Estado

Um **diagrama de transição de estados** modela o comportamento mostrando **estados** e **transições válidas**.

- Uma transição é iniciada por um **evento**, que pode ter uma **condição de proteção (guarda)**.
- Transições são consideradas **instantâneas** e podem gerar **ações**.
- Sintaxe do rótulo: **`evento [condição de proteção] / ação`** (guarda e ação podem ser omitidas).

**Tabela de estados**: modelo equivalente ao diagrama.

- **Linhas** = estados; **colunas** = eventos (com guardas, se houver).
- Células = transição (estado de destino + ações).
- Diferente do diagrama, **mostra explicitamente as transições inválidas** (células vazias).

Um caso de teste é uma **sequência de eventos** que gera uma sequência de mudanças de estado (e ações) e normalmente cobre **várias transições**.

**Critérios de cobertura**

| Critério                              | Itens de cobertura                                  | 100% significa                                             | Força                                                                                                    |
| ------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Todos os estados**                  | Estados                                             | Visitar todos os estados                                   | **Mais fraco** (dá para obter sem exercitar todas as transições)                                         |
| **Transições válidas** (**0-switch**) | Transições válidas únicas                           | Exercitar todas as transições válidas                      | **Mais usado**                                                                                           |
| **Todas as transições**               | Todas as transições da tabela (válidas e inválidas) | Exercitar todas as válidas **e tentar** todas as inválidas | **Mais forte**: garante os outros dois; **requisito mínimo para software de missão e segurança crítica** |

- Testar **uma única transição inválida por caso de teste** evita o **mascaramento de falhas** (um defeito impedir a detecção de outro).

**Exemplo** (porta com fechadura)

```
Estados: Aberta, Fechada, Trancada
Aberta  --fechar-->      Fechada
Fechada --abrir-->       Aberta
Fechada --trancar-->     Trancada
Trancada --destrancar--> Fechada
```

| Estado \ Evento | abrir  | fechar  | trancar  | destrancar |
| --------------- | ------ | ------- | -------- | ---------- |
| Aberta          | -      | Fechada | -        | -          |
| Fechada         | Aberta | -       | Trancada | -          |
| Trancada        | -      | -       | -        | Fechada    |

- 3 estados, **4 transições válidas**, 12 células → **8 transições inválidas**.
- **Todos os estados**: 1 caso basta (Aberta → fechar → trancar).
- **Transições válidas**: 1 caso pode cobrir tudo: Aberta → fechar → trancar → destrancar → abrir (4 transições).
- **Todas as transições**: o caso acima + **8 casos**, um para cada transição inválida.

## 4.3 Técnicas de Teste Caixa-Branca

O syllabus foca em duas técnicas **baseadas em código**: **teste de instrução** e **teste de ramificação**. Técnicas mais rigorosas (para segurança crítica e alta integridade), técnicas para níveis mais altos (ex.: teste de API) e coberturas não ligadas a código (ex.: **cobertura de neurônios** em redes neurais) estão fora do escopo.

### 4.3.1 Teste de Instrução e Cobertura de Instrução

- **Itens de cobertura**: **instruções executáveis**.
- Cobertura = instruções exercitadas / total de instruções executáveis × 100%.
- **100%** garante que **toda instrução foi executada ao menos uma vez** (inclusive as que têm defeito, o que pode causar falha).
- Limitações:
  - Não detecta defeitos **dependentes de dados** (ex.: divisão por zero só quando o denominador é 0).
  - **Não garante** que toda a lógica de decisão foi testada (pode não exercitar todos os resultados das decisões).

### 4.3.2 Teste de Ramificação e Cobertura de Ramificação

- **Ramificação (branch)**: transferência de controle entre dois nós no **grafo de fluxo de controle**.
  - **Incondicional**: código em linha reta.
  - **Condicional**: resultado de decisão (V/F de um `if`, cada saída de um `switch/case`, sair ou continuar num `loop`).
- **Itens de cobertura**: ramificações.
- Cobertura = ramificações exercitadas / total de ramificações × 100%.
- **100%** = todas as ramificações, condicionais e incondicionais, exercitadas.
- Limitação: pode não detectar defeitos que exigem um **caminho específico**.
- **Cobertura de ramificação subsume (substitui) a de instrução**: 100% de ramificação ⇒ 100% de instrução, **mas não o contrário**.

**Exemplo**

```
1  ler(x)
2  se x > 0 então
3      imprimir("positivo")
4  fim-se
5  imprimir("fim")
```

- Teste com x = 5 executa as linhas 1, 2, 3, 5 → **100% de instrução**.
- Mas a saída **falsa** do `se` não foi exercitada → **cobertura de ramificação incompleta** (o `se` tem 2 ramificações condicionais: V e F).
- Para 100% de ramificação: x = 5 **e** x = -1 → **2 casos**.

> Dica: para o **mínimo de testes** em 100% de decisão/ramificação, conte os resultados V/F de cada decisão e monte caminhos que cubram todos. Para instrução, basta um caminho que passe por todas as instruções.

### 4.3.3 O valor do teste caixa-branca

- **Ponto forte**: considera **toda a implementação**, detectando defeitos mesmo com especificação **vaga, desatualizada ou incompleta**.
- **Ponto fraco**: se um requisito **não foi implementado**, o caixa-branca pode **não detectar a ausência** (defeitos de omissão).
- Pode ser usado em **teste estático** (ex.: **dry run** / execução de mesa do código), em código ainda não pronto para execução, pseudocódigo e lógica de alto nível modelável em grafo de fluxo de controle.
- Só caixa-preta **não mede a cobertura real do código**. As medidas caixa-branca dão **medição objetiva** e indicam onde criar testes adicionais para aumentar cobertura e confiança.

## 4.4 Técnicas de Teste Baseadas na Experiência

### 4.4.1 Suposição de Erro (Error Guessing)

Prevê erros, defeitos e falhas com base no conhecimento do testador sobre:

- Como a aplicação funcionou **no passado**;
- Os tipos de **erros que os desenvolvedores tendem a cometer** e os defeitos resultantes;
- As falhas ocorridas em **aplicações semelhantes**.

Categorias comuns:

| Área       | Exemplos                                                   |
| ---------- | ---------------------------------------------------------- |
| Entrada    | Entrada correta não aceita, parâmetros errados ou ausentes |
| Saída      | Formato errado, resultado errado                           |
| Lógica     | Casos ausentes, operador errado                            |
| Cálculo    | Operando incorreto, cálculo errado                         |
| Interfaces | Parâmetros incompatíveis, tipos incompatíveis              |
| Dados      | Inicialização incorreta, tipo errado                       |

**Ataques a falhas (fault attacks)**: abordagem **metódica** de suposição de erro. O testador cria ou obtém uma **lista de possíveis erros, defeitos e falhas** e modela testes para expô-los. As listas vêm da experiência, de dados de defeitos e falhas ou do conhecimento comum sobre por que software falha.

### 4.4.2 Testes Exploratórios

Os testes são **modelados, executados e avaliados simultaneamente**, enquanto o testador **aprende** sobre o objeto de teste. Serve para aprender mais, explorar com testes focados e criar testes para áreas não testadas.

**Teste baseado em sessão** (forma estruturada):

- Realizado dentro de um **período definido (time-box)**.
- Guiado por uma **carta de teste (test charter)** com os objetivos.
- Seguido de uma **reunião de debriefing** com os stakeholders interessados.
- Os objetivos funcionam como **condições de teste de alto nível**; itens de cobertura são identificados e exercitados durante a sessão.
- **Fichas de sessão** documentam passos e descobertas.

Quando é útil:

- **Especificações poucas ou inadequadas**;
- **Pressão de tempo** significativa;
- Para **complementar** técnicas mais formais.

É mais eficaz com testador **experiente**, com **conhecimento do domínio** e habilidades como análise, curiosidade e criatividade. Pode incorporar outras técnicas (ex.: EP).

### 4.4.3 Testes baseados em Lista de Verificação (Checklist)

O testador modela, implementa e executa testes para cobrir as **condições de teste de uma checklist**, criada a partir de experiência, do que é importante para o usuário ou de por que e como o software falha.

- **Não** devem conter: itens **verificáveis automaticamente**, itens mais adequados como **critérios de entrada/saída**, ou itens **muito gerais**.
- Itens geralmente em forma de **pergunta**, verificáveis **separada e diretamente**.
- Podem cobrir requisitos, propriedades da GUI, características de qualidade etc.; servem para testes **funcionais e não funcionais** (ex.: **10 heurísticas de usabilidade de Nielsen**).
- Itens perdem eficácia com o tempo (devs aprendem a evitar os erros) e novos defeitos graves devem ser incluídos → **atualizar regularmente** com base na análise de defeitos, mas **sem deixar a lista longa demais**.
- Sem casos detalhados, fornecem **diretrizes e consistência**. Checklists de **alto nível** geram variabilidade: **cobertura potencialmente maior, menor repetibilidade**.

## 4.5 Abordagens de Teste Baseadas na Colaboração

As técnicas anteriores focam em **detectar** defeitos. As abordagens colaborativas focam também em **evitar** defeitos via colaboração e comunicação.

### 4.5.1 Escrita colaborativa de histórias de usuário

**História de usuário**: recurso valioso para um usuário ou comprador. Os **3 C's** (Jeffries 2000):

| C                              | Significado                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| **Cartão** (Card)              | O meio onde a história é descrita (cartão físico, entrada em quadro eletrônico) |
| **Conversação** (Conversation) | Explicação de como o software será usado (documentada ou verbal)                |
| **Confirmação** (Confirmation) | Os **critérios de aceite**                                                      |

Formato mais comum:

> **Como** [ator/persona], **quero** [meta], **para que** [valor de negócio], seguido dos critérios de aceite.

- Técnicas de colaboração: **brainstorming**, **mapas mentais**.
- Gera visão compartilhada com **três perspectivas: negócio, desenvolvimento e teste**.
- Boas histórias seguem **INVEST**:

| Letra | Significado     |
| ----- | --------------- |
| **I** | Independente    |
| **N** | Negociável      |
| **V** | Valiosa         |
| **E** | Estimável       |
| **S** | Pequena (Small) |
| **T** | Testável        |

Se um stakeholder **não sabe como testar** a história, ela pode estar pouco clara, não refletir algo valioso, ou ele só precisa de ajuda para testar.

### 4.5.2 Critérios de Aceite

Condições que a implementação deve atender para ser **aceita pelos stakeholders**. São vistos como as **condições de teste** a serem exercitadas. Geralmente resultam da **Conversação**.

Usados para:

- Definir o **escopo** da história;
- Obter **consenso** entre stakeholders;
- Descrever cenários **positivos e negativos**;
- Servir de **base para o teste de aceite** da história;
- Permitir **planejamento e estimativa** precisos.

Formatos mais comuns:

| Formato                  | Exemplo                                                                          |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Orientado a cenários** | **Dado / Quando / Então** (Given/When/Then), usado no BDD                        |
| **Orientado a regras**   | Lista de pontos de verificação (bullets) ou tabela de mapeamento entrada → saída |

Outros formatos personalizados são aceitos, desde que **bem definidos e não ambíguos**.

> Exemplo orientado a cenário:
> **Dado** que o usuário tem saldo de R$ 50, **quando** ele tenta sacar R$ 100, **então** o sistema exibe "Saldo insuficiente" e o saldo permanece R$ 50.

### 4.5.3 Desenvolvimento Orientado por Teste de Aceite (ATDD)

Abordagem **test-first**: casos de teste criados **antes de implementar** a história, por membros com **perspectivas diferentes** (clientes, desenvolvedores, testadores). Execução manual ou automatizada.

Etapas:

1. **Workshop de especificação**: a história e seus critérios de aceite (se ainda não existirem) são analisados, discutidos e escritos. **Lacunas, ambiguidades e defeitos** são resolvidos aqui.
2. **Criação dos casos de teste**: pela equipe toda ou pelo testador, **baseados nos critérios de aceite**. São **exemplos** de como o software funciona (por isso "exemplos" e "testes" são usados como sinônimos). Técnicas das seções 4.2, 4.3 e 4.4 podem ser aplicadas.

Ordem recomendada:

1. **Testes positivos** (comportamento correto, sem exceções, caminho feliz);
2. **Testes negativos**;
3. **Características não funcionais** (ex.: performance, usabilidade).

Regras para os casos de teste:

- Compreensíveis para os stakeholders, em **linguagem natural**, com **pré-condições, entradas e pós-condições**.
- Devem cobrir **todas as características da história** e **não ir além dela** (os critérios de aceite podem detalhar pontos da história).
- **Dois casos não devem descrever a mesma característica** (sem redundância).
- Em formato compatível com framework de automação, os devs podem automatizá-los ao implementar o recurso → os testes de aceite viram **requisitos executáveis**.

## Resumo rápido do capítulo

| Técnica                       | Item de cobertura                      | Fórmula                               |
| ----------------------------- | -------------------------------------- | ------------------------------------- |
| EP                            | Partições (válidas e inválidas)        | partições exercitadas / total         |
| BVA 2 valores                 | Limite + vizinho da partição adjacente | valores exercitados / total           |
| BVA 3 valores                 | Limite + dois vizinhos                 | valores exercitados / total           |
| Tabela de decisão             | Colunas viáveis                        | colunas exercitadas / colunas viáveis |
| Transição: todos os estados   | Estados                                | estados visitados / total             |
| Transição: válidas (0-switch) | Transições válidas                     | válidas exercitadas / total válidas   |
| Transição: todas              | Transições válidas + inválidas         | exercitadas ou tentadas / total       |
| Instrução                     | Instruções executáveis                 | instruções exercitadas / total        |
| Ramificação                   | Ramificações                           | ramificações exercitadas / total      |

- Ramificação ⊃ Instrução. Todas as transições ⊃ Transições válidas ⊃ (normalmente) Todos os estados. BVA 3 valores é mais rigoroso que BVA 2 valores.
- Experiência: suposição de erro (e ataques a falhas), exploratório (sessões, cartas), checklist.
- Colaboração: 3 C's, INVEST, critérios de aceite (cenário x regra), ATDD (workshop → positivos → negativos → não funcionais).
