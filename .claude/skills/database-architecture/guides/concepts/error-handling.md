# Database Error Handling

## Common Errors

### Connection Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `ECONNREFUSED` | DB offline | Check service status |
| `Authentication failed` | Wrong credentials | Verify env vars |
| `Too many connections` | Pool exhausted | Increase pool size |
| `Connection timeout` | Network issue | Increase timeout |

### Query Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `Unique constraint violation` | Duplicate key | Check before insert |
| `Foreign key violation` | Orphan references | Validate foreign keys |
| `Deadlock` | Concurrent writes | Retry with backoff |
| `Syntax error` | Bad SQL | Check query syntax |

## Python - Error Handling

```python
from sqlalchemy.exc import (
    SQLAlchemyError,
    IntegrityError,
    OperationalError,
)

def safe_create(session, model):
    try:
        session.add(model)
        session.commit()
    except IntegrityError:
        session.rollback()
        raise ValueError("Duplicate entry")
    except OperationalError:
        session.rollback()
        raise ConnectionError("Database unavailable")
    except SQLAlchemyError as e:
        session.rollback()
        raise RuntimeError(f"Database error: {e}")

def retry_on_deadlock(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except OperationalError as e:
            if attempt == max_retries - 1:
                raise
            import time
            time.sleep(0.1 * attempt)
```

## Node.js - Error Handling

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['error'],
})

async function safeCreate(data: CreateUserDTO) {
  try {
    return await prisma.user.create({ data })
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('Duplicate entry')
    }
    if (error.code === 'P2025') {
      throw new Error('Related record not found')
    }
    throw error
  }
}

async function withRetry(fn: () => Promise<any>, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error: any) {
      if (i === retries - 1) throw error
      await new Promise(r => setTimeout(r, 100 * i))
    }
  }
}
```

## Error Recovery Patterns

### Circuit Breaker

```python
class DatabaseCircuitBreaker:
    def __init__(self, failure_threshold=5):
        self.failures = 0
        self.failure_threshold = failure_threshold
        self.state = "closed"

    def call(self, func):
        if self.state == "open":
            raise ConnectionError("Circuit open")
        
        try:
            result = func()
            self.failures = 0
            return result
        except Exception as e:
            self.failures += 1
            if self.failures >= self.failure_threshold:
                self.state = "open"
            raise
```

### Connection Pool Health Check

```typescript
async function healthCheck(prisma: PrismaClient): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch {
    return false
  }
}
```

## Logging

```python
import logging
logging.basicConfig()
logger = logging.getLogger('sqlalchemy.engine')

# Set logging level
logging.getLogger('sqlalchemy.engine').setLevel(logging.WARNING)
```

```typescript
const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'warn' },
  ],
})

prisma.$on('error', (e) => {
  console.error('Database error:', e)
})
```