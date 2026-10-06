# Anti-patterns — architecture

[ANTI-PATTERN] Sintomas são sinais para investigação; exceções precisam de contrato e evidência.

## Giant BlockEntity

Problema/sintoma: Uma classe contém slots, recipe, rede, GUI e integrações.

Consequência: Mudança pequena exige entender tudo e gera regressões cruzadas.

Alternativa: Separar dono do processo de components/adapters e projeções.

Possível exceção: Máquina mínima pode concentrar lógica curta com contratos claros.

## Inheritance explosion

Problema/sintoma: Subclasses por tier×tipo×upgrade.

Consequência: Correção na base quebra variantes e combinações ficam inconsistentes.

Alternativa: Composição e definições de conteúdo; herança só de lifecycle estável.

Possível exceção: Família pequena com variação realmente hierárquica.

## Duplicate systems

Problema/sintoma: GUI e tubo validam slots de modo diferente.

Consequência: Automação bypassa regra e manutenção diverge.

Alternativa: Contrato único usado por adapters.

Possível exceção: Projeção visual pode ser distinta sem duplicar regra de negócio.

## Global singleton misuse

Problema/sintoma: Manager retém mundo/posição após encerramento.

Consequência: Leaks e mistura de dimensões.

Alternativa: Escopo servidor/mundo e cleanup de lifecycle.

Possível exceção: Tipos imutáveis de registry são compartilhados legitimamente.

## Hidden coupling

Problema/sintoma: Componente acessa internals de outro.

Consequência: Upgrade de uma parte exige alterar todas.

Alternativa: Interfaces pequenas e eventos explícitos.

Possível exceção: Código local muito pequeno pode ser direto e documentado.

## Feature spaghetti

Problema/sintoma: Cada feature injeta condicionais no núcleo.

Consequência: Risco cresce sem limite e teste fica frágil.

Alternativa: Limite de módulo e tarefa focada.

Possível exceção: Protótipo descartável identificado, sem save durável.

Verificação: reproduzir sintoma, medir consequência e validar alternativa com os invariantes do subsistema. Consulte o [roteador](../../TOPIC_ROUTER.md) e o [catálogo de padrões](../architecture/pattern-catalog.md).

