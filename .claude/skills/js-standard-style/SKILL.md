---
name: js-standard-style
description: StandardJS JavaScript/TypeScript Style Guide
---

# Standard JavaScript/TypeScript Style Guide

Referência completa das convenções de código do StandardJS para JavaScript e TypeScript.

---

## 1. Configuração

### 1.1 Instalação

```bash
npm install --save-dev standard eslint-config-standard-with-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier
```

### 1.2 ESLint Config (.eslintrc.js)

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'standard-with-typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
```

### 1.3 Prettier Config (.prettierrc)

```json
{
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "tabWidth": 2,
  "semi": false,
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
  b: 2
}

// ✗ Incorreto
const foo = function(bar){
return bar
}
```

### 2.2 Blank Lines

```javascript
// ✓ Correto
const HELLO = 'hi'

function greet() {
  return HELLO
}

// ✗ Incorreto - múltiplas linhas em branco
const HELLO = 'hi'


function greet() {
  return HELLO
}
```

### 2.3 Naming Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|--------|
| Variáveis/Funções | camelCase | `getUser`, `totalCount` |
| Classes | PascalCase | `UserService`, `ApiClient` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES` |
| Arquivos | kebab-case | `user-service.js` |

```javascript
// ✓ Correto
const userName = 'john'
const MAX_CONNECTIONS = 100

function calculateTotal (items) {
  return items.reduce((acc, item) => acc + item.price, 0)
}

class UserService {}

// ✗ Incorreto
const user_name = 'john'
const maxConnections = 100

function calculate_total () {}
class userService {}
```

### 2.4 Variables & Constants

- Use `const` ou `let`. Nunca `var`

```javascript
// ✓ Correto
const name = 'John'
let count = 0

if (condition) {
  count = count + 1
}

// ✗ Incorreto
var name = 'John'
```

### 2.5 Strings

- **Sem aspas fixas** - Single ou double
- Use template literals para interpolação

```javascript
// ✓ Correto (qualquer aspa)
const name = 'John'
const html = "<div class='foo'>Content</div>"
const message = `Hello, ${name}!`

// ✗ Incorreto - concatenação
const message = 'Hello, ' + name + '!'
```

### 2.6 Numbers

```javascript
// ✓ Correto
const integer = parseInt('15', 10)
const float = parseFloat('1.75')
const num = Number('10')

// ✗ Incorreto
const num = +'15'
const integer = parseInt('15')
```

### 2.7 Objects

- Use shorthand methods
- Semicolon após closing brace apenas se necessário

```javascript
// ✓ Correto
const foo = {
  a: 1,
  b: 2,
  method () {
    return this.a + this.b
  }
}

// ✗ Incorreto
const foo = {
  a: 1,
  b: 2,
  method: function () {
    return this.a + this.b
  },
}
```

### 2.8 Arrays

```javascript
// ✓ Correto
const arr = [1, 2, 3]

// Spread
const newArr = [...arr, 4, 5]

// map, filter, reduce
const doubled = arr.map(item => item * 2)
const filtered = arr.filter(item => item > 1)
const sum = arr.reduce((acc, item) => acc + item, 0)

// ✗ Incorreto
const arr = new Array()
```

### 2.9 Destructuring

```javascript
// ✓ Correto
const { a, b } = obj
const { a: renamedA, b: renamedB } = obj

function ({ a, b }) {}

// Array
const [first, second, ...rest] = arr

// ✗ Incorreto - sem espaços
const {a, b} = obj
```

### 2.10 Functions

```javascript
// ✓ Correto - function declaration
function foo (bar) {
  return bar
}

// ✓ Correto - function expression
const foo = function (bar) {
  return bar
}

// ✗ Incorreto - naming function
const foo = function bar (baz) {
  return baz
}
```

### 2.11 Arrow Functions

- Use parênteses para parâmetros
- Prefira implicit return

```javascript
// ✓ Correto
arr.map(item => item * 2)
arr.filter(item => item > 1)

// Bloco
arr.map(item => {
  const processed = item.process()
  return processed
})

// ✗ Incorreto
arr.map(item => { return item * 2 })
arr.map(( item ) => item * 2)
```

### 2.12 Modules (import/export)

```javascript
// ✓ Correto
import { foo, bar } from './module'
import defaultExport from './module'

// Export
export const foo = 'foo'
export default function foo () {}

// ✗ Incorreto
import * as Module from './module'
const foo = 'foo'
export default foo
```

### 2.13 Async

```javascript
// ✓ Correto
async function fetchData () {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// ✗ Incorreto - then chain
function fetchData () {
  return fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error(error))
}
```

### 2.14 Classes

