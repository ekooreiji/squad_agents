# Security

Auth, JWT.

## Install

```bash
pip install python-jose passlib[bcrypt]
```

## JWT

```python
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta

SECRET_KEY = 'secret'
ALGORITHM = 'HS256'

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({'exp': expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail='Could not validate credentials',
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get('sub')
    except JWTError:
        raise credentials_exception
    return {'id': user_id}

@app.post('/token')
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = {'username': form_data.username, 'id': 1}
    access_token = create_access_token(data={'sub': user['id']})
    return {'access_token': access_token, 'token_type': 'bearer'}

@app.get('/users/me')
async def read_users_me(current_user: dict = Depends(get_current_user)):
    return current_user
```