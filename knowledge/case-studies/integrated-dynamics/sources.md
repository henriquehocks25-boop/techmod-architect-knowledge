# Integrated Dynamics: fontes e rastreabilidade

[CASE-STUDY] [VERSION-SPECIFIC] Consulta: 2026-10-06. Projeto oficial: [CyclopsMC/IntegratedDynamics](https://github.com/CyclopsMC/IntegratedDynamics). Ramo consultado: master-26-lts. Source pin: `bb277e753e0b313e722b20dbaac8767c13537931`.

## Documentos consultados

| Fonte | Assunto | Limite |
|---|---|---|
| [README.md](https://github.com/CyclopsMC/IntegratedDynamics/blob/bb277e753e0b313e722b20dbaac8767c13537931/README.md) | Apresentação e escopo oficial | Não prova os internals |
| [INetwork.java](https://github.com/CyclopsMC/IntegratedDynamics/blob/bb277e753e0b313e722b20dbaac8767c13537931/src/main/java/org/cyclops/integrateddynamics/api/network/INetwork.java) | Source/docs inspecionado; escopo descrito no estudo. | Leitura estática; não compilado |
| [Licença raiz](https://github.com/CyclopsMC/IntegratedDynamics/blob/bb277e753e0b313e722b20dbaac8767c13537931/LICENSE.txt) | Termos de código | Conferir avisos por artefato |

## Licença

MIT na raiz; há avisos de bibliotecas incorporadas, incluindo re2j, que devem ser considerados por distribuição.

## Qualidade da evidência

O commit é referência imutável; o nome do ramo é contexto histórico, não promessa de compatibilidade. Observações são leitura dos arquivos listados. As lições e os cenários de teste são recomendações originais. Nenhum benchmark, smoke ou GameTest dos mods foi executado.

Veja [limites](what-not-to-generalize.md). Para novos fatos, registre fonte, versão, data e o comportamento realmente observado.


## Fontes documentais complementares

- [Livro oficial (configuração gerada 1.21.1)](https://integrateddynamics.rubensworks.net/book/) — consulta 2026-10-06; página móvel, licença documental não verificada. Usada somente no recorte explicitado, sem promessa de API atual.
