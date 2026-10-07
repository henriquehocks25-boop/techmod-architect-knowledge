# XNet: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Escolha conscientemente entre fluxo visual com recurso em trânsito e transferência direta.
2. Faça orçamento por controller e rede; cabo leve não elimina o custo total.
3. Políticas por canal precisam de diagnóstico e limites claros.
4. Evite tratar item, fluido e energia como transferências idênticas quando seus estados diferem.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Um controller gerencia muitos canais, destinos enchem e dois segmentos dividem a rede. A proposta passa se orçamento limita tentativas, há fairness entre canais e itens não desaparecem em operações parcialmente aceitas.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
