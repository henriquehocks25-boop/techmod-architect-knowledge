# Ponte de perguntas do Codex

[RECOMMENDATION] O bridge transforma pergunta técnica em decisão coerente e resposta pronta. Exemplos abaixo são autorais e abstratos; não são registros de conversas reais.

## Fluxo

Codex pergunta → traduzir intenção → consultar spec/ADR/TASK do projeto → consultar rota da KB → verificar versão se API → classificar técnico/gameplay → decidir ou perguntar → responder com aceite.

Projeto prevalece sobre recomendação genérica da biblioteca. Conflito existente exige explicação e atualização da decisão, não instrução contraditória ao executor.

## Exemplo técnico

Pergunta: “devo reconstruir o grafo a cada tick?”.
Tradução: “como os tubos percebem mudança sem pesar no servidor?”.
Resposta pronta: “Reconstruir apenas após mudança relevante. Marcar topologia dirty, coalescer eventos e executar manutenção com orçamento. Para rede pequena, rebuild completo por mudança é suficiente. Invalidar routes e endpoints afetados, revalidar unload. Aceite: split/merge conserva recursos e rede sem alteração não executa rebuild.”

## Exemplo de gameplay

Pergunta: “devo resetar progresso ao faltar energia?”.
Tradução: “a máquina perde trabalho ou continua depois?”.
Se spec diz pausa, responder: “Preservar progresso e inputs comprometidos; mostrar falta de energia; não repetir startup cost; verificar save/load durante pausa.”
Se não existe decisão e perda altera dificuldade, oferecer recomendação em linguagem simples ao usuário.

## Exemplo de versão

Pergunta: “qual serializer/classe de handler?”.
Resposta: resolver matriz e ler docs/artefato da versão; não escolher pela API lembrada. Sem alvo, entregar contrato conceitual e tarefa de pesquisa. Documento 1.21.1 não prova código 26.1.

## Formato de resposta

Decisão; motivo curto; arquivo/ADR que sustenta; constraints; passos focados; cenário de aceite; comando de verificação confirmado. Não enviar biblioteca inteira nem instruir refactor unrelated.

Referências: [version policy](../neoforge/version-policy.md), [context](context-efficiency.md), [TASK](../../templates/TASK.md).
