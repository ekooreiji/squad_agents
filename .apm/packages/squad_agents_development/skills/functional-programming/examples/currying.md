# Currying - Exemplos por Linguagem

Currying transforma funções com múltiplos argumentos em cadeias de funções com um argumento.

---

## Python

### Básico

```python
# Sem curry
def add(a, b):
    return a + b

add(2, 3)  # 5

# Com curry (manual)
def add_curried(a):
    def inner(b):
        return a + b
    return inner

add_curried(2)(3)  # 5

# Partial (similar ao curry)
from functools import partial

add_10 = partial(add, 10)
add_10(5)  # 15
```

### Curry Function

```python
from typing import Callable, TypeVar, Any

T = TypeVar('T')
R = TypeVar('R')

def curry(func: Callable) -> Callable:
    """Transforma função em versão currificada."""
    num_args = func.__code__.co_argcount
    
    def curried(*args):
        if len(args) >= num_args:
            return func(*args)
        def next_curry(*more_args):
            return curried(*(args + more_args))
        return next_curry
    
    return curried

@curry
def add(a, b):
    return a + b

@curry
def multiply(a, b, c):
    return a * b * c

add(2)(3)       # 5
multiply(2)(3)(4)  # 24
```

### Currying com Múltiplos Args

```python
def curry(fn):
    """Curry para função com múltiplos argumentos."""
    arity = fn.__code__.co_argcount
    
    if arity == 0:
        return fn()
    
    def curried(*args):
        if len(args) >= arity:
            return fn(*args[:arity])
        return lambda *more: curried(*(args + more))
    
    return curried

@curry
def add(a, b, c):
    return a + b + c

# Uso
add(1)(2)(3)   # 6
add(1, 2)(3)  # 6
add(1)(2, 3)   # 6

# Exemplo prático
@curry
def map_fn(fn, iterable):
    return list(map(fn, iterable))

@curry
def filter_fn(pred, iterable):
    return list(filter(pred, iterable))

map_fn(lambda x: x * 2)([1, 2, 3])      # [2, 4, 6]
filter_fn(lambda x: x > 1)([1, 2, 3])       # [2, 3]
```

### Uncurry

```python
def uncurry(curried_fn):
    """Converte função currificada para versão normal."""
    def uncurried(*args):
        result = curried_fn
        for arg in args:
            result = result(arg)
        return result
    return uncurried

add_curried = curry(lambda a, b: a + b)
add_normal = uncurry(add_curried)
add_normal(2, 3)  # 5
```

---

## TypeScript

### Básico

```typescript
// Curry manual
const add = (a: number) => (b: number): number => a + b;

add(2)(3); // 5

// Com múltiplos args
const multiply = (a: number) => (b: number) => (c: number): number =>
    a * b * c;

multiply(2)(3)(4); // 24

// Curry genérico
const curry =
    <A, B, R>(fn: (a: A, b: B) => R) =>
    (a: A) =>
    (b: B) =>
        fn(a, b);

const add = curry((a: number, b: number) => a + b);
add(2)(3); // 5
```

### Curry Genérico

```typescript
// Curry 2 args
type Curried2<A, B, R> = (a: A) => (b: B) => R;

const curry2 =
    <A, B, R>(fn: (a: A, b: B) => R) =>
    (a: A) =>
    (b: B) =>
        fn(a, b);

// Curry 3 args
type Curried3<A, B, C, R> = (a: A) => (b: B) => (c: C) => R;

const curry3 =
    <A, B, C, R>(fn: (a: A, b: B, c: C) => R) =>
    (a: A) =>
    (b: B) =>
    (c: C) =>
        fn(a, b, c);

// Uso
const add = curry2((a: number, b: number) => a + b);
const multiply = curry3(
    (a: number, b: number, c: number) => a * b * c
);

add(2)(3);              // 5
multiply(2)(3)(4);       // 24
```

### Curry com Ramda

```typescript
import { curry } from "ramda";

const add = curry((a: number, b: number) => a + b);
const multiply = curry((a: number, b: number, c: number) => a * b * c);

add(2)(3);               // 5
add(2, 3);              // 5
multiply(2)(3)(4);       // 24
multiply(2, 3)(4);      // 24
```

