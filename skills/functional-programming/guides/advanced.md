# Conceitos Avançados de Programação Funcional

Functors, Monads, Applicatives, e outros padrões avançados.

---

## 1. Functors

### Definição
Objetos/estruturas que sabem como aplicar uma função sobre seu valor interno.

### Python

```python
from typing import Generic, TypeVar

T = TypeVar('T')
U = TypeVar('U')

class Box(Generic[T]):
    def __init__(self, value: T):
        self._value = value

    def map(self, func) -> 'Box[U]':
        """Aplica função ao valor interno."""
        return Box(func(self._value))

    def flat_map(self, func) -> 'Box[U]':
        """Para quando a função já retorna Box."""
        return func(self._value)

    def __repr__(self):
        return f"Box({self._value!r})"

# Uso
box = Box(5)
doubled = box.map(lambda x: x * 2)
summed = box.map(lambda x: x + 10)
print(doubled)   # Box(10)
print(summed)    # Box(15)

# Encadear
result = Box(2).map(lambda x: x * 2).map(lambda x: x + 10)
print(result)  # Box(14)
```

### TypeScript

```typescript
// Functor - interface
interface Functor<T> {
    map<U>(fn: (value: T) => U): Functor<U>;
}

// Box Functor
class Box<T> implements Functor<T> {
    constructor(private readonly value: T) {}

    map<U>(fn: (value: T) => U): Box<U> {
        return new Box(fn(this.value));
    }

    // flatMap para Monads
    flatMap<U>(fn: (value: T) => Box<U>): Box<U> {
        return fn(this.value);
    }

    toString(): string {
        return `Box(${this.value})`;
    }
}

// Uso
new Box(5)
    .map((x) => x * 2)
    .map((x) => x + 10)
    .toString(); // "Box(15)"

// Encadear
new Box(2)
    .map((x) => x * 2)
    .map((x) => x + 10); // Box(14)
```

### JavaScript

```javascript
// Box Functor
class Box {
    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return new Box(fn(this._value));
    }

    flatMap(fn) {
        return fn(this._value);
    }

    toString() {
        return `Box(${this._value})`;
    }
}

// Uso
new Box(5)
    .map((x) => x * 2)
    .map((x) => x + 10)
    .toString(); // "Box(15)"
```

---

## 2. Monads

### Definição
Functors que sabem como encadear operações que retornam o próprio tipo.

### Python

```python
class Maybe(Generic[T]):
    """Monad que representa um valor opcional."""
    
    def __init__(self, value: T | None):
        self._value = value
        self._is_nothing = value is None

    @staticmethod
    def just(value) -> 'Maybe[T]':
        return Maybe(value)

    @staticmethod
    def nothing() -> 'Maybe[T]':
        return Maybe(None)

    def map(self, func) -> 'Maybe[U]':
        if self._is_nothing:
            return Maybe.nothing()
        return Maybe.just(func(self._value))

    def flat_map(self, func) -> 'Maybe[U]':
        if self._is_nothing:
            return Maybe.nothing()
        return func(self._value)

    def get_or_else(self, default):
        return self._value if not self._is_nothing else default

    def __repr__(self):
        return "Nothing" if self._is_nothing else f"Just({self._value!r})"

# Uso
Maybe.just(5).map(lambda x: x * 2)  # Just(10)
Maybe.nothing().map(lambda x: x * 2)  # Nothing

Maybe.just(5).flat_map(lambda x: Maybe.just(x * 2))  # Just(10)

# Com get_or_else
Maybe.nothing().get_or_else(0)  # 0
Maybe.just(5).get_or_else(0)  # 5
```

### TypeScript

