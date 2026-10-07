# GregTech / GTCEu Modern: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.20.1, commit `2787512d27c701ae52d629bfc6cfc16326ab96ce`; consulta 2026-10-06. Base: [MachineDefinition.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/machine/MachineDefinition.java), [GTRecipeType.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/recipe/GTRecipeType.java).

## Leitura arquitetural

Definição declarativa separa conteúdo de instanciação. Hooks oferecem extensão, mas criam combinações de comportamento que exigem ordem e contrato. Uma abstração rica pode compensar em catálogo industrial grande e ser desproporcional para duas máquinas.

## Tradeoff para um projeto original

[RECOMMENDATION] Defina contrato e ordenação de hooks, inclusive em falhas, espera e cancelamento. Faça uma matriz de combinações suportadas de modificadores antes de multiplicar tiers.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Uma máquina espera saída, recebe modificador e cancela o trabalho durante reload de receitas. A proposta passa se custo e saída não repetem, hooks mantêm ordem definida e a tarefa recupera o motivo de espera.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
