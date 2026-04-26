# TypeORM Structure

## Project Structure

```
src/
├── data-source.ts        # DataSource config
├── entities/
│   ├── __init__.py
│   ├── user.ts          # User entity
│   ├── post.ts         # Post entity
│   └── base.ts         # Base entity
├── repositories/
│   ├── __init__.py
│   ├── user_repository.ts
│   └── post_repository.ts
├── services/
│   └── user_service.ts
├── migrations/
│   └── 1700000000000-Init.ts
├── routes/
│   └── user_routes.ts
└── index.ts
```

## DataSource Config

```typescript
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'mydb',
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: ['src/entities/**'],
  migrations: ['src/migrations/**'],
  migrationsTableName: 'migrations',
})
```

## Base Entity

```typescript
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
```

## Entity Convention

```typescript
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user'

@Entity('posts')
export class Post extends BaseEntity {
  @Column()
  title: string

  @Column({ type: 'text', nullable: true })
  content: string

  @Column()
  authorId: number

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'authorId' })
  author: User
}
```

## Repository

```typescript
import { DataSource, Repository } from 'typeorm'
import { User } from '../entities/user'

export class UserRepository {
  constructor(private dataSource: DataSource) {}

  get repository(): Repository<User> {
    return this.dataSource.getRepository(User)
  }

  async findById(id: number): Promise<User | null> {
    return this.repository.findOne({ where: { id } })
  }

  async findAll(): Promise<User[]> {
    return this.repository.find()
  }

  async create(data: Partial<User>): Promise<User> {
    const user = this.repository.create(data)
    return this.repository.save(user)
  }
}
```