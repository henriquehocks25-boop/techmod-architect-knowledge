# Anti-patterns — networking

[ANTI-PATTERN] Sintomas são sinais para investigação; exceções precisam de contrato e evidência.

## Trust client

Problema/sintoma: Payload define saldo/custo ou resultado.

Consequência: Dupe, acesso indevido e desync.

Alternativa: Intenção validada pelo servidor.

Possível exceção: Projeção puramente visual local.

## Oversized packets

Problema/sintoma: Enviar inventário/grafo inteiro sempre.

Consequência: Latência, alocação e desconexão.

Alternativa: Paginação/deltas e limites no decode.

Possível exceção: Snapshot inicial limitado e autorizado.

## High-frequency packets

Problema/sintoma: Cada tick envia gauge de alta precisão.

Consequência: Tráfego cresce com viewers.

Alternativa: Quantização e cadence conforme necessidade visual.

Possível exceção: Evento curto realmente sensível à latência.

## Sync everything

Problema/sintoma: Save e sync compartilham schema completo.

Consequência: Vazamento de dados e bytes inúteis.

Alternativa: Projeções por observador e dirty separado.

Possível exceção: Objeto mínimo com todos campos públicos necessários.

## Sync unchanged data

Problema/sintoma: Pacote repetido sem diferença.

Consequência: Custo sem ganho visual.

Alternativa: Revisão e comparação de campos.

Possível exceção: Heartbeat mínimo de disponibilidade com finalidade clara.

Verificação: reproduzir sintoma, medir consequência e validar alternativa com os invariantes do subsistema. Consulte o [roteador](../../TOPIC_ROUTER.md) e o [catálogo de padrões](../architecture/pattern-catalog.md).

