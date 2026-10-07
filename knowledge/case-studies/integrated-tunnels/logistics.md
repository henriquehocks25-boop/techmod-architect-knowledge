# Integrated Tunnels: Intenção lógica e transferência

[CASE-STUDY] [VERSION-SPECIFIC] Ramo master-26-lts; commit `14208985d9e1cc3557f68342878e19d63297874b`. Consulta: 2026-10-06. Fontes: [IItemNetwork.java](https://github.com/CyclopsMC/IntegratedTunnels/blob/14208985d9e1cc3557f68342878e19d63297874b/src/main/java/org/cyclops/integratedtunnels/api/network/IItemNetwork.java).

## Evidência e interpretação

O vínculo da API com ingredientes posicionados mostra que recurso e posição participam do contrato. Não informa sozinho o algoritmo de escolha ou a atomicidade da execução.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: lógica seleciona a política; transferência decide uma operação possível sobre endpoints atuais. Filtros não devem causar acesso repetido a cada slot remoto sem orçamento. Na integração, documente reentrada e invalidadores de ambas as redes.

## Verificação e limite

Teste carga ausente, expressão inválida, inserção parcial, prioridade alterada e reload do mundo. Meça custo de avaliar e de mover separadamente; assim um gargalo lógico não é confundido com custo do transporte.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
