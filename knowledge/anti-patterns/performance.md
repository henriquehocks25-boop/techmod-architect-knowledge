# Anti-patterns — performance

[ANTI-PATTERN] Sintomas são sinais para investigação; exceções precisam de contrato e evidência.

## Scan every tick

Problema/sintoma: Idle percorre mundo ou catálogo inteiro.

Consequência: CPU cresce com conteúdo sem trabalho útil.

Alternativa: Dirty flags, índices, polling limitado.

Possível exceção: Scan local barato e pequeno medido.

## Rebuild every tick

Problema/sintoma: Grafo é reconstruído sem mudança.

Consequência: Picos e garbage pressure.

Alternativa: Versão de topologia e coalescing.

Possível exceção: Rede mínima e mutação frequente com custo comprovado.

## Pathfind every item

Problema/sintoma: Mesmo caminho calculado por unidade.

Consequência: N×throughput domina servidor.

Alternativa: Batch, endpoints e cache invalidado.

Possível exceção: Rota depende de estado que realmente muda a cada unidade.

## Empty tick

Problema/sintoma: Máquinas vazias fazem matching e pacotes.

Consequência: Carga proporcional ao count idle.

Alternativa: Dormência com despertar eventual.

Possível exceção: Check constante barato pode ser necessário.

## Endless retries

Problema/sintoma: Todos sinks cheios geram busca contínua.

Consequência: Custo máximo quando throughput é zero.

Alternativa: Failure cache e backoff com invalidadores.

Possível exceção: Tentativa limitada para API sem evento.

## Forced chunks everywhere

Problema/sintoma: Consulta carrega destino invisível.

Consequência: Memória e ticks crescem sem dono.

Alternativa: Loaded-only; tickets explícitos limitados.

Possível exceção: Feature declarada de chunk loader com cleanup.

Verificação: reproduzir sintoma, medir consequência e validar alternativa com os invariantes do subsistema. Consulte o [roteador](../../TOPIC_ROUTER.md) e o [catálogo de padrões](../architecture/pattern-catalog.md).

