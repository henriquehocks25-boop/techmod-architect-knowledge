# Mekanism: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [mekanism/Mekanism](https://github.com/mekanism/Mekanism). Ramo consultado: 1.21.x. Source pin: `bcd7a8bf594cff9614eb12238fe3776f19da24d9`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [DynamicNetwork.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/lib/transmitter/DynamicNetwork.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [TileEntityFactory.java](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/src/main/java/mekanism/common/tile/factory/TileEntityFactory.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/mekanism/Mekanism/blob/bcd7a8bf594cff9614eb12238fe3776f19da24d9/LICENSE) | Termos de código | Conferir avisos por artefato |

## Licença

MIT no LICENSE consultado; conferir avisos por asset e dependência antes de reutilizar qualquer artefato.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.


## Fontes documentais complementares

- [Wiki Factory: divergência de tiers](https://wiki.aidancbrady.com/wiki/Factory) — consulta 2026-10-06; página móvel, licença documental não verificada. Usada somente no recorte explicitado, sem promessa de API atual.
- [Configuração de máquina](https://wiki.aidancbrady.com/wiki/Machine_Configuration) — consulta 2026-10-06; página móvel, licença documental não verificada. Usada somente no recorte explicitado, sem promessa de API atual.
