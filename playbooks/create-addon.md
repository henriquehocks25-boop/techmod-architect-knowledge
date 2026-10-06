# Playbook — addon

[RECOMMENDATION] Executar no projeto consumidor. Biblioteca orienta; comandos/API dependem de alvo resolvido.

## Carregar

- [neoforge/version-policy.md](../knowledge/neoforge/version-policy.md)
- [compatibility/adapters-and-contracts.md](../knowledge/compatibility/adapters-and-contracts.md)
- [security-maintenance/dependencies-and-licenses.md](../knowledge/security-maintenance/dependencies-and-licenses.md)
- [Template](../templates/COMPATIBILITY_REVIEW.md)
- [Checklist](../checklists/compatibility.md)

## Passos

1. Resolver versão/loader/API/licença do mod base antes do jogo.
2. Escolher extensão com papel próprio e contrato público.
3. Isolar adapter e decidir hard/soft dependency.
4. Testar base presente/ausente quando opcional e range declarado.
5. Registrar limites, migration e release.

## Portão de conclusão

Artefato/decisão pronto para revisão, aceite demonstrado e limites registrados. Se falhar contrato de saldo, save ou autoridade, resolver antes de avançar. Se versão/API estiver desconhecida, entregar pesquisa delimitada sem assinatura presumida. Não duplicar os módulos carregados no relatório.

