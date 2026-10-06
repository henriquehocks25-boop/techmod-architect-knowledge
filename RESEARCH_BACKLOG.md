# Research backlog

[OPEN-QUESTION] Pendências específicas de evidência; a base conceitual continua utilizável.

| Prioridade | Pesquisa | Evidência necessária | Critério de conclusão |
|---|---|---|---|
| P0 | Alvo real de projeto | Minecraft, loader, Java, Wrapper, plugin, dependências | Matriz coerente e build + servidor dedicado |
| P0 | Transação entre handlers de terceiros | API e contrato do mod na versão exata | Teste de aceitação parcial, rejeição e unload sem perda/dupe |
| P1 | API moderna de receitas e codecs | Documentação versionada e fontes resolvidas | Exemplo original compilado com reload e erro de dados |
| P1 | Networking e telas | Eventos e codecs da versão alvo | Cliente hostil, dois jogadores, delta e reconexão |
| P1 | GameTests | Runner e descoberta da versão alvo | Execução no CI com resultado não vazio |
| P1 | Rendering atual | Pipeline e registro client-only | Cliente + dedicated server e perfil de render |
| P1 | Split/merge dos mods estudados | Classes e testes em commit imutável | Traçado de ciclo de vida com referências de linha |
| P1 | Internals de save/autocrafting de AE2 e RS | Código e regressões oficiais | Sem inferência baseada apenas em README |
| P1 | Proteções de mineração | API de claims e política de permissões | Tentativa negada sem custo ou modificação indevida |
| P2 | Profilers modernos | Documentação e binário compatível | Cenário reproduzível e baseline exportada |
| P2 | IC2 histórico | Versão/build e termos oficiais | Não misturar Classic, Experimental e ports |
| P2 | Thermal Series | Versão de cada módulo e termos | Diferenciar Foundation, Expansion, Dynamics e CoFH Core |
| P2 | Licenças por artefato | Arquivo de licença do JAR/asset escolhido | Registro de obrigação e alternativa sem dependência |

Nenhuma destas pendências autoriza preencher versioned/ com assinaturas supostas. Estudos cobrem observações públicas e lições; manutenção, rede e persistência internas exigem pesquisa adicional em projeto real.
