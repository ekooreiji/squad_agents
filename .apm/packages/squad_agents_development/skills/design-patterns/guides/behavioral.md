# Padrões Comportamentais (Behavioral)

Padrões que tratam da comunicação entre objetos.

---

## 1. Observer

### Propósito
Definir dependência um-para-muitos entre objetos, quando um muda, todos são notificados.

### Quando Usar
- Eventos e notificações
- UI reativa
- Sistemas pub/sub

### Python - OOP

```python
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify(self, data):
        for observer in self._observers:
            observer.update(data)

class Observer:
    def update(self, data):
        print(f"Received: {data}")

# Uso
subject = Subject()
subject.attach(Observer())
subject.attach(Observer())
subject.notify("Hello!")
```

### Python - Funcional

```python
from typing import Callable

def create_subject():
    observers = []

    def attach(fn: Callable):
        observers.append(fn)

    def notify(data):
        for fn in observers:
            fn(data)

    return attach, notify

on_notify, emit = create_subject()
on_notify(lambda data: print(f"A: {data}"))
on_notify(lambda data: print(f"B: {data}"))
emit("Hello!")  # A: Hello! / B: Hello!
```

### TypeScript - OOP

```typescript
class Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(data: string): void {
        this.observers.forEach(o => o.update(data));
    }
}

interface Observer {
    update(data: string): void;
}

class ConcreteObserver implements Observer {
    update(data: string): void {
        console.log(`Received: ${data}`);
    }
}
```

### TypeScript - Funcional

```typescript
type Observer = (data: string) => void;

const createSubject = () => {
    const observers: Observer[] = [];

    return {
        subscribe: (fn: Observer) => observers.push(fn),
        notify: (data: string) => observers.forEach(fn => fn(data)),
    };
};

const { subscribe, notify } = createSubject();
subscribe(data => console.log(`A: ${data}`));
subscribe(data => console.log(`B: ${data}`));
notify("Hello!");
```

### Ruby - OOP

```ruby
class Subject
    def initialize
        @observers = []
    end

    def attach(observer)
        @observers << observer
    end

    def notify(data)
        @observers.each { |o| o.update(data) }
    end
end

class Observer
    def update(data)
        puts "Received: #{data}"
    end
end
```

### Java - OOP

```java
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String data);
}

class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void attach(Observer o) {
        observers.add(o);
    }

    public void notify(String data) {
        observers.forEach(o -> o.update(data));
    }
}

class ConcreteObserver implements Observer {
    public void update(String data) {
        System.out.println("Received: " + data);
    }
}
```

### C# - OOP

```csharp
public interface IObserver
{
    void Update(string data);
}

public class Subject
{
    private List<IObserver> _observers = new List<IObserver>();

    public void Attach(IObserver observer) => _observers.Add(observer);

    public void Notify(string data) =>
        _observers.ForEach(o => o.Update(data));
}

public class ConcreteObserver : IObserver
{
    public void Update(string data) =>
        Console.WriteLine($"Received: {data}");
}
```

---

## 2. Strategy

### Propósito
Definir família de algoritmos, encapsular cada um, e torná-los intercambiáveis.

### Quando Usar
- Múltiplos algoritmos para tarefa
- Trocar algoritmo em runtime
- Evitar conditionais

### Python - OOP

```python
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data): pass

class QuickSort(SortStrategy):
    def sort(self, data):
        return sorted(data)  # simplified

class MergeSort(SortStrategy):
    def sort(self, data):
        return sorted(data)  # simplified

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy):
        self._strategy = strategy

    def sort(self, data):
        return self._strategy.sort(data)

# Uso
sorter = Sorter(QuickSort())
sorter.sort([3, 1, 2])
```

### Python - Funcional

```python
from typing import Callable, List

SortFn = Callable[[List[int]], List[int]]

def quick_sort(data: List[int]) -> List[int]:
    return sorted(data)

def merge_sort(data: List[int]) -> List[int]:
    return sorted(data)

def sort_data(data: List[int], strategy: SortFn) -> List[int]:
    return strategy(data)

sort_data([3, 1, 2], quick_sort)
```

### TypeScript - OOP

