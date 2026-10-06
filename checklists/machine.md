# Checklist — machine

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Processo compromete inputs/outputs uma vez; resultado de chance não rerola em retry.
- [ ] Falta de energia, redstone e output bloqueado têm estados/causas distintos.
- [ ] Remoção e save preservam escrow e não duplicam drop.
- [ ] Slot/face tem mesma regra para GUI, hopper e tubos.
- [ ] Config, upgrade e reload invalidam cache correto.
- [ ] Dedicated server e duas GUIs foram exercitados.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/machines/machine-core.md).

