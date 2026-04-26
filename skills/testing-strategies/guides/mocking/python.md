# Mocking - Python

## unittest.mock

```python
from unittest.mock import Mock, patch, MagicMock

# Mock simples
def test_external_api():
    mock = Mock(return_value={"data": "test"})
    result = mock()
    assert result == {"data": "test"}
```

## @patch Decorator

```python
from unittest.mock import patch

@patch('myapp.api.fetch_user')
def test_fetch_user(mock_fetch):
    mock_fetch.return_value = {"id": 1, "name": "John"}
    
    user = fetch_user(1)
    assert user["name"] == "John"
    mock_fetch.assert_called_once_with(1)
```

## Mock de Módulo

```python
# mymodule.py
def get_user(user_id):
    return api_client.get(f"/users/{user_id}")

# test
from mymodule import get_user

@patch('mymodule.api_client')
def test_get_user(mock_client):
    mock_client.get.return_value = {"id": 1, "name": "John"}
    
    result = get_user(1)
    
    assert result["name"] == "John"
```

## Mock de Classe

```python
from unittest.mock import Mock

class PaymentProcessor:
    def process(self, amount):
        return True

# Test
processor = Mock(spec=PaymentProcessor)
processor.process.return_value = True

result = processor.process(100)
assert result == True
```

## Spy

```python
from unittest.mock import Mock, call

mock = Mock()

mock(1)
mock(2)
mock(3)

# Verificar chamadas
assert mock.call_count == 3
mock.assert_has_calls([call(1), call(2)])
```

## Fixture com Mock

```python
# conftest.py
import pytest
from unittest.mock import Mock

@pytest.fixture
def mock_user_repository():
    return Mock()
```

## Referências

- [unittest.mock](https://docs.python.org/3/library/unittest.mock.html)