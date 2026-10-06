# Catálogo de padrões neutros

[RECOMMENDATION] Padrões abaixo são síntese autoral. Fontes de mods servem como evidência de possibilidades; nenhum padrão é exigência universal.

| Padrão | Problema e contrato | Evitar quando |
|---|---|---|
| Machine Core Pattern | Lifecycle e processo comuns; conteúdo varia por definição | Uma feature sem família previsível |
| Component Pattern | Energia/slots/calor/controle com responsabilidade própria | Componentes só delegam tudo ao dono |
| Capability/Handler Pattern | Descobrir e operar por interface, com disponibilidade e limites | Precisa apenas de helper interno |
| Data-driven Recipe Pattern | Conteúdo editável com schema e validação | Regra inseparável de ação complexa de mundo |
| Resource Container Pattern | Identidade, saldo, capacidade e transação | Recursos não compartilham semântica suficiente |
| Sided I/O Pattern | Exposição por face local traduzida ao mundo | Bloco sem acesso externo |
| Upgrade Pattern | Modificar parâmetros limitados com custo perceptível | Esconde progressão e cria crescimento sem teto |
| Network Graph Pattern | Conectividade, componentes e versão de topologia | Relação é só vizinho direto |
| Endpoint Pattern | Destino independente de implementação | Acaba guardando handle sem invalidar |
| Routing Pattern | Política separada de busca e transferência | Toda conexão tem destino único |
| Cache + Invalidation Pattern | Evitar recomputação com invalidadores enumerados | Custo menor que administrar coerência |
| Multiblock Controller Pattern | Um dono agregado e validação de estrutura | Bloco único já entrega experiência |
| Client Sync Pattern | Snapshot inicial + deltas para observadores | Estado é puramente visual local |
| Dirty State Pattern | Marcar exatamente projeções derivadas afetadas | Dirty global recria tudo sempre |
| Performance Budget Pattern | Limitar trabalho e backlog | Limite oculta starvation sem diagnóstico |
| Diagnostics Pattern | Causa, posição e ação de recuperação | Telemetria expõe dados privados |
| Context Budget Pattern | Carregar KB por pergunta/tarefa | Omitir contrato necessário por economia |

## Aplicação

Exemplo autoral: triturador usa container próprio e processamento; adapter expõe entrada/saída; menu observa progresso; scheduler acorda em input/energia. Não precisa graph manager até ganhar rede. Ao adicionar tubos, endpoints permitem conectar máquina sem conhecer classe do triturador.

Teste de padrão é comportamento: estados corretos, saldo conservado, cache revalidado. Não medir qualidade por número de interfaces.

Referências: [estudos](../case-studies/comparison-matrix.md), [fronteiras](boundaries.md).
