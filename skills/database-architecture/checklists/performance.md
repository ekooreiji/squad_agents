# Performance Checklist

## Query Optimization

- [ ] EXPLAIN/ANALYZE executado em queries importantes
- [ ] Evita SELECT *
- [ ] LIMIT usado onde aplicável
- [ ] indexes utilizados
- [ ] Evitar subqueries desnecessárias

## N+1 Problem

- [ ] Eager loading configurado
- [ ] selectinload vs joinedload usado corretamente
- [ ] Batch loading implementado
- [ ]pagination para listas grandes

## Connection Pool

- [ ] Pool size configurado adequadamente
- [ ] Connection recycling configurado
- [ ] Health checks enabled
- [ ] Max overflow apropriado

## Caching

- [ ] Queries frequentes em cache
- [ ] Cache invalidated corretamente
- [ ] TTL configurado
- [ ] Redis para cache quente

## Database Design

- [ ] Normalização appropriate
- [ ] Particionamento para tabelas grandes
- [ ] Dados históricos arquivados
- [ ] Colunas appropriately typed

## Monitoring

- [ ] Slow query log ativado
- [ ] Queries executando regularmente
- [ ] Index usage monitorado
- [ ] Connection pool metrics