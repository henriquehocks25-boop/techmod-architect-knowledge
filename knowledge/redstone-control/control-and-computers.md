# Redstone, sensores e computadores

[RECOMMENDATION] Controle externo deve chamar os mesmos contratos usados pela GUI, preservando permissão e orçamento.

## Modos

Ignore; operar com sinal; operar sem sinal; pulso; latch configurável. Pulse control inicia uma operação por borda definida, não a cada tick com sinal alto. Pausa mantém processo segundo spec; comparator output pode indicar ocupação, progresso ou fault com modo explícito.

Sensors expõem valores estáveis e documentação de unidades. Machine state output distingue pausado/bloqueado. Evitar loop de neighbor updates: emitir mudança só quando valor externo muda.

## Integração opcional

Computer API oferece consultar estado, configurar e solicitar operação. Expor eventos para conclusão/falha reduz polling. Commands de diagnóstico verificam nível de acesso e escopo de mundo. Limitar chamadas caras e tamanho de resposta.

[VERSION-SPECIFIC] CC:Tweaked/ComputerCraft e bibliotecas equivalentes têm API/loader/versão próprios; não hard dependency por padrão. Adapter isolado evita classe ausente quando integração não instalada.

## Segurança

Computador não recebe direito de owner por estar conectado. Permissão para ler pode ser diferente de alterar/retirar. Endpoints remotos e scripts devem ter limites; uma função pública não executa scan enorme síncrono sem budget.

## Verificação

Sinal contínuo versus pulsos; redstone durante output bloqueado; script chama 1000 vezes; perda de permissão; computador ausente; comparator sem alteração não gera tempestade. Mostrar modo atual para jogador.

Fontes: [contratos](../compatibility/adapters-and-contracts.md), [multiplayer](../multiplayer/authority-and-concurrency.md).
