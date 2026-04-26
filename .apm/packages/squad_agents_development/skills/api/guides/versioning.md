# Versioning

API versioning strategies.

## Strategies

| Strategy | Pros | Cons |
|---------|------|------|
| URL Path | Easy, clear | URL pollution |
| Query Param | Single URL | Caching |
| Header | Clean URLs | Extra requests |
| Content Negotiation | Clean | Complex |

## URL Path (Recommended)

```python
# /api/v1/posts
# /api/v2/posts

from fastapi import FastAPI

app = FastAPI()

@app.get('/api/v1/posts')
async def get_posts_v1():
    return [{'id': 1, 'title': 'Post', 'author': 'Name'}]

@app.get('/api/v2/posts')
async def get_posts_v2():
    return [{'id': 1, 'title': 'Post', 'createdBy': 'Name'}]
```

## Version Header

```python
# Header: Accept: application/vnd.api.v2+json

from fastapi import Header

@app.get('/posts')
async def getPostsAcceptHeader(content_type: str = Header(default='application/json')):
    version = content_type.split('v')[-1].split('+')[0]
    return {'version': version}
```

## Custom Header

```python
# Header: X-API-Version: 2

@app.get('/posts', headers={'X-API-Version': '2'})
async def get_posts_v2():
    return {'version': 2, 'data': []}
```

## Deprecation

```python
from fastapi import FastAPI, APIRouter

@app.get('/v1/posts', deprecated=True)
async def deprecated_posts():
    return [{'id': 1, 'title': 'Post'}]
```

## Migration Pattern

1. Release v1 with new fields returning null
2. Release v2 with new field names
3. Deprecate v1
4. Remove v1 after migration period