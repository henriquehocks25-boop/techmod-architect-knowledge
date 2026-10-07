# Thermal Series: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.20.x, commit `24a26758694ba32eb96a8105f080c36e768cd02f`; consulta 2026-10-06. Base: [MachinePulverizerBlockEntity.java](https://github.com/CoFH/ThermalExpansion/blob/24a26758694ba32eb96a8105f080c36e768cd02f/src/main/java/cofh/thermal/expansion/common/block/entity/machine/MachinePulverizerBlockEntity.java).

## Leitura arquitetural

Uma especialização pequena pode reutilizar ciclo de vida e UI sem duplicar processamento. Porém, a classe derivada depende de contratos da base não inspecionada; a existência de herança não prova se ela é adequada para um sistema original.

## Tradeoff para um projeto original

[RECOMMENDATION] Separe slots de entrada, catalisador e saída com regras testáveis. Loop de áudio acompanha atividade e distância, não cada item isolado.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Catalisador fica ausente, saída bloqueia e augment muda enquanto há trabalho. A proposta passa se regras de admissão, pausa, consumo e áudio são explícitas, sem consumo repetido ou loop preso após unload.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
