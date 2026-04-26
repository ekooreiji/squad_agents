# Basic Auth

## Visão Geral

Basic Authentication é o método mais simples de autenticação HTTP.

## Structure

```
Authorization: Basic base64(username:password)
```

## Client Request

```http
GET /protected HTTP/1.1
Host: api.example.com
Authorization: Basic am9objpwYXNzMTIz
```

`am9objpwYXNzMTIz` = base64("john:pass123")

## Server Implementation

### FastAPI

```python
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import hashlib

security = HTTPBasic()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return hashlib.sha256(plain_password.encode()).hexdigest() == hashed_password

@app.get("/protected")
def protected_route(credentials: HTTPBasicCredentials = Depends(security)):
    user = db.get_user(credentials.username)
    if not user or not verify_password(credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return {"username": credentials.username}
```

### Express

```javascript
const auth = require('basic-auth');

function authenticate(req, res, next) {
  const credentials = auth(req);
  
  if (!credentials) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Authentication required');
  }
  
  const user = db.getUser(credentials.name);
  if (!user || user.password !== credentials.pass) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Invalid credentials');
  }
  
  req.user = user;
  next();
}

app.get('/protected', authenticate, (req, res) => {
  res.json({ user: req.user });
});
```

## Security

### Always Use HTTPS

```http
GET /protected HTTP/1.1
Host: api.example.com
Authorization: Basic am9objpwYXNzMTIz
```

Credentials não devem ser enviadas em texto claro.

### Hash Passwords

```python
import hashlib
import bcrypt

# Don't use MD5/SHA1
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verify
bcrypt.checkpw(password.encode(), hashed)
```

## WWW-Authenticate Header

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Basic realm="Protected Area"
```

## Limitations

| Limitation | Description |
|------------|-------------|
| No built-in expiry | No logout |
| Transmission | Needs HTTPS |
| No granularity | All-or-nothing |

## When to Use

- Simple APIs
- Internal tools
- Testing/Development
- Legacy systems

## Alternatives Summary

| Method | Use Case |
|--------|----------|
| Basic Auth | Simple, testing |
| API Keys | Service-to-service |
| JWT | User authentication |
| OAuth | Third-party access |