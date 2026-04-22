---
name: pep8-docstring-generator
description: Gera docstrings no estilo Google para funções e classes Python com suporte a Args, Returns, Raises, Examples
---

# PEP8 Docstring Generator

Gera docstrings no padrão Google Style para funções, métodos e classes Python. Inclui suporte completo para Args (com type e optional/required), Returns, Raises e Examples.

---

## Como Usar

Forneça o código de uma função, método ou classe Python. A skill irá:

1. Analisar a assinatura da função (parâmetros, tipos, defaults)
2. Identificar o tipo de retorno (via type hints ou análise do corpo)
3. Detectar exceções raised no código
4. Gerar a docstring completa no formato Google Style

---

## Formato de Saída

### Template Base

```python
def function_name(param1, param2):
    """[Summary line - uma linha resumindo o propósito].

    [Descrição mais detalhada se necessário - paragraphs separados por linha em branco].

    Args:
        param1 (type, required): Description.
        param2 (type, optional): Description.

    Returns:
        type: Description.

    Raises:
        ExceptionType: When this happens.

    Example:
        >>> function_name(arg1, arg2)
        expected_output
    """
```

### Formato de Args

| Parâmetro | Formato |
|-----------|----------|
| Com default | `param (type, optional): Description.` |
| Sem default | `param (type, required): Description.` |
| `*args` | `*args: Variable arguments.` |
| `**kwargs` | `**kwargs: Keyword arguments.` |

---

## Exemplo de Entrada e Saída

### Entrada

```python
def calculate_discount(price, discount_percent=10, tax_rate=0):
    """Calculate final price with discount and tax."""
    if discount_percent < 0:
        raise ValueError("Discount cannot be negative")
    if tax_rate < 0:
        raise ValueError("Tax rate cannot be negative")

    discounted = price * (1 - discount_percent / 100)
    final_price = discounted * (1 + tax_rate)
    return final_price
```

### Saída Gerada

```python
def calculate_discount(price, discount_percent=10, tax_rate=0):
    """Calculate final price with discount and tax applied.

    Calculates the final price after applying a discount percentage
    and adding tax rate.

    Args:
        price (float, required): Original price before discounts and taxes.
        discount_percent (int, optional): Discount percentage (0-100). Defaults to 10.
        tax_rate (float, optional): Tax rate as decimal (e.g., 0.1 for 10%). Defaults to 0.

    Returns:
        float: Final price after discount and tax.

    Raises:
        ValueError: If discount_percent is negative.
        ValueError: If tax_rate is negative.

    Example:
        >>> calculate_discount(100, 10, 0.1)
        99.0
        >>> calculate_discount(100)
        90.0
        >>> calculate_discount(100, tax_rate=0.2)
        108.0
    """
```

---

## Exemplos por Tipo de Função

### 1. Função Simples (sem parâmetros)

```python
# Entrada
def get_version():
    """Return the current version."""
    return "1.0.0"


# Saída Gerada
def get_version():
    """Return the current version of the application.

    Returns:
        str: Version string in semver format.

    Example:
        >>> get_version()
        '1.0.0'
    """
```

### 2. Função com Múltiplos Parâmetros

```python
# Entrada
def create_user(name, email, age=None, roles=None):
    """Create a new user in the system."""
    user = {"name": name, "email": email}
    if age is not None:
        user["age"] = age
    if roles:
        user["roles"] = roles
    return user


# Saída Gerada
def create_user(name, email, age=None, roles=None):
    """Create a new user in the system.

    Args:
        name (str, required): User's full name.
        email (str, required): User's email address.
        age (int, optional): User's age. Defaults to None.
        roles (list[str], optional): List of role names. Defaults to None.

    Returns:
        dict: User dictionary with all provided fields.

    Example:
        >>> create_user("John", "john@example.com")
        {'name': 'John', 'email': 'john@example.com'}
        >>> create_user("John", "john@example.com", roles=["admin"])
        {'name': 'John', 'email': 'john@example.com', 'roles': ['admin']}
    """
```

### 3. Função com Raises

