# Ender IO: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Distinga membros conectados, carregados, habilitados e agendados.
2. Centralize invalidação e descreva se uma consulta pode reconstruir dados.
3. Canal deve fazer parte da chave de consulta e das permissões de destino.
4. Disponibilidade da API e estabilidade têm versão; Experimental merece isolamento de adapter.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Mude o canal de um endpoint enquanto metade da rede descarrega; consulte destinos duas vezes. A proposta passa se só destinos do canal atual aparecem, cache é reconstruído no momento correto e endpoints inativos não geram trabalho inútil.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
