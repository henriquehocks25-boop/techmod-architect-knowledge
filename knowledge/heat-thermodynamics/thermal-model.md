# Calor e termodinâmica de gameplay

[RECOMMENDATION] Modelo térmico precisa ser consistente e ensinável; não precisa reproduzir física real.

## Grandezas

Calor armazenado representa energia abstrata; temperatura depende da capacidade térmica. Dois tanques com mesma temperatura podem armazenar quantidades diferentes. Condutividade controla velocidade de troca; insulation reduz troca; aquecimento/resfriamento altera saldo.

Exemplo autoral discreto: troca proposta = k × diferença de temperatura × intervalo. Limitar pela energia disponível e pelo ponto de equilíbrio evita overshoot e temperaturas alternando infinitamente. Atualizar pares uma vez, ou calcular deltas por snapshot e aplicar juntos, impede duplicação de transferência.

## Sistemas

Heat exchanger transfere entre circuitos sem misturar material, com limite e eficiência. Boiler consome água e calor para steam; turbine converte fluxo/energia e devolve condensado se o design usar circuito fechado. Conversões incluem carry de arredondamento.

Passive cooling é previsível e barato; active cooling depende de energia/fluido, gera estratégia e risco de brownout. Thermal runaway é gameplay de feedback positivo e thresholds definidos, não simulação obrigatória de reações reais.

## Performance

Grafo térmico pode atualizar menos frequentemente que receitas, com intervalo explícito. Batching não pode pular limites de segurança; se taxas são não lineares, passo muito grande muda resultado. Sistema descarregado pausa ou aplica política de recuperação conservadora, sem simular horas de instabilidade num único tick.

## UX e verificação

Mostrar entrada/saída de calor, taxa de cooling e temperatura limite; aviso antes de falha. Testar dois corpos iguais, quente/frio, rede isolada, capacidade alterada, load/unload e falta de coolant. Soma do calor + perdas explícitas permanece constante sem fonte.

Referências: [conversões](../energy/generation-conversion.md), [reator](../nuclear/reactor-control.md).
