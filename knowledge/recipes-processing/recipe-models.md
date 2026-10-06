# Modelos de processamento

[RECOMMENDATION] Recipe é contrato de transformação, com requisitos e efeito; não uma sequência de chamadas de inventário.

## Formas

Multi-item/multi-fluid precisa matching de quantidades e alocação de slots para evitar contar uma pilha duas vezes. Item+fluido ou item+chemical coordena recursos em uma mesma operação. Catalisador permanece; ferramenta desgasta; input não consumido deve ser protegido durante uso se necessário.

Multiple outputs podem bloquear por subproduto: apresentar qual está cheio. Probabilistic outputs têm chance independente ou escolha exclusiva; especificar a diferença. Sorteio deve ocorrer uma vez por operação comprometida e sobreviver a reload.

Heat/pressure são requisitos de gameplay, não obrigação física. Temperatura mínima pode pausar ou penalizar velocidade; faixa segura pode gerar risco. Duração, energia por tick, energia total e startup cost têm unidades explícitas.

## Temporalidade

| Modelo | Bom uso | Dificuldade |
|---|---|---|
| Batch | Transformação discreta com resultado claro | Reserva e saída bloqueada |
| Continuous | Fluxo sustentado | Arredondamento, saldo residual e stop |
| Parallel | Escala de fábrica | Fairness e concorrência por input |
| Chained | Progressão entre operações | Gargalo e reciclagem de byproduct |

Em contínuo, carry fracionário pertence ao estado: truncar cada tick perde massa; arredondar para cima cria massa. Startup repetível precisa impedir exploração pela alternância de on/off.

## Dados e UX

Validar quantidades positivas, duração limitada, chances em faixa, lista de outputs limitada e identidade resolvível. Erro aponta receita/campo. Recipe viewer deve mostrar catalisadores, subprodutos, energia e duração; não aceitar que ausência da integração impeça execução.

## Verificação

Use entradas repetidas com diferentes componentes, catalisador extraído e output de chance bloqueado. Somente informar “receita existe” não prova que matching/execução são corretos.

Fonte: [NeoForge recipes](https://docs.neoforged.net/docs/resources/server/recipes/); schema concreto é [VERSION-SPECIFIC].
