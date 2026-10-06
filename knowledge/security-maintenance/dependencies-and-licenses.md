# Dependências, licenças e manutenção

[COMPATIBILITY] Dependência é compromisso de distribuição e manutenção. Conveniência isolada não basta para adotá-la.

## Registro

Necessidade; alternativa própria/sem feature; loader; Minecraft; versão do artefato; fonte/repository; licença de código e assets; manutenção observada; transitive deps; compile/runtime/bundled; risco; custo de migração e plano de saída.

## Escolhas

Hard dependency quando produto não existe sem base. Soft integration quando melhora ecossistema mas pode faltar. Adapter mantém tipos externos fora do domínio e permite remover integração sem reescrever máquina.

Manutenção é observação com data: atividade do repo não prova suporte à versão alvo nem SLA. Definir range testado e bloquear incompatibilidade conhecida. Dependency change exige verificar JAR distribuível e servidor.

## Licenças como evidência

Registrar termos presentes na fonte, sem assumir que README antigo cobre todos assets. AE2 distingue API/código/assets; Create distingue código e assets; Thermal contém termos próprios. Nenhum código/asset externo foi copiado para esta KB.

Licença não verificada fica marcada e bloqueia escolha concreta de redistribuição até pesquisa. Não inventar MIT para preencher tabela. Não aplicar licença a esta biblioteca por herança dos projetos citados; decisão editorial de licença própria cabe ao proprietário.

## Verificação

Gerar grafo de dependências, detectar conflitos/exclusions/bibliotecas duplicadas e confirmar origem dos artefatos. Revisar upgrade com breaking changes e fixture de integração. Documentar por que biblioteca de animação/profiling vale seu custo.

Fontes locais de licença e refs estão em [SOURCES](../../SOURCES.md); use [template](../../templates/DEPENDENCY_REVIEW.md).
