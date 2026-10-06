# Components, attachments e dados de mundo

[STABLE] Escolha persistência pela propriedade e ciclo do estado. Dado de uma posição, de uma pilha ou de uma rede global tem problemas diferentes.

## Matriz

| Local conceitual | Bom uso | Risco |
|---|---|---|
| Dados da máquina | Inventário e operação em andamento | Duplicar ao salvar também em manager |
| Dados do item | Configuração portátil e identidade da célula | Copiar pilha e duplicar identidade proprietária |
| Attachment | Acrescentar estado a objeto existente | Assumir sync/cópia sem configurar |
| Dados de mundo | Catálogo wireless e políticas compartilhadas | Carregar objeto de chunk ausente como se vivo |
| Cache transitório | Matching, handles e índices | Salvá-lo como verdade e reusar após reload |

[VERSION-SPECIFIC] Data components, attachments e SavedData têm codecs, registro e hooks específicos. Consultar docs da versão; não escolher com base em tutorial de versão anterior.

## Limites

Schema próprio versionado, defaults por campo e tratamento de IDs desconhecidos. Não reatribuir silenciosamente disco a novo owner. Diferencie dados novos sem campo de dados corrompidos; logs devem apontar caminho e ação de recuperação.

Dados de mundo podem ser por dimensão ou compartilhados; documente local proprietário. Ao copiar mundo, a política de identidade externa deve ser explícita. Cleanup não pode depender de cliente conectado.

## Verificação

Round-trip dos campos, esquema anterior, conteúdo removido e duas dimensões. Compare total de recursos antes/depois. Verifique se attachment específico copia, salva e sincroniza apenas como projetado.

Fontes: [attachments](https://docs.neoforged.net/docs/datastorage/attachments/), [SavedData](https://docs.neoforged.net/docs/datastorage/saveddata/), [components](https://docs.neoforged.net/docs/items/datacomponents/). Consulta: 2026-10-06.
