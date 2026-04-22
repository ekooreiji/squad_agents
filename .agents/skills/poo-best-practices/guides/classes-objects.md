# Classes e Objetos

Princípios para criar classes e objetos bem estruturados.

---

## 1. Definição de Classe

### O que é uma Classe
- Blueprint (molde) para criar objetos
- Encapsula dados (atributos) e comportamentos (métodos)
- Define o estado inicial do objeto

### Python

```python
# ✓ Correto
class User:
    def __init__(self, name: str, email: str):
        self._name = name
        self._email = email

    def get_name(self) -> str:
        return self._name

# ✗ Incorreto - classe faz muitas coisas
class UserManagerProcessor:
    def __init__(self):
        pass
    def create(self): pass
    def update(self): pass
    def delete(self): pass
    def send_email(self): pass
    def generate_report(self): pass
```

### TypeScript

```typescript
// ✓ Correto
class User {
    constructor(
        private name: string,
        private email: string
    ) {}

    getName(): string {
        return this.name;
    }
}

// ✗ Incorreto - classe faz muitas coisas
class UserManagerProcessor {
    create() {}
    update() {}
    delete() {}
    sendEmail() {}
    generateReport() {}
}
```

---

## 2. Objetos

### O que é um Objeto
- Instância de uma classe
- Tem estado próprio (valores dos atributos)
- Pode interagir com outros objetos

### Python

```python
# Criar objeto
user = User("John", "john@example.com")
print(user.get_name())  # "John"

# Múltiplos objetos
user1 = User("John", "john@example.com")
user2 = User("Jane", "jane@example.com")
```

### TypeScript

```typescript
// Criar objeto
const user = new User("John", "john@example.com");
console.log(user.getName()); // "John"

// Múltiplos objetos
const user1 = new User("John", "john@example.com");
const user2 = new User("Jane", "jane@example.com");
```

---

## 3. Construtor

### Responsabilidades
- Inicializar estado do objeto
- Validar parâmetros de entrada
- Ser simples, não executar lógica de negócio

### Python

```python
# ✓ Correto - simples
class User:
    def __init__(self, name: str, email: str):
        if not name or not name.strip():
            raise ValueError("Name is required")
        if "@" not in email:
            raise ValueError("Invalid email")
        self._name = name.strip()
        self._email = email.lower()

# ✗ Incorreto - faz muita coisa
class User:
    def __init__(self, name: str, email: str):
        self._name = name
        self._email = email
        self._hash_password(password)          # lógica de negócio
        self._send_welcome_email()          # efeito colateral
        self._log_creation()            # efeito colateral
        self._create_profile()          # responsabilidade extra
```

### TypeScript

```typescript
// ✓ Correto - simples
class User {
    constructor(
        private name: string,
        private email: string
    ) {
        if (!name?.trim()) {
            throw new Error("Name is required");
        }
    }
}

// ✗ Incorreto - faz muita coisa
class User {
    constructor(
        public name: string,
        public email: string,
        password: string
    ) {
        this.hashPassword(password);        // lógica de negócio
        this.sendWelcomeEmail();         // efeito colateral
        this.logCreation();          // efeito colateral
    }
}
```

---

## 4. Estrutura de Classe

### Ordem Recomendada
1. Atributos (públicos primeiro, depois privados)
2. Construtor
3. Métodos públicos
4. Métodos privados
5. Métodos estáticos (se houver)

### Python

```python
class Order:
    # 1. Atributos
    def __init__(self, items: list):
        self._items = items
        self._status = "pending"

    # 2. Construtor (já definido)

    # 3. Métodos públicos
    def add_item(self, item): pass
    def calculate_total(self) -> float: pass
    def cancel(self): pass

    # 4. Métodos privados
    def _validate_items(self): pass

    # 5. Métodos estáticos
    @staticmethod
    def create_empty() -> "Order":
        return Order([])
```

### TypeScript

```typescript
class Order {
    // 1. Atributos
    private items: OrderItem[];
    private status: string = "pending";

    // 2. Construtor
    constructor(items: OrderItem[] = []) {
        this.items = items;
    }

    // 3. Métodos públicos
    addItem(item: OrderItem): void {}
    calculateTotal(): number { return 0; }
    cancel(): void {}

    // 4. Métodos privados
    private validateItems(): boolean { return true; }

    // 5. Métodos estáticos
    static createEmpty(): Order {
        return new Order([]);
    }
}
```

---

## 5. Responsabilidade Única

### Princípio
- Uma classe deve ter **apenas uma razão para mudar**
- Uma classe deve fazer **apenas uma coisa**

### Python

```python
# ✓ Correto - responsabilidade única
class User:
    """Armazena dados do usuário."""
    def __init__(self, name: str, email: str):
        self._name = name
        self._email = email

class UserValidator:
    """Valida dados do usuário."""
    def validate(self, user: User) -> bool:
        pass

# ✗ Incorreto - múltiplas responsabilidades
class User:
    def __init__(self, name, email):
        self._name = name
        self._email = email
    def validate(self): pass    # Validator
    def save(self): pass     # Repository
    def send_email(self): pass # Email service
```

### TypeScript

```typescript
// ✓ Correto - responsabilidade única
class User {
    constructor(
        public name: string,
        public email: string
    ) {}
}

class UserValidator {
    validate(user: User): boolean {
        return true;
    }
}

// ✗ Incorreto - múltiplas responsabilidades
class User {
    constructor(
        public name: string,
        public email: string
    ) {
        this.validate();    // Validator
        this.save();      // Repository
        this.sendEmail();  // Email service
    }
}
```

---

## 6. Coesão

### O que é Coesão
- Medida de quão relacionadas estão as responsabilidades de uma classe
- Alta coesão = classe focada em uma coisa

### ✗ Baixa Coesão

```python
class User:
    # Coisas não relacionadas
    def login(self): pass
    def calculate_salary(self): pass
    def send_email(self): pass
    def generate_report(self): pass
```

### ✓ Alta Coesão

```python
class User:
    # Coisas relacionadas ao usuário
    def login(self): pass
    def logout(self): pass
    def change_password(self): pass
    def update_profile(self): pass
```

---

## 7. Dicas Práticas

### Quando Criar Nova Classe
- Quando a classe tem múltiplas responsabilidades
- Quando atributos não se relacionam
- Quando métodos não usam os mesmos atributos

### Quando NÃO criar nova Classe
- Para "organizar" código que funciona junto
- Quando a classe seriamuito pequena
- Para evitar responsabilidades

### Sinais de Problema
| Sintoma | Significado |
|--------|----------|
| Nome vago (Utils, Manager) | Responsabilidades indefinidas |
| Método com "and" (save_and_send) | Duas responsabilidades |
| Classe com 20+ métodos | Pode estar fazendo demais |
| Classe com 20+ atributos | Problema de design |