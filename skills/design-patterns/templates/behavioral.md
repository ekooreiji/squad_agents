# Templates - Padrões Comportamentais

Templates prontos para implementar padrões comportamentais.

---

## 1. Observer Template

### Python - OOP

```python
from abc import ABC, abstractmethod
from typing import List, Callable

class Observable:
    def __init__(self):
        self._observers: List[Callable] = []

    def attach(self, observer: Callable):
        self._observers.append(observer)

    def detach(self, observer: Callable):
        self._observers.remove(observer)

    def notify(self, *args, **kwargs):
        for observer in self._observers:
            observer(*args, **kwargs)

class Observer:
    def update(self, *args, **kwargs):
        pass

# Usage
observable = Observable()
observable.attach(lambda data: print(f"Observer 1: {data}"))
observable.attach(lambda data: print(f"Observer 2: {data}"))
observable.notify("Event!")
```

### TypeScript - OOP

```typescript
type Observer = (data: any) => void;

class Observable {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(data: any): void {
        this.observers.forEach(o => o(data));
    }
}

// Usage
const observable = new Observable();
observable.attach((data) => console.log(`Observer 1: ${data}`));
observable.notify("Event!");
```

### Ruby - OOP

```ruby
class Observable
    def initialize
        @observers = []
    end

    def attach(observer)
        @observers << observer
    end

    def detach(observer)
        @observers.delete(observer)
    end

    def notify(*args)
        @observers.each { |o| o.call(*args) }
    end
end
```

### Java - OOP

```java
interface Observer {
    void update(Object data);
}

class Observable {
    private List<Observer> observers = new ArrayList<>();

    public void attach(Observer o) {
        observers.add(o);
    }

    public void detach(Observer o) {
        observers.remove(o);
    }

    public void notify(Object data) {
        observers.forEach(o -> o.update(data));
    }
}
```

### C# - OOP

```csharp
public interface IObserver
{
    void Update(object data);
}

public class Observable
{
    private readonly List<IObserver> _observers = new();

    public void Attach(IObserver observer) => _observers.Add(observer);

    public void Notify(object data) =>
        _observers.ForEach(o => o.Update(data));
}
```

---

## 2. Strategy Template

### Python - OOP

```python
from abc import ABC, abstractmethod
from typing import Type

class Strategy(ABC):
    @abstractmethod
    def execute(self, data: list) -> list:
        pass

class Context:
    def __init__(self, strategy: Strategy):
        self._strategy = strategy

    def set_strategy(self, strategy: Strategy):
        self._strategy = strategy

    def execute(self, data: list) -> list:
        return self._strategy.execute(data)

# Concrete strategies
class QuickSort(Strategy):
    def execute(self, data: list) -> list:
        return sorted(data)

class ReverseSort(Strategy):
    def execute(self, data: list) -> list:
        return sorted(data, reverse=True)

# Usage
context = Context(QuickSort())
context.execute([3, 1, 2])  # [1, 2, 3]
```

### TypeScript - OOP

```typescript
interface Strategy<T> {
    execute(data: T[]): T[];
}

class Context<T> {
    constructor(private strategy: Strategy<T>) {}

    setStrategy(strategy: Strategy<T>): void {
        this.strategy = strategy;
    }

    execute(data: T[]): T[] {
        return this.strategy.execute(data);
    }
}

class QuickSort implements Strategy<number> {
    execute(data: number[]): number[] {
        return [...data].sort((a, b) => a - b);
    }
}
```

### Ruby - OOP

```ruby
class Strategy
    def execute(data)
        raise NotImplementedError
    end
end

class Context
    def initialize(strategy)
        @strategy = strategy
    end

    def execute(data)
        @strategy.execute(data)
    end
end

class QuickSort < Strategy
    def execute(data)
        data.sort
    end
end
```

### Java - OOP

```java
interface Strategy<T> {
    T[] execute(T[] data);
}

class Context<T> {
    private Strategy<T> strategy;

    public Context(Strategy<T> strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(Strategy<T> strategy) {
        this.strategy = strategy;
    }

    public T[] execute(T[] data) {
        return strategy.execute(data);
    }
}

class QuickSort implements Strategy<Integer> {
    public Integer[] execute(Integer[] data) {
        Arrays.sort(data);
        return data;
    }
}
```

