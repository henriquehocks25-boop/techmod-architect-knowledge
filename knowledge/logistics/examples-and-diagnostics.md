# Modelos abstratos e diagnóstico de redes

[RECOMMENDATION] Exemplos autorais; não reproduzem implementação nem identidade de mods.

## Pipe simples

Cabos passivos ligam extractor a sinks. Fonte agenda tentativas com budget, lista de destinos cacheada e round-robin. Primeiro produto útil antes de filtros complexos. Adequado para feature pequena; trânsito animado é projeção, não recurso criado no cliente.

## Conduit multicanal

Uma posição contém canais de item/fluido/energia com configuração por face. Conectividade pode compartilhar geometria, mas estado/budget/permissões são separados. UI precisa mostrar recurso/canal selecionado; impossibilidade de distinguir canais torna diagnóstico difícil.

## Node/card style

Nó tem slots de regras (cartões) que declaram extrair/inserir/manter estoque. Manager interpreta regras sem cada cartão reconstruir grafo. Cópia de configuração não copia owner nem saldo; upgrades limitam taxa e tentativas.

## Storage network

Grafo disponibiliza providers de estoque; terminal lê índice agregado. Index representa observação; transfer usa saldo autoritativo. Capacidade e prioridade pertencem ao provider, não à soma exibida.

## Request network

Pedido tem dono, ID, destino, quantidades, reservas e status. Scheduler resolve fornecedores e operações dependentes. Limites de profundidade, jobs e expansão evitam planejamento ilimitado.

## Inspector

Mostrar topologia/revisão, source/sinks, rota selecionada, filtro rejeitado, chunk indisponível, taxa pedida/aceita, attempts e tempo em backoff. Overlay com coordenada local e texto além da cor. Dados detalhados exigem permissão. Logs de rejeição são agregados, não por item/tick.

## Verificação

Reproduzir “nenhum item move” com extractor desligado, filtro vazio, output cheio e budget exaurido. Ferramenta deve explicar causas diferentes e permitir recuperar sem abrir código.

Referências: [roteamento](routing-and-policies.md), [UX](../ui-ux/machine-and-network-ux.md).
