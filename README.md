# TechMod Architect Knowledge Base V2

Biblioteca técnica modular em português para projetar mods de Minecraft Java. O usuário decide a experiência de jogo; o Architect resolve a engenharia; o Codex executa tarefas verificáveis.

Esta biblioteca não contém um mod, implementação Java de gameplay ou pacote de plugin. O repositório era vazio na consulta de 2026-10-06.

## Como consultar

1. Comece pelo [roteador](TOPIC_ROUTER.md), escolha LIGHT, STANDARD, DEEP ou AUDIT.
2. Carregue as decisões do projeto e somente os documentos indicados para a tarefa.
3. Consulte [política de versão](knowledge/neoforge/version-policy.md) antes de propor APIs.
4. Produza uma especificação ou [TASK](templates/TASK.md) com critérios de aceite.
5. Registre decisões duráveis em [ADR](templates/ADR.md) e valide o resultado.

O [índice](KNOWLEDGE_INDEX.md) lista todos os documentos. O [glossário](GLOSSARY.md) traduz conceitos. [Fontes](SOURCES.md), [backlog](RESEARCH_BACKLOG.md) e [auditoria](AUDIT_REPORT.md) delimitam a evidência disponível.

## Organização

- knowledge/: conceitos, decisões, tradeoffs, invariantes e estudos.
- templates/: artefatos preenchíveis para projetos e handoff.
- checklists/: revisão por subsistema.
- playbooks/: execução por objetivo.
- versioned/: somente notas com versão real e evidência; nenhuma API presumida.
- scripts/: auditoria documental reproduzível.

[STABLE] descreve invariantes conceituais, não eternidade de uma implementação. [RECOMMENDATION] é orientação autoral; [CASE-STUDY] é observação delimitada de outro projeto; [VERSION-SPECIFIC] exige a versão e fonte. [OPEN-QUESTION] impede que desconhecimento vire afirmação.

## Limites de uso

Não carregar a biblioteca inteira no chat. Não copiar código, assets ou identidade dos mods estudados. Estudos não equivalem a benchmarks ou auditorias completas de seus internals. A biblioteca não garante compatibilidade de uma versão só porque um projeto está listado.

Leia as [regras de contribuição](CONTRIBUTING_KNOWLEDGE.md).
