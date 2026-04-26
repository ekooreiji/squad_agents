# HTTP Status Codes

## 1xx - Informational

| Code | Name | Usage |
|------|------|-------|
| 100 | Continue | Cliente pode continuar |
| 101 | Switching Protocols | Upgrade de protocolo |
| 102 | Processing | Processando requisição |

## 2xx - Success

| Code | Name | Usage |
|------|------|-------|
| **200** | OK | GET bem-sucedido |
| **201** | Created | POST/POST criou recurso |
| **202** | Accepted | Requisição aceita, processando |
| **204** | No Content | DELETE/PATCH bem-sucedido |
| 206 | Partial Content | Paginação parcial |

## 3xx - Redirection

| Code | Name | Usage |
|------|------|-------|
| **301** | Moved Permanently | Recurso mudou permanentemente |
| 302 | Found | Redirect temporário |
| 304 | Not Modified | Cache válido |
| 307 | Temporary Redirect | Redirect temporário |
| 308 | Permanent Redirect | Redirect permanente |

## 4xx - Client Error

| Code | Name | Usage |
|------|------|-------|
| **400** | Bad Request | Requisição inválida |
| **401** | Unauthorized | Autenticação necessária |
| **403** | Forbidden | Sem permissão |
| **404** | Not Found | Recurso não existe |
| 405 | Method Not Allowed | Método não permitido |
| 406 | Not Acceptable | Formato não suportado |
| 408 | Request Timeout | Timeout |
| 409 | Conflict | Conflito (ex: duplicate) |
| 410 | Gone | Recurso removido |
| **422** | Unprocessable Entity | Validação falhou |
| 429 | Too Many Requests | Rate limit |

## 5xx - Server Error

| Code | Name | Usage |
|------|------|-------|
| **500** | Internal Server Error | Erro genérico |
| 501 | Not Implemented | Funcionalidade não suportada |
| 502 | Bad Gateway | Gateway inválido |
| **503** | Service Unavailable | Serviço indisponível |
| 504 | Gateway Timeout | Timeout de gateway |

## Quick Reference

```
2xx OK
201 Created
204 No Content

4xx Client Error
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
422 Unprocessable Entity

5xx Server Error
500 Internal Server Error
503 Service Unavailable
```

## Usage in Frameworks

### FastAPI
```python
from fastapi import HTTPException

@app.get("/users/{user_id}")
def get_user(user_id: int):
    user = db.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

### Express
```javascript
app.get('/users/:id', (req, res) => {
  const user = db.getUser(req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  res.json(user)
})
```

### NestJS
```typescript
@Get(':id')
@HttpCode(HttpStatus.OK)
findOne(@Param('id') id: string) {
  const user = this.usersService.findOne(id);
  if (!user) throw new NotFoundException('User not found');
  return user;
}
```