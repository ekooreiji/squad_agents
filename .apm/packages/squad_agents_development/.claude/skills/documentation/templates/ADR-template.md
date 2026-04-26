# ADR Template

```markdown
# ADR-[NUMBER] - [TITLE]

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-XXX]

## Date
YYYY-MM-DD

## Context
[Descreva o problema ou decisão que precisa ser tomada]

## Decision
[Decisão tomada]

### Justificativa
[Por que esta decisão foi tomada]

## Consequences

### Positive
- [Benefício 1]
- [Benefício 2]

### Negative
- [Trade-off 1]
- [Trade-off 2]

## Alternatives Considered

### Option 1
- Descrição: [Descrição]
- Why rejected: [Reason]

### Option 2
- Descrição: [Descrição]
- Why rejected: [Reason]

## Related ADRs
- ADR-XXX: [Related decision]
```

## Example

```markdown
# ADR-001 - Usar PostgreSQL como Banco de Dados Principal

## Status
Accepted

## Date
2024-01-15

## Context
Precisamos escolher um banco de dados para o projeto. O volume estimado é de 100k usuários, com dados relacionais.

## Decision
Usar PostgreSQL como banco de dados principal.

### Justificativa
- Suporte a JSON para dados semi-estruturados
- ACID completo
- Replicação confiável

## Consequences

### Positive
- +JSON nativo
- +Full-text search
- + extensões comunidade

### Negative
- -Tuning necessário para alta carga

## Alternatives Considered

### MySQL
- Descrição: Popular para aplicações web
- Why rejected: JSON menos potente

### MongoDB
- Descrição: Schema flexível
- Why rejected: Necessitamos ACID

## Related ADRs
Nenhum
```