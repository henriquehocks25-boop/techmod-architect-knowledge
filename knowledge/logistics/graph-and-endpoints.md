# Grafo e endpoints

[STABLE] Node participa da conectividade; endpoint oferece uma operação. Um bloco pode expor vários endpoints por face/recurso sem ser vários inventários independentes.

## Vocabulário operacional

Adjacency são conexões permitidas; connected component é conjunto alcançável; topology descreve rede; route escolhe caminho; source oferece; sink aceita. Canal pode separar fluxo sem separar fisicamente grafo: filtro de canal não concede ownership.

Não confundir cabo passivo com nó que executa tick. Para transporte instantâneo, muitos segmentos podem existir sem armazenamento/ticker próprio; para trânsito visual ou capacidade por aresta, rota e item em voo precisam de estado.

## Modelo mínimo

Identity do nó: dimensão+posição+tipo/canal quando necessário. Endpoint inclui posição, face, tipo de recurso, disponibilidade e revisão. Handle externo é transitório. Duas faces podem acessar o mesmo inventário; prevenir source=sink e dupla contagem.

Manager por mundo/dimensão conhece topologia e scheduler. Políticas de routing não importam classes concretas de máquinas. Adapter transforma handler de terceiro em contrato interno e informa invalidação.

## Escolhas

Grafo explícito permite debug e split, mas tem memória e rebuild. Busca por vizinhos em rede pequena simplifica início; cache após medir. Índice de endpoints pode evitar visitar milhares de cabos para cada item. Canal multirrecurso requer budgets separados para não deixar itens consumir toda janela de energia.

## Verificação

Ciclo, ponte única, face fechada, duas conexões no mesmo baú, nó em outra dimensão, endpoint removido. Visualizador mostra fonte/sink elegíveis e motivo de rejeição sem expor inventário privado.

Fonte de inspiração: [Ender IO](../case-studies/ender-io/architecture.md), [Pipez](../case-studies/pipez/architecture.md). Modelo é autoral.
