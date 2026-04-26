# Padrões Estruturais (Structural)

Padrões que organizam a estrutura de classes e objetos.

---

## 1. Adapter (Wrapper)

### Propósito
Converter interface de uma classe em outra que o cliente espera.

### Quando Usar
- Incompatibilidade de interfaces
- Reutilizar classes existentes
- Middleware em APIs

### Python - OOP

```python
# Interface esperada
class MediaPlayer:
    def play(self, filename): pass

# Adaptador
class AudioPlayer(MediaPlayer):
    def __init__(self):
        self._advanced = AdvancedAudio()

    def play(self, filename):
        if filename.endswith(".mp3"):
            return self._advanced.playMp3(filename)
        else:
            raise ValueError(f"Formato não suportado: {filename}")

# Uso
player = AudioPlayer()
player.play("song.mp3")
```

### Python - Funcional

```python
from typing import Callable

def adapt(source_fn: Callable, check_fn: Callable, target_fn: Callable):
    def wrapper(filename):
        if check_fn(filename):
            return target_fn(filename)
        raise ValueError("Formato não suportado")
    return wrapper
```

### TypeScript - OOP

```typescript
interface MediaPlayer {
    play(filename: string): void;
}

class AudioPlayer implements MediaPlayer {
    constructor(private advanced: AdvancedAudio) {}

    play(filename: string): void {
        if (filename.endsWith(".mp3")) {
            this.advanced.playMp3(filename);
        } else {
            throw new Error(`Formato não suportado: ${filename}`);
        }
    }
}
```

### TypeScript - Funcional

```typescript
type Adapter = (filename: string) => string;

const createAdapter = (
    check: (filename: string) => boolean,
    process: (filename: string) => string
): Adapter =>
    (filename) => {
        if (check(filename)) {
            return process(filename);
        }
        throw new Error("Formato não suportado");
    };
```

### Ruby - OOP

```ruby
class MediaPlayer
    def play(filename)
        raise NotImplementedError
    end
end

class AudioPlayer < MediaPlayer
    def initialize
        @advanced = AdvancedAudio.new
    end

    def play(filename)
        if filename.end_with?(".mp3")
            @advanced.play_mp3(filename)
        else
            raise "Formato não suportado"
        end
    end
end
```

### Java - OOP

```java
interface MediaPlayer {
    void play(String filename);
}

class AudioPlayer implements MediaPlayer {
    private AdvancedAudio advanced;

    public AudioPlayer() {
        this.advanced = new AdvancedAudio();
    }

    public void play(String filename) {
        if (filename.endsWith(".mp3")) {
            advanced.playMp3(filename);
        } else {
            throw new IllegalArgumentException("Formato não suportado");
        }
    }
}
```

### C# - OOP

```csharp
public interface IMediaPlayer
{
    void Play(string filename);
}

public class AudioPlayer : IMediaPlayer
{
    private AdvancedAudio _advanced;

    public AudioPlayer()
    {
        _advanced = new AdvancedAudio();
    }

    public void Play(string filename)
    {
        if (filename.EndsWith(".mp3"))
        {
            _advanced.PlayMp3(filename);
        }
        else
        {
            throw new ArgumentException($"Formato não suportado: {filename}");
        }
    }
}
```

---

## 2. Bridge

### Propósito
Separar abstração de implementação para quevariem independentemente.

### Quando Usar
- Evitar herança fixa
- Extensibilidade independente
- Múltiplas plataformas

### Python - OOP

```python
class Device(ABC):
    @abstractmethod
    def is_enabled(self): bool
    @abstractmethod
    def enable(self): pass
    @abstractmethod
    def disable(self): pass

class RemoteControl:
    def __init__(self, device: Device):
        self._device = device

    def toggle_power(self):
        if self._device.is_enabled():
            self._device.disable()
        else:
            self._device.enable()

class TV(Device):
    def is_enabled(self): return self._on
    def enable(self): self._on = True
    def disable(self): self._on = False
```

### TypeScript - OOP

```typescript
interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
}

class RemoteControl {
    constructor(protected device: Device) {}

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
}

class TV implements Device {
    private on = false;

    isEnabled(): boolean { return this.on; }
    enable(): void { this.on = true; }
    disable(): void { this.on = false; }
}
```

### Ruby - OOP

```ruby
class RemoteControl
    def initialize(device)
        @device = device
    end

    def toggle_power
        if @device.on?
            @device.off
        else
            @device.on
        end
    end
end

class TV
    attr_reader :on

    def on
        @on = true
    end

    def off
        @on = false
    end

    def on?
        @on
    end
end
```

