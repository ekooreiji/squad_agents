# Documentation

OpenAPI, Swagger.

## OpenAPI 3.1

```python
# FastAPI automatic docs
from fastapi import FastAPI
app = FastAPI()

# /docs - Swagger UI
# /redoc - ReDoc
# /openapi.json - OpenAPI JSON
```

## Manual OpenAPI

```python
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI()

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    
    openapi_schema = get_openapi(
        title="My API",
        version="1.0.0",
        description="API Documentation",
        routes=app.routes,
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi
```

## Schema Example

```yaml
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
  description: REST API
servers:
  - url: https://api.example.com
paths:
  /users:
    get:
      summary: List users
      tags:
        - Users
      parameters:
        - in: query
          name: limit
          schema:
            type: integer
            default: 10
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```

## Swagger UI Customization

```python
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI()

def custom_openapi():
    openapi_schema = get_openapi(
        title="My API",
        version="1.0.0",
        routes=app.routes,
    )
    openapi_schema['info']['contact'] = {
        'name': 'Support',
        'email': 'support@example.com'
    }
    return openapi_schema

app.openapi = custom_openapi
```