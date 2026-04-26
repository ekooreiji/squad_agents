# map - Exemplos por Linguagem

O `map` aplica uma função a cada elemento de uma coleção.

---

## Python

### Básico

```python
# map com lambda
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
# [2, 4, 6, 8, 10]

# map com função nomeada
def square(x):
    return x ** 2

squares = list(map(square, numbers))
# [1, 4, 9, 16, 25]

# map com múltiplos iterables
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
# [11, 22, 33]
```

### Com Objetos

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    email: str

users = [
    User("John", "john@example.com"),
    User("Jane", "jane@example.com"),
]

# Extrair nomes
names = list(map(lambda u: u.name, users))
# ["John", "Jane"]

# Transformar
def to_dict(user):
    return {"name": user.name, "email": user.email}

user_dicts = list(map(to_dict, users))
# [{"name": "John", "email": "john@example.com"}, ...]
```

### Com Generators

```python
# map em generator (lazy)
def gen_numbers():
    yield from range(1, 6)

doubled = list(map(lambda x: x * 2, gen_numbers()))
# [2, 4, 6, 8, 10]

# map em string
name = "john"
upper = list(map(str.upper, name))
# ['J', 'O', 'H', 'N']
```

---

## TypeScript

### Básico

```typescript
const numbers = [1, 2, 3, 4, 5];

// map com lambda
const doubled = numbers.map((x) => x * 2);
// [2, 4, 6, 8, 10]

// map com função nomeada
const square = (x: number): number => x ** 2;
const squares = numbers.map(square);
// [1, 4, 9, 16, 25]

// map com index
const indexed = numbers.map((x, i) => ({ value: x, index: i }));
// [{value: 1, index: 0}, {value: 2, index: 1}, ...]
```

### Com Objetos

```typescript
interface User {
    name: string;
    email: string;
}

const users: User[] = [
    { name: "John", email: "john@example.com" },
    { name: "Jane", email: "jane@example.com" },
];

// Extrair nomes
const names = users.map((u) => u.name);
// ["John", "Jane"]

// Transformar
const toDict = (u: User) => ({ name: u.name, email: u.email });
const userDicts = users.map(toDict);
```

### Com Tipos Genéricos

```typescript
// map que não altera tipo
const identity = <T>(arr: T[]): T[] => arr.map((x) => x);

// map com transformação de tipo
interface UserDTO {
    name: string;
}

interface UserEntity {
    id: string;
    name: string;
}

const toEntity = (dto: UserDTO): UserEntity => ({
    id: crypto.randomUUID(),
    name: dto.name,
});

const entities = [UserDTO].map(toEntity);
```

---

## JavaScript

### Básico

```javascript
const numbers = [1, 2, 3, 4, 5];

// map com lambda
const doubled = numbers.map((x) => x * 2);
// [2, 4, 6, 8, 10]

// map com função nomeada
const square = (x) => x ** 2;
const squares = numbers.map(square);
// [1, 4, 9, 16, 25]

// map com index
const indexed = numbers.map((x, i) => ({ value: x, index: i }));
// [{value: 1, index: 0}, {value: 2, index: 1}, ...]
```

### Com Objetos

```javascript
const users = [
    { name: "John", email: "john@example.com" },
    { name: "Jane", email: "jane@example.com" },
];

// Extrair nomes
const names = users.map((u) => u.name);
// ["John", "Jane"]

// Transformar
const toDict = (u) => ({ name: u.name, email: u.email });
const userDicts = users.map(toDict);
```

### Casos Práticos

```javascript
// String para array de chars
"hello".split("").map((c) => c.toUpperCase());
// ["H", "E", "L", "L", "O"]

// Query params
const params = { page: 1, limit: 10 };
const entries = Object.entries(params).map(([k, v]) => `${k}=${v}`);
// ["page=1", "limit=10"]

// Fetch multiple URLs
const urls = [
    "https://api.example.com/users",
    "https://api.example.com/posts",
];
const fetches = urls.map((url) => fetch(url).then((r) => r.json()));
```

---

## Comparação

| Aspecto | Python | TypeScript | JavaScript |
|---------|--------|-----------|-----------|
| Sintaxe | `map(fn, iter)` | `arr.map(fn)` | `arr.map(fn)` |
| Tipo de retorno | list/iterator | Array | Array |
| Index disponível | Sim (segundo arg) | Sim | Sim |
| Lazy | Não (sem itertools) | Não | Não |

---

## Dicas

### Use Composição

```python
# Python - composição
def process(items):
    return list(map(fn2, map(fn1, items)))

# TypeScript
const process = (items) => items.map(fn1).map(fn2);
```

### Evite map com Side Effects

```python
# ✗ Ruim
list(map(lambda x: print(x) or x, items))

# ✓ Bom
for item in items:
    print(item)
```

### Map vs List Comprehension

```python
# map
list(map(lambda x: x * 2, range(5)))

# comprehension (mais Pythonic)
[x * 2 for x in range(5)]
```

---

## Referências Rápidas

```python
# Python
map(fn, iterable) -> iterator
map(fn, iter1, iter2, ...) -> iterator
list(map(...)) # converter para lista
```

```typescript
// TypeScript/JavaScript
arr.map(fn) -> Array
arr.map((item, index) => ...)
arr.map((item, index, arr) => ...)
```