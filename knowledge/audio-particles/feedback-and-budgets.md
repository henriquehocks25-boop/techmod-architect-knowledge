# Áudio, partículas e feedback

[RECOMMENDATION] Som e partículas informam mudança/atividade; não são parte da autoridade de gameplay.

## Estados audíveis

Start toca na transição, loop existe enquanto operação apropriada está ativa, completion toca uma vez, warning reage a causa nova. Reactor alarm tem prioridade e duração limitada; repetição por tick vira ruído.

Agregue máquinas próximas para limitar vozes/efeitos. Volume, frequência e distância são configurações cliente; desligar áudio não desliga segurança. Loop termina ao remover bloco, sair de alcance ou trocar mundo, mesmo se pacote final não chegar.

## Partículas

Smoke, sparks e steam são sinais com orçamento por região/frame. Uma transferência real pode produzir poucas partículas representativas, não uma por unidade. Particle não contém recurso real e não devolve inventário ao desaparecer.

Failure cues têm texto/ícone além de som ou cor. Efeitos de perigo devem distinguir aviso de falha já ocorrida. Estado desconhecido após reconexão tem fallback silencioso até snapshot.

## Performance

Gerar efeitos apenas para observadores em alcance. Taxa reduzida à distância, culling e limite global. Não sincronizar posições aleatórias por partícula quando cliente pode gerar visual determinístico. Não criar backlog infinito de áudio/efeitos atrasados.

## Verificação

100 máquinas iniciando juntas; teleport; pause/resume rápido; unload; mute; troca de dimensão; falta de snapshot. Nenhum loop órfão ou completion repetida. Medir frame time, memória e pacote separado do servidor.

Referências: [rendering](../rendering/models-and-dynamic-rendering.md), [UX](../ui-ux/machine-and-network-ux.md). Assets e APIs de som/particle são [VERSION-SPECIFIC].
