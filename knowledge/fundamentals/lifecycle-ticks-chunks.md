# Lifecycle, ticks e chunks

[STABLE] Criação de tipos, abertura do mundo, carregamento de posições, ticking, salvamento e encerramento são fases distintas. Um objeto existir não significa que pode consultar mundo ou registros naquele instante.

## Modelo de execução

Servidor lógico confirma gameplay. Cliente lógico recebe observações e apresenta. Servidor integrado existe dentro do processo de um cliente físico, mas mantém autoridade separada; servidor dedicado não dispõe das classes de apresentação. Um teste só no integrado pode esconder referências client-only incorretas.

Tick é unidade de simulação; tempo de parede pode se afastar dela sob carga. Use duração em ticks para processamento ligado ao mundo, e métricas de parede para profiling. Scheduled ticks agendam comportamento pontual; neighbor updates avisam alterações próximas. Nenhum deles justifica reconstruir toda rede em cascata.

## Disponibilidade

Chunk descarregado torna posições indisponíveis para operação. Coordenadas salvas não são prova de endpoint vivo. Consultar posição pode carregar chunk dependendo da API; verificar versão e usar acesso que não force carga. Chunk tickets/forced loading são recursos com dono, limite e ciclo de liberação.

Após unload, descarte referências e suspenda operações. No reload, reconstrua conexões e revalide handles; mantenha dados persistentes do processo. World reload inclui mudanças de dados: tags/recipes alteradas invalidam matching mesmo sem quebrar bloco.

## Decisões

Máquina idle deve fazer no máximo trabalho barato e despertar por mudança relevante, com polling limitado se terceiros não notificarem. Escalone manutenção por rede, não todos os nós no mesmo tick. Agendamento precisa de retomada eventual: “não tickar” sem mecanismo de despertar paralisa conteúdo.

Para rede atravessando chunks, escolha pausar ligação ou carregar com limite explícito. Nunca simular recursos em posição indisponível e depois aplicar novamente quando ela carregar.

## Testes

Salve processando, descarregue metade da rede, feche e abra o mundo. Verifique progresso, ausência de referência morta e nenhuma transferência para posição ausente. Monitore tickets após remover dono e encerrar servidor.

Fontes: [lados](https://docs.neoforged.net/docs/concepts/sides/), [ticking](https://docs.neoforged.net/docs/1.21.1/blockentities/). APIs são [VERSION-SPECIFIC]; recomendações de scheduling são autorais.
