# LaserIO: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo main, commit `4d278a6351a434d343fbf70d942baeeaf2607536`; consulta 2026-10-06. Base: [LaserNodeBE.java](https://github.com/Direwolf20-MC/LaserIO/blob/4d278a6351a434d343fbf70d942baeeaf2607536/src/main/java/com/direwolf20/laserio/common/blockentities/LaserNodeBE.java).

## Leitura arquitetural

Cartão pode representar uma intenção configurável; nó pode resolver endpoints e executar essa intenção. Cache por face exige tradução consistente entre lado local e lado de mundo. O número seis observado pertence ao bloco orientado, não é um limite geral de uma rede abstrata.

## Tradeoff para um projeto original

[RECOMMENDATION] Modele cartão como configuração validada, não como objeto que carrega saldo oculto. Round-robin precisa preservar avanço e evitar punir sempre o último destino.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Um cartão tenta três destinos, o segundo aceita parcialmente e o terceiro fica indisponível; em seguida o nó gira. A proposta passa se sobra tem dono, fairness continua e a política por lado não passa a extrair do inventário errado.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
