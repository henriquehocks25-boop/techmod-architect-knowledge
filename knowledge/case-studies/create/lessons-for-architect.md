# Create: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Defina qual propriedade limita a rede: potência, stress ou velocidade; não use nomes intercambiáveis.
2. Uma explicação visual pode ensinar direção, razão de transmissão e gargalo sem texto extenso.
3. Separe cálculo de estado da frequência de animação no cliente.
4. Compare referência viva com identidade de posição antes de aceitar um membro antigo.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Uma fonte para, dois eixos mudam de velocidade e parte da rede descarrega. A proposta passa se há estado coerente de falta de capacidade, ausência de referência obsoleta e animação que reflete o resultado servidor sem recalcular a rede por frame.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
