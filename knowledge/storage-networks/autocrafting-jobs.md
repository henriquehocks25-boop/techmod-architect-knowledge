# Autocrafting: planning, jobs e reservas

[RECOMMENDATION] Planejamento de pedido e execução são fases separadas. Recipe válida não garante recursos ou máquina disponível.

## Planning

Pattern encoding associa inputs/outputs e tipos. Grafo de dependências precisa detectar ciclos, limitar profundidade/expansão e distinguir ingredientes faltantes de receita impossível. Catalisador e byproduct alteram contabilidade: não tratar cada output como produto independente sem custo compartilhado.

Planejar por snapshot com revisão permite trabalho limitado fora do caminho quente; commit revalida disponibilidade. CPU/job scheduling é abstração de capacidade de execução, não thread arbitrária lendo mundo.

## Reserva

Job tem ID, owner, destino, quantidade e estado. Reservar retira disponibilidade para outros jobs, sem duplicar saldo total. Inputs ficam no storage proprietário ou escrow do job; não ambos como recursos livres.

Execute passos com budgets e dependências satisfeitas. Output de processamento externo só confirma após reconhecer resultado esperado; timeout não autoriza criar produto. Cancelar devolve somente saldo existente; itens já consumidos não reaparecem.

## Persistence

Salvar jobs comprometidos, reservas e entregas pendentes. Load revalida máquina/provider e recipe policy. Planejamento transitório pode ser reconstruído; operação já executada não pode reaparecer como pendente sem idempotência.

## UX

Mostrar faltantes, máquina indisponível, etapa bloqueada, recursos reservados e cancelamento. Pedido pequeno não deve aguardar expansão gigantesca de outro sem fairness. Job malicioso/extremo precisa rejeição por limites, não travar servidor.

## Testes

Dois jobs mesmo input; recipe cíclica; catalisador único; output de chance; máquina removida; cancelamento em cada etapa; restart depois de extrair e antes de entregar. Verificar conservação e nenhuma reserva órfã.

Referências: [storage](storage-accounting.md), [recipe models](../recipes-processing/recipe-models.md).