### Java - OOP

```java
interface Device {
    boolean isEnabled();
    void enable();
    void disable();
}

class RemoteControl {
    protected Device device;

    public RemoteControl(Device device) {
        this.device = device;
    }

    public void togglePower() {
        if (device.isEnabled()) {
            device.disable();
        } else {
            device.enable();
        }
    }
}
```

### C# - OOP

```csharp
public interface IDevice
{
    bool IsEnabled();
    void Enable();
    void Disable();
}

public class RemoteControl
{
    protected IDevice _device;

    public RemoteControl(IDevice device)
    {
        _device = device;
    }

    public void TogglePower()
    {
        if (_device.IsEnabled())
            _device.Disable();
        else
            _device.Enable();
    }
}
```

---

## 3. Composite

### Propósito
Compor objetos em estruturas de árvore para representar hierarquias.

### Quando Usar
- Estruturas árvore
- Part-whole relationships
- Arquivos/diretórios

### Python - OOP

```python
class Component(ABC):
    @abstractmethod
    def execute(self): pass

class Leaf(Component):
    def __init__(self, name):
        self.name = name
    def execute(self):
        return f"Leaf {self.name}"

class Composite(Component):
    def __init__(self, name):
        self.name = name
        self._children = []

    def add(self, child):
        self._children.append(child)
        return self

    def execute(self):
        results = [child.execute() for child in self._children]
        return f"Composite {self.name}: {results}"

# Uso
root = Composite("root")
root.add(Leaf("A"))
root.add(Leaf("B"))
print(root.execute())
```

### TypeScript - OOP

```typescript
interface Component {
    execute(): string;
}

class Leaf implements Component {
    constructor(private name: string) {}
    execute(): string { return `Leaf ${this.name}`; }
}

class Composite implements Component {
    private children: Component[] = [];

    constructor(private name: string) {}

    add(child: Component): this {
        this.children.push(child);
        return this;
    }

    execute(): string {
        const results = this.children.map(c => c.execute());
        return `Composite ${this.name}: ${results.join(", ")}`;
    }
}

const root = new Composite("root")
    .add(new Leaf("A"))
    .add(new Leaf("B"));
console.log(root.execute());
```

### Ruby - OOP

```ruby
class Component
    def execute
        raise NotImplementedError
    end
end

class Leaf < Component
    def initialize(name)
        @name = name
    end

    def execute
        "Leaf #{@name}"
    end
end

class Composite < Component
    def initialize(name)
        @name = name
        @children = []
    end

    def add(child)
        @children << child
        self
    end

    def execute
        results = @children.map(&:execute)
        "Composite #{@name}: #{results.join(', ')}"
    end
end
```

### Java - OOP

```java
interface Component {
    String execute();
}

class Leaf implements Component {
    private String name;

    public Leaf(String name) { this.name = name; }

    public String execute() {
        return "Leaf " + name;
    }
}

class Composite implements Component {
    private String name;
    private List<Component> children = new ArrayList<>();

    public Composite(String name) { this.name = name; }

    public void add(Component c) { children.add(c); }

    public String execute() {
        return "Composite " + name + ": " +
            children.stream().map(Component::execute).collect(Collectors.joining(", "));
    }
}
```

### C# - OOP

```csharp
public abstract class Component
{
    public abstract string Execute();
}

public class Leaf : Component
{
    public Leaf(string name) { Name = name; }
    public string Name { get; set; }

    public override string Execute() => $"Leaf {Name}";
}

public class Composite : Component
{
    public string Name { get; set; }
    private List<Component> Children = new List<Component>();

    public void Add(Component c) => Children.Add(c);

    public override string Execute() =>
        $"Composite {Name}: {string.Join(", ", Children.Select(c => c.Execute()))}";
}
```

---

## 4. Decorator

### Propósito
Adicionar responsabilidades dinamicamente a objetos.

### Quando Usar
- Adicionar funcionalidades sem modificar classe
- Extensões flexíveis
- Responsabilidades opcionais

### Python - OOP

```python
class Coffee:
    def cost(self): return 5
    def description(self): return "Coffee"

class CoffeeDecorator(Coffee):
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self): return self._coffee.cost()
    def description(self): return self._coffee.description()

class Milk(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 2
    def description(self): return f"{self._coffee.description()}, Milk"

class Sugar(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 1
    def description(self): return f"{self._coffee.description()}, Sugar"

# Uso
coffee = Sugar(Milk(Coffee()))
print(coffee.cost())         # 8
print(coffee.description())  # "Coffee, Milk, Sugar"
```

