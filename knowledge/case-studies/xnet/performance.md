# XNet: Centralização e custo por rede

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.16 (ramo padrão histórico consultado); commit `0ca5b08e451f4c9adce2ebafcb9767171a9ec67f`. Consulta: 2026-10-06. Fontes: [TileEntityController.java](https://github.com/McJtyMods/XNet/blob/0ca5b08e451f4c9adce2ebafcb9767171a9ec67f/src/main/java/mcjty/xnet/modules/controller/blocks/TileEntityController.java).

## Evidência e interpretação

A organização descrita pelo autor concentra atividade no controller. A lição é medir o trabalho total, não contar block entities como métrica única de velocidade.

## Modelo transferível

[RECOMMENDATION] Cenário proposto: cabo longo parado, muitos endpoints bloqueados, canais com regras caras e alterações de topologia frequentes. Meça tempo por controller, operações úteis, fila e maior atraso por canal.

## Verificação e limite

Introduza backoff para destino sem espaço e invalidadores que acordam trabalho. Quantifique se a economia de cabos compensa o ponto central; este estudo não mede TPS nem compara hardware ou releases.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