### C# - OOP

```csharp
public interface IStrategy<T>
{
    T[] Execute(T[] data);
}

public class Context<T>
{
    private IStrategy<T> _strategy;

    public Context(IStrategy<T> strategy) => _strategy = strategy;

    public void SetStrategy(IStrategy<T> strategy) => _strategy = strategy;

    public T[] Execute(T[] data) => _strategy.Execute(data);
}

public class QuickSort : IStrategy<int>
{
    public int[] Execute(int[] data)
    {
        Array.Sort(data);
        return data;
    }
}
```

---

## 3. Command Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

    @abstractmethod
    def undo(self):
        pass

class Light:
    def turn_on(self): print("Light ON")
    def turn_off(self): print("Light OFF")

class LightOnCommand(Command):
    def __init__(self, light: Light):
        self._light = light

    def execute(self):
        self._light.turn_on()

    def undo(self):
        self._light.turn_off()

class RemoteControl:
    def __init__(self):
        self._history = []

    def execute_command(self, command: Command):
        command.execute()
        self._history.append(command)

    def undo_last(self):
        if self._history:
            command = self._history.pop()
            command.undo()

# Usage
light = Light()
remote = RemoteControl()
remote.execute_command(LightOnCommand(light))
remote.undo_last()
```

### TypeScript - OOP

```typescript
interface Command {
    execute(): void;
    undo(): void;
}

class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

class RemoteControl {
    private history: Command[] = [];

    executeCommand(command: Command): void {
        command.execute();
        this.history.push(command);
    }

    undoLast(): void {
        const command = this.history.pop();
        command?.undo();
    }
}
```

### Ruby - OOP

```ruby
class Command
    def execute
        raise NotImplementedError
    end

    def undo
        raise NotImplementedError
    end
end

class LightOnCommand < Command
    def initialize(light)
        @light = light
    end

    def execute
        @light.turn_on
    end

    def undo
        @light.turn_off
    end
end
```

### Java - OOP

```java
interface Command {
    void execute();
    void undo();
}

class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOn();
    }

    public void undo() {
        light.turnOff();
    }
}
```

### C# - OOP

```csharp
public interface ICommand
{
    void Execute();
    void Undo();
}

public class LightOnCommand : ICommand
{
    private readonly Light _light;

    public LightOnCommand(Light light) => _light = light;

    public void Execute() => _light.TurnOn();

    public void Undo() => _light.TurnOff();
}
```

---

## 4. State Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class State(ABC):
    @abstractmethod
    def handle(self, context):
        pass

class ConcreteStateA(State):
    def handle(self, context):
        context.set_state(ConcreteStateB())
        return "State A -> State B"

class ConcreteStateB(State):
    def handle(self, context):
        context.set_state(ConcreteStateA())
        return "State B -> State A"

class Context:
    def __init__(self, state: State):
        self._state = state

    def set_state(self, state: State):
        self._state = state

    def request(self):
        return self._state.handle(self)

# Usage
context = Context(ConcreteStateA())
context.request()  # "State A -> State B"
```

### TypeScript - OOP

```typescript
interface State {
    handle(context: Context): string;
}

class ConcreteStateA implements State {
    handle(context: Context): string {
        context.setState(new ConcreteStateB());
        return "State A -> State B";
    }
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    request(): string {
        return this.state.handle(this);
    }
}
```

### Ruby - OOP

```ruby
class State
    def handle(context)
        raise NotImplementedError
    end
end

class ConcreteStateA < State
    def handle(context)
        context.set_state(ConcreteStateB.new)
        "State A -> State B"
    end
end

class Context
    def initialize(state)
        @state = state
    end

    def set_state(state)
        @state = state
    end

    def request
        @state.handle(self)
    end
end
```

### Java - OOP

```java
interface State {
    String handle(Context context);
}

class ConcreteStateA implements State {
    public String handle(Context context) {
        context.setState(new ConcreteStateB());
        return "State A -> State B";
    }
}

class Context {
    private State state;

    public Context(State state) {
        this.state = state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String request() {
        return state.handle(this);
    }
}
```

