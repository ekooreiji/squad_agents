# Arquitetura FastAPI

Estrutura recomendada para projetos FastAPI.

---

## 1. Estrutura Básica

```
project/
├── app/
│   ├── __init__.py
│   ├── main.py               # FastAPI app
│   ├── config.py            # Configurações
│   ├── dependencies.py     # Dependencies
│   ├── domain/             # Domínio
│   │   ├── entities/
│   │   │   └── user.py
│   │   ├── schemas/
│   │   │   └── user.py
│   │   └── services/
│   │       └── user_service.py
│   ├── application/         # Casos de uso
│   │   ├── commands/
│   │   │   └── create_user.py
│   │   └── queries/
│   │       └── get_user.py
│   ├── ports/              # Interfaces
│   │   ├── input/
│   │   │   └── user_port.py
│   │   └── output/
│   │       └── user_repository.py
│   ├── adapters/           # Implementações
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   └── user_route.py
│   │   │   └── deps.py
│   │   └── persistence/
│   │       └── sqlalchemy_repo.py
│   └── exceptions/         # Exceptions
│       └── handlers.py
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── alembic/                # Migrations
├── pyproject.toml
├── requirements.txt
└── .env
```

---

## 2. Main App

```python
# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.adapters.api.routes import user_router
from app.exceptions.handlers import register_exception_handlers


def create_app() -> FastAPI:
    """Create FastAPI application."""
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        debug=settings.DEBUG,
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_HOSTS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routes
    app.include_router(user_router)

    # Exception handlers
    register_exception_handlers(app)

    return app


app = create_app()
```

---

## 3. Domain Entities

```python
# app/domain/entities/user.py
from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class User:
    """User entity."""

    id: Optional[int] = None
    email: str = ""
    name: str = ""
    password_hash: str = ""
    is_active: bool = True
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    def activate(self):
        self.is_active = True

    def deactivate(self):
        self.is_active = False
```

---

## 4. Domain Schemas (Pydantic)

```python
# app/domain/schemas/user.py
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    """User base schema."""

    email: EmailStr
    name: str = Field(..., min_length=1, max_length=255)


class UserCreate(UserBase):
    """User create schema."""

    password: str = Field(..., min_length=8)


class UserUpdate(BaseModel):
    """User update schema."""

    name: Optional[str] = Field(None, min_length=1, max_length=255)
    password: Optional[str] = Field(None, min_length=8)


class UserResponse(UserBase):
    """User response schema."""

    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True
```

---

## 5. Ports (Interfaces)

```python
# app/ports/output/user_repository.py
from abc import ABC, abstractmethod
from typing import Optional, List
from app.domain.entities.user import User


class UserRepositoryPort(ABC):
    """User repository port."""

    @abstractmethod
    async def create(self, user: User) -> User:
        pass

    @abstractmethod
    async def get_by_id(self, user_id: int) -> Optional[User]:
        pass

    @abstractmethod
    async def get_by_email(self, email: str) -> Optional[User]:
        pass

    @abstractmethod
    async def get_all(self) -> List[User]:
        pass

    @abstractmethod
    async def update(self, user: User) -> User:
        pass

    @abstractmethod
    async def delete(self, user_id: int) -> bool:
        pass
```

---

## 6. Application Commands

```python
# app/application/commands/create_user.py
from dataclasses import dataclass
from app.domain.entities.user import User
from app.ports.output.user_repository import UserRepositoryPort


@dataclass
class CreateUserCommand:
    """Create user command."""

    email: str
    name: str
    password: str


class CreateUserHandler:
    """Create user handler."""

    def __init__(self, repository: UserRepositoryPort):
        self._repository = repository

    async def execute(self, command: CreateUserCommand) -> User:
        # Check if email exists
        existing = await self._repository.get_by_email(command.email)
        if existing:
            raise ValueError("Email already exists")

        # Hash password
        from werkzeug.security import generate_password_hash
        password_hash = generate_password_hash(command.password)

        # Create user
        user = User(
            email=command.email,
            name=command.name,
            password_hash=password_hash,
        )

        return await self._repository.create(user)
```

