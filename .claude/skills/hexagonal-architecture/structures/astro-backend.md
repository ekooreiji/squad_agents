# Estrutura Hexagonal - Astro + Backend

Estrutura para aplicação Astro (SSR) com backend integrado usando Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/                    # Domain compartilhado
│   │   ├── entities/
│   │   │   └── user.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   ├── application/                # Use Cases
│   │   ├── commands/
│   │   │   └── create-user.ts
│   │   └── use-cases/
│   │       └── create-user.use-case.ts
│   │
│   ├── ports/                     # Interfaces
│   │   ├── input/
│   │   │   └── user.port.ts
│   │   └── output/
│   │       └── user-repository.port.ts
│   │
│   ├── adapters/                 # Implementações
│   │   ├── api/                  # Astro endpoints (API routes)
│   │   │   ├── users/
│   │   │   │   ├── index.ts
│   │   │   │   └── [id].ts
│   │   │   └── index.ts
│   │   └── persistence/
│   │       ├── sqlite.adapter.ts
│   │       └── in-memory.adapter.ts
│   │
│   ├── pages/                    # Astro Pages (SSR)
│   │   ├── index.astro
│   │   ├── users/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   └── api/
│   │       └── users.ts            # API endpoints
│   │
│   ├── components/
│   │   ├── UserList.astro
│   │   └── UserForm.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── env/
│   │   └── client.ts
│   │
│   └── config/
│       └── index.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 2. Modo SSR (Server-Side Rendering)

Para Astro com SSR (backend + frontend together):

```
project/
├── src/
│   ├── domain/
│   │   └── user.ts
│   │
│   ├── application/
│   │   └── create-user.use-case.ts
│   │
│   ├── ports/
│   │   └── user-repository.port.ts
│   │
│   ├── adapters/
│   │   ├── api/                  # REST endpoints
│   │   │   └── users.ts
│   │   └── persistence/
│   │       └── database.ts
│   │
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   └── api/
│   │       └── users.ts         # API endpoints
│   ├── layouts/
│   │   └── Layout.astro
│   └── env/
│       └── schema.ts
│
├── astro.config.mjs
├── package.json
└── .env
```

---

## 3. Exemplos de Código

### 3.1 Domain Entity

```typescript
// domain/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  isActive: boolean;
}

export function createUser(email: string, name: string): User {
  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }
  return {
    id: crypto.randomUUID(),
    email,
    name,
    createdAt: new Date(),
    isActive: true,
  };
}
```

---

### 3.2 Port (Output Interface)

```typescript
// ports/user-repository.port.ts
import { User } from "../domain/user";

export interface UserRepositoryPort {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
```

---

### 3.3 Use Case

```typescript
// application/create-user.use-case.ts
import { User, createUser } from "../domain/user";
import { UserRepositoryPort } from "../ports/user-repository.port";

export interface CreateUserCommand {
  email: string;
  name: string;
}

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const user = createUser(command.email, command.name);
    return this.repository.save(user);
  }
}
```

---

### 3.4 Output Adapter (SQLite/Prisma)

```typescript
// adapters/persistence/database.ts
import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/user";
import { UserRepositoryPort } from "../../ports/user-repository.port";

const prisma = new PrismaClient();

export class PrismaUserRepository implements UserRepositoryPort {
  async save(user: User): Promise<User> {
    return prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        isActive: user.isActive,
      },
    }) as Promise<User>;
  }

  async findById(id: string): Promise<User | null> {
    return (await prisma.user.findUnique({
      where: { id },
    })) as User | null;
  }

  async findAll(): Promise<User[]> {
    return (await prisma.user.findMany()) as User[];
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
```

---

### 3.5 Input Adapter (Astro API Routes)

```typescript
// adapters/api/users.ts
import type { APIRoute } from "astro";
import { CreateUserUseCase } from "../../application/create-user.use-case";
import { PrismaUserRepository } from "../persistence/database";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const repository = new PrismaUserRepository();
  const useCase = new CreateUserUseCase(repository);

  try {
    const user = await useCase.execute(data);
    return new Response(JSON.stringify(user), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
};

export const GET: APIRoute = async () => {
  const repository = new PrismaUserRepository();
  const users = await repository.findAll();
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};
```

---

### 3.6 Frontend (Astro Page)

```astro
---
// pages/users/index.astro
import Layout from "../../layouts/Layout.astro";
import { PrismaUserRepository } from "../adapters/persistence/database";

const repository = new PrismaUserRepository();
const users = await repository.findAll();
---

<Layout title="Users">
  <h1>Users</h1>
  <ul>
    {users.map((user) => (
      <li>{user.name} - {user.email}</li>
    ))}
  </ul>
</Layout>
```

---

### 3.7 Formulário (Component)

```astro
---
// components/UserForm.astro
---

<form id="user-form">
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="name" placeholder="Name" required />
  <button type="submit">Create User</button>
</form>

<script>
  const form = document.getElementById("user-form");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });

    window.location.reload();
  });
</script>
```

---

## 4. Configuração SSR

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
```

---

## 5. Resumo

| Camada | Local | Responsabilidade |
|--------|-------|----------------|
| Domain | `src/domain/` | Entities, Types |
| Application | `src/application/` | Use Cases |
| Ports | `src/ports/` | Interfaces |
| Adapters | `src/adapters/` | API, Persistence |
| Pages | `src/pages/` | Astro Pages |
| Components | `src/components/` | UI Components |

---

## 6. Diferenças com React/Angular

| Aspecto | Astro | React |
|--------|-------|-------|
| Rendering | SSR + Islands | SPA (client) |
| Data Fetch | Direct (SSR) | useEffect/API |
| State | No (stateless) | useState |
| Full-stack | Same project | Separate backend |

---

## 7. Arquitetura Geral

```
┌─────────────────────────────────────────────────────────┐
│                    ASTRO APP                           │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐   │
│  │   Pages   │  │ Components  │  │  API Routes │   │
│  │  (.astro)│  │  (.astro)  │  │  (/api/)   │   │
│  └─────┬─────┘  └─────┬──────┘  └──────┬──────┘   │
│        │              │                │            │
│  ┌─────▼──────────────▼────────────────▼──────────┐   │
│  │              APPLICATION                       │   │
│  │              Use Cases                       │   │
│  └─────────────────┬────────────────────────────┘   │
│                    │                                  │
│  ┌────────────────▼────────────────────────────┐         │
│  │              PORTS                        │         │
│  │       (Interfaces abstratas)              │         │
│  └─────────────────┬────────────────────────┘         │
│                    │                                  │
│  ┌────────────────▼────────────────────────┐        │
│  │            ADAPTERS                     │        │
│  │  HTTP Endpoints + Database implementations │        │
│  └──────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
```