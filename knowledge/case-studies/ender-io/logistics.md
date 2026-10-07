# Ender IO: Consultas, canais e subconjuntos ativos

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.1; commit `18c9377a193b220702461ed1d26ccdd3ca1e7590`. Consulta: 2026-10-06. Fontes: [ConduitNetwork.java](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/enderio/src/main/java/com/enderio/enderio/api/conduits/network/ConduitNetwork.java), [README.md](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/docs/README.md).

## Evidência e interpretação

O contrato observado inclui consultas potencialmente dependentes de atualização de cache. Consumidores precisam saber se consultam uma projeção estável ou iniciam trabalho de manutenção.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: topologia mantém conectividade; catálogo de endpoints produz visões por canal; scheduler usa apenas fontes com demanda. Uma mudança de canal invalida a visão específica. Faça o diagnóstico explicar diferença entre conectado e elegível.

## Verificação e limite

Teste merge/split, ordem de prioridade, canal alterado, destino bloqueado e elemento carregado porém sem ticket de tick. Compare custo antes e depois do churn, sem presumir que todos os caches aceleram qualquer cenário.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
