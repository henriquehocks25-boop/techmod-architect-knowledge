# Integrated Tunnels: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master-26-lts, commit `14208985d9e1cc3557f68342878e19d63297874b`; consulta 2026-10-06. Base: [IItemNetwork.java](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/src/main/java/org/cyclops/integratedtunnels/api/network/IItemNetwork.java).

## Leitura arquitetural

Controle lógico e transferência podem evoluir em módulos distintos. Cada operação precisa preservar a semântica do recurso e respeitar a decisão recebida, sem assumir que a decisão continua válida depois de alterar o mundo.

## Tradeoff para um projeto original

[RECOMMENDATION] Defina fronteira entre expressão, seleção de endpoint e commit. Uma integração obrigatória deve aparecer na matriz de dependências.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Expressão ordena transferir dez unidades, o destino aceita três e depois muda a condição. A proposta passa se somente três chegam, a sobra mantém dono e a próxima execução reavalia a condição sem consumir duas vezes.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
