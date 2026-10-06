# Política de versão e evidência

[RECOMMENDATION] Resolver versões é responsabilidade técnica do Architect. Não perguntar ao usuário qual assinatura Java prefere.

## Matriz obrigatória

Antes de código/API: Minecraft exato; loader e build; Java/toolchain; Gradle Wrapper; ModDevGradle; mappings se usados; versões de mods base e bibliotecas. Para addon, compatibilidade do mod base vem antes de escolher Minecraft.

Conferir docs da versão e fonte oficial correspondente. Não usar o seletor padrão como “latest”. Em 2026-10-06, páginas padrão consultadas mostraram 26.1; páginas explícitas 1.21.1 mostraram 1.21–1.21.1. Os instaladores encontrados no diretório do usuário não estabelecem alvo para esta biblioteca.

## Níveis de confiança

- Documentado: página oficial descreve símbolo ou comportamento; não foi compilado aqui.
- Inspecionado: código em ref imutável foi lido; registrar arquivo e trecho.
- Verificado: exemplo original compilou e cenário executou na combinação registrada.
- Desconhecido: manter [OPEN-QUESTION], sem preencher lacuna com lembrança.

## Mudanças observadas

[VERSION-SPECIFIC] Docs 1.21.1 de BlockEntities e menus não são intercambiáveis com docs 26.1. Docs 26.1 de registries usam Identifier; referências anteriores usam ResourceLocation. Docs 26.1 de Containers indicam ItemStacksResourceHandler como alternativa preferida; não recomendar o antigo handler como universal.

O registro em DeferredRegister / RegisterEvent, RecipeType / RecipeSerializer, SavedData, nomes de payload/eventos, capacidades e tarefas Gradle são [VERSION-SPECIFIC], mesmo quando conceitos permanecem úteis.

## Entrega

Sem alvo resolvido, entregue arquitetura conceitual e lista de verificações. Não prometa assinatura ou dependência. Com alvo, grave notas em [versioned](../../versioned/README.md); uma mudança de loader pede revalidação completa das fronteiras.

Fontes: [docs](https://docs.neoforged.net/), [registros 26.1](https://docs.neoforged.net/docs/concepts/registries/), [Containers 26.1](https://docs.neoforged.net/docs/inventories/container/). Consulta: 2026-10-06.
