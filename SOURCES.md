# Fontes principais e registro de consulta

[VERSION-SPECIFIC] Data de consulta desta edição: **2026-10-06**. [Manifesto estruturado](research/source-manifest.json) registra cada URL, escopo, licença, ramo/commit e assunto. Reconsultar fontes móveis antes de responder sobre APIs ou suporte atuais.

## Política de evidência

Prioridade: documentação oficial → repositório oficial → source/javadocs → issues/PRs oficiais → bibliotecas oficiais → secundárias qualificadas. Nesta edição, fatos técnicos vêm de fontes primárias. Fonte lida não equivale a projeto compilado nem teste aprovado. Licença NÃO VERIFICADA permanece aberta; não autoriza cópia.

O seletor NeoForge **26.1** foi observado nas páginas atuais consultadas. As páginas **1.21.1** são explicitamente históricas. Não existe uma versão patch de NeoForge ou matriz de dependências resolvida nesta biblioteca; por isso versioned/ não apresenta padrões “compilados”. Java/Gradle não são universalmente escolhidos pelo número exibido em página current.

## Fundamentos, ferramentas e loader

| Projeto | Fonte | Versão/recorte | Licença registrada | Assunto |
|---|---|---|---|---|
| NeoForge | [Documento](https://docs.neoforged.net/) | Seletor 26.1 observado; páginas históricas explícitas separadas | MIT declarado no site para docs; assets/terceiros verificar | Índice e política de documentação |
| NeoForge | [Documento](https://docs.neoforged.net/docs/concepts/registries/) | 26.1 | MIT docs | Registries, evento e registro diferido |
| NeoForge | [Documento](https://docs.neoforged.net/docs/concepts/sides/) | 26.1 | MIT docs | Lados lógico/físico e autoridade |
| NeoForge | [Documento](https://docs.neoforged.net/docs/inventories/container/) | 26.1 | MIT docs | Containers de itens |
| NeoForge | [Documento](https://docs.neoforged.net/docs/inventories/capabilities/) | 26.1 | MIT docs | Handlers de recursos e energia |
| NeoForge | [Documento](https://docs.neoforged.net/docs/inventories/transactions/) | 26.1 | MIT docs | Transações de recursos |
| NeoForge | [Documento](https://docs.neoforged.net/docs/datastorage/attachments/) | 26.1 | MIT docs | Attachments |
| NeoForge | [Documento](https://docs.neoforged.net/docs/datastorage/saveddata/) | 26.1 | MIT docs | Dados de mundo |
| NeoForge | [Documento](https://docs.neoforged.net/docs/items/datacomponents/) | 26.1 | MIT docs | Data components |
| NeoForge | [Documento](https://docs.neoforged.net/docs/networking/payload/) | 26.1 | MIT docs | Payloads e sincronização |
| NeoForge | [Documento](https://docs.neoforged.net/docs/inventories/menus/) | 26.1 | MIT docs | Menus modernos |
| NeoForge | [Documento](https://docs.neoforged.net/docs/misc/config/) | 26.1 | MIT docs | Tipos e sync de config |
| NeoForge | [Documento](https://docs.neoforged.net/docs/resources/server/recipes/) | 26.1 | MIT docs | Recipes e serialização |
| NeoForge | [Documento](https://docs.neoforged.net/docs/misc/gametest/) | 26.1 | MIT docs | GameTests |
| NeoForge | [Documento](https://docs.neoforged.net/docs/rendering/feature/) | 26.1 | MIT docs | Pipeline de rendering |
| NeoForge | [Documento](https://docs.neoforged.net/docs/worldgen/biomemodifier/) | 26.1 | MIT docs | Biome modifiers e worldgen |
| NeoForge | [Documento](https://docs.neoforged.net/docs/1.21.1/blockentities/) | Minecraft 1.21.1 | MIT docs | BlockEntities históricos |
| NeoForge | [Documento](https://docs.neoforged.net/docs/1.21.1/blockentities/ber/) | Minecraft 1.21.1 | MIT docs | Renderer histórico |
| NeoForge | [Documento](https://docs.neoforged.net/docs/1.21.1/gui/menus/) | Minecraft 1.21.1 | MIT docs | Menus históricos |
| ModDevGradle | [Documento](https://github.com/neoforged/ModDevGradle) | README móvel consultado; resolver release antes de uso | LGPL-2.1 no projeto; docs/avisos específicos conferir | Runs, dependências e setup |
| Java | [Documento](https://docs.oracle.com/en/java/javase/21/language/records.html) | Java SE 21 | Termos da documentação Oracle; não verificados para reutilização | Records como recurso de linguagem |
| Gradle | [Documento](https://docs.gradle.org/current/userguide/gradle_wrapper.html) | current móvel, 9.8.0 observado; não alvo universal | Licença da documentação não verificada | Wrapper e reprodutibilidade |
| Blockbench | [Documento](https://www.blockbench.net/) | Site móvel; fixar exportador para projeto | Software GPL; export/asset dependem do artefato | Ferramenta de modelagem |
| SemVer | [Documento](https://semver.org/) | SemVer 2.0.0 | Termos do texto não verificados | Versionamento semântico |

## Mods como estudos delimitados

| Projeto | Fontes locais | Ramo/commit consultado | Licença e limites |
|---|---|---|---|
| Mekanism | [Source e docs](knowledge/case-studies/mekanism/sources.md) | 1.21.x; bcd7a8bf594c | MIT no LICENSE consultado; conferir avisos por asset e dependência antes de reutilizar qualquer artefato. |
| Applied Energistics 2 | [Source e docs](knowledge/case-studies/ae2/sources.md) | main; de2b845e9d1e | Código LGPL-3.0, API MIT conforme README e cabeçalhos; assets CC BY-NC-SA 3.0, texto/traduções CC0 e alguns sons CC BY 4.0. Não reduzir o projeto a uma única licença. |
| Create | [Source e docs](knowledge/case-studies/create/sources.md) | mc1.21.1/dev; a927008632b5 | Código MIT; o LICENSE.md reserva direitos sobre src/main/resources/assets/. Estudar organização não autoriza copiar modelos, texturas ou animações. |
| LaserIO | [Source e docs](knowledge/case-studies/laserio/sources.md) | main; 4d278a6351a4 | MIT no LICENSE.txt consultado; revisar licenças de integrações e assets separadamente. |
| GregTech / GTCEu Modern | [Source e docs](knowledge/case-studies/gregtech/sources.md) | 1.20.1; 2787512d27c7 | LGPL-3.0 no arquivo raiz; revisar condições específicas de documentação, assets e componentes. |
| Modern Industrialization | [Source e docs](knowledge/case-studies/modern-industrialization/sources.md) | 1.21.x; a4c678edb916 | Código MIT e assets CC0 conforme README; revisar terceiros e exemplos antes de reutilização. |
| Thermal Series | [Source e docs](knowledge/case-studies/thermal/sources.md) | 1.20.x; 24a26758694b | README declara CoFH Don't Be a Jerk License v2, com direitos reservados e condições próprias. Não classificar como MIT nem copiar trechos sem leitura integral dos termos. |
| Ender IO | [Source e docs](knowledge/case-studies/ender-io/sources.md) | 1.21.1; 18c9377a193b | Unlicense na raiz; documentação possui avisos de assets em caminhos próprios. Revisar cada artefato, inclusive dependências. |
| Refined Storage | [Source e docs](knowledge/case-studies/refined-storage/sources.md) | develop (refinedstorage2); cb95e0869854 | MIT no LICENSE.md consultado; verificar avisos por dependência e assets. |
| Integrated Dynamics | [Source e docs](knowledge/case-studies/integrated-dynamics/sources.md) | master-26-lts; bb277e753e0b | MIT na raiz; há avisos de bibliotecas incorporadas, incluindo re2j, que devem ser considerados por distribuição. |
| Integrated Tunnels | [Source e docs](knowledge/case-studies/integrated-tunnels/sources.md) | master-26-lts; 14208985d9e1 | MIT no arquivo raiz; a dependência Integrated Dynamics possui seus próprios avisos de terceiros. |
| XNet | [Source e docs](knowledge/case-studies/xnet/sources.md) | 1.16 (ramo padrão histórico consultado); 0ca5b08e451f | MIT no LICENSE consultado; confirmar avisos do artefato alvo. |
| Pipez | [Source e docs](knowledge/case-studies/pipez/sources.md) | master; 8d255aa462bc | [OPEN-QUESTION] Nenhum arquivo de licença raiz foi identificado na árvore consultada. Licença de distribuição e assets NÃO VERIFICADA; a presença pública do source não autoriza cópia. |
| IndustrialCraft | [Wiki e limites](knowledge/case-studies/industrialcraft/sources.md) | Histórico; sem commit/build fixado | Software e wiki não verificados |

As fontes locais contêm URLs de arquivos imutáveis; o [manifesto](research/source-manifest.json) reúne seus metadados. Internals não inspecionados não viraram fatos. O conjunto de estudos não fornece benchmark comparativo, garantia de ausência de falhas ou permissão de copiar assets.

## Atualização

Quando uma API mudar, atualize fonte, seletor/versão e documento afetado; preserve a distinção histórico/atual. Publique um perfil em versioned/ apenas após resolver a matriz e executar testes adequados. Registre novas lacunas no [backlog](RESEARCH_BACKLOG.md).

Licenças indicadas descrevem o recorte consultado, não um parecer para redistribuir todos os artefatos do projeto. A documentação desta base é texto original; source foi consultado como evidência, sem cópia de implementação.
