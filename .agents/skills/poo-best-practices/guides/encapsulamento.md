# Encapsulamento

Princípios para proteger dados e ocultar detalhes internos.

---

## 1. Conceito

### O que é Encapsulamento
- Esconder detalhes de implementação
- Expor apenas interface pública
- Proteger estado interno

### Por que Importa
- Impede modificações acidentais
- Facilita manutenção
- Permite mudar implementação sem quebrar código cliente

---

## 2. Atributos Privados

### Python

```python
# Atributo público (acesso direto)
class User:
    def __init__(self, name: str):
        self.name = name  # ✗ Acessível diretamente

user = User("John")
user.name = "Jane"  # Modificação sem controle

# Atributo privado (protegido)
class User:
    def __init__(self, name: str):
        self._name = name  # ✓ Privado por convenção

user = User("John")
print(user._name)  # Funciona, mas não recomendado
```

### TypeScript

```typescript
// Atributo público
class User {
    constructor(public name: string) {}
}

const user = new User("John");
user.name = "Jane";  // ✗ Modificável diretamente

// Atributo privado
class User {
    constructor(private name: string) {}

    getName(): string {
        return this.name;  // ✓ Acesso via método
    }
}

const user = new User("John");
user.name = "Jane";  // ✗ Erro de compilação
```

### JavaScript

```javascript
// Não há modificador nativo, usar convenção
class User {
    constructor(name) {
        this._name = name;  // ✓ Privado por convenção
    }

    getName() {
        return this._name;
    }
}

const user = new User("John");
console.log(user._name);  // Funciona, mas não recomendado
```

---

## 3. Getters e Setters

### Quando Usar
- Para validar ao obter ou definir valor
- Para computed properties
- Para acesso readonly

### Python

```python
class User:
    def __init__(self, name: str):
        self._name = name

    # Getter
    @property
    def name(self) -> str:
        return self._name

    # Setter com validação
    @name.setter
    def name(self, value: str):
        if not value or not value.strip():
            raise ValueError("Name cannot be empty")
        self._name = value.strip()

# Uso
user = User("John")
print(user.name)     # Getter
user.name = "Jane"  # Setter com validação
```

### TypeScript

```typescript
class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter com validação
    set name(value: string) {
        if (!value?.trim()) {
            throw new Error("Name cannot be empty");
        }
        this._name = value.trim();
    }
}

// Uso
const user = new User("John");
console.log(user.name);     // Getter
user.name = "Jane";       // Setter com validação
```

---

## 4. Propriedades Somente Leitura

### Python

```python
class User:
    def __init__(self, name: str, email: str):
        self._name = name
        self._email = email
        self._created_at = datetime.now()  # readonly

    @property
    def created_at(self) -> datetime:
        return self._created_at

    # Não expõe setter
```

### TypeScript

```typescript
class User {
    private readonly createdAt: Date;

    constructor(
        name: string,
        email: string
    ) {
        this.createdAt = new Date();
    }

    get createdAt(): Date {
        return this.createdAt;
    }
    // Sem setter exposto
}
```

---

## 5. Validação

### Python

```python
class User:
    def __init__(self, email: str):
        self.email = email  # Usa setter

    @property
    def email(self) -> str:
        return self._email

    @email.setter
    def email(self, value: str):
        if "@" not in value:
            raise ValueError("Invalid email")
        self._email = value.lower()
```

### TypeScript

```typescript
class User {
    private _email: string = "";

    constructor(email: string) {
        this.email = email;  // Usa setter
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (!value.includes("@")) {
            throw new Error("Invalid email");
        }
        this._email = value.toLowerCase();
    }
}
```

---

## 6. Métodos Privados

### Python

```python
class Calculator:
    def calculate(self, expression: str) -> float:
        result = self._parse(expression)
        return self._evaluate(result)

    def _parse(self, expression: str) -> list:  # privado
        """Parse não deve ser chamado externamente."""
        pass

    def _evaluate(self, parsed: list) -> float:
        """Evaluate não deve ser chamado externamente."""
        pass
```

### TypeScript

```typescript
class Calculator {
    calculate(expression: string): number {
        const parsed = this.parse(expression);
        return this.evaluate(parsed);
    }

    private parse(expression: string): any[] {
        // Privado - não deve ser chamado externamente
        return [];
    }

    private evaluate(parsed: any[]): number {
        // Privado - não deve ser chamado externamente
        return 0;
    }
}
```

---

## 7. Interface Pública

### O que Expor
- Apenas o necessário para usar a classe
- Métodos que alteram estado de forma controlada
- Getters para atributos essenciais

### O que NÃO Expor
- Atributos internos (_name, _cache)
- Métodos auxiliares (_parse, _validate)
- Implementação (_sql_query, _format)

### Python

```python
class UserRepository:
    def __init__(self, db: Database):
        self._db = db           # interno
        self._cache = {}        # interno

    # Interface pública
    def find_by_id(self, id: str) -> User | None:
        return self._find_in_cache(id) or self._find_in_db(id)

    # Privados
    def _find_in_cache(self, id: str) -> User | None:
        return self._cache.get(id)

    def _find_in_db(self, id: str) -> User | None:
        # implementação SQL
        pass
```

### TypeScript

```typescript
class UserRepository {
    private db: Database;     // interno
    private cache: Map<string, User>;  // interno

    constructor(db: Database) {
        this.db = db;
        this.cache = new Map();
    }

    // Interface pública
    findById(id: string): User | null {
        return this.findInCache(id) || this.findInDb(id);
    }

    // Privados
    private findInCache(id: string): User | null {
        return this.cache.get(id);
    }

    private findInDb(id: string): User | null {
        // implementação
        return null;
    }
}
```

---

## 8. Dicas Práticas

### Quando Expor Getter
- Quando o acesso é necessário para clientes
- Para dados que não precisam de validação

### Quando Expor Setter
- Apenas quando a validação é importante
- Para garantir integridade do estado

### Quando Usar Métodos em vez de Props
- Quando a operação não é simples get/set
- Quando há lógica de negócio envolvida

### Sinais de Problema
| Sintoma | Problema |
|--------|----------|
| Muitos getters públicos | Classe expõe demais |
| Getter que retorna mutable | Cliente pode modificar |
| Setter sem validação | Estado pode ficar inválido |
| Atributo público | Sem controle |