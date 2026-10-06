# Preparar Codex e revisar resultado

[RECOMMENDATION] Handoff reduz ambiguidade sem impedir escolhas técnicas locais.

## Preparar

Resultado perceptível, não objetivos, versão resolvida, contexto mínimo, contrato de estado/recursos, boundary de client/save/rede, testes e documentação a atualizar. Tarefa pequena completa verticalmente fluxo útil: registro → operação → IO → persistência → diagnóstico, com placeholder visual temporário apenas no projeto quando aprovado.

Não exigir assinatura não verificada. Dizer “usar handler da versão alvo, respeitando inserção parcial e invalidação” quando contrato basta. APIs externas têm fonte/ref/versão.

## Revisar

Checar resultado contra critérios de aceite; testes adequados realmente executados; build íntegro; dedicated server; save/load; ausência de dupla propriedade; limites por tick; integrações ausentes. Reportar limitações sem inventar evidência.

Mudança de arquitetura atualiza ADR/spec antes de fechar tarefa. Não premiar refactor unrelated. Performance exige antes/depois mesmo cenário. UI precisa observação de comportamento, não só screenshot de barra bonita.

## Resposta de fechamento

O que mudou e por quê; como foi validado; riscos/limites e próximo milestone. Usuário recebe português simples; technical evidence fica nos docs/logs. Não pedir escolha de implementação que já foi autorizada e não altera experiência.

Referências: [TASK](../../templates/TASK.md), [TESTING](../../templates/TESTING.md), [patterns](../architecture/pattern-catalog.md).
