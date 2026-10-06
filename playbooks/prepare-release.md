# Playbook — release

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [release-packaging/release-process.md](../knowledge/release-packaging/release-process.md)
- [security-maintenance/dependencies-and-licenses.md](../knowledge/security-maintenance/dependencies-and-licenses.md)
- [testing-quality/test-strategy.md](../knowledge/testing-quality/test-strategy.md)
- [Template](../templates/RELEASE_CHECKLIST.md)
- [Checklist](../checklists/release.md)

## Passos

1. Congelar matriz suportada e checkout validado.
2. Build/datagen/test/smoke confirmados no projeto.
3. Verificar JAR/hash/metadata e dedicado.
4. Changelog, migration, problemas conhecidos e suporte.
5. Tag e publicar artefato quando autorizado; registrar resultado.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

