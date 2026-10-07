# Modern Industrialization: Contrato entre conteúdo e interface

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x; commit `a4c678edb916ae1e450c12a97c25601346944cb3`. Consulta: 2026-10-06. Fontes: [ADDING_MACHINES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_MACHINES.md), [ADDING_RECIPES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_RECIPES.md).

## Evidência e interpretação

O documento ADDING_MACHINES inclui layout de inventário, tanques e indicadores. Isso oferece evidência de parametrização reutilizável, sem exigir copiar builders.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: definição fornece o que cabe na máquina; o núcleo executa; a tela representa. A validação verifica divergência entre número de recursos declarados, capacidade física e posições visuais. Um portão de progressão deve mudar opções do jogador, não somente custo escondido.

## Verificação e limite

Teste uma máquina mínima de itens e outra com item+fluido. Falha de registro ou receita incompatível deve identificar o conteúdo, não produzir simplesmente uma máquina que nunca inicia.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
