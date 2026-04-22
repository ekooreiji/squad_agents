# Exemplo Completo - FastAPI Hexagonal

Exemplo de implementação completa de Arquitetura Hexagonal com FastAPI.

---

## 1. Resultado Final

### Estrutura

```
src/
├── domain/
│   ├── entities/
│   │   ├── user.py
│   │   └── __init__.py
│   └── __init__.py
├── application/
│   ├── use_cases/
│   │   ├── create_user_use_case.py
│   │   └── __init__.py
│   └── __init__.py
├── ports/
│   ├── output/
│   │   ├── user_repository_port.py
│   │   └── __init__.py
│   └── __init__.py
├── adapters/
│   ├── inbound/
│   │   └── http/
│   │       ├── routes.py
│   │       ├── schemas.py
│   │       └── __init__.py
│   └── outbound/
│       └── persistence/
│           ├── in_memory_repository.py
│           └── __init__.py
├── main.py
└── __init__.py
```

---

## 2. Domain Layer

```python
# domain/entities/user.py
from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class User:
    """User entity - purely domain, no dependencies."""

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
        if not new_name or not new_name.strip():
            raise ValueError("Name cannot be empty")
        self.name = new_name.strip()
```

---

## 3. Port Layer

```python
# ports/output/user_repository_port.py
from abc import ABC, abstractmethod
from typing import Protocol, Optional

from domain.entities.user import User


class UserRepositoryPort(Protocol):
    """Output port - interface for persistence."""

    @abstractmethod
    def save(self, user: User) -> User:
        """Save user to storage."""
        ...

    @abstractmethod
    def find_by_id(self, user_id: str) -> Optional[User]:
        """Find user by ID."""
        ...

    @abstractmethod
    def find_by_email(self, email: str) -> Optional[User]:
        """Find user by email."""
        ...

    @abstractmethod
    def delete(self, user_id: str) -> bool:
        """Delete user by ID."""
        ...
```

---

## 4. Application Layer

```python
# application/use_cases/create_user_use_case.py
from dataclasses import dataclass

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


@dataclass
class CreateUserCommand:
    email: str
    name: str


class DuplicateUserError(Exception):
    """Raised when user already exists."""
    pass


class CreateUserUseCase:
    """Use case for creating users - orchestration only."""

    def __init__(self, user_repository: UserRepositoryPort):
        self._repository = user_repository

    def execute(self, command: CreateUserCommand) -> User:
        # Verification (business rule)
        existing = self._repository.find_by_email(command.email)
        if existing:
            raise DuplicateUserError(
                f"User with email {command.email} already exists"
            )

        # Create entity
        user = User(
            id=self._generate_id(),
            email=command.email,
            name=command.name,
            created_at=self._get_current_timestamp()
        )

        # Persist
        return self._repository.save(user)

    def _generate_id(self) -> str:
        import uuid
        return str(uuid.uuid4())

    def _get_current_timestamp(self):
        from datetime import datetime
        return datetime.utcnow()
```

---

## 5. Output Adapter

```python
# adapters/outbound/persistence/in_memory_repository.py
from typing import Optional

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


class InMemoryUserRepository:
    """In-memory implementation of UserRepositoryPort."""

    def __init__(self):
        self._users: dict[str, User] = {}

    def save(self, user: User) -> User:
        self._users[user.id] = user
        return user

    def find_by_id(self, user_id: str) -> Optional[User]:
        return self._users.get(user_id)

    def find_by_email(self, email: str) -> Optional[User]:
        for user in self._users.values():
            if user.email == email:
                return user
        return None

    def delete(self, user_id: str) -> bool:
        if user_id in self._users:
            del self._users[user_id]
            return True
        return False
```

---

## 6. Input Adapter (FastAPI)

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
from fastapi import APIRouter, Depends, HTTPException, status

from adapters.inbound.http.schemas import CreateUserRequest, UserResponse
from application.use_cases.create_user_use_case import (
    CreateUserUseCase,
    CreateUserCommand,
    DuplicateUserError,
)
from adapters.outbound.persistence.in_memory_repository import InMemoryUserRepository
from ports.output.user_repository_port import UserRepositoryPort

router = APIRouter(prefix="/users", tags=["users"])


def get_user_repository() -> UserRepositoryPort:
    """Dependency provider."""
    return InMemoryUserRepository()


def get_create_user_use_case(
    repository: UserRepositoryPort = Depends(get_user_repository)
) -> CreateUserUseCase:
    """Dependency provider."""
    return CreateUserUseCase(repository)


@router.post(
    "",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def create_user(
    request: CreateUserRequest,
    use_case: CreateUserUseCase = Depends(get_create_user_use_case),
):
    try:
        command = CreateUserCommand(
            email=request.email,
            name=request.name
        )
        user = use_case.execute(command)
        return UserResponse(
            id=user.id,
            email=user.email,
            name=user.name,
            is_active=user.is_active,
        )
    except DuplicateUserError as e:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e)
        )
```

---

## 7. Composition Root (main.py)

```python
# main.py
from fastapi import FastAPI

from adapters.inbound.http import routes

app = FastAPI(title="Hexagonal FastAPI App")

app.include_router(routes.router)


@app.get("/health")
def health_check():
    return {"status": "healthy"}
```

---

## 8. Teste do Exemplo

```bash
# Run
uvicorn main:app --reload

# Test
curl -X POST "http://localhost:8000/users" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "name": "Test User"}'

# Response
# {
#   "id": "uuid-here",
#   "email": "test@example.com",
#   "name": "Test User",
#   "is_active": true
# }
```

---

## 9. Vantagens Demonstradas

| Aspecto | Antes (Monolithic) | Depois (Hexagonal) |
|--------|-------------------|-------------------|
| Trocar DB | Reescrever código | Trocar adapter |
| Testar domínio | Precisa DB | Teste unitário |
| Adicionar API | Mudar código existente | Novo adapter |
| Reutilizar domínio | Não é possível | Novo adapter |

---

## 10. Evolução: Trocar para PostgreSQL

```python
# adapters/outbound/persistence/postgres_repository.py
from sqlalchemy import Column, String, Boolean
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Session

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


class PostgresUserRepository:
    """PostgreSQL implementation."""

    def __init__(self, session: Session):
        self._session = session

    def save(self, user: User) -> User:
        # SQLAlchemy save logic
        ...

    # ... implement other methods
```

Apenas crie o novo adapter. O resto do código **não precisa mudar**.