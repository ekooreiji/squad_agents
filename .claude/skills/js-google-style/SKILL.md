---
name: js-google-style
description: Google JavaScript/TypeScript Style Guide
---

# Google JavaScript/TypeScript Style Guide

Referência completa das convenções de código do Google para JavaScript e TypeScript.

---

## 1. Configuração

### 1.1 Instalação

```bash
npm install --save-dev eslint eslint-plugin-googlejs @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier
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
    'google',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'googlejs',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
    'new-cap': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
```

### 1.3 Prettier Config (.prettierrc)

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": false,
  "tabWidth": 2,
  "semi": true,
  "printWidth": 80
}
```

---

## 2. JavaScript (ES6+)

### 2.1 Code Layout

- **Indentação**: 2 espaços
- **Line length**: 80 caracteres
- **Arquivos**: UTF-8
- **Line endings**: LF

```javascript
// ✓ Correto
const foo = function (bar) {
  return bar;
};

if (foo) {
  bar();
}

const obj = {
  a: 1,
  b: 2
};

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
const FOO = 'foo';
const BAR = 'bar';

function foo() {
  return FOO;
}

// ✗ Incorreto - linhas em branco inconsistentes
const FOO = 'foo';

const BAR = 'bar';
function foo() {
  return FOO;
}
```

### 2.3 Naming Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|--------|
| Variáveis/Funções | camelCase | `getUser`, `totalCount` |
| Classes | PascalCase | `UserService`, `ApiClient` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_BASE` |
| Arquivos | kebab-case ou snake_case | `user-service.js`, `user_service.js` |
| Propriedades private | underscore prefix | `_privateProperty` |

```javascript
// ✓ Correto
const userName = 'john';
const MAX_CONNECTIONS = 100;

function calculateTotal(items) {
  return items.reduce((acc, item) => acc + item.price, 0);
}

class UserService {
  constructor() {
    this._cache = new Map();
  }
}

// ✗ Incorreto
const user_name = 'john';
const maxConnections = 100;

function calculate_total(items) {}

class userService {}
```

### 2.4 Variables & Constants

- Use `const` ou `let`. Nunca `var`
- Use `const` por padrão

```javascript
// ✓ Correto
const name = 'John';
let count = 0;

if (condition) {
  count = count + 1;
}

// ✗ Incorreto
var name = 'John';
```

### 2.5 Strings

- Use aspas simples `'` para strings normais
- Use template literals para interpolação
- Use “ para strings HTML

```javascript
// ✓ Correto
const name = 'John';
const message = 'Hello, ' + name + '!';
const html = '<div class="foo">' + content + '</div>';
const template = `Hello, ${name}!`;

// ✗ Incorreto
const name = "John";
const message = `Hello, ${name}!`;
```

### 2.6 Numbers

- Use parseInt para conversão de base
- Use Number para conversão explícita

```javascript
// ✓ Correto
const integer = parseInt('15', 10);
const float = parseFloat('1.75');
const num = Number('10');

// ✗ Incorreto
const num = +'15';
const integer = parseInt('15'); // falta base
```

### 2.7 Objects

- Use object shorthand para métodos
- Usetrailing commas
- Use ponto e vírgula após closing brace

```javascript
// ✓ Correto
const foo = {
  a: 1,
  b: 2,
  method() {
    return this.a + this.b;
  },
};

// ✗ Incorreto
const foo = {
  a: 1,
  b: 2,
  method: function() {
    return this.a + this.b;
  }
};
```

### 2.8 Arrays

```javascript
// ✓ Correto
const arr = [1, 2, 3];

// Spread
const newArr = [...arr, 4, 5];

// map, filter, reduce
const doubled = arr.map((item) => item * 2);
const filtered = arr.filter((item) => item > 1);
const sum = arr.reduce((acc, item) => acc + item, 0);

// ✗ Incorreto
const arr = new Array();
const arr = [1, 2, 3];  // Missing semicolon
```

### 2.9 Destructuring

```javascript
// ✓ Correto
const {a, b} = obj;
const {a: renamedA, b: renamedB} = obj;

function({a, b}) {}
function({a = defaultValue} = {}) {}

// Array
const [first, second, ...rest] = arr;

// ✗ Incorreto - sem espaços
const {a, b} = obj;
```

### 2.10 Functions

```javascript
// ✓ Correto - function declaration
function foo(bar) {
  return bar;
}

// ✓ Correto - function expression
const foo = function (bar) {
  return bar;
};

// ✗ Incorreto - arrow como function declaration
const foo = (bar) => {
  return bar;
};
```

### 2.11 Arrow Functions

- Use arrow functions para callbacks curtos
- Use return explícito para múltiplas linhas

```javascript
// ✓ Correto
arr.map((item) => item * 2);
arr.filter((item) => item > 1);

// Com bloco
arr.map((item) => {
  const processed = item.process();
  return processed;
});

// ✗ Incorreto
arr.map((item) => item * 2);  // linha muito longa
arr.map(function(item) { return item * 2; });
```

### 2.12 Modules (import/export)

