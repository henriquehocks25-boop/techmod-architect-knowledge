# Checklist — testing

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Cases testam invariantes e falhas, não só happy path.
- [ ] Runner descobriu casos e resultados reais.
- [ ] Unit/GameTests/integração/smoke têm propósito.
- [ ] Save/unload/split/migration são exercitados.
- [ ] Bug tem reprodução mínima e regressão útil.
- [ ] Logs/versões/fixture constam na evidência.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/testing-quality/test-strategy.md).

