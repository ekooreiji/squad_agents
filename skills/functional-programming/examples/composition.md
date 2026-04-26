# Composition - Exemplos por Linguagem

Composition combina funções pequenas em funções maiores.

---

## Python

### Compose Básico

```python
from functools import reduce

# Compose (right to left)
def compose(*fns):
    if not fns:
        return lambda x: x
    return reduce(lambda f, g: lambda x: f(g(x)), fns)

# Pipe (left to right)
def pipe(*fns):
    if not fns:
        return lambda x: x
    return reduce(lambda f, g: lambda x: g(f(x))), fns)

# Uso
double = lambda x: x * 2
add_ten = lambda x: x + 10
square = lambda x: x ** 2

# compose: square(add_ten(double(3))) = square(16) = 256
pipeline = compose(square, add_ten, double)
pipeline(3)  # 256

# pipe: square(add_ten(double(3))) = square(16) = 256 (mesmo resultado)
pipeline = pipe(double, add_ten, square)
pipeline(3)  # 256
```

### Compose com Múltiplos Args

```python
from functools import reduce

def compose(*fns):
    def composed(*args):
        result = fns[-1](*args)
        for fn in reversed(fns[:-1]):
            result = fn(result)
        return result
    return composed

# Função com múltiplos args
add = lambda a, b: a + b
multiply = lambda a, b: a * b

pipeline = compose(
    lambda x: x + 1,
    lambda x: x * 2,
)

# Uso
result = pipeline(5)  # (5 * 2) + 1 = 11
```

### Compose com Objetos

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
    active: bool

# Transformações
def to_upper(user):
    return User(user.name.upper(), user.age, user.active)

def activate(user):
    return User(user.name, user.age, True)

def set_adult(user):
    if user.age < 18:
        return User(user.name, 18, user.active)
    return user

# Compor transformações
transform = compose(
    set_adult,
    activate,
    to_upper,
)

user = User("john", 15, False)
transform(user)  # User(name="JOHN", age=18, active=True)
```

### Ramda-style

```python
# pip install python-ramda
from ramda import compose, pipe, map, filter

# Com map e filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Pipeline funcional
result = pipe(
    lambda x: filter(lambda n: n > 5, x),
    lambda x: map(lambda n: n * 2, x),
    lambda x: filter(lambda n: n % 2 == 0, x),
)(numbers)

# Usando R combinators
from ramda import complement, juxt

# Complemento
is_even = lambda n: n % 2 == 0
is_odd = complement(is_even)

# Juxt (juxtaposition)
get_metrics = juxt([
    lambda x: min(x),
    lambda x: max(x),
    lambda x: sum(x),
])

min_val, max_val, total = get_metrics(numbers)
```

---

## TypeScript

### Compose Básico

```typescript
// Compose (right to left)
const compose =
    <T>(...fns: Function[]) =>
    (value: T) =>
        fns.reduceRight((acc, fn) => fn(acc), value);

// Pipe (left to right)
const pipe =
    <T>(...fns: Function[]) =>
    (value: T) =>
        fns.reduce((acc, fn) => fn(acc), value);

const double = (x: number) => x * 2;
const addTen = (x: number) => x + 10;
const square = (x: number) => x ** 2;

// compose: square(addTen(double(3))) = 256
const pipeline = compose(square, addTen, double);
pipeline(3); // 256

// pipe: double(addTen(square(3))) = 38
const pipelinePipe = pipe(double, addTen, square);
pipelinePipe(3); // 38
```

### Compose com Tipos

```typescript
type NumberFn = (x: number) => number;

const compose =
    (...fns: NumberFn[]) =>
    (value: number): number =>
        fns.reduceRight((acc, fn) => fn(acc), value);

// Uso
const double: NumberFn = (x) => x * 2;
const addTen: NumberFn = (x) => x + 10;
const square: NumberFn = (x) => x ** 2;

