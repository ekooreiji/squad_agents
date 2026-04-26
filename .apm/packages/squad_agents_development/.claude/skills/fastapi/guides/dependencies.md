# Dependencies

Dependency Injection.

```python
from fastapi import Depends

async def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()

@app.get('/users')
async def get_users(db = Depends(get_db)):
    return db.query(User).all()

# Function dependency
def verify_token(Authorization: str = Header(...)):
    if not Authorization.startswith('Bearer '):
        raise HTTPException(401)
    return Authorization

@app.get('/profile')
async def get_profile(token = Depends(verify_token)):
    return {'profile': token}
```