# GregTech / GTCEu Modern: Tipos extensíveis e limites de recursos

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.20.1; commit `2787512d27c701ae52d629bfc6cfc16326ab96ce`. Consulta: 2026-10-06. Fontes: [MachineDefinition.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/machine/MachineDefinition.java), [GTRecipeType.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/recipe/GTRecipeType.java).

## Evidência e interpretação

GTRecipeType oferece evidência de limites por capacidade e integração com apresentação. A observação não substitui a inspeção do executor que consome os recursos.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: schema valida quantidade, chance, duração, custo e compatibilidade com a máquina. Rejeite dados inconsistentes com mensagem incluindo ID e campo. Um tipo muito genérico pode obrigar todo lookup a validar combinações impossíveis.

## Verificação e limite

Meça conjuntos grandes de receitas e reload. Cache precisa incluir versão do conjunto e todos os critérios que mudam matching; modificar apenas o ingrediente visual não deve conservar uma receita incompatível.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
