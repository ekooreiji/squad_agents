# Templates - Padrões Estruturais

Templates prontos para implementar padrões estruturais.

---

## 1. Adapter Template

### Python - OOP

```python
class Target(ABC):
    @abstractmethod
    def request(self) -> str:
        pass

class Adaptee:
    def specific_request(self) -> str:
        return "Adaptee specific request"

class Adapter(Target):
    def __init__(self, adaptee: Adaptee):
        self._adaptee = adaptee

    def request(self) -> str:
        return f"Adapter: {self._adaptee.specific_request()}"
```

### TypeScript - OOP

```typescript
interface Target {
    request(): string;
}

class Adaptee {
    specificRequest(): string {
        return "Adaptee specific request";
    }
}

class Adapter implements Target {
    constructor(private adaptee: Adaptee) {}

    request(): string {
        return `Adapter: ${this.adaptee.specificRequest()}`;
    }
}
```

### Ruby - OOP

```ruby
class Target
    def request
        raise NotImplementedError
    end
end

class Adaptee
    def specific_request
        "Adaptee specific request"
    end
end

class Adapter < Target
    def initialize(adaptee)
        @adaptee = adaptee
    end

    def request
        "Adapter: #{@adaptee.specific_request}"
    end
end
```

### Java - OOP

```java
interface Target {
    String request();
}

class Adaptee {
    public String specificRequest() {
        return "Adaptee specific request";
    }
}

class Adapter implements Target {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    public String request() {
        return "Adapter: " + adaptee.specificRequest();
    }
}
```

### C# - OOP

```csharp
public interface ITarget
{
    string Request();
}

public class Adaptee
{
    public string SpecificRequest() => "Adaptee specific request";
}

public class Adapter : ITarget
{
    private readonly Adaptee _adaptee;

    public Adapter(Adaptee adaptee) => _adaptee = adaptee;

    public string Request() => $"Adapter: {_adaptee.SpecificRequest()}";
}
```

---

## 2. Bridge Template

### Python - OOP

```python
class Implementor(ABC):
    @abstractmethod
    def operation_impl(self) -> str:
        pass

class ConcreteImplementor(Implementor):
    def operation_impl(self) -> str:
        return "ConcreteImplementor operation"

class Abstraction:
    def __init__(self, implementor: Implementor):
        self._implementor = implementor

    def operation(self) -> str:
        return f"Abstraction: {self._implementor.operation_impl()}"

class RefinedAbstraction(Abstraction):
    def operation(self) -> str:
        return f"RefinedAbstraction: {self._implementor.operation_impl()}"
```

### TypeScript - OOP

```typescript
interface Implementor {
    operationImpl(): string;
}

class ConcreteImplementor implements Implementor {
    operationImpl(): string {
        return "ConcreteImplementor operation";
    }
}

class Abstraction {
    constructor(protected implementor: Implementor) {}

    operation(): string {
        return `Abstraction: ${this.implementor.operationImpl()}`;
    }
}

class RefinedAbstraction extends Abstraction {
    operation(): string {
        return `RefinedAbstraction: ${this.implementor.operationImpl()}`;
    }
}
```

### Ruby - OOP

```ruby
class Implementor
    def operation_impl
        raise NotImplementedError
    end
end

class ConcreteImplementor < Implementor
    def operation_impl
        "ConcreteImplementor operation"
    end
end

class Abstraction
    def initialize(implementor)
        @implementor = implementor
    end

    def operation
        "Abstraction: #{@implementor.operation_impl}"
    end
end
```

### Java - OOP

```java
interface Implementor {
    String operationImpl();
}

class ConcreteImplementor implements Implementor {
    public String operationImpl() {
        return "ConcreteImplementor operation";
    }
}

class Abstraction {
    private Implementor implementor;

    public Abstraction(Implementor implementor) {
        this.implementor = implementor;
    }

    public String operation() {
        return "Abstraction: " + implementor.operationImpl();
    }
}
```

### C# - OOP

```csharp
public interface IImplementor
{
    string OperationImpl();
}

public class ConcreteImplementor : IImplementor
{
    public string OperationImpl() => "ConcreteImplementor operation";
}

public class Abstraction
{
    protected readonly IImplementor _implementor;

    public Abstraction(IImplementor implementor) => _implementor = implementor;

    public virtual string Operation() => $"Abstraction: {_implementor.OperationImpl()}";
}
```

---

## 3. Composite Template

### Python - OOP

```python
class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class Leaf(Component):
    def __init__(self, name):
        self._name = name

    def operation(self) -> str:
        return f"Leaf: {self._name}"

class Composite(Component):
    def __init__(self, name):
        self._name = name
        self._children = []

    def add(self, component: Component):
        self._children.append(component)
        return self

    def remove(self, component: Component):
        self._children.remove(component)

    def operation(self) -> str:
        results = [c.operation() for c in self._children]
        return f"Composite {self._name}: {' + '.join(results)}"
```

