# Playbook — auditoria de performance

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [performance/PERFORMANCE_SMELLS.md](../knowledge/performance/PERFORMANCE_SMELLS.md)
- [performance/PERFORMANCE_BUDGET_GUIDE.md](../knowledge/performance/PERFORMANCE_BUDGET_GUIDE.md)
- [performance/SCALING_TESTS.md](../knowledge/performance/SCALING_TESTS.md)
- [profiling-debugging/profiling-and-diagnostics.md](../knowledge/profiling-debugging/profiling-and-diagnostics.md)
- [Template](../templates/PERFORMANCE_BUDGET.md)
- [Checklist](../checklists/performance.md)

## Passos

1. Definir cenário/baseline e budget.
2. Capturar idle, active e spike com profiler/counters.
3. Priorizar hot path por evidência e invariantes.
4. Criar tarefa focada e comparar antes/depois no mesmo cenário.
5. Registrar distribuição, memória, bytes e recovery latency.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

