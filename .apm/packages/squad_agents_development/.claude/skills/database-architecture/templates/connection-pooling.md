# Connection Pool Template

## Python - SQLAlchemy

```python
from sqlalchemy import create_engine
from sqlalchemy.pool import QueuePool, NullPool

engine = create_engine(
    'postgresql://user:pass@localhost/mydb',
    poolclass=QueuePool,
    pool_size=5,
    max_overflow=10,
    pool_timeout=30,
    pool_recycle=3600,
    pool_pre_ping=True,
)

async_engine = create_async_engine(
    'postgresql+asyncpg://user:pass@localhost/mydb',
    pool_size=5,
    max_overflow=10,
)
```

## Python - Django

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'user',
        'PASSWORD': 'pass',
        'HOST': 'localhost',
        'PORT': '5432',
        'CONN_MAX_AGE': 600,
        'CONN_HEALTH_CHECKS': True,
    }
}
```

## TypeScript - Prisma

```typescript
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
})
```

## TypeScript - TypeORM

```typescript
new DataSource({
  type: 'postgres',
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})
```

## TypeScript - Mongoose

```typescript
mongoose.connect(uri, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
```