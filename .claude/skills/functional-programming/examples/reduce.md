# reduce - Exemplos por Linguagem

O `reduce` acumula valores de uma coleção em um único valor.

---

## Python

### Básico

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Soma
total = reduce(lambda acc, x: acc + x, numbers, 0)
# 15

# Multiplicação
product = reduce(lambda acc, x: acc * x, numbers, 1)
# 120

# Concatenação
words = ["Hello", " ", "World"]
sentence = reduce(lambda acc, x: acc + x, words, "")
# "Hello World"
```

### Com Objetos

```python
from dataclasses import dataclass
from functools import reduce

@dataclass
class User:
    name: str
    age: int

users = [
    User("John", 30),
    User("Jane", 25),
    User("Bob", 35),
]

# Soma das idades
total_age = reduce(
    lambda acc, user: acc + user.age,
    users,
    0
)
# 90

# Encontrar usuário mais velho
oldest = reduce(
    lambda acc, user: user if user.age > acc.age else acc,
    users,
    users[0]
)
```

### Exemplos Práticos

```python
# Agrupar por chave
from collections import defaultdict

items = [
    {"type": "fruit", "name": "apple"},
    {"type": "vegetable", "name": "carrot"},
    {"type": "fruit", "name": "banana"},
]

grouped = reduce(
    lambda acc, item: (
        acc[item["type"]].append(item["name"]),
        acc
    ) or acc,
    items,
    defaultdict(list)
)
# {"fruit": ["apple", "banana"], "vegetable": ["carrot"]}

# Contar ocorrências
words = ["apple", "banana", "apple", "orange", "banana", "apple"]
counts = reduce(
    lambda acc, word: {**acc, word: acc.get(word, 0) + 1},
    words,
    {}
)
# {"apple": 3, "banana": 2, "orange": 1}

# Criar dicionário
users = [("John", 30), ("Jane", 25)]
user_dict = reduce(
    lambda acc, (name, age): {**acc, name: age},
    users,
    {}
)
# {"John": 30, "Jane": 25}
```

###reduce Right

```python
from functools import reduce

#reduce da esquerda para direita
reduce(lambda a, b: a + b, [1, 2, 3], 0)
# ((0 + 1) + 2) + 3 = 6

#reduce right da direita para esquerda
reduce(lambda a, b: a + b, [1, 2, 3], 0)
# (1 + (2 + (3 + 0))) = 6

# Diferença em strings
from functools import reduce as rf

rf(lambda a, b: f"({a}-{b})", ["1", "2", "3"], "0")
# ((0-1)-2)-3)  # esquerda
```

---

## TypeScript

### Básico

```typescript
import { reduce } from "ramda";

const numbers = [1, 2, 3, 4, 5];

// Soma - sem biblioteca
const total = numbers.reduce((acc, x) => acc + x, 0);
// 15

// Multiplicação
const product = numbers.reduce((acc, x) => acc * x, 1);
// 120

// Com tipagem
const sumTyped = numbers.reduce(
    (acc: number, x: number): number => acc + x,
    0
);
```

### Com Objetos

```typescript
interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
];

// Soma das idades
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// 90

// Encontrar usuário mais velho
const oldest = users.reduce(
    (acc, user) => (user.age > acc.age ? user : acc),
    users[0]
);
```

### Exemplos Práticos

```typescript
// Agrupar por chave
interface Item {
    type: string;
    name: string;
}

const items: Item[] = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
];

const grouped = items.reduce(
    (acc, item) => ({
        ...acc,
        [item.type]: [...(acc[item.type] || []), item.name],
    }),
    {} as Record<string, string[]>
);
// { fruit: ["apple", "banana"], vegetable: ["carrot"] }

// Contar ocorrências
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counts = words.reduce(
    (acc, word) => ({
        ...acc,
        [word]: (acc[word] || 0) + 1,
    }),
    {} as Record<string, number>
);
// { apple: 3, banana: 2, orange: 1 }

// Criar mapa
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
const userMap = users.reduce(
    (acc, user) => ({ ...acc, [user.id]: user }),
    {} as Record<string, User>
);
```

---

## JavaScript

### Básico

```javascript
const numbers = [1, 2, 3, 4, 5];

// Soma
const total = numbers.reduce((acc, x) => acc + x, 0);
// 15

// Multiplicação
const product = numbers.reduce((acc, x) => acc * x, 1);
// 120

// Concatenação
const words = ["Hello", " ", "World"];
const sentence = words.reduce((acc, word) => acc + word, "");
// "Hello World"
```

### Com Objetos

```javascript
const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
];

// Soma das idades
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// 90

// Encontrar usuário mais velho
const oldest = users.reduce(
    (acc, user) => (user.age > acc.age ? user : acc),
    users[0]
);
```

### Casos Práticos

```javascript
// Agrupar por chave
const items = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
];

const grouped = items.reduce((acc, item) => ({
    ...acc,
    [item.type]: [...(acc[item.type] || []), item.name],
}), {});

// Contar ocorrências
const words = ["apple", "banana", "apple"];
const counts = words.reduce((acc, word) => ({
    ...acc,
    [word]: (acc[word] || 0) + 1,
}), {});
// { apple: 2, banana: 1 }

// Flatten
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// [1, 2, 3, 4, 5]
```

---

## Comparação

| Aspecto | Python | TypeScript | JavaScript |
|---------|--------|-----------|-----------|
| Sintaxe | `reduce(fn, iter, init)` | `arr.reduce(fn, init)` | `arr.reduce(fn, init)` |
| Valor inicial | Opcional | Obrigatório | Opcional (default undef) |
| Direction | Esquerda→Direita | Esquerda→Direita | Esquerda→Direita |

---

## Dicas

### Sempre Forneça Valor Inicial

```python
# ✗ Perigoso - pode falhar
reduce(lambda a, b: a + b, [])  # TypeError

# ✓ Seguro
reduce(lambda a, b: a + b, [], 0)
```

```typescript
// ✗ Perigoso
[].reduce((acc, x) => acc + x); // TypeError

// ✓ Seguro
[].reduce((acc, x) => acc + x, 0); // 0
```

### Uma Passada (vs Map + Filter)

```python
# ✗ Duas passadas
evens = list(filter(lambda x: x % 2 == 0, numbers))
sum_evens = sum(evens)

# ✓ Uma passagem
sum_evens = reduce(
    lambda acc, x: acc + x if x % 2 == 0 else acc,
    numbers,
    0
)
```

### Compose com reduce

```python
# Compose (right to left)
def compose(*fns):
    return reduce(lambda f, g: lambda x: f(g(x)), fns)

# Pipe (left to right)
def pipe(*fns):
    return reduce(lambda f, g: lambda x: g(f(x)), fns)
```

---

## Referências Rápidas

```python
# Python
reduce(fn, iterable, initial)
reduce(lambda acc, x: ..., initial, items)
```

```typescript
// TypeScript/JavaScript
arr.reduce((acc, x) => ..., initial)
arr.reduce((acc, x, i) => ..., initial)
arr.reduce((acc, x, i, arr) => ..., initial)
```