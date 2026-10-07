# Integrated Tunnels: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Defina fronteira entre expressão, seleção de endpoint e commit.
2. Agrupar recursos por interface só funciona quando seus contratos de operação continuam explícitos.
3. Uma integração obrigatória deve aparecer na matriz de dependências.
4. Transforme o requisito 'sem dupe' em invariantes de teste de aceitação parcial e cancelamento.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Expressão ordena transferir dez unidades, o destino aceita três e depois muda a condição. A proposta passa se somente três chegam, a sobra mantém dono e a próxima execução reavalia a condição sem consumir duas vezes.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
