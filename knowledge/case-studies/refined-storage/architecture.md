# Refined Storage: fronteiras observáveis

[CASE-STUDY] [VERSION-SPECIFIC] Ramo develop (refinedstorage2), commit `cb95e0869854327f5571613c686eca5da4480358`; consulta 2026-10-06. Base: [Network.java](https://github.com/refinedmods/refinedstorage2/blob/cb95e0869854327f5571613c686eca5da4480358/refinedstorage-network-api/src/main/java/com/refinedmods/refinedstorage/api/network/Network.java).

## Leitura arquitetural

A rede pode compor serviços sem misturar cada serviço à manutenção de conectividade. Split e merge merecem contratos sobre propriedade de estado; a assinatura dessas operações não informa sozinha como jobs ou recursos são reconciliados.

## Tradeoff para um projeto original

[RECOMMENDATION] Diferencie identidade da rede da identidade de um disco/provedor. API em módulo próprio ajuda limitar dependências de addons.

Comece por uma operação vertical verificável antes de montar infraestrutura para todo o catálogo. A responsabilidade que varia deve ter contrato próprio; a que não varia pode permanecer simples. Não deduza as fronteiras de persistência, threading ou protocolo de arquivos que não as documentam.

## Experimento de aceite

Uma ponte é removida durante um pedido e depois recolocada. A proposta passa se cada provedor pertence a uma rede válida, o pedido possui política de recuperação e nenhuma unidade é duplicada ao merge.

Este é um teste proposto ao Architect/Codex, não um resultado executado no projeto fonte. Registre hipótese, setup, métricas e resultado no [template de testes](../../../templates/TESTING.md).
