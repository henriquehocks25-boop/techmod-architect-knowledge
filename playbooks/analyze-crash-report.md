# Playbook — crash

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [profiling-debugging/build-crash-triage.md](../knowledge/profiling-debugging/build-crash-triage.md)
- [multiplayer/authority-and-concurrency.md](../knowledge/multiplayer/authority-and-concurrency.md)
- [persistence-migrations/save-schema.md](../knowledge/persistence-migrations/save-schema.md)
- [Template](../templates/TASK.md)
- [Checklist](../checklists/testing.md)

## Passos

1. Ler ambiente, latest.log e cadeia caused by.
2. Relacionar frame próprio à ação/lifecycle.
3. Criar reprodução mínima com versão/config e cópia de mundo.
4. Testar hipótese, incluindo class client-only/endpoint unloaded.
5. Adicionar regressão e instrução de recuperação.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

