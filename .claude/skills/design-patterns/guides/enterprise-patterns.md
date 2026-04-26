# Padrões Empresariais (Enterprise Patterns)

Padrões comumente usados em aplicações empresariais.

---

## 1. Repository

### Propósito
Abstrair acesso a dados, isolando lógica de persistência.

### Quando Usar
- Acesso a banco de dados
- Testabilidade
- Troca de ORM

### Python - OOP

```python
from abc import ABC, abstractmethod
from typing import List, Optional

class Entity:
    id: str

class User(Entity):
    def __init__(self, id: str, name: str):
        self.id = id
        self.name = name

class UserRepository(ABC):
    @abstractmethod
    def find_all(self) -> List[User]: pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[User]: pass

    @abstractmethod
    def save(self, user: User) -> User: pass

class SQLAlchemyUserRepository(UserRepository):
    def __init__(self, session):
        self._session = session

    def find_all(self) -> List[User]:
        return self._session.query(User).all()

    def find_by_id(self, id: str) -> Optional[User]:
        return self._session.query(User).filter_by(id=id).first()

    def save(self, user: User) -> User:
        self._session.add(user)
        self._session.commit()
        return user
```

### TypeScript - OOP

```typescript
interface Entity {
    id: string;
}

interface User extends Entity {
    name: string;
}

interface Repository<T extends Entity> {
    findAll(): T[];
    findById(id: string): T | null;
    save(entity: T): T;
}

interface UserRepository extends Repository<User> {
    findByName(name: string): User[];
}

class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    findById(id: string): User | null {
        return this.users.find(u => u.id === id) || null;
    }

    save(user: User): User {
        const existing = this.findById(user.id);
        if (existing) {
            Object.assign(existing, user);
        } else {
            this.users.push(user);
        }
        return user;
    }
}
```

### Ruby - OOP

```ruby
class User
    attr_accessor :id, :name
end

class UserRepository
    def find_all
        raise NotImplementedError
    end

    def find_by_id(id)
        raise NotImplementedError
    end

    def save(user)
        raise NotImplementedError
    end
end

class InMemoryUserRepository < UserRepository
    def initialize
        @users = []
    end

    def find_all
        @users
    end

    def find_by_id(id)
        @users.find { |u| u.id == id }
    end

    def save(user)
        existing = find_by_id(user.id)
        if existing
            existing.name = user.name
        else
            @users << user
        end
        user
    end
end
```

### Java - OOP

```java
public interface Entity {
    String getId();
}

public class User implements Entity {
    private String id;
    private String name;

    public User(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() { return id; }
}

public interface Repository<T extends Entity> {
    List<T> findAll();
    T findById(String id);
    T save(T entity);
}

public class InMemoryUserRepository implements Repository<User> {
    private List<User> users = new ArrayList<>();

    public List<User> findAll() {
        return users;
    }

    public User findById(String id) {
        return users.stream()
            .filter(u -> u.getId().equals(id))
            .findFirst()
            .orElse(null);
    }

    public User save(User user) {
        users.add(user);
        return user;
    }
}
```

### C# - OOP

```csharp
public interface IEntity
{
    string Id { get; set; }
}

public class User : IEntity
{
    public string Id { get; set; }
    public string Name { get; set; }
}

public interface IRepository<T> where T : IEntity
{
    IEnumerable<T> FindAll();
    T FindById(string id);
    T Save(T entity);
}

public class InMemoryRepository<T> : IRepository<T> where T : IEntity, new()
{
    private readonly List<T> _items = new List<T>();

    public IEnumerable<T> FindAll() => _items;

    public T FindById(string id) =>
        _items.FirstOrDefault(x => x.Id == id);

    public T Save(T entity)
    {
        _items.Add(entity);
        return entity;
    }
}
```

---

## 2. Unit of Work

### Propósito
Manter lista de operações pendentes e fazer commit atômico.

### Quando Usar
- Transações
- Operações batch
- Consistência

### Python - OOP

```python
class UnitOfWork:
    def __init__(self):
        self._new_items = []
        self._dirty_items = []
        self._removed_items = []
        self._repository = None

    def register_new(self, item):
        self._new_items.append(item)

    def register_dirty(self, item):
        self._dirty_items.append(item)

    def register_removed(self, item):
        self._removed_items.append(item)

    def commit(self):
        self._commit_new()
        self._commit_dirty()
        self._commit_removed()
        self._new_items.clear()
        self._dirty_items.clear()
        self._removed_items.clear()

    def _commit_new(self):
        for item in self._new_items:
            self._repository.save(item)

    def _commit_dirty(self):
        for item in self._dirty_items:
            self._repository.update(item)

    def _commit_removed(self):
        for item in self._removed_items:
            self._repository.delete(item)
```

### TypeScript - OOP

