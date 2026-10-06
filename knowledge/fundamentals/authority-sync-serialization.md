# Autoridade, sincronização e serialização

[STABLE] Estado salvo, estado autoritativo em memória e estado visível ao cliente são representações diferentes. Uma mudança pode exigir dirty de save sem exigir pacote, ou pacote visual sem novo save.

## Fluxo

Cliente pede ação → servidor valida contexto → domínio altera estado → save fica dirty → observadores recebem projeção.
O cliente envia “alterar face para saída”, não “meu inventário agora contém 64 itens”. Menu contém contrato de interação; screen desenha e coleta intenção. Inventários e recipes continuam sob autoridade servidor.

## Representações

Codec converte dados em estrutura tipada e valida forma; validação de negócio continua necessária. Serialização não torna referência viva transferível. Persistir IDs, valores, owner e versões; reconstruir handles e caches.

Components descrevem dados associados a valores como pilhas de item; attachments adicionam dados a objetos suportados. Não assumir serialização automática, sincronização automática ou cópia correta na morte/clone. Escolha pelo dono e ciclo do dado, não pelo nome da API.

## Sync

Snapshot inicial ao entrar em alcance ou abrir GUI. Deltas posteriores só para campos observados e alterados. Mudanças de estado executam imediatamente no servidor; animação interpola no cliente. Campos de alta precisão podem ser quantizados para barra visual, sem perder precisão de gameplay.

Receitas e tags mudam em reload. Cache inclui versão do conjunto de dados; operação em andamento precisa de política: preservar especificação comprometida ou cancelar com devolução definida.

## Falhas

Dois jogadores veem versões diferentes; action antiga tenta sobrescrever configuração nova. Use revisão e rejeição/reconciliação quando edição concorrente importar. Desconexão não deve executar ação pela segunda vez; retry não implica repetir produção.

## Verificação

Abra duas telas, altere uma configuração e retire acesso. Reenvie pedido antigo. Reinicie durante processo e compare projeção com saldo real. Diferencie teste de encode/decode de teste de domínio.

Fontes: [payloads](https://docs.neoforged.net/docs/networking/payload/), [components](https://docs.neoforged.net/docs/items/datacomponents/). Métodos concretos são [VERSION-SPECIFIC].
