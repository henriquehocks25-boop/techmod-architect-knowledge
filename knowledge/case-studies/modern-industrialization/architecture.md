# Modern Industrialization: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x, commit `a4c678edb916ae1e450c12a97c25601346944cb3`; consulta 2026-10-06. Base: [ADDING_MACHINES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_MACHINES.md), [ADDING_RECIPES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_RECIPES.md).

## Leitura arquitetural

Máquina e receita podem compartilhar um contrato de layout sem compartilhar toda a lógica. Condições ambientais tornam matching dependente do mundo; cache por inventário apenas seria insuficiente. Estabilidade declarada pelo projeto tem escopo, não vale entre grandes versões.

## Tradeoff para um projeto original

[RECOMMENDATION] Faça schema e layout de GUI concordarem sobre recursos aceitos. Se uma receita depende do ambiente, documente como e quando a condição é revalidada.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Receita condicionada a dimensão e bloco próximo entra em processo; o bloco é removido e os dados recarregados. A proposta passa se a política de pausa/cancelamento é explícita e o cache não continua autorizando trabalho inválido.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
