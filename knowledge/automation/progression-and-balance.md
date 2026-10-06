# Automação, progressão e balanceamento

[RECOMMENDATION] Automação transfere esforço repetitivo para planejamento. Complexidade vale quando gera decisões novas e recompensas observáveis.

## Etapas

Manual útil → primeira máquina → IO automatizado → produção sustentada → controle de estoque → escala/requests.
Cada camada ensina um conceito; não exigir storage network inteira para primeira receita. Família de máquinas ganha papel próprio, não apenas textura/custo diferente.

## Economia

Throughput aproximado de etapa = operações simultâneas × output por operação / duração. Cadeia é limitada pelo menor throughput ajustado às proporções. Buffer absorve variação, não remove gargalo permanente.

Fontes e sumidouros precisam manter tensão: se minério infinito chega cedo, desafio vira energia/logística; isso é válido quando intencional. Subprodutos devem ser úteis ou descartáveis com custo/config clara. Chained recipes não podem exigir recurso obtido apenas pela própria cadeia.

## Upgrades e dificuldade

Speed, eficiência e parallel têm custos independentes; evitar multiplicação ilimitada. Tiers devem abrir capacidade/regra nova. Maintenance e risco nuclear só quando o usuário quer esse ritmo. Configs de pack podem alterar economia, mas não quebrar invariantes de quantidades.

## Entrevista e conflitos

“Fácil de aprender” com tensão/perdas/explosões pede caminhos: modo simples default, camadas opcionais ou onboarding gradual. Não devolver ao usuário escolha de graph implementation. Traduza para “tubos priorizam máquina crítica ou dividem igualmente?”.

## Testes

Percorrer progression sem cheats; medir tempo à primeira recompensa; verificar caminhos alternativos, bloqueios impossíveis e estoque final. Dados de balance são hipóteses até playtest. Planilha/medição pertence ao projeto específico, não a números universais da KB.

Referências: [entrevista](../codex/adaptive-interview.md), [energia](../energy/philosophies.md).
