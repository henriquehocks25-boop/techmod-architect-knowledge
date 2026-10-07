# Glossário operacional

[STABLE] Vocabulário conceitual para interpretar specs e perguntas. [VERSION-SPECIFIC] Nomes da API Minecraft/NeoForge, inclusive BlockEntity, capability, codec e payload, exigem fonte do alvo para qualquer classe, método ou assinatura.

| Termo | Significado para o Architect | Aprofundamento |
|---|---|---|
| Saldo | Quantidade possuída por um container; difere da taxa de transferência. | [Documento](knowledge/storage-networks/storage-accounting.md) |
| Taxa | Quantidade máxima por intervalo declarado; não é capacidade acumulada. | [Documento](knowledge/energy/distribution-and-storage.md) |
| Capacidade | Limite do container ou teto físico/modelado; indicar unidade. | [Documento](knowledge/fluids-chemicals/containers-and-chains.md) |
| Autoridade | Lado que valida e confirma alterações de gameplay. | [Documento](knowledge/multiplayer/authority-and-concurrency.md) |
| Cliente físico | Processo com apresentação; pode hospedar servidor integrado. | [Documento](knowledge/fundamentals/authority-sync-serialization.md) |
| Servidor integrado | Servidor lógico dentro do processo do jogador anfitrião. | [Documento](knowledge/fundamentals/authority-sync-serialization.md) |
| Servidor dedicado | Processo de servidor sem dependência de classes de apresentação. | [Documento](knowledge/multiplayer/authority-and-concurrency.md) |
| Tick | Passo discreto de execução; custo excessivo atrasa o jogo. | [Documento](knowledge/fundamentals/lifecycle-ticks-chunks.md) |
| Scheduled tick | Trabalho agendado para condição/momento específico; API depende do alvo. | [Documento](knowledge/fundamentals/lifecycle-ticks-chunks.md) |
| Chunk | Unidade de região e ciclo de carregamento do mundo. | [Documento](knowledge/fundamentals/lifecycle-ticks-chunks.md) |
| Chunk ticket | Pedido de manter região em determinada condição de carga; política precisa de limite. | [Documento](knowledge/wireless/links-ownership-and-chunks.md) |
| Unload | Fim da disponibilidade local; invalidar referências vivas. | [Documento](knowledge/logistics/topology-and-lifecycle.md) |
| Registry | Catálogo de tipos por identidade estável. | [Documento](knowledge/fundamentals/objects-and-resources.md) |
| Resource ID | Namespace e caminho que identificam conteúdo. | [Documento](knowledge/fundamentals/objects-and-resources.md) |
| Tag | Grupo semântico editável de recursos. | [Documento](knowledge/fundamentals/objects-and-resources.md) |
| Data pack | Dados de gameplay que podem alterar conteúdo e matching. | [Documento](knowledge/modpacks/configs-recipes-and-authors.md) |
| Resource pack | Dados de apresentação: modelos, texturas, áudio e equivalentes. | [Documento](knowledge/assets-blockbench/asset-and-animation-spec.md) |
| BlockEntity | Vocabulário Minecraft para estado associado a uma posição; API depende da versão. | [Documento](knowledge/fundamentals/objects-and-resources.md) |
| Handler | Contrato operacional de acesso a recurso; não implica atomicidade. | [Documento](knowledge/neoforge/resources-handlers-capabilities.md) |
| Capability | Descoberta de interface/contexto disponível para operação. | [Documento](knowledge/neoforge/resources-handlers-capabilities.md) |
| Adapter | Camada que converte contratos sem vazar internals da dependência. | [Documento](knowledge/compatibility/adapters-and-contracts.md) |
| Component | Responsabilidade composta, como energia ou controle, com contrato próprio. | [Documento](knowledge/architecture/pattern-catalog.md) |
| Machine core | Ciclo de vida e execução comuns a uma família. | [Documento](knowledge/machines/machine-core.md) |
| Estado de máquina | Condição operacional explícita, como idle, working ou blocked. | [Documento](knowledge/machines/states-and-lifecycle.md) |
| Startup cost | Custo pago uma vez ao iniciar trabalho; pausa não o repete sem regra. | [Documento](knowledge/recipes-processing/recipe-models.md) |
| Catalisador | Recurso exigido com regra própria de consumo/desgaste. | [Documento](knowledge/recipes-processing/recipe-models.md) |
| Batch | Unidade de processo agrupado e compromisso de recursos. | [Documento](knowledge/recipes-processing/recipe-models.md) |
| Parallelism | Processos admitidos simultaneamente sob orçamento compartilhado. | [Documento](knowledge/machines/io-upgrades-factories.md) |
| Sided I/O | Acesso controlado por face local e orientação do bloco. | [Documento](knowledge/machines/io-upgrades-factories.md) |
| Brownout | Demanda acima da oferta segundo política declarada de distribuição. | [Documento](knowledge/energy/distribution-and-storage.md) |
| Tensão/tier | Modelo de compatibilidade/risco; não sinônimo universal de taxa. | [Documento](knowledge/energy/philosophies.md) |
| Stress/RPM | Grandezas mecânicas de gameplay; definir carga e velocidade separadamente. | [Documento](knowledge/energy/philosophies.md) |
| Heat | Energia térmica modelada; temperatura também depende de capacidade. | [Documento](knowledge/heat-thermodynamics/thermal-model.md) |
| Thermal runaway | Estado em que geração/crescimento supera remoção de calor. | [Documento](knowledge/nuclear/reactor-control.md) |
| SCRAM | Desligamento emergencial com prioridade definida; calor residual permanece conforme modelo. | [Documento](knowledge/nuclear/reactor-control.md) |
| Topologia | Conectividade estrutural de uma rede. | [Documento](knowledge/logistics/graph-and-endpoints.md) |
| Node | Participante do grafo; não precisa ter um tick próprio. | [Documento](knowledge/logistics/graph-and-endpoints.md) |
| Endpoint | Interface/destino acessível com identidade e disponibilidade. | [Documento](knowledge/logistics/graph-and-endpoints.md) |
| Connected component | Conjunto de nós alcançáveis segundo as regras da rede. | [Documento](knowledge/logistics/topology-and-lifecycle.md) |
| Split/merge | Divisão/união que exige atualizar conectividade e propriedade de estado. | [Documento](knowledge/logistics/topology-and-lifecycle.md) |
| Push/pull | Origem inicia envio/destino inicia busca; híbrido precisa evitar duplicar trabalho. | [Documento](knowledge/logistics/routing-and-policies.md) |
| Round-robin | Rotação entre destinos elegíveis; bloqueios precisam de regra de avanço. | [Documento](knowledge/logistics/routing-and-policies.md) |
| Fairness | Garantia de atendimento que impede participante de esperar indefinidamente. | [Documento](knowledge/logistics/routing-and-policies.md) |
| Backoff | Adiar repetição após falha enquanto observa condições de reativação. | [Documento](knowledge/logistics/routing-and-policies.md) |
| Simulation | Consulta sem efeito pretendido; não é reserva de capacidade. | [Documento](knowledge/logistics/transfer-integrity.md) |
| Reservation | Compromisso explícito de recurso/capacidade com prazo e cancelamento. | [Documento](knowledge/storage-networks/autocrafting-jobs.md) |
| Escrow | Custódia temporária da sobra quando rollback externo não é possível. | [Documento](knowledge/logistics/transfer-integrity.md) |
| Conservation | Retirada, inserção e sobra correspondem ao saldo total. | [Documento](knowledge/logistics/transfer-integrity.md) |
| Cache | Projeção derivada que evita recomputação quando permanece válida. | [Documento](knowledge/recipes-processing/lookup-and-cache.md) |
| Invalidation | Evento que encerra validade da projeção derivada. | [Documento](knowledge/logistics/topology-and-lifecycle.md) |
| Dirty flag | Indicação de projeção alterada; delimita trabalho de atualização. | [Documento](knowledge/architecture/pattern-catalog.md) |
| Snapshot | Vista de uma geração do estado; pode ser inadequada para autorizar mutação. | [Documento](knowledge/storage-networks/storage-accounting.md) |
| Delta | Mudanças desde uma base reconhecida pelo observador. | [Documento](knowledge/fundamentals/authority-sync-serialization.md) |
| Payload | Mensagem de rede validada no lado autoritativo. | [Documento](knowledge/neoforge/networking-menus-config.md) |
| Codec/schema | Contrato de representar e validar dados; assinatura concreta é versionada. | [Documento](knowledge/persistence-migrations/save-schema.md) |
| Persistent/transient | Dado que deve sobreviver ao save/dado reconstruído após load. | [Documento](knowledge/persistence-migrations/save-schema.md) |
| Migration | Transformação controlada e idempotente de dados/IDs entre formatos. | [Documento](knowledge/persistence-migrations/migration-and-recovery.md) |
| Retrogen | Geração em regiões existentes; exige política, backup e proteção. | [Documento](knowledge/worldgen/deposits-and-migrations.md) |
| Controller | Dono/gestor de estado agregado de rede ou multibloco. | [Documento](knowledge/multiblocks/state-ports-rendering.md) |
| Hatch/port | Ponto de acesso a recurso de uma estrutura. | [Documento](knowledge/multiblocks/formation-and-validation.md) |
| Autocrafting job | Pedido persistente com plano, reservas, progresso e cancelamento. | [Documento](knowledge/storage-networks/autocrafting-jobs.md) |
| Budget | Limite de trabalho e política de fila/fairness; não número universal. | [Documento](knowledge/performance/PERFORMANCE_BUDGET_GUIDE.md) |
| Scaling test | Medição de custo e correção conforme tamanho/densidade/churn. | [Documento](knowledge/performance/SCALING_TESTS.md) |
| Profile | Evidência de onde tempo/alocações são gastos num cenário. | [Documento](knowledge/profiling-debugging/profiling-and-diagnostics.md) |
| Minimal repro | Menor cenário reproduzível que mantém a falha. | [Documento](knowledge/profiling-debugging/build-crash-triage.md) |
| Datagen | Produção verificável de dados do jogo por providers do alvo. | [Documento](knowledge/neoforge/recipes-datagen-tests-rendering.md) |
| ADR | Registro de decisão, alternativas, motivo e consequências. | [Documento](knowledge/codex/handoff-and-review.md) |
| TASK | Unidade focal de execução com escopo, contratos e critérios de aceite. | [Documento](knowledge/codex/handoff-and-review.md) |
| Optional dependency | Integração cuja ausência precisa ser uma configuração válida e testada. | [Documento](knowledge/compatibility/adapters-and-contracts.md) |
| Public API | Contrato oferecido para consumo; nome público da classe não basta. | [Documento](knowledge/compatibility/adapters-and-contracts.md) |

Uma expressão em inglês pode ter múltiplos sentidos: network pode ser grafo de tubos ou comunicação cliente/servidor. Antes de responder, identifique recurso, dono, ciclo de vida e contrato. Unidades diferentes nunca se tornam equivalentes apenas pelo nome “energia”.