### TypeScript - OOP

```typescript
interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost(): number { return 5; }
    description(): string { return "Coffee"; }
}

abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    cost(): number { return this.coffee.cost(); }
    description(): string { return this.coffee.description(); }
}

class Milk extends CoffeeDecorator {
    cost(): number { return this.coffee.cost() + 2; }
    description(): string { return `${this.coffee.description()}, Milk`; }
}

class Sugar extends CoffeeDecorator {
    cost(): number { return this.coffee.cost() + 1; }
    description(): string { return `${this.coffee.description()}, Sugar`; }
}

// Uso
const coffee = new Sugar(new Milk(new SimpleCoffee()));
console.log(coffee.cost());         // 8
console.log(coffee.description());  // "Coffee, Milk, Sugar"
```

### Ruby - OOP

```ruby
class Coffee
    def cost; 5; end
    def description; "Coffee"; end
end

class CoffeeDecorator
    def initialize(coffee)
        @coffee = coffee
    end

    def cost
        @coffee.cost
    end

    def description
        @coffee.description
    end
end

class Milk < CoffeeDecorator
    def cost; @coffee.cost + 2; end
    def description; "#{@coffee.description}, Milk"; end
end
```

### Java - OOP

```java
interface Coffee {
    int cost();
    String description();
}

class SimpleCoffee implements Coffee {
    public int cost() { return 5; }
    public String description() { return "Coffee"; }
}

abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;

    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    public int cost() { return coffee.cost(); }
    public String description() { return coffee.description(); }
}

class Milk extends CoffeeDecorator {
    public Milk(Coffee coffee) { super(coffee); }

    public int cost() { return coffee.cost() + 2; }
    public String description() {
        return coffee.description() + ", Milk";
    }
}
```

### C# - OOP

```csharp
public interface ICoffee
{
    int Cost();
    string Description();
}

public class SimpleCoffee : ICoffee
{
    public int Cost() => 5;
    public string Description() => "Coffee";
}

public abstract class CoffeeDecorator : ICoffee
{
    protected ICoffee _coffee;

    public CoffeeDecorator(ICoffee coffee)
    {
        _coffee = coffee;
    }

    public virtual int Cost() => _coffee.Cost();
    public virtual string Description() => _coffee.Description();
}

public class Milk : CoffeeDecorator
{
    public Milk(ICoffee coffee) : base(coffee) {}

    public override int Cost() => _coffee.Cost() + 2;
    public override string Description() => $"{_coffee.Description()}, Milk";
}
```

---

## 5. Facade

### Propósito
Fornecer interface unificada para subsystem complexo.

### Quando Usar
- Simplificar sistema complexo
- Abstrair implementação
- Pontos de entrada

### Python - OOP

```python
class Computer:
    def get_electric_shock(self): pass
    def make_electric_shock(self): pass
    def show_freeze_screen(self): pass

class ComputerFacade:
    def __init__(self, computer):
        self._computer = computer

    def start(self):
        self._computer.get_electric_shock()
        self._computer.make_electric_shock()
        self._computer.show_freeze_screen()

    def start_simple(self):
        # Simplified view
        return "Computer started"

# Uso
computer = ComputerFacade(Computer())
computer.start_simple()
```

### TypeScript - OOP

```typescript
class Computer {
    getElectricShock() {}
    makeElectricShock() {}
    showFreezeScreen() {}
}

class ComputerFacade {
    constructor(private computer: Computer) {}

    start(): void {
        this.computer.getElectricShock();
        this.computer.makeElectricShock();
        this.computer.showFreezeScreen();
    }

    startSimple(): string {
        return "Computer started";
    }
}
```

### Ruby - OOP

```ruby
class Computer
    def get_electric_shock; end
    def make_electric_shock; end
    def show_freeze_screen; end
end

class ComputerFacade
    def initialize(computer)
        @computer = computer
    end

    def start
        @computer.get_electric_shock
        @computer.make_electric_shock
        @computer.show_freeze_screen
    end
end
```

### Java - OOP

