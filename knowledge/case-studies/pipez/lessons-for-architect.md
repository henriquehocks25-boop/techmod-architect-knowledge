# Pipez: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Filtro, velocidade e distribuição devem ter efeitos visíveis e limitados.
2. Nearest e round-robin são escolhas de jogador, não uma única política ideal.
3. Uma configuração alterada deve sujar o estado derivado correspondente.
4. Benchmarks precisam de versões, cenário e hardware; gráficos históricos não viram regra universal.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Destino mais próximo enche, upgrade sai e o chunk distante descarrega. A proposta passa se política preserva saldo, limite acompanha upgrade e não há carregamento oculto de chunk para tentar transferência.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