```typescript
// Maybe Monad
type Maybe<T> = { _tag: 'Just'; value: T } | { _tag: 'Nothing' };

const Maybe = {
    just: <T>(value: T): Maybe<T> => ({ _tag: 'Just', value }),
    nothing: <T>(): Maybe<T> => ({ _tag: 'Nothing' }),
};

const isNothing = <T>(m: Maybe<T>): boolean => m._tag === 'Nothing';

const mapMaybe = <T, U>(
    m: Maybe<T>,
    fn: (value: T) => U
): Maybe<U> =>
    isNothing(m) ? Maybe.nothing() : Maybe.just(fn(m.value));

const flatMapMaybe = <T, U>(
    m: Maybe<T>,
    fn: (value: T) => Maybe<U>
): Maybe<U> =>
    isNothing(m) ? Maybe.nothing() : fn(m.value);

const getOrElse = <T>(m: Maybe<T>, defaultValue: T): T =>
    isNothing(m) ? defaultValue : m.value;

// Uso
mapMaybe(Maybe.just(5), (x) => x * 2); // Just(10)
mapMaybe(Maybe.nothing(), (x) => x * 2); // Nothing

getOrElse(Maybe.nothing(), 0); // 0
getOrElse(Maybe.just(5), 0); // 5
```

### JavaScript

```javascript
// Maybe Monad (funcional)
const Maybe = {
    just: (value) => ({ _tag: 'Just', value }),
    nothing: () => ({ _tag: 'Nothing' }),
};

const isNothing = (m) => m._tag === 'Nothing';

const mapMaybe = (m, fn) =>
    isNothing(m) ? Maybe.nothing() : Maybe.just(fn(m.value));

const flatMapMaybe = (m, fn) =>
    isNothing(m) ? Maybe.nothing() : fn(m.value);

const getOrElse = (m, defaultValue) =>
    isNothing(m) ? defaultValue : m.value;

// Uso
mapMaybe(Maybe.just(5), (x) => x * 2); // Just(10)
mapMaybe(Maybe.nothing(), (x) => x * 2); // Nothing

getOrElse(Maybe.nothing(), 0); // 0
getOrElse(Maybe.just(5), 0); // 5
```

---

## 3. Either Monad

### Definição
Monad que representa sucesso (Right) ou falha (Left).

### Python

```python
class Either(Generic[T, U]):
    """Monad para tratamento de erros."""
    
    def __init__(self, value, is_right=True):
        self._value = value
        self._is_right = is_right

    @staticmethod
    def left(value) -> 'Either[T, U]':
        e = Either(value, is_right=False)
        return e

    @staticmethod
    def right(value) -> 'Either[T, U]':
        return Either(value)

    def map(self, func) -> 'Either[T, U]':
        if not self._is_right:
            return Either.left(self._value)
        return Either.right(func(self._value))

    def flat_map(self, func) -> 'Either[T, U]':
        if not self._is_right:
            return Either.left(self._value)
        return func(self._value)

    def get_or_else(self, default):
        return self._value if self._is_right else default

    def __repr__(self):
        prefix = "Right" if self._is_right else "Left"
        return f"{prefix}({self._value!r})"

# Uso
def safe_divide(a, b):
    if b == 0:
        return Either.left("Division by zero")
    return Either.right(a / b)

Either.right(10).map(lambda x: x * 2)  # Right(20)
Either.left("Error").map(lambda x: x * 2)  # Left(Error)

safe_divide(10, 2).map(lambda x: x + 5)  # Right(10)
safe_divide(10, 0).map(lambda x: x + 5)  # Left(Division by zero)
```

### TypeScript

```typescript
// Either Monad
type Either<L, R> = { _tag: 'Left'; left: L } | { _tag: 'Right'; right: R };

const Either = {
    left: <L, R>(value: L): Either<L, R> => ({ _tag: 'Left', left: value }),
    right: <L, R>(value: R): Either<L, R> => ({ _tag: 'Right', right: value }),
};

const isRight = <L, R>(e: Either<L, R>): boolean => e._tag === 'Right';

const mapEither = <L, R, U>(
    e: Either<L, R>,
    fn: (value: R) => U
): Either<L, U> =>
    isRight(e) ? Either.right(fn(e.right)) : Either.left(e.left);

const flatMapEither = <L, R, U>(
    e: Either<L, R>,
    fn: (value: R) => Either<L, U>
): Either<L, U> =>
    isRight(e) ? fn(e.right) : Either.left(e.left);

// Uso
const safeDivide = (a: number, b: number): Either<string, number> =>
    b === 0
        ? Either.left("Division by zero")
        : Either.right(a / b);

mapEither(safeDivide(10, 2), (x) => x + 5); // Right(10)
mapEither(safeDivide(10, 0), (x) => x + 5); // Left("Division by zero")
```

### JavaScript

