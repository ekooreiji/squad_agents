# Template: ADR (API Decision Records)

## ADR Template

```markdown
# ADR: [NUMBER] - [TITLE]

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-XXX]

## Date
YYYY-MM-DD

## Context
[Descreva o problema de design de API que precisa ser decidido]

## Decision
[Decisão tomada para a API]

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

## Example: Pagination Strategy

```markdown
# ADR-001 - Estratégia de Paginação

## Status
Accepted

## Date
2024-01-15

## Context
Precisamos implementar paginação para endpoints de listagem. Precisamos decidir entre page-based, offset-based, ou cursor-based.

## Decision
Usar paginação page-based com parâmetros `page` e `limit`.

### Justificativa
- Simples de implementar
- URLs previsíveis
- Suporte universal

## Consequences

### Positive
- + URLs determinísticas
- + Fácil de navegar
- + Suporte a ordenação

### Negative
- - Problemas com dados mutáveis
- - Limitado para grandes datasets

## Alternatives Considered

### Cursor-based
- Descrição: Usar cursores opacos
- Why rejected: Mais complexo para APIs públicas

## Related ADRs
- ADR-002: Response Format
```

## Example: Error Response Format

```markdown
# ADR-002 - Error Response Format

## Status
Accepted

## Date
2024-01-15

## Context
Precisamos padronizar formato de erros em toda a API.

## Decision
Usar RFC 7807 Problem Details.

### Justificativa
- Padrão aberto
- Suporte widespread
- Include detalhes para debugging
```