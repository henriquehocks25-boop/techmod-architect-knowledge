# Multiplayer e dedicated server

[SECURITY] Validação servidor existe mesmo quando cliente normal nunca envia valor inválido.

## Concorrência lógica

Duas GUIs, hopper e tubo podem alterar mesma máquina dentro de sequência de eventos. Thread principal não elimina problema de saldo antigo, callback reentrante ou revisão de configuração. Operações revalidam estado e consomem uma vez; leituras de GUI podem ser projeções atrasadas.

Client prediction só quando melhora experiência e tem reconciliação segura; processamento industrial normalmente pode esperar confirmação. Pedido identifica menu/alvo e intenção, nunca saldo novo fornecido pelo cliente.

## Disponibilidade

Chunk unload invalida handle e menu de acesso se necessário. Latência pode entregar ação para alvo removido; rejeitar sem carregar chunk. Owner/permissão são verificados no momento da ação, não apenas ao abrir tela.

## Physical sides

Servidor integrado testa autoridade, mas pode esconder import de classe gráfica porque ela existe no processo. Dedicated server deve iniciar sem client packages no caminho de bootstrap. Biblioteca opcional ausente e JAR release são parte do smoke.

## Escala

Subscriptions por observador com cleanup. Server envia dados apenas aos interessados; 50 jogadores com monitor não recebem grafo inteiro a cada tick. Config servidor prevalece em balanceamento. Limitar ações por jogador/rede e grandes consultas.

## Verificação

Dois usuários pegam último item; spam de enum inválido; owner revoga acesso; destino quebra; reconecta; muda dimensão. Compare saldo servidor com cliente após snapshot. Teste headless usando JAR distribuível e lista de mods alvo.

Referências: [payloads](../neoforge/networking-menus-config.md), [security](../security-maintenance/packet-and-resource-security.md).
