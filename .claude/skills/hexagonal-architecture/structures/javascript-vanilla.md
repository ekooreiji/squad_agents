# Estrutura Hexagonal - JavaScript Vanilla (Browser/Node)

Estrutura para aplicação JavaScript pura (browser ou Node.js) com Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── user.js
│   │   └── services/
│   │       └── user-service.js
│   │
│   ├── application/
│   │   └── use-cases/
│   │       └── create-user.use-case.js
│   │
│   ├── ports/
│   │   ├── input/
│   │   │   └── user-input.port.js
│   │   └── output/
│   │       └── user-repository.port.js
│   │
│   ├── adapters/
│   │   ├── inbound/
│   │   │   ├── http/
│   │   │   │   └── client.js
│   │   │   └── cli/
│   │   │       └── commands.js
│   │   └── outbound/
│   │       ├── persistence/
│   │       │   ├── local-storage.adapter.js
│   │       │   └── index-db.adapter.js
│   │       └── api/
│   │           └── http-client.adapter.js
│   │
│   └── main.js                # Composition Root
│
├── package.json
├── index.html
└── README.md
```

---

## 2. Exemplo: Domain Entity

```javascript
// domain/entities/user.js
export class User {
  constructor(id, email, name, createdAt = new Date(), isActive = true) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.createdAt = createdAt;
    this.isActive = isActive;
  }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }
}
```

---

## 3. Exemplo: Port (Interface)

```javascript
// ports/output/user-repository.port.js
export class UserRepositoryPort {
  async save(user) {
    throw new Error("Not implemented");
  }

  async findById(id) {
    throw new Error("Not implemented");
  }

  async findByEmail(email) {
    throw new Error("Not implemented");
  }
}
```

---

## 4. Exemplo: Use Case

```javascript
// application/use-cases/create-user.use-case.js
import { User } from "../../domain/entities/user.js";

export class CreateUserUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(email, name) {
    const existing = await this.repository.findByEmail(email);
    if (existing) {
      throw new Error(`User with email ${email} already exists`);
    }

    const user = new User(
      crypto.randomUUID(),
      email,
      name,
      new Date(),
      true
    );

    return this.repository.save(user);
  }
}
```

---

## 5. Exemplo: Output Adapter (LocalStorage)

```javascript
// adapters/outbound/persistence/local-storage.adapter.js
import { UserRepositoryPort } from "../../ports/output/user-repository.port.js";
import { User } from "../../domain/entities/user.js";

export class LocalStorageUserRepository extends UserRepositoryPort {
  constructor(prefix = "users") {
    super();
    this.prefix = prefix;
  }

  _getKey(id) {
    return `${this.prefix}_${id}`;
  }

  async save(user) {
    localStorage.setItem(this._getKey(user.id), JSON.stringify(user));
    return user;
  }

  async findById(id) {
    const data = localStorage.getItem(this._getKey(id));
    if (!data) return null;
    return JSON.parse(data);
  }

  async findByEmail(email) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.prefix)) {
        const user = JSON.parse(localStorage.getItem(key));
        if (user.email === email) return user;
      }
    }
    return null;
  }
}
```

---

## 6. Exemplo: Composition Root

```javascript
// main.js
import { CreateUserUseCase } from "./application/use-cases/create-user.use-case.js";
import { LocalStorageUserRepository } from "./adapters/outbound/persistence/local-storage.adapter.js";

// Wire
const repository = new LocalStorageUserRepository();
const createUserUseCase = new CreateUserUseCase(repository);

// Use
createUserUseCase.execute("test@example.com", "Test User");
```

---

## 7. Resumo

| Camada | Local |
|--------|-------|
| Domain | `src/domain/` |
| Application | `src/application/` |
| Ports | `src/ports/` |
| Adapters | `src/adapters/` |