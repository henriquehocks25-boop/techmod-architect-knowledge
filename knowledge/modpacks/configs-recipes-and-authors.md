# Modpacks, configurações e autores de packs

[RECOMMENDATION] Permitir mudança de economia sem obrigar fork do código, preservando integridade de dados.

## Superfícies

Recipes substituíveis por ID; tags de equivalência; configs de taxas/capacidades; datapacks; scripts externos se integração opcional validada. Documentar quais mudanças aplicam em reload, reinício do mundo ou jogo.

[VERSION-SPECIFIC] Client/common/server config possuem semântica do loader alvo; common não é automaticamente servidor sincronizado. Defaults do pack e config individual precisam de precedência definida.

## Desabilitar conteúdo

Retirar acesso via recipes/loot costuma preservar identidade de saves. Remover registro pode invalidar itens e causar desync. Se conteúdo precisa ser realmente removido, criar migration e nota de incompatibilidade.

Recipe overrides podem gerar produção circular infinita ou caminho impossível. Ofereça diagnóstico de conflito por ID/prioridade; scripts arbitrários exigem orçamento/limites quando usados no tick.

## Contrato com autores

Documente tags suportadas, units, ranges, IDs, exemplos originais e custos esperados. Configs extremas devem ser validadas: duração zero, custo negativo, parallel gigantesco, nuclear sem destino de resíduos. Não aceitar “pack author sabe o que faz” como argumento para overflow.

## Verificação

Pack pequeno com recipes alternativas; viewer reflete override; servidor e cliente recebem custo correto; desligar conteúdo em mundo existente; reload repetido; mods de proteção/performance presentes. Registrar versões e configurações exatas para repro.

Referências: [recipes](../recipes-processing/recipe-models.md), [config](../neoforge/networking-menus-config.md), [MI estudo](../case-studies/modern-industrialization/overview.md).
