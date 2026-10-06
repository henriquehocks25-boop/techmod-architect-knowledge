# Formação e validação de multiblocos

[STABLE] Estrutura formada é resultado de validação; não basta salvar boolean “formed”.

## Modelos

Fixed pattern facilita tutorial e diagnóstico. Variable pattern aceita limites de largura/altura/volume e exige definição precisa. Hollow structure valida casca e interior; layered structure valida camadas sem permitir portas onde bloco funcional é necessário.

Controller tem orientação e dono. Ports/hatches/valves expõem interfaces: item, fluido, energia, manutenção. Volume interno e peças afetam capacidades, mas alterar forma não pode apagar saldo.

## Validação

Transforme coordenadas locais em mundo. Classifique erro: peça ausente/incorreta, dimensão inválida, interior obstruído, controller duplicado, porta proibida ou chunk indisponível. Chunk ausente não prova deformação; suspender e reavaliar sem carregar forçadamente.

Primeira formação pode fazer scan limitado; mudanças conhecidas marcam região dirty. Cached formation inclui revisão e disponibilidade. Incremental validation só é correta se eventos capturam tudo relevante; polling limitado pode fechar lacunas.

## Invariantes

Um bloco não pertence a dois controllers incompatíveis. Formação não cria novo inventário a cada scan. Portas não guardam cópia do saldo agregado. Cache não é fonte de verdade. Remoção de peça pode parar processo, mas deve preservar operação comprometida.

## Verificação

Rotação; espelho se permitido; dois controllers; interior errado; blocos iguais por tag; unload de canto; montagem/desmontagem repetida. Diagnóstico aponta posição relativa e ação necessária. Compare scan completo com incremental em sequência aleatória de mudanças.

Fonte de padrões: [máquinas e estrutura](../case-studies/modern-industrialization/architecture.md). Algoritmo é autoral.
