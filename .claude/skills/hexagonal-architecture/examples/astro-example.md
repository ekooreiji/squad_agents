# Exemplo Completo - Astro Hexagonal

Exemplo de implementação de Arquitetura Hexagonal com Astro (SSR).

---

## 1. Estrutura

```
src/
├── domain/
│   └── user.ts              # Entity + Types
├── application/
│   └── use-cases/
│       └── create-user.ts # Use case
├── ports/
│   └── user-repository.ts  # Port interface
├── adapters/
│   ├── api/
│   │   └── users.ts       # API routes
│   └── persistence/
│       └── database.ts    # DB adapter
├── pages/
│   ├── index.astro       # Home
│   └── users/
│       └── index.astro  # Users page
└── astro.config.mjs
```

---

## 2. Domain

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

## 3. Port

```typescript
// ports/user-repository.ts
import { User } from "../domain/user";

export interface UserRepositoryPort {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
```

---

## 4. Use Case

```typescript
// application/use-cases/create-user.ts
import { User, createUser } from "../../domain/user";
import { UserRepositoryPort } from "../../ports/user-repository";

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

## 5. Adapter (Prisma/SQLite)

```typescript
// adapters/persistence/database.ts
import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/user";
import { UserRepositoryPort } from "../../ports/user-repository";

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
    }) as unknown as User;
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } }) as unknown as User | null;
  }

  async findAll(): Promise<User[]> {
    return prisma.user.findMany() as unknown as User[];
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
```

---

## 6. Input Adapter (Astro API Route)

```typescript
// adapters/api/users.ts
import type { APIRoute } from "astro";
import { CreateUserUseCase } from "../../application/use-cases/create-user";
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

## 7. Frontend (Astro Page SSR)

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

## 8. Configuration

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
});
```

---

## 9. Resumo

| Camada | Local | Descrição |
|--------|-------|-----------|
| Domain | `domain/` | Entity + Functions |
| Application | `application/` | Use Cases |
| Ports | `ports/` | Interfaces |
| Adapters | `adapters/` | DB + API |
| Pages | `pages/` | SSR Pages |