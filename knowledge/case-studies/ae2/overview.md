# Applied Energistics 2: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo main; commit `de2b845e9d1e5ac137e05018e5fa1dbd9e58d427`.

Estudar serviços de uma rede lógica e a diferença entre disponibilidade, consulta e operação sobre recursos.

## O que foi estudado

Contratos públicos de grid e serviço de armazenamento; o algoritmo de autocrafting, protocolos e migração interna não foram traçados.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. IGrid expõe serviços, eventos e acesso a nós/máquinas, distinguindo máquinas únicas de seus nós. IStorageService documenta uma visão de inventário em cache atualizada no máximo uma vez por tick, que o chamador não pode modificar; a invalidade explícita tem custo.

Evidência: [IGrid.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/IGrid.java), [IStorageService.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/storage/IStorageService.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
