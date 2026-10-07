# Refined Storage: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Diferencie identidade da rede da identidade de um disco/provedor.
2. Documente o que migra, cancela ou pausa ao dividir uma rede.
3. API em módulo próprio ajuda limitar dependências de addons.
4. Índice de terminal não deve ser a fonte única de saldos persistentes.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Uma ponte é removida durante um pedido e depois recolocada. A proposta passa se cada provedor pertence a uma rede válida, o pedido possui política de recuperação e nenhuma unidade é duplicada ao merge.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
