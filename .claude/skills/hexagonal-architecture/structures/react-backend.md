# Estrutura Hexagonal - React + Backend

Estrutura para aplicação React (frontend) com backend separado usando Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios (Monorepo)

```
project/
├── packages/
│   ├── shared/                  # Domain compartilhado (opcional)
│   │   ├── domain/
│   │   │   └── types/
│   │   │       └── user.ts
│   │   └── ports/
│   │       └── index.ts
│   │
│   ├── backend/                  # Backend (FastAPI/Express/NestJS)
│   │   ├── src/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   └── user.ts
│   │   │   ├── application/
│   │   │   │   └── use-cases/
│   │   │   │       └── create-user.use-case.ts
│   │   │   ├── ports/
│   │   │   │   ├── input/
│   │   │   │   └── output/
│   │   │   │       └── user-repository.port.ts
│   │   │   ├── adapters/
│   │   │   │   ├── inbound/
│   │   │   │   │   └── http/
│   │   │   │   └── outbound/
│   │   │   │       └── persistence/
│   │   │   │           └── postgres.repository.ts
│   │   │   └── main.ts
│   │   └── package.json
│   │
│   └── frontend/                  # React App
│       ├── src/
│       │   ├── domain/
│       │   │   └── types/
│       │   │       └── user.ts          # Types compartilhados
│       │   ├── application/
│       │   │   └── hooks/
│       │   │       └── use-users.hook.ts
│       │   ├── ports/
│       │   │   └── index.ts            # Interfaces para API
│       │   ├── adapters/
│       │   │   ├── api/
│       │   │   │   └── http/
│       │   │   │       └── api.client.ts
│       │   │   └── facade/
│       │   │   │   └── user.facade.ts
│       │   ├── components/            # Componentes React
│       │   ├── pages/
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── package.json
│       └── vite.config.ts
│
├── package.json                   # Root monorepo
├── pnpm-workspace.yaml
└── README.md
```

---

## 2. Estrutura Alternativa (Single Project)

Para projetos menores (sem monorepo):

```
project/
├── src/
│   ├── domain/
│   │   └── types/
│   │       └── user.ts          # Types (ID, interfaces)
│   │
│   ├── application/
│   │   └── hooks/
│   │       └── use-users.hook.ts
│   │
│   ├── adapters/
│   │   ├── api/
│   │   │   └── http/
│   │   │       └── api.client.ts  # Axios/Fetch client
│   │   └── facade/
│   │       └── user.facade.ts    # API facade
│   │
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
├── backend/                      # API em pasta separada
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   └── adapters/
│   └── main.py
│
├── package.json
└── README.md
```

---

## 3. Frontend: Exemplo - Domain Types

```typescript
// domain/types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  isActive: boolean;
}

export interface CreateUserDTO {
  email: string;
  name: string;
}
```

---

## 4. Frontend: Exemplo - Adapter (API Client)

```typescript
// adapters/api/http/api.client.ts
import axios from "axios";
import { User, CreateUserDTO } from "../../domain/types/user";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export class UserApiAdapter {
  async getAll(): Promise<User[]> {
    const { data } = await api.get<User[]>("/users");
    return data;
  }

  async getById(id: string): Promise<User> {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  }

  async create(dto: CreateUserDTO): Promise<User> {
    const { data } = await api.post<User>("/users", dto);
    return data;
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  }
}
```

---

## 5. Frontend: Exemplo - Facade

```typescript
// adapters/facade/user.facade.ts
import { UserApiAdapter } from "../api/http/api.client";
import { User, CreateUserDTO } from "../../domain/types/user";

export class UserFacade {
  private readonly api = new UserApiAdapter();

  async listUsers(): Promise<User[]> {
    return this.api.getAll();
  }

  async getUser(id: string): Promise<User> {
    return this.api.getById(id);
  }

  async createUser(dto: CreateUserDTO): Promise<User> {
    return this.api.create(dto);
  }

  async deleteUser(id: string): Promise<void> {
    return this.api.delete(id);
  }
}
```

---

## 6. Frontend: Exemplo - React Hook

```typescript
// application/hooks/use-users.hook.ts
import { useState, useCallback } from "react";
import { User, CreateUserDTO } from "../../domain/types/user";
import { UserFacade } from "../../adapters/facade/user.facade";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const facade = new UserFacade();

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await facade.listUsers();
      setUsers(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (dto: CreateUserDTO) => {
    setLoading(true);
    try {
      const user = await facade.createUser(dto);
      setUsers((prev) => [...prev, user]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, loadUsers, createUser };
}
```

---

## 7. Frontend: Exemplo - Componente

```typescript
// components/user-list.component.tsx
import { useUsers } from "../application/hooks/use-users.hook";

export function UserList() {
  const { users, loading, loadUsers } = useUsers();

  return (
    <div>
      <button onClick={loadUsers}>Load Users</button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

## 8. Backend: Estrutura (mesmo dos outros)

```
backend/src/
├── domain/
│   └── entities/user.ts
├── application/
│   └── use-cases/
│       └── create-user.use-case.ts
├── ports/
│   └── output/
│       └── user-repository.port.ts
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       └── routes.ts
│   └── outbound/
│       └── persistence/
│           └── postgres.repository.ts
└── main.ts
```

---

## 9. Resumo

### Frontend Hexagonal (React)

| Camada | Local | Responsabilidade |
|--------|-------|------------------|
| Domain | `domain/types/` | Types e interfaces |
| Application | `application/hooks/` | React hooks (use cases) |
| Ports | `ports/` | Interfaces para adapters |
| Adapters | `adapters/` | API clients, facades |

### Backend Hexagonal

Ver estruturas Python FastAPI ou TypeScript Express.

---

## 10. Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │ Components │  │   Hooks    │  │   Facade   │       │
│  └──────┬──────┘  └──────┬──────┘  └─────┬───────┘       │
│         │                 │               │                │
│  ┌──────▼────────────────▼───────────────▼────────┐      │
│  │              ADAPTERS                          │      │
│  │      API Client (Axios/Fetch)                 │      │
│  └────────────────────┬───────────────────────────┘      │
└───────────────────────┼──────────────────────────────────────┘
                        │ HTTP
┌──────────────────────▼──────────────────────────────────┐
│                    BACKEND                               │
│  ┌────────────────────┬───────────────────────────┐      │
│  │  INPUT ADAPTER    │  OUTPUT ADAPTER          │      │
│  │  FastAPI/Express  │  PostgreSQL/MongoDB     │      │
│  └────────┬─────────┘  └─────────┬──────────────┘      │
│           │                    │                      │
│  ┌────────▼────────────────────▼────────┐            │
│  │            PORTS                     │            │
│  └────────┬────────────────────────────┘            │
│           │                                          │
│  ┌────────▼────────────────────────────────┐          │
│  │              DOMAIN                      │          │
│  │          Entities & Services           │          │
│  └──────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────┘
```