# IO, upgrades e fábricas

[RECOMMENDATION] A configuração visível precisa refletir o contrato real oferecido à automação.

## Faces e containers

Use faces locais (frente/trás/lados/cima/baixo), convertidas pela orientação. Slot de output rejeita inserção; catalisador não é consumido como matéria-prima; ferramenta recebe desgaste uma vez por operação. Auto input, auto output e auto eject são ações distintas; uma capacidade passiva não implica extração ativa.

Buffer interno de item/fluido/chemical e energia tem capacidade e taxa separadas. Expor tudo numa face facilita início, mas dificulta controle fino; padrão conservador com mensagem de configuração costuma ser melhor para máquina complexa.

## Upgrades

| Eixo | Ganho | Custo e limite |
|---|---|---|
| Speed | Mais trabalho por tick | Energia/taxa/temperatura e teto de throughput |
| Efficiency | Menor consumo por operação | Piso de custo; não inverter saldo |
| Capacity | Mais buffer | Dados existentes não podem desaparecer ao remover |
| Energy | Aceitação/armazenamento | Distinguir capacidade de taxa |
| Parallel | Mais operações | Reserva independente e orçamento de CPU |
| Maintenance | Menor desgaste/parada | Só se manutenção gerar escolha útil |

Wear/durability exige reparo acessível e automação de manutenção. Evitar punição sem aviso. Fórmulas multiplicativas precisam de limites e aritmética segura. Somar descontos até consumo negativo é bug de economia e integridade.

## Factories

Paralelismo real compartilha energia/IO, mas cada job compromete inputs e outputs. Fairness impede uma linha faminta por sempre ser iterada depois. Mostrar por operação ou resumo de bloqueios; não ocultar uma saída presa atrás da média de progresso.

## Verificação

Rotação e wrench preservam intenção local. Remova capacity upgrade cheio: impedir remoção, conservar excesso em estado bloqueado ou migrar explicitamente, nunca apagar. Inserção externa deve bater com validação da GUI. Compare uma operação e muitas linhas sob mesma oferta.

Fontes: [handlers](../neoforge/resources-handlers-capabilities.md), [Mekanism como estudo](../case-studies/mekanism/overview.md); fórmulas são escolhas do projeto.
