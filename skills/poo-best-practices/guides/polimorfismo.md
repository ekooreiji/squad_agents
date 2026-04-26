# Polimorfismo

Princípios para implementar polimorfismo de forma correta.

---

## 1. Conceito

### O que é Polimorfismo
- "Múltiplas formas"
- Mesmo método, comportamentos diferentes
- Um tipo, várias implementações

### Tipos
- **Paramétrico**: generics/templates
- **Ad-hoc**: overload
- **Por subtipo**: interface/implements

---

## 2. Interface (TypeScript)

### O que é Interface
- Contrato que classes devem seguir
- Define método sem implementação
- Permite múltiplas implementações

### TypeScript

```typescript
// Interface
interface Animal {
    speak(): string;
}

// Implementação
class Dog implements Animal {
    speak(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    speak(): string {
        return "Meow!";
    }
}

// Uso polimórfico
function makeSpeak(animal: Animal): string {
    return animal.speak();
}

makeSpeak(new Dog()); // "Woof!"
makeSpeak(new Cat()); // "Meow!"
```

---

## 3. Abstract Class

### Python

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self) -> str:
        pass

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"

# Uso polimórfico
def make_speak(animal: Animal) -> str:
    return animal.speak()

make_speak(Dog())  # "Woof!"
make_speak(Cat())  # "Meow!"
```

### TypeScript

```typescript
abstract class Animal {
    abstract speak(): string;
}

class Dog extends Animal {
    speak(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak(): string {
        return "Meow!";
    }
}

function makeSpeak(animal: Animal): string {
    return animal.speak();
}

makeSpeak(new Dog()); // "Woof!"
makeSpeak(new Cat()); // "Meow!"
```

---

## 4. duck Typing (Python)

### O que é
- Se tem o método, funciona
- Não precisa de interface explícita

### Python

```python
class Dog:
    def speak(self) -> str:
        return "Woof!"

class Cat:
    def speak(self) -> str:
        return "Meow!"

# Funciona sem interface
def make_speak(animal) -> str:
    return animal.speak()

make_speak(Dog())  # "Woof!"
make_speak(Cat())  # "Meow!"
```

---

## 5. Generics (TypeScript)

### O que é
- Tipo paramétrico
- Mesmo código, tipos diferentes

### TypeScript

```typescript
// Sem generics
function firstUser(users: User[]): User {
    return users[0];
}

// Com generics
function first<T>(items: T[]): T {
    return items[0];
}

first<User>(users);  // User
first<number>([1, 2, 3]);  // number
```

---

## 6. Protocol (Python)

### O que é
- Interface explícita para duck typing

### Python

```python
from typing import Protocol

class Animal(Protocol):
    def speak(self) -> str:
        ...

# Funciona com type checker
def make_speak(animal: Animal) -> str:
    return animal.speak()
```

---

## 7. Sobrecarga (TypeScript)

### O que é
- Múltiplas assinaturas

### TypeScript

```typescript
class Calculator {
    // Sobrecarga
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(1, 2);      // number
calc.add("a", "b");   // string
```

---

## 8. Dicas Práticas

### Quando Usar Interface

| Situação | Recomendação |
|--------|-------------|
| Contrato claro | Interface |
| Duck typing | Protocol/implícito |
| Tipo único | Abstract class |
| Múltiplos tipos | Generics |

### Sinais de Problema

| Sintoma | Problema |
|--------|----------|
| instanceof | Violação de polimorfismo |
| type checking | Código duplicado |
| cast | Design ruim |