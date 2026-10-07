# Integrated Dynamics: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Diferencie falso, desconhecido, indisponível e erro na avaliação.
2. Uma expressão reativa precisa de dependências ou frequência de atualização explícitas.
3. Limite custo de avaliação e evite recursão ilimitada em circuitos.
4. Eventos de unload invalidam referências; revalidar não deve repetir efeitos já confirmados.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Sensor depende de endpoint que descarrega; duas regras formam ciclo e uma chamada falha. A proposta passa se há estado de indisponibilidade, limite de trabalho e diagnóstico do ciclo, sem bloquear tick nem repetir ação externa.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
