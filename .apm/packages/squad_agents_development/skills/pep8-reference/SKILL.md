---
name: pep8-reference
description: Referência completa do PEP8 para código Python (Code Layout, Naming, Comments, Docstrings)
---

# PEP8 Reference

Referência rápida das convenções de estilo do PEP8 para código Python. Use esta skill para consultar as regras e garantir que o código siga o padrão.

---

## 1. Code Layout

### 1.1 Indentação

- **Use 4 espaços por nível de indentação**
- Nunca misture tabs com spaces

```python
# ✓ Correto
def foo():
    if True:
        for i in range(10):
            print(i)

# ✗ Incorreto
def foo():
	if True:          # tabs misturados
	    for i in range(10):
	        print(i)
```

### 1.2 Comprimento Máximo de Linha

- **Limite máximo: 79 caracteres** (código)
- **Limite máximo: 72 caracteres** (docstrings/comentários)

```python
# ✓ Correto
result = some_function(arg1, arg2, arg3, arg4)

# ✗ Incorreto (muito longo)
result = some_function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)

# ✓ Quebra de linha correta
result = some_function(
    arg1, arg2, arg3, arg4,
    arg5, arg6
)
```

### 1.3 Quebra de Linha e Operadores

- **Quebre ANTES do operador** (mais legível)

```python
# ✓ Correto (quebra antes do operador)
income = (gross_wages
          + taxable_interest
          - (deductions + expenses))

# ✗ Incorreto (quebra depois do operador)
income = (gross_wages +
          taxable_interest -
          (deductions + expenses))
```

### 1.4 Blank Lines

- **2 linhas em branco** entre definições de nível superior (classes, funções)
- **1 linha em branco** entre definições de métodos dentro de classe

```python
# ✓ Correto
class MyClass:
    def method(self):
        pass

    def another(self):
        pass


class AnotherClass:
    pass
```

### 1.5 Imports

- **Ordem correta** (1 linha em branco entre cada grupo):
  1. Standard library
  2. Third-party
  3. Local application

```python
# ✓ Correto
import os
import sys

import flask
import requests

from mypackage import module
from mypackage.utils import helper
```

```python
# ✗ Incorreto (ordem errada, imports misturados)
import requests
import os
from mypackage import module
```

### 1.6 Módulos e Dunders

- **`__all__`, `__version__`, etc.** vão após docstring, antes dos imports

```python
"""Module docstring."""

__version__ = "1.0.0"
__author__ = "Team"

import os
import sys
```

---

## 2. Whitespace

### 2.1 Expressões e Statements

- **Evite espaços extras** dentro de parênteses/colchetes/chaves

```python
# ✓ Correto
spam(ham[1], {'eggs': 2})

# ✗ Incorreto
spam( ham[ 1 ], { 'eggs': 2 } )
```

- **Use espaços ao redor de operadores**

```python
# ✓ Correto
i = i + 1
submitted += 1
x = -1
if x == 0: pass

# ✗ Incorreto
i=i+1
submitted+=1
x=-1
if x==0:pass
```

- **Sem espaço após** `(`, `[`, `{` em slices

```python
# ✓ Correto
ham[1:9]
ham[1:9:3]
a[:i] + a[i:]

# ✗ Incorreto
ham[ 1:9 ]
ham[1: 9]
a[: i] + a[i :]
```

### 2.2 Funções e Keyword Arguments

```python
# ✓ Correto
def complex(real, imag=0.0):
    pass

complex(1.0, imag=0.0)
complex(real=1.0)

# ✗ Incorreto
def complex(real, imag = 0.0):
    pass

complex(1.0, imag = 0.0)
```

---

## 3. Comments

### 3.1 Block Comments

- **Coloque em linha separada**
- **Use frases completas** (iniciando com maiúscula)
- **Separe parágrafos** com uma linha em branco

```python
# ✓ Correto
# Compute the frequency of each word in the text.
# This is used to analyze reading patterns.
#
# Args:
#     text: Input string to analyze

# ✗ Incorreto
#compute frequency  (sem espaçamento)
#compute frequency of each word in the text (não é frase completa)
```

### 3.2 Inline Comments

- **Use apenas quando necessário** (e não substitua código claro por comentário)
- **Mínimo 2 espaços** do código

```python
# ✓ Correto
x = x + 1  # Compensate for border

# ✗ Incorreto
x = x + 1#no space
x = x + 1  # compensate for border (minúscula)
```

---

## 4. Documentation Strings (Docstrings)

### 4.1 Regras Gerais

- **Use aspas triplas `"""`**
- **Coloque em todas** classes, funções públicas e módulos
- **Uma linha** para docstrings simples
- **Multilinha** para descrições elaboradas

