# Playbook — falha de build

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [profiling-debugging/build-crash-triage.md](../knowledge/profiling-debugging/build-crash-triage.md)
- [java-gradle/build-and-dependencies.md](../knowledge/java-gradle/build-and-dependencies.md)
- [neoforge/version-policy.md](../knowledge/neoforge/version-policy.md)
- [Template](../templates/TASK.md)
- [Checklist](../checklists/testing.md)

## Passos

1. Identificar task/fase e primeira causa útil no log.
2. Conferir Wrapper, Java, plugin e dependência resolvida.
3. Reproduzir uma causa por vez em checkout preservado.
4. Corrigir escopo mínimo e repetir comando que falhou.
5. Registrar evidência antes de retomar features.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

