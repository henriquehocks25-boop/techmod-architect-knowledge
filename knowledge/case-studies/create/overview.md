# Create: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo mc1.21.1/dev; commit `a927008632b5eb9abc841d4c9c830995dc461038`.

Estudar automação espacial e energia mecânica que tornam o comportamento da fábrica visível.

## O que foi estudado

README e KineticNetwork; Ponder aparece como proposta de onboarding. Não foram auditados contraptions, renderer, persistência ou todo processamento.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. KineticNetwork mantém fontes e membros, capacidade e carga, com agregados para membros descarregados. Recalcula com velocidade absoluta, remove membro cuja entidade viva deixou de corresponder e sincroniza quando agregados mudam. O README apresenta Ponder como ensino dentro do jogo.

Evidência: [KineticNetwork.java](https://github.com/Creators-of-Create/Create/blob/a927008632b5eb9abc841d4c9c830995dc461038/src/main/java/com/simibubi/create/content/kinetics/KineticNetwork.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
