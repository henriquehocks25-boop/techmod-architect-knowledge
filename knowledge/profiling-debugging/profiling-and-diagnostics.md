# Profiling, logging e diagnósticos

[PERFORMANCE] Profiler responde onde tempo/alocação ocorre; contador responde quanto trabalho foi pedido/executado.

## Captura

Estado idle, carga sustentada e evento de spike exigem capturas diferentes. Separar servidor de render cliente. CPU sampling pode esconder função rara cara; instrumentar janelas de rebuild/save. Heap/counters mostram retenção; não atribuir toda GC à última classe alocada.

[VERSION-SPECIFIC] Ferramenta de profiling precisa compatibilidade Java/loader e fonte oficial; seleção atual fica no backlog até projeto alvo. Não instalar profiler arbitrário só porque tutorial o recomenda.

## Logging

Níveis: info para lifecycle/falha importante, debug para diagnóstico agregado, trace somente curta captura. Mensagem inclui subsistema, ID/posição, revisão e causa. Não serializar inventário completo por tick ou dados privados de outros owners. Rate limit de erro repetido mantém primeira causa e contador de ocorrências.

## Ferramentas internas

Overlay de estados; inspector de rota/topologia; dump controlado por permissão; contadores cache/budget/jobs; temporizador por subsistema. Expor backlog e wait age ajuda distinguir sistema lento de sistema parado.

## Hipótese → verificação

“Rebuild repetido” → contar mudanças e scans → coalescer → repetir sequência idêntica.
“Pacotes enormes” → medir bytes/viewers → delta/paginação → confirmar resync.
“Referência retida” → alternar mundos → examinar manager/cache → cleanup → confirmar plateau.

Nunca declarar otimização por diff menor ou microbenchmark fora do contexto. Saldo e fairness continuam corretos sob perfil.

Referências: [budget guide](../performance/PERFORMANCE_BUDGET_GUIDE.md), [triagem](build-crash-triage.md).
