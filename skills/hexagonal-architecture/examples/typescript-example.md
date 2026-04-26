# Exemplo Completo - TypeScript Hexagonal

Exemplo de implementação de Arquitetura Hexagonal com TypeScript e Node.js.

---

## 1. Estrutura

```
src/
├── domain/
│   ├── entities/
│   │   └── user.ts
│   └── index.ts
├── application/
│   └── use-cases/
│       └── create-user.use-case.ts
├── ports/
│   └── output/
│       └── user-repository.port.ts
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       └── controller.ts
│   └── outbound/
│       └── persistence/
│           └── in-memory.repository.ts
├── main.ts
└── package.json
```

---

## 2. Domain Entity

```typescript
// domain/entities/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  isActive: boolean;
}

export class UserEntity implements User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly createdAt: Date,
    public readonly isActive: boolean = true
  ) {}

  activate(): void {
    // Would need mutability or DTO
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }
}
```

---

## 3. Port (Output Interface)

```typescript
// ports/output/user-repository.port.ts
import { User } from "../../domain/entities/user";

export interface UserRepositoryPort {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
```

---

## 4. Use Case

```typescript
// application/use-cases/create-user.use-case.ts
import { User } from "../../domain/entities/user";
import { UserRepositoryPort } from "../../ports/output/user-repository.port";

export interface CreateUserCommand {
  email: string;
  name: string;
}

export class DuplicateUserError extends Error {
  constructor(email: string) {
    super(`User with email ${email} already exists`);
    this.name = "DuplicateUserError";
  }
}

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(command: CreateUserCommand): Promise<User> {
    // Check existing
    const existing = await this.repository.findByEmail(command.email);
    if (existing) {
      throw new DuplicateUserError(command.email);
    }

    // Create entity
    const user: User = {
      id: crypto.randomUUID(),
      email: command.email,
      name: command.name,
      createdAt: new Date(),
      isActive: true,
    };

    // Persist
    return this.repository.save(user);
  }
}
```

---

## 5. Output Adapter (In-Memory)

```typescript
// adapters/outbound/persistence/in-memory.repository.ts
import { User } from "../../domain/entities/user";
import { UserRepositoryPort } from "../../ports/output/user-repository.port";

export class InMemoryUserRepository implements UserRepositoryPort {
  private users: Map<string, User> = new Map();

  async save(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async delete(id: string): Promise<boolean> {
    return this.users.delete(id);
  }
}
```

---

## 6. Input Adapter (Express Controller)

```typescript
// adapters/inbound/http/controller.ts
import { Request, Response } from "express";
import { CreateUserUseCase, CreateUserCommand, DuplicateUserError } from "../../application/use-cases/create-user.use-case";
import { InMemoryUserRepository } from "../../adapters/outbound/persistence/in-memory.repository";

export class UserController {
  private readonly repository = new InMemoryUserRepository();
  private readonly createUserUseCase = new CreateUserUseCase(this.repository);

  async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      const command = new CreateUserCommand(email, name);
      const user = await this.createUserUseCase.execute(command);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof DuplicateUserError) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }
}
```

---

## 7. Express Routes

```typescript
// adapters/inbound/http/routes.ts
import { Router } from "express";
import { UserController } from "./controller";

const router = Router();
const controller = new UserController();

router.post("/users", (req, res) => controller.create(req, res));

export { router };
```

---

## 8. Composition Root

```typescript
// main.ts
import express from "express";
import { router } from "./adapters/inbound/http/routes";

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

## 9. Testando

```bash
# Run
npx ts-node main.ts

# Test
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "name": "Test User"}'

# Response
# {
#   "id": "uuid-here",
#   "email": "test@example.com",
#   "name": "Test User",
#   "createdAt": "2024-01-01T00:00:00.000Z",
#   "isActive": true
# }
```

---

## 10. Resumo

| Camada | Arquivo | Descrição |
|--------|---------|-----------|
| Domain | `domain/` | Entities e types |
| Application | `application/` | Use cases |
| Ports | `ports/` | Interfaces |
| Inbound | `adapters/inbound/` | HTTP handlers |
| Outbound | `adapters/outbound/` | Repositories |