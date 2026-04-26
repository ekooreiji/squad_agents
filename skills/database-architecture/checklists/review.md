# Database Review Checklist

## Schema Design

- [ ] Tabelas tem chaves primárias adequadas
- [ ] Relacionamentos usam foreign keys com constraints
- [ ] Índicescreated para colunas usadas em WHERE/JOIN
- [ ] Campos Unique definidos onde necessário
- [ ] Dados sensíveis criptografados
- [ ] Conventions de nomenclatura seguidas

## Índices

- [ ] Índice em colunas de filtro frequente
- [ ] Índice em colunas de JOIN
- [ ] Índice em campos ORDER BY
- [ ] Índices compostos para queries comuns
- [ ] Evitar índices redundantes

## Transactions

- [ ] Transactions usado para operações multi-tabela
- [ ] Níveis de isolamento apropriados
- [ ]Timeout configurado para queries longas
- [ ] Roolback tratado corretamente

## Migrations

- [ ] Backward compatibilitymantida
- [ ] Dados preservados em alter table
- [ ] Rollback testado
- [ ] Migration não bloqueia tabela grande

## Performance

- [ ] Queries não tem N+1
- [ ] Eager loading quando necessário
- [ ] Paginação implementada
- [ ] Query analysis feitas regularmente

## Security

- [ ] Parameterized queries usadas
- [ ] Least privilege para usuários DB
- [ ] SSL/TLS enabled
- [ ] Connection string não exposta