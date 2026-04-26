# filter - Exemplos por Linguagem

O `filter` mantém apenas elementos que satisfazem um predicado.

---

## Python

### Básico

```python
# filter com lambda
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4, 6, 8, 10]

# filter com função nomeada
def is_positive(x):
    return x > 0

positives = list(filter(is_positive, [-2, -1, 0, 1, 2]))
# [1, 2]

# filter com None (remove falsy)
values = [1, 0, "hello", "", None, True, False]
filtered = list(filter(None, values))
# [1, "hello", True]
```

### Com Objetos

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    active: bool

users = [
    User("John", True),
    User("Jane", True),
    User("Bob", False),
]

# Filtrar ativos
active_users = list(filter(lambda u: u.active, users))

# Filtrar por nome
def has_name_prefix(user, prefix):
    return user.name.startswith(prefix)

j_users = list(filter(lambda u: has_name_prefix(u, "J"), users))
```

### Com Dicionários

```python
users = [
    {"name": "John", "age": 30, "active": True},
    {"name": "Jane", "age": 25, "active": True},
    {"name": "Bob", "age": 35, "active": False},
]

# Filtrar maiores de idade
adults = list(filter(lambda u: u["age"] >= 18, users))

# Filtrar múltiplos critérios
active_adults = list(filter(
    lambda u: u["active"] and u["age"] >= 18,
    users
))
```

### filterfalse (inverter)

```python
from itertools import filterfalse

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odds = list(filterfalse(lambda x: x % 2 == 0, numbers))
# [1, 3, 5, 7, 9]
```

---

## TypeScript

### Básico

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter com lambda
const evens = numbers.filter((x) => x % 2 === 0);
// [2, 4, 6, 8, 10]

// filter com função
const isPositive = (x: number): boolean => x > 0;
numbers.filter(isPositive);

// filter com index
const firstThree = numbers.filter((_, i) => i < 3);
// [1, 2, 3]
```

### Com Objetos

```typescript
interface User {
    name: string;
    active: boolean;
}

const users: User[] = [
    { name: "John", active: true },
    { name: "Jane", active: true },
    { name: "Bob", active: false },
];

// Filtrar ativos
const activeUsers = users.filter((u) => u.active);

// Filtrar por nome
const jUsers = users.filter((u) => u.name.startsWith("J"));
```

### Com Tipos (Type Guard)

```typescript
const values: (string | number)[] = ["hello", 1, "", 2, 0];

// filter strings
const strings = values.filter(
    (v): v is string => typeof v === "string"
);
// ["hello", ""]

// filter truthy
const truthy = values.filter(Boolean);
// ["hello", 1, 2]
```

### Inverter Filter

```typescript
const evens = numbers.filter((x) => x % 2 === 0);
const odds = numbers.filter((x) => x % 2 !== 0);

// Ou usar negate
const not =
    <T>(pred: (x: T) => boolean) =>
    (x: T) =>
        !pred(x);

const odds2 = numbers.filter(not((x) => x % 2 === 0));
```

---

## JavaScript

### Básico

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter com lambda
const evens = numbers.filter((x) => x % 2 === 0);
// [2, 4, 6, 8, 10]

// filter com função
const isPositive = (x) => x > 0;
numbers.filter(isPositive);

// filter com index
const firstThree = numbers.filter((_, i) => i < 3);
// [1, 2, 3]
```

### Com Objetos

```javascript
const users = [
    { name: "John", active: true },
    { name: "Jane", active: true },
    { name: "Bob", active: false },
];

// Filtrar ativos
const activeUsers = users.filter((u) => u.active);

// Filtrar por nome
const jUsers = users.filter((u) => u.name.startsWith("J"));
```

### Casos Práticos

```javascript
// Filter truthy
const values = ["hello", 1, "", 0, null, true];
const truthy = values.filter(Boolean);
// ["hello", 1, true]

// Filter unique
const items = [1, 2, 2, 3, 3, 3];
const unique = items.filter((v, i, arr) => arr.indexOf(v) === i);
// [1, 2, 3]

// Filter por data
const recentItems = items.filter((item) => item.date > cutoffDate);
```

---

## Comparação

| Aspecto | Python | TypeScript | JavaScript |
|---------|--------|-----------|-----------|
| Sintaxe | `filter(fn, iter)` | `arr.filter(fn)` | `arr.filter(fn)` |
| Retorno | iterator/list | Array | Array |
| Type guard | Não | Sim | Não |

---

## Dicas

### Filter + Map (Compose)

```python
# Python - fazer em uma passada
evens_doubled = [x * 2 for x in numbers if x % 2 == 0]

# Duas passadas (menos eficiente)
evens = filter(lambda x: x % 2 == 0, numbers)
evens_doubled = map(lambda x: x * 2, evens)
```

```typescript
// TypeScript - fazer em uma passada
const evensDoubled = numbers
    .filter((x) => x % 2 === 0)
    .map((x) => x * 2);

// Ou com reduce (uma passada)
const evensDoubled = numbers.reduce(
    (acc, x) => x % 2 === 0 ? [...acc, x * 2] : acc,
    []
);
```

### Evite Side Effects no Filter

```python
# ✗ Ruim
results = []
filter(lambda x: (results.append(x), True), items)

# ✓ Bom
results = [x for x in items if condition(x)]
```

---

## Referências Rápidas

```python
# Python
filter(fn, iterable) -> filter object
list(filter(None, iterable)) # remove falsy
filterfalse(fn, iterable) # inverter
```

```typescript
// TypeScript/JavaScript
arr.filter(fn) -> Array
arr.filter((item, index, arr) => boolean)
arr.filter(Boolean) # remove falsy
```