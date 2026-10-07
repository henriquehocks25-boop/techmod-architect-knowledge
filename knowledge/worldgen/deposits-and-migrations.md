# Worldgen, depósitos e migrações

[RECOMMENDATION] Geração distribui oportunidades e escassez. Separar conteúdo de mundo novo da política de modificar mundo já explorado.

## Conteúdo

Ore/vein define distribuição local; depósito pode representar reserva finita; dimensão especial concentra progressão; estrutura combina recompensa e contexto. Rarity, tamanho, altura e biome constraints devem ser dados editáveis quando suportados na versão.

Biomes e dimensions opcionais podem faltar. Sem fallback, recipe/progression deve explicar condição indisponível. Tags agrupam biomes/rochas permitidos, mas reload não recria chunks existentes.

## Balance

Quantidades por chunk e variação por região determinam exploração e fábrica. Veio grande raro incentiva transporte; minério comum diluído incentiva quarry. Depósito virtual reduz custo de scan e mudança de paisagem, mas precisa feedback de localização/reserva.

Não correlacionar seeds diferentes como comparação de balance. Use amostra de região e quantis; observar “encontrei um veio” não demonstra distribuição.

## Migração

IDs estáveis e formatos versionados. Mundo atualizado mantém chunks antigos; conteúdo novo aparece em chunks gerados depois conforme jogo/loader. Retrogen só com política explícita, backup, regiões alteradas marcadas e teste em cópia; evitar sobrescrever construções/claims.

Data-driven worldgen ainda tem schemas/APIs [VERSION-SPECIFIC]. Não afirmar que trocar JSON é seguro em qualquer versão. Conteúdo removido exige fallback/migração, não corrupção silenciosa.

## Verificação

Seeds fixas, bordas de chunk, configs mínimo/máximo, dimensão ausente, estruturas próximas e mundo antigo. Teste restart durante migração; idempotência evita aplicar geração duas vezes.

Fonte inicial: [NeoForge worldgen](https://docs.neoforged.net/docs/worldgen/biomemodifier/). API de projeto deve seguir [política](../neoforge/version-policy.md).
