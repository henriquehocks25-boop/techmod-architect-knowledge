# Checklist — networking

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Payload envia intenção, não saldo/custo autoritativo.
- [ ] Codec limita listas/strings antes de alocação extrema.
- [ ] Menu, owner, disponibilidade e revisão validados.
- [ ] Mutação executa no contexto servidor apropriado.
- [ ] Snapshots iniciais e deltas preservam reconciliação.
- [ ] Subscriptions limpam e dedicated server não carrega client.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/neoforge/networking-menus-config.md).