```javascript
// ✓ Correto
class Animal {
  constructor (name) {
    this.name = name
  }

  speak () {
    return `${this.name} makes a noise.`
  }
}

class Dog extends Animal {
  constructor (name, breed) {
    super(name)
    this.breed = breed
  }

  speak () {
    return `${this.name} barks!`
  }
}

// ✗ Incorreto
class animal {
  constructor (name) {
    this.name = name
  }
}
```

### 2.15 Comments

- Use comentários de linha `//`
- Evite block comments desnecessários

```javascript
// ✓ Correto
// This is a single line comment
function calculateTotal (items) {
  // Calculate sum
  return items.reduce((acc, item) => acc + item.price, 0)
}

// ✗ Incorreto - block comment
/* This calculates total */
function calculateTotal (items) {}
```

---

## 3. TypeScript

### 3.1 Type Annotations

- Use type annotations explícitas
- Evite `any`

```typescript
// ✓ Correto
function greet (name: string): string {
  return `Hello, ${name}!`
}

const count: number = 0
const user: User = { name: 'John', age: 30 }

// ✗ Incorreto
function greet (name) {
  return `Hello, ${name}!`
}

const count = 0
const user = { name: 'John', age: 30 }
```

### 3.2 Interfaces vs Types

- Prefira `interface` para objetos
- Use `type` para unions

```typescript
// ✓ Correto
interface User {
  id: number
  name: string
  email: string
}

type Status = 'pending' | 'active' | 'done'
type Callback = (data: unknown) => void

// ✗ Incorreto
interface Status {
  status: 'pending' | 'active'
}
```

### 3.3 Generics

```typescript
// ✓ Correto
function identity<T> (value: T): T {
  return value
}

interface Repository<T> {
  findById (id: number): Promise<T>
  findAll (): Promise<T[]>
}

// ✗ Incorreto
function identity (value: any): any {
  return value
}
```

### 3.4 Enum vs Const Objects

- Prefira const objects

```typescript
// ✓ Correto
const Status = {
  PENDING: 'pending',
  ACTIVE: 'active',
  DONE: 'done'
} as const

type Status = typeof Status[keyof typeof Status]

// ✗ Incorreto
enum Status {
  PENDING,
  ACTIVE,
  DONE
}
```

### 3.5 Type Guards

```typescript
// ✓ Correto
function isUser (obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    typeof obj.name === 'string'
  )
}

// ✗ Incorreto
function isUser (obj: any): boolean {
  return obj.name !== undefined
}
```

### 3.6 Null Handling

```typescript
// ✓ Correto
const name = user?.name ?? 'Unknown'
const value = obj?.nested?.value

// ✗ Incorreto
const name = user && user.name
const value = obj && obj.nested && obj.nested.value
```

---

## 4. Regras Específicas Standard

### 4.1 Características Principais

- **SEM ponto e vírgula** (exceto para evitar bugs)
- **Zero configuração**
- **aspas flexíveis** (single ou double)
- **2 espaços de indentação**
- **100 caracteres por linha**
- **Use const/let, nunca var**
- **Trailing commas** (opcional - config)
- **Espaçamento flexível**

### 4.2 Do's

- Use `const` e `let`
- Use arrow functions
- Use async/await
- Use template literals
- Use destructuring
- Use spread operator
- Use optional chaining
- Use nullish coalescing
- Use type annotations em TypeScript

### 4.3 Don'ts

- Nunca use `var`
- Nunca use `==` (use `===`)
- Nunca use `any` em TypeScript
- Nunca use `Function` constructor
- Nunca use `arguments`
- Nunca mutate parâmetros
- Não use `for-in` / `for-of` com arrays

---

## 5. Ferramentas

### 5.1 Scripts Recomendados (package.json)

```json
{
  "scripts": {
    "lint": "standard",
    "lint:fix": "standard --fix",
    "format": "prettier --write \"**/*.{js,ts,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,ts,json,md}\""
  }
}
```

### 5.2 Standard com TypeScript

```json
{
  "name": "my-project",
  "standard": {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
      "@typescript-eslint/no-unused-vars": "error"
    }
  }
}
```

---

## Referência Oficial

- [StandardJS](https://standardjs.com/)
- [Standard Community](https://github.com/standard/standard)
- [ESLint Config Standard](https://github.com/standard/eslint-config-standard)

## Skills Relacionadas

Esta skill complementa o workflow de Desenvolvimento:

- **[testing-strategies](../testing-strategies/SKILL.md)** - Estratégias de teste (jest-unit-testing, jest-integration-testing)
- **[code-review](../code-review/SKILL.md)** - Práticas de code review

### Fluxo de Integração

```
js-standard-style → testing-strategies → code-review
```

### Workflow

1. **Style**: Use js-standard-style para seguir convenções de código
2. **Teste**: Use testing-strategies para criar testes unitários e integrados
3. **Review**: Use code-review para validar qualidade