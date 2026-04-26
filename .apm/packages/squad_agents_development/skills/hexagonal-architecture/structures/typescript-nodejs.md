# Estrutura Hexagonal - TypeScript Node.js Native

Estrutura para aplicação Node.js nativa com TypeScript e Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/                    # NÚCLEO
│   │   ├── entities/
│   │   │   ├── user.ts
│   │   │   └── index.ts
│   │   ├── value-objects/
│   │   │   ├── email.ts
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   └── events/
│   │       └── user.event.ts
│   │
│   ├── application/                # USE CASES
│   │   ├── commands/
│   │   │   ├── create-user.command.ts
│   │   │   └── index.ts
│   │   ├── use-cases/
│   │   │   ├── create-user.use-case.ts
│   │   │   └── index.ts
│   │   └── interfaces/
│   │       └── index.ts
│   │
│   ├── ports/                     # INTERFACES
│   │   ├── input/
│   │   │   ├── user-input.port.ts
│   │   │   └── index.ts
│   │   └── output/
│   │       ├── user-repository.port.ts
│   │       └── index.ts
│   │
│   ├── adapters/                 # ADAPTERS
│   │   ├── inbound/
│   │   │   ├── http/
│   │   │   │   ├── server.ts
│   │   │   │   ├── routes.ts
│   │   │   │   └── controllers/
│   │   │   │       └── user.controller.ts
│   │   │   └── cli/
│   │   │       └── user.commands.ts
│   │   └── outbound/
│   │       ├── persistence/
│   │       │   ├── in-memory.repository.ts
│   │       │   └── postgres.repository.ts
│   │       └── external/
│   │           └── email.adapter.ts
│   │
│   ├── config/
│   │   └── index.ts
│   │
│   └── main.ts                   # Composition Root
│
├── package.json
├── tsconfig.json
├── tests/
│   ├── unit/
│   ├── integration/
│   └── mocks/
└── README.md
```

---

## 2. Exemplo: Domain Entity

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
    // This would need to be mutable or use a DTO
  }

  deactivate(): void {
    // This would need to be mutable or use a DTO
  }
}
```

---

## 3. Exemplo: Port (Output Interface)

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

## 4. Exemplo: Use Case

```typescript
// application/use-cases/create-user.use-case.ts
import { User } from "../../domain/entities/user";
import { UserRepositoryPort } from "../../ports/output/user-repository.port";

export interface CreateUserCommand {
  email: string;
  name: string;
}

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const existing = await this.repository.findByEmail(command.email);
    if (existing) {
      throw new Error(`User with email ${command.email} already exists`);
    }

    const user: User = {
      id: this.generateId(),
      email: command.email,
      name: command.name,
      createdAt: new Date(),
      isActive: true,
    };

    return this.repository.save(user);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}
```

---

## 5. Exemplo: Input Adapter (HTTP Server)

```typescript
// adapters/inbound/http/server.ts
import http from "http";

const server = http.createServer(async (req, res) => {
  // Route handling here
});
```

---

## 6. Exemplo: Output Adapter (In-Memory)

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

## 7. Exemplo: Composition Root

```typescript
// main.ts
import { CreateUserUseCase } from "./application/use-cases/create-user.use-case";
import { InMemoryUserRepository } from "./adapters/outbound/persistence/in-memory.repository";

// Wire dependencies
const repository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(repository);

// Use it
createUserUseCase.execute({ email: "test@test.com", "Test User" });
```