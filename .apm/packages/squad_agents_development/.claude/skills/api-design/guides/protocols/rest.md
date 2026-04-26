# RESTful APIs

## Principles Review

### Resources

| Practice | Example |
|----------|---------|
| Nouns, not verbs | `/users` not `/getUsers` |
| Plural | `/users` not `/user` |
| Hierarchical | `/users/1/orders` |
| Lowercase | `/users` not `/Users` |
| Query params | `?status=active&page=1` |

### CRUD Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | List all users |
| GET | `/users/{id}` | Get single user |
| POST | `/users` | Create user |
| PUT | `/users/{id}` | Update user (full) |
| PATCH | `/users/{id}` | Update user (partial) |
| DELETE | `/users/{id}` | Delete user |

### Nested Resources

```
/users/1/orders           # Orders from user 1
/users/1/orders/2/items   # Items from order 2
/users/1/profile         # Profile of user 1
```

## Best Practices

### Pagination

```http
GET /users?page=2&limit=20
```

```json
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### Filtering

```http
GET /users?status=active&role=admin
```

### Sorting

```http
GET /users?sort=created_at&order=desc
```

### Field Selection

```http
GET /users?fields=id,name,email
```

```json
{
  "data": [
    { "id": 1, "name": "John", "email": "john@example.com" }
  ]
}
```

## Collection Operations

### Bulk Create

```http
POST /users/bulk HTTP/1.1

{
  "users": [
    { "name": "John" },
    { "name": "Jane" }
  ]
}
```

```http
HTTP/1.1 201 Created

{
  "created": 2,
  "errors": []
}
```

### Bulk Update

```http
PATCH /users/bulk HTTP/1.1

{
  "users": [
    { "id": 1, "name": "Updated" }
  ]
}
```

### Bulk Delete

```http
DELETE /users/bulk?ids=1,2,3
```

## Response Formats

### Single Resource

```json
{
  "data": {
    "id": 1,
    "name": "John",
    "email": "john@example.com"
  }
}
```

### Collection

```json
{
  "data": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 20
  }
}
```

### Errors

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found"
  }
}
```

## HATEOAS

```json
{
  "id": 1,
  "name": "John",
  "_links": {
    "self": "/users/1",
    "orders": "/users/1/orders",
    "profile": "/users/1/profile"
  },
  "_embedded": {
    "orders": [...]
  }
}
```

## Implementation

### FastAPI

```python
from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()
router = APIRouter(prefix="/users")

class User(BaseModel):
    id: int
    name: str
    email: str

class UserCreate(BaseModel):
    name: str
    email: str

@router.get("")
def get_users(
    page: int = 1,
    limit: int = 20,
    status: Optional[str] = None
):
    return {"data": [], "pagination": {"page": page, "limit": limit}}

@router.get("/{user_id}")
def get_user(user_id: int):
    return {"data": {"id": user_id, "name": "John"}}

@router.post("")
def create_user(user: UserCreate):
    return {"data": {"id": 1, **user.model_dump()}}

@router.patch("/{user_id}")
def update_user(user_id: int, user: UserCreate):
    return {"data": {"id": user_id, **user.model_dump()}}

@router.delete("/{user_id}")
def delete_user(user_id: int):
    return None
```

### Express

```javascript
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data: [], pagination: { page: 1 } });
});

router.get('/:id', (req, res) => {
  res.json({ data: { id: req.params.id } });
});

router.post('/', (req, res) => {
  res.status(201).json({ data: { id: 1, ...req.body } });
});

router.patch('/:id', (req, res) => {
  res.json({ data: { id: req.params.id, ...req.body } });
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});
```

## Referências

- [REST API Tutorial](https://restfulapi.net/)
- [JSON:API Specification](https://jsonapi.org/)