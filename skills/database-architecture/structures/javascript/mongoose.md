# Mongoose Structure

## Project Structure

```
src/
├── config/
│   └── database.ts      # Database connection
├── models/
│   ├── __init__.py
│   ├── user.ts       # User model
│   ├── post.ts      # Post model
│   └── base.ts     # Base model plugin
├── repositories/
│   ├── __init__.py
│   ├── user_repository.ts
│   └── post_repository.ts
├── services/
│   └── user_service.ts
├── migrations/
└── index.ts
```

## Database Config

```typescript
import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      maxPoolSize: 10,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected')
})
```

## Base Model

```typescript
import mongoose from 'mongoose'

export const baseSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

baseSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})
```

## Models Convention

```typescript
import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  isActive: boolean
  posts: mongoose.Types.ObjectId[]
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  {
    timestamps: true,
  }
)

UserSchema.index({ email: 1 })

export const User = mongoose.model<IUser>('User', UserSchema)
```

## Repository Pattern

```typescript
import { User, IUser } from '../models/user'

interface UserRepository {
  findById(id: string): Promise<IUser | null>
  findAll(): Promise<IUser[]>
  create(data: Partial<IUser>): Promise<IUser>
}

class MongooseUserRepository implements UserRepository {
  async findById(id: string) {
    return User.findById(id)
  }

  async findAll() {
    return User.find()
  }

  async create(data: Partial<IUser>) {
    return User.create(data)
  }
}
```

## Middleware Plugin

```typescript
userSchema.methods.toJSON = function () {
  const obj = this.toObject()
  delete obj.__v
  return obj
}
```