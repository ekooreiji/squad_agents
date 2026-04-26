# Async Database Operations

## Python - SQLAlchemy Async

```python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy import select

async_engine = create_async_engine(
    'postgresql+asyncpg://user:pass@localhost/mydb'
)

AsyncSession = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False
)

async def get_users():
    async with AsyncSession() as session:
        result = await session.execute(
            select(User).where(User.is_active == True)
        )
        return result.scalars().all()

async def create_user(user_data: dict):
    async with AsyncSession() as session:
        user = User(**user_data)
        session.add(user)
        await session.commit()
        await session.refresh(user)
        return user

async def transaction_example():
    async with AsyncSession() as session:
        async with session.begin():
            session.add(User(name='John'))
            session.add(Profile(user_id=1))
```

## Python - Django Async (3.0+)

```python
from django.db import models

# Sync first - Django não tem async completo ainda
# Mas pode usar com ASGI
async def get_user_view(request):
    user = await sync_to database(lambda: User.objects.get(id=1))
    return JSONResponse({'name': user.name})
```

## TypeScript - Prisma

```typescript
const prisma = new PrismaClient()

async function getUsers() {
  return await prisma.user.findMany({
    where: { isActive: true }
  })
}

async function createUser(data: CreateUserDTO) {
  return await prisma.user.create({ data })
}

async function transaction() {
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: { name: 'John', email: 'john@example.com' }
    })
    await tx.profile.create({
      data: { userId: user.id, bio: 'Hello' }
    })
    return user
  })
}
```

## TypeScript - TypeORM

```typescript
const dataSource = new DataSource({...})

async function getUsers() {
  const repo = dataSource.getRepository(User)
  return await repo.find()
}

async function transaction() {
  await dataSource.transaction(async (manager) => {
    await manager.save(User, { name: 'John' })
    await manager.save(Profile, { userId: 1 })
  })
}
```

## TypeScript - Mongoose

```typescript
const User = mongoose.model<IUser>('User')

async function getUsers() {
  return await User.find({ isActive: true })
}

async function createUser(data: IUser) {
  return await User.create(data)
}

async function transaction() {
  const session = await mongoose.startSession()
  try {
    await session.withTransaction(async () => {
      await User.create([{ name: 'John' }], { session })
      await Profile.create([{ userId: user.id }], { session })
    })
  } finally {
    await session.endSession()
  }
}
```

## Connection Pool Async

```typescript
// Prisma
new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_URL }
  },
  log: ['query'],
})

// TypeORM
new DataSource({
  type: 'postgres',
  pool: {
    max: 20,
    min: 5,
    acquire: 30000,
  },
})

// Mongoose
mongoose.connect(uri, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
})
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Use `connection Pool` | Reuse connections |
| Close connections | Always close on shutdown |
| Use `expire_on_commit=false` | SQLAlchemy avoid refresh after commit |
| Batch inserts | Use `createMany` for bulk |
| Indexes | Create for frequently queried fields |