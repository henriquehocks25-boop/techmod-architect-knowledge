# Matriz de padrões observados

[CASE-STUDY] [VERSION-SPECIFIC] Consulta 2026-10-06. Comparação dos **recortes estudados**, sem ranking e sem benchmark. [Fontes](../../SOURCES.md) fixa ramo e commit por projeto. **NE** significa não examinado; não significa ausência da feature.

## Oito referências industriais

| Tema | Mekanism | AE2 | Create | LaserIO | GregTech | Thermal | Ender IO | MI |
|---|---|---|---|---|---|---|---|---|
| Máquinas | Fábrica com processos locais | NE | NE no recorte cinético | Nó como executor de I/O | Definição e hooks | Pulverizador sobre base | NE | Definição e layout |
| Progressão | Família de tiers; números não fixados | NE | Ensino espacial no README | NE | Tier na definição; balance NE | Augments observados; curva NE | NE | Tiers na doc; curva NE |
| Energia | Buffer compartilhado da fábrica | Serviço do grid; algoritmo NE | Capacidade e stress | Handler de energia | Tipos/capacidades; fluxo NE | Infra herdada não inspecionada | NE | Custo/duração na receita |
| Logística | Transmissores e aceitadores | Serviços/nós; transferência NE | NE | Lados, cartões e caches | NE | Dynamics fora do recorte | Canais e endpoints | NE |
| Storage | NE | Vista em cache e provedores | NE | NE | NE | NE | NE | NE |
| Multiblocos | NE | NE | NE | NE | NE | NE | NE | Exemplo EBF na doc; validação NE |
| UX | Erros por processo no source | Contrato de inventário observável | Ponder e movimento visível | Configuração por lados/cartões | UI na definição | Grupos de slots e áudio | Consulta por canal; tela NE | Slots, tanques e indicadores |
| Performance | Cache/topologia; não medido | Cache de vista; não medido | Agregados/sync; não medido | Caches por face; não medido | Não medido | Não medido | Subconjuntos ativos; não medido | Aviso sobre condições caras; não medido |
| Complexidade | Processos + rede por recurso | Serviços e disponibilidade | Grandezas mecânicas | Configuração por nó/recurso | Muitos hooks/capacidades | Especialização de família | Cache, canal e atividade | Contrato receita/layout |
| Extensibilidade | API específica requer pesquisa | API de serviços observada | Classe interna não é API | Integrações observadas; contrato NE | Definições públicas no ramo | Contrato da base requer pesquisa | API com markers de versão | Política de API pública no README |

Complexidade descreve responsabilidades técnicas observadas, não dificuldade medida para um jogador. UX e progressão não foram avaliadas em sessões de jogo. Uma feature NE precisa de investigação, não de suposição baseada na fama do mod.

## Outras referências

| Estudo | Contribuição do recorte | Limite determinante |
|---|---|---|
| [IndustrialCraft](industrialcraft/overview.md) | Risco elétrico/térmico e unidades | Wiki histórica mistura variantes; sem internals |
| [Refined Storage](refined-storage/overview.md) | Rede por componentes e split/merge | Autocrafting/persistência não traçados |
| [Integrated Dynamics](integrated-dynamics/overview.md) | Lógica, eventos, validade e diagnóstico | Livro 1.21.1 distinto do ramo 26 |
| [Integrated Tunnels](integrated-tunnels/overview.md) | Movimento apoiado em controle lógico | Transferências completas não auditadas |
| [XNet](xnet/overview.md) | Controller ativo e cabos passivos | Source padrão 1.16 histórico |
| [Pipez](pipez/overview.md) | Extração simples e estratégias de distribuição | Benchmark antigo; licença não verificada |

## Extrair padrões sem copiar

[RECOMMENDATION] Os [17 padrões neutros](../architecture/pattern-catalog.md) traduzem responsabilidades, não nomes de classes. Use Machine Core/Component para famílias; Handler/Resource Container/Sided I/O para contratos de acesso; Data-driven Recipe/Upgrade para conteúdo; Graph/Endpoint/Routing para redes; Cache+Invalidation/Dirty State/Performance Budget para custo; Controller/Client Sync/Diagnostics para operação observável; Context Budget para trabalho do Architect.

Antes de importar uma abstração, formule o problema, seus invariantes e o teste que justifica a complexidade. Um triturador simples não precisa do framework de um catálogo industrial completo. Um cache sem invalidadores não é uma otimização segura.

