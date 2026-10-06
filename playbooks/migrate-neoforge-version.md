# Playbook — migração de versão

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [neoforge/version-policy.md](../knowledge/neoforge/version-policy.md)
- [persistence-migrations/migration-and-recovery.md](../knowledge/persistence-migrations/migration-and-recovery.md)
- [compatibility/adapters-and-contracts.md](../knowledge/compatibility/adapters-and-contracts.md)
- [Template](../templates/MIGRATION_PLAN.md)
- [Checklist](../checklists/migration.md)

## Passos

1. Resolver matriz origem/destino e fontes oficiais.
2. Inventariar registro, handler, recipe, network, render e save.
3. Backup/fixtures e notas de schema/IDs.
4. Migrar por fronteiras e validar cliente/dedicado/reload.
5. Testar mundo anterior em cópia e publicar notas de downgrade.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

