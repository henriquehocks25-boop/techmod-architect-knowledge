# Assets, Blockbench e animação

[RECOMMENDATION] JSON estático costuma bastar para bloco sem deformação. Use Blockbench quando geometria, pivôs, UV e partes móveis exigem edição visual.

## Especificação para executor

Escala e orientação; silhueta; resolução/textura; paleta; faces conectáveis; nome dos elementos; pivôs; UV; estados idle/active/fault; clips e duração; loops/transições; formato de export; licença/autoria. Descrever o que move e como aparece, sem impor biblioteca antes de necessidade.

Pivô é centro de transformação; bones organizam hierarquia; UV relaciona superfície e textura. Texture atlas exige consistência de resolução/margem/formato conforme pipeline, não arquivo gigante por conveniência. Naming estável permite render localizar parte sem acoplamento a índice incidental.

## Animation state

Cliente escolhe clip por estado confirmado. Loop de motor não conclui receita; animation timestamp pode permitir retomada suave. Sincronizar começo/velocidade quando suficiente, em vez de pose inteira por tick.

## Dependências

GeckoLib-like library faz sentido para animação esquelética que excede pipeline simples e tenha versão/loader compatíveis. Evitar para hélice rotativa ou idle/active de textura; custo inclui API, JAR, assets e migração.

[VERSION-SPECIFIC] Exporters, modelos, formatos de item/block e bibliotecas de animação precisam de alvo. Não exportar formato de outro loader e esperar funcionar.

## Verificação

Preview em todas orientações; UV sem bleeding; transparência; culling; nomes consistentes; asset faltante; dedicated server sem carregar editor/biblioteca client indevidamente. Inventariar origem e licença; screenshots de estudo não autorizam reutilizar arte.

Fontes de ferramenta: [Blockbench](https://www.blockbench.net/); [padrões visuais Create](../case-studies/create/overview.md). Não foram produzidos assets nesta biblioteca.
