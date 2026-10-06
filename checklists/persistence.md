# Checklist — persistence

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Schema version, IDs e dono único definidos.
- [ ] Cache/handles não são salvos como verdade.
- [ ] Operação comprometida/escrow/produto pendente persistem.
- [ ] Dado ausente versus corrompido tem tratamento distinto.
- [ ] Capacidade reduzida preserva excedente.
- [ ] Round-trip e load entre dimensões conferem saldo.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/persistence-migrations/save-schema.md).

