# HTTP Methods

## Visão Geral

| Method | Safe | Idempotent | Descrição |
|--------|------|------------|-----------|
| GET | ✓ | ✓ | Ler recurso |
| POST | ✗ | ✗ | Criar recurso |
| PUT | ✗ | ✓ | Substituir recurso |
| PATCH | ✗ | ✓ | Atualizar parcialmente |
| DELETE | ✗ | ✓ | Deletar recurso |
| HEAD | ✓ | ✓ | Same as GET, sem body |
| OPTIONS | ✓ | ✓ | Ver recursos disponíveis |

## GET

```http
GET /users/1 HTTP/1.1
Host: api.example.com
Accept: application/json
```

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Usos
- Listar recursos: `GET /users`
- Filtrar: `GET /users?status=active`
- Paginar: `GET /users?page=1&limit=10`
- Ordenar: `GET /users?sort=name&order=asc`

## POST

```http
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

```http
HTTP/1.1 201 Created
Location: /users/1

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Usos
- Criar recursos
- Executar ações
- Submeter dados a formulários

## PUT

```http
PUT /users/1 HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.new@example.com"
}
```

**Atenção**: PUT substitui o recurso inteiro. Campos omitidos podem serzerados.

## PATCH

```http
PATCH /users/1 HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "John Updated"
}
```

### Diferença PUT vs PATCH

| PUT | PATCH |
|-----|-------|
| Substitui recurso inteiro | Atualiza apenas campos enviados |
| {"name": "new"} → name=new | {"name": "new"} → only name updated |
| Idempotent | Não é necesariamente idempotent |

## DELETE

```http
DELETE /users/1 HTTP/1.1
Host: api.example.com
```

```http
HTTP/1.1 204 No Content
```

### Soft Delete vs Hard Delete

#### Soft Delete (Recomendado)
```http
DELETE /users/1 HTTP/1.1
```
```json
{
  "id": 1,
  "deleted": true,
  "deletedAt": "2024-01-15T10:30:00Z"
}
```

#### Hard Delete
```http
DELETE /users/1?permanent=true HTTP/1.1
```

## HEAD

```http
HEAD /users/1 HTTP/1.1
Host: api.example.com
```

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 156
```

## OPTIONS

```http
OPTIONS /users HTTP/1.1
Host: api.example.com
```

```http
HTTP/1.1 200 OK
Allow: GET, POST, OPTIONS
Content-Type: application/json
```

## HTTP Methods em Frameworks

### FastAPI (Python)
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/users")
def get_users():
    return []

@app.post("/users")
def create_user(user: UserCreate):
    return user

@app.put("/users/{user_id}")
def update_user(user_id: int, user: UserUpdate):
    return user

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    return {"status": "deleted"}
```

### Express (JavaScript)
```javascript
app.get('/users', (req, res) => res.json([]))
app.post('/users', (req, res) => res.status(201).json(req.body))
app.put('/users/:id', (req, res) => res.json(req.body))
app.delete('/users/:id', (req, res) => res.status(204).send())
```

### NestJS (TypeScript)
```typescript
@Controller('users')
export class UsersController {
  @Get()
  findAll() { return [] }

  @Post()
  @HttpCode(HttpCode.CREATED)
  create(@Body() createUserDto: CreateUserDto) { return createUserDto }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return updateUserDto
  }

  @Delete(':id')
  @HttpCode(HttpCode.NO_CONTENT)
  remove(@Param('id') id: string) { }
}
```

### Spring (Java)
```java
@RestController
@RequestMapping("/users")
public class UsersController {

    @GetMapping
    public List<User> getUsers() { return List.of(); }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) { return user; }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) { return user; }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) { }
}
```

## Status Codes Recomendados

| Method | Success | Created | No Content |
|--------|---------|---------|------------|
| GET | 200 | | |
| POST | | 201 | |
| PUT | 200 | 201 | 204 |
| PATCH | 200 | | 204 |
| DELETE | 200 | | 204 |