# Checklist — worldgen

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Seed/região/config fixas para verificar distribuição.
- [ ] Tags/biomes/dimensões ausentes têm política.
- [ ] Dados usam IDs estáveis e schema da versão.
- [ ] Chunks antigos versus novos estão documentados.
- [ ] Retrogen não sobrescreve builds/claims e exige cópia.
- [ ] Migration idempotente e mundo anterior foram exercitados.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/worldgen/deposits-and-migrations.md).

