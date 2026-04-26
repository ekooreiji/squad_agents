# Mock Template

## Python

```python
from unittest.mock import Mock, patch

# Basic Mock
mock = Mock(return_value="test")

# Patch Function
@patch('myapp.fetch_user')
def test_fetch(mock_fetch):
    mock_fetch.return_value = {"id": 1, "name": "John"}
    result = fetch_user(1)
    assert result["name"] == "John"
```

## JavaScript

```javascript
jest.mock('../api', () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'John' }),
}));

// Spy
jest.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'John' });
```