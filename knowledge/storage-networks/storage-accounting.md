# Storage networks: contabilidade e acesso

[STABLE] Terminal é projeção de estoque. Quantidade exibida não autoriza retirada sem consultar saldo e permissão atuais.

## Modelo

Physical storage possui itens em containers; logical storage agrega providers. Cells/disks são abstrações de capacidade, tipos e partição. Duas portas do mesmo provider não somam duas vezes o mesmo saldo. Disco portátil com ID precisa política contra clone de identidade.

Capacity accounting pode ser por quantidade, tipos ou bytes abstratos; explique ao jogador. Componentes relevantes distinguem chaves. Huge item counts exigem tipo numérico e serialização compatíveis, com overflow verificado; GUI pode abreviar sem alterar saldo real.

## Prioridades

Inserção favorece providers conforme política; retirada pode favorecer cleanup dos menos prioritários. Partition define o que cabe, não cria estoque. External storage também obedece aceitação parcial e pode mudar sem evento: invalidar por observação ou polling com limite.

Disconnected device fica indisponível; não esvaziar ou copiar seus dados para manter número da tela. Índice agrega observação com revisão. Busca por texto deve paginar, limitar results e validar consulta; não enviar todo catálogo para cada keypress.

## Segurança

Owner e permissões definem visualizar, retirar, inserir, alterar regras e criar jobs. Reconexão wireless revalida acesso. Estado público do terminal não inclui nomes/dados secretos de terceiros. Dois jogadores retirando último item têm resultado serializado servidor; apenas um recebe.

## Verificação

Remover disco cheio, conectar duas faces no mesmo baú, alterar componente de chave, atingir limite numérico, perder energia/chunk e restart. Total real confere com índice após reconciliação, sem confundir cache atrasado com duplicação.

Referências: [AE2](../case-studies/ae2/architecture.md), [Refined Storage](../case-studies/refined-storage/architecture.md), [integridade](../logistics/transfer-integrity.md).
