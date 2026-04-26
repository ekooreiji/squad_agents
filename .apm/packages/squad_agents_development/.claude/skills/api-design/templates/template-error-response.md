# Template: Error Response

## RFC 7807 Problem Details

```json
{
  "type": "https://api.example.com/errors/not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The user with id 123 does not exist",
  "instance": "/users/123",
  "errors": [
    { "field": "id", "message": "User not found" }
  ]
}
```

## Error Types

### 400 Bad Request

```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "Request validation failed",
  "errors": [
    { "field": "email", "message": "Invalid email format" },
    { "field": "password", "message": "Must be at least 8 characters" }
  ]
}
```

### 401 Unauthorized

```json
{
  "type": "https://api.example.com/errors/unauthorized",
  "title": "Authentication Required",
  "status": 401,
  "detail": "Authentication credentials were not provided"
}
```

### 403 Forbidden

```json
{
  "type": "https://api.example.com/errors/forbidden",
  "title": "Access Denied",
  "status": 403,
  "detail": "You do not have permission to access this resource"
}
```

### 404 Not Found

```json
{
  "type": "https://api.example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "Resource not found"
}
```

### 429 Rate Limited

```json
{
  "type": "https://api.example.com/errors/rate-limited",
  "title": "Too Many Requests",
  "status": 429,
  "detail": "Rate limit exceeded",
  "retry_after": 60
}
```

### 500 Internal Server Error

```json
{
  "type": "https://api.example.com/errors/internal",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred"
}
```

## Implementation

### Python (Pydantic)

```python
from pydantic import BaseModel
from typing import Optional, List

class FieldError(BaseModel):
    field: str
    message: str

class ErrorResponse(BaseModel):
    type: str
    title: str
    status: int
    detail: str
    instance: Optional[str] = None
    errors: Optional[List[FieldError]] = None
```

### TypeScript

```typescript
interface FieldError {
  field: string;
  message: string;
}

interface ErrorResponse {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance?: string;
  errors?: FieldError[];
}
```