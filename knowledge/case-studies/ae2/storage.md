# Applied Energistics 2: Inventário lógico e snapshots

[CASE-STUDY] [VERSION-SPECIFIC] Ramo main; commit `de2b845e9d1e5ac137e05018e5fa1dbd9e58d427`. Consulta: 2026-10-06. Fontes: [IGrid.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/IGrid.java), [IStorageService.java](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/de2b845e9d1e5ac137e05018e5fa1dbd9e58d427/src/main/java/appeng/api/networking/storage/IStorageService.java).

## Evidência e interpretação

A fonte IStorageService delimita um cache para observação. Seu contrato não autoriza mutação pelo consumidor. A atualização do índice visual e o commit de uma retirada são responsabilidades distintas.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: terminal consulta páginas de resultados; servidor valida pedido contra provedores atuais. Snapshot tem geração para invalidar paginação após mudanças. Contagem total precisa tratar overflow e identidade de recurso; segurança filtra resultados antes de enviá-los.

## Verificação e limite

Autocrafting requer reserva, job, cancelamento e recuperação; essas partes não foram inspecionadas no AE2. Use a biblioteca neutra de armazenamento para especificá-las e pesquise internals em commit exato antes de atribuir um comportamento ao mod.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
