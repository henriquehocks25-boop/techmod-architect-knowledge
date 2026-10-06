# Recursos, handlers e capabilities

[STABLE] Handler é contrato de operação sobre recurso. Capability descobre uma interface oferecida por objeto/lado. Descoberta não concede permissão de uso nem garante disponibilidade futura.

## Contrato de adapter

Identidade + quantidade + metadados relevantes; inserir/extrair dentro de limites; diferença entre capacidade, taxa e saldo; aceitação parcial; direção/face; ausência de endpoint; invalidação do handle.

Item, fluido e energia podem compartilhar invariantes de saldo, mas não precisam compartilhar uma única classe genérica enorme. Chemical depende de contrato próprio do mod base; não presumir que gás é sempre fluido comum.

## Segurança da operação

Uma consulta/simulação não reserva recursos. Se existir API transacional na versão alvo, usar suas regras verificadas. No contrato legado simular/executar, outra mudança pode alterar aceitação: limitar extração, guardar escrow próprio e devolver sobra com política explícita. Retorno de terceiro precisa ser validado, mas erro não autoriza fabricar recurso.

## Ciclo de vida

Cache de endpoint evita descoberta repetitiva; invalidar quando bloco/face/config/capability muda, chunk descarrega ou mundo encerra. Cache negativa tem prazo e invalidação para não esconder endpoint que passou a existir.

[VERSION-SPECIFIC] IItemHandler, IFluidHandler e IEnergyStorage são nomes associados a APIs de versões anteriores; não usar sem consulta da versão escolhida. Docs 26.1 reorganizam Inventories & Transfers e mencionam resource handlers. Isso é evidência documental, não API implementada nesta base.

## Verificação

Hopper, tubo de terceiro e GUI devem respeitar mesma regra de slots. Um output-only não aceita inserção externa. Rotacionar bloco invalida exposição; reduzir buffer não apaga saldo. Teste ausência da integração e rejeição parcial.

Fontes: [Containers 26.1](https://docs.neoforged.net/docs/inventories/container/), [capabilities](https://docs.neoforged.net/docs/inventories/capabilities/). Consulta: 2026-10-06.
