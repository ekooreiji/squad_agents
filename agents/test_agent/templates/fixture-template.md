# Fixture Template

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Test Agent |
| Versão | 1.0.0 |

---

## JavaScript / TypeScript - Jest Fixtures

### Data Fixtures
export const valid{nome} = {{
  id: 'uuid-123',
  name: 'Test User',
  email: 'test@example.com',
  createdAt: '2024-01-01T00:00:00Z'
}};

export const invalid{nome} = {{
  id: 'invalid',
  name: '',
  email: 'invalid-email'
}};

export const {nome}List = [
  valid{nome},
  { ...valid{nome}, id: 'uuid-456', name: 'User 2' }
];

### Mock Functions
export const mock{nome}Service = {{
  findById: jest.fn().mockResolvedValue(valid{nome}),
  create: jest.fn().mockResolvedValue(valid{nome}),
  update: jest.fn().mockResolvedValue({ ...valid{nome}, name: 'Updated' }),
  delete: jest.fn().mockResolvedValue(undefined)
}};

### API Response Mock
export const mockApiResponse = (data: any, status = 200) => {
  return {
    status,
    data,
    ok: status >= 200 && status < 300,
    json: async () => data
  };
};

---

## Python - Pytest Fixtures

### Data Fixtures
import pytest

@pytest.fixture
def valid_data():
    return {{
        'id': 'uuid-123',
        'name': 'Test User',
        'email': 'test@example.com'
    }}

@pytest.fixture
def invalid_data():
    return {{
        'id': 'invalid',
        'name': '',
        'email': 'invalid-email'
    }}

@pytest.fixture
def data_list(valid_data):
    return [valid_data, {{**valid_data, 'id': 'uuid-456'}}]

### Mock Functions
from unittest.mock import Mock

@pytest.fixture
def mock_service():
    service = Mock()
    service.find_by_id = Mock(return_value=valid_data())
    service.create = Mock(return_value=valid_data())
    service.update = Mock(return_value={{**valid_data(), 'name': 'Updated'}})
    service.delete = Mock(return_value=None)
    return service

### API Client Mock
import requests

class MockResponse:
    def __init__(self, data, status=200):
        self.json_data = data
        self.status_code = status

    def json(self):
        return self.json_data

@pytest.fixture
def mock_api_response():
    def _mock_response(data, status=200):
        return MockResponse(data, status)
    return _mock_response

---

## Factory Pattern

### TypeScript
export const {nome}Factory = {{
  create: (overrides = {{}}) => ({{
    ...valid{nome},
    ...overrides
  }}
}};

### Python
def {nome}_factory(overrides=None):
    defaults = {{'id': 'uuid', 'name': 'Test'}}
    if overrides:
        defaults.update(overrides)
    return defaults

---

## Setup/Teardown

### TypeScript
beforeEach(() => {{
  jest.clearAllMocks();
}});

afterEach(() => {{
  // Cleanup
}});

### Python
@pytest.fixture(autouse=True)
def setup_teardown():
    # Setup
    yield
    # Teardown

---

## Dúvidas em Aberto ❓
| # | Pergunta |
|----|---------|
| 1 | ... |

---

## Próximos Passos
- [ ] Criar fixtures
- [ ] Usar em testes