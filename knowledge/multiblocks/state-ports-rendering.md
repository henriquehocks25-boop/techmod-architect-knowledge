# Estado agregado, portas e apresentação

[RECOMMENDATION] Controller ou objeto persistente proprietário possui recursos. Portas são vistas controladas desse estado.

## Agregação

Inventário pode ser centralizado ou distribuído fisicamente. Centralizado simplifica contabilidade; distribuído preserva responsabilidade das peças mas exige indisponibilidade parcial. Defina como saída fica acessível quando porta/controller é removido.

Network exposure mostra capacidade de recurso pela porta com regras sided/owner. Nunca oferecer duas portas como saldos independentes quando apontam ao mesmo tanque. Identidade de storage compartilhado permite evitar dupla contagem em redes externas.

Maintenance port é opção de design, não obrigação. Falha de manutenção com pausa precisa de mensagem e caminho automatizável; desgaste escondido frustra diagnóstico.

## Save/load

Salvar schema do dono, referências de peças e operação. Load valida estrutura antes de disponibilizar porta. Graph, handlers e soma derivada são reconstruídos. Ao diminuir volume, excedente fica preservado com bloqueio ou exige descarregar antes.

## Rendering e UX

Renderer observa formação, atividade e parâmetros resumidos. Formation animation não confirma processamento no servidor. Culling e limites de tamanho evitam render gigante; bounds corretos evitam desaparecer ao olhar controller fora de vista.

Erro localizável: “camada 2, coluna 3: porta de saída exigida”. Overlay usa ícone/texto e pode ser limitado a quem possui acesso. Preview de montagem não precisa carregar todos chunks.

## Verificação

Abrir GUI pela porta, remover controller, descarregar porta durante transferência, alterar volume cheio e restabelecer. Total permanece único, telas fecham/reconciliam e capabilities invalidam.

Referências: [integridade](../logistics/transfer-integrity.md), [rendering](../rendering/models-and-dynamic-rendering.md).