- Use imports nomeados
- Use default export com moderação

```javascript
// ✓ Correto
import {foo, bar} from './module';
import {foo as Foo} from './module';
import DefaultExport from './module';

// Export
export const FOO = 'foo';
export function foo() {}

// ✗ Incorreto
import * as Module from './module';
const foo = 'foo';
export default foo;
```

### 2.13 Async

- Use async/await
- Use try/catch

```javascript
// ✓ Correto
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✗ Incorreto
function fetchData() {
  return fetch('/api/data')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
```

### 2.14 Classes

```javascript
// ✓ Correto
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise.';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return this.name + ' barks!';
  }
}

// ✗ Incorreto
class animal {
  constructor(name) {
    this.name = name;
  }
}
```

### 2.15 Comments

- Use JSDoc para funções públicas
- Use comentários de linha `//`

```javascript
// ✓ Correto
// This is a single line comment
function calculateTotal(items) {
  // Calculate sum of all item prices
  return items.reduce((acc, item) => acc + item.price, 0);
}

/**
 * Calculate the sum of all item prices.
 *
 * @param {Array} items - Array of items with price property
 * @return {number} Total price
 */
function calculateTotal(items) {}

// ✗ Incorreto
/* Block comment */
```

---

## 3. TypeScript

### 3.1 Type Annotations

- Sempre use type annotations explícitas
- Evite `any`

```typescript
// ✓ Correto
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const count: number = 0;
const user: User = {name: 'John', age: 30};

// ✗ Incorreto
function greet(name) {
  return `Hello, ${name}!`;
}

const count = 0;
const user = {name: 'John', age: 30};
```

### 3.2 Interfaces vs Types

- Use `interface` para tipos de objetos
- Use `type` para unions, aliases

```typescript
// ✓ Correto
interface User {
  id: number;
  name: string;
  email: string;
}

type Status = 'pending' | 'active' | 'done';
type Id = string | number;
type Callback = (data: unknown) => void;

// ✗ Incorreto
type User {
  id: number;
  name: string;
}
```

### 3.3 Generics

```typescript
// ✓ Correto
function identity<T>(value: T): T {
  return value;
}

interface Repository<T> {
  findById(id: number): Promise<T>;
  findAll(): Promise<T[]>;
}

// ✗ Incorreto
function identity(value: any): any {
  return value;
}
```

### 3.4 Enum vs Const Objects

- Prefira const objects sobre enums

```typescript
// ✓ Correto
const Status = {
  PENDING: 'pending',
  ACTIVE: 'active',
  DONE: 'done',
} as const;

type Status = typeof Status[keyof typeof Status];

// ✗ Incorreto
enum Status {
  PENDING,
  ACTIVE,
  DONE,
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
  );
}

// ✗ Incorreto
function isUser(obj: any): boolean {
  return obj.name !== undefined;
}
```

### 3.6 Null Handling

- Use optional chaining e nullish coalescing

```typescript
// ✓ Correto
const name = user?.name ?? 'Unknown';
const value = obj?.nested?.value;

// ✗ Incorreto
const name = user && user.name;
const value = obj && obj.nested && obj.nested.value;
```

### 3.7 Strict TypeScript

```typescript
// ✓ Correto
function process(value: string | null): string {
  if (value === null) {
    return 'default';
  }
  return value.toUpperCase();
}

// ✗ Incorreto
function process(value: string | null): string {
  return value.toUpperCase(); // Erro: possible null
}
```

---

## 4. Regras Específicas Google

### 4.1 Do's

- Use ponto e vírgula
- Use aspas simples
- Use JSDoc para funções públicas
- Use const/let, nunca var
- Use arrow functions para callbacks
- Use async/await
- Use type annotations explícitas
- Use interface para objetos except types
- Use const objects over enums
- Use 2 espaços de indentação
- Use trailing commas

### 4.2 Don'ts

- Nunca use `var`
- Nunca use `==` (use `===`)
- Nunca use `any`
- Nunca use getter/setter em TypeScript
- Nunca use `enum` (use const objects)
- Nunca use `Function` constructor
- Never mutate parâmetros
- Não use `for-in` / `for-of` com arrays
- Não use `@suppress` sem explicação

---

## 5. Ferramentas

### 5.1 Scripts Recomendados (package.json)

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts",
    "lint:fix": "eslint . --ext .js,.ts --fix",
    "format": "prettier --write \"**/*.{js,ts,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,ts,json,md}\""
  }
}
```

### 5.2 Configuração tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## Referência Oficial

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

## Skills Relacionadas

Esta skill complementa o workflow de Desenvolvimento:

- **[testing-strategies](../testing-strategies/SKILL.md)** - Estratégias de teste (jest-unit-testing, jest-integration-testing)
- **[code-review](../code-review/SKILL.md)** - Práticas de code review

### Fluxo de Integração

```
js-google-style → testing-strategies → code-review
```

### Workflow

1. **Style**: Use js-google-style para seguir convenções de código
2. **Teste**: Use testing-strategies para criar testes unitários e integrados
3. **Review**: Use code-review para validar qualidade