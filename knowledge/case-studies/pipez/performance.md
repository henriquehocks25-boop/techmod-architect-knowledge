# Pipez: Ler benchmarks sem extrapolar

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master; commit `8d255aa462bc13e8e93ce487e7baaf13c25df9b0`. Consulta: 2026-10-06. Fontes: [readme.md](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/readme.md), [DistributionCache.java](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/src/main/java/de/maxhenkel/pipez/blocks/tileentity/configuration/DistributionCache.java).

## Evidência e interpretação

O gráfico de performance publicado no README é histórico. Para usá-lo como evidência seria necessário reproduzir cenário, versões, máquinas, throughput e ambiente.

## Modelo transferível

[RECOMMENDATION] Uma comparação original deve separar rede vazia, rede ativa, destinos bloqueados e churn. Equalize throughput e quantidade de endpoints; caso contrário um sistema que faz menos trabalho parecerá melhor sem oferecer o mesmo serviço.

## Verificação e limite

Apresente números como resultado delimitado com dados brutos e dispersão. Até reproduzir, a conclusão desta biblioteca é somente que a organização descrita merece avaliação, não que o mod é o mais rápido.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
