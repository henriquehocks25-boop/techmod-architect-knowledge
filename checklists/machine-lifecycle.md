# Checklist — machine-lifecycle

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Defaults, load, activate, tick, unload, remoção e save têm dono explícito.
- [ ] Carga revalida recipe/topologia antes de operar.
- [ ] Unload limpa handles/subscriptions sem apagar progresso.
- [ ] Remoção decide destino de inputs, escrow, produto e upgrades.
- [ ] Encerramento de mundo libera manager/tickets.
- [ ] Restart em cada fase comprometida conserva saldos.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/machines/machine-core.md).

