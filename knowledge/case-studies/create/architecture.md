# Create: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo mc1.21.1/dev, commit `a927008632b5eb9abc841d4c9c830995dc461038`; consulta 2026-10-06. Base: [KineticNetwork.java](https://github.com/Creators-of-Create/Create/blob/a927008632b5eb9abc841d4c9c830995dc461038/src/main/java/com/simibubi/create/content/kinetics/KineticNetwork.java).

## Leitura arquitetural

Uma rede cinética mostra como topologia e agregados físicos simplificados podem ser responsabilidades distintas. Tornar fluxos observáveis muda tanto UX quanto custo visual; isso é interpretação de design. Agregados de unloaded não provam, isoladamente, todas as garantias de unload.

## Tradeoff para um projeto original

[RECOMMENDATION] Defina qual propriedade limita a rede: potência, stress ou velocidade; não use nomes intercambiáveis. Separe cálculo de estado da frequência de animação no cliente.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Uma fonte para, dois eixos mudam de velocidade e parte da rede descarrega. A proposta passa se há estado coerente de falta de capacidade, ausência de referência obsoleta e animação que reflete o resultado servidor sem recalcular a rede por frame.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
