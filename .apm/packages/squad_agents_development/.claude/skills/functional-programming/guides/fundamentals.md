# Conceitos Fundamentais de Programação Funcional

Conceitos core de FP com exemplos práticos em Python, TypeScript e JavaScript.

---

## 1. Funções Puras

### Definição
Uma função pura é aquela que:
- Retorna o mesmo resultado para os mesmos argumentos
- Não tem side effects (não modifica estado externo)
- Não depende de estado externo

### Python

```python
# Pura - sempre retorna o mesmo resultado para os mesmos inputs
def add(a: int, b: int) -> int:
    return a + b

# Pura - não modifica entrada
def calculate_total(items: list[dict]) -> float:
    return sum(item['price'] for item in items)

# Pura
def filter_active(items: list[dict]) -> list[dict]:
    return [item for item in items if item.get('active', False)]

# Impura - usa print (side effect)
def add_and_print(a, b):
    print(f"Adding {a} + {b}")
    return a + b

# Impura - usa globals
counter = 0
def increment():
    global counter
    counter += 1
    return counter
```

### TypeScript

```typescript
// Pura
const add = (a: number, b: number): number => a + b;

// Pura
const calculateTotal = (items: { price: number }[]): number =>
    items.reduce((sum, item) => sum + item.price, 0);

// Pura
const filterActive = <T>(items: T[], predicate: (item: T) => boolean): T[] =>
    items.filter(predicate);

// Pura - usa closure
const createCounter = () => {
    let count = 0;
    return () => ++count;
};

// Impura - modifica estado externo
let total = 0;
const addToTotal = (value: number): number => {
    total += value;
    return total;
};
```

### JavaScript

```javascript
// Pura
const add = (a, b) => a + b;

// Pura
const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

// Pura
const filterActive = (items, predicate) => items.filter(predicate);

// Pura com closure
const createCounter = () => {
    let count = 0;
    return () => ++count;
};

// Impura - usa Date.now (resultado varia)
const getTimestamp = () => Date.now();
```

---

## 2. Imutabilidade

### Definição
Dados nunca mudam após criados. Novas estruturas são criadas ao modificar.

### Python

```python
from dataclasses import dataclass

# Imutável com dataclass
@dataclass(frozen=True)
class User:
    name: str
    email: str

# Imutável com tuple
def add_item(items: tuple, item) -> tuple:
    return (*items, item)

# Mutável - problema
def add_item_bad(items: list, item):
    items.append(item)
    return items

# Uso
user = User("John", "john@example.com")
# user.name = "Jane"  # Erro! frozen=True

# Novo objeto
new_user = User("Jane", user.email)

# Lista
numbers = (1, 2, 3)
new_numbers = (*numbers, 4)  # (1, 2, 3, 4)
```

### TypeScript

```typescript
// Imutável - spread
const addItemGood = (items: readonly string[], item: string): string[] => [
    ...items,
    item,
];

// Object freeze
const frozenUser = Object.freeze({
    name: "John",
    email: "john@example.com",
});

// Type imutável
type ImmutableUser = Readonly<{
    readonly name: string;
    readonly email: string;
}>;

// Novo objeto
const updatedUser = { ...frozenUser, name: "Jane" };

// Mutável - problema
const addItemBad = (items: string[], item: string): string[] => {
    items.push(item);
    return items;
};
```

### JavaScript

```javascript
// Imutável - spread
const addItemGood = (items, item) => [...items, item];

// Object freeze
const frozenUser = Object.freeze({ name: "John", email: "john@example.com" });

// Novo objeto
const updatedUser = { ...frozenUser, name: "Jane" };

// Mutável - problema
const addItemBad = (items, item) => {
    items.push(item);
    return items;
};
```

---

## 3. High-Order Functions

### Definição
Funções que recebem ou retornam outras funções.

### Python

```python
# Função que recebe função
def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 5)  # 20

# Função que retorna função
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)
print(double(5))   # 10
print(triple(5))   # 15

# Exemplo prático
def process_users(users, transform):
    return [transform(user) for user in users]

users = [{'name': 'John', 'age': 30}, {'name': 'Jane', 'age': 25}]
names = process_users(users, lambda u: u['name'])  # ['John', 'Jane']
ages = process_users(users, lambda u: u['age']) # [30, 25]
```

### TypeScript

