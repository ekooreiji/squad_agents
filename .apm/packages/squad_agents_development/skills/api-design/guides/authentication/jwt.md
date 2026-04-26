# JWT - JSON Web Tokens

## Visão Geral

JWT é um padrão aberto (RFC 7519) para criar tokens de acesso que permitem Claims Assertion entre duas partes.

## Estrutura

```
┌─────────────────────────────────────────────────────────────┐
│                    JWT Structure                           │
├─────────────────────────────────────────────────────────────┤
│  {header}.{payload}.{signature}                           │
│                                                          │
│  Header:    {"alg": "HS256", "typ": "JWT"}               │
│  Payload:   {"sub": "123", "name": "John", "exp": ...}    │
│  Signature: HMACSHA256(header + payload, secret)           │
└─────────────────────────────────────────────────────────────┘
```

### Header

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "iat": 1516239022,
  "exp": 1516242622
}
```

### Registered Claims

| Claim | Description |
|-------|-------------|
| iss | Issuer |
| sub | Subject |
| aud | Audience |
| exp | Expiration Time |
| nbf | Not Before |
| iat | Issued At |
| jti | JWT ID |

## Implementation

### Python (PyJWT)

```python
import jwt
import datetime

SECRET_KEY = "your-secret-key"

def create_token(user_id: int) -> str:
    payload = {
        "sub": str(user_id),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),
        "iat": datetime.datetime.utcnow()
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")

def verify_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise Exception("Token expired")
    except jwt.InvalidTokenError:
        raise Exception("Invalid token")
```

### Node.js (jsonwebtoken)

```javascript
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';

function createToken(userId) {
  return jwt.sign(
    { sub: userId },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid token');
  }
}
```

## Access + Refresh Tokens

```
┌─────────────────────────────────────────────────────────────┐
│                  Token Flow                               │
├─────────────────────────────────────────────────────────────┤
│  1. Client ────── POST /login ──────► Server             │
│  2. Server ── [JWT Access + Refresh] ──► Client          │
│  3. Client ── GET /protected ──► Server                 │
│  4. Server ── validates JWT ──► Allow/Deny             │
│  5. Client ── POST /refresh ──► Server                 │
│  6. Server ── [New JWT Access] ──► Client              │
└─────────────────────────────────────────────────────────────┘
```

### Access Token

```python
def create_access_token(user_id: int) -> str:
    return jwt.encode(
        {
            "sub": str(user_id),
            "type": "access"
        },
        SECRET_KEY,
        algorithm="HS256"
    )
```

### Refresh Token

```python
def create_refresh_token(user_id: int) -> str:
    return jwt.encode(
        {
            "sub": str(user_id),
            "type": "refresh",
            "jti": str(uuid.uuid4())
        },
        REFRESH_SECRET_KEY,
        algorithm="HS256"
    )
```

### Refresh Endpoint

```python
@app.post("/refresh")
def refresh_token(request: RefreshTokenRequest):
    payload = jwt.decode(request.refresh_token, REFRESH_SECRET_KEY)
    if payload.get("type") != "refresh":
        raise HTTPException(401, "Invalid token type")
    
    access_token = create_access_token(payload["sub"])
    return {"access_token": access_token}
```

## Middleware

### FastAPI

```python
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer

security = HTTPBearer()

def get_current_user(token: str = Depends(security)) -> User:
    try:
        payload = jwt.decode(token, SECRET_KEY)
        user_id = payload.get("sub")
        return db.get_user(user_id)
    except:
        raise HTTPException(401, "Invalid credentials")
```

### Express

```javascript
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send('No token');
  
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
}
```

### NestJS

```typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
```

## Algorithms

| Algorithm | Description |
|-----------|-------------|
| HS256 | HMAC with SHA-256 |
| HS384 | HMAC with SHA-384 |
| RS256 | RSA with SHA-256 |
| ES256 | ECDSA with P-256 |

### RS256 (Asymmetric)

```python
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

private_key = serialization.load_pem_private_key(
    private_key_bytes,
    password=None,
    backend=default_backend()
)

public_key = private_key.public_key()

# Sign
payload = jwt.encode({"sub": "123"}, private_key, algorithm="RS256")

# Verify
payload = jwt.decode(token, public_key, algorithms=["RS256"])
```

## Security Best Practices

| Practice | Description |
|----------|-------------|
| Short expiry | Access: 15min-1h |
| Store secret safely | Environment variables |
| HTTPS only | Always |
| Validate all claims | iss, aud, exp |
| Revocation list | For logout |

## Referências

- [JWT.io](https://jwt.io/)
- [RFC 7519](https://tools.ietf.org/html/rfc7519)