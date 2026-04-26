# Arquitetura Flask

Estrutura recomendada para projetos Flask.

---

## 1. Estrutura Básica

```
project/
├── app/
│   ├── __init__.py          # Criação do app
│   ├── main.py              # Entry point
│   ├── config.py            # Configurações
│   ├── extensions.py        # Extensões Flask
│   ├── models/              # Models SQLAlchemy
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/             # Marshmallow/Schemas
│   │   ├── __init__.py
│   │   └── user.py
│   ├── repositories/       # Acesso a dados
│   │   ├── __init__.py
│   │   └── user.py
│   ├── services/            # Lógica de negócio
│   │   ├── __init__.py
│   │   └── user_service.py
│   ├── routes/             # Blueprints/Rotas
│   │   ├── __init__.py
│   │   ├── user_bp.py
│   │   └── auth_bp.py
│   ├── validators/          # Validação
│   │   └── user.py
│   └── errors/             # Error handlers
│       └── handlers.py
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── migrations/              # Alembic
├── requirements.txt
├── pytest.ini
├── setup.py
└── run.py
```

---

## 2. App Factory

```python
# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()


def create_app(config_name="config.DevelopmentConfig"):
    """App factory."""
    app = Flask(__name__)
    app.config.from_object(config_name)

    # Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)

    # Blueprints
    from app.routes.user_bp import user_bp
    from app.routes.auth_bp import auth_bp

    app.register_blueprint(user_bp, url_prefix="/api/users")
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    # Error handlers
    from app.errors.handlers import register_error_handlers
    register_error_handlers(app)

    return app
```

---

## 3. Models

```python
# app/models/user.py
from datetime import datetime
from app import db


class User(db.Model):
    """User model."""

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<User {self.email}>"

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "is_active": self.is_active,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
```

---

## 4. Repository

```python
# app/repositories/user_repository.py
from typing import List, Optional
from app.models.user import User
from app import db


class UserRepository:
    """User repository."""

    def get_by_id(self, user_id: int) -> Optional[User]:
        return User.query.get(user_id)

    def get_by_email(self, email: str) -> Optional[User]:
        return User.query.filter_by(email=email).first()

    def get_all(self) -> List[User]:
        return User.query.all()

    def get_active_users(self) -> List[User]:
        return User.query.filter_by(is_active=True).all()

    def create(self, email: str, name: str, password_hash: str) -> User:
        user = User(email=email, name=name, password_hash=password_hash)
        db.session.add(user)
        db.session.commit()
        return user

    def update(self, user: User) -> User:
        db.session.commit()
        return user

    def delete(self, user: User) -> None:
        db.session.delete(user)
        db.session.commit()
```

---

## 5. Service

```python
# app/services/user_service.py
from dataclasses import dataclass
from typing import List, Optional
from app.repositories.user_repository import UserRepository


@dataclass
class CreateUserDTO:
    email: str
    name: str
    password: str


class UserService:
    """User domain service."""

    def __init__(self, repository: UserRepository):
        self._repository = repository

    def create_user(self, dto: CreateUserDTO) -> User:
        # Validação de domínio
        existing = self._repository.get_by_email(dto.email)
        if existing:
            raise ValueError("Email already exists")

        # Hash da senha
        from werkzeug.security import generate_password_hash
        password_hash = generate_password_hash(dto.password)

        # Criação
        user = self._repository.create(
            email=dto.email,
            name=dto.name,
            password_hash=password_hash,
        )
        return user

    def get_user(self, user_id: int) -> Optional[User]:
        return self._repository.get_by_id(user_id)

    def get_active_users(self) -> List[User]:
        return self._repository.get_active_users()

    def deactivate_user(self, user_id: int) -> User:
        user = self._repository.get_by_id(user_id)
        if not user:
            raise ValueError("User not found")

        user.is_active = False
        return self._repository.update(user)
```

---

## 6. Routes (Blueprint)

```python
# app/routes/user_bp.py
from flask import Blueprint, request, jsonify
from app.services.user_service import UserService, CreateUserDTO
from app.repositories.user_repository import UserRepository

user_bp = Blueprint("user", __name__)


def get_user_service():
    repository = UserRepository()
    return UserService(repository)


@user_bp.route("/users", methods=["POST"])
def create_user():
    """Create user endpoint."""
    data = request.get_json()

    dto = CreateUserDTO(
        email=data.get("email"),
        name=data.get("name"),
        password=data.get("password"),
    )

    service = get_user_service()

    try:
        user = service.create_user(dto)
        return jsonify(user.to_dict()), 201
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@user_bp.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    """Get user endpoint."""
    service = get_user_service()

    user = service.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify(user.to_dict())


@user_bp.route("/users", methods=["GET"])
def list_users():
    """List users endpoint."""
    service = get_user_service()
    users = service.get_active_users()
    return jsonify([u.to_dict() for u in users])
```

---

## 7. Schemas (Marshmallow)

```python
# app/schemas/user.py
from flask_marshmallow import Marshmallow
from marshmallow import Schema, fields

ma = Marshmallow()


class UserSchema(Schema):
    """User schema."""

    id = fields.Int(dump_only=True)
    email = fields.Email(required=True)
    name = fields.Str(required=True)
    is_active = fields.Bool()
    created_at = fields.DateTime(dump_only=True)


class UserCreateSchema(Schema):
    """User create schema."""

    email = fields.Email(required=True)
    name = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)


user_schema = UserSchema()
users_schema = UserSchema(many=True)
user_create_schema = UserCreateSchema()
```

---

## 8. Run

```python
# run.py
from app import create_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
```

---

## 9. Config

```python
# app/config.py
import os


class Config:
    """Base config."""

    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret-key")
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    """Development config."""

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///app.db"
    SQLALCHEMY_ECHO = True


class ProductionConfig(Config):
    """Production config."""

    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")


class TestingConfig(Config):
    """Testing config."""

    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"


config_by_name = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
    "testing": TestingConfig,
}
```

---

## 10. Docker

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy code
COPY . .

# Run
CMD ["flask", "run", "--host=0.0.0.0"]
```

---

## Resumo

| Camada | Responsabilidade |
|--------|-----------------|
| **Models** | Estrutura de dados (SQLAlchemy) |
| **Repositories** | Acesso a dados |
| **Services** | Lógica de negócio |
| **Routes/Blueprints** | HTTP endpoints |
| **Schemas** | Validação/Serialização |
| **Config** | Configurações por ambiente |