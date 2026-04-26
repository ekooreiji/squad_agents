# Connection

Connecting to Redis.

## Connection String

```
redis://localhost:6379
redis://password@localhost:6379
```

## Node.js

```javascript
const { createClient } = require('redis');

const client = createClient();
await client.connect();

await client.set('key', 'value');
const value = await client.get('key');

await client.quit();
```

## Python

```python
import redis
r = redis.Redis(host='localhost', port=6379)
r.set('key', 'value')
r.get('key')
```