# Mekanism: Fábricas e paralelismo

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.21.x; commit `bcd7a8bf594cff9614eb12238fe3776f19da24d9`. Consulta: 2026-10-06. Fontes: [DynamicNetwork.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/lib/transmitter/DynamicNetwork.java), [TileEntityFactory.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/tile/factory/TileEntityFactory.java).

## Evidência e interpretação

A leitura de TileEntityFactory fundamenta distinguir processo local e serviços da máquina. Projeto autoral: cada linha tem entrada selecionada, progresso e motivo de pausa; a máquina tem orçamento total de energia e distribuição.

## Modelo transferível

[RECOMMENDATION] Não multiplicar consumo, saída e velocidade independentemente: defina custo por lote e admissão de cada processo. Persistir identidade dos trabalhos evita trocar receita silenciosamente após reload. Esta regra é recomendação, não descrição do save do Mekanism.

## Verificação e limite

Aceite proposto: receitas diferentes em linhas distintas, última fração de energia, saída parcialmente cheia, upgrade removido durante processo e save/reload. Verifique conservação e prioridades; nenhum teste foi executado no mod estudado.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
