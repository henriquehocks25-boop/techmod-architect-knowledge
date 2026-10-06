# Gradle, Wrapper e ModDevGradle

[STABLE] Build reproduzível depende de versão fixada, fontes confiáveis e artefatos equivalentes entre desenvolvimento e distribuição.

## Diagnóstico pelos arquivos

Wrapper fixa distribuição; settings.gradle organiza projetos/plugins/repos; build.gradle declara lógica/tarefas; gradle.properties centraliza propriedades. Version catalog pode padronizar dependências em projetos maiores; não é necessário para uma dependência.

Não usar Gradle global como substituto do Wrapper. Java que executa Gradle e toolchain que compila podem ser diferentes: verificar ambos. IDE importa o projeto, não estabelece contrato de release.

## Dependências

Compile-only não inclui runtime. Runtime de dev não prova que JAR final contém biblioteca necessária. Embedded/Jar-in-Jar exige licença e resolução de conflitos. Dependency transitiva pode introduzir loader, versão ou licença inadequada.

Inspecione grafo e dependency insight antes de excluir transitive. Exclusion sem compreender usuário do símbolo pode produzir NoClassDefFoundError somente no release. Repo de artefatos deve ser oficial, com escopo/grupo limitado quando possível; pinning evita mudança invisível.

## Operação

[VERSION-SPECIFIC] ModDevGradle configura ambiente NeoForge e runs. runClient, runServer, runData e gameTestServer são exemplos de nomes/tipos a confirmar no projeto; não afirmar que todas tasks existem. Consultar README e breaking changes do plugin na versão resolvida.

Build/test/datagen são verificações diferentes. CI deve rodar do checkout limpo, usar Wrapper, armazenar logs e validar saída gerada. Segredos Maven ficam fora do repositório; não colar tokens em relatório.

## Troubleshooting

Separe resolução/download, configuração, compilação, datagen e runtime. Leia primeira causa útil e cadeia “caused by”. Alterar várias versões simultaneamente perde causalidade. Limpar todos caches não corrige erro de assinatura nem licença.

Fontes: [Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html), [ModDevGradle](https://github.com/neoforged/ModDevGradle). Consulta: 2026-10-06. [Dependency review](../../templates/DEPENDENCY_REVIEW.md).
