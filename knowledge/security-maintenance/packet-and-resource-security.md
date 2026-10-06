# Segurança de packets e recursos

[SECURITY] Mundo e inventários pertencem ao servidor. Inputs do cliente e dados externos são não confiáveis.

## Validação

Alvo existe/está disponível; distância/contexto de menu; owner/permissão; ação permitida; enum/ID conhecido; comprimentos e listas limitados; quantidade não negativa; custo/duração dentro da faixa; aritmética com overflow verificado.

Decode de payload pode alocar antes da lógica: limitar tamanho/lista no codec da versão. Rate limits separam ações baratas de scan/crafting caro. Não refletir input ilimitado no log nem revelar estoque privado em erro.

## Duplication safeguards

Uma entrega muda saldo uma vez. Não confiar em quantidade “aceita” impossível de terceiro. Sem transação real, escrow guarda sobra; simular não bloqueia container. Cópia de disco/cartão de config não copia ownership de saldo.

Wireless revalida acesso; frequência não autentica. Cliente não escolhe custo final nem resultado de chance. Multi-GUI revalida revision/saldo. Config inválida não permite custo negativo/parallel infinito.

## Manutenção

Dependências oficiais, versões fixadas, revisão de transitive/artefatos e licença. Não publicar credenciais Maven/GitHub. Biblioteca de regex/parse em campo configurável pode consumir CPU/memória; escolher contrato limitado e revisar supply chain.

## Verificação

Negative counts, máximo numérico, payload repetido, lista enorme, menu encerrado, chunk unloaded, outro owner, servidor dedicado e handler reentrante. Saldo sem alteração em ação negada; resposta sem informação privada.

Fontes: [payloads](https://docs.neoforged.net/docs/networking/payload/), [transactions](https://docs.neoforged.net/docs/inventories/transactions/); recomendações de segurança são autorais, não auditoria de repositório externo.
