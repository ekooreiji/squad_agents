# API Patterns

## REST Pattern

```python
# CRUD
@app.get('/posts')
async def list_posts(): return []

@app.get('/posts/{post_id}')
async def get_post(post_id: int): return {'id': post_id}

@app.post('/posts', status_code=201)
async def create_post(post: PostCreate): return {'id': 1}

@app.put('/posts/{post_id}')
async def update_post(post_id: int, post: PostUpdate): return {'id': post_id}

@app.delete('/posts/{post_id}', status_code=204)
async def delete_post(post_id: int): return None
```

## GraphQL Pattern

```python
class Post(ObjectType):
    id = ID()
    title = String()
    content = String()

class Query(ObjectType):
    post = Field(Post, id=ID())
    posts = List(Post)

class Mutation(ObjectType):
    create_post = CreatePost.Field()

schema = Schema(query=Query, mutation=Mutation)
```

## JWT Auth Pattern

```python
def create_token(data: dict):
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str):
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
```