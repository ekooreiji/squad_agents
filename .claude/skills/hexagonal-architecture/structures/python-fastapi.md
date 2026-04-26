# Estrutura Hexagonal - FastAPI (Python)

Estrutura de diretórios e padrões para aplicação FastAPI com Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/                    # NÚCLEO - Sem dependências externas
│   │   ├── entities/              # Entidades do domínio
│   │   │   ├── __init__.py
│   │   │   └── user.py
│   │   ├── value_objects/         # Objetos de valor
│   │   │   ├── __init__.py
│   │   │   └── email.py
│   │   ├── services/              # Serviços de domínio
│   │   │   ├── __init__.py
│   │   │   └── user_service.py
│   │   ├── events/                # Eventos de domínio
│   │   │   ├── __init__.py
│   │   │   └── user_events.py
│   │   └── __init__.py
│   │
│   ├── application/                # USE CASES - Orquestração
│   │   ├── commands/              # Command objects
│   │   │   ├── __init__.py
│   │   │   └── create_user.py
│   │   ├── queries/              # Query objects
│   │   │   ├── __init__.py
│   │   │   └── get_user.py
│   │   ├── use_cases/            # Use cases
│   │   │   ├── __init__.py
│   │   │   ├── create_user_use_case.py
│   │   │   └── get_user_use_case.py
│   │   └── __init__.py
│   │
│   ├── ports/                     # INTERFACES - Definidas pelo domínio
│   │   ├── input/                # Input ports (use case interfaces)
│   │   │   ├── __init__.py
│   │   │   └── user_input_ports.py
│   │   ├── output/               # Output ports (repository interfaces)
│   │   │   ├── __init__.py
│   │   │   └── user_repository.py
│   │   └── __init__.py
│   │
│   ├── adapters/                 # IMPLEMENTAÇÕES - Concrete adapters
│   │   ├── inbound/              # Input adapters (REST, CLI, etc)
│   │   │   ├── __init__.py
│   │   │   └── http/
│   │   │       ├── __init__.py
│   │   │       ├── routes.py
│   │   │       ├── schemas.py
│   │   │       └── dependencies.py
│   │   └── outbound/             # Output adapters (DB, Cache, External APIs)
│   │       ├── __init__.py
│   │       └── persistence/
│   │           ├── __init__.py
│   │           ├── sqlalchemy_adapter.py
│   │           └── mongodb_adapter.py
│   │
│   ├── config/                   # Configurações
│   │   ├── __init__.py
│   │   └── settings.py
│   │
│   ├── main.py                   # Composition Root
│   └── __init__.py
│
├── tests/
│   ├── unit/
│   │   ├── domain/
│   │   ├── application/
│   │   └── ports/
│   ├── integration/
│   │   └── adapters/
│   └── fixtures/
│
├── pyproject.toml
└── README.md
```

---

## 2. Regras de Nomenclatura

| Componente | Padrão | Exemplo |
|------------|--------|---------|
| Entities | `PascalCase` | `User`, `Order`, `Product` |
| Value Objects | `PascalCase` | `Email`, `Money`, `Address` |
| Use Cases | `PascalCase` | `CreateUserUseCase`, `GetUserUseCase` |
| Input Ports | `Port` suffix | `CreateUserPort`, `UserRepositoryPort` |
| Output Ports | `Port` suffix | `UserRepositoryPort`, `EmailSenderPort` |
| Input Adapters | Tipo + Adapter | `FastAPIAdapter`, `RESTController` |
| Output Adapters | Tecno + Adapter | `SQLAlchemyAdapter`, `MongoDBAdapter` |
| Commands | `Command` suffix | `CreateUserCommand`, `UpdateUserCommand` |
| Queries | `Query` suffix | `GetUserQuery`, `ListUsersQuery` |

---

## 3. Onde Cada Coisa Vive

| Se o código faz isto | Então pertence a |
|----------------------|-------------------|
| Define entidades | `domain/entities/` |
| Define interfaces | `ports/` |
| Implementa use cases | `application/use_cases/` |
| Conhece SQLAlchemy | `adapters/outbound/persistence/` |
| Conhece FastAPI | `adapters/inbound/http/` |
| Configuração | `config/` |
|dependency injection | `main.py` |

---

## 4. Exemplo: Domain

```python
# domain/entities/user.py
from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class User:
    """User entity - purely domain."""

    id: str
    email: str
    name: str
    created_at: datetime
    is_active: bool = True

    def activate(self):
        self.is_active = True

    def deactivate(self):
        self.is_active = False

    def update_name(self, new_name: str):
        if not new_name or len(new_name.strip()) == 0:
            raise ValueError("Name cannot be empty")
        self.name = new_name.strip()
```

```python
# domain/value_objects/email.py
from dataclasses import dataclass


@dataclass(frozen=True)
class Email:
    """Email value object - immutable."""

    value: str

    def __post_init__(self):
        if not self._is_valid():
            raise ValueError(f"Invalid email: {self.value}")

    def _is_valid(self) -> bool:
        return "@" in self.value and "." in self.value.split("@")[-1]
```

---

## 5. Exemplo: Ports

```python
# ports/input/user_use_case_ports.py
from abc import ABC, abstractmethod
from typing import Protocol

from domain.entities.user import User


class CreateUserPort(Protocol):
    """Input port - como entrada externa chama a aplicação."""

    def create(self, email: str, name: str) -> User:
        """Create a new user."""
        ...


class GetUserPort(Protocol):
    """Input port - como obter usuário."""

    def get_by_id(self, user_id: str) -> User | None:
        """Get user by ID."""
        ...

    def get_by_email(self, email: str) -> User | None:
        """Get user by email."""
        ...
