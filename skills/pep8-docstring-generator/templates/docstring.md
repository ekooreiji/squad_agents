# Docstring Templates

Templates prontos para diferentes tipos de funções.

---

## 1. Função Simples

```python
def function_name(param1, param2):
    """Short summary of what the function does.

    Longer description if needed. Explain what the function
    does in more detail.

    Args:
        param1 (type, required): Description of param1.
        param2 (type, optional): Description of param2. Defaults to None.

    Returns:
        type: Description of what is returned.

    Raises:
        ExceptionType: When this exception is raised.

    Example:
        >>> function_name("arg1", "arg2")
        expected_output
    """
```

---

## 2. Função com Múltiplos Params

```python
def process_data(
    input_data,
    mode="default",
    max_items=None,
    options=None,
):
    """Short summary.

    Longer description explaining the purpose and behavior
    of the function.

    Args:
        input_data (type, required): Description.
        mode (str, optional): Processing mode. Defaults to "default".
            - "default": Default processing
            - "fast": Fast processing
            - "detailed": Detailed processing
        max_items (int, optional): Maximum items to process. Defaults to None (no limit).
        options (dict, optional): Additional options. Defaults to None.

    Returns:
        type: Description of return value.

    Raises:
        ValueError: When input is invalid.
        RuntimeError: When processing fails.

    Example:
        >>> process_data([1, 2, 3])
        result
        >>> process_data([1, 2, 3], mode="fast")
        fast_result
    """
```

---

## 3. Método de Classe

```python
class ClassName:
    """Brief description of the class.

    More detailed description of the class if needed.
    """

    def __init__(self, param1, param2):
        """Initialize the class.

        Args:
            param1 (type, required): Description.
            param2 (type, optional): Description. Defaults to None.
        """
        self.param1 = param1
        self.param2 = param2

    def method(self, arg1):
        """Method short summary.

        Args:
            arg1 (type, required): Description.

        Returns:
            type: Description.

        Example:
            >>> obj = ClassName("value")
            >>> obj.method("arg")
            result
        """
```

---

## 4. Função Async

```python
async def fetch_data(url, params=None):
    """Short summary of async operation.

    Args:
        url (str, required): URL to fetch.
        params (dict, optional): Query parameters. Defaults to None.

    Returns:
        type: Data returned from the request.

    Raises:
        HTTPError: If request fails.

    Example:
        >>> import asyncio
        >>> asyncio.run(fetch_data("https://api.example.com"))
        data
    """
```

---

## 5. Generator

```python
def generator_name(n):
    """Generate sequence of items.

    Args:
        n (int, required): Number of items to generate.

    Yields:
        type: Next item in sequence.

    Example:
        >>> list(generator_name(5))
        [0, 1, 2, 3, 4]
    """
```

---

## 6. Função Privada

```python
def _private_function(param):
    """Short summary (internal use only).

    Args:
        param (type, required): Description.

    Returns:
        type: Description.
    """
```

---

## 7. Função de Classe (@classmethod)

```python
@classmethod
def from_dict(cls, data):
    """Create instance from dictionary.

    Args:
        data (dict, required): Dictionary with instance data.

    Returns:
        cls: New instance.

    Example:
        >>> obj = ClassName.from_dict({"key": "value"})
        >>> obj.key
        'value'
    """
```

---

## 8. Função Estática (@staticmethod)

```python
@staticmethod
def utility_function(arg1, arg2):
    """Static method description.

    Args:
        arg1 (type, required): Description.
        arg2 (type, optional): Description. Defaults to None.

    Returns:
        type: Description.

    Example:
        >>> ClassName.utility_function("a", "b")
        result
    """
```

---

## 9. Property

```python
@property
def value(self):
    """Get the current value.

    Returns:
        type: Current value.
    """
```

---

## 10. Classe de Dados (dataclass)

```python
@dataclass
class DataClass:
    """Short description of the data class."""

    field1: type = description
    """Description of field1."""

    field2: type = default
    """Description of field2."""

    def method(self):
        """Method description."""
```