---

## 7. Adapters - Repository Implementation

```python
# app/adapters/persistence/sqlalchemy_repo.py
from typing import Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.domain.entities.user import User
from app.ports.output.user_repository import UserRepositoryPort
from app.adapters.persistence.models import UserModel


class SQLAlchemyUserRepository(UserRepositoryPort):
    """SQLAlchemy user repository."""

    def __init__(self, session: AsyncSession):
        self._session = session

    async def create(self, user: User) -> User:
        db_user = UserModel(
            email=user.email,
            name=user.name,
            password_hash=user.password_hash,
            is_active=user.is_active,
        )
        self._session.add(db_user)
        await self._session.commit()
        await self._session.refresh(db_user)
        return self._to_entity(db_user)

    async def get_by_id(self, user_id: int) -> Optional[User]:
        result = await self._session.execute(
            select(UserModel).where(UserModel.id == user_id)
        )
        db_user = result.scalar_one_or_none()
        return self._to_entity(db_user) if db_user else None

    async def get_by_email(self, email: str) -> Optional[User]:
        result = await self._session.execute(
            select(UserModel).where(UserModel.email == email)
        )
        db_user = result.scalar_one_or_none()
        return self._to_entity(db_user) if db_user else None

    def _to_entity(self, db_user: UserModel) -> User:
        return User(
            id=db_user.id,
            email=db_user.email,
            name=db_user.name,
            password_hash=db_user.password_hash,
            is_active=db_user.is_active,
            created_at=db_user.created_at,
            updated_at=db_user.updated_at,
        )
```

---

## 8. API Routes

```python
# app/adapters/api/routes/user_route.py
from fastapi import APIRouter, Depends, HTTPException, status
from app.domain.schemas.user import UserCreate, UserResponse
from app.application.commands.create_user import CreateUserCommand, CreateUserHandler
from app.adapters.persistence.sqlalchemy_repo import SQLAlchemyUserRepository
from app.adapters.api.deps import get_db

router = APIRouter()


async def get_user_handler(
    session = Depends(get_db)
) -> CreateUserHandler:
    """Get user handler."""
    repository = SQLAlchemyUserRepository(session)
    return CreateUserHandler(repository)


@router.post(
    "/users",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(
    user_data: UserCreate,
    handler: CreateUserHandler = Depends(get_user_handler),
):
    """Create user endpoint."""
    command = CreateUserCommand(
        email=user_data.email,
        name=user_data.name,
        password=user_data.password,
    )

    try:
        user = await handler.execute(command)
        return user
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )
```

---

## 9. Dependencies

```python
# app/adapters/api/deps.py
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker

from app.config import settings

engine = create_async_engine(settings.DATABASE_URL, echo=settings.DEBUG)
async_session_maker = async_sessionmaker(engine, class_=AsyncSession)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Get database session."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
```

---

## 10. Config

```python
# app/config.py
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings."""

    PROJECT_NAME: str = "FastAPI Project"
    VERSION: str = "1.0.0"
    DEBUG: bool = False

    DATABASE_URL: str = "sqlite+aiosqlite:///./app.db"

    ALLOWED_HOSTS: list = ["*"]

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    """Get settings."""
    return Settings()


settings = get_settings()
```

---

## 11. Docker

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Resumo

| Camada | Responsabilidade |
|--------|-----------------|
| **Domain** | Entidades e schemas |
| **Ports** | Interfaces abstratas |
| **Application** | Commands e handlers |
| **Adapters** | Implementações concretas |
| **API Routes** | Endpoints HTTP |

---

## Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                      API Routes                            │
│                    (FastAPI Router)                       │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                    Application                             │
│                  (Commands/Handlers)                     │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                      Domain                                │
│                  (Entities/Schemas)                      │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                       Ports                               │
│                  (Interfaces Abstratas)                   │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                     Adapters                              │
│              (SQLAlchemy/Repositories)                   │
└─────────────────────────────────────────────────────────────┘
```