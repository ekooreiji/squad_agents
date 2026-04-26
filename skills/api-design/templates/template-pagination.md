# Template: Pagination Response

## Page-based Pagination

```json
{
  "data": [
    { "id": 1, "name": "User 1" },
    { "id": 2, "name": "User 2" }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

## Offset-based Pagination

```json
{
  "data": [...],
  "pagination": {
    "offset": 0,
    "limit": 20,
    "total": 100
  }
}
```

## Cursor-based Pagination

```json
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTAwfQ",
    "next_cursor": "eyJpZCI6MTIwfQ",
    "has_more": true
  }
}
```

## Implementation

### FastAPI

```python
from pydantic import BaseModel

class Pagination(BaseModel):
    page: int
    limit: int
    total: int
    pages: int

def paginated_response(items: list, page: int, limit: int, total: int):
    return {
        "data": items,
        "pagination": {
            "page": page,
            "limit": limit,
            "total": total,
            "pages": (total + limit - 1) // limit
        }
    }
```

### Express

```javascript
function paginatedResponse(items, page, limit, total) {
  return {
    data: items,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit)
    }
  };
}
```