# Anti-Patterns em POO

Erros comuns de design orientado a objetos.

---

## 1. God Object

### O que é
- Classe que faz tudo
- Muitos atributos e métodos
- Responsabilidades demais

### ✗ Problema

```python
class UserManagerProcessorService:
    def __init__(self):
        pass
    def create(self): pass
    def update(self): pass
    def delete(self): pass
    def login(self): pass
    def logout(self): pass
    def send_email(self): pass
    def generate_report(self): pass
    def validate(self): pass
    def calculate_salary(self): pass
    # ... 50+ métodos
```

### ✓ Solução

```python
class User:
    pass

class UserService:
    pass

class AuthService:
    pass

class EmailService:
    pass
```

---

## 2. Primitive Obsession

### O que é
- Usar tipos primitivos em vez de objetos
- Valores que deveriam ser tipos

### ✗ Problema

```python
def create_user(name: str, email: str, cpf: str):
    # "12345678900" - string sem validação
    # Como validar CPF? Como garantir formato?
    pass
```

### ✓ Solução

```python
class Email:
    def __init__(self, value: str):
        if "@" not in value:
            raise ValueError("Invalid email")
        self._value = value

class CPF:
    def __init__(self, value: str):
        if not self._validate(value):
            raise ValueError("Invalid CPF")
        self._value = value

def create_user(name: str, email: Email, cpf: CPF):
    pass
```

---

## 3. Shotgun Surgery

### O que é
- Mudar uma funcionalidade requer mudanças em muitos lugares

### ✗ Problema

```python
class User:
    def login(self): self._update_last_login()  # ✗ Muitos lugares chamam isso
    def buy(self): self._update_last_login()
    def comment(self): self._update_last_login()
```

### ✓ Solução

```python
class User:
    def perform_action(self):
        self._update_last_login()  # Um lugar atualiza
        self._do_action()
```

---

## 4. Spaghetti Code

### O que é
- Código sem estrutura
- Tudo em uma classe

### ✗ Problema

```python
class App:
    def run(self):
        # 2000 linhas de código
        # if, else, for, while
        pass
```

### ✓ Solução

```python
class App:
    def run(self):
        self._init_database()
        self._init_routes()
        self._start_server()

    def _init_database(self): pass
    def _init_routes(self): pass
    def _start_server(self): pass
```

---

## 5. Blob

### O que é
- Uma classe enorme
- Outras classes pequenas demais

### ✗ Problema

```python
class OrderManager:  # Blob - 2000 linhas
    def __init__(self): pass
    # ... muito código

class Order:  # só dados
    def __init__(self): pass
```

### ✓ Solução

```python
class Order:
    pass

class OrderService:
    pass

class OrderValidator:
    pass

class OrderRepository:
    pass
```

---

## 6. Feature Envy

### O que é
- Classe que usa muito os dados de outra

### ✗ Problema

```python
class Order:
    def calculate_total(self):
        # Usa User excessivamente
        return (
            self.user.address.zipcode *
            self.user.discount.tier *
            self.items.reduce(...)
        )
```

### ✓ Solução

```python
class Order:
    def calculate_total(self):
        return self._calculator.calculate(self)

class PriceCalculator:
    def calculate(self, order):
        return order.base_price * order.discount
```

---

## 7. Data Class

### O que é
- Classe só com getters/setters
- Sem comportamento

### ✗ Problema

```python
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

# User é só um container de dados
user = User("John", "john@example.com")
print(user.name)  # Onde está o comportamento?
```

### ✓ Solução

```python
class User:
    def __init__(self, name, email):
        if not name:
            raise ValueError("Name required")
        self._name = name
        self._email = email.lower()

    @property
    def name(self):
        return self._name

    def is_valid(self):
        return bool(self._name and "@" in self._email)
```

---

## 8. Circular Dependency

### O que é
- A depende de B, B depende de A

### ✗ Problema

```python
class A:
    def __init__(self, b: "B"):
        self._b = b

class B:
    def __init__(self, a: "A"):
        self._a = a
```

### ✓ Solução

```python
class A:
    pass

class B:
    def __init__(self, a: A):
        self._a = a

# Ou use composição
class A:
    def __init__(self):
        self._dependency = None

    def set_dependency(self, dep):
        self._dependency = dep
```

---

## 9. Divergent Change

### O que é
- Uma classe muda por razões diferentes

### ✗ Problema

```python
class User:  # Muda para formato, lógica, API...
    # Mudado quando formato muda
    def validate(self): pass
    # Mudado quando lógica muda
    def save(self): pass
    # Mudado quando API muda
    def to_json(self): pass
```

### ✓ Solução

```python
class User:  # Só dados e comportamento central
    pass

class UserValidator:
    pass

class UserRepository:
    pass

class UserSerializer:
    pass
```

---

## 10. Resumo de Anti-Patterns

| Anti-Pattern | Descrição | Solução |
|-------------|-----------|---------|
| God Object | Classe faz tudo | Dividir |
| Primitive Obsession | Primitivos em vez de tipos | Criar tipos |
| Shotgun Surgery | Mudanças em cascata | Coesão |
| Spaghetti Code | Sem estrutura | Modularizar |
| Blob | Classe gigante + pequenas | Flatten |
| Feature Envy | Usa dados de outra | Mover comportamento |
| Data Class | Só getters/setters | Adicionar lógica |
| Circular Dependency | Dependência mútua | Composição |
| Divergent Change | Muitas razões de mudança | SRP |