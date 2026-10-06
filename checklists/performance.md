# Checklist — performance

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Cenário e baseline documentados.
- [ ] Tick work, resource throughput e latency separados.
- [ ] Cache/rebuild têm budget/invalidação.
- [ ] Memória estabiliza após world/chunk churn.
- [ ] Tráfego e frame time medidos separados.
- [ ] Resultado mantém conservação e atendimento eventual.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/performance/PERFORMANCE_BUDGET_GUIDE.md).

