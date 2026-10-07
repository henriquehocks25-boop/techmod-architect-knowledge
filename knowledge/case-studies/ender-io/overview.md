# Ender IO: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo 1.21.1; commit `18c9377a193b220702461ed1d26ccdd3ca1e7590`.

Estudar consultas de rede, conexão por canal e separação de membros disponíveis e elementos que precisam de tick.

## O que foi estudado

API de conduits e documentação de ramos; não auditou toda a implementação de grafo, save ou processamento.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. ConduitNetwork documenta consultas em cache, disponibilização de caches quando necessário e conjuntos específicos para tick. As conexões acessíveis são ordenadas e filtradas por canal. A documentação declara a linha 8.x para 1.21.1 e a 9.x/26.1 em desenvolvimento no recorte consultado.

Evidência: [ConduitNetwork.java](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/enderio/src/main/java/com/enderio/enderio/api/conduits/network/ConduitNetwork.java), [README.md](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/docs/README.md).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
