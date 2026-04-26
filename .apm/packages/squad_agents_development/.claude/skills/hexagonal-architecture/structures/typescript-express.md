# Estrutura Hexagonal - Express (TypeScript/Node.js)

Estrutura para aplicação Express com TypeScript e Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── user.ts
│   │   ├── value-objects/
│   │   │   └── email.ts
│   │   └── services/
│   │       └── user.service.ts
│   │
│   ├── application/
│   │   └── use-cases/
│   │       └── create-user.use-case.ts
│   │
│   ├── ports/
│   │   ├── input/
│   │   │   └── user-input.port.ts
│   │   └── output/
│   │       └── user-repository.port.ts
│   │
│   ├── adapters/
│   │   ├── inbound/
│   │   │   └── http/
│   │   │       ├── routes.ts
│   │   │       ├── controller.ts
│   │   │       └── middleware.ts
│   │   └── outbound/
│   │       └── persistence/
│   │           ├── in-memory.repository.ts
│   │           └── sequelize.repository.ts
│   │
│   ├── config/
│   │   └── env.ts
│   │
│   └── app.ts                  # Composition Root
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 2. Exemplo: Domain

```typescript
// domain/entities/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  isActive: boolean;
}
```

---

## 3. Exemplo: Port (Output)

```typescript
// ports/output/user-repository.port.ts
import { User } from "../../domain/entities/user";

export interface UserRepositoryPort {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
```

---

## 4. Exemplo: Use Case

```typescript
// application/use-cases/create-user.use-case.ts
import { User } from "../../domain/entities/user";
import { UserRepositoryPort } from "../../ports/output/user-repository.port";

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(email: string, name: string): Promise<User> {
    const existing = await this.repository.findByEmail(email);
    if (existing) {
      throw new Error("User already exists");
    }

    const user: User = {
      id: crypto.randomUUID(),
      email,
      name,
      createdAt: new Date(),
      isActive: true,
    };

    return this.repository.save(user);
  }
}
```

---

## 5. Exemplo: Input Adapter (Express)

```typescript
// adapters/inbound/http/controller.ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/create-user.use-case";

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      const user = await this.createUserUseCase.execute(email, name);
      res.status(201).json(user);
    } catch (error) {
      res.status(409).json({ error: (error as Error).message });
    }
  }
}
```

```typescript
// adapters/inbound/http/routes.ts
import { Router } from "express";
import { UserController } from "./controller";

const router = Router();
const controller = new UserController();

router.post("/users", (req, res) => controller.create(req, res));
```

---

## 6. Exemplo: Composition Root

```typescript
// app.ts
import express from "express";
import { CreateUserUseCase } from "./application/use-cases/create-user.use-case";
import { InMemoryUserRepository } from "./adapters/outbound/persistence/in-memory.repository";

const app = express();
app.use(express.json());

// DI
const repository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(repository);

// Routes
import { router } from "./adapters/inbound/http/routes";
app.use("/api", router);

app.listen(3000);
```

---

## 7. Resumo

| Camada | Local |
|--------|-------|
| Domain | `src/domain/` |
| Application | `src/application/` |
| Ports | `src/ports/` |
| Inbound | `src/adapters/inbound/` |
| Outbound | `src/adapters/outbound/` |