### Currying Prático

```typescript
// map currificada
const map = <T, U>(fn: (x: T) => U) => (arr: T[]): U[] =>
    arr.map(fn);

// filter currificada
const filter = <T>(pred: (x: T) => boolean) => (arr: T[]): T[] =>
    arr.filter(pred);

// compose com curry
const compose = <T, U, V>(
    f: (x: U) => V,
    g: (x: T) => U
) => (x: T): V => f(g(x));

// Uso
const double = (x: number) => x * 2;
const addTen = (x: number) => x + 10;

const process = compose(addTen, double);
process(5); // 20

// Com array methods currificados
const numbers = [1, 2, 3, 4, 5];
numbers
    .map(double)
    .filter((x) => x > 4);
```

---

## JavaScript

### Básico

```javascript
// Curry manual
const add = (a) => (b) => a + b;

add(2)(3); // 5

// Com múltiplos args
const multiply = (a) => (b) => (c) => a * b * c;

multiply(2)(3)(4); // 24

// Curry genérico
const curry = (fn) => (a) => (b) => fn(a, b);

const add = curry((a, b) => a + b);
add(2)(3); // 5
```

### Curry Genérico

```javascript
// Curry para 2 args
const curry2 = (fn) => (a) => (b) => fn(a, b);

// Curry para 3 args
const curry3 = (fn) => (a) => (b) => (c) => fn(a, b, c);

// Curry variádico
const curry = (fn) => {
    const arity = fn.length;
    return function curried(...args) {
        if (args.length >= arity) {
            return fn(...args);
        }
        return (...more) => curried(...args, ...more);
    };
};

const add = curry((a, b, c) => a + b + c);
add(1)(2)(3);  // 6
add(1, 2)(3);  // 6
add(1)(2, 3);  // 6
```

### Curry Prático

```javascript
// map currificado
const map = (fn) => (arr) => arr.map(fn);

// filter currificado
const filter = (pred) => (arr) => arr.filter(pred);

// Uso
const double = (x) => x * 2;
const isEven = (x) => x % 2 === 0;

const numbers = [1, 2, 3, 4, 5];

// Pipeline
numbers
    .map(double)
    .filter(isEven); // [4, 8]

// Com curry
pipe(
    map(double),
    filter(isEven)
)(numbers); // [4, 8]
```

---

## Comparação

| Aspecto | Python | TypeScript | JavaScript |
|---------|--------|-----------|-----------|
| Sintaxe | `fn(a)(b)` | `fn(a)(b)` | `fn(a)(b)` |
| Suporte nativo | Parcial | Não | Não |
| Libraries | `toolz`, `pyramda` | `ramda`, `lodash/fp` | `ramda`, `lodash/fp` |

---

## Dicas

### Quando Usar Currying

```python
# ✗ Sem curry
process_users(users, lambda u: u.name)
process_users(users, lambda u: u.email)

# ✓ Com curry
get_name = property(lambda u: u.name)
get_email = property(lambda u: u.email)

process_users(users, get_name)
process_users(users, get_email)
```

### Partial + Currying

```python
# São similares
from functools import partial

add = lambda a, b: a + b
add_10_partial = partial(add, 10)
add_10_curried = (lambda a: lambda b: a + b)(10)

add_10_partial(5)  # 15
add_10_curried(5)  # 15
```

### Composition + Currying

```python
# Composition funciona bem com curry
@curry
def add(a, b):
    return a + b

@curry
def multiply(a, b):
    return a * b

double = multiply(2)
add_10 = add(10)

# Compose
from functools import reduce

compose = lambda *fns: reduce(
    lambda f, g: lambda x: f(g(x)), fns
)

process = compose(add_10, double)
process(5)  # add_10(double(5))) = 20
```

---

## Referências Rápidas

```python
# Python
@curry
def add(a, b): return a + b
add(2)(3)  # 5
```

```typescript
// TypeScript
const add = (a) => (b) => a + b;
add(2)(3); // 5
```

```javascript
// JavaScript
const add = (a) => (b) => a + b;
add(2)(3); // 5
```