# Padrões de Criação (Creational)

Padrões que tratam da criação de objetos.

---

## 1. Singleton

### Propósito
Garantir que uma classe tenha **apenas uma instância** e fornecer um ponto global de acesso.

### Quando Usar
- Conexões com banco de dados
- Configurações globais
- Logging centralizado
- Cache global

### Python - OOP

```python
# Singleton thread-safe (Python way)
class Database:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Uso
db1 = Database()
db2 = Database()
assert db1 is db2  # True
```

### Python - Funcional

```python
# Função singleton
_singleton = None

def get_database():
    global _singleton
    if _singleton is None:
        _singleton = create_database()
    return _singleton
```

### TypeScript - OOP

```typescript
// Singleton
class Database {
    private static instance: Database;
    private connection: string;

    private constructor() {
        this.connection = "connected";
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

// Uso
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
```

### TypeScript - Funcional

```typescript
// Singleton funcional
let instance: Database | null = null;

const getDatabase = (): Database => {
    if (!instance) {
        instance = new Database();
    }
    return instance;
};
```

### JavaScript - OOP

```javascript
class Database {
    static #instance = null;

    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        Database.#instance = this;
        this.connection = "connected";
    }
}

// Uso
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true
```

### JavaScript - Funcional

```javascript
let instance = null;

const getDatabase = () => {
    if (!instance) {
        instance = { connection: "connected" };
    }
    return instance;
};
```

### Ruby - OOP

```ruby
class Database
    @@instance = nil

    def self.instance
        @@instance ||= new
    end

    private_class_method :new
end

# Uso
db1 = Database.instance
db2 = Database.instance
puts db1 == db2  # true
```

### Ruby - Funcional

```ruby
$database_instance = nil

def get_database
    $database_instance ||= { connection: "connected" }
end
```

### Java - OOP

```java
public class Database {
    private static Database instance;

    private Database() {}

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}
```

### Java - Funcional

```java
import java.util.Optional;

public class DatabaseUtils {
    private static Database instance;

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}
```

### C# - OOP

```csharp
public sealed class Database {
    private static Database instance;

    private Database() {}

    public static Database Instance {
        get {
            if (instance == null) {
                instance = new Database();
            }
            return instance;
        }
    }
}
```

### C# - Funcional

```csharp
public static class DatabaseFactory {
    private static Database instance;

    public static Database GetInstance() {
        return instance ??= new Database();
    }
}
```

---

## 2. Factory Method

### Propósito
Definir interface para criar objetos, mas deixar subclasses decidirem qual classe concretos criar.

### Quando Usar
- Classe não sabe qual subclasse criar
- Criação delegation para subclasses
- Centralizar criação em factory

### Python - OOP

```python
from abc import ABC, abstractmethod

class Transport(ABC):
    @abstractmethod
    def deliver(self): pass

class Truck(Transport):
    def deliver(self):
        return "Delivery by land"

class Ship(Transport):
    def deliver(self):
        return "Delivery by sea"

class Logistics(ABC):
    @abstractmethod
    def create_transport(self) -> Transport:
        pass

class RoadLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Truck()

class SeaLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Ship()

# Uso
logistics = RoadLogistics()
transport = logistics.create_transport()
print(transport.deliver())  # "Delivery by land"
```

### Python - Funcional

```python
from typing import Protocol

class Transport(Protocol):
    def deliver(self) -> str: ...

def create_transport(transport_type: str) -> Transport:
    transports = {
        "road": lambda: Truck(),
        "sea": lambda: Ship(),
    }
    return transports[transport_type]()
```

### TypeScript - OOP

```typescript
interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    deliver(): string {
        return "Delivery by land";
    }
}

class Ship implements Transport {
    deliver(): string {
        return "Delivery by sea";
    }
}

abstract class Logistics {
    abstract createTransport(): Transport;
}

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

// Uso
const logistics = new RoadLogistics();
const transport = logistics.createTransport();
console.log(transport.deliver());
```

