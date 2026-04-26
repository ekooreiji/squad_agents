# Herança

Princípios para usar herança de forma correta.

---

## 1. Conceito

### O que é Herança
- Mecanismo de reutilização de código
- Classe filha herda atributos e métodos da classe pai
- Permite especialização

### Quando Usar
- Relação "é-um" (is-a) clara
- Compartilhamento de comportamento comum
- Substituição (override) de comportamento

### Quando NÃO Usar
- Apenas para reutilizar código (use composição)
- Quando não há relação "é-um"
- Para evitar repetir código (prefira composição)

---

## 2. Sintaxe

### Python

```python
# Classe base (pai)
class Animal:
    def __init__(self, name: str):
        self._name = name

    def speak(self) -> str:
        return "..."

# Classe derivada (filha)
class Dog(Animal):
    def __init__(self, name: str, breed: str):
        super().__init__(name)  # chama construtor pai
        self._breed = breed

    def speak(self) -> str:
        return "Woof!"

# Uso
dog = Dog("Buddy", "Labrador")
dog.speak()  # "Woof!"
```

### TypeScript

```typescript
// Classe base (pai)
class Animal {
    constructor(protected name: string) {}

    speak(): string {
        return "...";
    }
}

// Classe derivada (filha)
class Dog extends Animal {
    constructor(
        name: string,
        private breed: string
    ) {
        super(name);
    }

    speak(): string {
        return "Woof!";
    }
}

// Uso
const dog = new Dog("Buddy", "Labrador");
dog.speak(); // "Woof!"
```

---

## 3. super()

### Python

```python
class Dog(Animal):
    def __init__(self, name: str, breed: str):
        super().__init__(name)  #必 需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要
        self._breed = breed

    def speak(self) -> str:
        parent_speak = super().speak()  # chama método pai
        return f"{parent_speak} Woof!"
```

### TypeScript

```typescript
class Dog extends Animal {
    constructor(
        name: string,
        private breed: string
    ) {
        super(name);
    }

    speak(): string {
        const parentSpeak = super.speak();
        return `${parentSpeak} Woof!`;
    }
}
```

---

## 4. Override

### Python

```python
class Animal:
    def speak(self) -> str:
        return "..."

class Cat(Animal):
    def speak(self) -> str:  # override
        return "Meow!"
```

### TypeScript

```typescript
class Animal {
    speak(): string {
        return "...";
    }
}

class Cat extends Animal {
    speak(): string {  // override
        return "Meow!";
    }
}
```

---

## 5. Herança vs Composição

### ✗ Evite Herança Quando

```python
# NÃO é relação "é-um"
class Stack(list):  # ✗ "Stack é uma lista"? Não!
    def push(self, item):
        self.append(item)
```

### ✓ Use Composição Quando

```python
# Composição é melhor para "tem-um" (has-a)
class Stack:
    def __init__(self):
        self._items = []  # tem uma lista

    def push(self, item):
        self._items.append(item)
```

### Quando Herança é CORRETA

```python
# Relação "é-um" clara
class Animal:
    def eat(self): pass
    def sleep(self): pass

class Dog(Animal):  # ✓ "Dog é um Animal"
    def bark(self): pass

class Cat(Animal):  # ✓ "Cat é um Animal"
    def meow(self): pass
```

### Quando Composição é MELHOR

```python
# "tem-um" (has-a)
class Engine:
    def start(self): pass

class Car:
    def __init__(self):
        self._engine = Engine()  # tem um motor

    def start(self):
        self._engine.start()
```

---

## 6. Hierarquia

### Evite Herança Profunda

```
    ✗ Evite (muito profundo)
        Animal
          └── Mammal
              └── Dog
                  └── Bulldog

    ✓ Prefira (mais raso)
        Animal
          ├── Dog
          └── Cat
```

### Python

```python
# ✗ Evite
class LivingThing:
    pass

class Animal(LivingThing):
    pass

class Mammal(Animal):
    pass

class Dog(Mammal):
    pass

# ✓ Prefira
class Animal:
    pass

class Dog(Animal):
    pass
```

---

## 7. Classes Abstratas

### Python

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self) -> str:
        pass  #必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要必需要
```

### TypeScript

```typescript
abstract class Animal {
    abstract speak(): string;
}
```

---

## 8. Dicas Práticas

### Checklist de Herança

| Pergunta | Resposta | Decisão |
|---------|---------|---------|
| É relação "é-um"? | Sim | Herança OK |
| É relação "tem-um"? | Sim | Composição |
| Precisava override? | Sim | Herança OK |
| Sem relação clara? | - | Composição |
| Nível > 3? | Sim | Flatten |

### Sinais de Problema

| Sintoma | Problema |
|---------|----------|
| Override só para chamar super() | Herança desnecessária |
| Classe 90% igual ao pai | Duplicação |
| Override não muda comportamento | Não precisa herdar |
| "É como" em vez de "é um" | Use composição |