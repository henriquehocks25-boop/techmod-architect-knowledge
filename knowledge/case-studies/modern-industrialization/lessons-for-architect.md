# Modern Industrialization: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Faça schema e layout de GUI concordarem sobre recursos aceitos.
2. Separe condição de admissão de condição necessária a cada tick.
3. Se uma receita depende do ambiente, documente como e quando a condição é revalidada.
4. Integração usa pacote público e alvo fixado; Internal não vira API de addon por conveniência.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Receita condicionada a dimensão e bloco próximo entra em processo; o bloco é removido e os dados recarregados. A proposta passa se a política de pausa/cancelamento é explícita e o cache não continua autorizando trabalho inválido.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
