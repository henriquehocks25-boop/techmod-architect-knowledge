# IndustrialCraft: energia com risco e infraestrutura

[CASE-STUDY] [VERSION-SPECIFIC] Wiki histórica, consulta 2026-10-06; build exato não estabelecido. Fonte: [EU](https://wiki.industrial-craft.net/index.php?title=EU) e [Cable](https://wiki.industrial-craft.net/index.php?title=Cable).

## Observação delimitada

EU é uma unidade do sistema elétrico descrito. A documentação discute transferência, potência/taxa e pacotes de energia. Há sobreposição de explicações de versões e avisos; não se conclui uma equivalência universal entre EU/t, tensão, amperagem e EU/p.

## Modelo original de design

[RECOMMENDATION] Ao criar energia industrial, escolha explicitamente se risco vem de tensão incompatível, calor por sobrecarga ou capacidade insuficiente. Apresente unidades e limites nos cabos e consumidores. O jogador precisa prever uma falha antes de pagar por ela.

Um modelo de tiers pode funcionar sem simular pacotes históricos. Transformadores devem ter direção, limite e perda documentados; conversão com outra energia usa adapter e evita ciclos com ganho líquido. Não somar buffers de energia e capacidade instantânea de transmissão como uma só quantidade.

## Aceite proposto

Teste consumidor incompatível, cabo saturado, transformer invertido, fonte ligada sem demanda e reconexão de storage. Verifique que erro tem causa legível e que taxa, saldo e limite usam unidades consistentes. Não são testes executados em IC2.
