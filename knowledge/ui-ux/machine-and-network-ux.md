# UX de máquinas, redes e primeiro uso

[RECOMMENDATION] Jogador precisa entender o que falta, onde falta e como resolver. Uma barra vermelha sozinha não comunica causa.

## Layout

Entrada à esquerda, saída à direita e fluxo visível são convenções úteis, não obrigatórias. Slots de catalisador/upgrade têm ícone e tooltip. Progress bar representa operação; energy bar mostra saldo e taxa necessária; fluid tanks mostram identidade e capacidade.

Tabs separam processamento, faces, upgrades e diagnóstico. Side configuration usa desenho da orientação local com preview no mundo; não pedir ao jogador saber direção Java.

## Feedback

Mensagens: sem receita, falta quantidade, sem energia, saída cheia, redstone pausa, estrutura inválida, sem permissão e chunk indisponível. Ordem previsível da causa principal e detalhes secundários reduzem confusão.

Network monitor mostra taxa pedida/aceita, retries e roteamento. Multiblock diagnostic localiza peça com texto e overlay. Tooltips explicam requisito desbloqueado, não só número. “Fácil de aprender” é avaliado no primeiro uso, não número de telas.

## Acessibilidade

Informação por cor também possui ícone/texto. Contraste, foco, localização, escala e tooltips sem truncamento. Avisos sonoros têm alternativa visual; animação intensa pode ser reduzida. Ação destrutiva diferencia limpar filtro de destruir conteúdo.

## Recipe viewers

JEI/EMI/REI são categoria de integração opcional [VERSION-SPECIFIC]. Viewer mostra receitas e usos, catalisadores, chances e custos; fluxo principal deve funcionar quando ausente. UI não deve executar recipe por confiar no viewer.

## Verificação

Pessoa sem programação monta fluxo e resolve output cheio, face errada e falta de energia. Dois usuários editam configuração; mostrar conflito/estado confirmado. Teste tradução longa e números grandes.

Referências: [estados](../machines/states-and-lifecycle.md), [template](../../templates/UX_SPEC.md).