```typescript
// Função que recebe função
const applyTwice = <T>(func: (x: T) => T, value: T): T =>
    func(func(value));

const double = (x: number) => x * 2;
applyTwice(double, 5); // 20

// Função que retorna função
const multiplier = (factor: number) => (x: number) => x * factor;

const doubleFn = multiplier(2);
const tripleFn = multiplier(3);
doubleFn(5); // 10
tripleFn(5); // 15

// Exemplo prático
const processUsers = <T, R>(
    users: T[],
    transform: (user: T) => R
): R[] => users.map(transform);

const users = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
const names = processUsers(users, (u) => u.name); // ["John", "Jane"]
```

### JavaScript

```javascript
// Função que recebe função
const applyTwice = (func, value) => func(func(value));
const double = (x) => x * 2;
applyTwice(double, 5); // 20

// Função que retorna função
const multiplier = (factor) => (x) => x * factor;

const doubleFn = multiplier(2);
const tripleFn = multiplier(3);
doubleFn(5); // 10
tripleFn(5);  // 15

// Exemplo prático
const processUsers = (users, transform) => users.map(transform);
const names = processUsers(users, (u) => u.name);
```

---

## 4. Funções de Primeira Classe

### Definição
Funções são valores (first-class citizens):
- Podem ser atribuídas a variáveis
- Podem ser passadas como argumentos
- Podem ser retornadas de outras funções

### Python

```python
# Atribuir a variável
add = lambda a, b: a + b
result = add(2, 3)  # 5

# Retornar de função
def create_greeter(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

hello = create_greeter("Hello")
hello("John")  # "Hello, John!"

# Guardar em lista
operations = [
    lambda x: x + 1,
    lambda x: x * 2,
    lambda x: x ** 2,
]

results = [op(5) for op in operations]  # [6, 10, 25]
```

### TypeScript

```typescript
// Atribuir a variável
const add = (a: number, b: number): number => a + b;
add(2, 3); // 5

// Retornar de função
const createGreeter = (greeting: string) => (name: string): string =>
    `${greeting}, ${name}!`;

const hello = createGreeter("Hello");
hello("John"); // "Hello, John!"

// Guardar em array
const operations: ((x: number) => number)[] = [
    (x) => x + 1,
    (x) => x * 2,
    (x) => x ** 2,
];

operations.map((op) => op(5)); // [6, 10, 25]
```

### JavaScript

```javascript
// Atribuir a variável
const add = (a, b) => a + b;
add(2, 3); // 5

// Retornar de função
const createGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

const hello = createGreeter("Hello");
hello("John"); // "Hello, John!"

// Guardar em array
const operations = [
    (x) => x + 1,
    (x) => x * 2,
    (x) => x ** 2,
];

operations.map((op) => op(5)); // [6, 10, 25]
```

---

## 5. Closure

### Definição
Função que "lembra" o ambiente onde foi criada.

### Python

```python
# Closure
def create_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

counter = create_counter()
counter()  # 1
counter()  # 2
counter()  # 3

# Factory de funções
def power_fn(base):
    def power(exp):
        return base ** exp
    return power

square = power_fn(2)
cube = power_fn(3)

square(4)  # 16
cube(4)    # 64
```

### TypeScript

```typescript
// Closure
const createCounter = () => {
    let count = 0;
    return () => ++count;
};

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Factory de funções
const powerFn = (base: number) => (exp: number) => base ** exp;

const square = powerFn(2);
const cube = powerFn(3);

square(4); // 16
cube(4);   // 64
```

### JavaScript

```javascript
// Closure
const createCounter = () => {
    let count = 0;
    return () => ++count;
};

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Factory de funções
const powerFn = (base) => (exp) => base ** exp;

const square = powerFn(2);
const cube = powerFn(3);

square(4); // 16
cube(4);   // 64
```

---

## 6. Partial Application

### Definição
Aplicar parte dos argumentos agora, resto depois.

### Python

```python
from functools import partial

def log(level, message):
    return f"[{level}] {message}"

# Partial
info_log = partial(log, "INFO")
error_log = partial(log, "ERROR")

info_log("User logged in")   # "[INFO] User logged in"
error_log("Invalid input")   # "[ERROR] Invalid input"

# Com lambda
def multiply(a, b, c):
    return a * b * c

double = lambda x: multiply(2, x, 1)
double(5)  # 10
```

### TypeScript

```typescript
// Partial com closure
const log = (level: string) => (message: string): string =>
    `[${level}] ${message}`;

const infoLog = log("INFO");
const errorLog = log("ERROR");

infoLog("User logged in");  // "[INFO] User logged in"
errorLog("Invalid input"); // "[ERROR] Invalid input"

// Generic partial
const partial = (fn: Function, ...firstArgs: any[]) =>
    (...lastArgs: any[]) =>
        fn(...firstArgs, ...lastArgs);

const multiply = (a: number, b: number, c: number) => a * b * c;
const double = partial(multiply, 2);
double(5, 1); // 10
```

