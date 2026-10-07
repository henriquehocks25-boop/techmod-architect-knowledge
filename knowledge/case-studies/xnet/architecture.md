# XNet: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.16 (ramo padrão histórico consultado), commit `0ca5b08e451f4c9adce2ebafcb9767171a9ec67f`; consulta 2026-10-06. Base: [TileEntityController.java](https://github.com/McJtyMods/XNet/blob/0ca5b08e451f4c9adce2ebafcb9767171a9ec67f/src/main/java/mcjty/xnet/modules/controller/blocks/TileEntityController.java).

## Leitura arquitetural

Cabos passivos reduzem a necessidade de estado por segmento, mas o controller pode concentrar custo. Transferência imediata simplifica visual e custódia em trânsito; ainda exige conservação e regras para aceitação parcial.

## Tradeoff para um projeto original

[RECOMMENDATION] Escolha conscientemente entre fluxo visual com recurso em trânsito e transferência direta. Políticas por canal precisam de diagnóstico e limites claros.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Um controller gerencia muitos canais, destinos enchem e dois segmentos dividem a rede. A proposta passa se orçamento limita tentativas, há fairness entre canais e itens não desaparecem em operações parcialmente aceitas.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
