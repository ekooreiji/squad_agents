# Princípios de Arquitetura de Software

Princípios fundamentais para design de sistemas.

---

## 1. SOLID

### S - Single Responsibility Principle (SRP)

**Definição**: Uma classe deve ter apenas uma razão para mudar.

```python
# ✗ Violação
class User:
    def get_name(self): pass
    def save_to_database(self): pass    # Não é responsabilidade de User
    def send_email(self): pass         # Não é responsabilidade de User
    def generate_report(self): pass   # Não é responsabilidade de User

# ✓ Correto
class User:
    def get_name(self): pass

class UserRepository:
    def save(self, user): pass

class EmailService:
    def send(self, user): pass
```

### O - Open/Closed Principle (OCP)

**Definição**: Entidades devem ser abertas para extensão, fechadas para modificação.

```python
# ✗ Violação
class AreaCalculator:
    def calculate(self, shape):
        if isinstance(shape, Square):
            return shape.side ** 2
        elif isinstance(shape, Circle):
            return 3.14 * shape.radius ** 2
        # Adicionar novo shape = modificar esta classe

# ✓ Correto
class Shape(ABC):
    @abstractmethod
    def area(self) -> float: pass

class Square(Shape):
    def area(self): return self.side ** 2

class Circle(Shape):
    def area(self): return 3.14 * self.radius ** 2
```

### L - Liskov Substitution Principle (LSP)

**Definição**: Objetos devem ser substituíveis por suas subclasses sem quebrar o programa.

```python
# ✗ Violação
class Rectangle:
    def set_width(self, width): self.width = width
    def set_height(self, height): self.height = height

class Square(Rectangle):
    def set_width(self, width):
        self.width = width
        self.height = width  # Violação: altura diferente

# ✓ Correto
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
```

### I - Interface Segregation Principle (ISP)

**Definição**: É melhor ter interfaces específicas do que uma interface geral.

```typescript
// ✗ Violação
interface Machine {
    print(): void;
    scan(): void;
    fax(): void;
}

class SimplePrinter implements Machine {
    print() {}    // Usa
    scan() {}     // Não usa mas precisa implementar
    fax() {}     // Não usa mas precisa implementar
}

// ✓ Correto
interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

class SimplePrinter implements Printer {
    print() {}
}
```

### D - Dependency Inversion Principle (DIP)

**Definição**: Dependa de abstrações, não de concretos.

```python
# ✗ Violação
class UserService:
    def __init__(self):
        self.db = MySQLDatabase()  # Depende de concreto

# ✓ Correto
class UserService:
    def __init__(self, db: Database):
        self.db = db  # Depende de abstração
```

---

## 2. DRY (Don't Repeat Yourself)

**Definição**: Não repetir código, lógica ou estrutura.

### ✗ Violação

```python
def calculate_price(product):
    return product["price"] * 1.1

def calculate_order(order):
    total = 0
    for item in order["items"]:
        total += item["price"] * 1.1  # Cálculo repetido
    return total

def calculate_shipment(shipment):
    for item in shipment["items"]:
        item["price"] = item["price"] * 1.1  # Cálculo repetido
```

### ✓ Correto

```python
def apply_tax(price, tax=1.1):
    return price * tax

def calculate_price(product):
    return apply_tax(product["price"])

def calculate_order(order):
    return sum(apply_tax(item["price"]) for item in order["items"])

def calculate_shipment(shipment):
    for item in shipment["items"]:
        item["price"] = apply_tax(item["price"])
```

---

## 3. KISS (Keep It Simple, Stupid)

**Definição**: Mantenha as coisas simples e idiotas (simples o suficiente).

### ✗ Violação

```python
# Complexidade desnecessária
class UserManagerHelperUtil:
    @staticmethod
    def get_instance_if_not_exists_or_create_new_and_return_with_checks():
        # 200 linhas de código
        pass
```

### ✓ Correto

```python
def get_or_create_user(user_id):
    user = find_user(user_id)
    if not user:
        user = create_user(user_id)
    return user
```

