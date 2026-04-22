# Exemplo Completo - Django Hexagonal

Exemplo de implementação de Arquitetura Hexagonal com Django.

---

## 1. Estrutura

```
myproject/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── user.py
│   │   └── __init__.py
│   ├── application/
│   │   └── use_cases/
│   │       └── create_user_use_case.py
│   ├── ports/
│   │   └── output/
│   │       └── user_repository_port.py
│   ├── adapters/
│   │   ├── inbound/
│   │   │   └── http/
│   │   │       ├── views.py
│   │   │       └── urls.py
│   │   └── outbound/
│   │       └── persistence/
│   │           └── django_orm_adapter.py
│   └── __init__.py
├── myapp/
│   ├── views.py
│   ├── urls.py
│   └── ...
├── manage.py
└── settings.py
```

---

## 2. Domain

```python
# src/domain/entities/user.py
from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: str
    email: str
    name: str
    created_at: datetime
    is_active: bool = True
```

---

## 3. Port

```python
# src/ports/output/user_repository_port.py
from typing import Protocol, Optional
from abc import ABC, abstractmethod

from src.domain.entities.user import User


class UserRepositoryPort(Protocol):
    def save(self, user: User) -> User: ...
    def find_by_id(self, user_id: str) -> Optional[User]: ...
    def find_by_email(self, email: str) -> Optional[User]: ...
```

---

## 4. Use Case

```python
# src/application/use_cases/create_user_use_case.py
from dataclasses import dataclass

from src.domain.entities.user import User
from src.ports.output.user_repository_port import UserRepositoryPort


@dataclass
class CreateUserCommand:
    email: str
    name: str


class CreateUserUseCase:
    def __init__(self, repository: UserRepositoryPort):
        self._repository = repository

    def execute(self, command: CreateUserCommand) -> User:
        import uuid
        user = User(
            id=str(uuid.uuid4()),
            email=command.email,
            name=command.name,
            created_at=datetime.datetime.utcnow()
        )
        return self._repository.save(user)
```

---

## 5. Output Adapter (Django ORM)

```python
# src/adapters/outbound/persistence/django_orm_adapter.py
from typing import Optional
from django.db import models

from src.domain.entities.user import User
from src.ports.output.user_repository_port import UserRepositoryPort


class UserModel(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)


class DjangoUserRepository:
    def save(self, user: User) -> User:
        orm = UserModel(
            id=user.id,
            email=user.email,
            name=user.name,
            is_active=user.is_active,
        )
        orm.save()
        return user

    def find_by_id(self, user_id: str) -> Optional[User]:
        try:
            orm = UserModel.objects.get(id=user_id)
            return User(... orm)
        except UserModel.DoesNotExist:
            return None
```

---

## 6. Input Adapter (Django Views)

```python
# src/adapters/inbound/http/views.py
import json
from django.http import JsonResponse
from django.views import View

from src.application.use_cases.create_user_use_case import (
    CreateUserUseCase,
    CreateUserCommand,
)
from src.adapters.outbound.persistence.django_orm_adapter import DjangoUserRepository


class CreateUserView(View):
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

## 7. URL Configuration

```python
# src/adapters/inbound/http/urls.py
from django.urls import path
from src.adapters.inbound.http.views import CreateUserView

urlpatterns = [
    path("users", CreateUserView.as_view(), name="create-user"),
]
```

---

## 8. Resumo

| Camada | Local | Descrição |
|--------|-------|-----------|
| Domain | `src/domain/` | Entidades puras |
| Application | `src/application/` | Use cases |
| Ports | `src/ports/` | Interfaces |
| Inbound | `src/adapters/inbound/` | Views Django |
| Outbound | `src/adapters/outbound/` | ORM |