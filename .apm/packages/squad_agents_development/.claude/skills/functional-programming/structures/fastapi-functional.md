# Programação Funcional no FastAPI

Padrões e técnicas de FP para APIs FastAPI com Pydantic.

---

## 1. Pydantic Models (FP)

### Model with Validation

```python
from pydantic import BaseModel, validator
from typing import Optional, List
from datetime import datetime

# Immutable model
class User(BaseModel):
    name: str
    email: str
    age: int
    created_at: datetime = datetime.now()

    class Config:
        frozen = True  # Imutável!

# ✗ Erro - modelo frozen
user = User(name="John", email="john@example.com", age=30)
user.name = "Jane"  # ValidationError

# ✓ Novo objeto
new_user = User(
    name="Jane",
    email=user.email,
    age=user.age,
    created_at=user.created_at
)
```

### Validators Funcionais

```python
from pydantic import BaseModel, validator

class User(BaseModel):
    name: str
    email: str

    # Validator puro
    @validator("name")
    def name_must_not_be_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("Name cannot be empty")
        return v.strip()

    @validator("email")
    def validate_email(cls, v):
        if "@" not in v:
            raise ValueError("Invalid email")
        return v.lower()

    # Factory (em vez de __init__)
    @classmethod
    def create(cls, name: str, email: str) -> "User":
        return cls(name=name.strip(), email=email.lower())
```

---

## 2. Funções Puras em Endpoints

### Endpoint Funcional

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Pura - mesmo input = mesmo output
def calculate_total(items: List[dict]) -> float:
    return sum(item["price"] for item in items)

# Pura - idempotente
def apply_discount(price: float, discount: float) -> float:
    if discount < 0 or discount > 100:
        raise ValueError("Invalid discount")
    return price * (1 - discount / 100)

@app.post("/calculate")
def calculate(items: List[dict]):
    return {"total": calculate_total(items)}
```

### Endpoint com Validação

```python
from pydantic import BaseModel, validator

class Item(BaseModel):
    name: str
    price: float

    @validator("price")
    def price_must_be_positive(cls, v):
        if v < 0:
            raise ValueError("Price must be positive")
        return v

class CalculateRequest(BaseModel):
    items: List[Item]

# Endpoint usa modelo validado
@app.post("/calculate")
def calculate(request: CalculateRequest):
    total = sum(item.price for item in request.items)
    return {"total": total}
```

---

## 3. Repository Pattern (FP)

### Repository Funcional

```python
from typing import Protocol, List, Optional, TypeVar
from abc import ABC, abstractmethod

T = TypeVar("T")

class Repository(Protocol[T]):
    """Porta - interface pura."""

    @abstractmethod
    def find_all(self) -> List[T]:
        ...

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[T]:
        ...

    @abstractmethod
    def save(self, entity: T) -> T:
        ...

class UserRepository:
    """Implementação pura."""

    def __init__(self):
        self._users: dict = {}

    def find_all(self) -> List[dict]:
        return list(self._users.values())

    def find_by_id(self, id: str) -> Optional[dict]:
        return self._users.get(id)

    def save(self, user: dict) -> dict:
        self._users[user["id"]] = user
        return user
```

---

## 4. Use Cases Funcionais

### Use Case Puro

```python
from dataclasses import dataclass

@dataclass
class CreateUserCommand:
    name: str
    email: str

class CreateUserUseCase:
    """Use case puro - sem dependência de frameworks."""

    def __init__(self, repository):
        self._repository = repository

    def execute(self, command: CreateUserCommand) -> dict:
        # Verificação (pura)
        existing = self._repository.find_by_email(command.email)
        if existing:
            raise ValueError("Email already exists")

        # Criação (pura)
        user = {
            "id": generate_uuid(),
            "name": command.name,
            "email": command.email,
            "active": True,
        }

        # Persistência
        return self._repository.save(user)
```

---

## 5. Higher-Order Functions

### map/filter em FastAPI

```python
from fastapi import FastAPI
from typing import List

app = FastAPI()

