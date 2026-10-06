# Migração e recuperação

[RECOMMENDATION] Atualização de API e mudança de save são riscos diferentes e devem ter planos distintos.

## Plano

Origem/destino exatos; schema/IDs afetados; defaults; renames; conteúdo removido; config alterada; graph a reconstruir; compatibilidade de downgrade. Criar backup/cópia de mundo antes de ensaio. Não testar migration no único save valioso.

Migração sequencial v1→v2→v3 simplifica raciocínio; cada passo tem precondição e pós-condição. Reexecutar não duplica saldos. IDs renomeados são mapa explícito, não substring heurística em todo dado.

## Remoção e corrupção

Conteúdo ausente pode ficar em registro de recuperação e suspender máquina. Política de compensation exige decisão de gameplay; não criar item de valor diferente automaticamente. Diagnóstico identifica dimensão/posição/schema sem imprimir dados sensíveis.

Defaults de config e paths podem mudar; preservar valor do usuário quando ainda válido. Valor fora da faixa recebe correção anunciada e limite seguro, sem apagar recursos armazenados.

## API e compatibilidade

[VERSION-SPECIFIC] Data fixing/migrations do jogo não migram automaticamente todo schema custom. Capability, network codecs e models exigem revalidação com mudança de versão. Rebuild graph apaga cache, não estoque.

## Verificação

Fixtures de cada schema, conteúdo removido, partial save, config antiga, capacidade reduzida e dedicated server. Comparar antes/depois por identidade. Downgrade não suportado deve ser anunciado; rollback usa backup compatível, não supor conversão inversa.

Referências: [schema](save-schema.md), [playbook](../../playbooks/migrate-neoforge-version.md), [template](../../templates/MIGRATION_PLAN.md).
