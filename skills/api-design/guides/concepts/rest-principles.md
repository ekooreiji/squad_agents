# REST Principles

## O que é REST?

REST (Representational State Transfer) é um estilo arquitetural para sistemas hpermidia distribuidos. Defined by Roy Fielding em sua tese de doutorado (2000).

## six Constraints

### 1. Client-Server
```
┌──────────┐           ┌──────────┐
│  Client  │───Request──│  Server  │
│          │───Response│          │
└──────────┘           └──────────┘
```
- Separação de responsabilidades
- Cliente não precisa conhecer implementação do servidor
- Servidor não precisa conhecer cliente

### 2. Stateless
```
┌───────────────────────────────────────┐
│         Cada Request                  │
│  - Todos os dados necessários         │
│  - Não armazena contexto             │
└───────────────────────────────────────┘
```
- Cada requisição contém toda informação necessária
- Servidor não almacena estado do cliente
- Sessões gerenciadas pelo cliente

### 3. Cacheable
```
┌─────────────┐
│   Cache     │
│             │
│  GET /users │──► Cacheable
│  POST /users│──► Non-cacheable
└─────────────┘
```
- Respostas podem ser cacheadas
- Improves performance
- Diminui carga no servidor

### 4. Uniform Interface
```
┌─────────────────────────────────────────┐
│  Recursos: /users, /posts, /orders     │
│  Representações: JSON, XML             │
│  Hypermedia: HATEOAS                  │
└─────────────────────────────────────────┘
```

### 5. Layered System
```
┌─────────┐
│ Client  │
└────┬────┘
     │
┌────▼────┐
│   Load  │
│ Balancer│
└────┬────┘
     │
┌────▼────┐
│  API    │
└────┬────┘
     │
┌────▼────┐
│ Service │
└─────────┘
```

### 6. Code on Demand (Opcional)
```javascript
// Servidor pode enviar código executável
// Ex: JavaScript no browser
<script src="app.js"></script>
```

## Richardson Maturity Model

```
┌────────────────────────────────────────────────────┐
│  Level 3: Hypermedia Controls (HATEOAS)           │
│  Level 2: HTTP Verbs                              │
│  Level 1: Resources                              │
│  Level 0: Single Endpoint (RPC)                  │
└────────────────────────────────────────────────────┘
```

### Level 0 - The Swamp of POX
```http
POST /apirpc HTTP/1.1
Host: example.com

<method>
  <getUser>
    <id>1</id>
  </getUser>
</method>
```

### Level 1 - Resources
```http
GET /users/1 HTTP/1.1
Host: example.com
```

### Level 2 - HTTP Verbs
```http
GET    /users/1      # Read
POST   /users       # Create
PUT    /users/1     # Update (full)
PATCH  /users/1     # Update (partial)
DELETE /users/1    # Delete
```

### Level 3 - Hypermedia
```json
{
  "id": 1,
  "name": "John",
  "_links": {
    "self": "/users/1",
    "orders": "/users/1/orders",
    "profile": "/users/1/profile"
  }
}
```

## Resource Naming

| Practice | Example |
|----------|--------|
| Use nouns (not verbs) | `/users` not `/getUsers` |
| Plural | `/users` not `/user` |
| Hierarchical | `/users/1/orders` |
| Lowercase | `/api/users` |
| No underscores | `/api/user-profiles` |
| Query params | `/users?page=1&limit=10` |

### Examples

| Resource | Endpoints |
|----------|----------|
| Users | `GET /users`, `POST /users`, `GET /users/{id}` |
| Orders | `GET /orders`, `POST /orders`, `GET /orders/{id}` |
| Products | `GET /products`, `GET /products/{id}` |

## Best Practices

| Practice | Don't | Do |
|----------|-------|-----|
| URLs | `/getUser` | `GET /users` |
| Actions | `/updateUser` | `PATCH /users/{id}` |
|Plural | `/user` | `/users` |
| Version | No version | `/v1/users` |

## Referências

- [Roy Fielding Thesis](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [REST API Tutorial](https://restfulapi.net/)
- [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)