```typescript
interface SortStrategy<T> {
    sort(data: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
    sort(data: T[]): T[] {
        return [...data].sort();
    }
}

class Sorter<T> {
    constructor(private strategy: SortStrategy<T>) {}

    setStrategy(strategy: SortStrategy<T>): void {
        this.strategy = strategy;
    }

    sort(data: T[]): T[] {
        return this.strategy.sort(data);
    }
}

const sorter = new Sorter(new QuickSort());
sorter.sort([3, 1, 2]);
```

### TypeScript - Funcional

```typescript
type SortFn = <T>(data: T[]) => T[];

const quickSort: SortFn = data => [...data].sort();
const mergeSort: SortFn = data => [...data].sort();

const sortData = <T>(data: T[], strategy: SortFn) => strategy(data);
sortData([3, 1, 2], quickSort);
```

### Ruby - OOP

```ruby
class SortStrategy
    def sort(data)
        raise NotImplementedError
    end
end

class QuickSort < SortStrategy
    def sort(data)
        data.sort
    end
end

class Sorter
    def initialize(strategy)
        @strategy = strategy
    end

    def sort(data)
        @strategy.sort(data)
    end
end
```

### Java - OOP

```java
interface SortStrategy<T> {
    T[] sort(T[] data);
}

class QuickSort<T> implements SortStrategy<T> {
    public T[] sort(T[] data) {
        Arrays.sort(data);
        return data;
    }
}

class Sorter<T> {
    private SortStrategy<T> strategy;

    public Sorter(SortStrategy<T> strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(SortStrategy<T> strategy) {
        this.strategy = strategy;
    }

    public T[] sort(T[] data) {
        return strategy.sort(data);
    }
}
```

### C# - OOP

```csharp
public interface ISortStrategy<T>
{
    T[] Sort(T[] data);
}

public class QuickSort<T> : ISortStrategy<T>
{
    public T[] Sort(T[] data)
    {
        Array.Sort(data);
        return data;
    }
}

public class Sorter<T>
{
    private ISortStrategy<T> _strategy;

    public Sorter(ISortStrategy<T> strategy)
    {
        _strategy = strategy;
    }

    public void SetStrategy(ISortStrategy<T> strategy) =>
        _strategy = strategy;

    public T[] Sort(T[] data) => _strategy.Sort(data);
}
```

---

## 3. Command

### Propósito
Encapsular requisição como objeto, permitindoparametrizaçãocustomizada.

### Quando Usar
- Undo/redo
- Transações
- Filas de comandos

### Python - OOP

```python
class Command(ABC):
    @abstractmethod
    def execute(self): pass

class Light:
    def turn_on(self): return "Light ON"
    def turn_off(self): return "Light OFF"

class LightOnCommand(Command):
    def __init__(self, light):
        self._light = light
    def execute(self):
        return self._light.turn_on()

class RemoteControl:
    def __init__(self):
        self._commands = []

    def execute_command(self, command):
        result = command.execute()
        self._commands.append(command)
        return result

# Uso
light = Light()
remote = RemoteControl()
result = remote.execute_command(LightOnCommand(light))
print(result)  # "Light ON"
```

### TypeScript - OOP

```typescript
interface Command {
    execute(): string;
}

class Light {
    turnOn(): string { return "Light ON"; }
    turnOff(): string { return "Light OFF"; }
}

class LightOnCommand implements Command {
    constructor(private light: Light) {}
    execute(): string { return this.light.turnOn(); }
}

class RemoteControl {
    private commands: Command[] = [];

    executeCommand(command: Command): string {
        const result = command.execute();
        this.commands.push(command);
        return result;
    }
}
```

### Ruby - OOP

```ruby
class Command
    def execute
        raise NotImplementedError
    end
end

class Light
    def turn_on; "Light ON"; end
    def turn_off; "Light OFF"; end
end

class LightOnCommand < Command
    def initialize(light)
        @light = light
    end

    def execute
        @light.turn_on
    end
end
```

### Java - OOP

```java
interface Command {
    String execute();
}

class Light {
    public String turnOn() { return "Light ON"; }
}

class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public String execute() {
        return light.turnOn();
    }
}
```

### C# - OOP

```csharp
public interface ICommand
{
    string Execute();
}

public class Light
{
    public string TurnOn() => "Light ON";
}

public class LightOnCommand : ICommand
{
    private Light _light;

    public LightOnCommand(Light light) => _light = light;

    public string Execute() => _light.TurnOn();
}
```

---

## 4. State

### Propósito
Permitir que objeto altere comportamento quando estado interno muda.

