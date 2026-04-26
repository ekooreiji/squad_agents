# Sequelize Structure

## Project Structure

```
src/
├── config/
│   └── database.ts      # Sequelize config
├── models/
│   ├── __init__.ts
│   ├── user.ts       # User model
│   ├── post.ts       # Post model
│   └── index.ts    # Models index
├── repositories/
├── services/
├── migrations/
│   └── 1700000000000-Init.ts
└── index.ts
```

## Database Config

```typescript
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'mydb',
  logging: process.env.NODE_ENV === 'development',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})
```

## Models Convention

```typescript
import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database'

export class User extends Model {
  declare id: number
  declare name: string
  declare email: string
  declare isActive: boolean
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    underscored: true,
  }
)
```

## Models Index

```typescript
import { sequelize } from '../config/database'
import { User } from './user'
import { Post } from './post'

User.hasMany(Post, { foreignKey: 'authorId' })
Post.belongsTo(User, { foreignKey: 'authorId' })

export { User, Post }
```

## Repository Pattern

```typescript
import { User } from '../models/user'

class UserRepository {
  async findById(id: number) {
    return User.findByPk(id)
  }

  async findAll() {
    return User.findAll()
  }

  async create(data: Partial<User>) {
    return User.create(data)
  }
}
```