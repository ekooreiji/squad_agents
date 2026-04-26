# Hexagonal Architecture - Guia Conceitual

Guia completo dos conceitos de Arquitetura Hexagonal (Ports & Adapters).

---

## 1. Princípios Fundamentais

### 1.1 Regra de Dependência

> **O núcleo do domínio NÃO pode depender de nada externo.**

Tudo que é externo (frameworks, bancos, APIs) depende do domínio, nunca o contrário.

```
┌────────────────────────────────────────────────────────────┐
│  DEPENDENCY RULE                                          │
│  ───────────────────────────────────────────────────────  │
│  • Domain imports NOTHING external                       │
│  • Ports are OWNED by Domain (Domain defines interfaces)   │
│  • Adapters implement Ports (outside implements)       │
│  • Application (use cases) orchestrates                │
└────────────────────────────────────────────────────────────┘
```

### 1.2 Inversão de Dependência

```
 TRADITIONAL LAYERED          HEXAGONAL ARCHITECTURE

 ┌─────────────┐              ┌──────────────────────────┐
 │   API      │              │    ADAPTERS (INPUT)     │
 │  Layer     │              │   REST  CLI  GraphQL   │
 └─────┬──────┘              └───────────┬──────────────┘
       │                                 │
 ┌─────▼──────┐              ┌───────────▼──────────────┐
 │  Service   │              │    INPUT PORTS           │
 │  Layer    │              │   (Use Case Interfaces)    │
 └─────┬──────┘              └──────────┬───────────────┘
       │                                 │
 ┌─────▼──────┐              ┌──────────▼───────────────┐
 │ Repository │              │      DOMAIN              │
 │  Layer    │              │   Entities & Services    │
 └─────┬──────┘              └──────────┬───────────────┘
       │                                 │
 ┌─────▼──────┐              ┌──────────▼───────────────┐
 │   Database │              │    OUTPUT PORTS          │
 │            │              │  (Repository Interfaces)  │
 └────────────┘              └──────────┬───────────────┘
                                         │
                        ┌────────────────▼────────────────┐
                        │    ADAPTERS (OUTPUT)           │
                        │  SQLAlchemy  MongoDB  Cache  │
                        └────────────────────────────────┘
```

---

## 2. Componentes Principais

### 2.1 Domain (Núcleo)

O **Domain** contém:
- **Entities** - Objetos com identidade única
- **Value Objects** - Objetos imutáveis sem identidade
- **Domain Services** - Lógica de negócio pura
- **Domain Events** - Eventos do domínio

```python
# domain/entities/user.py
class User:
    def __init__(self, user_id: str, email: str, name: str):
        self._id = user_id
        self.email = email
        self.name = name

    def activate(self):
        self._active = True

    def deactivate(self):
        self._active = False

    @property
    def is_active(self) -> bool:
        return getattr(self, '_active', False)
```

```python
# domain/value-objects/email.py
class Email:
    def __init__(self, value: str):
        if not self._is_valid(value):
            raise ValueError(f"Invalid email: {value}")
        self._value = value

    def _is_valid(self, email: str) -> bool:
        return '@' in email

    def __str__(self) -> str:
        return self._value
```

### 2.2 Application (Use Cases)

O **Application Layer** contém:
- **Use Cases** (ou Application Services)
- Coordena o domínio
- Não contém lógica de negócio (apenas orchestration)

```python
# application/create_user_use_case.py
from dataclasses import dataclass

@dataclass
class CreateUserCommand:
    email: str
    name: str

class CreateUserUseCase:
    def __init__(self, user_repository: 'UserRepositoryPort'):
        self._user_repository = user_repository

    def execute(self, command: CreateUserCommand) -> User:
        # Verifications
        existing = self._user_repository.find_by_email(command.email)
        if existing:
            raise UserAlreadyExistsError(command.email)

        # Create domain entity
        user = User(
            user_id=generate_uuid(),
            email=command.email,
            name=command.name
        )

        # Persist
        self._user_repository.save(user)

        return user
```

---

## 3. Ports (Interfaces)

### 3.1 Input Ports (Primary / Driving)

São definidas pelo **domain/application** e implementadas pelos **use cases**.

```python
# ports/input/create_user_port.py
from abc import ABC, abstractmethod
from typing import Protocol

class CreateUserPort(Protocol):
    """Input port - como drivers chamam a aplicação."""

    def create(self, email: str, name: str) -> 'User':
        """Create a new user."""
        ...
```

### 3.2 Output Ports (Secondary / Driven)

São definidas pelo **domain** e implementadas pelos **adapters**.

```python
# ports/output/user_repository_port.py
from abc import ABC, abstractmethod
from typing import Protocol, Optional

class UserRepositoryPort(Protocol):
    """Output port - como a aplicação acessa persistência."""

    def save(self, user: 'User') -> 'User':
        """Save user to storage."""
        ...

    def find_by_id(self, user_id: str) -> Optional['User']:
        """Find user by ID."""
        ...

    def find_by_email(self, email: str) -> Optional['User']:
        """Find user by email."""
        ...
```

---

## 4. Adapters

### 4.1 Input Adapters (Driving Adapters)

Traduzem entrada externa em comandos para a aplicação.

```python
# adapters/input/fastapi_controller.py
from fastapi import FastAPI, HTTPException, Depends

app = FastAPI()

@app.post("/users")
def create_user_endpoint(
    request: CreateUserRequest,
    use_case: CreateUserUseCase = Depends(get_create_user_use_case)
):
    try:
        command = CreateUserCommand(
            email=request.email,
            name=request.name
        )
        user = use_case.execute(command)
        return UserResponse.from_entity(user)
    except UserAlreadyExistsError as e:
        raise HTTPException(status_code=409, detail=str(e))
```

