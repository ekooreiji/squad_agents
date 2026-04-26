# Async Testing

Testing async code.

```javascript
test('async test', async () => {
  const data = await fetchData();
  expect(data).toEqual({ id: 1 });
});

test('promise', () => {
  return expect(fetchData()).resolves.toEqual({ id: 1 });
});
```