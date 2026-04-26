# OpenAPI Specification

## Visão Geral

OpenAPI é uma especificação para descrever APIs RESTful. Anterior conhecido como Swagger.

## Estrutura

```yaml
openapi: 3.0.3
info:
  title: My API
  version: 1.0.0
  description: API description
servers:
  - url: https://api.example.com
paths:
  /users:
    get:
      summary: List users
      responses:
        '200':
          description: Success
```

## Info Object

```yaml
info:
  title: User API
  version: 1.0.0
  description: |
    ## User Management API
    
    This API allows managing users.
  contact:
    name: API Support
    email: support@example.com
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
```

## Servers

```yaml
servers:
  - url: https://api.example.com/v1
    description: Production
  - url: https://staging-api.example.com/v1
    description: Staging
  - url: http://localhost:3000
    description: Development
```

## Paths

```yaml
paths:
  /users:
    get:
      summary: List users
      description: Returns a list of users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
    post:
      summary: Create user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUser'
      responses:
        '201':
          description: User created
```

## Parameters

```yaml
parameters:
  - name: userId
    in: path
    required: true
    schema:
      type: integer
    description: User ID
  - name: Accept-Language
    in: header
    schema:
      type: string
      enum: [en, pt, es]
```

## Request Body

```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        type: object
        required:
          - name
          - email
        properties:
          name:
            type: string
          email:
            type: string
            format: email
```

## Responses

```yaml
responses:
  '200':
    description: User found
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/User'
  '404':
    description: User not found
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Error'
```

## Schemas

```yaml
components:
  schemas:
    User:
      type: object
      required:
        - id
        - name
        - email
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          example: John Doe
        email:
          type: string
          format: email
          example: john@example.com
        createdAt:
          type: string
          format: date-time
    
    CreateUser:
      type: object
      required:
        - name
        - email
      properties:
        name:
          type: string
        email:
          type: string
        password:
          type: string
          minLength: 8
    
    Error:
      type: object
      properties:
        code:
          type: string
        message:
          type: string
```

## Security

```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key

security:
  - bearerAuth: []
  - apiKey: []
```

## Tags

```yaml
tags:
  - name: users
    description: User management
  - name: posts
    description: Post management
```

## Tools

| Tool | Description |
|------|-------------|
| Swagger Editor | Online editor |
| Swagger UI | Interactive docs |
| Redoc | Alternative docs |
| Stoplight | Design platform |

## OpenAPI vs JSON:API

| OpenAPI | JSON:API |
|---------|----------|
| RESTful only | RESTful only |
| Design-first | Implementation-first |
| More verbose | Concise |
| Better tooling | Simpler |