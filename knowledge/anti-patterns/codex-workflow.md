# Anti-patterns — codex-workflow

[ANTI-PATTERN] Sintomas são sinais para investigação; exceções precisam de contrato e evidência.

## Giant prompt

Problema/sintoma: Copiar biblioteca inteira em TASK.

Consequência: Contexto dilui objetivo e decisões contraditórias.

Alternativa: Roteador e contrato mínimo suficiente.

Possível exceção: Auditoria ampla com leitura por passes delimitados.

## Load every doc

Problema/sintoma: Toda pergunta abre todos módulos.

Consequência: Custo e perda de foco.

Alternativa: LIGHT/STANDARD; escalar por risco.

Possível exceção: Descoberta do índice não exige conteúdo integral.

## No acceptance criteria

Problema/sintoma: Tarefa diz só melhorar/otimizar.

Consequência: Impossível concluir/revisar objetivamente.

Alternativa: Cenário e evidência de antes/depois.

Possível exceção: Exploração aberta identificada com relatório como artefato.

## Continue with broken build

Problema/sintoma: Empilhar features após falha base.

Consequência: Causa fica difícil de localizar.

Alternativa: Corrigir baseline ou registrar bloqueio independente.

Possível exceção: Trabalho documental independente da falha.

## Refactor unrelated code

Problema/sintoma: Executor amplia escopo por gosto.

Consequência: Diff difícil e regressões extras.

Alternativa: Tarefa pequena e ADR para mudança maior.

Possível exceção: Refactor necessário para contrato da tarefa explicado.

## Architecture duplication

Problema/sintoma: Criar segundo framework sem ler decisões.

Consequência: Estado/caches concorrentes e divergência.

Alternativa: Ler docs/ADR e reutilizar contrato.

Possível exceção: Experimento isolado com plano de descarte/migração.

Verificação: reproduzir sintoma, medir consequência e validar alternativa com os invariantes do subsistema. Consulte o [roteador](../../TOPIC_ROUTER.md) e o [catálogo de padrões](../architecture/pattern-catalog.md).

