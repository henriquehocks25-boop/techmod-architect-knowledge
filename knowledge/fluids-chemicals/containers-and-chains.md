# Fluidos, gases e chemicals

[STABLE] Container guarda identidade e quantidade; transformar recursos é operação distinta de transportá-los.

## Modelo

Tanque define capacidade, taxa, inserção/extração e regra de identidade/componentes. Fluido A não cabe em tanque com B sem receita explícita de mixing. Gás e slurry-like podem ser categorias de recurso ou APIs próprias; não assumir capacidade de fluido comum para chemical de addon.

Pump e valve afetam direção/taxa; filter afeta elegibilidade; pressure é mecânica opcional. Uma rede escalar simplifica primeiro uso, uma rede com pressão gera escolhas de bombeamento e custo maior de simulação. Não atribuir temperatura a identidade inteira do fluido se ela varia por lote sem desenho de mistura.

## Cadeias

Item+fluid+chemical coordena consumo e outputs. Exemplo autoral: minério → suspensão → lavagem → produto + efluente. Subproduto exige tanque e destino; apagar resíduo porque não cabe muda balanceamento e mascara bloqueio.

Conversão entre unidades tem regra e carry persistente. Temperatura média de mistura deve conservar calor abstrato se esse for o contrato. Materiais radioativos são gameplay com owner/risco/permissões, não instruções científicas.

## Segurança e UX

Exibir identidade, quantidade, taxa e bloqueio. Esvaziar tanque é ação explícita e autorizada; auto void só configurado. Redução de capacidade preserva excesso em estado bloqueado ou impede alteração. Colorir gases não basta para distinguir.

## Verificação

Mistura incompatível, tanque vazio, transferência parcial, recipiente retorna container residual, mudança de filtro, unload, recipe multi-output e spill. Testar conversão ida/volta repetida sem ganho.

Fontes: [handlers](../neoforge/resources-handlers-capabilities.md), [Mekanism](../case-studies/mekanism/overview.md), [calor](../heat-thermodynamics/thermal-model.md). Modelo é autoral.
