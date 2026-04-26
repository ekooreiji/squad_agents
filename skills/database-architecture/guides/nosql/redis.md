# Redis

## Visão Geral

Redis é um data structure store em memória, altíssima velocidade, usado para cache, sessões, filas, rate limiting.

## Características

| Característica | Descrição |
|---------------|-----------|
| **Tipo** | In-memory, key-value |
| **Estruturas** | String, Hash, List, Set, Sorted Set, Stream, Bitmap, Geospatial |
| **Persistência** | RDB, AOF |
| **Performance** | <1ms latency |
| **Pub/Sub** | Pub/Sub nativo |
| **Lua** | Scripts Lua |

## Instalação

### Docker
```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:7
```

### Conexão Python
```python
import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)
```

### Conexão Node.js
```javascript
const redis = require('redis')
const client = redis.createClient()
await client.connect()
```

## Estruturas de Dados

### String
```python
# Set/Get
r.set('name', 'John')
r.get('name')  # 'John'

# Com expiry
r.setex('token', 3600, 'abc123')

# Increment
r.set('counter', 0)
r.incr('counter')  # 1
r.incrby('counter', 5)  # 6
r.decr('counter')  # 5

# JSON
import json
r.set('user:1', json.dumps({'name': 'John', 'age': 30}))
user = json.loads(r.get('user:1'))
```

### Hash
```python
# Hash (like object)
r.hset('user:1', 'name', 'John')
r.hset('user:1', 'email', 'john@example.com')

r.hget('user:1', 'name')  # 'John'
r.hgetall('user:1')  # {'name': 'John', 'email': 'john@example.com'}

r.hincrby('user:1', 'age', 1)
r.hdel('user:1', 'email')
```

### List
```python
# List (array)
r.rpush('queue', 'task1')
r.rpush('queue', 'task2')
r.lpush('queue', 'task0')

r.lrange('queue', 0, -1)  # ['task0', 'task1', 'task2']
r.lpop('queue')  # 'task0'
r.rpop('queue')  # 'task2'
```

### Set
```python
# Set (unique)
r.sadd('tags', 'python', 'javascript', 'python')  # 2 (unique)
r.smembers('tags')  # {'python', 'javascript'}
r.sismember('tags', 'python')  # True

r.sadd('tags2', 'ruby', 'go')
r.sunion('tags', 'tags2')  # {'python', 'javascript', 'ruby', 'go'}
r.sinter('tags', 'tags2')  # set() (empty)
r.sdiff('tags', 'tags2')  # {'python', 'javascript'}
```

### Sorted Set
```python
# Sorted Set (leaderboard)
r.zadd('leaderboard', {'alice': 100, 'bob': 50, 'charlie': 75})

r.zrange('leaderboard', 0, -1, withscores=True)
# [('bob', 50), ('charlie', 75), ('alice', 100)]

r.zrevrange('leaderboard', 0, 2, withscores=True)
# [('alice', 100), ('charlie', 75), ('bob', 50)]

r.zincrby('leaderboard', 10, 'bob')  # 60
r.zrank('leaderboard', 'alice')  # 2 (0-indexed from top)
```

### Stream
```python
# Stream (message queue)
r.xadd('events', '*', {'type': 'click', 'url': '/home'})
r.xadd('events', '*', {'type': 'pageview', 'url': '/about'})

r.xread({'events': '0-0'}, count=2)
r.xrange('events', '-', '+', count=10)

# Consumer groups
r.xgroup_create('events', 'processors', '0-0')
r.xreadgroup('processors', 'consumer1', {'events': '>'})
```

### Bitmap
```python
# Bitmap (bits)
r.setbit('visits:2024-01-01', 100, 1)  # Set bit 100 to 1
r.getbit('visits:2024-01-01', 100)  # 1

# Operations
r.bitcount('visits:2024-01-01')  # Count of 1s
r.bitop('result', 'AND', 'set1', 'set2')
```

## Padrões de Uso

### Cache
```python
def get_user(user_id):
    cached = r.get(f'user:{user_id}')
    if cached:
        return json.loads(cached)

    user = db.query('SELECT * FROM users WHERE id = ?', user_id)
    r.setex(f'user:{user_id}', 3600, json.dumps(user))
    return user
```

### Rate Limiting
```python
def rate_limit(key, limit, window):
    current = r.incr(key)
    if current == 1:
        r.expire(key, window)
    return current <= limit
```

### Distributed Lock
```python
def acquire_lock(lock_name, timeout=10):
    return r.set(lock_name, 'locked', nx=True, ex=timeout)

def release_lock(lock_name):
    r.delete(lock_name)

# Usage
if acquire_lock('processing'):
    try:
        # do work
    finally:
        release_lock('processing')
```

### Pub/Sub
```python
# Publisher
r.publish('notifications', json.dumps({'type': 'email', 'to': 'user@example.com'}))

# Subscriber
pubsub = r.pubsub()
pubsub.subscribe('notifications')
for message in pubsub.listen():
    print(message)
```

### Session Store
```python
def create_session(user_id):
    session_id = secrets.token_url(32)
    r.hset(f'session:{session_id}', mapping={
        'user_id': user_id,
        'created_at': time.time()
    })
    r.expire(f'session:{session_id}', 86400)
    return session_id

def get_session(session_id):
    return r.hgetall(f'session:{session_id}')
```

## Cluster

```
┌─────────────────────────────────────────┐
│              Redis Cluster              │
├─────────┬─────────┬─────────┬─────────┤
│Node 1   │Node 2   │Node 3   │Node 4   │
│:7001    │:7002    │:7003    │:7004    │
└─────────┴─────────┴─────────┴─────────┘
```

```python
from redis.cluster import RedisCluster

rc = RedisCluster(
    startup_nodes=[{'host': 'localhost', 'port': 7001}],
    decode_responses=True
)
```

## Persistência

### RDB (Snapshot)
```
# Save every 5 minutes if 100+ keys changed
save 900 1
save 300 10
save 60 10000
```

### AOF (Append Only File)
```
appendonly yes
appendfsync everysec
```

## Memory

```python
# Memory commands
r.memory_usage('user:1')
r.memory_stats()
r.debug_object('user:1')
```

## Prós

- + Velocidade (<1ms)
- + Estruturas ricas
- + Pub/Sub nativo
- + Lua scripting
- + Múltiplos padrões de uso
- + Cluster mode

## Contras

- - Memória limitada
- - Persistência não garantida
- - Dados voláteis
- - Não é持久数据库

## Casos de Uso

| Appropriado | Inappropriado |
|-------------|---------------|
| Cache | Dados primários |
| Sessões | Dados relacionais |
| Rate limiting | Analytics |
| Filas | Long-term storage |
| Real-time | Dados críticos |

## Referências

- [Redis Docs](https://redis.io/docs/)
- [Commands](https://redis.io/commands/)
- [Data Types](https://redis.io/docs/data-types/)