# Performance smells

[PERFORMANCE] Sintoma é pista; medir antes de refatorar.

| Sinal | Hipótese | Evidência a coletar | Alternativa |
|---|---|---|---|
| Máquinas vazias dominam tick | Lookup/polling permanente | Stack + contagem idle | Eventos e polling limitado |
| Colocar cabo trava | Rebuild síncrono grande | Nós/arestas, p99, backlog | Coalescer e budget |
| Item individual abre busca | Pathfind por unidade | Calls por batch | Route/endpoints cacheados |
| Rede sem sink piora | Endless retries | Tentativas com sucesso zero | Failure cache/backoff/despertar |
| Abrir monitor multiplica tráfego | Snapshot inteiro repetido | Bytes×viewers | Inicial + delta/paginação |
| Save pausa servidor | Schema enorme/cache persistido | Tempo, bytes e dirty rate | Salvar verdade mínima |
| Memória sobe ao trocar mundos | Handles/managers retidos | Heap e referências de mundo | Cleanup por lifecycle |
| GC piora com throughput | Alocação em hot path | Allocation profile | Batch e estruturas após medir |
| Queda de FPS sem tick alto | Render/partículas | Frame profile | Culling e budget visual |
| Chunk count cresce sozinho | Consulta força carga | Tickets/donos | Acesso loaded-only e limites |
| Job pequeno espera para sempre | Planejamento monopoliza | Fila e wait age | Fair scheduling e limite de expansão |
| Cache não ajuda | Chave muda/dirty global | Hit ratio e invalidadores | Chave correta e invalidar só afetado |

## Exceções

Rede muito pequena pode usar rebuild completo por mudança. Polling limitado é necessário para endpoints que não notificam. Snapshot completo é correto na abertura/reconexão. O problema é custo/repetição fora do orçamento, não a técnica isolada.

## Verificação

Após mudança, repetir mesmo cenário e comparar tempo, alocação, tráfego e espera. Performance ganha não pode vir de deixar de atender sink ou perder output.

Referências: [budgets](PERFORMANCE_BUDGET_GUIDE.md), [anti-patterns](../anti-patterns/performance.md).
