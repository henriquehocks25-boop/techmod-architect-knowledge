# Applied Energistics 2: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [AppliedEnergistics/Applied-Energistics-2](https://github.com/AppliedEnergistics/Applied-Energistics-2). Ramo consultado: main. Source pin: `de2b845e9d1e5ac137e05018e5fa1dbd9e58d427`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [IGrid.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/IGrid.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [IStorageService.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/storage/IStorageService.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/LICENSE) | Termos de código | Conferir avisos por artefato |

## Licença

Código LGPL-3.0, API MIT conforme README e cabeçalhos; assets CC BY-NC-SA 3.0, texto/traduções CC0 e alguns sons CC BY 4.0. Não reduzir o projeto a uma única licença.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.
