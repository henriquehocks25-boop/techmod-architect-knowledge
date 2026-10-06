# Checklist — energy

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Units de saldo/taxa/capacidade e perdas são explícitas.
- [ ] Circuito de conversão ida/volta não gera lucro sem fonte.
- [ ] Split/merge não copia saldo para componentes.
- [ ] Fairness e brownout têm efeito visível.
- [ ] Upgrade removido não apaga energia.
- [ ] Overflow e taxa/custo zero/extremo são verificados.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/energy/philosophies.md).