```javascript
// Either Monad
const Either = {
    left: (value) => ({ _tag: 'Left', left: value }),
    right: (value) => ({ _tag: 'Right', right: value }),
};

const isRight = (e) => e._tag === 'Right';

const mapEither = (e, fn) =>
    isRight(e) ? Either.right(fn(e.right)) : Either.left(e.left);

const flatMapEither = (e, fn) =>
    isRight(e) ? fn(e.right) : Either.left(e.left);

const safeDivide = (a, b) =>
    b === 0
        ? Either.left("Division by zero")
        : Either.right(a / b);

mapEither(safeDivide(10, 2), (x) => x + 5); // Right(10)
mapEither(safeDivide(10, 0), (x) => x + 5); // Left("Division by zero")
```

---

## 4. Applicative

### Definição
Functors que sabem aplicar funções "embrulhadas" a valores "embrulhados".

### Python

```python
from typing import Callable

class Applicative(Generic[T]):
    def __init__(self, value: T):
        self._value = value

    def map(self, func) -> 'Applicative[U]':
        return Applicative(func(self._value))

    def apply(self, other: 'Applicative[Callable]') -> 'Applicative[U]':
        """Aplica função wrapped a valor wrapped."""
        return other.map(self._value)

    @staticmethod
    def pure(value) -> 'Applicative[T]':
        return Applicative(value)

# Uso
add = Applicative.pure(lambda a, b: a + b)
result = Applicative.pure(5).apply(add)
# Não funciona direto assim - precisamos de lift

# Lift para applicative
def lift_a2(func, a: Applicative, b: Applicative) -> Applicative:
    return a.apply(b.map(func))

# Melhor usar a técnica do functor
def add(a, b): return a + b
lifted_add = Applicative.pure(add)

# Applicative permite usar função com múltiplos args
wrapped_a = Applicative(5)
wrapped_b = Applicative(3)
result = wrapped_a.map(lambda a: lambda b: add(a, b)).apply(wrapped_b)
print(result._value)  # 8
```

### TypeScript

```typescript
// Applicative - interface
interface Applicative<T> {
    map<U>(fn: (value: T) => U): Applicative<U>;
    apply<U>(fn: Applicative<(value: T) => U>): Applicative<U>;
    static of<U>(value: U): Applicative<U>;
}

// Implementação
class Box Applicative<T> {
    constructor(private value: T) {}

    map<U>(fn: (value: T) => U): Box<U> {
        return new Box(fn(this.value));
    }

    apply<U>(fn: Box<(value: T) => U>): Box<U> {
        return fn.map((f) => f(this.value));
    }

    static of<U>(value: U): Box<U> {
        return new Box(value);
    }
}

// Lift para múltiplos args
const liftA2 = <T, U, V>(
    fn: (a: T, b: U) => V,
    a: Box<T>,
    b: Box<U>
): Box<V> =>
    a.map((av) => (bv: U) => fn(av, bv)).apply(b);

const add = (a: number, b: number) => a + b;
liftA2(add, Box.of(5), Box.of(3)); // Box(8)

// Applicative: função com valor wrapped
const wrappedAdd = Box.of((a: number) => (b: number) => a + b);
Box.of(5).ap(wrappedAdd).ap(Box.of(3)); // Box(8)
```

### JavaScript

```javascript
// Box como Applicative
class Box {
    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return new Box(fn(this._value));
    }

    apply(fn) {
        return fn.map((f) => f(this._value));
    }

    static of(value) {
        return new Box(value);
    }
}

// Lift para múltiplos args
const liftA2 = (fn, a, b) =>
    a.map((av) => (bv) => fn(av, bv)).apply(b);

const add = (a, b) => a + b;
liftA2(add, Box.of(5), Box.of(3)); // Box(8)

// Applicative
const wrappedAdd = Box.of((a) => (b) => a + b);
Box.of(5).apply(wrappedAdd).apply(Box.of(3)); // Box(8)
```

---

## 5. Transducers

### Definição
Composição eficiente de transforms que trabalha com qualquer estrutura.

### Python

