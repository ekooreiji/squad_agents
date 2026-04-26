# Estrutura Hexagonal - Django (Python)

Estrutura de diretórios e padrões para aplicação Django com Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/                    # NÚCLEO
│   │   ├── entities/
│   │   │   ├── __init__.py
│   │   │   └── user.py
│   │   ├── value_objects/
│   │   │   ├── __init__.py
│   │   │   └── email.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   └── user_service.py
│   │   └── __init__.py
│   │
│   ├── application/                # USE CASES
│   │   ├── commands/
│   │   │   ├── __init__.py
│   │   │   └── create_user.py
│   │   ├── use_cases/
│   │   │   ├── __init__.py
│   │   │   └── create_user_use_case.py
│   │   └── __init__.py
│   │
│   ├── ports/                     # INTERFACES
│   │   ├── input/
│   │   │   ├── __init__.py
│   │   │   └── user_input_ports.py
│   │   ├── output/
│   │   │   ├── __init__.py
│   │   │   └── user_repository.py
│   │   └── __init__.py
│   │
│   ├── adapters/                 # ADAPTERS
│   │   ├── inbound/
│   │   │   ├── __init__.py
│   │   │   └── http/
│   │   │       ├── __init__.py
│   │   │       ├── views.py
│   │   │       ├── urls.py
│   │   │       └── serializers.py
│   │   └── outbound/
│   │       ├── __init__.py
│   │       └── persistence/
│   │           ├── __init__.py
│   │           ├── django_orm_adapter.py
│   │           └── in_memory_adapter.py
│   │
│   ├── config/
│   │   ├── __init__.py
│   │   └── settings.py
│   │
│   ├── asgi.py
│   ├── wsgi.py
│   └── __init__.py
│
├── myapp/           # Django app (entry point)
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── manage.py
├── pyproject.toml
└── README.md
```

---

## 2. Exemplo: Entity

```python
# domain/entities/user.py
from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: str
    email: str
    name: str
    created_at: datetime
    is_active: bool = True

    def activate(self):
        self.is_active = True

    def deactivate(self):
        self.is_active = False
```

---

## 3. Exemplo: Port (Output)

```python
# ports/output/user_repository_port.py
from abc import ABC, abstractmethod
from typing import Protocol, Optional

from domain.entities.user import User


class UserRepositoryPort(Protocol):
    def save(self, user: User) -> User: ...
    def find_by_id(self, user_id: str) -> Optional[User]: ...
    def find_by_email(self, email: str) -> Optional[User]: ...
```

---

## 4. Exemplo: Use Case

```python
# application/use_cases/create_user_use_case.py
from dataclasses import dataclass

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


@dataclass
class CreateUserCommand:
    email: str
    name: str


class CreateUserUseCase:
    def __init__(self, user_repository: UserRepositoryPort):
        self._repository = user_repository

    def execute(self, command: CreateUserCommand) -> User:
        import uuid
        user = User(
            id=str(uuid.uuid4()),
            email=command.email,
            name=command.name,
            created_at=datetime.utcnow()
        )
        return self._repository.save(user)
```

---

## 5. Exemplo: Output Adapter (Django ORM)

```python
# adapters/outbound/persistence/django_orm_adapter.py
from typing import Optional

from django.db import models

from domain.entities.user import User
from ports.output.user_repository_port import UserRepositoryPort


class UserModel(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "users"


class DjangoUserRepository:
    def __init__(self):
        pass

    def save(self, user: User) -> User:
        orm_obj = UserModel(
            id=user.id,
            email=user.email,
            name=user.name,
            is_active=user.is_active,
        )
        orm_obj.save()
        return user

    def find_by_id(self, user_id: str) -> Optional[User]:
        try:
            orm_obj = UserModel.objects.get(id=user_id)
            return User(
                id=str(orm_obj.id),
                email=orm_obj.email,
                name=orm_obj.name,
                created_at=orm_obj.created_at,
                is_active=orm_obj.is_active,
            )
        except UserModel.DoesNotExist:
            return None

    def find_by_email(self, email: str) -> Optional[User]:
        try:
            orm_obj = UserModel.objects.get(email=email)
            return User(
                id=str(orm_obj.id),
                email=orm_obj.email,
                name=orm_obj.name,
                created_at=orm_obj.created_at,
                is_active=orm_obj.is_active,
            )
        except UserModel.DoesNotExist:
            return None
```

---

## 6. Exemplo: Input Adapter (Django Views)

```python
# adapters/inbound/http/views.py
import json
from django.http import JsonResponse
from django.views import View

from application.use_cases.create_user_use_case import CreateUserUseCase, CreateUserCommand
from adapters.outbound.persistence.django_orm_adapter import DjangoUserRepository


class UserListView(View):
    def post(self, request):
        data = json.loads(request.body)
        repository = DjangoUserRepository()
        use_case = CreateUserUseCase(repository)

        command = CreateUserCommand(
            email=data["email"],
            name=data["name"]
        )

        user = use_case.execute(command)

        return JsonResponse({
            "id": user.id,
            "email": user.email,
            "name": user.name,
        }, status=201)
```

---

## 7. Exemplo: URLs

```python
# adapters/inbound/http/urls.py
from django.urls import path
from adapters.inbound.http.views import UserListView

urlpatterns = [
    path("users", UserListView.as_view(), name="user-list"),
]
```

---

## 8. Resumo

| Camada | Local | Responsabilidade |
|--------|-------|---------------|
| Domain | `domain/` | Entidades e regras de negócio |
| Application | `application/` | Use cases |
| Ports | `ports/` | Interfaces |
| Inbound | `adapters/inbound/` | Views Django |
| Outbound | `adapters/outbound/` | ORM |