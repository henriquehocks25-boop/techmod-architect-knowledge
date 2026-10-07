# Thermal Series: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo 1.20.x; commit `24a26758694ba32eb96a8105f080c36e768cd02f`.

Estudar uma máquina especializada sobre infraestrutura compartilhada e configuração por augments.

## O que foi estudado

Thermal Expansion, especialmente pulverizador; não foi auditada a Series inteira, Foundation, Dynamics nem a base compartilhada nas dependências.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. MachinePulverizerBlockEntity herda a base de máquina, configura grupos de entrada/catalisador/saída, usa manager para receitas e valida entradas. Possui augments e loop sonoro condicionado. O índice de documentação CoFH consultado reúne material histórico 1.12/1.16.

Evidência: [MachinePulverizerBlockEntity.java](https://github.com/CoFH/ThermalExpansion/blob/24a26758694ba32eb96a8105f080c36e768cd02f/src/main/java/cofh/thermal/expansion/common/block/entity/machine/MachinePulverizerBlockEntity.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
