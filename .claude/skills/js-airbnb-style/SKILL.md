---
name: js-airbnb-style
description: Airbnb JavaScript/TypeScript Style Guide com ESLint + Prettier
---

# Airbnb JavaScript/TypeScript Style Guide

Referência completa das convenções de código do Airbnb para JavaScript e TypeScript.

---

## 1. Configuração

### 1.1 Instalação

```bash
npm install --save-dev eslint @eslint/eslintrc eslint-config-airbnb-base eslint-config-airbnb-typescripttypescript-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
```

### 1.2 ESLint Config (.eslintrc.js)

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
}
```

### 1.3 Prettier Config (.prettierrc)

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "tabWidth": 2,
  "semi": true,
  "printWidth": 100
}
```

---

## 2. JavaScript (ES6+)

### 2.1 Code Layout

- **Indentação**: 2 espaços
- **Line length**: 100 caracteres
- **Arquivos**: UTF-8
- **Line endings**: LF

```javascript
// ✓ Correto
const foo = function (bar) {
  return bar
}

if (foo) {
  bar()
}

const obj = {
  a: 1,
  b: 2,
}

// ✗ Incorreto
const foo = function(bar){
    return bar;
}

if (foo){
  bar();
}
```

### 2.2 Blank Lines

```javascript
// ✓ Correto
class MyClass {
  constructor() {}

  method() {}
}

const HELLO = 'hi'

// ✗ Incorreto - sem linhas em branco entre membros
class MyClass {
  constructor() {}
  method() {}
}
```

### 2.3 Naming Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|--------|
| Variáveis/Funções | camelCase | `getUser`, `totalCount` |
| Classes | PascalCase | `UserService`, `ApiClient` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_BASE` |
| Arquivos | kebab-case | `user-service.ts`, `api-client.js` |
| Componentes React | PascalCase | `UserProfile.tsx` |

```javascript
// ✓ Correto
const userName = 'john'
const MAX_CONNECTIONS = 100

function calculateTotal() {}
class UserService {}

// ✗ Incorreto
const user_name = 'john'
const maxConnections = 100
function calculate_total() {}
class userService {}
```

### 2.4 Variables & Constants

- **Sempre** use `const` ou `let`. Nunca `var`
- Use `const` por padrão, `let` apenas quando necessário reatribuir

```javascript
// ✓ Correto
const name = 'John'
let count = 0

if (condition) {
  count = count + 1
}

// ✗ Incorreto
var name = 'John'
let count = 0
count = count + 1 // reatribuição desnecessária
```

### 2.5 Strings

- **Sempre** use aspas simples `'`
- Use template literals para interpolação

```javascript
// ✓ Correto
const name = 'John'
const message = `Hello, ${name}!`

const html = `
  <div>
    <span>Hello</span>
  </div>
`

// ✗ Incorreto
const name = "John"
const message = 'Hello, ' + name + '!'
```

### 2.6 Numbers

- Use parserInt para conversão de base
- Use Number para conversão explícita

```javascript
// ✓ Correto
const integer = parseInt('15', 10)
const float = parseFloat('1.75')
const num = Number('10')

// ✗ Incorreto
const num = +'15'  // não é explícito
const integer = parseInt('15') // falta base
```

### 2.7 Objects

- Use object shorthand para métodos
- Use trailing comma

```javascript
// ✓ Correto
const foo = {
  a: 1,
  b: 2,
  method() {
    return this.a + this.b
  },
}

// Criação com spread
const obj = { ...oldObj, c: 3 }

// ✗ Incorreto
const foo = {
  a: 1,
  b: 2,
  method: function() {
    return this.a + this.b
  },
}
```

### 2.8 Arrays

```javascript
// ✓ Correto
const arr = [1, 2, 3]
const items = [
  'a',
  'b',
  'c',
]

// Spread
const newArr = [...arr, 4, 5]

// map, filter, reduce
const doubled = arr.map(item => item * 2)
const filtered = arr.filter(item => item > 1)
const sum = arr.reduce((acc, item) => acc + item, 0)

// ✗ Incorreto
const arr = new Array()
const arr = [1, 2, 3,]
```

