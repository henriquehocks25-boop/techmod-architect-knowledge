# IndustrialCraft: lições para o Architect

[CASE-STUDY] [RECOMMENDATION] Síntese original; fatos históricos estão nos [documentos locais](overview.md).

1. Escolha uma unidade coerente e explique separadamente saldo, taxa e limite instantâneo.
2. Faça infraestrutura mudar decisões, em vez de impor muitos números sem retorno de gameplay.
3. Diferencie remover calor, distribuir calor e suportar calor temporariamente.
4. Segurança deve ter prioridade operacional clara e feedback antes da falha.
5. Risco escolhido pelo jogador precisa considerar efeitos sobre outros jogadores e claims.

Pergunta em linguagem de gameplay: “uma instalação incorreta deve parar com aviso, perder eficiência ou causar acidente?”. Se o usuário não souber, recomende parada com aviso para o início e riscos avançados configuráveis. O Architect resolve algoritmos e contratos depois.

Para uma implementação original, use [energia](../../energy/philosophies.md), [calor](../../heat-thermodynamics/thermal-model.md) e [nuclear](../../nuclear/reactor-control.md). Uma [ADR](../../../templates/ADR.md) registra a política de risco e um teste cobre perda de resfriamento, desligamento e recuperação.
