# Release e distribuição

[RECOMMENDATION] Release declara suporte baseado em evidência, não no alvo do build apenas.

## Identidade

Semantic versioning comunica compatibilidade da API/contrato definido pelo projeto; mudança de balance não equivale automaticamente a API break. Alpha/beta/release descrevem maturidade e riscos conhecidos. Minecraft/loader/dependências são parte da matriz.

## Artefato

Build de checkout limpo; metadata/dependency declarations válidos; JAR sem dev artifacts; recursos gerados presentes; licença/autoria e changelog. Hash do artefato permite identificar download correto. Dev run que acha biblioteca na IDE não prova empacotamento correto.

## Validação

Dedicated server real, cliente compatível, opcionais ausentes/presentes, save/load e fixture anterior. Migração em cópia de mundo, notes de breaking changes e limites de downgrade. Performance no cenário suportado; não afirmar “server friendly” sem cenário.

## Comunicação e suporte

Release notes: comportamento novo/corrigido, efeito nos saves, ação exigida e problemas conhecidos. Issue templates pedem versões, logs, reprodução e expected/actual. Crash instructions ensinam sanitizar segredos antes de envio.

Git tag aponta commit; GitHub release associa JAR e notas. Não substituir artefato existente sem comunicar mudança; nova versão permite rastrear regressão. Rollback restaura binário e save compatível/backup, não supõe downgrade de schema.

## Verificação

Instalar JAR final em ambiente limpo; conferir metadata e dependências; iniciar dedicado; abrir mundo fixture; executar fluxo pequeno; comparar hash. Registrar comandos/resultados. Biblioteca documental usa seu próprio auditor e commits, não build Java.

Fontes: [ModDevGradle](https://github.com/neoforged/ModDevGradle), [SemVer](https://semver.org/). APIs de metadata e build são [VERSION-SPECIFIC].
