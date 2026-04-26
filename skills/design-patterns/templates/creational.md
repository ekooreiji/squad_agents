# Templates - Padrões de Criação

Templates prontos para implementar padrões de criação.

---

## 1. Singleton Template

### Python - OOP

```python
class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class MySingleton(metaclass=SingletonMeta):
    def __init__(self):
        if hasattr(self, '_initialized'):
            return
        # Initialization code here
        self._initialized = True
```

### Python - Funcional

```python
def singleton_factory(create_fn):
    """Decorator que transforma função em singleton."""
    instance = None

    def get_instance(*args, **kwargs):
        nonlocal instance
        if instance is None:
            instance = create_fn(*args, **kwargs)
        return instance

    return get_instance

@singleton_factory
def create_database_connection():
    # Connection creation code
    return {"connected": True}
```

### TypeScript - OOP

```typescript
class Singleton<T> {
    private static instance: Singleton<T>;

    protected constructor() {}

    static getInstance<T extends Singleton<T>>(
        this: new () => T
    ): T {
        if (!Singleton.instance) {
            Singleton.instance = new this();
        }
        return Singleton.instance;
    }
}

class MySingleton extends Singleton<MySingleton> {
    protected constructor() {
        super();
        // Initialization code here
    }
}
```

### TypeScript - Funcional

```typescript
const singleton = <T,>(
    factory: () => T
): (() => T) => {
    let instance: T | null = null;

    return () => {
        if (!instance) {
            instance = factory();
        }
        return instance;
    };
};

const getDatabase = singleton(() => ({
    connected: true
}));
```

### Ruby - OOP

```ruby
module Singleton
    def self.included(base)
        base.extend(ClassMethods)
    end

    module ClassMethods
        def instance
            @instance ||= new
        end
    end

    def self.not_implemented_error
        raise NotImplementedError, "Cannot instantiate directly"
    end
    private_class_method :new
end

class MyClass
    include Singleton

    def initialize
        # Initialization code here
    end
end
```

### Java - OOP

```java
public final class MySingleton {
    private static volatile MySingleton instance;

    private MySingleton() {
        // Prevent instantiation via reflection
        if (instance != null) {
            throw new IllegalStateException("Already instantiated");
        }
        // Initialization code here
    }

    public static MySingleton getInstance() {
        if (instance == null) {
            synchronized (MySingleton.class) {
                if (instance == null) {
                    instance = new MySingleton();
                }
            }
        }
        return instance;
    }
}
```

### C# - OOP

```csharp
public sealed class MySingleton
{
    private static readonly Lazy<MySingleton> _instance =
        new Lazy<MySingleton>(() => new MySingleton());

    public static MySingleton Instance => _instance.Value;

    private MySingleton()
    {
        // Prevent instantiation via reflection
        if (_instance.IsValueCreated)
            throw new InvalidOperationException("Already instantiated");

        // Initialization code here
    }
}
```

---

## 2. Factory Method Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class Product(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class Creator(ABC):
    @abstractmethod
    def create_product(self) -> Product:
        pass

    def some_operation(self) -> str:
        product = self.create_product()
        return f"Creator: {product.operation()}"

# Concrete implementations
class ConcreteProduct(Product):
    def operation(self) -> str:
        return "ConcreteProduct operation"

class ConcreteCreator(Creator):
    def create_product(self) -> Product:
        return ConcreteProduct()
```

### TypeScript - OOP

```typescript
interface Product {
    operation(): string;
}

interface Creator {
    createProduct(): Product;
    someOperation(): string;
}

class ConcreteProduct implements Product {
    operation(): string {
        return "ConcreteProduct operation";
    }
}

class ConcreteCreator implements Creator {
    createProduct(): Product {
        return new ConcreteProduct();
    }

    someOperation(): string {
        return `Creator: ${this.createProduct().operation()}`;
    }
}
```

### Ruby - OOP

```ruby
class Product
    def operation
        raise NotImplementedError
    end
end

class Creator
    def create_product
        raise NotImplementedError
    end

    def some_operation
        product = create_product
        "Creator: #{product.operation}"
    end
end

class ConcreteProduct < Product
    def operation
        "ConcreteProduct operation"
    end
end

class ConcreteCreator < Creator
    def create_product
        ConcreteProduct.new
    end
end
```

### Java - OOP

```java
interface Product {
    String operation();
}

abstract class Creator {
    public abstract Product createProduct();
}

class ConcreteProduct implements Product {
    public String operation() {
        return "ConcreteProduct operation";
    }
}

class ConcreteCreator extends Creator {
    public Product createProduct() {
        return new ConcreteProduct();
    }
}
```

### C# - OOP

```csharp
public interface IProduct
{
    string Operation();
}

public abstract class Creator
{
    public abstract IProduct CreateProduct();
}

public class ConcreteProduct : IProduct
{
    public string Operation() => "ConcreteProduct operation";
}

public class ConcreteCreator : Creator
{
    public override IProduct CreateProduct() => new ConcreteProduct();
}
```

---

## 3. Builder Template

### Python - OOP

```python
class Builder:
    def __init__(self):
        self.reset()

    def reset(self):
        self._result = None  # Initialize with default values

    def set_name(self, name):
        self._name = name
        return self

    def set_value(self, value):
        self._value = value
        return self

    def build(self):
        result = self._create_result()
        self.reset()
        return result

    def _create_result(self):
        # Return the built object
        return {"name": self._name, "value": self._value}
