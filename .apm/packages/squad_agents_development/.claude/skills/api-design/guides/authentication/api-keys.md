# API Keys

## Visão Geral

API Keys são chaves simples para autenticação de aplicações (não usuários).

## Estrutura

```
API Key:  sk_demo_XXXXXXXXXXXXXXXXXXXXXXXX
Format:  prefix_version_random
Prefix:  sk_ (secret key), pk_ (public key)
```

## Tipos

| Tipo | Uso | Segurança |
|------|-----|-----------|
| Public Key | Identificação | Low risk |
| Secret Key | Assinatura | High risk |
| Access Token | Authentication | Medium |

## Headers

```http
X-API-Key: sk_demo_XXXXXXXXXXXXXXXXXXXXXXXX

Authorization: ApiKey sk_demo_XXXXXXXXXXXXXXXXXXXXXXXX
```

## Generation

```python
import secrets
import string

def generate_api_key(prefix: str = "sk") -> str:
    random_part = ''.join(
        secrets.choice(string.ascii_letters + string.digits)
        for _ in range(24)
    )
    return f"{prefix}_live_{random_part}"

def verify_api_key(key: str) -> bool:
    return key.startswith(("sk_", "pk_"))
```

```javascript
const crypto = require('crypto');

function generateApiKey(prefix = 'sk') {
  const random = crypto.randomBytes(24).toString('hex');
  return `${prefix}_live_${random}`;
}
```

## Validation

```python
@app.get("/protected")
def protected_route(api_key: str = Header(...)):
    key = db.get_api_key(api_key)
    if not key:
        raise HTTPException(401, "Invalid API key")
    if key.is_revoked:
        raise HTTPException(401, "API key revoked")
    return {"data": "protected"}
```

## Management Endpoints

### Create API Key

```http
POST /api-keys HTTP/1.1
Authorization: Bearer <admin_token>

{
  "name": "Production Key",
  "permissions": ["read:users", "write:users"],
  "expires_at": "2024-12-31"
}
```

```json
{
  "id": "key_123",
  "key": "sk_live_51Hx8K2e...",
  "name": "Production Key",
  "created_at": "2024-01-15T10:00:00Z",
  "expires_at": "2024-12-31"
}
```

### List API Keys

```http
GET /api-keys
```

```json
{
  "data": [
    {
      "id": "key_123",
      "name": "Production Key",
      "last_used": "2024-01-15T10:00:00Z",
      "expires_at": "2024-12-31"
    }
  ]
}
```

### Revoke API Key

```http
DELETE /api-keys/key_123
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Rotate keys | Regular rotation |
| Prefix | Identify key type |
| Scopes | Limit permissions |
| Expiry | Set expiration |
| Log usage | Audit trail |
| Hide in logs | Don't log keys |

## API Key vs JWT

| API Key | JWT |
|--------|-----|
| Simple | Complex |
| Stateless | Stateful validation |
| No expiry | Expiry |
| Single-purpose | Multi-purpose |