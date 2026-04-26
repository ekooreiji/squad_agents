# Prisma Tutorial

## Visão Geral

Prisma é um ORM TypeScript-first com type safety, migrations automáticas e DX excelente.

## Instalação

```bash
npm install prisma --save-dev
npm install @prisma/client

# Init
npx prisma init
```

## Schema

### prisma/schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  isActive  Boolean  @default(true)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Relations
```prisma
// One-to-One
model User {
  id      Int     @id
  profile Profile?
}

model Profile {
  id     Int  @id
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}

// One-to-Many
model Author {
  id    Int    @id
  books Book[]
}

model Book {
  id       Int     @id
  author   Author  @relation(fields: [authorId], references: [id])
  authorId Int
}

// Many-to-Many
model Student {
  id       Int      @id
  courses  Course[]
}

model Course {
  id       Int      @id
  students Student[]
}
```

### Field Types
```prisma
// Basic
name      String
age       Int
price     Float
isActive  Boolean
bio       String?

// Special
id        Int      @id @default(autoincrement())
uuid      String   @default(uuid())
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
```

## Setup

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Global (evita reconnects em dev)
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## CRUD

### Create
```typescript
// Create one
const user = await prisma.user.create({
  data: {
    name: 'John',
    email: 'john@example.com'
  }
})

// Create with relation
const post = await prisma.post.create({
  data: {
    title: 'Hello World',
    author: {
      connect: { email: 'john@example.com' }
    }
  }
})

// Create many
const users = await prisma.user.createMany({
  data: [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' }
  ]
})
```

### Read
```typescript
// Find by ID
const user = await prisma.user.findUnique({
  where: { id: 1 }
})

// Find first
const user = await prisma.user.findFirst({
  where: { email: 'john@example.com' }
})

// Find many
const users = await prisma.user.findMany()

// With filter
const users = await prisma.user.findMany({
  where: { isActive: true }
})

// With select (projection)
const users = await prisma.user.findMany({
  select: { id: true, name: true }
})

// With include (relation)
const users = await prisma.user.findMany({
  include: { posts: true }
})

// Order
const users = await prisma.user.findMany({
  orderBy: { name: 'asc' }
})

// Limit
const users = await prisma.user.findMany({
  take: 10
})

// Offset
const users = await prisma.user.findMany({
  skip: 20
})
```

### Update
```typescript
// Update one
const user = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'John Updated' }
})

// Update many
const result = await prisma.user.updateMany({
  where: { isActive: false },
  data: { isActive: true }
})

// Upsert
const user = await prisma.user.upsert({
  where: { email: 'john@example.com' },
  update: { name: 'John Updated' },
  create: { name: 'John', email: 'john@example.com' }
})
```

### Delete
```typescript
// Delete one
await prisma.user.delete({
  where: { id: 1 }
})

// Delete many
await prisma.user.deleteMany({
  where: { isActive: false }
})

// Delete all
await prisma.user.deleteMany()
```

## Queries Avançadas

### Relations
```typescript
// Include
const users = await prisma.user.findMany({
  include: { posts: true }
})

// Nested include
const users = await prisma.user.findMany({
  include: {
    posts: {
      include: { comments: true }
    }
  }
})
```

### Filters
```typescript
// AND
const users = await prisma.user.findMany({
  where: {
    AND: [
      { isActive: true },
      { name: { startsWith: 'J' } }
    ]
  }
})

// OR
const users = await prisma.user.findMany({
  where: {
    OR: [
      { role: 'admin' },
      { isActive: true }
    ]
  }
})

// NOT
const users = await prisma.user.findMany({
  where: {
    NOT: { isActive: false }
  }
})
```

### Operators
```typescript
const users = await prisma.user.findMany({
  where: {
    age: { gt: 18 },
    name: { contains: 'John', mode: 'insensitive' },
    email: { in: ['john@example.com', 'alice@example.com'] }
  }
})
```

### Aggregation
```typescript
// Count
const count = await prisma.user.count()

// Aggregate
const result = await prisma.user.aggregate({
  _count: { id: true },
  _avg: { age: true },
  _sum: { age: true }
})

// Group by
const result = await prisma.user.groupBy({
  by: ['role'],
  _count: { id: true }
})
```

## Transactions

```typescript
// $transaction
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { name: 'John', email: 'john@example.com' }
  })
  await tx.post.create({
    data: { title: 'Hello', authorId: user.id }
  })
})
```

## Migrations

```bash
# Create migration
npx prisma migrate dev --name init

# Apply migrations
npx prisma migrate deploy

# Reset
npx prisma migrate reset

# Show SQL
npx prisma migrate resolve --diff-only
```

## Prós

- + TypeScript-first (type safety)
- + Migrations automáticas
- + DX excelente
- + Schema declarativo
- + Include simples

## Contras

- - PostgreSQL, MySQL, SQLite apenas
- - Mais pesada que ORMs leves
- - Runtime dependency

## Referências

- [Prisma Docs](https://www.prisma.io/docs/)
- [Prisma API](https://www.prisma.io/docs/reference/api-reference)