### TypeScript - OOP

```typescript
interface Component {
    operation(): string;
}

class Leaf implements Component {
    constructor(private name: string) {}

    operation(): string {
        return `Leaf: ${this.name}`;
    }
}

class Composite implements Component {
    private children: Component[] = [];

    constructor(private name: string) {}

    add(component: Component): this {
        this.children.push(component);
        return this;
    }

    operation(): string {
        const results = this.children.map(c => c.operation());
        return `Composite ${this.name}: ${results.join(' + ')}`;
    }
}
```

### Ruby - OOP

```ruby
class Component
    def operation
        raise NotImplementedError
    end
end

class Leaf < Component
    def initialize(name)
        @name = name
    end

    def operation
        "Leaf: #{@name}"
    end
end

class Composite < Component
    def initialize(name)
        @name = name
        @children = []
    end

    def add(component)
        @children << component
        self
    end

    def operation
        results = @children.map(&:operation)
        "Composite #{@name}: #{results.join(' + ')}"
    end
end
```

### Java - OOP

```java
interface Component {
    String operation();
}

class Leaf implements Component {
    private String name;

    public Leaf(String name) { this.name = name; }

    public String operation() {
        return "Leaf: " + name;
    }
}

class Composite implements Component {
    private String name;
    private List<Component> children = new ArrayList<>();

    public Composite(String name) { this.name = name; }

    public void add(Component c) { children.add(c); }

    public String operation() {
        return "Composite " + name + ": " +
            children.stream().map(Component::operation).collect(Collectors.joining(" + "));
    }
}
```

### C# - OOP

```csharp
public interface IComponent
{
    string Operation();
}

public class Leaf : IComponent
{
    public Leaf(string name) => Name = name;
    public string Name { get; }

    public string Operation() => $"Leaf: {Name}";
}

public class Composite : IComponent
{
    public string Name { get; }
    private readonly List<IComponent> _children = new();

    public Composite(string name) => Name = name;

    public void Add(IComponent component) => _children.Add(component);

    public string Operation() =>
        $"Composite {Name}: {string.Join(" + ", _children.Select(c => c.Operation()))}";
}
```

---

## 4. Decorator Template

### Python - OOP

```python
class Component(ABC):
    @abstractmethod
    def operation(self) -> str:
        pass

class ConcreteComponent(Component):
    def operation(self) -> str:
        return "ConcreteComponent"

class Decorator(Component):
    def __init__(self, wrapped: Component):
        self._wrapped = wrapped

    def operation(self) -> str:
        return self._wrapped.operation()

class ConcreteDecorator(Decorator):
    def __init__(self, wrapped: Component):
        super().__init__(wrapped)

    def added_behavior(self) -> str:
        return "Added behavior"

    def operation(self) -> str:
        return f"Decorator({self._wrapped.operation()})"
```

### TypeScript - OOP

```typescript
interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    operation(): string {
        return "ConcreteComponent";
    }
}

abstract class Decorator implements Component {
    constructor(protected wrapped: Component) {}

    operation(): string {
        return this.wrapped.operation();
    }
}

class ConcreteDecorator extends Decorator {
    addedBehavior(): string {
        return "Added behavior";
    }

    operation(): string {
        return `Decorator(${this.wrapped.operation()})`;
    }
}
```

### Ruby - OOP

```ruby
class Component
    def operation
        raise NotImplementedError
    end
end

class ConcreteComponent < Component
    def operation
        "ConcreteComponent"
    end
end

class Decorator < Component
    def initialize(wrapped)
        @wrapped = wrapped
    end

    def operation
        @wrapped.operation
    end
end

class ConcreteDecorator < Decorator
    def operation
        "Decorator(#{@wrapped.operation})"
    end
end
```

### Java - OOP

```java
interface Component {
    String operation();
}

class ConcreteComponent implements Component {
    public String operation() {
        return "ConcreteComponent";
    }
}

abstract class Decorator implements Component {
    protected Component wrapped;

    public Decorator(Component wrapped) {
        this.wrapped = wrapped;
    }

    public String operation() {
        return wrapped.operation();
    }
}

class ConcreteDecorator extends Decorator {
    public ConcreteDecorator(Component wrapped) {
        super(wrapped);
    }

    public String operation() {
        return "Decorator(" + wrapped.operation() + ")";
    }
}
```

### C# - OOP

```csharp
public interface IComponent
{
    string Operation();
}

public class ConcreteComponent : IComponent
{
    public string Operation() => "ConcreteComponent";
}

public abstract class Decorator : IComponent
{
    protected readonly IComponent _wrapped;

    public Decorator(IComponent wrapped) => _wrapped = wrapped;

    public virtual string Operation() => _wrapped.Operation();
}

public class ConcreteDecorator : Decorator
{
    public ConcreteDecorator(IComponent wrapped) : base(wrapped) {}

    public override string Operation() => $"Decorator({_wrapped.Operation()})";
}
```

