# Registros, eventos e inicialização

[STABLE] Registro declara tipos; ciclo de mundo instancia e gerencia estado. Não inicializar rede industrial global na declaração de um tipo de bloco.

## Divisão

Registro de conteúdo → setup e adapters → abertura do mundo → carga de posições → execução → descarregamento → encerramento.
Use eventos para fronteiras reais: conteúdo disponível, mudança de topologia, reload, fim do mundo. Registro atrasado evita consultar objetos ainda não disponíveis; não é licença para lazy global sem ordem clara.

[VERSION-SPECIFIC] DeferredRegister e RegisterEvent são nomes descritos nas docs 26.1 consultadas. Event buses têm responsabilidades distintas, e algumas etapas podem usar execução paralela. Verificar evento, bus, lado e thread antes de registrar listener.

## Organização recomendada

Agrupe registro por domínio pequeno: tipos de máquina, menus e recursos. Evite um arquivo de bootstrap que também contém processamento e rede. Inicialização client-only em módulo próprio. Escopo de managers por servidor/dimensão conforme semântica, com limpeza no encerramento.

Datagen lê definições para produzir dados; gameplay não deve depender de um provider presente em runtime. IDs têm proprietário e estabilidade para saves e packs.

## Falhas e verificação

Sintoma de ordem: objeto ausente em construtor estático. Corrigir acesso no momento certo; não esconder erro com default silencioso. Listener registrado duas vezes pode duplicar processamento. Capture lifecycle em logging delimitado e conte registros.

Teste dedicated server, dois mundos sequenciais no mesmo processo e reload de dados. Manager antigo não pode permanecer com posições do mundo anterior.

Fonte: [registros e eventos](https://docs.neoforged.net/docs/concepts/registries/), consulta 2026-10-06. API concreta exige [política](version-policy.md).
