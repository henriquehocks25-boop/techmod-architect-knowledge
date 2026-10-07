# Ender IO: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.1, commit `18c9377a193b220702461ed1d26ccdd3ca1e7590`; consulta 2026-10-06. Base: [ConduitNetwork.java](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/enderio/src/main/java/com/enderio/enderio/api/conduits/network/ConduitNetwork.java), [README.md](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/docs/README.md).

## Leitura arquitetural

Uma rede pode ter muitos membros mas poucos endpoints ativos. Separar os conjuntos evita usar presença topológica como motivo automático para trabalho periódico. Uma operação de garantir cache pode ser cara quando há sujeira; API de consulta não significa custo constante.

## Tradeoff para um projeto original

[RECOMMENDATION] Distinga membros conectados, carregados, habilitados e agendados. Canal deve fazer parte da chave de consulta e das permissões de destino.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Mude o canal de um endpoint enquanto metade da rede descarrega; consulte destinos duas vezes. A proposta passa se só destinos do canal atual aparecem, cache é reconstruído no momento correto e endpoints inativos não geram trabalho inútil.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
