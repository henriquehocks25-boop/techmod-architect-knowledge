# Payloads, menus e configuração

[STABLE] Uma tela é interface para estado servidor. Payload transporta intenção/observação. Config tem escopo e momento de aplicação; nenhum destes substitui validação de domínio.

## Projeto

Separe pedidos cliente→servidor de snapshots servidor→cliente. Defina comprimento, enum permitido, limites numéricos, contexto de menu, owner e revisão. Entidade removida ou posição descarregada deve rejeitar sem carregar chunk. Mutação de mundo ocorre no contexto de execução apropriado.

Menu mantém contrato de slots e interação, inclusive transferência rápida; screen usa projeção cliente. Nunca disponibilizar receita secreta, dados de owner ou inventário inteiro apenas porque é mais fácil serializar save.

## Configs

[VERSION-SPECIFIC] Docs 26.1 distinguem CLIENT, COMMON e SERVER, além de STARTUP, com sincronização e localização próprias. COMMON não implica sync; SERVER tem semântica de servidor/mundo. Nomes, caminhos e eventos precisam da versão alvo.

Balanceamento é servidor; estética é cliente. Opção que remove registro pode quebrar save/desalinhar registros entre lados. Prefira desabilitar obtenção/recipes mantendo identidade, quando possível. Config reload invalida custos/cache; operação já iniciada tem política explícita.

[VERSION-SPECIFIC] Nomes de eventos de payload e codecs mudam: validar registro de handlers client-only e common antes de copiar exemplo. Não incluir limites máximos de pacote como orçamento aceitável.

## Testes

Dedicated server sem classes gráficas; duas telas; desconexão no pedido; enum inválido; número negativo; spam limitado; mudar config durante operação. Medir bytes por observador e fechar subscriptions ao sair.

Fontes: [payloads 26.1](https://docs.neoforged.net/docs/networking/payload/), [menus 1.21.1](https://docs.neoforged.net/docs/1.21.1/gui/menus/), [configs 26.1](https://docs.neoforged.net/docs/misc/config/). Consulta: 2026-10-06.
