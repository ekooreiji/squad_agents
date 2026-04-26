# Error Handling

## Error Response Format

### RFC 7807 Problem Details

```json
{
  "type": "https://api.example.com/errors/not-found",
  "title": "User Not Found",
  "status": 404,
  "detail": "The user with id 123 does not exist",
  "instance": "/users/123"
}
```

### Structure

```typescript
interface ProblemDetail {
  type: string
  title: string
  status: number
  detail?: string
  instance?: string
  errors?: FieldError[]
}

interface FieldError {
  field: string
  message: string
}
```

## Error Types

### 400 Bad Request

```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "The request body contains invalid fields",
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
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The requested resource was not found"
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

**Nota**: Não exponha detalhes de erros internos em produção.

## Implementation

### FastAPI

```python
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "type": f"https://api.example.com/errors/{exc.detail}",
            "title": exc.detail,
            "status": exc.status_code,
            "detail": str(exc.detail)
        }
    )

@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "type": "https://api.example.com/errors/internal",
            "title": "Internal Server Error",
            "status": 500,
            "detail": "An unexpected error occurred"
        }
    )
```

### Express

```javascript
class AppError extends Error {
  constructor(message, statusCode = 500, type = 'internal') {
    super(message)
    this.statusCode = statusCode
    this.type = type
  }
}

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    type: `https://api.example.com/errors/${err.type}`,
    title: err.message,
    status: statusCode,
    detail: err.message
  })
}

app.use(errorHandler)
```

### NestJS

```typescript
@Controller()
export class GlobalExceptionFilter {
  @Catch()
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    response.status(exception.getStatus()).json({
      type: `https://api.example.com/errors/${exception.getResponse()}`,
      title: exception.message,
      status: exception.getStatus(),
      detail: exception.message
    })
  }
}
```

## Validation Errors

```python
# Pydantic/FastAPI
from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    password: str = Field(..., min_length=8)

try:
    user = UserCreate.parse_obj(data)
except ValidationError as e:
    raise HTTPException(
        status_code=422,
        detail=e.errors()
    )
```

## Logging

```python
import logging

logger = logging.getLogger(__name__)

@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    logger.error(f"Error: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={...}
    )
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Consistent format | Mesma estrutura para todos os erros |
| Include request ID | Para troubleshooting |
| Hide internals | Não exponha stack traces |
| Log errors | Para debugging |
| Use proper codes | 400 vs 500 vs etc |
| Include details | Para debugging (dev) |