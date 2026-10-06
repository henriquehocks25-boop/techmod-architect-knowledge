# Guia de orçamento de performance

[PERFORMANCE] Orçamento é contrato de trabalho sob carga, medido na combinação alvo. Não existe número universal de máquinas/tubos “seguro”.

## Definir cenário

Hardware, Java, jogo/loader, mods/config, seed, chunks carregados, nós, endpoints, máquinas ativas, GUIs e jogadores. Baseline vanilla/pack permite separar custo próprio. Fazer warmup, amostras longas e repetições; não comparar só média.

Exemplo autoral de planejamento, não benchmark: cenário opera a 20 ticks/s e janela de 50 ms/tick. Reservar 3 ms p95 para subsistema industrial é decisão do projeto, não recomendação universal; outros sistemas e p99 podem quebrar alvo mesmo com média baixa.

## Budgets distintos

- Trabalho: tentativas, scans, arestas visitadas e matching por tick.
- Recursos: unidades transferidas, paralelismo e processos ativos.
- Latência: máximo até nó elegível ser atendido e até rebuild completar.
- Memória: entradas de cache, jobs, índices e retenção de referências.
- Rede: bytes por pacote × frequência × observadores.
- Cliente: frame time, renderers visíveis e partículas por região.

Quantidade transferida zero não significa CPU zero. Se orçamento acabou, agendar continuação com cursor e fairness. Backlog precisa limite/diagnóstico; um sistema que nunca termina rebuild não é rápido.

## Modelo de escala

Scan de N nós por cada uma de N fontes pode aproximar N². Rebuild O(V+E) por mudança ainda custa muito em tempestade de eventos. Amortizar/coalescer reduz repetições; incremental exige coerência. Se rede usa distância física, cache de caminho deve incluir política/topologia.

## Instrumentação

Contadores por subsistema: active/idle, attempts/success, cache hit/miss/invalidation, nós visitados, filas, bytes e maior espera. Histograma p50/p95/p99; logs agregados, sem string pesada por item. Profiler confirma onde tempo/alocação está sendo gasto.

## Aceite

Cenários de [escala](SCALING_TESTS.md) mantêm integridade, p95/p99 acordados e recuperação eventual. Se carga excede orçamento, degrada por latência limitada/pausa informada, sem dupe ou chunk storm.

Referências: [profiling](../profiling-debugging/profiling-and-diagnostics.md), [template](../../templates/PERFORMANCE_BUDGET.md).
