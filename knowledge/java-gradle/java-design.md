# Java útil para arquitetura de mods

[RECOMMENDATION] Use recursos da linguagem para tornar contratos legíveis e estado previsível. Não transforme uma máquina simples em framework genérico.

| Ferramenta | Quando usar | Evitar | Manutenção |
|---|---|---|---|
| Interface | Contrato de recurso/adapter | Interface para cada classe sem variação | Permite substituir integração |
| Composição | Slots, energia e controle independentes | Componentes que acessam tudo do dono | Mudança local e testes menores |
| Herança | Relação estável com lifecycle comum | Árvore por toda combinação de upgrades | Mudança de base pode afetar todos |
| Generics | Container com operações realmente comuns | Tipos genéricos que só funcionam com casts | Detecta incompatibilidade cedo |
| Record | Snapshot/resultado imutável por convenção | Referência a lista mutável sem cópia | Reduz boilerplate e ambiguidade |
| Enum | Conjunto pequeno e fechado de estados | ID externo extensível hardcoded | Switches auditáveis |
| Sealed types | Resultado fechado: sucesso/bloqueio/falha | API pública para addons livremente extensíveis | Exaustividade com custo de evolução |
| Strategy | Matching/routing intercambiáveis | Um plugin system para duas constantes | Política separada do mecanismo |
| Adapter | API de terceiro → contrato próprio | Vazamento de tipos externos no domínio | Isola migração |
| Factory/registry | Criação a partir de definição/ID | Singleton mutable por mundo | Centraliza construção |

[VERSION-SPECIFIC] Disponibilidade de record/sealed depende do Java alvo. Não escolher toolchain pela versão instalada do usuário.

## Coleções e identidade

Map organiza por chave; set impõe unicidade; lista mantém sequência. Hash estável é obrigatório durante presença em map/set: chave mutável quebra busca. equals/hashCode de recurso precisam incluir metadados relevantes, sem comparar por identidade da referência.

Imutabilidade superficial não congela objetos internos. Copies defensivas em fronteiras evitam que caller altere inventário sem dirty/sync. Alocações em caminho quente merecem profiling; não reutilizar objeto mutável compartilhado só para poupar GC.

## Padrões de execução

State machine torna pausa/falha explícitas; observer avisa mudança sem varrer todos; command pode representar intenção auditável, com validação antes de executar. Lazy initialization exige owner, ordem e cleanup; não esconder acesso prematuro ao registro.

Thread safety: dados do mundo não devem ser lidos/mutados livremente em worker. Calcule em snapshot imutável e publique resultado com revisão validada no contexto servidor; locks não tornam API do mundo segura.

Fonte de linguagem: [records Java 21](https://docs.oracle.com/en/java/javase/21/language/records.html). Arquitetura restante é recomendação autoral.
