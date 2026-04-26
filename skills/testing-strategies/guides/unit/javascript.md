# Unit Tests - JavaScript/TypeScript

## Frameworks

| Framework | Uso |
|----------|-----|
| **Jest** | Mais popular |
| **Vitest** | Moderno, mais rápido |
| **Mocha** | Flexível |

## Instalação

```bash
npm install --save-dev jest
# ou
npm install --save-dev vitest
```

## Configuração

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
};
```

## Estrutura

```
src/
tests/
├── unit/
│   ├── math.test.js
│   └── user.test.js
└── setup.js
```

## Testes Básicos

```javascript
// tests/unit/math.test.js
const { add, subtract, multiply } = require('../../src/math');

describe('Math', () => {
  describe('add', () => {
    test('adds two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
    });
  });
  
  describe('subtract', () => {
    test('subtracts numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });
});
```

## TypeScript com Jest

```typescript
// tests/unit/math.test.ts
import { add, subtract } from '../../src/math';

describe('Math', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## Fixtures

```javascript
// tests/setup.js
beforeAll(() => {
  // Setup global state
});

afterAll(() => {
  // Cleanup
});
```

## Mocking

```javascript
// Mock de função
jest.mock('./api', () => ({
  getUser: jest.fn().mockResolvedValue({ id: 1, name: 'John' })
}));

// Mock de módulo
jest.mock('../src/api');

test('fetches user', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('John');
});
```

## Describe Blocks

```javascript
describe('User Service', () => {
  beforeEach(() => {
    // Reset before each test
  });
  
  describe('createUser', () => {
    test('creates user with valid data', () => {
      const user = createUser({ name: 'John', email: 'john@test.com' });
      expect(user.id).toBeDefined();
    });
    
    test('throws with invalid email', () => {
      expect(() => createUser({ name: 'John', email: 'invalid' }))
        .toThrow('Invalid email');
    });
  });
});
```

## Run

```bash
npm test
npm test -- --coverage
npx vitest run
```