### Quando Usar
- Máquinas de estado
- Objetos com estados distintos
- Comportamento condicional complexo

### Python - OOP

```python
class State(ABC):
    @abstractmethod
    def handle(self): pass

class ConcreteStateA(State):
    def handle(self):
        return "State A handling"

class ConcreteStateB(State):
    def handle(self):
        return "State B handling"

class Context:
    def __init__(self, state: State):
        self._state = state

    def set_state(self, state):
        self._state = state

    def request(self):
        return self._state.handle()

# Uso
context = Context(ConcreteStateA())
print(context.request())  # "State A handling"
context.set_state(ConcreteStateB())
print(context.request())  # "State B handling"
```

### TypeScript - OOP

```typescript
interface State {
    handle(): string;
}

class ConcreteStateA implements State {
    handle(): string { return "State A handling"; }
}

class ConcreteStateB implements State {
    handle(): string { return "State B handling"; }
}

class Context {
    constructor(private state: State) {}

    setState(state: State): void {
        this.state = state;
    }

    request(): string {
        return this.state.handle();
    }
}
```

### Ruby - OOP

```ruby
class State
    def handle
        raise NotImplementedError
    end
end

class ConcreteStateA < State
    def handle
        "State A handling"
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
        @state.handle
    end
end
```

### Java - OOP

```java
interface State {
    String handle();
}

class ConcreteStateA implements State {
    public String handle() {
        return "State A handling";
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
        return state.handle();
    }
}
```

### C# - OOP

```csharp
public interface IState
{
    string Handle();
}

public class ConcreteStateA : IState
{
    public string Handle() => "State A handling";
}

public class Context
{
    private IState _state;

    public Context(IState state) => _state = state;

    public void SetState(IState state) => _state = state;

    public string Request() => _state.Handle();
}
```

---

## 5. Template Method

### Propósito
Definir esqueleto de algoritmo, deixando subclasses implementarem etapas.

### Quando Usar
- Algoritmos com estrutura fixa
- Reutilização de código
- Frameworks

### Python - OOP

```python
from abc import ABC, abstractmethod

class DataMiner(ABC):
    def mine(self):
        data = self.open_file()
        data = self.parse_data(data)
        data = self.analyze_data(data)
        self.process_data(data)
        self.close_file()

    @abstractmethod
    def open_file(self): pass

    @abstractmethod
    def parse_data(self, data): pass

    @abstractmethod
    def analyze_data(self, data): pass

    def process_data(self, data):
        print(f"Processing: {data}")

    def close_file(self):
        print("File closed")

class CSVDataMiner(DataMiner):
    def open_file(self):
        return "CSV data"

    def parse_data(self, data):
        return f"Parsed {data}"

    def analyze_data(self, data):
        return f"Analyzed {data}"
```

### TypeScript - OOP

```typescript
abstract class DataMiner {
    mine(): void {
        const data = this.openFile();
        const parsed = this.parseData(data);
        const analyzed = this.analyzeData(parsed);
        this.processData(analyzed);
        this.closeFile();
    }

    protected abstract openFile(): string;
    protected abstract parseData(data: string): string;
    protected abstract analyzeData(data: string): string;

    protected processData(data: string): void {
        console.log(`Processing: ${data}`);
    }

    protected closeFile(): void {
        console.log("File closed");
    }
}

class CSVDataMiner extends DataMiner {
    protected openFile(): string { return "CSV data"; }
    protected parseData(data: string): string { return `Parsed ${data}`; }
    protected analyzeData(data: string): string { return `Analyzed ${data}`; }
}
```

### Ruby - OOP

```ruby
class DataMiner
    def mine
        data = open_file
        data = parse_data(data)
        data = analyze_data(data)
        process_data(data)
        close_file
    end

    def open_file; raise NotImplementedError; end
    def parse_data(data); raise NotImplementedError; end
    def analyze_data(data); raise NotImplementedError; end

    def process_data(data)
        puts "Processing: #{data}"
    end

    def close_file
        puts "File closed"
    end
end
```

### Java - OOP

```java
abstract class DataMiner {
    public final void mine() {
        String data = openFile();
        data = parseData(data);
        data = analyzeData(data);
        processData(data);
        closeFile();
    }

    protected abstract String openFile();
    protected abstract String parseData(String data);
    protected abstract String analyzeData(String data);

    protected void processData(String data) {
        System.out.println("Processing: " + data);
    }

    protected void closeFile() {
        System.out.println("File closed");
    }
}
```

