# Schema de save e reconstrução

[STABLE] Persistir verdade mínima e reconstruir derivados. Inventário, escrow e operação comprometida são verdade; route e handles são derivados.

## Campos

Schema version; IDs estáveis; recursos/saldos; progresso; resultado sorteado/comprometido; owner; configuração; jobs/reservas se necessários. Transient: references de mundo, endpoint cache, graph derivado, recipe lookup e render snapshots.

Defaults são por campo e versão. Campo novo ausente pode receber default; inventário malformado não deve virar vazio silencioso. Preservar dados desconhecidos em recuperação quando possível e bloquear operação insegura com mensagem.

## Ciclo

Load lê e migra sem ações de mundo não disponíveis. Activate reconstrói/valida referências. Dirty de save nasce de mudanças persistentes. Sync nasce de mudanças visuais observadas; não serializar schema completo para rede.

Network rebuild after load revalida disponibilidade. Dados de mundo referenciam posições, sem assumir chunk vivo. Remover conteúdo precisa mapear IDs ou armazenar representação de recuperação; não substituir item perdido por outro lucrativo.

## Falhas

Dados futuros em downgrade: não reinterpretar silenciosamente como esquema antigo. Config menor que saldo: preservar excedente, negar operação ou exigir migração. Dupla propriedade entre manager e bloco: escolher dono e converter sem duplicar.

Memória transacional não garante save atômico entre chunks. Documentar garantia normal de save/load versus crash abrupto; journal exige design específico.

## Verificação

Round-trip, campo ausente, tipo errado, ID removido, duas dimensões, mundo copiado e restart com output pendente. Somar inventory+escrow+jobs antes/depois.

Fontes: [SavedData](https://docs.neoforged.net/docs/datastorage/saveddata/), [attachments](https://docs.neoforged.net/docs/datastorage/attachments/); APIs são [VERSION-SPECIFIC].