```python
from functools import reduce
from typing import Callable, Iterator, Generator

# Transducer é uma função que recebe um redutor e retorna um novo redutor
def transducer_map(fn: Callable) -> Callable:
    def inner(reducer: Callable) -> Callable:
        def new_reducer(acc, value):
            return reducer(acc, fn(value))
        return new_reducer
    return inner

def transducer_filter(pred: Callable) -> Callable:
    def inner(reducer: Callable) -> Callable:
        def new_reducer(acc, value):
            if pred(value):
                return reducer(acc, value)
            return acc
        return new_reducer
    return inner

def into(transducer: Callable, initial, iterable: Iterator):
    reducer = transducer(lambda acc, x: acc + [x])
    return reduce(reducer, iterable, initial)

# Uso
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Sem transducers (cria listas intermediárias)
result = list(filter(lambda x: x % 2 == 0,
               map(lambda x: x * 2,
               filter(lambda x: x > 5, data))))
# [12, 16, 20]

# Com transducers (uma única passagem)
transducer = transducer_filter(lambda x: x > 5)(
             transducer_filter(lambda x: x % 2 == 0)(
             transducer_map(lambda x: x * 2)))

result = into(transducer, [], data)
# [12, 16, 20]
```

### TypeScript

```typescript
// Transducer types
type Transducer<T, U> = (
    reducer: (acc: U[], value: T) => U[]
) => (acc: U[], value: T) => U[];

type Reducer<T, U> = (acc: U[], value: T) => U[];

// map transducer
const mapTransducer = <T, U>(
    fn: (value: T) => U
): Transducer<T, U> =>
    (reducer) => (acc, value) => reducer(acc, fn(value));

// filter transducer
const filterTransducer = <T>(
    pred: (value: T) => boolean
): Transducer<T, T> =>
    (reducer) => (acc, value) =>
        pred(value) ? reducer(acc, value) : acc;

// into
const into = <T, U>(
    transducer: Transducer<T, U>,
    initial: U[],
    iterable: T[]
): U[] => {
    const reducer = transducer((acc, value) => [...acc, value]);
    return iterable.reduce(reducer, initial);
};

// Uso
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Com transducers
const transducer = mapTransducer((x: number) => x * 2)(
                 filterTransducer((x: number) => x % 2 === 0)(
                 filterTransducer((x: number) => x > 5)));

into(transducer, [], data); // [12, 16, 20]
```

### JavaScript

```javascript
// Transducer
const mapTransducer = (fn) => (reducer) => (acc, value) =>
    reducer(acc, fn(value));

const filterTransducer = (pred) => (reducer) => (acc, value) =>
    pred(value) ? reducer(acc, value) : acc;

// into
const into = (transducer, initial, iterable) => {
    const reducer = transducer((acc, value) => [...acc, value]);
    return iterable.reduce(reducer, initial);
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Com transducers
const transducer = mapTransducer((x) => x * 2)(
                 filterTransducer((x) => x % 2 === 0)(
                 filterTransducer((x) => x > 5)));

into(transducer, [], data); // [12, 16, 20]
```

---

## 6. Pattern Matching

### Definição
Equivalente funcional ao switch/if-else com decomposition.

### Python

```python
from typing import Union, Any

# Pattern matching simples
def process(value: Union[int, str, None]) -> str:
    match value:
        case int() as n if n > 0:
            return f"Positive: {n}"
        case int() as n if n < 0:
            return f"Negative: {n}"
        case 0:
            return "Zero"
        case str() as s if s.isdigit():
            return f"Number string: {s}"
        case str() as s:
            return f"Text: {s}"
        case None:
            return "Nothing"
        case _:
            return "Unknown"

# Com dataclasses
from dataclasses import dataclass

@dataclass
class Success:
    value: Any

@dataclass
class Failure:
    error: str

def handle_result(result: Union[Success, Failure]) -> str:
    match result:
        case Success(value=value):
            return f"Success: {value}"
        case Failure(error=error):
            return f"Failed: {error}"

handle_result(Success(42))  # "Success: 42"
handle_result(Failure("Not found"))  # "Failed: Not found"
```

### TypeScript

