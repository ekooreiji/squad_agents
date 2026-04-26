# Exemplo Completo - React Hexagonal

Exemplo de implementação de Arquitetura Hexagonal no frontend React.

---

## 1. Estrutura

```
src/
├── domain/
│   └── types/
│       └── user.ts           # Types e interfaces
├── application/
│   └── hooks/
│       └── use-users.ts      # Hooks (use cases)
├── adapters/
│   ├── api/
│   │   └── user.api.ts      # HTTP client
│   └── facade/
│       └── user.facade.ts    # API facade
├── components/
│   └── UserList.tsx
├── pages/
│   └── UsersPage.tsx
├── App.tsx
└── main.tsx
```

---

## 2. Domain (Types)

```typescript
// domain/types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  isActive: boolean;
}

export interface CreateUserRequest {
  email: string;
  name: string;
}
```

---

## 3. Port (Interface)

```typescript
// domain/types/user.port.ts
import { User, CreateUserRequest } from "./user";

export interface UserPort {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User>;
  createUser(request: CreateUserRequest): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
```

---

## 4. Adapter (API Client)

```typescript
// adapters/api/user.api.ts
import axios from "axios";
import { User, CreateUserRequest } from "../../domain/types/user";
import { UserPort } from "../../domain/types/user.port";

export class UserApiAdapter implements UserPort {
  private readonly client = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  });

  async getUsers(): Promise<User[]> {
    const { data } = await this.client.get<User[]>("/users");
    return data;
  }

  async getUser(id: string): Promise<User> {
    const { data } = await this.client.get<User>(`/users/${id}`);
    return data;
  }

  async createUser(request: CreateUserRequest): Promise<User> {
    const { data } = await this.client.post<User>("/users", request);
    return data;
  }

  async deleteUser(id: string): Promise<void> {
    await this.client.delete(`/users/${id}`);
  }
}
```

---

## 5. Application (Hook)

```typescript
// application/hooks/use-users.ts
import { useState, useCallback } from "react";
import { User, CreateUserRequest } from "../../domain/types/user";
import { UserPort } from "../../domain/types/user.port";
import { UserApiAdapter } from "../../adapters/api/user.api";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const api: UserPort = new UserApiAdapter();

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getUsers();
      setUsers(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (request: CreateUserRequest) => {
    setLoading(true);
    try {
      const user = await api.createUser(request);
      setUsers((prev) => [...prev, user]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUser = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await api.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, loadUsers, createUser, deleteUser };
}
```

---

## 6. Componente

```typescript
// components/UserList.tsx
import { useUsers } from "../application/hooks/use-users";

export function UserList() {
  const { users, loading, error, loadUsers, deleteUser } = useUsers();

  return (
    <div>
      <button onClick={loadUsers} disabled={loading}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error.message}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 7. Resumo

| Camada | Local | Descrição |
|--------|-------|-----------|
| Domain | `domain/types/` | Types interfaces |
| Application | `application/hooks/` | React hooks |
| Port | `domain/types/*.port.ts` | Interface abstrata |
| Adapter | `adapters/api/` | HTTP client |