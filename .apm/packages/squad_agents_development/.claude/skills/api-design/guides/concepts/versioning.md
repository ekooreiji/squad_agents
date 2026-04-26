# API Versioning

## Estratégias de Versionamento

| Estratégia | Exemplo | Prós | Contras |
|------------|---------|------|--------|
| URL Path | `/v1/users` | Simples, visível | Quebra links |
| Header | `Accept: version=v1` | URLs limpas | Menos visível |
| Query | `/users?version=1` | URLs limpas | Cache issue |
| Media Type | `Accept: application/vnd.api.v1+json` | Padrão REST | Complexo |

## 1. URL Path (Recomendado)

```
/v1/users
/v2/users
```

```http
GET /v1/users HTTP/1.1
Host: api.example.com
```

```python
# FastAPI
from fastapi import FastAPI, APIRouter

app = FastAPI()

v1 = APIRouter(prefix="/v1")
v2 = APIRouter(prefix="/v2")

@v1.get("/users")
def get_users_v1():
    return [{"name": "John"}]

@v2.get("/users")
def get_users_v2():
    return [{"name": "John", "profile": {}}]
```

```javascript
// Express
app.get('/v1/users', (req, res) => res.json([{ name: 'John' }]))
app.get('/v2/users', (req, res) => res.json([{ name: 'John', profile: {} }]))
```

## 2. Header

```
X-API-Version: 1
Accept: application/vnd.api.v1+json
```

```http
GET /users HTTP/1.1
Host: api.example.com
X-API-Version: 1
```

```python
from fastapi import Header

@app.get("/users")
def get_users(x_api_version: str = Header(default="1")):
    if x_api_version == "1":
        return [{"name": "John"}]
    return [{"name": "John", "profile": {}}]
```

## 3. Query Parameter

```
/users?version=1
```

```python
@app.get("/users")
def get_users(version: int = 1):
    if version == 1:
        return older_format()
    return newer_format()
```

## 4. Deprecation

```http
GET /v1/users HTTP/1.1
Host: api.example.com
```

```http
HTTP/1.1 200 OK
Deprecation: Sun, 01 Jan 2025 00:00:00 GMT
Link: <https://api.example.com/v2/users>; rel="successor-version"
Sunset: Sat, 01 Feb 2025 00:00:00 GMT
```

```
Sunset header indica quando versão será removida.
Deprecation indica quando versão foi descontinuada.
```

## Migration Strategy

```
┌─────────────────────────────────────────────────────────┐
│                  Timeline                               │
├─────────────────────────────────────────────────────────┤
│ Jan     │ Feb        │ Mar        │ Apr      │ May      │
│ v1 OK   │ v1 deprecated │ v1 sunset  │ v1 gone  │ v2 only  │
│         │ v2 new    │ v2 OK     │ v2 OK    │          │
└─────────────────────────────────────────────────────────┘
```

## Response Headers

```python
@app.get("/users")
def get_users():
    response.headers["Deprecation"] = "Sun, 01 Jan 2025 00:00:00 GMT"
    response.headers["Link"] = "<https://api.example.com/v2/users>; rel='successor-version'"
    return [{"name": "John"}]
```

## Versionamento de Schema

### Breaking Changes

| Mudança | Breaking? |
|---------|-----------|
| Adicionar campo | No |
| Remover campo | Yes |
| Renomear campo | Yes |
| Mudar tipo | Yes |
| Adicionar endpoint | No |
| Remover endpoint | Yes |
| Mudar status code | Yes |

### Non-Breaking Changes

- Adicionar campos opcionais
- Adicionar endpoints
- Mudar ordem de campos
- Adicionar novos campos em responses

## Best Practices

1. **Comece com v1**: Não assuma que não precisará de versionamento
2. **Documente mudanças**: CHANGELOG claro
3. **Deprecation notice**: Avise antecipadamente
4. **Grace period**: Dê tempo para migração (3-6 meses)
5. **Suporte múltiplas versões**: Mantenha versões ativas durante transition

## Referências

- [API Versioning Microsoft](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0#api-version-1)
- [RESTFul API Versioning](https://restfulapi.net/versioning/)