### JavaScript

```javascript
// Partial com closure
const log = (level) => (message) => `[${level}] ${message}`;

const infoLog = log("INFO");
const errorLog = log("ERROR");

infoLog("User logged in");  // "[INFO] User logged in"
errorLog("Invalid input"); // "[ERROR] Invalid input"

// Generic partial
const partial = (fn, ...firstArgs) => (...lastArgs) => fn(...firstArgs, ...lastArgs);

const multiply = (a, b, c) => a * b * c;
const double = partial(multiply, 2);
double(5, 1); // 10
```

---

## 7. Pipe e Composition

### Definição
Encadear funções: o output de uma é o input da próxima.

### Python

```python
from functools import reduce

def pipe(*functions):
    return reduce(lambda f, g: lambda x: g(f(x)), functions)

def double(x): return x * 2
def add_ten(x): return x + 10
def square(x): return x ** 2

# Compose functions left to right
def compose(*functions):
    return reduce(lambda f, g: lambda x: g(f(x)), functions)

# 3 -> double(3) -> 6
#    -> add_ten(6) -> 16
#    -> square(16) -> 256
pipeline = pipe(double, add_ten, square)
pipeline(3)  # 256
```

### TypeScript

```typescript
// Pipe - left to right
const pipe = (...fns: Function[]) =>
    (value: any) =>
        fns.reduce((acc, fn) => fn(acc), value);

const double = (x: number) => x * 2;
const addTen = (x: number) => x + 10;
const square = (x: number) => x ** 2;

const pipeline = pipe(double, addTen, square);
pipeline(3); // square(addTen(double(3))) = 256

// Compose - right to left
const compose = (...fns: Function[]) =>
    (value: any) =>
        fns.reduceRight((acc, fn) => fn(acc), value);

const composePipeline = compose(double, addTen, square);
composePipeline(3); // double(addTen(square(3))) = 38
```

### JavaScript

```javascript
// Pipe - left to right
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x ** 2;

const pipeline = pipe(double, addTen, square);
pipeline(3); // 256

// Compose - right to left
const compose = (...fns) => (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const composePipeline = compose(double, addTen, square);
composePipeline(3); // 38
```

---

## 8. Lazy Evaluation

### Definição
Avaliar apenas quando necessário (lazy = "preguiçoso").

### Python

```python
from typing import Iterator, Generator

def naturals() -> Generator[int, None, None]:
    n = 1
    while True:
        yield n
        n += 1

# Lazy generators
evens = (x for x in naturals() if x % 2 == 0)

# Toma apenas 5 elementos
from itertools import islice
take = lambda n, iterable: list(islice(iterable, n))
take(5, evens)  # [2, 4, 6, 8, 10]

# Lazy map/filter
numbers = iter([1, 2, 3, 4, 5])
doubled = (x * 2 for x in numbers)
take(3, doubled)  # [2, 4, 6]
```

### TypeScript

```typescript
// Generator (lazy)
function* naturals(): Generator<number> {
    let n = 1;
    while (true) yield n++;
}

// Gerador lazy
const evens = (function* () {
    let n = 2;
    while (true) {
        yield n;
        n += 2;
    }
})();

// Tomar n elementos
const take = <T>(n: number, iter: Generator<T>): T[] => {
    const result: T[] = [];
    for (let i = 0; i < n; i++) {
        result.push(iter.next().value);
    }
    return result;
};

take(5, evens); // [2, 4, 6, 8, 10]

// Iterable lazy
const numbers = [1, 2, 3, 4, 5].values();
const lazy = Array.from(numbers).map((x) => x * 2);
```

### JavaScript

```javascript
// Generator (lazy)
function* naturals() {
    let n = 1;
    while (true) yield n++;
}

// Gerador lazy
const evens = (function* () {
    let n = 2;
    while (true) {
        yield n;
        n += 2;
    }
})();

// Tomar n elementos
const take = (n, iter) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(iter.next().value);
    }
    return result;
};

take(5, evens); // [2, 4, 6, 8, 10]

// Iterable lazy
const numbers = [1, 2, 3, 4, 5];
const lazy = numbers.values(); // Iterable
```

---

## Resumo Rápido

| Conceito | Chave |
|---------|-------|
| Função Pura | Sem side effects |
| Imutabilidade | Não modifica, cria novo |
| High-Order | Funções como args/retorno |
| Closure | Lembra ambiente |
| Partial | Aplicar args aos poucos |
| Composition | Pipe/Compose |
| Lazy | Avaliar quando necessário |