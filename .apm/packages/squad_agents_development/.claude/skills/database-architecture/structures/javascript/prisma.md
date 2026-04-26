# Prisma Structure

## Project Structure

```
src/
├── prisma/
│   ├── schema.prisma    # Schema definitions
│   └── migrations/    # Migrations
├── lib/
│   ├── prisma.ts      # Prisma client singleton
│   └── replcation.ts
├── repositories/
│   ├── user_repository.ts
│   └── post_repository.ts
├── services/
│   └── user_service.ts
├── routes/
│   └── user_routes.ts
├── types/
│   └── user_type.ts
├── index.ts
└── env
```

## Schema Structure

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  isActive  Boolean  @default(true)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}

enum Role {
  USER
  ADMIN
}
```

## Prisma Client

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient
}

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
```

## Repository Pattern

```typescript
import { prisma } from '@/lib/prisma'

interface UserRepository {
  findById(id: number): Promise<User | null>
  findAll(): Promise<User[]>
  create(data: CreateUserDTO): Promise<User>
}

class PrismaUserRepository implements UserRepository {
  async findById(id: number) {
    return prisma.user.findUnique({ where: { id } })
  }

  async findAll() {
    return prisma.user.findMany()
  }

  async create(data: CreateUserDTO) {
    return prisma.user.create({ data })
  }
}
```

## Migrations

```bash
npx prisma migrate dev --name init
npx prisma migrate deploy
npx prisma db pull
npx prisma generate
```