# Pipez: Extração e modos de distribuição

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master; commit `8d255aa462bc13e8e93ce487e7baaf13c25df9b0`. Consulta: 2026-10-06. Fontes: [readme.md](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/readme.md), [DistributionCache.java](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/src/main/java/de/maxhenkel/pipez/blocks/tileentity/configuration/DistributionCache.java).

## Evidência e interpretação

A configuração pública torna claro que política é parte da experiência do jogador. O estudo não estabelece taxa ou fórmula exata por upgrade.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: extração inicia trabalho; endpoint valida face e capacidade; política escolhe destino elegível. Uma mudança de filtro ou upgrade invalida seleção anterior. Blacklist e whitelist precisam de indicação inequívoca e matching versionado de dados.

## Verificação e limite

Teste empates de distância, todos destinos cheios, item com componentes diferentes e round-robin após reconexão. Registre tentativas evitadas e maior atraso, não somente quantidade transferida.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