### TypeScript - Funcional

```typescript
type TransportFactory = () => Transport;

const createTransport = (type: "road" | "sea"): Transport => {
    const factories = {
        road: () => new Truck(),
        sea: () => new Ship(),
    };
    return factories[type]();
};
```

### Ruby - OOP

```ruby
class Transport
    def deliver
        raise NotImplementedError
    end
end

class Truck < Transport
    def deliver
        "Delivery by land"
    end
end

class Logistics
    def self.create
        raise NotImplementedError
    end
end

class RoadLogistics < Logistics
    def self.create
        Truck.new
    end
end
```

### Java - OOP

```java
interface Transport {
    String deliver();
}

class Truck implements Transport {
    public String deliver() {
        return "Delivery by land";
    }
}

abstract class Logistics {
    public abstract Transport createTransport();
}

class RoadLogistics extends Logistics {
    public Transport createTransport() {
        return new Truck();
    }
}
```

### C# - OOP

```csharp
public interface ITransport
{
    string Deliver();
}

public class Truck : ITransport
{
    public string Deliver() => "Delivery by land";
}

public abstract class Logistics
{
    public abstract ITransport CreateTransport();
}

public class RoadLogistics : Logistics
{
    public override ITransport CreateTransport() => new Truck();
}
```

---

## 3. Abstract Factory

### Propósito
Criar famílias de objetos relacionados sem especificar classes concretas.

### Quando Usar
- Múltplas famílias de produtos
- Produtos isolados por família
- Trocar famílias inteiras

### Python - OOP

```python
class Button(ABC):
    @abstractmethod
    def render(self): pass

class DarkButton(Button):
    def render(self):
        return "Dark Button"

class LightButton(Button):
    def render(self):
        return "Light Button"

class ThemeFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass

class DarkFactory(ThemeFactory):
    def create_button(self) -> Button:
        return DarkButton()

class LightFactory(ThemeFactory):
    def create_button(self) -> Button:
        return LightButton()

# Uso
factory = DarkFactory()
button = factory.create_button()
print(button.render())  # "Dark Button"
```

### TypeScript - OOP

```typescript
interface Button {
    render(): string;
}

interface ThemeFactory {
    createButton(): Button;
}

class DarkButton implements Button {
    render(): string {
        return "Dark Button";
    }
}

class DarkFactory implements ThemeFactory {
    createButton(): Button {
        return new DarkButton();
    }
}
```

### Java - OOP

```java
interface Button {
    String render();
}

interface ThemeFactory {
    Button createButton();
}

class DarkButton implements Button {
    public String render() {
        return "Dark Button";
    }
}

class DarkFactory implements ThemeFactory {
    public Button createButton() {
        return new DarkButton();
    }
}
```

---

## 4. Builder

### Propósito
Construir objetos complexos passo a passo.

### Quando Usar
- Objetos com muitos parâmetros
- Construção em etapas
- Imutabilidade do resultado

### Python - OOP

```python
class User:
    def __init__(self, name, email, age, address, phone):
        self.name = name
        self.email = email
        self.age = age
        self.address = address
        self.phone = phone

class UserBuilder:
    def __init__(self):
        self._name = None
        self._email = None
        self._age = None
        self._address = None
        self._phone = None

    def name(self, name):
        self._name = name
        return self

    def email(self, email):
        self._email = email
        return self

    def build(self):
        return User(
            self._name, self._email, self._age,
            self._address, self._phone
        )

# Uso
user = UserBuilder().name("John").email("john@example.com").build()
```

### Python - Funcional

```python
from dataclasses import dataclass, field

@dataclass
class User:
    name: str = None
    email: str = None
    age: int = None

def user_builder(**kwargs):
    return User(**kwargs)

user = user_builder(name="John", email="john@example.com")
```

### TypeScript - OOP