```python
# Entrada
def divide(a, b):
    """Divide two numbers."""
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b


# Saída Gerada
def divide(a, b):
    """Divide two numbers.

    Args:
        a (int | float, required): Numerator.
        b (int | float, required): Denominator.

    Returns:
        float: Result of a divided by b.

    Raises:
        ZeroDivisionError: If b is zero.

    Example:
        >>> divide(10, 2)
        5.0
        >>> divide(10, 3)
        3.3333333333333335
    """
```

### 4. Método de Classe

```python
# Entrada
class User:
    def __init__(self, name, email):
        """Initialize user."""
        self.name = name
        self.email = email

    def greet(self):
        """Return greeting message."""
        return f"Hello, {self.name}!"


# Saída Gerada
class User:
    """User entity representing a system user.

    Attributes:
        name: User's name.
        email: User's email address.
    """

    def __init__(self, name, email):
        """Initialize a new user instance.

        Args:
            name (str, required): User's name.
            email (str, required): User's email address.
        """
        self.name = name
        self.email = email

    def greet(self):
        """Return greeting message for the user.

        Returns:
            str: Greeting message with user's name.

        Example:
            >>> user = User("John", "john@example.com")
            >>> user.greet()
            'Hello, John!'
        """
```

### 5. Função Async

```python
# Entrada
async def fetch_data(url):
    """Fetch data from URL."""
    import aiohttp
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()


# Saída Gerada
async def fetch_data(url):
    """Fetch JSON data from the given URL.

    Args:
        url (str, required): URL to fetch data from.

    Returns:
        dict: Parsed JSON response.

    Raises:
        aiohttp.ClientError: If request fails.

    Example:
        >>> import asyncio
        >>> asyncio.run(fetch_data("https://api.example.com/data"))
        {'key': 'value'}
    """
```

### 6. Função Generator

```python
# Entrada
def fibonacci(n):
    """Generate fibonacci sequence."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b


# Saída Gerada
def fibonacci(n):
    """Generate fibonacci sequence up to n numbers.

    Args:
        n (int, required): Number of fibonacci numbers to generate.

    Yields:
        int: Next fibonacci number in the sequence.

    Example:
        >>> list(fibonacci(5))
        [0, 1, 1, 2, 3]
        >>> list(fibonacci(10))
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    """
```

### 7. Função com Type Hints

```python
# Entrada
def process_items(items: list[int]) -> dict[str, int]:
    """Process a list of items and return counts."""
    return {"total": len(items), "unique": len(set(items))}


# Saída Gerada
def process_items(items: list[int]) -> dict[str, int]:
    """Process a list of items and return summary counts.

    Args:
        items (list[int], required): List of integers to process.

    Returns:
        dict[str, int]: Dictionary with 'total' and 'unique' counts.

    Example:
        >>> process_items([1, 2, 2, 3, 3, 3])
        {'total': 6, 'unique': 3}
    """
```

### 8. Lambda (não tem docstring - apenas ignore)

> **Nota**: Lambdas não devem ter docstrings. A skill ira ignorar ou informar que não e aplicavel.

---

## Processo de Geração

1. **Analisar assinatura**
   - Extrair nome da função
   - Extrair parâmetros e seus tipos (de type hints ou inferência)
   - Determinar required vs optional (presença de default)

2. **Analisar corpo**
   - Procurar `raise` statements para identificar excepciones
   - Verificar `return` statements para tipo de retorno
   - Detectar se é generator (yield)

3. **Detectar tipo de retorno**
   - De type hints: `-> type`
   - Do corpo: inferir através do return

4. **Gerar Examples**
   - Criar exemplo básico com parâmetros required
   - Adicionar exemplos com parâmetros opcionais
   - Usar doctest format (>>>)

---

## Checklist de Validação

Ao gerar uma docstring, verifique:

- [ ] Summary line é uma linha concisa
- [ ] Args lista todos os parâmetros
- [ ] Cada arg tem type e required/optional
- [ ] Returns tem tipo quando não for None
- [ ] Raises lista toutes as excepciones possiveis
- [ ] Example usa formato doctest (>>>)
- [ ] Example funciona corretamente
- [ ] Docstring fechada com """
- [ ] Blank line entre summary e description (se houver)

---

## Referência

- [Google Python Style Guide - Docstrings](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings)
- [PEP 257 - Docstring Conventions](https://peps.python.org/pep-0257/)
- [Sphinx - Google Style](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html)