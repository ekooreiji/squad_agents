# Nomenclatura em POO

Regras de nomenclatura para classes, métodos, atributos e variáveis.

---

## 1. Classes

### Regra Geral
- **PascalCase** (cada palavra com maiúscula)
- Nome deve representar o conceito que a classe encapsula
- Ser específica, não genérica

### Python

```python
# ✓ Correto
class User:
    pass

class UserRepository:
    pass

class OrderItem:
    pass

class PaymentProcessor:
    pass

# ✗ Incorreto
class user:          # minúsculas
class user_data:     # snake_case
class UserData:      # nome genérico
class utils:         # nome vago
```

### TypeScript

```typescript
// ✓ Correto
class User {
    name: string;
}

class UserRepository {
    save(user: User): void;
}

class OrderItem {
    quantity: number;
    price: number;
}

class PaymentProcessor {
    process(amount: number): void;
}

// ✗ Incorreto
class user {           // minúsculas
class userData {      // camelCase
class Data {         // nome genérico
class Utils {         // nome vago
```

### JavaScript

```javascript
// ✓ Correto
class User {
    constructor(name) {
        this.name = name;
    }
}

class UserRepository {
    save(user) {
        // implementação
    }
}

// ✗ Incorreto
class user {           // minúsculas
class user_data {     // snake_case
class DataClass {    // nome genérico
```

---

## 2. Interfaces (TypeScript)

### Regra Geral
- **PascalCase**
- Prefixo `I` é opcional (estilo moderno)
- Nome como substantivo que representa capacidade

### TypeScript

```typescript
// ✓ Correto - estilo moderno (preferido)
interface UserRepository {
    save(user: User): User;
    findById(id: string): User | null;
}

interface PaymentGateway {
    process(amount: number): Promise<Receipt>;
}

// ✓ Correto - estilo I-prefix (tradicional)
interface IUserRepository {
    save(user: User): User;
}

// ✗ Incorreto
interface Repository {           // genérico
interface UserRepositoryInt {   // sufixo desnecessário
```

---

## 3. Métodos

### Regra Geral
- **camelCase** (começa com minúscula)
- Verbo que descreve a ação
- Ser explícito sobre o que faz

### Python

```python
class User:
    def get_name(self):
        return self._name

    def set_name(self, name):
        self._name = name

    def calculate_total(self):
        return self.price * self.quantity

    def save_to_database(self):
        pass

    # ✗ Incorreto
    def calc():           # nome abreviado
    def do():           // nome vago
    def process():       // não explícito
```

### TypeScript

```typescript
class User {
    getName(): string {
        return this._name;
    }

    setName(name: string): void {
        this._name = name;
    }

    calculateTotal(): number {
        return this.price * this.quantity;
    }

    saveToDatabase(): Promise<void> {
        // implementação
    }

    // ✗ Incorreto
    calc(): number { }        // nome abreviado
    do(): void { }            // nome vago
    process(): void { }       // não explícito
}
```

---

## 4. Atributos / Propriedades

### Regra Geral
- **camelCase** para públicos
- **_underscore** para privados (Python)
- **_underscore** ou **_** para privados (JS/TS)

### Python

```python
class User:
    def __init__(self, name, email):
        self.name = name           # público
        self._email = email        # privado (convenção)
        self.__password = password  # name mangling (muito privado)

    # ✗ Incorreto
    self.Name = name            # PascalCase
    self.user_name = name       # snake_case
```

### TypeScript

```typescript
class User {
    name: string;              // público
    private _email: string;     // privado (convenção)
    private password: string;   // privado (TypeScript)

    // ✗ Incorreto
    Name: string;              // PascalCase
    userName: string;         // não segue convenção
```

### JavaScript

```javascript
class User {
    constructor(name) {
        this.name = name;         # público
        this._email = email;       # privado (convenção)
    }

    // ✗ Incorreto
    this.Name = name;          // PascalCase
    this.userName = name;      // não segue convenção
}
```

---

## 5. Constantes

### Regra Geral
- **UPPER_CASE** com underscores
- Em contexto de classe, pode ser atributo estático

### Python

```python
class HttpStatus:
    OK = 200
    NOT_FOUND = 404
    INTERNAL_ERROR = 500

    # ✗ Incorreto
    ok = 200                    # minúsculas
    statusOk = 200               # camelCase
```

### TypeScript

```typescript
class HttpStatus {
    static readonly OK = 200;
    static readonly NOT_FOUND = 404;
    static readonly INTERNAL_ERROR = 500;

    // ✗ Incorreto
    static ok = 200;             // minúsculas
    static StatusOk = 200;       // PascalCase
}
```

---

## 6. Parâmetros de Métodos

### Regra Geral
- **camelCase**
- Ser descritivo

### Python

```python
def create_user(self, user_name, user_email):
    # ✗ Incorreto - prefixo redundante
    pass

def calculate_total(self, price, quantity):
    # ✓ Correto - nomes claros
    pass
```

### TypeScript

```typescript
createUser(userName: string, userEmail: string): User {
    // ✗ Incorreto - prefixo redundante
}

calculateTotal(price: number, quantity: number): number {
    // ✓ Correto
}
```

---

## 7. Enum

### Regra Geral
- **PascalCase** para enum
- **PascalCase** para valores

### TypeScript

```typescript
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
}

// ✗ Incorreto
enum user_role {               // snake_case
enum User {                  // nome genérico
    admin = "admin",         // minúsculas
}
```

---

## 8. Exceptions

### Regra Geral
- Sufixo **Error** ou **Exception**

### Python

```python
class ValidationError(Exception):
    pass

class UserNotFoundError(Exception):
    pass

# ✗ Incorreto
class Validation(Exception):
    pass
```

### TypeScript

```typescript
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

// ✗ Incorreto
class Validation extends Error {
    // nome genérico
}
```

---

## 9. Resumo Rápido

| Elemento | Python | TypeScript | JavaScript |
|---------|--------|------------|------------|
| Classe | PascalCase | PascalCase | PascalCase |
| Interface | - | PascalCase (ou I前缀) | - |
| Método | camelCase | camelCase | camelCase |
| Atributo público | camelCase | camelCase | camelCase |
| Atributo privado | _camelCase | _camelCase ou private | _camelCase |
| Constante | UPPER_CASE | UPPER_CASE | UPPER_CASE |
| Parâmetro | camelCase | camelCase | camelCase |
| Enum | PascalCase | PascalCase | - |
| Exception | Error | Error | - |

---

## 10. Dicas Práticas

### Nomes a Evitar

- `data`, `info`, `object`, `item` (genéricos demais)
- `temp`, `tmp` (temporário vira permanente)
- `handle`, `process`, `do` (vagos demais)
- `a`, `x`, `foo` (curtos demais)

### Nomes Bons

- São descritivos: `UserRepository`, `calculateTotalPrice`
- Revelam intenção: `isActive`, `hasPermission`
- Específicos: `OrderItem`, `ShippingAddress`

### Nomes em Plurais

| Tipo | Singular | Plural |
|------|----------|--------|
| Coleção | `User` | `users: User[]` |
| Mapeamento | `userById: Map<string, User>` | - |
| Dicionário | `rolesByUser: Record<string, Role[]>` | - |