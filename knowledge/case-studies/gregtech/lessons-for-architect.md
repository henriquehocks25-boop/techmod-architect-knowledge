# GregTech / GTCEu Modern: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Defina contrato e ordenação de hooks, inclusive em falhas, espera e cancelamento.
2. Capacidades de receita devem indicar semântica do recurso, não apenas contagem de slots.
3. Faça uma matriz de combinações suportadas de modificadores antes de multiplicar tiers.
4. Dê ao jogador uma nova decisão por tier; não suponha que mais níveis garantem progressão melhor.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Uma máquina espera saída, recebe modificador e cancela o trabalho durante reload de receitas. A proposta passa se custo e saída não repetem, hooks mantêm ordem definida e a tarefa recupera o motivo de espera.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
