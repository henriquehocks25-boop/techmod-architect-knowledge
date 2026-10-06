# Anti-patterns — dependencies

[ANTI-PATTERN] Sintomas são sinais para investigação; exceções precisam de contrato e evidência.

## Unnecessary library

Problema/sintoma: Adicionar framework para hélice simples.

Consequência: Mais JAR/API/migração sem benefício.

Alternativa: Pipeline simples e medir necessidade.

Possível exceção: Animação complexa compartilhada por muitas assets.

## Unmaintained dependency

Problema/sintoma: Sem suporte claro ao alvo.

Consequência: Upgrade bloqueado ou supply chain não revisada.

Alternativa: Avaliar alternativa, pin e plano de saída.

Possível exceção: Fork mantido pelo projeto com capacidade real.

## Wrong loader/version

Problema/sintoma: Biblioteca compila em outro ambiente.

Consequência: Runtime crash e compatibilidade ilusória.

Alternativa: Matriz exata e JAR dedicado.

Possível exceção: Multiloader com adapters próprios testados.

## License ignored

Problema/sintoma: Aplicar MIT do código aos assets.

Consequência: Redistribuição sem termos corretos.

Alternativa: Registro por artefato e fonte.

Possível exceção: Nenhuma exceção à necessidade de verificar termos.

Verificação: reproduzir sintoma, medir consequência e validar alternativa com os invariantes do subsistema. Consulte o [roteador](../../TOPIC_ROUTER.md) e o [catálogo de padrões](../architecture/pattern-catalog.md).

