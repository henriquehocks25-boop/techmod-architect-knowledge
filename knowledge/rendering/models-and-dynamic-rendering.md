# Models e rendering dinâmico

[RECOMMENDATION] Escolha representação pelo movimento necessário e pela quantidade simultânea de objetos visíveis.

## Camadas

Block models/blockstates representam geometria/estados discretos. Item models representam inventário/mão. Dynamic rendering faz partes móveis, gauges ou níveis de fluido; não substituir modelo estático inteiro sem necessidade.

[VERSION-SPECIFIC] BlockEntityRenderer é nome usado em versões como 1.21.1; pipelines, hooks, registro e render layers mudam. Docs padrão 26.1 consultadas possuem seção Rendering/Features. Resolver alvo antes de especificar classe.

## Dados visuais

Animation state deriva de snapshot servidor: ativo, velocidade e instante/revisão. Cliente interpola entre estados; não consulta saldo para autorizar produto. Emissive elements destacam atividade com cuidado de contraste. Fluido usa identidade/nível/tint projetados, sem expor container inteiro.

Custom layers precisam ordenação/transparência corretas na versão. Client-only classes ficam isoladas de bootstrap comum. Instancing é conceito de reutilizar geometria/trabalho por instância; biblioteca adicional exige necessidade medida.

## Performance

Culling, bounds e render distance são escolhas com efeito visual. Partes móveis fora de bounds desaparecem incorretamente; bounds enormes reduzem culling. Distância pode reduzir detalhe, atualizar gauges menos e eliminar partículas. GUI aberta não precisa render de todo grafo.

## Verificação

Uma máquina e fábrica cheia; transparência sobreposta; offscreen; rotação; reconexão; servidor dedicado; recurso inválido com fallback visual. Medir custo no cliente separadamente de tick servidor.

Fontes: [rendering 26.1](https://docs.neoforged.net/docs/rendering/feature/), [BER 1.21.1](https://docs.neoforged.net/docs/1.21.1/blockentities/ber/). Consulta: 2026-10-06; conferir endereço/API antes de implementação.
