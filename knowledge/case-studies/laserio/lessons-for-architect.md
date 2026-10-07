# LaserIO: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Modele cartão como configuração validada, não como objeto que carrega saldo oculto.
2. Crie adapters separados para cada tipo de recurso; identidade química não é automaticamente identidade de fluido.
3. Round-robin precisa preservar avanço e evitar punir sempre o último destino.
4. Mostre recurso, lado, direção e condição no mesmo diagnóstico.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Um cartão tenta três destinos, o segundo aceita parcialmente e o terceiro fica indisponível; em seguida o nó gira. A proposta passa se sobra tem dono, fairness continua e a política por lado não passa a extrair do inventário errado.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
