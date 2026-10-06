# Checklist — migration

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Origem/destino e fixtures são exatos.
- [ ] Backup e teste em cópia estão disponíveis.
- [ ] Renames/removals e defaults documentados.
- [ ] Reexecução de migration é idempotente.
- [ ] Downgrade incompatível e rollback não são omitidos.
- [ ] Config antiga/recurso desconhecido preservado ou recuperável.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/persistence-migrations/migration-and-recovery.md).

