# API Design

Skill para design de APIs REST, GraphQL, WebSockets com Python, JavaScript/TypeScript e Java.

---

## Visão Geral

Esta skill oferece guias, exemplos, templates e padrões para проекar APIs robustas e escaláveis.

## Arquitetura de Diretórios

```
api-design/
├── guides/
│   ├── concepts/        # Conceitos fundamentais
│   ├── protocols/       # Protocolos (REST, GraphQL, WebSocket)
│   ├── authentication/ # Autenticação e autorização
│   └── standards/      # Standards (OpenAPI, JSON:API)
├── structures/        # Estruturas recomendadas
├── diagrams/         # Diagramas de fluxo
├── templates/         # Templates reutilizáveis
├── examples/         # Exemplos de código
└── checklists/      # Checklists de revisão
```

## Guias por Categoria

### Conceitos Fundamentais
- `guides/concepts/rest-principles.md` - Princípios REST
- `guides/concepts/http-methods.md` - Métodos HTTP
- `guides/concepts/http-status-codes.md` - Códigos de status
- `guides/concepts/versioning.md` - Versionamento
- `guides/concepts/error-handling.md` - Tratamento de erros

### Protocolos
- `guides/protocols/rest.md` - RESTful APIs
- `guides/protocols/graphql.md` - GraphQL
- `guides/protocols/websocket.md` - WebSockets
- `guides/protocols/grpc.md` - gRPC

### Autenticação
- `guides/authentication/jwt.md` - JWT
- `guides/authentication/oauth.md` - OAuth 2.0
- `guides/authentication/api-keys.md` - API Keys
- `guides/authentication/basic-auth.md` - Basic Auth
- `guides/authentication/rate-limiting.md` - Rate Limiting

### Standards
- `guides/standards/openapi.md` - OpenAPI/Swagger
- `guides/standards/jsonapi.md` - JSON:API
- `guides/standards/asyncapi.md` - AsyncAPI

## Integração com Skills

Esta skill complementa:
- **[software-architecture](../software-architecture/SKILL.md)** - Decisões arquiteturais
- **[database-architecture](../database-architecture/SKILL.md)** - Persistência e models

## Recursos Adicionais

### Templates
- `templates/endpoint.md` - Template de endpoint
- `templates/specification.md` - Template OpenAPI
- `templates/error-response.md` - Template erro
- `templates/pagination.md` - Template paginação
- `templates/adr.md` - Template ADR (Architecture Decision Records)

### Checklists
- `checklists/review.md` - Checklist de revisão
- `checklists/security.md` - Checklist de segurança
- `checklists/performance.md` - Checklist de performance
- `checklists/documentation.md` - Checklist de documentação

## Estruturas por Framework

### Python
- `structures/python/fastapi.md` - FastAPI
- `structures/python/flask.md` - Flask

### JavaScript/TypeScript
- `structures/javascript/express.md` - Express
- `structures/javascript/nestjs.md` - NestJS

### Java
- `structures/java/spring.md` - Spring Boot

## Exemplos

### Python
- `examples/python/fastapi/crud_example.py`
- `examples/python/flask/crud_example.py`

### JavaScript/TypeScript
- `examples/javascript/express/crud_example.js`
- `examples/javascript/nestjs/crud_example.ts`

## Integração com Skills

Esta skill integra-se com as skills existentes:

- **[software-architecture](../software-architecture/SKILL.md)** - Para decisões arquiteturais em APIs (monolito vs microsserviços)
- **[database-architecture](../database-architecture/SKILL.md)** - Models, persistência e ORMs para APIs

### Fluxo de Integração

```
api-design ←→ software-architecture
    ↓
database-architecture
```

1. Decida o tipo de arquitetura → software-architecture
2. Defina a API → api-design
3. Escolha banco e ORM → database-architecture