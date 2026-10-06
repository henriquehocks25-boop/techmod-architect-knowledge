# Fronteiras de um tech mod

[RECOMMENDATION] Separe responsabilidades quando suas mudanças têm causas diferentes. Máquina pequena pode usar poucas classes; família extensa precisa de componentes sem transformar tudo em infraestrutura global.

## Dependências permitidas

```text
Definições de conteúdo → registro/adapters do jogo
Máquina → domínio de processamento → contratos de recursos
Logística → contratos de endpoints → adapters
Save / rede → projeções explícitas do domínio
Rendering / GUI → snapshots cliente
Integrações opcionais → APIs externas + contratos internos
Domínio puro → nenhuma screen, renderer ou classe de terceiro
```

Configuração validada entra como política; não é lida de arquivo a cada operação. Registries/factories criam tipos, serviços coordenam ciclo de vida e componentes guardam responsabilidades locais. Public API expõe operações e eventos com semântica, não campos privados.

## State ownership

Um inventário tem um dono. Manager de rede não deve salvar uma segunda cópia das pilhas que já pertencem às máquinas. Persistência salva verdade; networking envia projeção; rendering interpola. Eventos dirty avisam mudança sem assumir que todos os observadores precisam de toda informação.

Data-driven content permite recipes/upgrades configuráveis, mas schema tem limites de quantidade e complexidade. Feature flags controlam disponibilidade; preservar IDs quando conteúdo já pode estar em saves.

## Sinais de problema

BlockEntity importa tela, rede de tubos e API de todos os addons. Alterar custo de energia quebra rendering. Regra de slot duplicada em GUI/hopper/tubo. Manager singleton guarda mundo encerrado. Para corrigir, mova regra para dono único e crie adapters, sem refatorar unrelated code na mesma tarefa.

Abstração prematura aparece em interfaces usadas uma vez, reflection para poucas variantes e condicionais que exigem conhecer todas as máquinas. Extraia contrato após segunda variação real; mantenha invariantes comuns desde início.

## Verificação

Desenhe grafo de dependências e teste domínio sem inicializar jogo. Remova mod opcional e inicie servidor. Alteração de schema não deveria exigir editar renderer. Use [ADR](../../templates/ADR.md) para custos aceitos.

Base conceitual: [Java e composição](../java-gradle/java-design.md), [fontes oficiais](../../SOURCES.md).
