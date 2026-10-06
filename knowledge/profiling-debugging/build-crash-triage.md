# Build e crash: triagem

[RECOMMENDATION] Comece pela fase e pela primeira causa útil; último frame nem sempre é raiz.

## Build

Download/resolução: URL/artefato/versão/credentials e conectividade. Configuração: plugin/Wrapper/Java e sintaxe. Compilação: símbolo/assinatura/tipo. Datagen: dados inválidos. Runtime: classe ausente/metadata/lado. Não trocar cinco versões ou apagar todo cache sem hipótese.

[VERSION-SPECIFIC] Comandos de diagnóstico Gradle e tasks são confirmados no projeto; Wrapper, logs e dependency graph ajudam identificar transitive conflicts.

## Crash

latest.log traz contexto anterior; crash report traz ambiente, exceção e mods. Ler cadeia caused by; localizar primeiro frame próprio e chamador. Missing registry entry pode ser ID removido, ordem ou dados incorretos. Recipe error pede ID/campo. Network disconnect pede payload/lado/limite.

Client-only class error no dedicated server é fronteira física, mesmo que singleplayer funcione. Java exception por null em endpoint pode ser unload/invalidation, não “só adicionar null check” e ignorar saldo.

## Reprodução mínima

Registrar versões/config, seed quando relevante, passos, expected/actual e frequência. Remover integrações uma a uma em cópia, sem alterar mundo original. Bisect entre revisões conhecidas conserva cenário; se mundo mudou de schema, usar fixture compatível.

## Resposta ao usuário

Traduzir: “o servidor tentou carregar uma classe da interface gráfica”. Indicar correção técnica e como verificar. Não pedir para o usuário escolher classe/API. Logs podem conter tokens/endereço; sanitizar antes de publicar.

Referências: [playbook build](../../playbooks/debug-build-failure.md), [crash](../../playbooks/analyze-crash-report.md).