### 2.9 Destructuring

```javascript
// ✓ Correto
const { a, b } = obj
const { a: renamedA, b: renamedB } = obj

function({ a, b }) {}
function({ a = defaultValue } = {}) {}

// Array destructuring
const [first, second, ...rest] = arr

// ✗ Incorreto
const a = obj.a
const b = obj.b
```

### 2.10 Functions

```javascript
// ✓ Correto - function declaration
function foo(bar) {
  return bar
}

// ✓ Correto - function expression
const foo = function (bar) {
  return bar
}

// ✗ Incorreto - não naming function
const foo = function (bar) {
  return bar
}
```

### 2.11 Arrow Functions

- Use arrow functions para callbacks
- Use parênteses quando houver múltiplos parâmetros
- Prefira implicit return para funções de uma linha

```javascript
// ✓ Correto
arr.map(item => item * 2)
arr.map((item, index) => item * index)
arr.filter(item => item > 1)

// Blocão - use return explícito
arr.map(item => {
  const newItem = item.process()
  return newItem
})

// ✗ Incorreto
arr.map(function(item) { return item * 2 })
arr.map((item) => item * 2)  // parênteses desnecessários
```

### 2.12 Modules (import/export)

- Use import nomeados por padrão
- Use default export apenas quando necessário

```javascript
// ✓ Correto
import { foo, bar } from './module'
import { foo as Foo } from './module'
import DefaultExport from './module'

// Export
export const foo = 'foo'
export function foo() {}

// ✗ Incorreto
import * as Module from './module'
const foo = 'foo'
export default foo
```

### 2.13 Async

- Use `async`/`await` over `promises`/`then`
- Use `try`/`catch` para error handling

```javascript
// ✓ Correto
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// Parallel requests
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
])

// ✗ Incorreto
function fetchData() {
  return fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error(error))
}
```

### 2.14 Classes

```javascript
// ✓ Correto
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} makes a noise.`
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  speak() {
    return `${this.name} barks!`
  }
}

// ✗ Incorreto - PascalCase em method names
class animal {
  constructor(name) {
    this.name = name
  }
}
```

### 2.15 Comments

- Use comentários de linha `//`
- Use JSDoc para funções públicas
- Evite comentários block `/* */`

```javascript
// ✓ Correto
// This function calculates the total
function calculateTotal(items) {
  return items.reduce((acc, item) => acc + item.price, 0)
}

/**
 * Calculate total price of items.
 *
 * @param {Array} items - Array of items
 * @returns {number} Total price
 */
function calculateTotal(items) {}

// ✗ Incorreto
/* This function calculates total */
function calculateTotal() {}
```

---

## 3. TypeScript

### 3.1 Type Annotations

- **Sempre** use type annotations explícitas para parâmetros de função
- Use `any` nunca - em caso extremo, use `unknown`

```typescript
// ✓ Correto
function greet(name: string): string {
  return `Hello, ${name}!`
}

const count: number = 0
const user: User = { name: 'John', age: 30 }

// ✗ Incorreto
function greet(name) {
  return `Hello, ${name}!`
}

const count = 0
const user = { name: 'John', age: 30 }  // sem tipo
```

### 3.2 Interfaces vs Types

- Use `interface` para objetos e contratos
- Use `type` para unions, aliases, primitives

```typescript
// ✓ Correto
interface User {
  id: number
  name: string
  email: string
}

type Status = 'pending' | 'active' | 'done'
type ID = string | number
type Callback = (data: unknown) => void

// ✗ Incorreto - interface para union
interface Status {
  status: 'pending' | 'active'
}

type User {
  id: number
  name: string
}
```

### 3.3 Generics

```typescript
// ✓ Correto
function identity<T>(value: T): T {
  return value
}

interface Repository<T> {
  findById(id: number): Promise<T>
  findAll(): Promise<T[]>
}

// ✗ Incorreto - any
function identity(value: any): any {
  return value
}
```

