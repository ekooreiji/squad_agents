# Mocking

Mock functions and modules.

```javascript
test('mock function', () => {
  const mockFn = jest.fn();
  mockFn('hello');
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('hello');
});

test('mock module', () => {
  jest.mock('./api');
  const { fetchData } = require('./api');
});
```