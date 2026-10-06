# Lookup, prioridades e cache de receitas

[PERFORMANCE] Matching flexível custa mais que lookup por ID. Cache só vale com definição clara do que invalida resultado positivo e negativo.

## Estratégia gradual

Poucas recipes: busca linear ao mudar entrada pode ser suficiente. Catálogo grande: indexar candidatos por tipo/ingrediente e depois validar predicados completos. Índice por item exato não substitui matching por tag, componente ou condição de calor.

Cache key pode incluir identidade/componente dos inputs, modo, quantidade quando relevante e versão de dados. Separar “candidata conhecida” de “executável agora”: faltar energia não exige novo matching. Quantidade muda executabilidade; tag reload muda identidade aceita.

## Conflitos

Prioridade explícita e desempate estável. Uma recipe genérica por tag pode sombrear especializada; reportar ambiguidade em diagnóstico/datagen. Não depender de ordem incidental de map ou load.

Batch de operações reutiliza matching quando semântica permite; validar saldo por operação. Para parallel slots, indexar inputs disponíveis e alocar sem dupla contagem. Cache de “não existe” requer mudança de input e reload; TTL sozinho não corrige stale positivo.

## Tradeoffs

Índice profundo aumenta memória e custo de rebuild. Predicado arbitrário dificulta indexação; limitar DSL e comparar custo medido. Em reload, construir novo índice e publicar atomicamente no contexto correto, evitando expor estado incompleto. Worker usa snapshots, nunca registry/world mutable sem contrato.

## Verificação

1, 100 e milhares de recipes com mesmos inputs; medir lookup p95 e reload. Trocar tag, componente e prioridade. Confirmar que operação comprometida aplica sua política de reload e não ganha output da nova recipe por acidente.

Fontes: [recipes](https://docs.neoforged.net/docs/resources/server/recipes/), [cache e orçamento](../performance/PERFORMANCE_BUDGET_GUIDE.md). Recomendações de índice são autorais.