```

### TypeScript - OOP

```typescript
class Builder<T> {
    protected result!: T;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.result = {} as T;
    }

    build(): T {
        const r = this.result;
        this.reset();
        return r;
    }
}

interface UserBuilder extends Builder<User> {
    setName(name: string): this;
    setEmail(email: string): this;
}

class ConcreteBuilder extends Builder<User> implements UserBuilder {
    setName(name: string): this {
        this.result.name = name;
        return this;
    }

    setEmail(email: string): this {
        this.result.email = email;
        return this;
    }
}
```

### Ruby - OOP

```ruby
class Builder
    def initialize
        reset
    end

    def reset
        @result = {}
    end

    def set_name(name)
        @result[:name] = name
        self
    end

    def set_value(value)
        @result[:value] = value
        self
    end

    def build
        result = @result.dup
        reset
        result
    end
end
```

### Java - OOP

```java
public class Builder<T> {
    protected T result;

    public Builder() {
        result = createInstance();
    }

    protected T createInstance() {
        try {
            return (T) Types.class.getDeclaredConstructor().newInstance();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public T build() {
        T r = result;
        result = createInstance();
        return r;
    }
}

public class UserBuilder extends Builder<User> {
    public UserBuilder name(String name) {
        result.setName(name);
        return this;
    }

    public UserBuilder email(String email) {
        result.setEmail(email);
        return this;
    }
}
```

### C# - OOP

```csharp
public class Builder<T>
{
    protected T _result;

    protected Builder()
    {
        _result = (T)Activator.CreateInstance<T>();
    }

    public T Build()
    {
        var r = _result;
        _result = (T)Activator.CreateInstance<T>();
        return r;
    }
}

public class UserBuilder : Builder<User>
{
    public UserBuilder WithName(string name)
    {
        _result.Name = name;
        return this;
    }

    public UserBuilder WithEmail(string email)
    {
        _result.Email = email;
        return this;
    }
}
```

---

## 4. Prototype Template

### Python - OOP

```python
import copy

class Prototype(ABC):
    @abstractmethod
    def clone(self):
        pass

class ConcretePrototype(Prototype):
    def __init__(self, name="", value=0):
        self.name = name
        self.value = value

    def clone(self):
        # Deep copy
        return copy.deepcopy(self)

    def shallow_clone(self):
        # Shallow copy
        return copy.copy(self)
```

### TypeScript - OOP

```typescript
interface Cloneable<T> {
    clone(): T;
}

class ConcretePrototype implements Cloneable<ConcretePrototype> {
    constructor(
        public name: string = "",
        public value: number = 0
    ) {}

    clone(): ConcretePrototype {
        return new ConcretePrototype(this.name, this.value);
    }
}
```

### Ruby - OOP

```ruby
class Prototype
    def clone
        raise NotImplementedError
    end
end

class ConcretePrototype < Prototype
    attr_accessor :name, :value

    def initialize(name = "", value = 0)
        @name = name
        @value = value
    end

    def clone
        Marshal.load(Marshal.dump(self))
    end
end
```

### Java - OOP

```java
public interface Prototype<T> {
    T clone();
}

public class ConcretePrototype implements Prototype<ConcretePrototype> {
    private String name;
    private int value;

    public ConcretePrototype() {}

    public ConcretePrototype(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public ConcretePrototype clone() {
        try {
            return (ConcretePrototype) super.clone();
        } catch (CloneNotSupportedException e) {
            return new ConcretePrototype(this.name, this.value);
        }
    }
}
```

### C# - OOP

```csharp
public interface IPrototype<T>
{
    T Clone();
}

public class ConcretePrototype : IPrototype<ConcretePrototype>
{
    public string Name { get; set; }
    public int Value { get; set; }

    public ConcretePrototype Clone()
    {
        return (ConcretePrototype)MemberwiseClone();
    }
}
```

---

## 5. Abstract Factory Template

### Python - OOP

```python
from abc import ABC, abstractmethod

# Abstract products
class ProductA(ABC):
    @abstractmethod
    def operation_a(self) -> str:
        pass

class ProductB(ABC):
    @abstractmethod
    def operation_b(self) -> str:
        pass

# Abstract factory
class AbstractFactory(ABC):
    @abstractmethod
    def create_product_a(self) -> ProductA:
        pass

    @abstractmethod
    def create_product_b(self) -> ProductB:
        pass

# Concrete products
class ConcreteProductA1(ProductA):
    def operation_a(self) -> str:
        return "ProductA1 operation"

class ConcreteProductB1(ProductB):
    def operation_b(self) -> str:
        return "ProductB1 operation"

# Concrete factory
class ConcreteFactory1(AbstractFactory):
    def create_product_a(self) -> ProductA:
        return ConcreteProductA1()

    def create_product_b(self) -> ProductB:
        return ConcreteProductB1()
```

### TypeScript - OOP

```typescript
interface ProductA {
    operationA(): string;
}

interface ProductB {
    operationB(): string;
}

interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}
```

### Java - OOP

```java
interface ProductA {
    String operationA();
}

interface ProductB {
    String operationB();
}

interface AbstractFactory {
    ProductA createProductA();
    ProductB createProductB();
}

class ConcreteFactory1 implements AbstractFactory {
    public ProductA createProductA() {
        return new ConcreteProductA1();
    }

    public ProductB createProductB() {
        return new ConcreteProductB1();
    }
}
```