# Distribuição, cabos e buffers

[STABLE] Oferta, demanda, taxa e capacidade são restrições diferentes. Um cabo com buffer grande não tem necessariamente taxa alta.

## Distribuição

Calcule demanda de endpoints vivos e elegíveis. Distribua min(oferta, orçamento da rede, taxa do caminho, espaço do sink). Prioridade ordena classes; round-robin dentro da classe limita fome. Em weighted fairness, registrar peso e carry evita favorecer primeiro iterado.

Tensão/amperagem, se usados, são semântica do projeto: transformador muda categoria e taxa com perdas definidas; cabo limita grandezas apropriadas. Nunca tratar quantidade total como tensão sem spec.

## Storage

Saldo não negativo; entrada limitada por espaço/taxa; saída por saldo/taxa; alteração de capacidade preserva dados. Grandes números exigem soma/multiplicação verificadas, sem wrap. Saturar um número pode evitar overflow, mas nunca descartar recurso silenciosamente.

Storage conectada à rede só oferece saldo autoritativo; projeção de GUI pode estar atrasada. Smart grid mede demanda/rejeição, não deduz consumo por animação.

## Topologia

Split divide contabilidade por dono real. Buffer comum precisa de política determinística de distribuição entre componentes, ou permanecer no container físico proprietário; copiar saldo para ambos duplica. Merge soma somente saldos distintos; nó duplicado não pode ser contado duas vezes.

## Verificação

Rede A com 100 de energia divide em duas: soma final + perdas explícitas permanece 100. Sinks com taxas diferentes recebem conforme política; sink de alta prioridade permanentemente ativo não deve paralisar classe com garantia mínima se spec promete fairness.

Referências: [topologia](../logistics/topology-and-lifecycle.md), [orçamento](../performance/PERFORMANCE_BUDGET_GUIDE.md). Modelo de solver é recomendação autoral.
