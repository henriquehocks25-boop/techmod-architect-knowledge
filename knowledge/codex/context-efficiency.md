# Contexto eficiente e recuperação de conversa

[RECOMMENDATION] Git é memória externa; chat contém somente o necessário para decidir/executar tarefa atual.

## Artefatos

AGENTS curto descreve propósito, versões, comandos e limites. Specs definem contratos. ADR registra decisão/motivo/consequência. TASK delimita uma mudança com aceite. MILESTONE integra fluxo completo.

Não repetir arquitetura inteira em cada TASK. Aponte arquivo e seção. Summary registra estado atual, decisão, evidência, riscos e próximo passo; não reconta todas tentativas descartadas.

## Níveis

LIGHT: 1–3 docs focados + TASK/decisão local.
STANDARD: 3–6 docs para subsistema com fronteiras.
DEEP: 6–10 docs, justificar cada um por contrato/risco.
AUDIT: revisão por passes de subsistemas com resumo durável entre eles; não carregar todos arquivos de uma vez.

Contagem é orientação, não limite que autoriza omitir contrato necessário. Ao aparecer risco novo, subir nível ou trocar doc; índice pode ser consultado sem carregar conteúdo integral.

## Trabalho

Separar auditoria de implementação quando risco/escopo justificar. Commit por fase pequena permite revisão. Subagents apenas quando subtarefa independente traz ganho e autorização/instruções do ambiente permitem; evitar agentes concorrentes editando mesma spec.

Não continuar feature sobre build quebrado sem identificar baseline e isolar trabalho independente. Review compara resultado com contrato e evidência, não tamanho do patch.

## Recuperação

Nova conversa: ler AGENTS, spec relevante, ADRs ativos, TASK atual e último milestone summary. Verificar Git/artefatos antes de assumir que etapa já terminou. Conversa anterior não é única fonte de decisões.

Referências: [router](../../TOPIC_ROUTER.md), [handoff](handoff-and-review.md).
