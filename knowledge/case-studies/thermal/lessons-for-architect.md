# Thermal Series: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Separe slots de entrada, catalisador e saída com regras testáveis.
2. Augments devem alterar parâmetros declarados e limitados, com diagnóstico de efeito.
3. Loop de áudio acompanha atividade e distância, não cada item isolado.
4. Inspecione a base real antes de concluir como save, sync ou custo de tick funcionam.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Catalisador fica ausente, saída bloqueia e augment muda enquanto há trabalho. A proposta passa se regras de admissão, pausa, consumo e áudio são explícitas, sem consumo repetido ou loop preso após unload.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
