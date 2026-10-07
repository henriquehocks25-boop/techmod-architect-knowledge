# Pipez: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo master; commit `8d255aa462bc13e8e93ce487e7baaf13c25df9b0`.

Estudar tubos simples com configuração de extração, upgrades e distribuição.

## O que foi estudado

README e adapter DistributionCache. Não foi auditado o algoritmo completo de transporte, unload, cache ou invalidação.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. README descreve recursos, filtros, controle de redstone, upgrades e modos round-robin, nearest, furthest e random. Afirma que só pontos de extração possuem block entities e que evita cargas desnecessárias de chunks. DistributionCache encaminha configuração com callback de alteração; o algoritmo base não foi inspecionado.

Evidência: [readme.md](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/readme.md), [DistributionCache.java](https://github.com/henkelmax/pipez/blob/8d255aa462bc13e8e93ce487e7baaf13c25df9b0/src/main/java/de/maxhenkel/pipez/blocks/tileentity/configuration/DistributionCache.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
