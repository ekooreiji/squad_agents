# Unit Test Example - JavaScript

```javascript
// tests/unit/math.test.js
const { add, subtract, multiply, divide } = require('./math');

describe('Math', () => {
  describe('add', () => {
    test('adds two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
    });
  });
  
  describe('divide', () => {
    test('divides numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    
    test('throws on divide by zero', () => {
      expect(() => divide(1, 0)).toThrow();
    });
  });
});
```