# Checklist — machine-state

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Transições possuem precondições e pós-condições de saldo.
- [ ] Startup cost é pago uma vez por operação.
- [ ] Troca de recipe não reaproveita progresso indevidamente.
- [ ] Output pronto aguarda entrega sem novo consumo.
- [ ] Fault tem ação de recuperação e feedback.
- [ ] Resultado probabilístico persiste durante pausa/reload.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/machines/states-and-lifecycle.md).

