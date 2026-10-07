# Mekanism: Transmissores, caches e mundo

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x; commit `bcd7a8bf594cff9614eb12238fe3776f19da24d9`. Consulta: 2026-10-06. Fontes: [DynamicNetwork.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/lib/transmitter/DynamicNetwork.java), [TileEntityFactory.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/tile/factory/TileEntityFactory.java).

## Evidência e interpretação

DynamicNetwork fornece evidência de uma camada de topologia com validação de adições e atualização de aceitadores. Isso não descreve, por si só, toda estratégia de caminho e transferência.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: topologia tem geração; rota guarda geração de origem; handle de destino tem validade curta. Ao fazer split, invalide a projeção de conexão sem perder o saldo que possui outro dono. Um rebuild pode ser fatiado, desde que a rede informe indisponibilidade durante a janela.

## Verificação e limite

Compare custo de rede estável com churn de cabos. Meça visitas por atualização, filas de rebuild e invalidações úteis. Não afirmar performance superior com base apenas na existência de um cache.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
