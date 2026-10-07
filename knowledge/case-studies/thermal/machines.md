# Thermal Series: Especialização sobre base compartilhada

[CASE-STUDY] [VERSION-SPECIFIC] Ramo 1.20.x; commit `24a26758694ba32eb96a8105f080c36e768cd02f`. Consulta: 2026-10-06. Fontes: [MachinePulverizerBlockEntity.java](https://github.com/CoFH/ThermalExpansion/blob/24a26758694ba32eb96a8105f080c36e768cd02f/src/main/java/cofh/thermal/expansion/common/block/entity/machine/MachinePulverizerBlockEntity.java).

## Evidência e interpretação

O pulverizador fornece um recorte concreto de configuração especializada. Os mecanismos herdados ficaram fora do estudo, portanto não se documenta seu protocolo de persistência como fato.

## Modelo transferível

[RECOMMENDATION] Projeto autoral: uma família define estados e recursos comuns; a máquina define matching, conteúdo e apresentação. Só use herança quando o contrato de substituição e o ciclo de vida forem claros; composição pode isolar características opcionais como calor ou catalisador.

## Verificação e limite

Critério de aceite: validação aceita apenas recursos permitidos; automação não retira entrada por uma face de saída; bloqueio aparece na GUI; áudio termina ao parar. Verifique isso na implementação original, não pela leitura da subclasse estudada.

Leia os [limites de generalização](what-not-to-generalize.md) e as [fontes locais](sources.md).
