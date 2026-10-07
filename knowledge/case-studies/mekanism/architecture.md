# Mekanism: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x, commit `bcd7a8bf594cff9614eb12238fe3776f19da24d9`; consulta 2026-10-06. Base: [DynamicNetwork.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/lib/transmitter/DynamicNetwork.java), [TileEntityFactory.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/tile/factory/TileEntityFactory.java).

## Leitura arquitetural

Separar o estado de cada processo da infraestrutura compartilhada permite informar qual linha está bloqueada. Separar conectividade de aceitadores evita que toda alteração de inventário seja tratada como mudança estrutural. Estas são interpretações do recorte observado, não garantias para todas as subclasses.

## Tradeoff para um projeto original

[RECOMMENDATION] Especifique consumo compartilhado e fairness entre processos antes de permitir paralelismo. Enumere os invalidadores de endpoint: face, rotação, remoção, unload, substituição e configuração.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Três linhas disputam energia; uma saída enche; descarrega-se um chunk de conexão. A proposta passa se as linhas elegíveis progridem sem consumir pelo processo bloqueado, os recursos são conservados e endpoints descarregados deixam de ser usados.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