### 4.2 Output Adapters (Driven Adapters)

Implementam as portas de saída (repositórios, etc).

```python
# adapters/output/sqlalchemy_user_repository.py
from sqlalchemy import Column, String
from sqlalchemy.orm import Session

class SQLAlchemyUserRepository:
    def __init__(self, session: Session):
        self._session = session

    def save(self, user: User) -> User:
        orm_obj = UserORM(
            id=user.id,
            email=user.email,
            name=user.name
        )
        self._session.add(orm_obj)
        self._session.commit()
        return user

    def find_by_id(self, user_id: str) -> Optional[User]:
        orm_obj = self._session.query(UserORM).filter_by(id=user_id).first()
        if not orm_obj:
            return None
        return User(id=orm_obj.id, email=orm_obj.email, name=orm_obj.name)
```

---

## 5. Composition Root

O lugar onde todas as dependências são conectadas.

```python
# main.py (composition root)
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Create FastAPI app
app = FastAPI()

# Create database session
engine = create_engine("postgresql://localhost/mydb")
SessionLocal = sessionmaker(bind=engine)


def get_user_repository() -> UserRepositoryPort:
    """Dependency provider - inject SQLAlchemy adapter."""
    session = SessionLocal()
    return SQLAlchemyUserRepository(session)


def get_create_user_use_case() -> CreateUserUseCase:
    """Dependency provider - inject dependencies."""
    return CreateUserUseCase(get_user_repository())


# Wire FastAPI routes
from adapters.input import fastapi_controller
app.include_router(fastapi_controller.router)
```

---

## 6. Ciclo de Desenvolvimento

### Passo a Passo

1. **Defina o Domain**
   - Crie entities
   - Crie value objects
   - Crie domain services (se necessário)

2. **Defina as Ports (Interfaces)**
   - Input ports para use cases
   - Output ports para repositórios

3. **Implemente Use Cases (Application)**
   - Crie use cases que usam ports
   - Não importe nada de infraestrutura

4. **Implemente Adapters**
   - Input adapters (REST, CLI, etc)
   - Output adapters (DB, Cache, etc)

5. **Wire no Composition Root**
   - Conecte tudo com DI

6. **Teste**
   - Teste domínio sem dependências
   - Teste use cases com mocks

---

## 7. Comparação com Outros Padrões

| Aspecto | Hexagonal | Clean Architecture | Layered |
|---------|-----------|---------------------|---------|
| **Dependências** | Domínio centro | Domínio centro | Camadas externas → internas |
| **Ports** | Primeiro-class | Interactors | Use Cases |
| **Boundaries** | Explicit (Ports) | Implicit (Layers) | Implicit (Imports) |
| **Testabilidade** | Muito alta | Alta | Média |

---

## 8. Erros Comuns

| Erro | Correção |
|------|----------|
| Domain importa ORM | Não faça isso - use Ports |
| Use case contém SQL | Não faça isso - use Repository |
| Entities são dicts | Use classes com behavior |
| Controllers têm lógica | Forward to Use Cases |
| Múltiplas camadas | Keep it simple |

---

## 9. Diagramas ASCII

### Visão Geral

```
        ┌──────────────────────────────────────────────────────┐
        │                                                     │
        │   ┌──────────────┐     ┌──────────────┐           │
        │   │  DRIVING    │     │   DRIVEN    │           │
        │   │  ADAPTERS  │     │  ADAPTERS  │           │
        │   │  (Input)   │     │  (Output)  │           │
        │   └──────┬─────┘     └��─────┬──────┘           │
        │          │                    │                   │
        │   ┌──────▼──────┐     ┌──────▼──────┐           │
        │   │    PORTS   │     │    PORTS   │           │
        │   │  (Input)   │     │  (Output)  │           │
        │   └──────┬─────┘     └──────┬──────┘           │
        │          │                    │                   │
        │   ┌─────▼────────────────────▼──────┐            │
        │   │         APPLICATION             │            │
        │   │        (Use Cases)              │            │
        │   └────────────┬───────────────────┘            │
        │                │                                   │
        │   ┌────────────▼────────────┐                    │
        │   │          DOMAIN          │                    │
        │   │    Entities & Services   │                    │
        │   └─────────────────────────┘                    │
        │                                                     │
        └──────────────────────────────────────────────────────┘
```

### Fluxo de Requisição

```
HTTP Request
    │
    ▼
┌─────────────────┐
│  FastAPI Route  │  ── INPUT ADAPTER
└────────┬────────┘
         │ (calls)
         ▼
┌─────────────────┐
│  CreateUser     │  ── INPUT PORT (USE CASE)
│  UseCase       │
└────────┬────────┘
         │ (calls)
         ▼
┌─────────────────┐
│    User        │  ── DOMAIN ENTITY
│  (Entity)     │
└────────┬────────┘
         │ (calls)
         ▼
┌─────────────────┐
│  UserRepoPort  │  ── OUTPUT PORT (INTERFACE)
└────────┬────────┘
         │ (implements)
         ▼
┌─────────────────┐
│  SQLAlchemy    │  ── OUTPUT ADAPTER
│  Repository   │
└────────┬────────┘
         │
         ▼
    Database
```

---

## Referências

- [Hexagonal Architecture - Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)
- [Ports and Adapters - Aram Co blog](https://angel_yang.medium.com/ports-and-adapters-architecture-c84962852f20)
- [Clean Architecture - Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)