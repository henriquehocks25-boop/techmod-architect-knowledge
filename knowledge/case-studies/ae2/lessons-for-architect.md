# Applied Energistics 2: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Separe consulta aproximada da operação autoritativa de extração.
2. Declare se o índice de busca é snapshot e qual atraso é tolerável.
3. Diferencie dispositivo, porta, nó e dono do saldo.
4. Expose serviços por contrato, mantendo caches e implementações fora da API pública.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Dois terminais observam um snapshot e tentam retirar o último item; um provedor se desconecta. A proposta passa se somente um retira, o snapshot converge e saldo desligado não continua disponível para novos trabalhos.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
