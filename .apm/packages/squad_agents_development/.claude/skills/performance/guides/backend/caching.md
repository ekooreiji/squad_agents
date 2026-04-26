# Caching Strategies

## Cache Levels

```
┌─────────────────────────────────────────────────────┐
│             Hierarquia de Cache                     │
├─────────────────────────────────────────────────────┤
│  1. Browser Cache    │ ms          │ mais rápido   │
│  2. CDN Cache       │ ms-10s      │              │
│  3. Application    │ ms-10s      │ Memory       │
│  4. Database       │ 10s-1m      │ Query cache  │
└─────────────────────────────────────────────────────┘
```

## Estratégias

| Estratégia | Quando usar |
|------------|------------|
| **CacheAside** | Reads frequentes |
| **WriteThrough** | Dados críticos |
| **WriteBehind** | Writes frequentes |
| **RefreshAhead** | Dados previsíveis |

## Cache-Aside Pattern

```python
# Get
def get(key):
    cached = redis.get(key)
    if cached:
        return cached
    
    data = db.get(key)
    redis.set(key, data, expire=3600)
    return data

# Set
def set(key, value):
    db.set(key, value)
    redis.set(key, value, expire=3600)
```

## TTL

| Dado | TTL |
|------|-----|
| Configuração | 1h - 24h |
| Dados de usuário | 5m - 1h |
| API responses | 30s - 5m |
| Assets estáticos | 1d - 1w |