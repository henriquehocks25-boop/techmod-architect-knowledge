# Refined Storage: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo develop (refinedstorage2); commit `cb95e0869854327f5571613c686eca5da4480358`.

Estudar fronteiras entre API de rede, componentes e agregação de armazenamento.

## O que foi estudado

Repositório da nova linha, README e API de rede. A linha refinedstorage histórica 1.x/1.20.1 e abaixo é outro alvo; página web latest não é pin de source.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. Network oferece acesso a componentes e operações de adicionar/remover container, split e merge. A árvore separa módulos de API e implementação. O README apresenta armazenamento agregado, importação/exportação e autocrafting; o algoritmo e o formato persistido não foram inspecionados.

Evidência: [Network.java](https://github.com/refinedmods/refinedstorage2/blob/cb95e0869854327f5571613c686eca5da4480358/refinedstorage-network-api/src/main/java/com/refinedmods/refinedstorage/api/network/Network.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
