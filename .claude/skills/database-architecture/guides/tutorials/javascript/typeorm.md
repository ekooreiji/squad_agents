# TypeORM Tutorial

## Visão Geral

TypeORM é um ORM completo para TypeScript e JavaScript, suporta múltiplos bancos e usa decorators.

## Instalação

```bash
npm install typeorm
npm install reflect-metadata

# Drivers
npm install pg        # PostgreSQL
npm install mysql    # MySQL
npm install sqlite3  # SQLite
npm install mongodb  # MongoDB
```

## Configuração

### Basic Setup
```typescript
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'mydb',
  synchronize: true,  // dev only
  logging: true,
  entities: [User],
  migrations: ['src/migrations/**'],
  subscribers: [],
})
```

### Inicialização
```typescript
import { AppDataSource } from './data-source'

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error', err))
```

## Entities

### Basic Entity
```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
```

### Relationships
```typescript
// One-to-One
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User, user => user.profile)
  user: User
}

// One-to-Many
@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Book, book => book.author)
  books: Book[]
}

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToOne(() => Author, author => author.books)
  author: Author
}

// Many-to-Many
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToMany(() => Course, course => course.students)
  @JoinTable()
  courses: Course[]
}

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToMany(() => Student, student => student.courses)
  students: Student[]
}
```

### Column Types
```typescript
@Column()
name: string

@Column('int')
age: number

@Column('decimal', { precision: 10, scale: 2 })
price: number

@Column('simple-array')
tags: string

@Column('simple-json', { nullable: true })
metadata: object

@Column('timestamp')
createdAt: Date
```

## Repository

### Uso
```typescript
import { AppDataSource } from './data-source'

const userRepo = AppDataSource.getRepository(User)
```

## CRUD

### Create
```typescript
// Create and save
const user = userRepo.create({
  name: 'John',
  email: 'john@example.com'
})
await userRepo.save(user)

// Create many
const users = userRepo.create([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
])
await userRepo.save(users)
```

### Read
```typescript
// Find by ID
const user = await userRepo.findOneBy({ id: 1 })

// Find first
const user = await userRepo.findOne({
  where: { email: 'john@example.com' }
})

// Find many
const users = await userRepo.find()

// Find with conditions
const users = await userRepo.find({
  where: { isActive: true }
})

// Order, take, skip
const users = await userRepo.find({
  order: { name: 'ASC' },
  take: 10,
  skip: 20
})

// Count
const count = await userRepo.count()

// With relations
const users = await userRepo.find({
  relations: ['posts']
})
```

### Update
```typescript
// Update single
const user = await userRepo.findOneBy({ id: 1 })
if (user) {
  user.name = 'John Updated'
  await userRepo.save(user)
}

// Update many
await userRepo.update(
  { isActive: false },
  { isActive: true }
)
```

### Delete
```typescript
// Delete single
await userRepo.delete(1)

// Delete many
await userRepo.delete({ isActive: false })
```

## Queries Avançadas

### Query Builder
```typescript
// Select
const users = await userRepo
  .createQueryBuilder('user')
  .where('user.isActive = :isActive', { isActive: true })
  .getMany()

// Join
const posts = await userRepo
  .createQueryBuilder('user')
  .innerJoin('user.posts', 'post')
  .where('post.published = :published', { published: true })
  .getMany()

// Select specific fields
const users = await userRepo
  .createQueryBuilder('user')
  .select(['user.id', 'user.name'])
  .getMany()

// Group by
const result = await userRepo
  .createQueryBuilder('user')
  .select('user.role')
  .addSelect('COUNT(*)', 'count')
  .groupBy('user.role')
  .getRawMany()
```

### Transactions
```typescript
await AppDataSource.transaction(async (manager) => {
  await manager.save(User, { name: 'John', email: 'john@example.com' })
  await manager.save(Post, { title: 'Hello', authorId: 1 })
})
```

##Migrations

```bash
# Create migration
npm run typeorm migration:generate -- -n init

# Run migrations
npm run typeorm migration:run

# Revert
npm run typeorm migration:revert
```

## Prós

- + Decorators TypeScript
- + Múltiplos bancos
- + Query builder
- + Transactions
- + Async/Await nativo

## Contras

- - Documentação confusa
- - Setup complexo
- - Bugs ocasionais

## Referências

- [TypeORM Docs](https://typeorm.io/)
- [TypeORM GitHub](https://github.com/typeorm/typeorm)