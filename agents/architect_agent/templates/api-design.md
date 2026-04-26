# API Design: {Nome da API}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Solution Architect Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | api-design |

---

## Visão Geral

{Descrição da API em 1-2 linhas}

---

## BASE URL
```
{Base URL}
```

---

## Autenticação

| Tipo | Descrição |
|------|----------|
| Bearer Token | JWT com expiração |
| API Key | Chave de API para serviços |

---

## Headers Comuns

| Header | Valor | Obrigatório |
|--------|-------|------------|
| Content-Type | application/json | Sim |
| Authorization | Bearer {token} | Sim |
| Accept | application/json | Sim |
| X-Request-ID | UUID | Não |

---

## Endpoints

### {Recurso 1}

#### Listar {Recursos}
| Atributo | Valor |
|---------|-------|
| Método | GET |
| Path | /{resources} |
| Descrição | Lista todos os {recursos} |

**Query Parameters**
| Parâmetro | Tipo | Obrigatório | Default | Descrição |
|----------|------|------------|---------|----------|
| page | number | Não | 1 | Número da página |
| per_page | number | Não | 20 | Itens por página |
| sort | string | Não | created_at | Campo para ordenação |
| order | string | No | desc | asc ou desc |
| {filter} | string | Não | - | Filtro adicional |

**Response 200**
```json
{
  "data": [
    {
      "id": "uuid",
      "{field1}": "string",
      "created_at": "timestamp"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 20,
    "total_pages": 5
  }
}
```

---

#### Criar {Recurso}
| Atributo | Valor |
|---------|-------|
| Método | POST |
| Path | /{resources} |
| Descrição | Cria um novo {recurso} |

**Request Body**
```json
{
  "{field1}": "string",
  "{field2}": "string"
}
```

**Response 201**
```json
{
  "data": {
    "id": "uuid",
    "{field1}": "string",
    "created_at": "timestamp"
  }
}
```

---

#### Detalhar {Recurso}
| Atributo | Valor |
|---------|-------|
| Método | GET |
| Path | /{resources}/:id |
| Descrição | Detalha um {recurso} específico |

**Response 200**
```json
{
  "data": {
    "id": "uuid",
    "{field1}": "string",
    "created_at": "timestamp",
    "updated_at": "timestamp"
  }
}
```

---

#### Atualizar {Recurso}
| Atributo | Valor |
|---------|-------|
| Método | PUT |
| Path | /{resources}/:id |
| Descrição | Atualiza um {recurso} existente |

**Request Body**
```json
{
  "{field1}": "string"
}
```

**Response 200**
```json
{
  "data": {
    "id": "uuid",
    "{field1}": "string",
    "updated_at": "timestamp"
  }
}
```

---

#### Deletar {Recurso}
| Atributo | Valor |
|---------|-------|
| Método | DELETE |
| Path | /{resources}/:id |
| Descrição | Remove um {recurso} |

**Response 204**
```
No Content
```

---

## Códigos de Status

| Código | Significado |
|--------|-----------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

## Tratamento de Erros

### Error Response Format
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Mensagem de erro",
    "details": [
      {
        "field": "{field}",
        "message": "Erro específico"
      }
    ]
  }
}
```

### Códigos de Erro

| Código | Descrição |
|--------|-----------|
| INVALID_REQUEST | Request inválido |
| UNAUTHORIZED | Token ausente ou inválido |
| FORBIDDEN | Sem permissão |
| NOT_FOUND | Recurso não encontrado |
| CONFLICT | Conflito de estado |
| RATE_LIMITED | Limite de requisições excedido |

---

## Rate Limiting

| Plano | Limite |
|-------|-------|
| Free | {N} req/min |
| Pro | {N} req/min |
| Enterprise | {N} req/min |

---

## Versionamento

| Versão | Status | Data de Lançamento |
|-------|--------|------------------|
| v1 | Current | {YYYY-MM-DD} |
| v2 | Deprecated | - |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | {Pergunta 1} | {Justificativa 1} |
| 2 | {Pergunta 2} | {Justificativa 2} |

---

## Próximos Passos
- [ ] Implementar endpoints
- [ ] Criar documentação OpenAPI
- [ ] Configurar rate limiting
- [ ] Adicionar testes

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Solution Architect Agent | Versão inicial |