# Filosofias de energia

[RECOMMENDATION] O usuário escolhe complexidade e risco. Architect recomenda o modelo mais simples que sustenta a experiência desejada.

| Modelo | Usar / evitar | UX e progressão | Performance e interoperabilidade |
|---|---|---|---|
| FE-like escalar | Entrada fácil; evitar se engenharia elétrica é pilar | Saldo e taxa claros; tiers só com função | Agregação de demanda; adapter padrão na versão alvo |
| Tiers | Portões e infraestrutura; evitar inflação de números | Desbloqueio oferece opção nova | Poucas categorias; converter sem bypass |
| Tensão/corrente | Cabeamento e risco intencionais; evitar público que quer plug-and-play | Mostrar limite/transformador e aviso antes de falha | Modelar capacidade por conexão; não solver elétrico real obrigatório |
| Perdas por distância | Decisões de layout; evitar punição oculta | Mostrar entregue versus perdido | Cache de caminho invalidado pela topologia |
| Cinética | Construção espacial e partes móveis; evitar se GUI é foco | RPM/torque/stress como abstrações ensináveis | Rede mantém grandezas; adapter elétrico tem custo |
| Térmica | Reaproveitamento e resfriamento; evitar se só muda nome de energia | Temperatura/calor não são a mesma coisa | Limitar transferências e conversões por tick |
| Smart grid | Fábricas com prioridades; evitar protocolo enorme cedo | Demanda, brownout e prioridade explicáveis | Scheduling/fairness e backlog observável |

## Contrato comum

Unidade de quantidade, taxa por tick, capacidade, eficiência e política de arredondamento. Energia gerada, entregue, dissipada e armazenada entram no mesmo balanço; conversão não cria lucro num circuito fechado.

Buffer suaviza startup e brownout; não resolve oferta insuficiente permanente. Prioridade crítica mantém controle/refrigeração; reserva não pode depender só da GUI.

## Balanceamento

Capacidade permite duração sem fonte; throughput permite intensidade; custo por produto permite eficiência. Diferenciar upgrades nesses eixos gera escolhas. Modelo com explosões exige proteção/aviso/recuperação e regras de servidor.

Fonte de inspiração, não padrão universal: [Create](../case-studies/create/overview.md), [IC2](../case-studies/industrialcraft/overview.md), [matriz](../case-studies/comparison-matrix.md).
