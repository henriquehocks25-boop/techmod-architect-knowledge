# XNet: visão e recorte

[CASE-STUDY] Consulta: 2026-10-06. Ramo 1.16 (ramo padrão histórico consultado); commit `0ca5b08e451f4c9adce2ebafcb9767171a9ec67f`.

Estudar controle centralizado de canais e separação entre cabos de topologia e trabalho de transferência.

## O que foi estudado

Documentação do autor e controller do ramo histórico. Não representa implementação atual de NeoForge nem benchmark reproduzido.

[VERSION-SPECIFIC] Observações abaixo estão limitadas ao commit e às fontes do estudo. A documentação do autor atribui o trabalho ao controller e descreve cabos sem block entities. Itens/fluidos são transferidos sem estoque em trânsito, com transferência dependente de espaço; energia usa buffers. O controller 1.16 consultado mantém informação de canais e pertence a execução periódica.

Evidência: [TileEntityController.java](https://github.com/McJtyMods/XNet/blob/0ca5b08e451f4c9adce2ebafcb9767171a9ec67f/src/main/java/mcjty/xnet/modules/controller/blocks/TileEntityController.java).

## Como usar

Leia [lições](lessons-for-architect.md) para decisões originais e [limites](what-not-to-generalize.md) antes de transportar qualquer conclusão. [Fontes](sources.md) registram termos e rastreabilidade. Não instalar o mod ou adicionar dependência apenas porque oferece um exemplo interessante.

Um recorte de código permite observar estruturas e contratos; não atesta build, testes, estabilidade, segurança ou desempenho. A biblioteca não executou esses projetos.
