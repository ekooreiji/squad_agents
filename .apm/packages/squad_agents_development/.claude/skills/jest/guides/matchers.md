# Matchers

Testing matchers.

```javascript
test('basic matchers', () => {
  expect(2 + 2).toBe(4);
  expect({ name: 'João' }).toEqual({ name: 'João' });
  expect(null).toBeNull();
  expect([1, 2, 3]).toContain(2);
  expect('João').toMatch(/o/);
});
```