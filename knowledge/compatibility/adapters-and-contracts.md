# Compatibilidade, adapters e integrações opcionais

[COMPATIBILITY] API pública define contrato; existência de classe interna não promete estabilidade.

## Matriz de integração

Capabilities/handlers para item/fluido/energia; tags para equivalência; recipe viewers para apresentação; computer mods para controle; storage mods para providers; protection mods para autorização; performance mods para coexistência de scheduler/rendering.

Soft dependency deve permitir ausência; hard dependency só se feature não tem sentido sem mod base. Compile-only sem runtime compatível não é integração completa. Adapter contém imports externos e é ativado após disponibilidade confirmada.

## Regra

Nunca acessar internals de outro mod sem necessidade demonstrada. Se API pública não cobre caso, documente alternativa, ref de código, risco e custo de migração; preferir discutir extensão pública ou reduzir feature a reflection frágil.

Sided IO, simulação/transação, quantidade aceita e metadados são contratos de interoperabilidade. Tag compartilhada não torna todos recursos equivalentes em recipe que exige componente. Conversões energéticas não podem formar ciclo lucrativo.

## Compatibilidade de pack

Recipe conflicts têm prioridade e diagnóstico. Configs e datapacks conseguem adaptar progression sem desligar registros arbitrariamente. Integrar claims antes de quebrar bloco. Performance mod não compensa scan ilimitado próprio.

## Verificação

Mod opcional ausente; versão mínima/máxima declarada; viewer ausente; handler parcial; tag reload; pack muda recipe; servidor dedicado; bibliotecas transitivas em conflito. Publicar somente ranges sustentados por testes.

Fontes: [capabilities oficiais](https://docs.neoforged.net/docs/inventories/capabilities/), [version policy](../neoforge/version-policy.md). Consulta: 2026-10-06.
