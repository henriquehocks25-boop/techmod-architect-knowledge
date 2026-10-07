# Create: Energia mecânica como linguagem de gameplay

[CASE-STUDY] [VERSION-SPECIFIC] Ramo mc1.21.1/dev; commit `a927008632b5eb9abc841d4c9c830995dc461038`. Consulta: 2026-10-06. Fontes: [KineticNetwork.java](https://github.com/Creators-of-Create/Create/blob/a927008632b5eb9abc841d4c9c830995dc461038/src/main/java/com/simibubi/create/content/kinetics/KineticNetwork.java).

## Evidência e interpretação

O arquivo cinético observado distingue oferta e carga, em vez de apenas um saldo de energia consumível. Uma rede pode estar conectada e ainda incapaz de operar.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: escolha unidade de carga, convenção de sinal/direção e regra de sobrecarga. Defina se aumentar RPM aumenta produtividade, demanda ou ambas. Transformação e conversão elétrica devem possuir teto e perda explícita para evitar ciclos lucrativos.

## Verificação e limite

Teste arranque, inversão, remoção de fonte e consumidor bloqueado. Não extrapolar coeficientes ou fórmulas do mod sem versão e receita exatas.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
