# Mekanism: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese autoral baseada no [recorte](overview.md), não implementação para copiar.

## Decisões transferíveis

1. Especifique consumo compartilhado e fairness entre processos antes de permitir paralelismo.
2. Faça diagnóstico de erro por linha, além de um estado agregado na GUI.
3. Enumere os invalidadores de endpoint: face, rotação, remoção, unload, substituição e configuração.
4. Guarde coordenadas e identidade de rede de modo distinto de referências vivas do mundo.

## Pergunta ao jogador

Explique a decisão como comportamento visível: “quando a fábrica encontra um bloqueio, o que deve continuar e o que deve esperar?”. O Architect resolve estrutura de dados, API e validação a partir da experiência escolhida. Aceite “não sei, me recomende” e ofereça uma opção limitada com motivo simples.

## Transformar em trabalho verificável

Três linhas disputam energia; uma saída enche; descarrega-se um chunk de conexão. A proposta passa se as linhas elegíveis progridem sem consumir pelo processo bloqueado, os recursos são conservados e endpoints descarregados deixam de ser usados.

A [TASK](../../../templates/TASK.md) deve citar contrato, invalidadores e cenário. [ADR](../../../templates/ADR.md) registra o motivo da escolha. Ver [catálogo de padrões neutros](../../architecture/pattern-catalog.md) para dar nome à solução sem atrelar seu código ao mod estudado.
