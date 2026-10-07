# Integrated Dynamics: Lógica, referências e eventos

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master-26-lts; commit `bb277e753e0b313e722b20dbaac8767c13537931`. Consulta: 2026-10-06. Fontes: [INetwork.java](https://github.com/CyclopsMC/IntegratedDynamics/blob/bb277e753e0b313e722b20dbaac8767c13537931/src/main/java/org/cyclops/integrateddynamics/api/network/INetwork.java).

## Evidência e interpretação

A interface observada distingue a rede dos dados referenciados. A fronteira útil é autoral: avaliar intenção e executar alteração de recurso são etapas separadas.

## Modelo transferível

[RECOMMENDATION] Modelo original: sensor produz valor tipado com validade; avaliador produz intenção; executor verifica permissão, disponibilidade e orçamento no servidor. Um evento pode sujar valores derivados sem atualizar toda a rede. Evite reação em cadeia sem limite por tick.

## Verificação e limite

Aceite proposto: desconectar sensor, restaurar chunk, mudar tipo de variável e criar dependência circular. Registre causa e elemento responsável pelo erro. Não mascarar uma falha de rede como booleano falso.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