### C# - OOP

```csharp
public abstract class DataMiner
{
    public void Mine()
    {
        var data = OpenFile();
        data = ParseData(data);
        data = AnalyzeData(data);
        ProcessData(data);
        CloseFile();
    }

    protected abstract string OpenFile();
    protected abstract string ParseData(string data);
    protected abstract string AnalyzeData(string data);

    protected void ProcessData(string data) =>
        Console.WriteLine($"Processing: {data}");

    protected void CloseFile() =>
        Console.WriteLine("File closed");
}
```

---

## 6. Chain of Responsibility

### Propósito
Evitar acoplamento entre remetente e receptor, passando requisição pela corrente.

### Quando Usar
- Múltiplos manipuladores
- Autorização em cascata
- Validação por etapas

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
    def handle(self, request): pass

class AuthHandler(Handler):
    def handle(self, request):
        if request == "auth":
            return "Authenticating..."
        elif self._next_handler:
            return self._next_handler.handle(request)
        return "Not handled"

class LoggingHandler(Handler):
    def handle(self, request):
        if request == "log":
            return "Logging..."
        elif self._next_handler:
            return self._next_handler.handle(request)
        return "Not handled"

# Uso
auth = AuthHandler()
logging = LoggingHandler()
auth.set_next(logging)
print(auth.handle("log"))  # "Logging..."
```

### TypeScript - OOP

```typescript
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return "Not handled";
    }
}

class AuthHandler extends BaseHandler {
    handle(request: string): string {
        if (request === "auth") return "Authenticating...";
        return super.handle(request);
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

class AuthHandler < Handler
    def handle(request)
        return "Authenticating..." if request == "auth"
        return @next_handler&.handle(request) || "Not handled"
    end
end
```

### Java - OOP

```java
interface Handler {
    Handler setNext(Handler handler);
    String handle(String request);
}

abstract class BaseHandler implements Handler {
    private Handler nextHandler;

    public Handler setNext(Handler handler) {
        this.nextHandler = handler;
        return handler;
    }

    public String handle(String request) {
        if (nextHandler != null) {
            return nextHandler.handle(request);
        }
        return "Not handled";
    }
}

class AuthHandler extends BaseHandler {
    public String handle(String request) {
        if (request.equals("auth")) return "Authenticating...";
        return super.handle(request);
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

public abstract class BaseHandler : IHandler
{
    protected IHandler _nextHandler;

    public IHandler SetNext(IHandler handler)
    {
        _nextHandler = handler;
        return handler;
    }

    public virtual string Handle(string request) =>
        _nextHandler?.Handle(request) ?? "Not handled";
}

public class AuthHandler : BaseHandler
{
    public override string Handle(string request) =>
        request == "auth" ? "Authenticating..." : base.Handle(request);
}
```

---

## 7. Mediator

### Propósito
Definir objeto que encapsula como conjunto de objetos interage.

### Quando Usar
- Comunicação complexa
- Reduzir dependências
- Centralizar controle

### Python - OOP

```python
class Mediator(ABC):
    @abstractmethod
    def notify(self, sender, event): pass

class ChatRoom(Mediator):
    def __init__(self):
        self._users = []

    def add_user(self, user):
        self._users.append(user)
        user.set_mediator(self)

    def notify(self, sender, event):
        for user in self._users:
            if user != sender:
                user.receive(event)

class User:
    def __init__(self, name):
        self.name = name
        self._mediator = None

    def set_mediator(self, mediator):
        self._mediator = mediator

    def send(self, message):
        print(f"{self.name} sends: {message}")
        self._mediator.notify(self, message)

    def receive(self, message):
        print(f"{self.name} received: {message}")
```

### TypeScript - OOP

```typescript
interface Mediator {
    notify(sender: User, event: string): void;
}

class ChatRoom implements Mediator {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        user.setMediator(this);
    }

    notify(sender: User, event: string): void {
        this.users
            .filter(u => u !== sender)
            .forEach(u => u.receive(event));
    }
}

class User {
    private mediator: Mediator | null = null;

    constructor(public name: string) {}

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator?.notify(this, message);
    }

    receive(message: string): void {
        console.log(`${this.name} received: ${message}`);
    }
}
```

### Java - OOP

```java
interface Mediator {
    void notify(User sender, String event);
}

class ChatRoom implements Mediator {
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
        user.setMediator(this);
    }

    public void notify(User sender, String event) {
        users.stream()
            .filter(u -> u != sender)
            .forEach(u -> u.receive(event));
    }
}
```

---

## 8. Iterator

### Propósito
Fornecer forma de acessar elementos последовательность sem expor estrutura.

### Quando Usar
- Traversing coleções
- Abstrair estrutura
- Suporte a different iterators

### Python - OOP

```python
class Iterator:
    def __init__(self, collection):
        self._collection = collection
        self._index = 0

