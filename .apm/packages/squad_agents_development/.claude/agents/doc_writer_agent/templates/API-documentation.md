# API Documentation

## Visão Geral

{Descrição da API}

---

## Autenticação

### obter Token

```http
POST /api/auth/login
Content-Type: application/json

{{
  "email": "user@example.com",
  "password": "password"
}}
```

**Response**

```json
{{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {{
    "id": "1",
    "email": "user@example.com"
  }}
}}
```

### Atualizar Token

```http
POST /api/auth/refresh
Authorization: Bearer <token>
```

---

## Endpoints

### Usuários

#### GET /api/users

Lista todos os usuários.

```http
GET /api/users?page=1&limit=20
```

**Response**

```json
{{
  "data": [
    {{
      "id": "1",
      "name": "User Name",
      "email": "user@example.com"
    }}
  ],
  "meta": {{
    "total": 100,
    "page": 1,
    "limit": 20
  }}
}}
```

#### POST /api/users

Cria um novo usuário.

```http
POST /api/users
Content-Type: application/json

{{
  "name": "New User",
  "email": "new@example.com",
  "password": "securepassword"
}}
```

#### GET /api/users/:id

Detalha um usuário específico.

```http
GET /api/users/1
```

#### PUT /api/users/:id

Atualiza um usuário.

```http
PUT /api/users/1
Content-Type: application/json

{{
  "name": "Updated Name"
}}
```

#### DELETE /api/users/:id

Remove um usuário.

```http
DELETE /api/users/1
```

---

## Códigos de Status

| Código | Significado |
|--------|-----------|
| 200 | OK - Sucesso |
| 201 | Created - Criado com sucesso |
| 400 | Bad Request - Requisição inválida |
| 401 | Unauthorized - Não autenticado |
| 403 | Forbidden - Sem permissão |
| 404 | Not Found - Não encontrado |
| 500 | Internal Server Error - Erro interno |

---

## Rate Limiting

| Plano | Limite |
|-------|-------|
| Free | {N} requests/min |
| Pro | {N} requests/min |

---

## Erros

### Formato de Erro

```json
{{
  "error": {{
    "code": "ERROR_CODE",
    "message": "Mensagem de erro"
  }}
}}
```

### Códigos de Erro

| Código | Descrição |
|--------|-----------|
| INVALID_REQUEST | Requisição inválida |
| UNAUTHORIZED | Token inválido ou expirado |
| NOT_FOUND | Recurso não encontrado |
| ALREADY_EXISTS | Recurso já existe |