# Ender IO: limites de generalização

[CASE-STUDY] [OPEN-QUESTION] Aplicar antes de responder sobre integração ou implementação.

Markers de API não provam estabilidade futura. Não extrapolar suporte da linha 1.21.1 para a linha 26.1 em desenvolvimento. Arquivos de teste presentes na árvore não foram executados. A leitura da interface não estabelece garantia de conservação para todos os conduits.

## Licença e artefatos

Unlicense na raiz; documentação possui avisos de assets em caminhos próprios. Revisar cada artefato, inclusive dependências.

Uma licença de código não prova permissão para assets ou dependências. Este estudo usa paráfrases e conclusões próprias, sem importar código, texturas ou modelos.

## Portão de evidência

Uma integração real exige Minecraft, loader, versão do mod e dependências resolvidas, contrato público e teste cliente/servidor. Sem isso, use somente o padrão conceitual. Questões de save, protocolos e benchmark que não foram inspecionadas continuam no [backlog](../../../RESEARCH_BACKLOG.md).

Não extrapolar suporte do ramo, ausência de bugs, thread safety ou resultados de testes. Qualquer afirmação futura deve apontar fonte imutável e método de verificação.
