# Mineração automatizada e recursos

[RECOMMENDATION] Escolher miner pelo efeito de jogo: escavação visível, busca seletiva ou produção virtual. São sistemas com custos diferentes.

| Modelo | Experiência | Restrição técnica |
|---|---|---|
| Quarry/area miner | Transforma paisagem | Orçamento de scan/quebra, drops e claims |
| Digital miner pattern | Busca por filtro | Índice de candidatos, revalidação e chunk safety |
| Chunk miner | Área fixa | Não assumir que chunk existe/carregado |
| Virtual miner | Produz a partir de recipe/depósito | Sem fingir quebra de mundo; economia explícita |
| Drilling | Consome brocas/energia | Durabilidade, profundidade e produto definidos |

## Recursos

Depletion limita exploração de depósito; infinite resource system transfere desafio a infraestrutura/energia. Recursos por dimensão geram viagem/progressão, mas precisam alternativa se dimensão opcional estiver ausente. Ore generation e depósitos coexistem sem duplicar recompensa de quebra.

Fortune/silk-touch-like são políticas da mineração, não chamadas arbitrárias que somam dois tipos de drop. Replantar/quebrar ciclo deve respeitar loot e eventos da versão.

## Execução segura

Verifique acesso/proteção antes de modificar. Owner ausente/desconectado não autoriza bypass. Revalidar candidato na hora de quebrar; outro jogador pode ter alterado bloco. Saída cheia pausa, em vez de destruir bloco e perder drop.

Scheduler limita scan e operações de mundo separadamente. Lista de candidatos tem limite e validade. Cursor persistente evita recomeçar toda área a cada load; claim negada usa cache/backoff com invalidação, não spam.

## Verificação

Bloco protegido, baú com inventário, fluido, bloco indestrutível, chunk inexistente, output cheio e jogador quebrando mesmo alvo. Comparar materiais, custo e impactos em região limite. Diagnóstico explica negação sem expor dados de outro owner.

Referências: [worldgen](../worldgen/deposits-and-migrations.md), [compatibilidade](../compatibility/adapters-and-contracts.md).
