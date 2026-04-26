# Rate Limiting

## Visão Geral

Rate limiting controla o número de requisições que um cliente pode fazer em determinado período.

## Headers

| Header | Description |
|--------|-------------|
| X-RateLimit-Limit | Limite total |
| X-RateLimit-Remaining | Requisições restantes |
| X-RateLimit-Reset | Quando o limite reseta |

## Response Headers

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Retry-After Header

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 3600
```

## Algorithms

### Fixed Window

```
┌─────────────────────────────────────────────┐
│           Fixed Window (1 min)             │
├─────────────────────────────────────────────┤
│  0s    15s    30s    45s    60s         │
│  ├──────┴──────┴──────┴──────┤         │
│  50 req                      50 req       │
│  Resets at 60s                 Resets     │
└─────────────────────────────────────────────┘
```

### Sliding Window

```
┌─────────────────────────────────────────────┐
│           Sliding Window                    │
├─────────────────────────────────────────────┤
│  Current window: 0-60s                   │
│  Past window:  -  0s                     │
│  Total = current + past                    │
└─────────────────────────────────────────────┘
```

### Token Bucket

```
┌─────────────────────────────────────────────┐
│           Token Bucket                    │
├─────────────────────────────────────────────┤
│  Capacity: 100 tokens                      │
│  Refill rate: 60 tokens/min                │
│  Request = 1 token                        │
└─────────────────────────────────────────────┘
```

## Implementation

### FastAPI + SlowAPI

```python
from slowapi import Limiter
from slowapi.util import get_remote_address
from fastapi import FastAPI

app = FastAPI()
limiter = Limiter(key_func=get_remote_address)

@app.get("/protected")
@limiter.limit("10/minute")
def protected():
    return {"data": "protected"}
```

### Express + Express Rate Limit

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests'
});

app.use('/api', limiter);
```

### Redis Integration

```javascript
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const limiter = rateLimit({
  store: new RedisStore({
    client: redis.createClient(),
    prefix: 'rl:'
  }),
  windowMs: 15 * 60 * 1000,
  max: 100
});
```

## Storage

| Storage | Use |
|--------|-----|
| Memory | Single server, dev |
| Redis | Distributed |
| Redis Cluster | High scale |

## Custom Key

### By User ID

```python
def get_key(request: Request):
    return request.user.id if hasattr(request, 'user') else get_remote_address(request)
```

### By API Key

```python
def get_key(request: Request):
    api_key = request.headers.get('X-API-Key')
    return api_key or get_remote_address(request)
```

## Error Response

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests",
    "retry_after": 60
  }
}
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Whitelist admins | No limit for admin |
| Different tiers | Free vs paid |
| Graceful degradation | Soft fail |
| Clear headers | Help debugging |
| Redis for scale | Distributed rate limiting |

## Rate Limits Examples

| Service | Limit |
|---------|-------|
| GitHub | 5000/hour |
| Twitter | 900/15min |
| Stripe | 100000/day |
| OpenAI | 3/min (GPT) |