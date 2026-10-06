# Topologia, split/merge e chunks

[PERFORMANCE] Separar alteração estrutural de transferência evita reconstruir rede para cada operação.

## Versão de topologia

Cada mudança que afeta conectividade aumenta uma revisão. Route cache associa revisão e endpoints; configuração/filtro também possui revisão própria, pois pode mudar elegibilidade sem quebrar cabo.

Inclusão de nó pode unir componentes. Remoção de nó pode dividir: union-find ajuda união, mas não resolve remoção arbitrária sozinho. Rebuild por busca limitada é aceitável para rede pequena; grande rede exige fila/orçamento e publicação de resultado consistente.

## Estado intermediário

Rede em reconstrução pode pausar transferências afetadas; anunciar motivo. Não usar parte do grafo novo com saldo/rota do antigo. Coalescer múltiplas mudanças numa tarefa evita tempestade de eventos; definir demora máxima e fairness entre redes.

Carga de chunk adiciona disponibilidade; unload remove elegibilidade e handles. Topologia lógica salva pode permanecer como coordenadas, mas endpoints ativos vêm apenas dos chunks disponíveis. Acesso não deve forçar chunk como efeito colateral.

## Recursos

Estoque continua no dono físico ou escrow único. Split/merge muda conectividade, não duplica inventários. Itens em trânsito usam posição/progresso e política de retorno ou estacionamento. Restart não repete uma entrega já confirmada.

## Verificação

Quebre ponte no meio de transferência; altere 100 cabos antes da atualização; descarregue um chunk no caminho; mescle duas redes com buffers e compare totais. Observe backlog da manutenção e liberação de referências ao fechar mundo.

Fontes: [lifecycle](../fundamentals/lifecycle-ticks-chunks.md), [estudo de rede](../case-studies/refined-storage/architecture.md). Algoritmos são recomendações, sem benchmark alegado.
