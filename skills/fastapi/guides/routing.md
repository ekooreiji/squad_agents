# Routing

Routes.

```python
from fastapi import FastAPI, Path, Query, Header

app = FastAPI()

# GET
@app.get('/users')
async def get_users():
    return [{'id': 1, 'name': 'João'}]

# POST
from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str

@app.post('/users')
async def create_user(user: User):
    return {'id': 1, **user.model_dump()}

# PUT
@app.put('/users/{user_id}')
async def update_user(user_id: int, user: User):
    return {'id': user_id, **user.model_dump()}

# DELETE
@app.delete('/users/{user_id}')
async def delete_user(user_id: int):
    return {'deleted': True}

# Path
@app.get('/users/{user_id}')
async def get_user(user_id: int = Path(..., ge=1)):
    return {'id': user_id}

# Query
@app.get('/search')
async def search(q: str = Query(...)):
    return {'q': q}
```