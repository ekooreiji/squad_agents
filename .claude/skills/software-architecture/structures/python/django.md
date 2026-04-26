# Arquitetura Django

Estrutura recomendada para projetos Django.

---

## 1. Estrutura Básica

```
project/
├── apps/                    # Aplicações Django
│   ├── users/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── tests.py
│   ├── products/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── tests.py
│   └── orders/
├── core/                    # Configurações do projeto
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── templates/               # Templates HTML
├── static/                  # Arquivos estáticos
├── media/                   # Arquivos de upload
├── tests/                   # Testes de integração
├── manage.py
└── requirements.txt
```

---

## 2. Arquitetura Clean no Django

```
project/
├── apps/
│   └── users/
│       ├── models/              # Models Django
│       │   ├── __init__.py
│       │   └── user.py
│       ├── schemas/             # Pydantic/serializers
│       │   ├── __init__.py
│       │   └── user.py
│       ├── services/            # Lógica de negócio
│       │   ├── __init__.py
│       │   └── user_service.py
│       ├── views/              # Views API
│       │   ├── __init__.py
│       │   └── user.py
│       ├── repositories/       # Acesso a dados
│       │   ├── __init__.py
│       │   └── user.py
│       └── tests/
│           ├── __init__.py
│           └── test_user.py
├── core/
│   ├── settings.py
│   └── urls.py
└── manage.py
```

---

## 3. Models

```python
# apps/users/models/user.py
from django.db import models


class User(models.Model):
    """User model."""

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "users"
        ordering = ["-created_at"]

    def __str__(self):
        return self.email
```

---

## 4. Services (Domínio)

```python
# apps/users/services/user_service.py
from dataclasses import dataclass
from typing import Optional


@dataclass
class CreateUserDTO:
    email: str
    name: str


class UserService:
    """User domain service."""

    def __init__(self, repository):
        self._repository = repository

    def create_user(self, dto: CreateUserDTO):
        # Validação de domínio
        existing = self._repository.get_by_email(dto.email)
        if existing:
            raise ValueError("Email already exists")

        # Criação
        user = User(
            email=dto.email,
            name=dto.name,
        )
        return self._repository.save(user)

    def get_active_users(self):
        return self._repository.get_active_users()
```

---

## 5. Repository

```python
# apps/users/repositories/user.py
from typing import List, Optional
from django.db import models


class UserRepository:
    """User repository."""

    def __init__(self, model):
        self._model = model

    def get_by_email(self, email: str) -> Optional[models.Model]:
        return self._model.objects.filter(email=email).first()

    def get_active_users(self) -> List[models.Model]:
        return list(self._model.objects.filter(is_active=True))

    def save(self, user: models.Model) -> models.Model:
        user.save()
        return user
```

---

## 6. Views (API)

```python
# apps/users/views/user.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def create_user(request):
    """Create user endpoint."""
    from apps.users.services.user_service import UserService, CreateUserDTO
    from apps.users.repositories.user import UserRepository
    from apps.users.models import User

    repository = UserRepository(User)
    service = UserService(repository)

    dto = CreateUserDTO(
        email=request.data["email"],
        name=request.data["name"],
    )

    try:
        user = service.create_user(dto)
        return Response({"id": user.id, "email": user.email}, status=status.HTTP_201_CREATED)
    except ValueError as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
```

---

## 7. Tests

```python
# apps/users/tests/test_user.py
from django.test import TestCase
from unittest.mock import Mock, patch


class UserServiceTest(TestCase):
    """Test user service."""

    def test_create_user_success(self):
        """Test successful user creation."""
        # Arrange
        mock_repo = Mock()
        mock_repo.get_by_email.return_value = None
        mock_repo.save.return_value = Mock(id=1, email="test@example.com")

        service = UserService(mock_repo)
        dto = CreateUserDTO(email="test@example.com", name="Test")

        # Act
        user = service.create_user(dto)

        # Assert
        mock_repo.get_by_email.assert_called_once_with("test@example.com")
        mock_repo.save.assert_called_once()

    def test_create_user_duplicate_email(self):
        """Test duplicate email raises error."""
        # Arrange
        mock_repo = Mock()
        mock_repo.get_by_email.return_value = Mock()

        service = UserService(mock_repo)
        dto = CreateUserDTO(email="test@example.com", name="Test")

        # Act & Assert
        with self.assertRaises(ValueError):
            service.create_user(dto)
```

---

## 8. Django REST Framework + Viewsets

```python
# apps/users/views/user_viewset.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import UserSerializer
from .services import UserService
from .repositories import UserRepository


class UserViewSet(viewsets.ModelViewSet):
    """User viewset."""

    serializer_class = UserSerializer

    def get_service(self):
        repository = UserRepository(self.get_queryset().model)
        return UserService(repository)

    def create(self, request, *args, **kwargs):
        service = self.get_service()
        dto = CreateUserDTO(
            email=request.data["email"],
            name=request.data["name"],
        )

        try:
            user = service.create_user(dto)
            serializer = self.get_serializer(user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except ValueError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
```

---

## 9. Commands (Management)

```python
# apps/users/management/commands/create_user.py
from django.core.management.base import BaseCommand
from apps.users.services.user_service import UserService
from apps.users.repositories.user import UserRepository


class Command(BaseCommand):
    help = "Create a user"

    def add_arguments(self, parser):
        parser.add_argument("email", type=str)
        parser.add_argument("name", type=str)

    def handle(self, *args, **options):
        repository = UserRepository(User)
        service = UserService(repository)

        dto = CreateUserDTO(
            email=options["email"],
            name=options["name"],
        )

        user = service.create_user(dto)
        self.stdout.write(f"Created user: {user.email}")
```

---

## 10. Settings Estruturado

```python
# core/settings.py

# Configurações por ambiente
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

if ENVIRONMENT == "production":
    from core.settings.production import *
elif ENVIRONMENT == "staging":
    from core.settings.staging import *
else:
    from core.settings.development import *

# ou

# settings/base.py - configurações comuns
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "apps.users",
]

# settings/local.py
from .base import *

DEBUG = True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# settings/production.py
from .base import *

DEBUG = False

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
    }
}

ALLOWED_HOSTS = ["*"]
```

---

## 11. Docker

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Code
COPY . .

# Migrate
RUN python manage.py migrate --noinput

# Run
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
```

---

## Resumo

| Camada | Responsabilidade |
|--------|-----------------|
| **Models** | Estrutura de dados |
| **Repositories** | Acesso a dados |
| **Services** | Lógica de negócio |
| **Views** | HTTP/API |
| **Serializers** | Validação/Transformação |
| **Tests** | Validação |