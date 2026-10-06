# Objetos, registros e recursos

[STABLE] Um tipo de bloco ou item registrado descreve comportamento compartilhado; uma ocorrência no mundo tem estado próprio. Não guardar inventário de uma máquina no objeto de tipo compartilhado.

## Escolher onde o estado vive

| Conceito | Responsabilidade | Evitar |
|---|---|---|
| Block / Item | Tipo de conteúdo e comportamento | Estado variável por posição em singleton |
| Block state | Poucas propriedades visíveis, como orientação | Produto cartesiano enorme de propriedades |
| BlockEntity | Dados da posição: inventário, processo, configuração | Transformá-la em todo o sistema industrial |
| Entity | Objeto com identidade e ciclo de vida no mundo | Usar entidade por item só para transporte instantâneo |
| Level/world | Contexto de dimensão, blocos e execução | Referência global que sobrevive ao encerramento |
| Registry | Identidades e descoberta de tipos | ID numérico persistido como identidade estável |

[VERSION-SPECIFIC] Os nomes Block, Item, BlockEntity, Entity e Level são vocabulário da API Minecraft observado nas docs NeoForge; construtores, heranças e métodos precisam da versão alvo.

## Conteúdo declarativo

Identidade de recurso é namespace + caminho; distingue conteúdo de autores diferentes. [VERSION-SPECIFIC] ResourceLocation é nome histórico dessa abstração; docs 26.1 consultadas usam Identifier. Nunca misturar nomes de versões em uma tarefa.

Tags agrupam conteúdo por significado: “minério de cobre”, não lista fixa de IDs. Data packs alteram dados de gameplay; resource packs alteram apresentação. Recursos devem ter IDs estáveis, erros contextualizados e reload com invalidação de caches.

Recipes, loot e advancements compõem transformação, drops e orientação de progresso. Commands permitem operação e diagnóstico; regras de jogo e configs expressam políticas, não substituem autorização. Attributes descrevem propriedades numéricas de entidades; dimensions e biomes limitam contexto de geração.

## Verificação

Coloque duas máquinas do mesmo tipo: seus dados não podem se misturar. Remova um item de uma tag e faça reload: matching muda sem resultado antigo. Renomear um ID precisa de migração, não apenas novo registro.

Fontes: [registros](https://docs.neoforged.net/docs/concepts/registries/), [BlockEntities 1.21.1](https://docs.neoforged.net/docs/1.21.1/blockentities/). Consulta: 2026-10-06. Veja [save](../persistence-migrations/save-schema.md).