```typescript
// Discriminated unions (pattern matching-like)
type Result<T> =
    | { _tag: 'Success'; value: T }
    | { _tag: 'Failure'; error: string };

const processResult = <T>(result: Result<T>): string => {
    switch (result._tag) {
        case 'Success':
            return `Success: ${result.value}`;
        case 'Failure':
            return `Failed: ${result.error}`;
    }
};

processResult({ _tag: 'Success', value: 42 }); // "Success: 42"
processResult({ _tag: 'Failure', error: 'Not found' }); // "Failed: Not found"

// Com type guards
const isSuccess = <T>(r: Result<T>): r is { _tag: 'Success'; value: T } =>
    r._tag === 'Success';

const isFailure = <T>(r: Result<T>): r is { _tag: 'Failure'; error: string } =>
    r._tag === 'Failure';

const handleResult = <T>(result: Result<T>): string => {
    if (isSuccess(result)) {
        return `Success: ${result.value}`;
    }
    if (isFailure(result)) {
        return `Failed: ${result.error}`;
    }
    return 'Unknown';
};
```

### JavaScript

```javascript
// Tagged unions
const Result = {
    Success: (value) => ({ _tag: 'Success', value }),
    Failure: (error) => ({ _tag: 'Failure', error }),
};

const processResult = (result) => {
    switch (result._tag) {
        case 'Success':
            return `Success: ${result.value}`;
        case 'Failure':
            return `Failed: ${result.error}`;
    }
};

processResult(Result.Success(42)); // "Success: 42"
processResult(Result.Failure('Not found')); // "Failed: Not found"

// Type guards
const isSuccess = (r) => r._tag === 'Success';
const isFailure = (r) => r._tag === 'Failure';
```

---

## 7. Recursion e Tail Recursion

### Python

```python
# Recursion normal
def factorial(n: int) -> int:
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Tail recursion (otimizado pelo interpretador)
def factorial_tail(n: int, acc: int = 1) -> int:
    if n <= 1:
        return acc
    return factorial_tail(n - 1, n * acc)

# Fibonacci
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Fibonacci com memoização
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n: int) -> int:
    if n <= 1:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)

# List processing recursivo
def sum_list(lst: list[int]) -> int:
    if not lst:
        return 0
    return lst[0] + sum_list(lst[1:])

sum_list([1, 2, 3, 4, 5])  # 15
```

### TypeScript

```typescript
// Recursion normal
const factorial = (n: number): number =>
    n <= 1 ? 1 : n * factorial(n - 1);

// Tail recursion
const factorialTail = (n: number, acc: number = 1): number =>
    n <= 1 ? acc : factorialTail(n - 1, n * acc);

// Fibonacci com memoização
const fibMemo = (() => {
    const cache = new Map<number, number>();
    return (n: number): number => {
        if (n <= 1) return n;
        if (cache.has(n)) return cache.get(n)!;
        const result = fibMemo(n - 1) + fibMemo(n - 2);
        cache.set(n, result);
        return result;
    };
})();

// List processing
const sumList = (lst: number[]): number =>
    lst.length === 0 ? 0 : lst[0] + sumList(lst.slice(1));

sumList([1, 2, 3, 4, 5]); // 15
```

### JavaScript

```javascript
// Recursion normal
const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

// Tail recursion
const factorialTail = (n, acc = 1) => n <= 1 ? acc : factorialTail(n - 1, n * acc);

// Fibonacci com memoização
const fibMemo = (() => {
    const cache = new Map();
    return (n) => {
        if (n <= 1) return n;
        if (cache.has(n)) return cache.get(n);
        const result = fibMemo(n - 1) + fibMemo(n - 2);
        cache.set(n, result);
        return result;
    };
})();

// List processing
const sumList = (lst) =>
    lst.length === 0 ? 0 : lst[0] + sumList(lst.slice(1));

sumList([1, 2, 3, 4, 5]); // 15
```

---

## Resumo dos Padrões

| Padrão | Descrição | Uso |
|--------|----------|-----|
| Functor | Aplica função sobre valor wrapped | `box.map(f)` |
| Applicative | Aplica função wrapped a valor wrapped | `box.apply(fn)` |
| Monad | Encadeia operações que retornam o tipo | `box.flatMap(f)` |
| Transducer | Composição eficiente de transforms | `into(transducer, [], data)` |
| Either | Sucesso (Right) ou falha (Left) | `safeDivide(a, b)` |
| Maybe | Valor opcional | `findUser(id).getOrElse(default)` |