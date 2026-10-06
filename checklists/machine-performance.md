# Checklist — machine-performance

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Idle evita matching e sync repetitivo.
- [ ] Wake-up por input/energia/config funciona; polling de terceiros é limitado.
- [ ] Parallel possui budget e fairness.
- [ ] Cache positivo/negativo possui invalidadores.
- [ ] Pacotes são projeções por observador.
- [ ] Carga active/idle medida com p95/p99.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/performance/PERFORMANCE_BUDGET_GUIDE.md).

