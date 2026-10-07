# Applied Energistics 2: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo main, commit `de2b845e9d1e5ac137e05018e5fa1dbd9e58d427`; consulta 2026-10-06. Base: [IGrid.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/IGrid.java), [IStorageService.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/storage/IStorageService.java).

## Leitura arquitetural

Um serviço de rede pode fornecer uma projeção adequada para interface sem conceder autoridade para retirar itens. A separação entre nó físico e máquina evita contabilizar várias conexões como vários dispositivos. O recorte não prova como transações, planejamento e persistência se coordenam.

## Tradeoff para um projeto original

[RECOMMENDATION] Separe consulta aproximada da operação autoritativa de extração. Diferencie dispositivo, porta, nó e dono do saldo.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Dois terminais observam um snapshot e tentam retirar o último item; um provedor se desconecta. A proposta passa se somente um retira, o snapshot converge e saldo desligado não continua disponível para novos trabalhos.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