    def has_next(self):
        return self._index < len(self._collection)

    def next(self):
        item = self._collection[self._index]
        self._index += 1
        return item

# Uso
iterator = Iterator([1, 2, 3])
while iterator.has_next():
    print(iterator.next())
```

### Python - Funcional

```python
from typing import Iterator, Iterable

def iterate(collection: Iterable) -> Iterator:
    return iter(collection)

for item in iterate([1, 2, 3]):
    print(item)
```

### TypeScript - OOP

```typescript
interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}

class ArrayIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(private collection: T[]) {}

    hasNext(): boolean {
        return this.index < this.collection.length;
    }

    next(): T {
        return this.collection[this.index++];
    }
}
```

### Ruby - OOP

```ruby
class Iterator
    def initialize(collection)
        @collection = collection
        @index = 0
    end

    def has_next?
        @index < @collection.size
    end

    def next_item
        item = @collection[@index]
        @index += 1
        item
    end
end
```

### Java - OOP

```java
interface Iterator<T> {
    boolean hasNext();
    T next();
}

class ArrayIterator<T> implements Iterator<T> {
    private int index = 0;
    private T[] collection;

    public ArrayIterator(T[] collection) {
        this.collection = collection;
    }

    public boolean hasNext() {
        return index < collection.length;
    }

    public T next() {
        return collection[index++];
    }
}
```

---

## 9. Memento

### Propósito
Capturar e externalizar estado interno sem violar encapsulamento.

### Quando Usar
- Undo/redo
- Checkpoints
- Histórico de estados

### Python - OOP

```python
class Memento:
    def __init__(self, state):
        self._state = state

    def get_state(self):
        return self._state

class Originator:
    def __init__(self, state):
        self._state = state

    def save_to_memento(self):
        return Memento(self._state)

    def restore_from_memento(self, memento):
        self._state = memento.get_state()

class Caretaker:
    def __init__(self, originator):
        self._originator = originator
        self._mementos = []

    def backup(self):
        self._mementos.append(self._originator.save_to_memento())

    def undo(self):
        if self._mementos:
            self._mementos.pop()
```

### TypeScript - OOP

```typescript
class Memento {
    constructor(private state: string) {}

    getState(): string {
        return this.state;
    }
}

class Originator {
    constructor(private state: string) {}

    saveToMemento(): Memento {
        return new Memento(this.state);
    }

    restoreFromMemento(memento: Memento): void {
        this.state = memento.getState();
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    constructor(private originator: Originator) {}

    backup(): void {
        this.mementos.push(this.originator.saveToMemento());
    }

    undo(): void {
        if (this.mementos.length > 0) {
            this.originator.restoreFromMemento(this.mementos.pop()!);
        }
    }
}
```

### Java - OOP

```java
class Memento {
    private final String state;

    public Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}

class Originator {
    private String state;

    public void setState(String state) {
        this.state = state;
    }

    public Memento saveToMemento() {
        return new Memento(state);
    }

    public void restoreFromMemento(Memento memento) {
        state = memento.getState();
    }
}
```

---

## Resumo

| Padrão | Quando Usar | Python | TypeScript | Ruby | Java | C# |
|--------|-----------|--------|--------|------|------|-----|
| **Observer** | Eventos/notify | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Strategy** | Trocar algoritmos | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Command** | Undo/transações | ✓ | ✓ | ✓ | ✓ | ✓ |
| **State** | Máquinas estado | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Template Method** | Esqueleto algoritmo | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Chain of Resp.** | Cascata handlers | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Mediator** | Comunicação central | ✓ | ✓ | - | ✓ | - |
| **Iterator** | Traversing | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Memento** | Undo/checkpoints | ✓ | ✓ | - | ✓ | - |