---

## 4. YAGNI (You Aren't Gonna Need It)

**Definição**: Você não vai precisar disso.

### ✗ Violação

```python
# Implementando funcionalidades que "vão precisar"
class User:
    def __init__(self):
        self.favorite_color = None
        self.second_email = None
        self.emergency_contact = None
        self.preferred_language = None
        # Nenhum é usado ainda
```

### ✓ Correto

```python
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # Só adiciona o que é necessário agora
```

---

## 5. Cohesão Alta, Acoplamento Baixo

### Cohesão Alta
- Elementos relacionados ficam juntos
- Cada módulo faz uma coisa bem feita

```python
# ✓ Alta coesão
class UserValidator:
    def validate_email(self, email): pass
    def validate_password(self, password): pass
    def validate_name(self, name): pass

# ✗ Baixa coesão
class UserManager:
    def validate(self): pass
    def calculate_salary(self): pass      # Não relacionado
    def send_newsletter(self): pass      # Não relacionado
```

### Acoplamento Baixo
- Módulos dependem de abstrações, não de concretos

```python
# ✗ Acoplamento alto
class OrderService:
    def __init__(self):
        self.db = MySQLConnection()  # acoplado

# ✓ Acoplamento baixo
class OrderService:
    def __init__(self, db: Database):
        self.db = db  # desacoplado
```

---

## 6. Separation of Concerns (SoC)

**Definição**: Separe diferentes responsabilidades em módulos diferentes.

```
├── presentation/  # Interface com usuário
├── application/    # Casos de uso
├── domain/        # Regras de negócio
├── infrastructure/ # Acesso a dados externos
```

---

## 7. Information Hiding

**Definição**: Esconda detalhes de implementação.

```python
# ✗ Exposição desnecessária
class User:
    def __init__(self):
        self._password = "secret"
        self._hashed_password = hash(self._password)

user = User()
print(user._hashed_password)  # Acesso direto

# ✓ Encapsulamento
class User:
    def __init__(self):
        self._password = "secret"

    def verify_password(self, password):
        return self._password == password  # Interface controlada
```

---

## 8. Law of Demeter (LoD)

**Definição**: Não fale com estranhos (apenas com amigos próximos).

```python
# ✗ Violação (encadeamento)
order.customer.address.street  # Conhece muito do objeto

# ✓ Correto (delegação)
class Order:
    def get_street(self):
        return self.customer.get_street()
```

---

## 9. Prefer Composition Over Inheritance

**Definição**: Prefira composição em vez de herança.

```python
# ✗ Herança
class Dog(Animal):
    def bark(self): pass

class RobotDog(Dog):  # Problema: herança múltipla
    def compute(self): pass

# ✓ Composição
class Dog:
    def __init__(self, animal: Animal):
        self.animal = animal

    def bark(self): pass

class RobotDog:
    def __init__(self, dog: Dog, computer: Computer):
        self.dog = dog
        self.computer = computer

    def bark(self): pass
    def compute(self): pass
```

---

## 10. Principle of Least Surprise

**Definição**: O código deve fazer o que as pessoas esperam.

```python
# ✗ Surpresa
def calculate_total(items):
    return sum(item["price"] for item in items) - 10  # Por que -10?

# ✓ Correto
def calculate_total(items, discount=0):
    return sum(item["price"] for item in items) - discount

def calculate_subtotal(items):
    return sum(item["price"] for item in items)
```

---

## Resumo Rápido

| Princípio | Resumo |
|----------|-------|
| **SOLID** | 5 princípios para OOP |
| **DRY** | Não repita código |
| **KISS** | Mantenha simples |
| **YAGNI** | Não implemente antes de precisar |
| **SoC** | Separe responsabilidades |
| **Information Hiding** | Esconda detalhes |
| **LoD** | Não fale com estranhos |
| **Composition > Inheritance** | Prefira composição |
| **Least Surprise** | Faça o esperado |