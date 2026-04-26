# Patterns

Redis patterns.

## Cache Pattern

```javascript
async function getData(key, fetcher) {
  let data = await redis.get(key);
  if (!data) {
    data = await fetcher();
    await redis.setex(key, 3600, JSON.stringify(data));
  }
  return JSON.parse(data);
}
```

## Rate Limiter

```javascript
async function rateLimit(key, limit, window) {
  const now = Date.now();
  await redis.zadd(key, now, `${now}`);
  await redis.zremrangebyscore(key, 0, now - window);
  const count = await redis.zcard(key);
  return count <= limit;
}
```

## Distributed Lock

```javascript
const lock = await redis.setnx("lock", "1");
if (lock) {
  // Critical section
  await redis.del("lock");
}
```