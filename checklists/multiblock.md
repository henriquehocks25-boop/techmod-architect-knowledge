# Checklist — multiblock

[RECOMMENDATION] Revisar projeto/implementação; marcar item somente com evidência. Item não aplicável exige motivo, não aprovação fictícia.

- [ ] Padrão, tamanho e orientação são limitados.
- [ ] Controller único e peças sem ownership duplo.
- [ ] Chunk ausente suspende sem falso scan de mundo.
- [ ] Portas compartilham saldo único com invalidação.
- [ ] Deformação preserva operações e excesso.
- [ ] Erro localizável e rebuild após load são verificados.

## Evidência mínima

Registrar cenário, versões, comando/passos e resultado. Falha cria TASK de correção com invariante afetado. Conceitos em [documento do domínio](../knowledge/multiblocks/formation-and-validation.md).

