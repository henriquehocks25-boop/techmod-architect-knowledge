# Checklist — release

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] JAR do checkout limpo e hash conferido.
- [ ] Metadata e deps corretos, sem segredo/dev artifact.
- [ ] Dedicated server com JAR final inicia.
- [ ] Fixture antiga e notas de migration disponíveis.
- [ ] Changelog, breaking changes e problemas conhecidos claros.
- [ ] Tag/artefato/canal e rollback correspondem à versão.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/release-packaging/release-process.md).

