# Sequelize Tutorial

## Visão Geral

Sequelize é um ORM Promise-based para Node.js, suporta múltiplos dialects SQL.

## Instalação

```bash
npm install sequelize

# Drivers
npm install pg pg-hstore  # PostgreSQL
npm install mysql2        # MySQL
npm install sqlite3      # SQLite
```

## Configuração

### Basic Setup
```typescript
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'mydb',
  logging: console.log,
})

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connected'))
  .catch((err) => console.error('Error', err))
```

## Models

### Define Model
```typescript
import { DataTypes } from 'sequelize'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'users',
  timestamps: true,
})
```

### Data Types
```typescript
{
  name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  age: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2),
  isActive: DataTypes.BOOLEAN,
  birthDate: DataTypes.DATE,
}
```

## Relationships

### One-to-One
```typescript
User.hasOne(Profile, { foreignKey: 'userId' })
Profile.belongsTo(User, { foreignKey: 'userId' })
```

### One-to-Many
```typescript
Author.hasMany(Book, { foreignKey: 'authorId' })
Book.belongsTo(Author, { foreignKey: 'authorId' })
```

### Many-to-Many
```typescript
Student.belongsToMany(Course, { through: Enrollment })
Course.belongsToMany(Student, { through: Enrollment })
```

## CRUD

### Create
```typescript
// Create
const user = await User.create({
  name: 'John',
  email: 'john@example.com'
})

// bulkCreate
const users = await User.bulkCreate([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
])
```

### Read
```typescript
// Find by ID
const user = await User.findByPk(1)

// Find one
const user = await User.findOne({
  where: { email: 'john@example.com' }
})

// Find all
const users = await User.findAll()

// Find with conditions
const users = await User.findAll({
  where: { isActive: true }
})

// Order, limit, offset
const users = await User.findAll({
  order: [['name', 'ASC']],
  limit: 10,
  offset: 20,
})

// Attributes
const users = await User.findAll({
  attributes: ['id', 'name', 'email']
})

// Count
const count = await User.count()
```

### Update
```typescript
// Update
const user = await User.findByPk(1)
user.name = 'John Updated'
await user.save()

// Update many
await User.update(
  { isActive: true },
  { where: { isActive: false } }
)
```

### Delete
```typescript
// Delete
const user = await User.findByPk(1)
await user.destroy()

// Delete many
await User.destroy({
  where: { isActive: false }
})
```

## Queries Avançadas

### Operators
```typescript
import { Op } from 'sequelize'

const users = await User.findAll({
  where: {
    age: { [Op.gt]: 18 },
    name: { [Op.like]: 'J%' }
  }
})
```

### Joins
```typescript
const books = await Book.findAll({
  include: [{
    model: Author,
    where: { isActive: true }
  }]
})
```

### Raw SQL
```typescript
const users = await sequelize.query(
  'SELECT * FROM users WHERE isActive = :active',
  { replacements: { active: true }, type: QueryTypes.SELECT }
)
```

### Aggregation
```typescript
const result = await User.findAll({
  attributes: [
    'role',
    [sequelize.fn('COUNT', sequelize.col('id')), 'count']
  ],
  group: ['role']
})
```

## Associations

### Include
```typescript
const users = await User.findAll({
  include: [{ model: Post }]
})

const posts = await Post.findAll({
  include: [{
    model: User,
    as: 'author',
    attributes: ['name']
  }]
})
```

## Transactions

```typescript
await sequelize.transaction(async (t) => {
  const user = await User.create(
    { name: 'John', email: 'john@example.com' },
    { transaction: t }
  )
  await Post.create(
    { title: 'Hello', authorId: user.id },
    { transaction: t }
  )
})
```

## Migrations

```bash
# Create migration
npx sequelize-cli migration:generate --name init

# Run migrations
npx sequelize-cli db:migrate

# Revert
npx sequelize-cli db:migrate:undo
```

## Sync

```typescript
// Sync all models
sequelize.sync()

// Sync with force
sequelize.sync({ force: true })

// Sync with alter
sequelize.sync({ alter: true })
```

## Prós

- + Promise-based
- + Múltiplos dialects
- + Migrations
- + Associations simples
- +widely Used

## Contras

- - Legacy (original)
- - Performance menor
- - TypeScript support limitado
- - Validation complexo

## Referências

- [Sequelize Docs](https://sequelize.org/)
- [Sequelize GitHub](https://github.com/sequelize/sequelize)