# JSON:API Specification

## Visão Geral

JSON:API é uma especificação para criar APIs JSON consistentes.

## Estrutura

```json
{
  "data": {
    "id": "1",
    "type": "users",
    "attributes": {
      "name": "John"
    },
    "relationships": {
      "posts": {
        "links": {
          "related": "/users/1/posts"
        }
      }
    }
  }
}
```

## Document Structure

### Resource Object

```json
{
  "data": {
    "type": "users",
    "id": "1",
    "attributes": {
      "name": "John",
      "email": "john@example.com"
    }
  }
}
```

### Collection

```json
{
  "data": [
    { "type": "users", "id": "1", "attributes": {...} },
    { "type": "users", "id": "2", "attributes": {...} }
  ]
}
```

### Empty

```json
{
  "data": []
}
```

## Relationships

### To-One

```json
{
  "data": {
    "type": "articles",
    "id": "1",
    "relationships": {
      "author": {
        "data": { "type": "users", "id": "1" }
      }
    }
  }
}
```

### To-Many

```json
{
  "data": {
    "type": "users",
    "id": "1",
    "relationships": {
      "posts": {
        "data": [
          { "type": "posts", "id": "1" },
          { "type": "posts", "id": "2" }
        ]
      }
    }
  }
}
```

## Includes

```http
GET /users/1?include=posts HTTP/1.1
```

```json
{
  "data": {
    "type": "users",
    "id": "1",
    "attributes": { "name": "John" }
  },
  "included": [
    {
      "type": "posts",
      "id": "1",
      "attributes": { "title": "Hello" }
    }
  ]
}
```

## Sparse Fields

```http
GET /users?fields[users]=name,email HTTP/1.1
```

```json
{
  "data": [
    {
      "type": "users",
      "id": "1",
      "attributes": {
        "name": "John",
        "email": "john@example.com"
      }
    }
  ]
}
```

## Pagination

```http
GET /users?page[number]=2&page[size]=10 HTTP/1.1
```

```json
{
  "data": [...],
  "links": {
    "self": "/users?page[number]=2",
    "first": "/users?page[number]=1",
    "prev": "/users?page[number]=1",
    "next": "/users?page[number]=3",
    "last": "/users?page[number]=10"
  },
  "meta": {
    "page": {
      "number": 2,
      "size": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

## Sorting

```http
GET /users?sort=name,-createdAt HTTP/1.1
```

## Filtering

```http
GET /users?filter[name]=John HTTP/1.1
```

## Errors

```json
{
  "errors": [
    {
      "status": "404",
      "title": "Not Found",
      "detail": "User not found"
    }
  ]
}
```

## CRUD Operations

### Create

```http
POST /users HTTP/1.1
Content-Type: application/vnd.api+json

{
  "data": {
    "type": "users",
    "attributes": {
      "name": "John",
      "email": "john@example.com"
    }
  }
}
```

### Update (PATCH)

```http
PATCH /users/1 HTTP/1.1
Content-Type: application/vnd.api+json

{
  "data": {
    "type": "users",
    "id": "1",
    "attributes": {
      "name": "John Updated"
    }
  }
}
```

### Delete

```http
DELETE /users/1 HTTP/1.1
```

## Implementation

### Express

```javascript
app.get('/users', (req, res) => {
  res.json({
    data: users.map(u => ({ type: 'users', id: u.id, attributes: u }))
  });
});

app.post('/users', (req, res) => {
  const user = createUser(req.body.data.attributes);
  res.status(201).json({
    data: { type: 'users', id: user.id, attributes: user }
  });
});
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Consistent structure | Always use data wrapper |
| Relationships | Use links and related |
| Pagination | Use page-based |
| Errors | Return error objects |