### 3.4 Enum vs Const Objects

- Prefira `const objects` sobre enums quando possível

```typescript
// ✓ Correto (preferido)
const Status = {
  PENDING: 'pending',
  ACTIVE: 'active',
  DONE: 'done',
} as const

type Status = typeof Status[keyof typeof Status]

// ✗ Incorreto (evite)
enum Status {
  PENDING,
  ACTIVE,
  DONE,
}

// ✗ Se usar enum, use const
const enum Status {
  PENDING = 'pending',
  ACTIVE = 'active',
}
```

### 3.5 Type Guards

```typescript
// ✓ Correto
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    typeof obj.name === 'string'
  )
}

// Using
if (isUser(data)) {
  console.log(data.name)
}

// ✗ Incorreto - não é type guard
function isUser(obj: any): boolean {
  return obj.name !== undefined
}
```

### 3.6 Null Handling

- Use optional chaining `?.` e nullish coalescing `??`

```typescript
// ✓ Correto
const name = user?.name ?? 'Unknown'
const value = obj?.nested?.value

// ✗ Incorreto
const name = user && user.name
const value = obj && obj.nested && obj.nested.value
```

### 3.7 Strict TypeScript Rules

```typescript
// ✓ Correto
function process(value: string | null): string {
  if (value === null) {
    return 'default'
  }
  return value.toUpperCase() // TS sabe que não é null aqui
}

// ✗ Incorreto - assume que nullable é safe
function process(value: string | null): string {
  return value.toUpperCase() // erro: possible null
}
```

---

## 4. Regras Específicas Airbnb

### 4.1 Do's

- Use `const` para todas as variáveis
- Use arrow functions para callbacks
- Use template literals para strings
- Use destructuring para objetos/arrays
- Use spread operator para objetos
- Use async/await para código assíncrono
- Use optional chaining para acesso aninhado
- Use nullish coalescing para defaults
- Use classes para grouping related functionality
- Use type annotations explícitas em TypeScript

### 4.2 Don'ts

- Nunca use `var`
- Nunca use `==` (use `===`)
- Nunca use `any` em TypeScript
- Nunca use `any` em arrays genéricos
- Nunca exporte funções Individuais por padrão
- Nunca use `for-in` ou `for-of` com arrays
- Nunca use `+` para concatenar strings
- Nunca use `arguments`
- Nunca use `Function` constructor
- Never mutate parâmetros

```typescript
// ✗ Incorreto
const foo = [1, 2, 3]
for (const i in foo) {
  console.log(foo[i])
}

// ✓ Correto
const foo = [1, 2, 3]
foo.forEach((item, index) => {
  console.log(item, index)
})
```

---

## 5. Ferramentas

### 5.1 Scripts Recomendados (package.json)

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.ts,.tsx --fix",
    "format": "prettier --write \"**/*.{js,ts,tsx,json,md,css,scss}\"",
    "format:check": "prettier --check \"**/*.{js,ts,tsx,json,md,css,scss}\""
  }
}
```

### 5.2 Git Hooks (husky + lint-staged)

```json
{
  "lint-staged": {
    "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.json": "prettier --write"
  }
}
```

---

## Referência Oficial

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb TypeScript Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-typescript)
- [ESLint Rules](https://eslint.org/rules/)

## Skills Relacionadas

Esta skill complementa o workflow de Desenvolvimento:

- **[testing-strategies](../testing-strategies/SKILL.md)** - Estratégias de teste (jest-unit-testing, jest-integration-testing)
- **[code-review](../code-review/SKILL.md)** - Práticas de code review

### Fluxo de Integração

```
js-airbnb-style → testing-strategies → code-review
```

### Workflow

1. **Style**: Use js-airbnb-style para seguir convenções de código
2. **Teste**: Use testing-strategies para criar testes unitários e integrado
3. **Review**: Use code-review para validar qualidade