```java
class Computer {
    public void getElectricShock() {}
    public void makeElectricShock() {}
    public void showFreezeScreen() {}
}

class ComputerFacade {
    private Computer computer;

    public ComputerFacade(Computer computer) {
        this.computer = computer;
    }

    public void start() {
        computer.getElectricShock();
        computer.makeElectricShock();
        computer.showFreezeScreen();
    }
}
```

### C# - OOP

```csharp
public class Computer
{
    public void GetElectricShock() { }
    public void MakeElectricShock() { }
    public void ShowFreezeScreen() { }
}

public class ComputerFacade
{
    private Computer _computer;

    public ComputerFacade(Computer computer)
    {
        _computer = computer;
    }

    public void Start()
    {
        _computer.GetElectricShock();
        _computer.MakeElectricShock();
        _computer.ShowFreezeScreen();
    }
}
```

---

## 6. Flyweight

### Propósito
Compartilhar objetos comuns para economizar memória.

### Quando Usar
- Grande quantidade de objetos similares
- Memoria crítica
- Cache de objetos imutáveis

### Python - OOP

```python
class TreeType:
    def __init__(self, name, color):
        self.name = name
        self.color = color

class TreeFactory:
    _tree_types = {}

    @classmethod
    def get_tree_type(cls, name, color):
        key = (name, color)
        if key not in cls._tree_types:
            cls._tree_types[key] = TreeType(name, color)
        return cls._tree_types[key]

class Tree:
    def __init__(self, x, y, tree_type):
        self.x = x
        self.y = y
        self.tree_type = tree_type
```

### TypeScript - OOP

```typescript
interface TreeType {
    name: string;
    color: string;
}

class TreeFactory {
    private static cache: Map<string, TreeType> = new Map();

    static getTreeType(name: string, color: string): TreeType {
        const key = `${name}-${color}`;
        if (!this.cache.has(key)) {
            this.cache.set(key, { name, color });
        }
        return this.cache.get(key)!;
    }
}

class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType
    ) {}
}
```

### Java - OOP

```java
class TreeType {
    private String name;
    private String color;

    public TreeType(String name, String color) {
        this.name = name;
        this.color = color;
    }
}

class TreeFactory {
    private static Map<String, TreeType> cache = new HashMap<>();

    public static TreeType getTreeType(String name, String color) {
        String key = name + "-" + color;
        return cache.computeIfAbsent(key, k -> new TreeType(name, color));
    }
}
```

---

## 7. Proxy

### Propósito
Fornecer representante de outro objeto para controlar acesso.

### Quando Usar
- Lazy loading
- Acesso remoto
- Proteção de acesso

### Python - OOP

```python
class Subject(ABC):
    @abstractmethod
    def request(self): pass

class RealSubject(Subject):
    def request(self):
        return "RealSubject: Handling request."

class Proxy(Subject):
    def __init__(self):
        self._real_subject = None

    def request(self):
        if self._real_subject is None:
            self._real_subject = RealSubject()
        return self._real_subject.request()

# Uso
proxy = Proxy()
print(proxy.request())
```

### TypeScript - OOP

```typescript
interface Subject {
    request(): string;
}

class RealSubject implements Subject {
    request(): string {
        return "RealSubject: Handling request.";
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject | null = null;

    request(): string {
        if (!this.realSubject) {
            this.realSubject = new RealSubject();
        }
        return this.realSubject.request();
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
        "RealSubject: Handling request."
    end
end

class Proxy < Subject
    def initialize
        @real_subject = nil
    end

    def request
        @real_subject ||= RealSubject.new
        @real_subject.request
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
        return "RealSubject: Handling request.";
    }
}

class Proxy implements Subject {
    private RealSubject realSubject;

    public String request() {
        if (realSubject == null) {
            realSubject = new RealSubject();
        }
        return realSubject.request();
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
    public string Request() => "RealSubject: Handling request.";
}

public class Proxy : ISubject
{
    private RealSubject _realSubject;

    public string Request()
    {
        _realSubject ??= new RealSubject();
        return _realSubject.Request();
    }
}
```

---

## Resumo

| Padrão | Quando Usar | Python | TypeScript | Ruby | Java | C# |
|--------|-----------|--------|--------|------|------|-----|
| **Adapter** | Converter interfaces | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Bridge** | Separar abstração | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Composite** | Estruturas árvore | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Decorator** | Adicionar funcionalidades | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Facade** | Simplificar sistema | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Flyweight** | Economizar memória | ✓ | ✓ | - | ✓ | - |
| **Proxy** | Controlar acesso | ✓ | ✓ | ✓ | ✓ | ✓ |