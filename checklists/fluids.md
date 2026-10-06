# Checklist — fluids

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Identidade/componentes e mistura são contratos explícitos.
- [ ] Tanque cheio/incompatível rejeita sem consumir origem.
- [ ] Conversão guarda carry ou perde explicitamente, sem ganhar.
- [ ] Recipe multi-recurso compromete todos outputs.
- [ ] Válvula/bomba/filtro respeitam direção e taxa.
- [ ] Redução de capacity e load não apagam saldo.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/fluids-chemicals/containers-and-chains.md).

