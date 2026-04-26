# Mocking - JavaScript/TypeScript

## Jest Mocks

```javascript
// Mock de função
jest.fn()
jest.fn().mockReturnValue('mocked')
jest.fn().mockResolvedValue('mocked')
jest.fn().mockImplementation(() => 'implemented')
```

## Mock de Módulo

```javascript
// mock do módulo 'api'
jest.mock('../api', () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'John' }),
  createUser: jest.fn(),
}));
```

## Mock de Dependencies

```javascript
// Antes do import
jest.mock('../src/database');

import { getUser } from '../src/user';

test('fetches user', async () => {
  const user = await getUser(1);
  expect(user.name).toBe('John');
});
```

## Spy

```javascript
import * as api from '../api';

test('spies on method', () => {
  const spy = jest.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1 });
  
  api.fetchUser(1);
  
  expect(spy).toHaveBeenCalledWith(1);
});
```

## Mock Partial

```javascript
test('partial mock', () => {
  const mock = {
    fetch: jest.fn(),
    create: jest.fn(),
  };
  
  mock.fetch.mockResolvedValue({ data: 'test' });
  
  expect(mock.fetch()).resolves.toEqual({ data: 'test' });
});
```

## Run

```bash
npm test
npm test -- --coverage
```