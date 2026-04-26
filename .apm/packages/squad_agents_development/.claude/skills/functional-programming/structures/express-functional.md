# Programação Funcional no Express (Node.js)

Padrões e técnicas de FP para APIs Express.

---

## 1. Middleware Funcional

### Middleware Puro

```typescript
import { RequestHandler } from "express";

// ✗ Impuro - usa globals
let counter = 0;
export const countMiddleware = (req, res, next) => {
    counter++;
    next();
};

// ✓ Puro - estado no closure
export const createCounterMiddleware = () => {
    let counter = 0;
    return (req, res, next) => {
        counter++;
        req.counter = counter;
        next();
    };
};
```

### Middleware com Compose

```typescript
import { compose } from "ramda";

// Compose middleware
const middleware = compose(
    createCounterMiddleware(),
    parseBodyMiddleware,
    addTimestampMiddleware,
);

app.use(middleware);

// Ou com pipe
import { pipe } from "ramda";

const pipeMiddleware = pipe(
    parseBodyMiddleware,
    addTimestampMiddleware,
    createCounterMiddleware(),
);

app.use(pipeMiddleware);
```

---

## 2. Route Handlers Funcionais

### Handler Puro

```typescript
import { Request, Response } from "express";

// Pura - mesmo input = mesmo output
const getUser = (users: User[]) => (id: string): User | undefined =>
    users.find(u => u.id === id);

const getUserHandler = (req: Request, res: Response) => {
    const user = getUser(users)(req.params.id);
    
    if (!user) {
        return res.status(404).json({ error: "Not found" });
    }
    
    return res.json(user);
};
```

### Handler com Either

```typescript
import { Either, left, right } from "fp-ts/Either";

// Either para tratamento de erros
type HandlerResult = Either<Error, User>;

const findUser = (users: User[]): HandlerResult =>
    (id: string) => {
        const user = users.find(u => u.id === id);
        return user 
            ? right(user)
            : left(new Error("User not found"));
    };

const handler = (req: Request, res: Response) => {
    const result = findUser(users)(req.params.id);
    
    match result {
        left: (error) => res.status(404).json({ error: error.message }),
        right: (user) => res.json(user),
    };
};
```

---

## 3. Validation Funcional

### Zod Schemas

```typescript
import { z } from "zod";

// Schema puro
const CreateUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().int().positive().optional(),
});

// Validation pura
const validate = (schema: z.ZodSchema) => (data: unknown) =>
    schema.safeParse(data);

const createUser = (data: unknown) => {
    const result = validate(CreateUserSchema)(data);
    
    if (!result.success) {
        return left(result.error);
    }
    
    return right(result.data);
};
```

### Yup Validation

```typescript
import * as yup from "yup";

// Schema
const UserSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
});

// Validation
const validateUser = async (data: unknown) => {
    try {
        const validated = await UserSchema.validate(data);
        return right(validated);
    } catch (error) {
        return left(error);
    }
};
```

---

## 4. Repository Pattern (FP)

### Repository Funcional

```typescript
// Interface pura
interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    save(user: User): Promise<User>;
    delete(id: string): Promise<boolean>;
}

// Implementação
class InMemoryUserRepository implements UserRepository {
    constructor() {
        this._users = new Map();
    }

    findAll(): User[] {
        return Array.from(this._users.values());
    }

    findById(id: string): User | undefined {
        return this._users.get(id);
    }

    save(user: User): User {
        this._users.set(user.id, user);
        return user;
    }

    delete(id: string): boolean {
        return this._users.delete(id);
    }
}
```

---

## 5. Use Cases Funcionais

### Use Case Puro

```typescript
interface CreateUserCommand {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private readonly repository: UserRepository) {}

    async execute(command: CreateUserCommand): Promise<Result<User>> {
        // Verificação
        const existing = await this.repository.findByEmail(command.email);
        if (existing) {
            return left(new Error("Email already exists"));
        }

        // Criação
        const user: User = {
            id: crypto.randomUUID(),
            name: command.name,
            email: command.email,
            createdAt: new Date(),
        };

        // Persistência
        await this.repository.save(user);
        return right(user);
    }
}
```

---

## 6. Error Handling

### Custom Error Type

```typescript
class AppError extends Error {
    constructor(
        message: string,
        public readonly code: string,
        public readonly statusCode: number = 500
    ) {
        super(message);
    }
}

// Error handlers funcionais
const notFound = (entity: string) =>
    new AppError(`${entity} not found`, "NOT_FOUND", 404);

const alreadyExists = (entity: string) =>
    new AppError(`${entity} already exists`, "ALREADY_EXISTS", 409);

const invalidInput = (field: string) =>
    new AppError(`Invalid ${field}`, "INVALID_INPUT", 400);
```

### Global Error Handler

```typescript
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.message,
            code: err.code,
        });
    }
    
    return res.status(500).json({
        error: "Internal server error",
    });
});
```

---

## 7. Higher-Order Functions

### map/filter/reduce

```typescript
// map
const users = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
const names = users.map(u => u.name);
// ["John", "Jane"]

// filter
const adults = users.filter(u => u.age >= 18);

// reduce - contar por tipo
const countByType = items.reduce(
    (acc, item) => ({
        ...acc,
        [item.type]: (acc[item.type] || 0) + 1,
    }),
    {} as Record<string, number>
);
```

### pipe/compose

```typescript
import { pipe } from "ramda";
import { map, filter, reduce } from "ramda";

// pipe
const processUsers = pipe(
    filter((u: User) => u.active),
    map((u: User) => u.name),
    names => names.sort()
);

// compose
import { compose } from "ramda";

const processUsersDesc = compose(
    names => names.sort().reverse(),
    map((u: User) => u.name),
    filter((u: User) => u.active)
);
```

---

## 8. Async Functional

### async/await com Either

```typescript
import { right, left } from "fp-ts/Either";

const safeAsync = <T>(
    promise: Promise<T>
): Promise<Either<Error, T>> =>
    promise
        .then(value => right(value))
        .catch(error => left(error));

// Uso
const user = await safeAsync(
    repository.findById(id)
).then(result =>
    match result {
        left: () => notFound("User"),
        right: (user) => user,
    })
);
```

### TaskEither

```typescript
import { TaskEither } from "fp-ts/TaskEither";
import { left, right } from "fp-ts/Either";

type UserTask = TaskEither<Error, User>;

const findUser = (id: string): UserTask =>
    new TaskEither(() =>
        repository.findById(id)
            .then(maybeUser =>
                maybeUser
                    ? right(maybeUser)
                    : left(new Error("Not found"))
            )
    );
```

---

## 9. Estrutura de Projeto

```
src/
├── domain/
│   ├── types/          # Types/Interfaces
│   ├── entities/       # Entities puras
│   └── errors/       # Error types
├── application/
│   ├── use_cases/    # Use cases
│   └── commands/     # Commands
├── adapters/
│   ├── http/        # Express handlers
│   │   ├── routes.ts
│   │   ├── middleware/
│   │   └── validation/
│   └── persistence/  # Repositories
├── utils/
│   ├── fp/         # Helpers FP
│   ├── either.ts   # Either utilities
│   └── result.ts  # Result types
└── app.ts
```

---

## 10. Checklist FP Express

- [ ] Middleware é puro/estateless?
- [ ] Handlers usam Either para erros?
- [ ] Repositories são interfaces?
- [ ] Use cases são funcionais?
- [ ] pipe/compose para transforms?
- [ ] safeAsync para promisses?
- [ ] Error handling centralizado?
- [ ] Tipos strong para validation?