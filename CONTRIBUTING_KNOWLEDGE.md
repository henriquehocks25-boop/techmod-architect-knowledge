# Contribuir conhecimento

[RECOMMENDATION] O valor de um documento é reduzir uma decisão errada, não aumentar a contagem de arquivos.

## Contrato editorial

Cada documento de domínio informa classificação, escopo, decisões, tradeoffs, invariantes, modos de falha, verificação e fontes. Pode usar tabelas para alternativas; não precisa repetir cabeçalhos sem conteúdo. Referências internas são relativas ao arquivo. IDs e nomes oficiais mantêm grafia original.

## Taxonomia

| Marcador | Uso |
|---|---|
| [STABLE] | Conceito ou invariante independente de uma assinatura |
| [VERSION-SPECIFIC] | Classe, método, configuração, formato ou comportamento de versão |
| [CASE-STUDY] | Observação de projeto externo delimitada por fonte |
| [RECOMMENDATION] | Escolha autoral com condições e tradeoffs |
| [ANTI-PATTERN] | Sintoma, consequência, alternativa e exceção |
| [OPEN-QUESTION] | Evidência ausente, não um fato |
| [SECURITY] | Autoridade, permissões, integridade e entradas hostis |
| [PERFORMANCE] | Trabalho, memória, latência ou orçamento |
| [COMPATIBILITY] | Contrato entre versões, loaders, mods ou packs |

## Pesquisa e atualização

Priorize docs e repositórios oficiais. Registre projeto, URL direta, versão/branch, data da consulta e licença; não herde licença de software para texto ou assets. Use ref imutável quando houver inspeção de código. Links para branches móveis servem para descoberta e precisam de nova consulta antes de implementar.

Afirmação de performance exige cenário, máquina, versão, carga e medição. Sem medição, publique uma hipótese/teste, não superioridade. Uma assinatura presente em docs não é evidência de compilação local.

## Revisão

Leia o módulo vizinho para evitar duplicação. Verifique links, ausência de arquivos vazios e conflitos entre transações, save e unload. Execute a auditoria e revise conteúdo humano, pois um validador de links não prova correção técnica. Registre a mudança no changelog e faça commit pelo tema.
