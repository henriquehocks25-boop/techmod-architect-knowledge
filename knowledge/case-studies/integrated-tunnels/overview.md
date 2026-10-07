# Integrated Tunnels: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo master-26-lts; commit `14208985d9e1cc3557f68342878e19d63297874b`.

Estudar uma camada de movimento de recursos apoiada em uma camada de decisão lógica.

## O que foi estudado

README, API de rede de itens e árvore de recursos/partes. Não houve leitura completa dos executores de cada tipo nem execução de GameTests.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. IItemNetwork estende a abstração de rede de ingredientes posicionados de Integrated Dynamics. A árvore distingue recursos e partes importadoras/exportadoras; contém testes de energia. A existência de testes mostra organização, não sucesso de execução.

Evidência: [IItemNetwork.java](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/src/main/java/org/cyclops/integratedtunnels/api/network/IItemNetwork.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