### C# - OOP

```csharp
public interface IState
{
    string Handle(Context context);
}

public class ConcreteStateA : IState
{
    public string Handle(Context context)
    {
        context.SetState(new ConcreteStateB());
        return "State A -> State B";
    }
}

public class Context
{
    private IState _state;

    public Context(IState state) => _state = state;

    public void SetState(IState state) => _state = state;

    public string Request() => _state.Handle(this);
}
```

---

## 5. Template Method Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class AbstractClass(ABC):
    def template_method(self):
        self.step_one()
        self.step_two()
        self.step_three()

    @abstractmethod
    def step_one(self):
        pass

    @abstractmethod
    def step_two(self):
        pass

    def step_three(self):
        print("Step 3: Default implementation")

class ConcreteClass(AbstractClass):
    def step_one(self):
        print("Concrete: Step 1")

    def step_two(self):
        print("Concrete: Step 2")

# Usage
obj = ConcreteClass()
obj.template_method()
```

### TypeScript - OOP

```typescript
abstract class AbstractClass {
    templateMethod(): void {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    protected abstract stepOne(): void;
    protected abstract stepTwo(): void;

    protected stepThree(): void {
        console.log("Step 3: Default implementation");
    }
}

class ConcreteClass extends AbstractClass {
    protected stepOne(): void {
        console.log("Concrete: Step 1");
    }

    protected stepTwo(): void {
        console.log("Concrete: Step 2");
    }
}
```

### Ruby - OOP

```ruby
class AbstractClass
    def template_method
        step_one
        step_two
        step_three
    end

    def step_one
        raise NotImplementedError
    end

    def step_two
        raise NotImplementedError
    end

    def step_three
        puts "Step 3: Default implementation"
    end
end

class ConcreteClass < AbstractClass
    def step_one
        puts "Concrete: Step 1"
    end

    def step_two
        puts "Concrete: Step 2"
    end
end
```

### Java - OOP

```java
abstract class AbstractClass {
    public final void templateMethod() {
        stepOne();
        stepTwo();
        stepThree();
    }

    protected abstract void stepOne();
    protected abstract void stepTwo();

    protected void stepThree() {
        System.out.println("Step 3: Default implementation");
    }
}

class ConcreteClass extends AbstractClass {
    protected void stepOne() {
        System.out.println("Concrete: Step 1");
    }

    protected void stepTwo() {
        System.out.println("Concrete: Step 2");
    }
}
```

### C# - OOP

```csharp
public abstract class AbstractClass
{
    public void TemplateMethod()
    {
        StepOne();
        StepTwo();
        StepThree();
    }

    protected abstract void StepOne();
    protected abstract void StepTwo();

    protected virtual void StepThree() =>
        Console.WriteLine("Step 3: Default implementation");
}

public class ConcreteClass : AbstractClass
{
    protected override void StepOne() =>
        Console.WriteLine("Concrete: Step 1");

