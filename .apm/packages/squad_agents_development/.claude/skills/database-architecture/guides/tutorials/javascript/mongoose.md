# Mongoose Tutorial

## Visão Geral

Mongoose é um ODM (Object Document Mapper) para MongoDB, fornece schema validation e middleware.

## Instalação

```bash
npm install mongoose
```

## Conexão

```typescript
import mongoose from 'mongoose'

const connect = async () => {
  await mongoose.connect('mongodb://user:pass@localhost:27017/mydb')
  console.log('Connected to MongoDB')
}

connect().catch(console.error)
```

### Connection Options
```typescript
mongoose.connect('mongodb://localhost:27017/mydb', {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
```

## Schema

### Basic Schema
```typescript
import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  isActive: boolean
  createdAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.model<IUser>('User', UserSchema)
```

### Field Types
```typescript
const ProductSchema = new Schema({
  name: String,
  price: Number,
  isAvailable: Boolean,
  tags: [String],
  metadata: Map,
  createdAt: { type: Date, default: Date.now },
})
```

### Nested Schema
```typescript
const AddressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
})

const UserSchema = new Schema({
  name: String,
  address: AddressSchema,
})
```

### Array of Objects
```typescript
const UserSchema = new Schema({
  name: String,
  scores: [{
    subject: String,
    value: Number,
  }],
})
```

### Enum
```typescript
const UserSchema = new Schema({
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
})
```

### Virtual
```typescript
UserSchema.virtual('fullName').get(function () {
  return `${this.name}`
})
```

## CRUD

### Create
```typescript
// Create
const user = await User.create({
  name: 'John',
  email: 'john@example.com'
})

// Save
const user = new User({ name: 'John', email: 'john@example.com' })
await user.save()

// Insert many
const users = await User.insertMany([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
])
```

### Read
```typescript
// Find by ID
const user = await User.findById('...')

// Find one
const user = await User.findOne({ email: 'john@example.com' })

// Find all
const users = await User.find()

// With conditions
const users = await User.find({ isActive: true })

// Select fields
const users = await User.find({}, 'name email')

// Exclude fields
const users = await User.find({}, '-password')

// Limit
const users = await User.find().limit(10)

// Skip
const users = await User.find().skip(20)

// Sort
const users = await User.find().sort({ name: 1 })

// Count
const count = await User.countDocuments()
```

### Update
```typescript
// Find and update
const user = await User.findByIdAndUpdate(
  '...',
  { name: 'John Updated' },
  { new: true }
)

// Find one and update
const user = await User.findOneAndUpdate(
  { email: 'john@example.com' },
  { name: 'John Updated' },
  { new: true }
)

// Update many
const result = await User.updateMany(
  { isActive: false },
  { isActive: true }
)

// Update directly
await User.updateOne(
  { email: 'john@example.com' },
  { name: 'John Updated' }
)
```

### Delete
```typescript
await User.findByIdAndDelete('...')
await User.findOneAndDelete({ email: 'john@example.com' })
await User.deleteOne({ email: 'john@example.com' })
await User.deleteMany({ isActive: false })
```

## Queries Avançadas

### Comparisons
```typescript
const users = await User.find({ age: { $gt: 18 } })
const users = await User.find({ age: { $gte: 18 } })
const users = await User.find({ age: { $lt: 65 } })
const users = await User.find({ age: { $lte: 65 } })
const users = await User.find({ age: { $ne: 30 } })
const users = await User.find({ role: { $in: ['admin', 'moderator'] } })
```

### Logical
```typescript
const users = await User.find({
  $and: [
    { isActive: true },
    { age: { $gte: 18 } }
  ]
})

const users = await User.find({
  $or: [
    { role: 'admin' },
    { isActive: true }
  ]
})
```

### String
```typescript
const users = await User.find({ name: /john/i })
const users = await User.find({ name: { $regex: 'john', $options: 'i' } })
const users = await User.find({ name: { $startsWith: 'J' } })
const users = await User.find({ name: { $endsWith: 'n' } })
```

### Population
```typescript
const PostSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
})

const post = await Post.findOne().populate('author')
```

### Aggregation
```typescript
const result = await User.aggregate([
  { $match: { isActive: true } },
  { $group: { _id: '$role', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
])
```

## Middleware

### Pre
```typescript
UserSchema.pre('save', async function (next) {
  console.log('About to save:', this.name)
  next()
})
```

### Post
```typescript
UserSchema.post('save', function (doc) {
  console.log('Saved:', doc.name)
})
```

## Virtuals
```typescript
UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
})
```

## Indexes

```typescript
UserSchema.index({ email: 1 })
UserSchema.index({ name: 'text', bio: 'text' })
UserSchema.index({ createdAt: -1 }, { expireAfterSeconds: 3600 })
```

## Transactions

```typescript
const session = await mongoose.startSession()
try {
  await session.withTransaction(async () => {
    await User.create([{ name: 'John' }], { session })
    await Post.create([{ title: 'Hello', authorId: user.id }], { session })
  })
} finally {
  await session.endSession()
}
```

## Prós

- + Schema validation
- + Middleware/hooks
- + Population simples
- + MongoDB nativo
- + Virtuals
- + Indexes

## Contras

- - Apenas MongoDB
- - Schema estrito
- - Memory usage

## Referências

- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Mongoose API](https://mongoosejs.com/docs/api/)