const process = compose(double, addTen, square);
process(3); // square(addTen(double(3))) = square(16) = 256
```

### Compose com Objetos

```typescript
interface User {
    name: string;
    age: number;
    active: boolean;
}

// Transformações
const toUpper = (user: User): User => ({
    ...user,
    name: user.name.toUpperCase(),
});

const activate = (user: User): User => ({
    ...user,
    active: true,
});

const setAdult = (user: User): User =>
    user.age < 18 ? { ...user, age: 18 } : user;

// Compose
const transform = (user: User): User =>
    activate(setAdult(toUpper(user)));

// Uso
const user: User = { name: "john", age: 15, active: false };
transform(user); // { name: "JOHN", age: 18, active: true }
```

### Libraries

```typescript
// Ramda
import { compose, pipe } from "ramda";

const process = pipe(
    (x: number[]) => x.filter((n) => n > 5),
    (x: number[]) => x.map((n) => n * 2),
    (x: number[]) => x.reduce((a, b) => a + b, 0)
);

process([1, 2, 3, 4, 5, 6]); // 22
```

---

## JavaScript

### Compose Básico

```javascript
// Compose (right to left)
const compose = (...fns) => (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Pipe (left to right)
const pipe = (...fns) => (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x ** 2;

// compose
const pipeline = compose(square, addTen, double);
pipeline(3); // 256

// pipe
const pipelinePipe = pipe(double, addTen, square);
pipelinePipe(3); // 38
```

### Compose com Objetos

```javascript
// Transformações
const toUpper = (user) => ({
    ...user,
    name: user.name.toUpperCase(),
});

const activate = (user) => ({
    ...user,
    active: true,
});

const setAdult = (user) =>
    user.age < 18 ? { ...user, age: 18 } : user;

// Compose
const transform = (user) =>
    activate(setAdult(toUpper(user)));

// Uso
const user = { name: "john", age: 15, active: false };
transform(user); // { name: "JOHN", age: 18, active: true }
```

### Compose com Arrays

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pipeline
const process = pipe(
    (arr) => arr.filter((n) => n > 5),
    (arr) => arr.map((n) => n * 2),
    (arr) => arr.filter((n) => n % 2 === 0),
    (arr) => arr.reduce((a, b) => a + b, 0)
);

process(numbers); // 48
```

---

## Comparação

| Aspecto | Python | TypeScript | JavaScript |
|---------|--------|-----------|-----------|
| Compose | `compose(f, g)(x)` | `compose(f, g)(x)` | `compose(f, g)(x)` |
| Direction | right→left | right→left | right→left |
| Pipe | `pipe(f, g)(x)` | `pipe(f, g)(x)` | `pipe(f, g)(x)` |
| Direction | left→right | left→right | left→right |

---

## Dicas

### Ordem das Funções

```python
# compose: execute da direita para esquerda
# compose(f, g, h)(x) = f(g(h(x)))

# pipe: execute da esquerda para direita
# pipe(f, g, h)(x) = h(g(f(x)))
```

### Currying + Compose

```python
# Com curry, compose fica mais limpo
from functools import partial

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# Função currificada
add_10 = partial(add, 10)
double = partial(multiply, 2)

# Pipeline
pipe(double, add_10)(5)  # add_10(double(5)) = 15
```

```typescript
const currying = (fn) => (a) => (b) => fn(a, b);
const add = currying((a: number, b: number) => a + b);
const multiply = currying((a: number, b: number) => a * b);

const add10 = add(10);
const double = multiply(2);

pipe(double, add10)(5); // 15
```

### Point-free Style

```python
# ✗ Verbose
def process(data):
    return filter_business(filter_active(map_transform(data)))

# ✓ Point-free
process = compose(
    filter_business,
    filter_active,
    map_transform
)
```

---

## Referências Rápidas

```python
# Python
compose(*fns) # right to left
pipe(*fns)  # left to right
```

```typescript
// TypeScript/JavaScript
compose(...fns) // right to left
pipe(...fns)  // left to right
```