```typescript
class UnitOfWork {
    private newItems: any[] = [];
    private dirtyItems: any[] = [];
    private removedItems: any[] = [];

    registerNew(item: any): void {
        this.newItems.push(item);
    }

    registerDirty(item: any): void {
        this.dirtyItems.push(item);
    }

    registerRemoved(item: any): void {
        this.removedItems.push(item);
    }

    async commit(): Promise<void> {
        await this.commitNew();
        await this.commitDirty();
        await this.commitRemoved();
        this.clear();
    }

    private async commitNew(): Promise<void> {
        for (const item of this.newItems) {
            await this.repository.save(item);
        }
    }

    private clear(): void {
        this.newItems = [];
        this.dirtyItems = [];
        this.removedItems = [];
    }
}
```

### Java - OOP

```java
public class UnitOfWork {
    private List<Object> newItems = new ArrayList<>();
    private List<Object> dirtyItems = new ArrayList<>();
    private List<Object> removedItems = new ArrayList<>();

    public void registerNew(Object item) {
        newItems.add(item);
    }

    public void registerDirty(Object item) {
        dirtyItems.add(item);
    }

    public void registerRemoved(Object item) {
        removedItems.add(item);
    }

    public void commit() {
        for (Object item : newItems) {
            repository.save(item);
        }
        newItems.clear();
        dirtyItems.clear();
        removedItems.clear();
    }
}
```

### C# - OOP

```csharp
public class UnitOfWork
{
    private readonly List<object> _newItems = new List<object>();
    private readonly List<object> _dirtyItems = new List<object>();
    private readonly List<object> _removedItems = new List<object>();

    public void RegisterNew(object item) => _newItems.Add(item);
    public void RegisterDirty(object item) => _dirtyItems.Add(item);
    public void RegisterRemoved(object item) => _removedItems.Add(item);

    public void Commit()
    {
        foreach (var item in _newItems)
            _repository.Save(item);

        _newItems.Clear();
        _dirtyItems.Clear();
        _removedItems.Clear();
    }
}
```

---

## 3. Service Layer

### Propósito
Fornecer camada de serviços que orquestra operações de domínio.

### Quando Usar
- Lógica de negócio
- Transações
- Coordenação

### Python - OOP

```python
class UserService:
    def __init__(self, repository, email_service):
        self._repository = repository
        self._email_service = email_service

    def create_user(self, name, email):
        # Verificar se existe
        existing = self._repository.find_by_email(email)
        if existing:
            raise ValueError("Email already exists")

        # Criar usuário
        user = User(name=name, email=email)
        self._repository.save(user)

        # Enviar email
        self._email_service.send_welcome(email)

        return user

    def deactivate_user(self, id):
        user = self._repository.find_by_id(id)
        if not user:
            raise ValueError("User not found")

        user.active = False
        self._repository.save(user)
```

### TypeScript - OOP

```typescript
class UserService {
    constructor(
        private repository: UserRepository,
        private emailService: EmailService
    ) {}

    createUser(name: string, email: string): User {
        const existing = this.repository.findByEmail(email);
        if (existing) {
            throw new Error("Email already exists");
        }

        const user = { id: generateId(), name, email };
        this.repository.save(user);
        this.emailService.sendWelcome(email);

        return user;
    }

    deactivateUser(id: string): void {
        const user = this.repository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }

        user.active = false;
        this.repository.save(user);
    }
}
```

### Java - OOP

```java
public class UserService {
    private final UserRepository repository;
    private final EmailService emailService;

    public UserService(UserRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    public User createUser(String name, String email) {
        User existing = repository.findByEmail(email);
        if (existing != null) {
            throw new IllegalArgumentException("Email already exists");
        }

        User user = new User(generateId(), name, email);
        repository.save(user);
        emailService.sendWelcome(email);

        return user;
    }
}
```

---

## 4. Factory (Domain)

### Propósito
Centralizar criação de objetos complexos de domínio.

### Quando Usar
- Criação complexa
- Validação
- Construcción

### Python - OOP

```python
class OrderFactory:
    @staticmethod
    def create(customer, items_data):
        if not items_data:
            raise ValueError("Order must have items")

        items = [
            OrderItem(
                product_id=item["product_id"],
                quantity=item["quantity"],
                price=item["price"]
            )
            for item in items_data
        ]

        total = sum(item.subtotal for item in items)

        order = Order(
            customer=customer,
            items=items,
            total=total,
            status="pending"
        )

        return order
```

### TypeScript - OOP

```typescript
class OrderFactory {
    static create(customer: Customer, itemsData: ItemData[]): Order {
        if (!itemsData.length) {
            throw new Error("Order must have items");
        }

        const items = itemsData.map(data => ({
            productId: data.productId,
            quantity: data.quantity,
            price: data.price,
            subtotal: data.quantity * data.price,
        }));

        const total = items.reduce((sum, item) => sum + item.subtotal, 0);

        return {
            id: generateId(),
            customer,
            items,
            total,
            status: "pending",
        };
    }
}
```

### Ruby - OOP

```ruby
class OrderFactory
    def self.create(customer, items_data)
        raise "Order must have items" if items_data.empty?

        items = items_data.map do |data|
            OrderItem.new(
                product_id: data[:product_id],
                quantity: data[:quantity],
                price: data[:price]
            )
        end

        total = items.sum(&:subtotal)

        Order.new(
            customer: customer,
            items: items,
            total: total,
            status: "pending"
        )
    end
end
```

