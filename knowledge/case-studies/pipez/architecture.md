# Pipez: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master, commit `8d255aa462bc13e8e93ce487e7baaf13c25df9b0`; consulta 2026-10-06. Base: [readme.md](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/readme.md), [DistributionCache.java](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/src/main/java/de/maxhenkel/pipez/blocks/tileentity/configuration/DistributionCache.java).

## Leitura arquitetural

Separar ponto ativo de cabo passivo permite uma UX direta de extração. Políticas de distribuição são estratégias com semânticas distintas: proximidade otimiza distância aparente; round-robin intenta fairness. Ambas precisam de tratamento para destino bloqueado.

## Tradeoff para um projeto original

[RECOMMENDATION] Filtro, velocidade e distribuição devem ter efeitos visíveis e limitados. Uma configuração alterada deve sujar o estado derivado correspondente.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Destino mais próximo enche, upgrade sai e o chunk distante descarrega. A proposta passa se política preserva saldo, limite acompanha upgrade e não há carregamento oculto de chunk para tentar transferência.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
