# GregTech / GTCEu Modern: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [GregTechCEu/GregTech-Modern](https://github.com/GregTechCEu/GregTech-Modern). Ramo consultado: 1.20.1. Source pin: `2787512d27c701ae52d629bfc6cfc16326ab96ce`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [MachineDefinition.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/machine/MachineDefinition.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [GTRecipeType.java](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/src/main/java/com/gregtechceu/gtceu/api/recipe/GTRecipeType.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/GregTechCEu/GregTech-Modern/blob/2787512d27c701ae52d629bfc6cfc16326ab96ce/LICENSE) | Termos de código | Conferir avisos por artefato |

## Licença

LGPL-3.0 no arquivo raiz; revisar condições específicas de documentação, assets e componentes.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.


## Fontes documentais complementares

- [Documentação oficial histórica 1.20.1](https://gregtechceu.github.io/GregTech-Modern/1.20.1/) — consulta 2026-10-06; página móvel, licença documental não verificada. Usada somente no recorte explicitado, sem promessa de API atual.
