# Princípios SOLID

Os cinco princípios fundamentais de design orientado a objetos.

---

## S - Single Responsibility (Responsabilidade Única)

### Definição
Uma classe deve ter **apenas uma razão para mudar**.

### Python

```python
# ✗ Violação - múltiplas razões para mudar
class User:
    def validate(self): pass    # validação
    def save(self): pass     # persistência
    def send_email(self): pass # email
    def generate_report(self): pass # relatório

# ✓ Correto - responsabilidade única
class User:
    def __init__(self, name: str, email: str):
        self._name = name
        self._email = email

class UserValidator:
    def validate(self, user: User): pass

class UserRepository:
    def save(self, user: User): pass

class EmailService:
    def send(self, to: str, message: str): pass
```

### TypeScript

```typescript
// ✗ Violação - múltiplas razões para mudar
class User {
    validate() {}    // validação
    save() {}       // persistência
    sendEmail() {}  // email
    generateReport() {} // relatório
}

// ✓ Correto - responsabilidade única
class User {
    constructor(
        public name: string,
        public email: string
    ) {}
}

class UserValidator {
    validate(user: User) {}
}

class UserRepository {
    save(user: User) {}
}

class EmailService {
    send(to: string, message: string) {}
}
```

---

## O - Open/Closed (Aberto/Fechado)

### Definição
Entidades devem ser **abertas para extensão, fechadas para modificação**.

### Python

```python
# ✗ Violação - modificar para adicionar
class AreaCalculator:
    def calculate(self, shape):
        if isinstance(shape, Square):
            return shape.side ** 2
        elif isinstance(shape, Circle):
            return 3.14 * shape.radius ** 2

# ✓ Correto - estender sem modificar
class Shape(ABC):
    @abstractmethod
    def area(self) -> float: pass

class Square(Shape):
    def __init__(self, side: float):
        self.side = side
    def area(self) -> float:
        return self.side ** 2

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius
    def area(self) -> float:
        return 3.14 * self.radius ** 2
```

### TypeScript

```typescript
// ✗ Violação - modificar para adicionar
class AreaCalculator {
    calculate(shape: any) {
        if (shape.type === "square") {
            return shape.side ** 2;
        } else if (shape.type === "circle") {
            return 3.14 * shape.radius ** 2;
        }
    }
}

// ✓ Correto - estender sem modificar
interface Shape {
    area(): number;
}

class Square implements Shape {
    constructor(private side: number) {}
    area(): number {
        return this.side ** 2;
    }
}

class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
        return 3.14 * this.radius ** 2;
    }
}
```

---

## L - Liskov Substitution (Substituição de Liskov)

### Definição
Objetos devem ser **substituíveis por suas subclasses sem quebrar**.

### Python

```python
# ✗ Violação - subtipo quebrando contrato
class Rectangle:
    def set_width(self, width): self._width = width
    def set_height(self, height): self._height = height

class Square(Rectangle):
    def set_width(self, width):
        self._width = width
        self._height = width  # quebra set_height
    def set_height(self, height):
        self._width = height
        self._height = height  # quebra set_width

# ✓ Correto - não usar herança incorreta
class Square:
    def __init__(self, side: float):
        self.side = side
    def area(self) -> float:
        return self.side ** 2
```

### TypeScript

```typescript
// ✗ Violação - subtipo quebrando contrato
class Rectangle {
    constructor(
        public width: number = 0,
        public height: number = 0
    ) {}
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }
}

// ✓ Correto - não usar herança incorreta
class Square implements Shape {
    constructor(private side: number) {}
    area(): number {
        return this.side ** 2;
    }
}
```

---

## I - Interface Segregation (Segregação de Interface)

### Definição
É melhor ter **interfaces específicas** do que uma interface geral.

### TypeScript

```typescript
// ✗ Violação - interface gorda
interface Machine {
    print(): void;
    scan(): void;
    fax(): void;
}

class AllInOnePrinter implements Machine {
    print() {}
    scan() {}    // necessário mesmo sem usar
    fax() {}     // necessário mesmo sem usar
}

// ✓ Correto - interfaces segregadas
interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

class SimplePrinter implements Printer {
    print() {}
}

class AllInOnePrinter implements Printer & Scanner {
    print() {}
    scan() {}
}
```

### Python (Protocol)

```python
from typing import Protocol

# ✗ Violação - protocolo gordo
class Machine(Protocol):
    def print(self): pass
    def scan(self): pass
    def fax(self): pass

# ✓ Correto - protocolos separados
class Printer(Protocol):
    def print(self): pass

class Scanner(Protocol):
    def scan(self): pass
```

---

## D - Dependency Inversion (Inversão de Dependência)

### Definição
Dependa de **abstrações**, não de concretos.

### Python

```python
from abc import ABC, abstractmethod

# ✗ Violação - depende de concreto
class MySQLUserRepository:
    def find_all(self):
        return ["user1", "user2"]

class UserService:
    def __init__(self):
        self._repo = MySQLUserRepository()  # depende de concreto

# ✓ Correto - depende de abstração
class UserRepository(ABC):
    @abstractmethod
    def find_all(self): pass

class MySQLUserRepository(UserRepository):
    def find_all(self):
        return ["user1", "user2"]

class UserService:
    def __init__(self, repo: UserRepository):
        self._repo = repo  # depende de abstração
```

### TypeScript

```typescript
// ✗ Violação - depende de concreto
class MySQLUserRepository {
    findAll() {
        return ["user1", "user2"];
    }
}

class UserService {
    constructor() {
        this.repo = new MySQLUserRepository();
    }
}

// ✓ Correto - depende de abstração
interface UserRepository {
    findAll(): string[];
}

class MySQLUserRepository implements UserRepository {
    findAll() {
        return ["user1", "user2"];
    }
}

class UserService {
    constructor(private repo: UserRepository) {}
}
```

---

## Resumo

| Princípio | Resumo |
|----------|-------|
| **S**ingle Responsibility | Uma razão para mudar |
| **O**pen/Closed | Estender sem modificar |
| **L**iskov Substitution | Substituível por subclasses |
| **I**nterface Segregation | Interfaces pequenas |
| **D**ependency Inversion | Depender de abstrações |

---

## Checklist Rápido

| Pergunta | S | O | L | I | D |
|---------|---|---|---|---|---|
| Classe faz uma coisa? | ✓ | | | | |
| Pode estender sem modificar? | | ✓ | | | |
| Subclasse substitui a pai? | | | ✓ | | |
| Interface específica? | | | | ✓ | |
| Depende de abstração? | | | | | ✓ |