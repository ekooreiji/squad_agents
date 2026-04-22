# Hexagonal Architecture - Templates de Estrutura

Templates prontos para iniciar projetos com Arquitetura Hexagonal.

---

## 1. Template Geral (Python)

### Estrutura Base

```
project/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   ├── value_objects/
│   │   ├── services/
│   │   └── __init__.py
│   ├── application/
│   │   ├── commands/
│   │   ├── queries/
│   │   ├── use_cases/
│   │   └── __init__.py
│   ├── ports/
│   │   ├── input/
│   │   ├── output/
│   │   └── __init__.py
│   ├── adapters/
│   │   ├── inbound/
│   │   └── outbound/
│   └── __init__.py
├── tests/
│   ├── unit/
│   ├── integration/
│   └── mocks/
├── pyproject.toml
└── README.md
```

---

## 2. Template FastAPI

```
src/
├── domain/
│   └── {entity}.py
├── ports/
│   ├── input/
│   │   └── {entity}_input_port.py
│   └── output/
│       └── {entity}_repository_port.py
├── application/
│   └── use_cases/
│       └── create_{entity}_use_case.py
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       ├── routes.py
│   │       └── schemas.py
│   └── outbound/
│       └── persistence/
│           └── {entity}_repository.py
├── main.py
└── config.py
```

### Dependency Injection

```python
# main.py - Template FastAPI
from fastapi import FastAPI, Depends

from adapters.inbound.http import routes
from adapters.outbound.persistence import DBAdapter

app = FastAPI()

# DI - Providers
def get_{entity}_repository():
    return DBAdapter()

def get_create_{entity}_use_case(
    repo = Depends(get_{entity}_repository)
):
    return CreateEntityUseCase(repo)

app.include_router(routes.router)
```

---

## 3. Template Django

```
project/
├── src/
│   ├── domain/
│   ├── application/
│   │   └── use_cases/
│   ├── ports/
│   │   └── output/
│   └── adapters/
│       ├── inbound/
│       │   └── http/
│       └── outbound/
│           └── persistence/
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py
```

### Django View

```python
# adapters/inbound/http/views.py - Template
from django.views import View

class EntityView(View):
    def post(self, request):
        from application.use_cases import CreateEntityUseCase
        from adapters.outbound.persistence import DjangoORMAdapter

        adapter = DjangoORMAdapter()
        use_case = CreateEntityUseCase(adapter)

        # Process request
        entity = use_case.execute(command)
        return JsonResponse(dict(entity))
```

---

## 4. Template Flask

```
src/
├── domain/
├── application/
│   └── use_cases/
├── ports/
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       └── blueprint.py
│   └── outbound/
│       └── persistence/
└── app.py
```

### Flask Blueprint

```python
# adapters/inbound/http/blueprint.py - Template
from flask import Blueprint, request, jsonify

bp = Blueprint("entity", __name__)

@bp.route("/entity", methods=["POST"])
def create_entity():
    data = request.get_json()
    # Use case logic
    return jsonify(result), 201
```

---

## 5. Template TypeScript Node.js

```
src/
├── domain/
│   ├── entities/
│   └── index.ts
├── application/
│   └── use-cases/
├── ports/
│   └── output/
│       └── {entity}.port.ts
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       ├── server.ts
│   │       └── routes.ts
│   └── outbound/
│       └── persistence/
│           └── in-memory.repository.ts
├── main.ts
└── package.json
```

### Express Setup

```typescript
// adapters/inbound/http/server.ts - Template
import express from "express";

const app = express();
app.use(express.json());

// Routes
import { router } from "./routes";
app.use("/api", router);

app.listen(3000);
```

---

## 6. Template React

```
src/
├── domain/
│   └── types/
├── application/
│   └── hooks/
│       └── use-{entity}.ts
├── adapters/
│   └── api/
│       └── {entity}.api.ts
├── components/
├── hooks/
├── App.tsx
└── main.tsx
```

### React Hook

```typescript
// application/hooks/use-entity.ts - Template
import { useState, useCallback } from "react";
import { EntityPort } from "../../ports/entity.port";
import { EntityApiAdapter } from "../../adapters/api/entity.api";

export function useEntity() {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [loading, setLoading] = useState(false);
  const api: EntityPort = new EntityApiAdapter();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getAll();
      setEntities(data);
    } finally {
      setLoading(false);
    }
  }, []);

  return { entities, loading, load };
}
```

---

## 7. Template Angular

```
src/
├── domain/
│   └── types/
├── ports/
│   └── entity.port.ts
├── application/
│   ├── services/
│   │   └── entity.service.ts
│   └── facades/
│       └── entity.facade.ts
├── adapters/
│   └── api/
│       └── entity.api.ts
├── features/
│   └── {entity}/
│       └── {entity}-list/
├── app.component.ts
└── app.config.ts
```

### Angular Service

```typescript
// application/services/entity.service.ts - Template
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

import { Entity } from "../../domain/types/entity";
import { EntityPort } from "../../ports/entity.port";

@Injectable({ providedIn: "root" })
export class EntityService {
  private readonly port = inject(EntityPort);

  getAll(): Observable<Entity[]> {
    return this.port.getAll();
  }
}
```

---

## 8. Template Astro

```
src/
├── domain/
│   └── {entity}.ts
├── application/
│   └── use-cases/
├── ports/
│   └── {entity}_repository.ts
├── adapters/
│   ├── api/
│   │   └── {entity}s.ts          # API routes
│   └── persistence/
│       └── database.ts
├── pages/
│   ├── index.astro
│   └── {entity}s/
│       └── index.astro
└── astro.config.mjs
```

### Astro API Route

```typescript
// adapters/api/{entity}s.ts - Template
import type { APIRoute } from "astro";
import { UseCase } from "../../application/use-cases/use-case";
import { Adapter } from "../persistence/adapter";

export const GET: APIRoute = async () => {
  const adapter = new Adapter();
  const useCase = new UseCase(adapter);
  const data = await useCase.execute();
  return new Response(JSON.stringify(data));
};
```

---

## 9. Checklist de Início

- [ ] Criar estrutura de diretórios
- [ ] Definir entities (Domain)
- [ ] Definir ports (Interfaces)
- [ ] Implementar use cases (Application)
- [ ] Implementar adapters (Inbound + Outbound)
- [ ] Configurar DI/Composition Root
- [ ] Testar domínio isoladamente
- [ ] Testar use cases com mocks

---

## 10. Quick Start Commands

```bash
# Python FastAPI
pip install fastapi uvicorn sqlalchemy

# TypeScript
npm install express typescript @types/node

# React
npm create vite@latest my-app -- --template react-ts

# Angular
ng new my-app

# Astro
npm create astro@latest
```