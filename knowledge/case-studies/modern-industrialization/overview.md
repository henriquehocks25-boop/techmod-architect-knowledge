# Modern Industrialization: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo 1.21.x; commit `a4c678edb916ae1e450c12a97c25601346944cb3`.

Estudar conteúdo industrial descrito por tipos de receita, layout de recursos e condições de processo.

## O que foi estudado

Documentos oficiais de adição de máquinas e receitas. Não foram rastreados todos os internals de energia, eficiência, rede ou multiblocos.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. ADDING_MACHINES relaciona tipos de receita, slots/tanques, tier, indicadores e apresentação. ADDING_RECIPES apresenta energia/duração, entradas/saídas e condições como dimensão, biome ou blocos próximos; alerta sobre condições personalizadas lentas. O README delimita estabilidade de API pública por grande versão Minecraft, excetuando Internal.

Evidência: [ADDING_MACHINES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_MACHINES.md), [ADDING_RECIPES.md](https://github.com/AztechMC/Modern-Industrialization/blob/a4c678edb916ae1e450c12a97c25601346944cb3/docs/ADDING_RECIPES.md).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