    protected override void StepTwo() =>
        Console.WriteLine("Concrete: Step 2");
}
```

---

## 6. Chain of Responsibility Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class Handler(ABC):
    def __init__(self):
        self._next_handler = None

    def set_next(self, handler):
        self._next_handler = handler
        return handler

    @abstractmethod
    def handle(self, request):
        if self._next_handler:
            return self._next_handler.handle(request)
        return None

class ConcreteHandlerA(Handler):
    def handle(self, request):
        if request == "A":
            return f"Handler A: {request}"
        return super().handle(request)

class ConcreteHandlerB(Handler):
    def handle(self, request):
        if request == "B":
            return f"Handler B: {request}"
        return super().handle(request)

# Usage
handler_a = ConcreteHandlerA()
handler_b = ConcreteHandlerB()
handler_a.set_next(handler_b)
handler_a.handle("B")  # "Handler B: B"
```

### TypeScript - OOP

```typescript
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

class ConcreteHandlerA implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): string | null {
        if (request === "A") return `Handler A: ${request}`;
        return this.nextHandler?.handle(request) ?? null;
    }
}
```

### Ruby - OOP

```ruby
class Handler
    def initialize
        @next_handler = nil
    end

    def set_next(handler)
        @next_handler = handler
        handler
    end

    def handle(request)
        raise NotImplementedError
    end
end

class ConcreteHandlerA < Handler
    def handle(request)
        return "Handler A: #{request}" if request == "A"
        @next_handler&.handle(request)
    end
end
```

### Java - OOP

```java
interface Handler {
    Handler setNext(Handler handler);
    String handle(String request);
}

class ConcreteHandlerA implements Handler {
    private Handler nextHandler;

    public Handler setNext(Handler handler) {
        this.nextHandler = handler;
        return handler;
    }

    public String handle(String request) {
        if (request.equals("A")) return "Handler A: " + request;
        return nextHandler != null ? nextHandler.handle(request) : null;
    }
}
```

### C# - OOP

```csharp
public interface IHandler
{
    IHandler SetNext(IHandler handler);
    string Handle(string request);
}

public class ConcreteHandlerA : IHandler
{
    private IHandler _nextHandler;

    public IHandler SetNext(IHandler handler)
    {
        _nextHandler = handler;
        return handler;
    }

    public string Handle(string request) =>
        request == "A"
            ? $"Handler A: {request}"
            : _nextHandler?.Handle(request);
}
```

---

## 7. Mediator Template

### Python - OOP

```python
from abc import ABC, abstractmethod

class Mediator(ABC):
    @abstractmethod
    def notify(self, sender, event):
        pass

class ConcreteMediator(Mediator):
    def __init__(self):
        self._component_a = None
        self._component_b = None

    def register_a(self, component_a):
        self._component_a = component_a

    def register_b(self, component_b):
        self._component_b = component_b

    def notify(self, sender, event):
        if sender == "A" and event == "click":
            self._component_b.react()
        elif sender == "B" and event == "update":
            self._component_a.react()

class ComponentA:
    def __init__(self, mediator=None):
        self._mediator = mediator

    def set_mediator(self, mediator):
        self._mediator = mediator

    def click(self):
        self._mediator.notify(self, "click")

    def react(self):
        print("ComponentA: Reacted")

class ComponentB:
    def __init__(self, mediator=None):
        self._mediator = mediator

    def set_mediator(self, mediator):
        self._mediator = mediator

    def update(self):
        self._mediator.notify(self, "update")

    def react(self):
        print("ComponentB: Reacted")
```

### TypeScript - OOP

```typescript
interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private componentA: ComponentA;
    private componentB: ComponentB;

    notify(sender: object, event: string): void {
        if (sender === this.componentA && event === "click") {
            this.componentB.react();
        }
    }
}

class ComponentA {
    constructor(private mediator: Mediator | null = null) {}

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    click(): void {
        this.mediator?.notify(this, "click");
    }

    react(): void {
        console.log("ComponentA: Reacted");
    }
}
```

### Ruby - OOP

```ruby
class Mediator
    def notify(sender, event)
        raise NotImplementedError
    end
end

class ConcreteMediator < Mediator
    def initialize
        @component_a = nil
        @component_b = nil
    end

    def register_a(component_a)
        @component_a = component_a
    end

    def notify(sender, event)
        if sender == @component_a && event == "click"
            @component_b.react
        end
    end
end
```

### Java - OOP

```java
interface Mediator {
    void notify(Object sender, String event);
}

class ConcreteMediator implements Mediator {
    private ComponentA componentA;
    private ComponentB componentB;

    public void registerA(ComponentA componentA) {
        this.componentA = componentA;
    }

    public void notify(Object sender, String event) {
        if (sender == componentA && "click".equals(event)) {
            componentB.react();
        }
    }
}
```

### C# - OOP

```csharp
public interface IMediator
{
    void Notify(object sender, string event);
}

public class ConcreteMediator : IMediator
{
    private ComponentA _componentA;

    public void RegisterA(ComponentA componentA) => _componentA = componentA;

    public void Notify(object sender, string event) =>
        sender == _componentA && event == "click"
            ? _componentB.React()
            : void;
}
```