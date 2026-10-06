# Routing, filtros e fairness

[RECOMMENDATION] Separe elegibilidade, ordenação e execução. Encontrar sink permitido não significa que ele aceitará recurso agora.

## Elegibilidade

Whitelist/blacklist, tags, identidade, componentes/NBT conceituais, canais, ownership e face. Defina inversão e precedência: “não aceito” deve dominar fallback quando assim especificado. Matching parcial de componentes pode aceitar pilhas diferentes; informar ao jogador.

## Ordenação

| Política | Ganho | Risco |
|---|---|---|
| Priority | Abastece máquinas críticas | Fome de menor prioridade |
| Round-robin | Distribuição previsível | Ponteiro deve sobreviver a mudança de lista |
| Nearest | Layout importa | Distância pode custar pathfinding |
| Lowest-load | Distribui pressão | Medição obsoleta oscila escolha |
| Stock keeping | Mantém estoque alvo | Reservas duplicadas e loop import/export |
| Request-based | Produz por demanda | Scheduler de requests e cancelamento |

Push move desde fonte; pull parte da necessidade do destino; hybrid precisa coordenação para não puxar/empurrar mesmo recurso em loop. Extractors/inserters definem ação, não só tipo de cabo.

Quotas limitam por endpoint/período; throttling reduz tentativas; transfer budget limita trabalho global. Budget em quantidade não limita CPU: tentar mil sinks rejeitando custa mesmo com zero item movido.

## Busca e cache

Route cache por source/sink/política/revisão. Endpoint cache tem disponibilidade. Failure caching evita repetir rejeição até mudança relevante ou retry com backoff limitado; nunca backoff infinito sem despertar.

## Verificação

Dois sinks prioridade igual; um cheio; filtro alterado; tag reload; source e sink mesmo inventory; destino temporariamente sem chunk. Medir tempo até todos sinks elegíveis receberem; garantir que spec de fairness é verificável.

Referências: [transferência](transfer-integrity.md), [padrões](examples-and-diagnostics.md).
