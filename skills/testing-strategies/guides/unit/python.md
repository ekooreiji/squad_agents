# Unit Tests - Python

## Frameworks

| Framework | Uso |
|----------|-----|
| **pytest** | Mais popular, moderno |
| **unittest** | Stdlib |

## Configuração

```bash
pip install pytest pytest-cov
```

## Estrutura

```
tests/
├── unit/
│   ├── __init__.py
│   ├── test_user.py
│   └── test_order.py
└── conftest.py
```

## Testes Básicos

```python
# tests/unit/test_math.py
import pytest
from myapp.math import add, subtract, multiply

class TestMath:
    def test_add(self):
        assert add(2, 3) == 5
    
    def test_add_negative(self):
        assert add(-1, 1) == 0
    
    def test_subtract(self):
        assert subtract(5, 3) == 2
    
    def test_multiply(self):
        assert multiply(3, 4) == 12
    
    def test_multiply_zero(self):
        assert multiply(5, 0) == 0
```

## Fixtures

```python
# tests/conftest.py
import pytest
from myapp.models import User

@pytest.fixture
def user():
    return User(name="Test", email="test@example.com")

@pytest.fixture
def db():
    return MockDatabase()
```

## Usar Fixtures

```python
def test_user_name(user):
    assert user.name == "Test"

def test_create_user(db):
    user = db.create_user({"name": "John"})
    assert user.id is not None
```

## Parametrização

```python
@pytest.mark.parametrize("input,expected", [
    (2, 2),
    (0, 0),
    (-1, 1),
])
def test_abs_custom(input, expected):
    assert abs_custom(input) == expected
```

## Mocking

```python
from unittest.mock import Mock, patch

@patch('myapp.api.get_user')
def test_get_user(mock_get):
    mock_get.return_value = {"name": "Mocked"}
    result = get_user(1)
    assert result["name"] == "Mocked"
```

## Run

```bash
pytest tests/unit/test_math.py -v
pytest tests/unit/ -v --cov=myapp
```