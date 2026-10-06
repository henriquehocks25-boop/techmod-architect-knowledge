# Checklist — logistics

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Sources/sinks e faces duplicadas não contam container duas vezes.
- [ ] Topologia/config têm revisões e invalidadores.
- [ ] Budget limita tentativas e transferências; backlog é finito.
- [ ] Rejeição parcial guarda/devolve sobra sem perda.
- [ ] Split/merge e chunk boundary foram exercitados.
- [ ] Inspector explica nenhum sink, filtro e indisponibilidade.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/logistics/transfer-integrity.md).

