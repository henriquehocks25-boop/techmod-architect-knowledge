# GregTech / GTCEu Modern: Definições de máquina e hooks

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.20.1; commit `2787512d27c701ae52d629bfc6cfc16326ab96ce`. Consulta: 2026-10-06. Fontes: [MachineDefinition.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/machine/MachineDefinition.java), [GTRecipeType.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/recipe/GTRecipeType.java).

## Evidência e interpretação

A definição observada agrega metadados e pontos de extensão. Ela é um contrato de conteúdo mais amplo do que um único tick de processamento.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: núcleo é responsável pelo ciclo de vida; definição informa parâmetros e composição. Limite hooks que podem mutar inventário ou rede; eventos puramente visuais observam resultados confirmados. Evite uma callback diferente para cada combinação de feature.

## Verificação e limite

Documente efeitos, reentrância e comportamento ao falhar. O teste de família deve abranger cada estado e um conjunto de modificadores representativo, em vez de testar só registro de IDs.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
