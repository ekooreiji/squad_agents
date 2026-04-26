# Authentication

OAuth, JWT, mTLS.

## API Keys

```python
# Header based
@app.get('/posts', headers={'X-API-Key': 'secret-key'})
async def list_posts(api_key: str = Header()):
    if api_key != 'secret-key':
        raise HTTPException(401)
    return posts
```

## OAuth 2.0 + PKCE

```python
# Authorization Code Flow
# 1. Redirect to /authorize?client_id=...&redirect_uri=...&code_challenge=...
# 2. Get authorization code
# 3. Exchange code for token
# 4. /token?grant_type=authorization_code&code=...&code_verifier=...

from fastapi import FastAPI
from fastapi.security import OAuth2AuthorizationCodeBearer

app = FastAPI()
oauth2_scheme = OAuth2AuthorizationCodeBearer(
    authorizationUrl='https://auth.example.com/authorize',
    tokenUrl='https://auth.example.com/token'
)

@app.get('/protected')
async def protected(token: str = Depends(oauth2_scheme)):
    return {'token': token}
```

## JWT

```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from datetime import datetime, timedelta

SECRET_KEY = 'secret'
ALGORITHM = 'HS256'

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

def create_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({'exp': expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(401)

@app.get('/protected')
async def protected(user: dict = Depends(verify_token)):
    return user
```

## mTLS (Mutual TLS)

```python
# Server-side certificate validation
# Requires client certificate

import ssl
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('server.crt', 'server.key')
context.verify_mode = ssl.CERT_REQUIRED
context.load_verify_locations('ca.crt')

# Require client cert
@app.get('/secured', dependencies=[Depends(verify_client_cert)])
```

## Scopes

```python
from fastapi import Security

def check_scope(scopes: list[str] = Security(get_current_active_user)):
    for scope in scopes:
        if scope in user.scopes:
            return True
    raise HTTPException(403)

@app.get('/admin')
async def admin(data: dict = Depends(check_scope)):
    pass
```