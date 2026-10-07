# IndustrialCraft: reator como decisão de risco

[CASE-STUDY] [VERSION-SPECIFIC] Wiki oficial histórica, consulta 2026-10-06; [Nuclear Reactor](https://wiki.industrial-craft.net/index.php?title=Nuclear_Reactor). Os trechos de variantes não podem ser combinados como um único comportamento.

## Observação de gameplay

A documentação relaciona combustível, produção de calor e componentes de resfriamento. Distingue ventilar calor, trocar calor e ampliar tolerância; descreve falha por superaquecimento. Não foram verificados algoritmos, números ou protocolos de servidor.

## Design transferível

[RECOMMENDATION] Separar geração, transporte de calor, resfriamento e capacidade térmica cria escolhas distintas. Capacidade atrasa a emergência; não substitui resfriamento sustentado. SCRAM interrompe geração conforme regra do projeto, mas não precisa apagar instantaneamente o calor acumulado.

Faça o ciclo de combustível e resíduos ter finalidade na progressão. Risco configurável precisa indicar o alcance e o efeito da falha, sobretudo em multiplayer. Alarmes e limites de operação aparecem antes da destruição. Não exigir cálculo de física real para configurar uma instalação segura.

## Aceite proposto

Interrompa coolant, desligue o combustível, encha a saída de resíduos e descarregue a estrutura. O teste verifica prioridade das proteções, conservação e política explícita para pausa em chunks descarregados. Falta evidência para afirmar como qualquer IC2 específico responde a esses casos.
