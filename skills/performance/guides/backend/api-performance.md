# API Performance

## Latência

| Endpoint | Target |
|----------|--------|
| Simple CRUD | < 50ms |
| Database query | < 200ms |
| Complex aggregation | < 500ms |

## Otimizações

### Pagination

```python
# BAD - returns all
@app.get("/users")
def get_users():
    return db.query(User).all()

# GOOD - paginated
@app.get("/users")
def get_users(page: int = 1, limit: int = 20):
    return db.query(User).paginate(page, limit)
```

### Index Usage

```python
# Use indexed fields in WHERE
User.query.filter(User.email == email)  #FAST - indexed

# Avoid functions on columns
User.query.filter(User.name.like(f"%{search}%"))  #SLOW - no index
```

### Batch Operations

```python
# BAD - individual inserts
for item in items:
    db.add(Model(item))

# GOOD - bulk insert
db.add_all([Model(i) for i in items])
```

## Compression

```python
from fastapi import FastAPI
from fastapi.middleware.gzip import GZipMiddleware

app = FastAPI()
app.add_middleware(GZipMiddleware, minimum_size=1000)