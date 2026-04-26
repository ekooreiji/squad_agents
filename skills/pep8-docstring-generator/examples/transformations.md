# Docstring Examples

Exemplos completos de transformação de código para docstring.

---

## 1. Função Simples sem Parâmetros

### Input

```python
def get_environment():
    """Return current environment."""
    import os
    return os.environ.get("ENV", "development")
```

### Output

```python
def get_environment():
    """Return current environment name.

    Returns:
        str: Environment name ('development', 'production', etc).

    Example:
        >>> get_environment()
        'development'
    """
    import os
    return os.environ.get("ENV", "development")
```

---

## 2. Função com Parâmetros Required

### Input

```python
def validate_email(email):
    """Check if email is valid."""
    import re
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(pattern, email))
```

### Output

```python
def validate_email(email):
    """Check if email address is valid.

    Args:
        email (str, required): Email address to validate.

    Returns:
        bool: True if email is valid, False otherwise.

    Example:
        >>> validate_email("user@example.com")
        True
        >>> validate_email("invalid")
        False
    """
    import re
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(pattern, email))
```

---

## 3. Função com Múltiplos Tipos

### Input

```python
from typing import Union

def parse_number(value: Union[int, float, str]) -> float:
    """Parse value to number."""
    return float(value)
```

### Output

```python
from typing import Union

def parse_number(value: Union[int, float, str]) -> float:
    """Parse a value to a floating point number.

    Args:
        value (Union[int, float, str], required): Value to parse.

    Returns:
        float: Parsed number.

    Example:
        >>> parse_number(42)
        42.0
        >>> parse_number("3.14")
        3.14
    """
    return float(value)
```

---

## 4. Função com Exceções

### Input

```python
import json

def load_config(path):
    """Load config from JSON file."""
    with open(path) as f:
        return json.load(f)
```

### Output

```python
import json

def load_config(path):
    """Load configuration from a JSON file.

    Args:
        path (str, required): Path to the JSON config file.

    Returns:
        dict: Parsed configuration.

    Raises:
        FileNotFoundError: If config file doesn't exist.
        json.JSONDecodeError: If file contains invalid JSON.

    Example:
        >>> load_config("config.json")
        {'key': 'value'}
    """
    with open(path) as f:
        return json.load(f)
```

---

## 5. Método de Classe

### Input

```python
class ConfigManager:
    def __init__(self, base_path):
        self.base_path = base_path
        self.configs = {}

    def load(self, name):
        """Load config by name."""
        import json
        path = f"{self.base_path}/{name}.json"
        with open(path) as f:
            self.configs[name] = json.load(f)
        return self.configs[name]
```

### Output

```python
class ConfigManager:
    """Manages application configurations."""

    def __init__(self, base_path):
        """Initialize the config manager.

        Args:
            base_path (str, required): Base directory for config files.
        """
        self.base_path = base_path
        self.configs = {}

    def load(self, name):
        """Load configuration by name.

        Args:
            name (str, required): Configuration name (without .json).

        Returns:
            dict: Loaded configuration.

        Raises:
            FileNotFoundError: If config file doesn't exist.

        Example:
            >>> manager = ConfigManager("/etc/myapp")
            >>> manager.load("database")
            {'host': 'localhost', 'port': 5432}
        """
        import json
        path = f"{self.base_path}/{name}.json"
        with open(path) as f:
            self.configs[name] = json.load(f)
        return self.configs[name]
```

---

## 6. Função Generator

### Input

```python
def range_squared(n):
    """Yield squared numbers from 0 to n-1."""
    for i in range(n):
        yield i * i
```

### Output

```python
def range_squared(n):
    """Yield squared numbers from 0 to n-1.

    Args:
        n (int, required): Number of squared values to yield.

    Yields:
        int: Squared number (i * i).

    Example:
        >>> list(range_squared(5))
        [0, 1, 4, 9, 16]
    """
    for i in range(n):
        yield i * i
```

---

## 7. Função Async

### Input

<function>
<parameter name="content">
import aiohttp

async def fetch_json(url):
    """Fetch JSON from URL."""
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()