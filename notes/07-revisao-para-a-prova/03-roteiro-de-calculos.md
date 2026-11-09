---
title: "Roteiro para questões de cálculo"
description: "Fórmulas e passo a passo para as questões K3 da prova (EP, BVA, tabela de decisão, transição de estado, cobertura de código, estimativa e priorização), com uma bateria de exercícios para treinar."
sidebar:
  label: "Roteiro de cálculos"
---

As questões de nível **K3** pedem para **aplicar** uma técnica. Elas estão concentradas nos capítulos 4 e 5 e costumam ser as que mais tomam tempo. Esta nota junta as fórmulas e um roteiro curto para cada uma, e fecha com exercícios para treinar.

## Folha de fórmulas

| Técnica | Item de cobertura | Fórmula ou regra |
|---|---|---|
| Particionamento de equivalência | Partições (válidas **e** inválidas) | Mínimo = nº de partições; com vários parâmetros (ECC), mínimo = tamanho do maior conjunto |
| BVA 2 valores | Valores limite | Limite + vizinho na partição adjacente |
| BVA 3 valores | Limites + vizinhos | Limite + os dois vizinhos; remover repetidos |
| Tabela de decisão | Colunas viáveis | n condições booleanas → 2ⁿ colunas; tirar as inviáveis; fundir as que têm "-" |
| Transição de estado: todos os estados | Estados | Visitar todos |
| Transição de estado: transições válidas | Transições válidas | Exercitar todas |
| Transição de estado: todas as transições | Válidas + inválidas | Inválidas = (estados × eventos) - válidas; uma inválida por caso |
| Instrução | Instruções executáveis | Executadas / total |
| Ramificação | Ramificações | Exercitadas / total; cada `if` tem duas saídas |
| Três pontos | - | E = (o + 4m + p) / 6; DP = (p - o) / 6 |
| Baseada em índices | - | Aplicar a proporção histórica ao valor novo |
| Extrapolação | - | Ex.: média das últimas iterações |
| Nível de risco (quantitativo) | - | Probabilidade × impacto |
| Percentual de detecção de defeitos | - | Encontrados no teste / (no teste + depois) × 100% |

## Roteiros

### EP

1. Liste **todas** as partições, válidas e inválidas, antes de olhar as alternativas.
2. Confira que não se sobrepõem.
3. Um valor por partição. Com vários campos, combine para usar o mínimo de casos.

### BVA

1. Liste as partições ordenadas.
2. Marque **mínimo e máximo** de cada uma, nas fronteiras.
3. 2 valores: use os limites. 3 valores: acrescente os dois vizinhos de cada limite.
4. **Remova repetidos** e conte.
5. Atenção à **granularidade** (inteiros, centavos, datas).

### Tabela de decisão

1. Liste as condições e as ações.
2. Monte 2ⁿ colunas.
3. Elimine as **inviáveis**.
4. Se pedir a tabela minimizada, funda colunas em que uma condição não muda a ação.
5. Conte as colunas restantes.

### Transição de estado

1. Desenhe a **tabela de estados** (linhas = estados, colunas = eventos).
2. Células preenchidas = transições válidas. Células vazias = inválidas.
3. Para transições válidas, procure **um caminho** que passe por todas (às vezes um caso basta).
4. Para todas as transições, some **um caso por transição inválida**.

### Cobertura de código

1. Numere as instruções e marque as decisões.
2. Desenhe (ou imagine) o grafo: cada decisão tem saída V e F.
3. Para instrução: o menor conjunto que passa por todas as linhas.
4. Para ramificação: o menor conjunto que passa por **V e F de cada decisão**.

### Priorização

1. Ordene pela prioridade (ou risco, ou cobertura).
2. Ajuste pelas **dependências**: quem é pré-requisito vem antes, mesmo com prioridade menor.
3. Em cobertura adicional, recalcule a cada passo o que **cada teste acrescenta**.

## Bateria de exercícios

Tente resolver sem abrir a resposta. Anote o tempo: o ideal é 2 a 3 minutos por questão.

<details>
<summary>1. (EP) Um campo aceita um código de 3 a 6 dígitos numéricos. Quantas partições existem, considerando o tamanho, e qual o mínimo de testes?</summary>

Partições por tamanho: menos de 3 dígitos (inválida), de 3 a 6 (válida), mais de 6 (inválida). **3 partições, 3 testes.** Se o enunciado também considerar caracteres não numéricos, surge mais uma partição inválida (código com letras), totalizando 4.

</details>

<details>
<summary>2. (BVA 2 valores) Um desconto vale para compras de R$ 50,00 a R$ 500,00, com centavos. Quais valores testar?</summary>

**49,99; 50,00; 500,00; 500,01.**

</details>

<details>
<summary>3. (BVA 3 valores) Um campo aceita de 10 a 20 (inteiros). Quantos valores e quais?</summary>

Limites: 9, 10, 20, 21. Com vizinhos: **8, 9, 10, 11, 19, 20, 21, 22** → 8 valores.

</details>

<details>
<summary>4. (Tabela de decisão) Três condições booleanas, sendo que a combinação "C1 = V e C2 = V" é impossível. Quantas colunas viáveis?</summary>

2³ = 8 colunas. As combinações com C1 = V e C2 = V são 2 (C3 = V ou F). **8 - 2 = 6 colunas viáveis.**

</details>

<details>
<summary>5. (Transição de estado) Um sistema tem 4 estados, 3 eventos e 6 transições válidas. Quantos casos são necessários para 100% de todas as transições, se um único caso cobre todas as válidas?</summary>

Inválidas: 4 × 3 - 6 = 6. Casos: 1 (válidas) + 6 (uma por inválida) = **7 casos**.

</details>

<details>
<summary>6. (Cobertura) Um código tem dois if independentes, em sequência, sem else. Qual o mínimo de testes para 100% de instrução e para 100% de ramificação?</summary>

Instrução: **1** (ambas as condições verdadeiras executam tudo). Ramificação: **2** (um com as duas verdadeiras, outro com as duas falsas).

</details>

<details>
<summary>7. (Três pontos) o = 2, m = 5, p = 14 dias. Qual a estimativa?</summary>

E = (2 + 20 + 14) / 6 = 36 / 6 = **6 dias**. DP = (14 - 2) / 6 = **2**. Resultado: 6 ± 2 dias.

</details>

<details>
<summary>8. (Índices) Num projeto anterior, desenvolvimento e teste ficaram na proporção 5:2. O desenvolvimento do novo projeto foi estimado em 1.000 horas. Qual a estimativa de teste?</summary>

1.000 × 2 / 5 = **400 horas**.

</details>

<details>
<summary>9. (Priorização) T1 (prioridade 2), T2 (prioridade 1, depende de T3), T3 (prioridade 3), T4 (prioridade 1). Prioridade 1 é a mais alta. Qual uma ordem válida?</summary>

**T4 → T3 → T2 → T1** (ou T3 → T4 → T2 → T1). T3 precisa vir antes de T2 por causa da dependência.

</details>

<details>
<summary>10. (Detecção de defeitos) O teste encontrou 120 defeitos. Em produção, mais 30 foram encontrados. Qual o percentual de detecção de defeitos?</summary>

120 / 150 = **80%**.

</details>

## Referências

- [Syllabus CTFL v4.0 em português](https://bstqb.online/ctfl) - BSTQB, português (capítulos 4 e 5)
- [CTFL - exemplos de exame](https://bstqb.online/ctfl) - BSTQB, português (simulados oficiais com gabarito)