# map funcional
def transform_users(users: List[dict]) -> List[dict]:
    return list(map(
        lambda u: {"id": u["id"], "name": u["name"].upper()},
        users
    ))

# filter funcional
def filter_active(users: List[dict]) -> List[dict]:
    return list(filter(lambda u: u.get("active", False), users))

# Composition
from functools import reduce

def pipe(*fns):
    return reduce(lambda f, g: lambda x: g(f(x)), fns)

get_active = lambda users: filter_active(users)
get_names = lambda users: list(map(lambda u: u["name"], users))
get_sorted = lambda users: sorted(users)

process = pipe(get_active, get_names, get_sorted)
```

---

## 6. Error Handling (Either)

### Either Monad

```python
from typing import Union
from pydantic import BaseModel

class Left:
    def __init__(self, value):
        self.value = value

class Right:
    def __init__(self, value):
        self.value = value

# Função que retorna Either
def safe_divide(a: float, b: float) -> Union[Left, Right]:
    if b == 0:
        return Left("Division by zero")
    return Right(a / b)

# Pattern matching
def handle_result(result):
    match result:
        case Left(error):
            return {"error": error}
        case Right(value):
            return {"result": value}
```

### Result Type

```python
from typing import Generic, TypeVar, Union

T = TypeVar("T")
E = TypeVar("E")

class Result(Generic[T]):
    def __init__(self, value: T, is_error: bool = False):
        self.value = value
        self.is_error = is_error

    @staticmethod
    def success(value: T) -> "Result[T]":
        return Result(value, False)

    @staticmethod
    def error(error: E) -> "Result[T]":
        return Result(error, True)

    def map(self, fn) -> "Result":
        if self.is_error:
            return self
        return Result.success(fn(self.value))

    def flat_map(self, fn) -> "Result":
        if self.is_error:
            return self
        return fn(self.value))
```

---

## 7. Generators (Lazy)

### Generator Lazy

```python
def numbers():
    """Generator lazy."""
    n = 1
    while True:
        yield n
        n += 1

# Lazy evaluation
evens = (x for x in numbers() if x % 2 == 0)

# Take
def take(n, iterable):
    return list(__import__("itertools").islice(iterable, n))

take(5, evens)  # [2, 4, 6, 8, 10]

# Lazy pipeline
def pipeline():
    return (
        x * 2
        for x in numbers()
        if x > 5
        if x % 2 == 0
    )

take(5, pipeline())  # [12, 16, 20, 24, 28]
```

---

## 8. Composition

### Compose + Pipe

```python
from functools import reduce

def compose(*fns):
    return reduce(lambda f, g: lambda x: g(f(x)), fns)

def pipe(*fns):
    return reduce(lambda f, g: lambda x: g(f(x)), fns)

# Uso
double = lambda x: x * 2
add_ten = lambda x: x + 10
square = lambda x: x ** 2

# compose: square(add_ten(double(3))) = 256
process = compose(square, add_ten, double)
process(3)

# pipe: double(add_ten(square(3))) = 38
process = pipe(double, add_ten, square)
process(3)
```

---

## 9. Estrutura de Projeto

```
src/
├── domain/
│   ├── entities/       # Entidades puras
│   ├── value_objects/ # Value objects
│   └── services/      # Domain services
├── application/
│   ├── commands/     # Commands
│   └── use_cases/    # Use cases puros
├── ports/
│   ├── input/        # Input ports
│   └── output/       # Output ports
├── adapters/
│   ├── api/         # FastAPI routes
│   └── persistence/  # Repositories
├── utils/
│   ├── fp/         # Helpers FP
│   └── result.py    # Result/Either types
└── main.py
```

---

## 10. Checklist FP FastAPI

- [ ] Models são frozen (imutáveis)?
- [ ] Validators são funcionais?
- [ ] Use cases não dependem de frameworks?
- [ ] Repositories são interfaces puras?
- [ ] Funções são idempotentes?
- [ ] Error handling com Either/Result?
- [ ] Lazy evaluation com generators?
- [ ] Composition para transforms?