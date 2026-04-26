# REST Avançado

REST com práticas avançadas.

## HTTP Methods

| Method | Safe | Idempotent |
|--------|------|------------|
| GET | Yes | Yes |
| POST | No | No |
| PUT | No | Yes |
| PATCH | No | No |
| DELETE | No | Yes |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 301 | Moved Permanently |
| 304 | Not Modified |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

## Example: REST Routes

```python
# Python (FastAPI)
@app.get('/posts', response_model=list[Post])
async def list_posts(skip: int = 0, limit: int = 10):
    return posts[skip:skip+limit]

@app.post('/posts', status_code=201)
async def create_post(post: PostCreate):
    return {'id': 1, **post.model_dump()}

@app.put('/posts/{post_id}')
async def update_post(post_id: int, post: PostUpdate):
    return {'id': post_id, **post.model_dump()}

@app.delete('/posts/{post_id}', status_code=204)
async def delete_post(post_id: int):
    return None
```

## HATEOAS

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse

@app.get('/posts/{post_id}')
async def get_post(post_id: int):
    return JSONResponse({
        'id': post_id,
        'title': 'Post',
        '_links': {
            'self': f'/posts/{post_id}',
            'author': f'/posts/{post_id}/author',
            'comments': f'/posts/{post_id}/comments'
        }
    })
```

## Field Selection

```python
@app.get('/posts')
async def list_posts(fields: list[str] = None):
    if fields:
        return [{k: v for k, v in post.items() if k in fields}]
    return posts
```