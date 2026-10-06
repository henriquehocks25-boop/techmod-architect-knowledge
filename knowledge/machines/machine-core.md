# Machine Core Pattern

[RECOMMENDATION] Núcleo de máquina coordena processo, não implementa todos os recursos. Componentes separados podem cuidar de slots, tanques, buffer de energia, upgrades, calor e controle.

## Ciclo de uma operação

1. Detectar inputs e versão de recipes.
2. Encontrar recipe e validar inputs, outputs e requisitos.
3. Comprometer uma operação: identidade da receita, quantidades, duração/custo e resultado probabilístico.
4. Reservar ou mover entradas para escrow próprio conforme contrato.
5. Avançar apenas se recursos por tick e controles permitirem.
6. Entregar output uma única vez, liberar reservas e marcar dados alterados.

Reserva no inventário sem impedir extração externa não é reserva. Consumo no início simplifica lock de inputs, mas exige escrow persistente e devolução/cancelamento. Consumo no fim facilita pausa, mas exige validar e proteger entradas durante o processo. Escolha antes de implementar.

## Lifecycle

Criação fornece defaults; load lê schema; ativação descobre adapters; tick coordena; unload libera handles; remoção define drops e escrow; save registra processo e recursos sem duplicação.

Recipe lookup não deve percorrer todo catálogo idle. Inputs, tag/recipe reload, modo e upgrade são invalidadores. Se upgrade altera duração, defina se operação usa parâmetros iniciais ou recalcula progresso proporcional; não ganhar produto ao remover upgrade repetidamente.

## Limites

Output blocking pausa ou mantém output comprometido em buffer privado. Nunca consumir entrada repetidamente tentando concluir. Calor e manutenção podem continuar em pausa: pausa de receita não significa suspensão física total.

Config de máquina inclui faces, filtros, redstone, recipe lock e auto eject; persistir por posição. Sync apresenta causa, progresso e recursos relevantes, não cópia completa do save.

## Verificação

Operação custa 1 entrada e gera 2 saídas: interrompa em cada transição e confirme conservação de inputs+escrow+produto. Automação retira slot enquanto GUI aberta; reload remove recipe; remove bloco no último tick. Resultado nunca aparece duas vezes.

Use [estados](states-and-lifecycle.md), [recipes](../recipes-processing/lookup-and-cache.md) e [checklist](../../checklists/machine.md). Fundamentação documental: [BlockEntities](https://docs.neoforged.net/docs/1.21.1/blockentities/); protocolo é autoral.