```

```python
# ports/output/user_repository_port.py
from abc import ABC, abstractmethod
from typing import Protocol, Optional

from domain.entities.user import User


class UserRepositoryPort(Protocol):
    """Output port - interface para persistência."""

    def save(self, user: User) -> User:
        """Save user to storage."""
        ...

    def find_by_id(self, user_id: str) -> Optional[User]:
        """Find user by ID."""
        ...

    def find_by_email(self, email: str) -> Optional[User]:
        """Find user by email."""
        ...

    def delete(self, user_id: str) -> bool:
        """Delete user by ID."""
        ...
```

---

## 6. Exemplo: Use Cases (Application)

```python
# application/use_cases/create_user_use_case.py
from dataclasses import dataclass

from domain.entities.user import User
from ports.input.user_use_case_ports import CreateUserPort
from ports.output.user_repository_port import UserRepositoryPort


@dataclass
class CreateUserCommand:
    email: str
    name: str


class DuplicateUserError(Exception):
    """Raised when user already exists."""
    pass


class CreateUserUseCase:
    """Use case para criação de usuário."""

    def __init__(self, user_repository: UserRepositoryPort):
        self._repository = user_repository

    def execute(self, command: CreateUserCommand) -> User:
        existing = self._repository.find_by_email(command.email)
        if existing:
            raise DuplicateUserError(f"User with email {command.email} already exists")

        user = User(
            id=self._generate_id(),
            email=command.email,
            name=command.name,
            created_at=self._get_current_timestamp()
        )

        return self._repository.save(user)

    def _generate_id(self) -> str:
        import uuid
        return str(uuid.uuid4())

    def _get_current_timestamp(self):
        from datetime import datetime
        return datetime.utcnow()
```

---

## 7. Exemplo: Adapters

### 7.1 Input Adapter (FastAPI)

```python
# adapters/inbound/http/schemas.py
from pydantic import BaseModel, EmailStr


class CreateUserRequest(BaseModel):
    email: EmailStr
    name: str


class UserResponse(BaseModel):
    id: str
    email: str
    name: str
    is_active: bool

    class Config:
        from_attributes = True
```

```python
# adapters/inbound/http/routes.py
from fastapi import APIRouter, Depends, HTTPException

from adapters.inbound.http.dependencies import get_create_user_use_case
from adapters.inbound.http.schemas import CreateUserRequest, UserResponse
from application.use_cases.create_user_use_case import (
    CreateUserUseCase,
    DuplicateUserError,
)

router = APIRouter(prefix="/users", tags=["users"])


@router.post("", response_model=UserResponse, status_code=201)
def create_user(
    request: CreateUserRequest,
    use_case: CreateUserUseCase = Depends(get_create_user_use_case),
):
    try:
        command = CreateUserCommand(email=request.email, name=request.name)
        user = use_case.execute(command)
        return UserResponse(
            id=user.id,
            email=user.email,
            name=user.name,
            is_active=user.is_active,
        )
    except DuplicateUserError as e:
        raise HTTPException(status_code=409, detail=str(e))
```

### 7.2 Output Adapter (SQLAlchemy)

```python
# adapters/outbound/persistence/sqlalchemy_adapter.py
from typing import Optional

from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Session

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


class UserModel(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    name = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())


class SQLAlchemyUserRepository:
    """SQLAlchemy implementation of UserRepositoryPort."""

    def __init__(self, session: Session):
        self._session = session

    def save(self, user: User) -> User:
        orm_obj = UserModel(
            id=user.id,
            email=user.email,
            name=user.name,
            is_active=user.is_active,
        )
        self._session.add(orm_obj)
        self._session.commit()
        return user

    def find_by_id(self, user_id: str) -> Optional[User]:
        orm_obj = (
            self._session.query(UserModel)
            .filter(UserModel.id == user_id)
            .first()
        )
        if not orm_obj:
            return None
        return self._to_domain(orm_obj)

    def find_by_email(self, email: str) -> Optional[User]:
        orm_obj = (
            self._session.query(UserModel)
            .filter(UserModel.email == email)
            .first()
        )
        if not orm_obj:
            return None
        return self._to_domain(orm_obj)

    def _to_domain(self, orm_obj: UserModel) -> User:
        return User(
            id=str(orm_obj.id),
            email=orm_obj.email,
            name=orm_obj.name,
            created_at=orm_obj.created_at,
            is_active=orm_obj.is_active,
        )
```

---

## 8. Exemplo: Composition Root (Dependency Injection)

```python
# main.py
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from adapters.inbound.http import routes
from adapters.outbound.persistence.sqlalchemy_adapter import SQLAlchemyUserRepository
from application.use_cases.create_user_use_case import CreateUserUseCase

app = FastAPI(title="Hexagonal FastAPI App")

# Database
engine = create_engine("postgresql://user:pass@localhost/mydb")
SessionLocal = sessionmaker(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Dependency Injection
def get_user_repository():
    return SQLAlchemyUserRepository(get_db())


def get_create_user_use_case():
    return CreateUserUseCase(get_user_repository())


# Wire routes
app.include_router(routes.router)
```

---

## 9. Resumo das Regras

| Regra | Descrição |
|-------|------------|
| Domínio não importa ninguém | Zero dependências externas |
| Ports definida pelo domínio | Interfaces em `ports/` |
| Adapters implementam Ports | Implementação em `adapters/` |
| Use cases orchestram | Em `application/use_cases/` |
| Composition root conecta | Em `main.py` |
| Teste domínio sem DB | Use mocks de ports |