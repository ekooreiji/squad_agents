# Rate Limiting

Throttling e rate limits.

## Strategies

| Strategy | Use Case |
|----------|----------|
| Fixed Window | Simple |
| Sliding Window | More accurate |
| Token Bucket | Burst handling |
| Leaky Bucket | Smooth |

## Implementation

```python
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import APIKeyHeader
from time import time

# Simple in-memory rate limiter
requests = {}

def rate_limit_key(client_id: str, window: int = 60, max_requests: int = 100):
    current_time = int(time())
    key = f"{client_id}:{current_time // window}"
    
    if key not in requests:
        requests[key] = 0
    
    requests[key] += 1
    
    if requests[key] > max_requests:
        raise HTTPException(429, detail="Rate limit exceeded")
    
    return True

@app.get('/api/data', dependencies=[Depends(rate_limit_key)])
async def get_data():
    return {'data': 'content'}
```

## Redis-based Rate Limiter

```python
from fastapi import FastAPI
import redis.asyncio as redis
from datetime import datetime

redis_client = redis.from_url('redis://localhost:6379')

async def rate_limit_redis(client_id: str, limit: int = 100, window: int = 60):
    key = f"rate_limit:{client_id}"
    current = await redis_client.get(key)
    
    if current is None:
        await redis_client.setex(key, window, 1)
        return
    
    count = int(current)
    if count >= limit:
        raise HTTPException(429, detail="Rate limit exceeded")
    
    await redis_client.incr(key)
```

## Headers

```python
# Standard rate limit headers
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1609459200
```

## Example: Adding Headers

```python
from fastapi import Response

@app.middleware('http')
async def add_rate_limit_headers(request, call_next):
    response = await call_next(request)
    response.headers['X-RateLimit-Limit'] = '100'
    response.headers['X-RateLimit-Remaining'] = '99'
    response.headers['X-RateLimit-Reset'] = str(int(time()) + 60)
    return response
```