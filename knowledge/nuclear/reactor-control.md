# Nuclear: controle, risco e progressão

[RECOMMENDATION] Fissão/fusão são fantasias industriais abstratas. Projetar ciclo de recursos e decisões do jogador; não reproduzir engenharia nuclear real.

## Ciclo

Fissão usa combustível, coolant, calor e resíduos; enriquecimento pode ser etapa de progressão. Fusão pode exigir combustível contínuo e startup alto, com recompensa endgame. Shielding e radiation são mecânicas configuráveis com alcance, owner e recuperação explícitos.

Máxima potência não deve ser recompensa sem consumo útil. Turbina, fabrico avançado e manutenção da rede são sumidouros possíveis; tier final pode abrir automação qualitativa em vez de inflar energia.

## Estados

OFF → PRECHECK → STARTUP → RUNNING → SCRAM → COOLDOWN → OFF.
PRECHECK valida estrutura, capacidade para resíduos, coolant e sistemas de segurança. SCRAM corta geração ativa conforme design, mas calor residual pode continuar. Restart exige condições, não reset gratuito de temperatura.

## Falhas

| Evento | Resposta projetada |
|---|---|
| Sem coolant | Alarme e redução/scram com limiar explícito |
| Resíduo cheio | Não consumir mais combustível sem destino seguro |
| Sem energia de controle | Interlock conservador; cooling passivo/reserva se adotado |
| Porta quebrada | Suspender processo e preservar materiais |
| Chunk parcial | Estado seguro/inativo segundo política de disponibilidade |
| Reload após falha | Não apagar calor/resíduo para “consertar” |

Risco pode ser dano local, perda de operação ou efeito de área; usuário escolhe consequências. Claims e permissões limitam impacto em terceiros. Config de servidor define risco, não cliente.

## UX e teste

Alarmes devem preceder consequências e apontar causa/ação. Testar perda de coolant/energia, tanks cheios, scram repetido, unload e migração. Nunca usar animação como confirmação de segurança.

Referências: [calor](../heat-thermodynamics/thermal-model.md), [multiblocos](../multiblocks/formation-and-validation.md), [template](../../templates/NUCLEAR_SPEC.md).