---

## 5. Facade Template

### Python - OOP

```python
class SubsystemA:
    def operation_a(self) -> str:
        return "SubsystemA: Operation A"

    def operation_b(self) -> str:
        return "SubsystemA: Operation B"

class SubsystemB:
    def operation_c(self) -> str:
        return "SubsystemB: Operation C"

class Facade:
    def __init__(self):
        self._subsystem_a = SubsystemA()
        self._subsystem_b = SubsystemB()

    def operation(self) -> str:
        results = [
            self._subsystem_a.operation_a(),
            self._subsystem_a.operation_b(),
            self._subsystem_b.operation_c()
        ]
        return f"Facade: {' | '.join(results)}"
```

### TypeScript - OOP

```typescript
class SubsystemA {
    operationA(): string { return "SubsystemA: Operation A"; }
    operationB(): string { return "SubsystemA: Operation B"; }
}

class SubsystemB {
    operationC(): string { return "SubsystemB: Operation C"; }
}

class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;

    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }

    operation(): string {
        return [
            this.subsystemA.operationA(),
            this.subsystemA.operationB(),
            this.subsystemB.operationC()
        ].join(" | ");
    }
}
```

### Ruby - OOP

```ruby
class SubsystemA
    def operation_a
        "SubsystemA: Operation A"
    end

    def operation_b
        "SubsystemA: Operation B"
    end
end

class SubsystemB
    def operation_c
        "SubsystemB: Operation C"
    end
end

class Facade
    def initialize
        @subsystem_a = SubsystemA.new
        @subsystem_b = SubsystemB.new
    end

    def operation
        [
            @subsystem_a.operation_a,
            @subsystem_a.operation_b,
            @subsystem_b.operation_c
        ].join(" | ")
    end
end
```

### Java - OOP

```java
class SubsystemA {
    public String operationA() { return "SubsystemA: Operation A"; }
    public String operationB() { return "SubsystemA: Operation B"; }
}

class SubsystemB {
    public String operationC() { return "SubsystemB: Operation C"; }
}

class Facade {
    private SubsystemA subsystemA = new SubsystemA();
    private SubsystemB subsystemB = new SubsystemB();

    public String operation() {
        return subsystemA.operationA() + " | " +
               subsystemA.operationB() + " | " +
               subsystemB.operationC();
    }
}
```

### C# - OOP

```csharp
public class SubsystemA
{
    public string OperationA() => "SubsystemA: Operation A";
    public string OperationB() => "SubsystemA: Operation B";
}

public class SubsystemB
{
    public string OperationC() => "SubsystemB: Operation C";
}

public class Facade
{
    private readonly SubsystemA _subsystemA = new();
    private readonly SubsystemB _subsystemB = new();

    public string Operation() =>
        $"{_subsystemA.OperationA()} | {_subsystemA.OperationB()} | {_subsystemB.OperationC()}";
}
```

---

## 6. Proxy Template

### Python - OOP

```python
class Subject(ABC):
    @abstractmethod
    def request(self) -> str:
        pass

class RealSubject(Subject):
    def request(self) -> str:
        return "RealSubject: Request"

class Proxy(Subject):
    def __init__(self):
        self._real_subject = None

    def request(self) -> str:
        if self._real_subject is None:
            self._real_subject = RealSubject()
        return f"Proxy: {self._real_subject.request()}"
```

### TypeScript - OOP

```typescript
interface Subject {
    request(): string;
}

class RealSubject implements Subject {
    request(): string {
        return "RealSubject: Request";
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject | null = null;

    request(): string {
        if (!this.realSubject) {
            this.realSubject = new RealSubject();
        }
        return `Proxy: ${this.realSubject.request()}`;
    }
}
```

### Ruby - OOP

```ruby
class Subject
    def request
        raise NotImplementedError
    end
end

class RealSubject < Subject
    def request
        "RealSubject: Request"
    end
end

class Proxy < Subject
    def initialize
        @real_subject = nil
    end

    def request
        @real_subject ||= RealSubject.new
        "Proxy: #{@real_subject.request}"
    end
end
```

### Java - OOP

```java
interface Subject {
    String request();
}

class RealSubject implements Subject {
    public String request() {
        return "RealSubject: Request";
    }
}

class Proxy implements Subject {
    private RealSubject realSubject;

    public String request() {
        if (realSubject == null) {
            realSubject = new RealSubject();
        }
        return "Proxy: " + realSubject.request();
    }
}
```

### C# - OOP

```csharp
public interface ISubject
{
    string Request();
}

public class RealSubject : ISubject
{
    public string Request() => "RealSubject: Request";
}

public class Proxy : ISubject
{
    private RealSubject _realSubject;

    public string Request() =>
        $"Proxy: {(_realSubject ??= new RealSubject()).Request()}";
}
```