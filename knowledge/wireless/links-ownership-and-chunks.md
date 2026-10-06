# Wireless: links, ownership e disponibilidade

[SECURITY] Frequência/canal é endereço; não é permissão. Um número conhecido não pode conceder acesso ao estoque de outro jogador.

## Modelos

Wireless energy/item/fluid pode ligar endpoints por catálogo de owner+canal. Network links unem disponibilidade lógica; decidir se mantêm grafos distintos ou fundem domínio. Alcance e dimensões são regras de gameplay e custos, não detalhes escondidos.

Ownership persistente com permissões para compartilhar/revogar. Integração com equipes depende de API e versão; falha de lookup deve negar conservadoramente quando acesso é privado.

## Chunk behavior

Destino descarregado fica indisponível, salvo política explícita de chunk ticket com limite/dono. Catálogo armazena coordenadas e identidade, não referência que revive chunk automaticamente. Remover endpoint invalida link; owner muda revisão e permissão.

## Integridade

Recursos em envio pertencem a escrow único. Link bidirecional não duplica budget nem faz loop import/export. Conversão energética por dimensão tem perdas definidas. Retry com ID lógico ajuda evitar repetição de confirmação; persistência atômica entre containers precisa desenho adicional.

## UX e performance

Exibir conectado, sem alcance, dimensão proibida, sem permissão ou chunk ausente. Registro de frequência não força scan de todos mundos. Cache por canal/owner/revisão; limite de links e tentativas por tick, com fair scheduling.

## Verificação

Dois owners usam mesmo canal; revogação durante envio; retorno ao mundo; cópia de item configurado; trocar dimensão; chunk unload; terminal remoto sem energy; loops fechados. Saldo permanece único e acesso negado não vaza inventário.

Referências: [transferências](../logistics/transfer-integrity.md), [save](../persistence-migrations/save-schema.md).
