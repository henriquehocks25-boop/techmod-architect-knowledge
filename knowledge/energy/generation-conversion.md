# Geração, conversões e economia energética

[RECOMMENDATION] Geradores devem oferecer escolhas de recurso, espaço, confiabilidade e operação; mais tipos sem função criam catálogo vazio.

| Fonte | Papel de gameplay | Custo/risco a explicitar |
|---|---|---|
| Solar/vento/renovável | Entrada ou infraestrutura distribuída | Variabilidade, espaço, buffers e spam de nós |
| Combustão | Oferta controlável | Combustível, resíduos e ciclo que pode realimentar |
| Vapor/turbina | Cadeia industrial | Calor→vapor→energia, refrigeração, perdas |
| Geotérmica | Localização ou recurso fluido | Depósito finito/infinito definido, dimensão |
| Nuclear | Potência e controle | Combustível, resíduos, calor residual e risco |
| Fusão | Objetivo de endgame | Startup alto, cadeia sustentável e sumidouros |
| Mecânica/cinética | Layout e movimento | Torque/RPM/stress como modelo abstrato |
| Recuperação térmica | Eficiência integrada | Eficiência limitada e nenhuma conversão circular lucrativa |

## Conservação autoral

Para uma janela: oferta + saldo inicial = consumo + perdas + saldo final. Conversões com recursos devem incluir energia química/fonte externa conceitual, não fingir que combustível não aporta energia. Perdas são gameplay e não equações reais obrigatórias.

Eficiência ida×volta deve ser ≤1 para ciclo sem fonte. Arredondamento carrega resto ou perde explicitamente, nunca ganha em troca de unidade.

## Startup e brownout

Startup pode exigir reserva antes de ligar; desligar deve preservar custo já pago. Turbina ociosa pode desacelerar; reator continua quente. Aplicar custo e output apenas quando receptor aceita ou manter buffer com limite. Descartar excesso é permitido se anunciado, mas não aumenta consumo infinito em backoff.

## Testes

Circuito energia→calor→energia em loop; buffer cheio; gerador removido durante transferência; falta combustível no último tick; muitos geradores idle. Observe unidades e overflow nas multiplicações.

Fontes conceituais: [calor](../heat-thermodynamics/thermal-model.md), [nuclear](../nuclear/reactor-control.md), [contratos de recursos](../neoforge/resources-handlers-capabilities.md).
