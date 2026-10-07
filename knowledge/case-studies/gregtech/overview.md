# GregTech / GTCEu Modern: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo 1.20.1; commit `2787512d27c701ae52d629bfc6cfc16326ab96ce`.

Estudar famílias extensíveis de máquinas e receitas com grande variedade de recursos e modificadores.

## O que foi estudado

GTCEu Modern, não todas as variantes GregTech. Duas definições de API foram inspecionadas no ramo 1.20.1; a documentação também distingue suporte Forge/NeoForge por alvo.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. MachineDefinition reúne identidade, criação de objetos, tipos de receita, tier, orientação, UI e hooks de trabalho. GTRecipeType modela máximos de entradas/saídas por capacidade e contém categorias, UI e base de receitas. Os hooks incluem etapas antes, durante, espera e depois do trabalho.

Evidência: [MachineDefinition.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/machine/MachineDefinition.java), [GTRecipeType.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/recipe/GTRecipeType.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