```typescript
class User {
    constructor(
        public name: string,
        public email: string,
        public age?: number,
        public address?: string
    ) {}
}

class UserBuilder {
    private user = { name: "", email: "" };

    name(name: string): this {
        this.user.name = name;
        return this;
    }

    email(email: string): this {
        this.user.email = email;
        return this;
    }

    build(): User {
        return new User(
            this.user.name,
            this.user.email
        );
    }
}

// Uso
const user = new UserBuilder()
    .name("John")
    .email("john@example.com")
    .build();
```

### TypeScript - Funcional

```typescript
type User = {
    name: string;
    email: string;
    age?: number;
};

const createUser = (partial: Partial<User>): User => ({
    name: "",
    email: "",
    ...partial,
});

const user = createUser({ name: "John", email: "john@example.com" });
```

### Ruby - OOP

```ruby
class UserBuilder
    def initialize
        @name = ""
        @email = ""
    end

    def name(name)
        @name = name
        self
    end

    def email(email)
        @email = email
        self
    end

    def build
        { name: @name, email: @email }
    end
end

user = UserBuilder.new.name("John").email("john@example.com").build
```

### Java - OOP

```java
public class User {
    private final String name;
    private final String email;
    private final int age;

    private User(Builder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
    }

    public static class Builder {
        private String name = "";
        private String email = "";
        private int age = 0;

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}

User user = new User.Builder()
    .name("John")
    .email("john@example.com")
    .build();
```

### C# - OOP

```csharp
public class User
{
    public string Name { get; private set; }
    public string Email { get; private set; }

    public User(string name, string email)
    {
        Name = name;
        Email = email;
    }
}

public class UserBuilder
{
    private string _name = "";
    private string _email = "";

    public UserBuilder Name(string name)
    {
        _name = name;
        return this;
    }

    public UserBuilder Email(string email)
    {
        _email = email;
        return this;
    }

    public User Build() => new User(_name, _email);
}

var user = new UserBuilder()
    .Name("John")
    .Email("john@example.com")
    .Build();
```

---

## 5. Prototype

### Propósito
Criar novos objetos copiando um existente (clone).

### Quando Usar
- Criação cara (bd, rede)
- Objetos com estado
- Evitar hierarquia de factories

### Python - OOP

```python
import copy

class Prototype:
    def clone(self):
        return copy.deepcopy(self)

class User(Prototype):
    def __init__(self, name, email):
        self.name = name
        self.email = email

# Uso
user1 = User("John", "john@example.com")
user2 = user1.clone()
user2.name = "Jane"
print(user1.name)  # "John"
print(user2.name)  # "Jane"
```

### TypeScript - OOP

```typescript
class User implements Cloneable<User> {
    constructor(
        public name: string,
        public email: string
    ) {}

    clone(): User {
        return new User(this.name, this.email);
    }
}

const user1 = new User("John", "john@example.com");
const user2 = user1.clone();
```

### Ruby - OOP

```ruby
class User
    attr_accessor :name, :email

    def initialize(name, email)
        @name = name
        @email = email
    end

    def clone
        User.new(@name, @email)
    end
end

user1 = User.new("John", "john@example.com")
user2 = user1.clone
```

### Java - OOP

```java
public class User implements Cloneable {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public User clone() {
        return new User(this.name, this.email);
    }
}
```

### C# - OOP

```csharp
public class User : ICloneable
{
    public string Name { get; set; }
    public string Email { get; set; }

    public User Clone()
    {
        return (User)this.MemberwiseClone();
    }
}

var user1 = new User { Name = "John", Email = "john@example.com" };
var user2 = user1.Clone();
```

---

## Resumo

| Padrão | Quando Usar | Python | TypeScript | Ruby | Java | C# |
|--------|-----------|--------|--------|------|------|-----|
| **Singleton** | Uma instância | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Factory Method** | Delegar criação | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Abstract Factory** | Famílias | ✓ | ✓ | - | ✓ | - |
| **Builder** | Complexos | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Prototype** | Clonar | ✓ | ✓ | ✓ | ✓ | ✓ |