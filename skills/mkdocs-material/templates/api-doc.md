# Template: API Documentation

Template para documentação de APIs em MkDocs Material.

---

## Estrutura

```markdown
---
title: API Reference
description: API Reference documentation
---

# API Reference

Overview of the API.

## Authentication

### API Keys

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/endpoint
```

### OAuth 2.0

```bash
# Step 1: Get Token
curl -X POST https://auth.example.com/oauth/token \
  -d "grant_type=client_credentials" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET"

# Step 2: Use Token
curl -H "Authorization: Bearer ACCESS_TOKEN" \
  https://api.example.com/v1/endpoint
```

## Endpoints

### Get Users

Retrieves a list of users.

```http
GET /api/v1/users
```

#### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | integer | No | 1 | Page number |
| `limit` | integer | No | 20 | Items per page |
| `sort` | string | No | `created_at` | Sort field |
| `order` | string | No | `desc` | Sort order |

#### Example Request

```bash
curl -X GET "https://api.example.com/v1/users?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### Example Response

```json
{
  "data": [
    {
      "id": "usr_123",
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "total_pages": 10
  }
}
```

#### Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 429 | Rate Limited |
| 500 | Server Error |

---

### Create User

Creates a new user.

```http
POST /api/v1/users
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | User's full name |
| `email` | string | Yes | User's email |
| `password` | string | Yes | User's password |

#### Example Request

```bash
curl -X POST "https://api.example.com/v1/users" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }'
```

#### Example Response

```json
{
  "data": {
    "id": "usr_456",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Email must be valid"
      }
    ]
  }
}
```

### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token"
  }
}
```

### 429 Rate Limited

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests",
    "retry_after": 60
  }
}
```

---

## Rate Limits

| Plan | Requests/min | Requests/day |
|------|-------------|--------------|
| Free | 60 | 1,000 |
| Pro | 300 | 10,000 |
| Enterprise | Unlimited | Unlimited |

---

## SDKs

### Python

```python
from my_api import Client

client = Client(api_key="YOUR_KEY")
users = client.users.list()
```

### JavaScript

```javascript
import { Client } from 'my-api';

const client = new Client({ apiKey: 'YOUR_KEY' });
const users = await client.users.list();
```

---

## Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | List users |
| POST | /users | Create user |
| GET | /users/:id | Get user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |
```

---

## Cross-refs

- [doc-page.md](doc-page.md) - Template para páginas genéricas