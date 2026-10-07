# Ender IO: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [Team-EnderIO/EnderIO](https://github.com/Team-EnderIO/EnderIO). Ramo consultado: 1.21.1. Source pin: `18c9377a193b220702461ed1d26ccdd3ca1e7590`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/docs/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [ConduitNetwork.java](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/enderio/src/main/java/com/enderio/enderio/api/conduits/network/ConduitNetwork.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [README.md](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/docs/README.md) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/Team-EnderIO/EnderIO/blob/18c9377a193b220702461ed1d26ccdd3ca1e7590/LICENSE.txt) | Termos de código | Conferir avisos por artefato |

## Licença

Unlicense na raiz; documentação possui avisos de assets em caminhos próprios. Revisar cada artefato, inclusive dependências.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.
