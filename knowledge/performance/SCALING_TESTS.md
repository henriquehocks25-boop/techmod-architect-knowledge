# Testes de escala

[PERFORMANCE] Crescer uma dimensão por vez identifica a causa. Depois combinar cargas para medir interação.

| Cenário | Crescimento | Medir e aceitar |
|---|---|---|
| Idle factory | 1 → 100 → 1000 máquinas vazias | Custo idle, alocação e despertar ao inserir |
| Active factory | Mesmo count, operações paralelas | Throughput, energia, saldo e p99 |
| Tubos | Nós versus endpoints separados | Tempo de rebuild e route cache |
| Sem destino | Todos outputs cheios | Attempts, backoff e retomada eventual |
| Split/merge storm | Sequência de pontes alteradas | Backlog, saldo e máximos por tick |
| Recipe catalog | Receitas sobrepostas/tag matching | Lookup e reload; conflito determinístico |
| Storage | Tipos versus quantidades enormes | Índice, overflow e sync paginado |
| Autocrafting | Profundidade/ciclos/jobs | Expansão limitada e starvation |
| Multiplayer | Viewers e edição simultânea | Bytes/s, permissões e confirmação |
| Save/reload | Muitas operações comprometidas | Pausa, consistência e nenhuma duplicação |
| Client view | Renderers/partículas visíveis | Frame time e culling |
| Chunk churn | Fronteiras carregam/descarregam | Tickets, cache e memory plateau |

Os números são pontos sugeridos para descobrir curva; não promessa de suporte. Escolher limite com cenário real. Stop de teste não pode sobrescrever mundo valioso; usar fixture/cópia.

## Procedimento

Fixar seed/config/versions; warmup; baseline; medir repetidas janelas; exportar profiling/counters; verificar totais por identidade antes/depois; registrar p50/p95/p99 e máximo. Comparar resultado com orçamento do projeto, incluindo recovery latency.

Não aceitar comparação entre mods de branches/configs diferentes como conclusão atual. Dados publicados pelos autores de um mod são evidência localizada, não benchmark independente desta biblioteca.

Referências: [testing](../testing-quality/test-strategy.md), [estudos e limites](../case-studies/comparison-matrix.md).
