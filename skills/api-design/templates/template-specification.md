# Template: OpenAPI Specification

## Basic Specification

```yaml
openapi: 3.0.3
info:
  title: User API
  version: 1.0.0
  description: API for managing users
servers:
  - url: https://api.example.com/v1
    description: Production

tags:
  - name: users
    description: User management

paths:
  /users:
    get:
      summary: List users
      tags: [users]
      parameters:
        - $ref: '#/components/parameters/Page'
        - $ref: '#/components/parameters/Limit'
      responses:
        '200':
          description: List of users
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UsersResponse'

    post:
      summary: Create user
      tags: [users]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUser'
      responses:
        '201':
          description: User created
          headers:
            Location:
              schema:
                type: string
              example: /users/1

  /users/{userId}:
    get:
      summary: Get user by ID
      tags: [users]
      parameters:
        - $ref: '#/components/parameters/UserId'
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'

components:
  parameters:
    Page:
      name: page
      in: query
      schema:
        type: integer
        default: 1
    Limit:
      name: limit
      in: query
      schema:
        type: integer
        default: 20
    UserId:
      name: userId
      in: path
      required: true
      schema:
        type: integer

  schemas:
    User:
      type: object
      required: [id, name, email]
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

    CreateUser:
      type: object
      required: [name, email]
      properties:
        name:
          type: string
        email:
          type: string
          format: email
        password:
          type: string
          format: password

    UsersResponse:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          $ref: '#/components/schemas/Pagination'

    Pagination:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        total:
          type: integer

  responses:
    NotFound:
      description: Resource not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
```