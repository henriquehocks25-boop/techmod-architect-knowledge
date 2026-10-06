# Estratégia de testes e qualidade

[RECOMMENDATION] Testar contratos observáveis e falhas relevantes, não copiar cada condição da implementação em asserts.

## Camadas

Unit/pure logic: aritmética, matching, state machine, reserva e graph. GameTests: blocos, IO, lifecycle e estrutura. Integration: handlers/mods/claims. runClient smoke: tela/render/feedback. runServer smoke: headless e ausência de client classes. Migração: fixtures reais/anteriores. Escala: curvas de custo e latency.

[VERSION-SPECIFIC] Framework e runner vêm da combinação Java/NeoForge/Gradle resolvida; zero testes descobertos não é sucesso de validação.

## Invariantes

Conservação por recurso+componentes; quantidades não negativas; limite de capacidade sem apagamento; entrega única; somente servidor modifica; permissão negada não vaza; endpoint unloaded não opera; cache revalidado; job eventual sob budget.

## Matriz adversarial

Save/load em cada estado comprometido. Chunk reload em rota/porta/controller. Automação simultânea com GUI. Transferência parcial de item/fluido/energia. Split/merge com buffer. Formation/deformation. Recipe/tag/config reload. Dado corrompido e schema antigo. Dedicated server com opcionais ausentes.

Testes com sequência gerada podem comparar graph incremental com rebuild de referência e conferir saldo depois de cada operação. Limitar sequência e guardar seed para reprodução.

## Evidência

Comando, versões, fixture, resultado, contagem de casos e log. Distinguir “especificado” de “executado”. Uma biblioteca documental não pode afirmar que GameTest de mod passou.

Cada bug importante vira regressão com cenário mínimo. Release precisa recuperar mundo antigo em cópia e validar JAR real, não só dev run.

Fontes: [GameTests](https://docs.neoforged.net/docs/misc/gametest/), [ModDevGradle](https://github.com/neoforged/ModDevGradle); política de testes é autoral.
