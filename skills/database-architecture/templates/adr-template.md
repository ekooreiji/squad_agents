# ADR - Database Architecture Decision Record

## Template

```markdown
# ADR: [NUMBER] - [TITLE]

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-XXX]

## Date
YYYY-MM-DD

## Context
[Descreva o problema ou decisão de banco de dados que precisa ser tomada]

## Decision
[Decisão tomada para banco de dados/SGBD/ORM]

## Consequences

### Positive
- [Benefício 1]
- [Benefício 2]

### Negative
- [ trade-off ou limitação 1]
- [ trade-off ou limitação 2]

## Alternatives Considered

### Option 1
[Descrição]
[Why rejected]

### Option 2
[Descrição]
[Why rejected]

## Related ADRs
- ADR-XXX: [Related decision]
```

## Example: Database Selection

```markdown
# ADR-001 - Escolha do SGBD Principal

## Status
Accepted

## Date
2024-01-15

## Context
Projeto de API REST com necessidade de armazenar dados de usuários, autenticação e logs de acesso. Volume estimado: 100k usuários, 1M registros de log/mês.

## Decision
Usar PostgreSQL como banco de dados principal.

### Justificativa
- Suporte a JSON para dados semi-estruturados
- ACID completo para transações
- Replicação confiável
- Extendível com PostGIS se necessário

## Consequences

### Positive
- + JSON nativo
- + Fuller-text search
- + Tipos geometricos
- + Extensões comunidade

### Negative
- - Tuning necessário para alta carga
- - Curva de aprendizado para features avançadas

## Alternatives Considered

### MySQL
- Descrição: Database popular, boa performance em reads
- Why rejected: JSON menos potente, menor feature set

### MongoDB
- Descrição: Schema flexível, alta escalabilidade
- Why rejected: Necessidade de ACID completo, dados estruturados

## Related ADRs
- ADR-002: ORM Selection (SQLAlchemy)
- ADR-003: Cache Strategy (Redis)
```

## Example: ORM Selection

```markdown
# ADR-002 - Seleção do ORM

## Status
Accepted

## Date
2024-01-15

## Context
Projeto FastAPI com PostgreSQL. Necessidade de migrations, type safety e migrations automáticas.

## Decision
Usar SQLAlchemy 2.0 com estilo Core.

### Justificativa
- Flexibilidade para queries complexas
- Async nativo
- Múltiplos dialects
- Separação clara entre ORM e SQL

## Consequences

### Positive
- + Type safety com SQLAlchemy 2.0
- + Query builder flexível
- + Async/await nativo

### Negative
- - Mais boilerplate que ORMs simples

## Alternatives Considered

### Prisma
- Descrição: TypeScript-first, DX excelente
- Why rejected: Projeto Python, não TypeScript

### Django ORM
- Descrição: Integrado ao Django
- Why rejected: Projeto FastAPI, não Django
```