---

## 5. DTO (Data Transfer Object)

### Propósito
Transferir dados entre camadas sem expor domínio.

### Quando Usar
- APIs
- Dados simplificados
- Múltiplos domínios

### Python - OOP

```python
from dataclasses import dataclass
from typing import Optional

@dataclass
class UserDTO:
    id: str
    name: str
    email: str

    @classmethod
    def from_entity(cls, user):
        return cls(
            id=user.id,
            name=user.name,
            email=user.email
        )

# Uso
user = User.find_by_id("123")
dto = UserDTO.from_entity(user)
return {"user": dto}
```

### TypeScript - OOP

```typescript
interface UserDTO {
    id: string;
    name: string;
    email: string;
}

const toDTO = (user: User): UserDTO => ({
    id: user.id,
    name: user.name,
    email: user.email,
});

const user = await userService.findById("123");
return { user: toDTO(user) };
```

### Java - OOP

```java
public class UserDTO {
    public String id;
    public String name;
    public String email;

    public static UserDTO fromEntity(User user) {
        UserDTO dto = new UserDTO();
        dto.id = user.getId();
        dto.name = user.getName();
        dto.email = user.getEmail();
        return dto;
    }
}
```

---

## 6. CQRS (Command Query Responsibility Segregation)

### Propósito
Separar leitura de escrita em modelos distintos.

### Quando Usar
- Performance de leitura
- Complexidade分开
- Escalabilidade

### Python - OOP

```python
class UserCommand:
    def __init__(self, repository):
        self._repository = repository

    def create(self, name, email):
        user = User(name=name, email=email)
        return self._repository.save(user)

class UserQuery:
    def __init__(self, read_database):
        self._read_db = read_database

    def find_all(self):
        return self._read_db.query("SELECT * FROM users")

    def find_by_id(self, id):
        return self._read_db.query(
            f"SELECT * FROM users WHERE id = {id}"
        )
```

### TypeScript - OOP

```typescript
interface UserCommand {
    create(name: string, email: string): Promise<User>;
}

interface UserQuery {
    findAll(): Promise<UserView[]>;
    findById(id: string): Promise<UserView | null>;
}

class UserCommandHandler implements UserCommand {
    constructor(private repository: UserRepository) {}

    async create(name: string, email: string): Promise<User> {
        const user = { id: generateId(), name, email };
        return this.repository.save(user);
    }
}

class UserQueryHandler implements UserQuery {
    constructor(private db: ReadDatabase) {}

    async findAll(): Promise<UserView[]> {
        return this.db.query("SELECT * FROM users");
    }
}
```

### Ruby - OOP

```ruby
class UserCommand
    def initialize(repository)
        @repository = repository
    end

    def create(name, email)
        user = User.new(name: name, email: email)
        @repository.save(user)
    end
end

class UserQuery
    def initialize(read_db)
        @read_db = read_db
    end

    def find_all
        @read_db.query("SELECT * FROM users")
    end
end
```

---

## 7. Specification

### Propósito
Encapsular regras de negócio como objetos reutilizáveis.

### Quando Usar
- Regras complexas
- Reutilização
- Composition

### Python - OOP

```python
class Specification(ABC):
    @abstractmethod
    def is_satisfied_by(self, candidate) -> bool:
        pass

    def and_(self, other):
        return AndSpecification(self, other)

    def or_(self, other):
        return OrSpecification(self, other)

    def not_(self):
        return NotSpecification(self)

class AndSpecification(Specification):
    def __init__(self, left, right):
        self._left = left
        self._right = right

    def is_satisfied_by(self, candidate) -> bool:
        return (
            self._left.is_satisfied_by(candidate) and
            self._right.is_satisfied_by(candidate)
        )

class AdultSpecification(Specification):
    def is_satisfied_by(self, candidate) -> bool:
        return candidate.age >= 18
```

### TypeScript - OOP

```typescript
interface Specification<T> {
    isSatisfiedBy(candidate: T): boolean;
    and(other: Specification<T>): Specification<T>;
    or(other: Specification<T>): Specification<T>;
}

class AdultSpecification<T extends { age: number }> implements Specification<T> {
    isSatisfiedBy(candidate: T): boolean {
        return candidate.age >= 18;
    }
}

const isAdult = new AdultSpecification();
const user = { name: "John", age: 25 };
console.log(isAdult.isSatisfiedBy(user)); // true
```

---

## Resumo

| Padrão | Quando Usar | Python | TypeScript | Ruby | Java | C# |
|--------|-----------|--------|--------|------|------|-----|
| **Repository** | Abstração dados | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Unit of Work** | Transações | ✓ | ✓ | - | ✓ | ✓ |
| **Service Layer** | Lógica negócio | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Factory** | Criação complexa | ✓ | ✓ | ✓ | ✓ | ✓ |
| **DTO** | Transferência | ✓ | ✓ | ✓ | ✓ | ✓ |
| **CQRS** | Separação leitura/escrita | ✓ | ✓ | ✓ | - | - |
| **Specification** | Regras reutilizáveis | ✓ | ✓ | - | ✓ | - |