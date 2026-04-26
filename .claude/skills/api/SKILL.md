---
name: api
description: Skill de APIs para desenvolvimento de interfaces de programação avançadas
---

# API Skill

Desenvolvimento de APIs REST, GraphQL e gRPC.

---

## Visão Geral

Esta skill ensina a:

- REST avançado
- GraphQL completo
- Autenticação avançada
- Versioning
- Documentação
- Rate limiting

---

## Guias

| Guia | Descrição |
|------|----------|
| `intro-api.md` | Conceitos gerais |
| `rest.md` | REST avançado |
| `graphql.md` | GraphQL queries, mutations |
| `authentication.md` | OAuth, JWT, mTLS |
| `versioning.md` | Versionamento |
| `documentation.md` | OpenAPI, Swagger |
| `rate-limiting.md` | Rate limits |

---

## Templates

| Template | Descrição |
|----------|-----------|
| `templates/api-patterns.md` | Padrões |

---

## Checklists

| Checklist | Descrição |
|------------|-----------|
| `checklists/api-validation.md` | Checklist |

---

## Skills Relacionadas

| Skill | Quando usar |
|-------|-------------|
| [fastapi](../fastapi/SKILL.md) | Python async |
| [nodejs](../nodejs/SKILL.md) | JavaScript |
| [django](../django/SKILL.md) | Django REST |
| [flask](../flask/SKILL.md) | Flask |
| [nextjs](../nextjs/SKILL.md) | Next.js API routes |
| [postgresql](../postgresql/SKILL.md) | Database |
| [docker](../docker/SKILL.md) | Deploy |

---

## Estrutura

```
api/
├── guides/
├── templates/
└── checklists/
```

---

## Tipos de API

| Tipo | Prós | Contras |
|------|------|---------|
| REST | Simples, widely supported | Over-fetching |
| GraphQL | Flexible, single endpoint | Complexity |
| gRPC | Fast, binary | Non-HTTP |

---

## Maturity Levels

| Level | Descrição |
|-------|----------|
| 0 | One endpoint (HTTP) |
| 1 | Resources |
| 2 | HTTP verbs |
| 3 | HATEOAS |
| 4 | Hypermedia controls |