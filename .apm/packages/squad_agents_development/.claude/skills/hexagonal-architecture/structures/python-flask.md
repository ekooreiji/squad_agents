# Estrutura Hexagonal - Flask (Python)

Estrutura de diretórios e padrões para aplicação Flask com Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

```
project/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── __init__.py
│   │   │   └── user.py
│   │   ├── value_objects/
│   │   │   ├── __init__.py
│   │   │   └── email.py
│   │   └── services/
│   │       ├── __init__.py
│   │       └── user_service.py
│   │
│   ├── application/
│   │   ├── commands/
│   │   │   └── create_user.py
│   │   └── use_cases/
│   │       └── create_user_use_case.py
│   │
│   ├── ports/
│   │   ├── input/
│   │   │   └── user_input_ports.py
│   │   └── output/
│   │       └── user_repository.py
│   │
│   ├── adapters/
│   │   ├── inbound/
│   │   │   └── http/
│   │   │       ├── __init__.py
│   │   │       ├── blueprint.py
│   │   │       └── routes.py
│   │   └── outbound/
│   │       └── persistence/
│   │           ├── __init__.py
│   │           ├── sqlalchemy_adapter.py
│   │           └── memory_adapter.py
│   │
│   ├── config/
│   │   └── settings.py
│   │
│   └── __init__.py
│
├── app.py                 # Composition Root
├── tests/
├── requirements.txt
└── README.md
```

---

## 2. Exemplo: Domain

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
```

---

## 3. Exemplo: Use Case

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
    def __init__(self, repository: UserRepositoryPort):
        self._repository = repository

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

## 4. Exemplo: Input Adapter (Flask Blueprint)

```python
# adapters/inbound/http/blueprint.py
from flask import Blueprint, request, jsonify

from application.use_cases.create_user_use_case import CreateUserUseCase, CreateUserCommand
from adapters.outbound.persistence.sqlalchemy_adapter import SQLAlchemyUserRepository

bp = Blueprint("users", __name__)


@bp.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()

    repository = SQLAlchemyUserRepository()
    use_case = CreateUserUseCase(repository)

    command = CreateUserCommand(
        email=data["email"],
        name=data["name"]
    )

    user = use_case.execute(command)

    return jsonify({
        "id": user.id,
        "email": user.email,
        "name": user.name,
    }), 201
```

---

## 5. Exemplo: Composition Root

```python
# app.py
from flask import Flask

from adapters.inbound.http.blueprint import bp as users_bp

app = Flask(__name__)
app.register_blueprint(users_bp)


if __name__ == "__main__":
    app.run(debug=True)
```

---

## 6. Resumo

| Camada | Local |
|--------|-------|
| Domain | `src/domain/` |
| Application | `src/application/` |
| Ports | `src/ports/` |
| Inbound | `src/adapters/inbound/` |
| Outbound | `src/adapters/outbound/` |