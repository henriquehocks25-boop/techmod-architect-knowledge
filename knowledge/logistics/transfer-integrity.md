# Integridade de transferências

[SECURITY] Toda transferência deve conservar recursos entre origem, escrow, destino e perdas explícitas. Simulação é consulta; nunca prova de transação.

## Quando há transação real

[VERSION-SPECIFIC] Docs NeoForge 26.1 possuem API de Transactions; use somente após verificar participantes, commit/rollback e hooks da versão. Nem todo adapter de terceiro participa do mesmo contrato. Rollback de container não desfaz automaticamente efeitos externos.

## Contrato legado ou heterogêneo

1. Verificar endpoints vivos, permissões e budget.
2. Consultar aceitação sem modificar.
3. Extrair no máximo o planejado para escrow controlado pelo executor.
4. Inserir quantidade real aceita no destino.
5. Manter sobra em escrow ou devolver conforme contrato.
6. Registrar resultado e invalidar projeções afetadas.

A inserção não pode criar recurso antes da extração. Se retorno à origem falha, não apagar sobra: escrow persistente com limite e diagnóstico. Inserção parcial retorna residual e quantidade aceita consistentes; validação detecta retorno impossível. Endpoint malcomportado não pode ser “corrigido” criando pilhas.

## Atomicidade e crash

Operações coordenadas no servidor evitam concorrência de thread, mas callbacks podem reentrar. Uma transação em memória não torna dois chunks atomicamente persistentes no disco. Garantia contra crash abrupto exige desenho adicional de journal/idempotência com recuperação ou assumir explicitamente limite de garantia.

Não prometer exactly-once entre mundos/processos sem protocolo. Wireless entre dimensões no mesmo servidor ainda precisa owner e estado persistente. Job ID impede repetir confirmação lógica, mas não resolve todo tear de save.

## Verificação

Destino aceita metade; origem não recebe retorno; handler troca durante execução; callback tenta reentrar; unload ocorre antes do próximo job; restart com escrow. Comparar saldo total por identidade/componentes, incluindo itens em trânsito.

Fonte: [Transactions 26.1](https://docs.neoforged.net/docs/inventories/transactions/). Protocolo de fallback é recomendação autoral e exige testes de adapter.
