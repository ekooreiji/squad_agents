---
name: software-architecture
description: Guia completo de Arquitetura de Software com exemplos em Python, JavaScript, TypeScript, Ruby, C# e Java
---

# Arquitetura de Software

Referência completa de arquitetura de software com padrões, princípios e estruturas para múltiplas linguagens e frameworks.

---

## Tipos de Arquitetura

| Tipo | Descrição |
|------|-----------|
| **Monolítica** | Tudo em um único deploy |
| **Camadas (Layered)** | Separação por camadas |
| **Microserviços** | Serviços independentes |
| **Hexagonal** | Ports e Adapters |
| **Event-Driven** | Comunicação por eventos |
| **CQRS** | Command Query Responsibility Segregation |
| **Serverless** | Funções como serviço |
| **SOA** | Service-Oriented Architecture |

---

## Guias

### Conceitos Gerais
- `guides/types/` - Tipos de arquitetura
- `guides/principles/` - Princípios de design
- `guides/patterns/` - Padrões arquiteturais
- `guides/decisions/` - Decisões arquiteturais

### Estruturas por Framework
- `structures/python/` - Django, Flask, FastAPI
- `structures/javascript/` - Node.js, Express
- `structures/typescript/` - TypeScript
- `structures/ruby/` - Ruby
- `structures/csharp/` - C#/.NET
- `structures/java/` - Java/Spring
- `structures/frontend/` - React, Angular, Astro

---

## Diagramas

| Tipo | Formato |
|------|--------|
| **ASCII** | Diagramas em texto |
| **Mermaid** | Diagramas Mermaid |
| **Estrutura** | Estruturas de diretórios |

---

## Templates

| Template | Uso |
|---------|-----|
| `templates/architecture.md` | Documentação de arquitetura |
| `templates/adr.md` | Architecture Decision Record |
| `templates/decision.md` | Decision Record |

---

## Exemplos

| Exemplo | Descrição |
|---------|-----------|
| `examples/complete-projects/` | Projetos completos |

---

## Princípios

| Princípio | Descrição |
|-----------|-----------|
| **SOLID** | Single responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion |
| **DRY** | Don't Repeat Yourself |
| **KISS** | Keep It Simple, Stupid |
| **YAGNI** | You Aren't Gonna Need It |

---

## Checklist

- `checklists/validation.md` - Validação de arquitetura
- `checklists/selection.md` - Seleção de arquitetura

---

## Skills Relacionadas

- **database-architecture** - Guia de SGBDs e ORMs (PostgreSQL, MySQL, MongoDB, Redis, SQLAlchemy, Prisma, etc.)
  - Local: `../database-architecture/SKILL.md`

- **api-design** - Guia de Design de APIs REST, GraphQL, WebSockets com Python, JavaScript/TypeScript e Java
  - Local: `../api-design/SKILL.md`

- **code-review** - Guia de Code Review, checklists e práticas de revisão de código
  - Local: `../code-review/SKILL.md`

- **testing-strategies** - Guia de Estratégias de Testing (Unit, Integration, E2E, TDD)
  - Local: `../testing-strategies/SKILL.md`

- **devops** - Guia de DevOps (Docker, CI/CD, Kubernetes)
  - Local: `../devops/SKILL.md`

- **security** - Guia de Segurança (OWASP, autenticação)
  - Local: `../security/SKILL.md`

- **logging-monitoring** - Guia de Logging e Monitoramento
  - Local: `../logging-monitoring/SKILL.md`

- **performance** - Guia de Performance (Optimization, Profiling)
  - Local: `../performance/SKILL.md`

---

## Referências

- [Building Microservices](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034462/)
- [ Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- [Clean Architecture](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/)