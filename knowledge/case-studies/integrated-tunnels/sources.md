# Integrated Tunnels: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [CyclopsMC/IntegratedTunnels](https://github.com/CyclopsMC/IntegratedTunnels). Ramo consultado: master-26-lts. Source pin: `14208985d9e1cc3557f68342878e19d63297874b`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [IItemNetwork.java](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/src/main/java/org/cyclops/integratedtunnels/api/network/IItemNetwork.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/LICENSE.txt) | Termos de código | Conferir avisos por artefato |

## Licença

MIT no arquivo raiz; a dependência Integrated Dynamics possui seus próprios avisos de terceiros.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.