```python
# ✓ Correto (uma linha)
"""Return a foobang."""


# ✓ Correto (multilinha)
"""Return a foobang.

Optional plotz says to frobnicate the bizbaz first.

Args:
    x: The initial amount.

Returns:
    The modified amount.
"""


# ✓ Correto (uma linha com fechamento na mesma linha)
"""Return a foobang."""


# ✗ Incorreto (docstring empty)
""" """
```

### 4.2 Classes

```python
# ✓ Correto
class Foo:
    """Summary of class.

    More detailed description if needed.
    """

    def method(self):
        """Summary of method."""
        pass
```

### 4.3 Funções

```python
# ✓ Correto
def create_user(username, email):
    """Create a new user.

    Args:
        username: Unique username.
        email: User email address.

    Returns:
        User: The created user object.

    Raises:
        ValueError: If username already exists.
    """
    pass
```

---

## 5. Naming Conventions

### 5.1 Estilos de Nomes

| Estilo | Uso |
|--------|-----|
| `snake_case` | Funções, variáveis, módulos |
| `CamelCase` | Classes |
| `UPPER_CASE` | Constantes |
| `_leading_underscore` | Privado (não exportado) |
| `__dunder__` | Métodos mágicos (dunder) |

### 5.2 Módulos e Pacotes

- **snake_case**: `my_module.py`, `utils.py`

```python
# ✓ Correto
import my_module
import utils

# ✗ Incorreto
import MyModule
import utils_helper  # (evite se puder)
```

### 5.3 Classes

- **CamelCase** (iniciando com maiúscula)

```python
# ✓ Correto
class UserProfile:
    pass

class HTTPRequest:
    pass

# ✗ Incorreto
class user_profile:
    pass

class userProfile:  # (evite)
    pass
```

### 5.4 Exceções

- **CamelCase** + sufixo `Error`

```python
# ✓ Correto
class DivisionError(ValueError):
    pass

# ✗ Incorreto
class division_error:
    pass
```

### 5.5 Funções e Variáveis

- **snake_case** (tudo minúsculo com underscores)

```python
# ✓ Correto
def calculate_total():
    pass

user_name = "John"
max_value = 100

# ✗ Incorreto
def calculateTotal():
    pass

userName = "John"
MAX_VALUE = 100  # (use UPPER_CASE só para Constants)
```

### 5.6 Constantes

- **UPPER_CASE**

```python
# ✓ Correto
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30

# ✗ Incorreto
maxConnections = 100
default_timeout = 30
```

### 5.7 Métodos e Argumentos de Instância

- **snake_case**
- Sempre use `self` como primeiro argumento
- Use `_` prefix para "privado"

```python
# ✓ Correto
class MyClass:
    def method(self, args):
        self._private_method()

    def _private_method(self):
        pass

# ✗ Incorreto
class MyClass:
    def Method(self, args):
        self.__PrivateMethod()
```

### 5.8 Arguments de Função/Método

```python
# ✓ Correto
def function(positional, *args, **kwargs):
    pass

class MyClass:
    def method(self, first_arg, second_arg=None):
        pass
```

### 5.9 Names to Avoid

- Evite caracteres `l`, `O`, `I` como nomes de variável

```python
# ✗ Incorreto
l = 1
O = 0
I = 1
```

### 5.10 Type Variables (PEP 484)

- **CamelCase** com prefíxo `T`

```python
# ✓ Correto
from typing import TypeVar

T = TypeVar('T', int, float)
AnyStr = TypeVar('AnyStr', bytes, str)
```

---

## 6. Programming Recommendations

### 6.1 Function Annotations

```python
# ✓ Correto (PEP 484)
def food(x: int) -> int:
    pass

# ✗ Incorreto (estilo antigo)
def food(x):
    """Type x int, returns int."""
    pass
```

### 6.2 Variable Annotations

```python
# ✓ Correto
x: int = 10

# ✗ Incorreto
x = 10  # sem tipo
```

### 6.3 Comparisons

- **Use `is not`** em vez de **`not ... is`**

```python
# ✓ Correto
if foo is not None:
    pass

# ✗ Incorreto
if not foo is None:
    pass
```

### 6.4 Boolean Expressions

```python
# ✓ Correto
if reachable:
    pass

# ✗ Incorreto
if reachable == True:
    pass
```

---

## Ferramentas Recomendadas

```bash
# Install
pip install flake8 black ruff

# Verificar PEP8
flake8 file.py

# Auto-formatar
black file.py

# Verificador rápido (ruff)
ruff check file.py
ruff format file.py
```

### Configuração ruff (pyproject.toml)

```toml
[tool.ruff]
line-length = 79
target-version = "py310"

[tool.ruff.lint]
select = ["E", "F", "W"]
ignore = []
```

---

## Referência Oficial

- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [PEP 257 — Docstring Conventions](https://peps.python.org/pep-0257/)