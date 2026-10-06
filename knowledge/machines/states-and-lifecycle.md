# Estados, pausa e conclusão

[STABLE] Progresso é dado de processo; estado representa o que pode acontecer agora. Um boolean “active” não diferencia sem energia de saída cheia.

## Máquina de estados sugerida

| Estado | Condição | Progresso/custo |
|---|---|---|
| IDLE | Nenhuma operação comprometida | Não consome custo de processamento |
| RUNNING | Inputs comprometidos, requisitos satisfeitos | Avança e paga o que a spec determina |
| BLOCKED_OUTPUT | Resultado não cabe | Preserva operação; não repete consumo |
| PAUSED_CONTROL | Redstone/usuário interrompe | Preserva progresso conforme design |
| PAUSED_RESOURCE | Falta energia/fluido/calor | Espera sem concluir indevidamente |
| FAULT | Dado/estrutura/requisito inválido | Recuperação explícita |
| COMPLETED_PENDING | Produto pronto, entrega pendente | Entrega idempotente e persistente |

Estados podem ser derivados; somente persistir campos necessários para reconstrução. Causa principal é previsível e priorizada; causas secundárias ajudam diagnóstico.

## Transições difíceis

Troca de receita não pode reaproveitar 99% de progresso de receita barata para cara. Recipe lock seleciona família/ID, mas deve tolerar recipe ausente no reload. Ao remover entrada não comprometida, reavaliar; input em escrow não fica em slot público.

Startup cost pago uma vez, separado de custo por tick. Cancelar e reiniciar não devolve energia já dissipada a menos que design permita explicitamente. Paralelismo mantém estado por operação, não só uma barra compartilhada.

Ao recarregar mundo, resultado já sorteado/comprometido deve ser o mesmo. Persistir resultado ou mecanismo determinístico suficiente; sortear novamente em cada tentativa permite exploração.

## Diagnóstico

“Sem energia: precisa 40, tem 12” é melhor que “erro”. Estado enviado para animação não permite ao cliente concluir. Comparator pode indicar atividade, capacidade ou bloqueio, com modo configurado.

## Verificação

Matriz estado×evento: redstone, upgrade, input, output, reload, unload, remoção e falha de dados. Em cada célula defina próximo estado, saldo e dirty/sync esperados. Veja [teste de integridade](../testing-quality/test-strategy.md).

Fontes de lifecycle: [Minecraft/NeoForge](../fundamentals/lifecycle-ticks-chunks.md). Estados e protocolos são recomendações.
