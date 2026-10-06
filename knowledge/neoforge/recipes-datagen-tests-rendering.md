# Recipes, datagen, testes e client registration

[STABLE] Dados declaram conteúdo; runtime interpreta e executa contratos. Datagen reduz inconsistência, mas saída gerada ainda precisa de validação.

## Conteúdo

Recipe type separa família de operação; serializer/codec lê formato e valida campos. Tags expressam equivalência; loot regula drops sem repetir inventário comprometido; models e blockstates descrevem apresentação. Providers de dados/modelos trabalham a partir de definições comuns para evitar IDs divergentes.

[VERSION-SPECIFIC] RecipeType, RecipeSerializer, assinaturas de codecs e providers não são contratos permanentes. Recipe viewer precisa adapter próprio da versão e só apresenta conteúdo, não decide execução.

## Testes e fronteiras

Teste de lógica pura valida saldo e estados. GameTests cobrem mundo/posições e ciclo de vida. Integração verifica outros mods. Cliente valida apresentação; dedicated server valida isolamento.

[VERSION-SPECIFIC] GameTests possuem runner/registro próprios da versão. Confirmar que testes foram descobertos: task verde com zero testes não é cobertura. Nomes runClient, runServer e datagen runs dependem da configuração do projeto/ModDevGradle.

Registro de renderer e screens é client-only. Rendering hooks não devem chamar mutação de inventário nem consultar chunk servidor. Access transformers/mixins só com necessidade demonstrada, alvo exato, alternativa pública e teste de upgrade.

## Verificação

Gerar duas vezes e comparar diff; reload com receita inválida; missing model; drop de máquina com operação em escrow; servidor inicia sem display/client class. CI publica logs de testes e acusa ausência de casos.

Fontes: [recipes](https://docs.neoforged.net/docs/resources/server/recipes/), [GameTests](https://docs.neoforged.net/docs/misc/gametest/), [rendering](https://docs.neoforged.net/docs/rendering/feature/), [ModDevGradle](https://github.com/neoforged/ModDevGradle). Consulta: 2026-10-06.
