# Modern Industrialization: Condições de processo e custo de matching

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x; commit `a4c678edb916ae1e450c12a97c25601346944cb3`. Consulta: 2026-10-06. Fontes: [ADDING_MACHINES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_MACHINES.md), [ADDING_RECIPES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_RECIPES.md).

## Evidência e interpretação

As docs oficiais mostram receitas de múltiplos recursos e condições ambientais. Seus exemplos têm escopo de ramo, mesmo quando legíveis como tutorial genérico.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: indexe por recurso barato antes de avaliar ambiente caro. Cacheie a seleção com geração de receitas e geração dos critérios ambientais relevantes. Não consultar um volume de blocos inteiro por processo a cada tick se a condição muda raramente.

## Verificação e limite

Catalisadores e probabilidades pedem uma regra clara para quando rolar e consumir. O estudo não atesta qual RNG ou ordem de commit MI usa; teste save/reload para um sistema original.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
