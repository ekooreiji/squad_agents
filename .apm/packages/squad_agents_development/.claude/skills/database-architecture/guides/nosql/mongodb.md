# MongoDB

## Visão Geral

MongoDB é um banco de dados documentos JSON-like (BSON), schema flexível, alta escalabilidade.

## Características

| Característica | Descrição |
|---------------|-----------|
| **Modelo** | Documento (BSON) |
| **Schema** | Dynamic (sem schema fixo) |
| **Consultas** | Ricas (aggregation pipeline) |
| **Índices** | Compound, text, 2dsphere, hashed |
| **Replicação** | Replica Set |
| **Sharding** | Auto-sharding |

## Instalação

### Docker
```bash
docker run -d \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_PASSWORD=secret \
  -p 27017:27017 \
  mongo:7
```

### Conexão
```javascript
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://root:secret@localhost:27017')
await client.connect()
const db = client.db('mydb')
```

## Documentos

```javascript
// Coleção users
{
  _id: ObjectId('...'),
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  isActive: true,
  tags: ['developer', 'python'],
  profile: {
    bio: 'Full stack developer',
    avatar: 'https://...'
  },
  createdAt: ISODate('2024-01-01T00:00:00Z')
}
```

## Operações CRUD

### Insert
```javascript
// Single
await db.collection('users').insertOne({
  name: 'John',
  email: 'john@example.com'
})

// Multiple
await db.collection('users').insertMany([
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
])
```

### Find
```javascript
// All
await db.collection('users').find().toArray()

// Filter
await db.collection('users').find({ age: { $gte: 18 } }).toArray()

// Projection
await db.collection('users').find({}, { projection: { name: 1, email: 1 } }).toArray()

// Limit
await db.collection('users').find().limit(10).toArray()
```

### Update
```javascript
// One
await db.collection('users').updateOne(
  { _id: new ObjectId('...') },
  { $set: { name: 'John Updated' } }
)

// Many
await db.collection('users').updateMany(
  { isActive: false },
  { $set: { status: 'inactive' } }
)

// Upsert
await db.collection('users').updateOne(
  { email: 'new@example.com' },
  { $set: { name: 'New User' } },
  { upsert: true }
)
```

### Delete
```javascript
await db.collection('users').deleteOne({ _id: new ObjectId('...') })
await db.collection('users').deleteMany({ isActive: false })
```

## Operadores

### Comparison
```javascript
{ age: { $eq: 30 } }
{ age: { $ne: 30 } }
{ age: { $gt: 18 } }
{ age: { $gte: 18 } }
{ age: { $lt: 65 } }
{ age: { $lte: 65 } }
{ age: { $in: [18, 25, 30] } }
{ age: { $nin: [60, 65] } }
```

### Logical
```javascript
{ $and: [{ age: { $gte: 18 } }, { isActive: true }] }
{ $or: [{ status: 'active' }, { role: 'admin' }] }
{ $not: { age: { $lt: 18 } } }
{ $nor: [{ status: 'banned' }, { deleted: true }] }
```

### Element
```javascript
{ age: { $exists: true } }
{ age: { $type: 'number' } }
{ name: { $exists: true, $type: 'string' } }
```

### Array
```javascript
{ tags: { $in: ['developer', 'python'] } }
{ tags: { $all: ['python', 'javascript'] } }
{ tags: { $size: 3 } }
{ 'scores.0': { $gte: 90 } }  // Array by index
```

### Update Operators
```javascript
// $set
{ $set: { name: 'New Name' } }

// $unset
{ $unset: { age: '' } }

// $inc
{ $inc: { score: 1 } }

// $push
{ $push: { tags: 'new-tag' } }

// $pull
{ $pull: { tags: 'old-tag' } }

// $addToSet
{ $addToSet: { tags: 'unique-tag' } }
```

## Aggregation Pipeline

```javascript
const pipeline = [
  // Stage 1: Match
  { $match: { status: 'active' } },

  // Stage 2: Group
  { $group: {
    _id: '$department',
    total: { $sum: '$salary' },
    count: { $sum: 1 },
    avg: { $avg: '$salary' }
  }},

  // Stage 3: Sort
  { $sort: { total: -1 } },

  // Stage 4: Limit
  { $limit: 10 },

  // Stage 5: Project
  { $project: {
    department: '$_id',
    total: 1,
    count: 1,
    avg: { $round: ['$avg', 2] },
    _id: 0
  }}
]

const result = await db.collection('employees').aggregate(pipeline).toArray()
```

## Índices

```javascript
// Simple
await db.collection('users').createIndex({ email: 1 }, { unique: true })

// Compound
await db.collection('products').createIndex({ category: 1, price: -1 })

// Text
await db.collection('articles').createIndex({ title: 'text', content: 'text' })

// Partial
await db.collection('orders').createIndex(
  { createdAt: -1 },
  { partialFilterExpression: { status: 'pending' } }
)

// TTL
await db.collection('sessions').createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)
```

## Transactions

```javascript
const session = client.startSession()

try {
  await session.withTransaction(async () => {
    await db.collection('accounts').updateOne(
      { _id: fromAccountId },
      { $inc: { balance: -amount } },
      { session }
    )
    await db.collection('accounts').updateOne(
      { _id: toAccountId },
      { $inc: { balance: amount } },
      { session }
    )
  })
} finally {
  await session.endSession()
}
```

## Prós

- + Schema flexível
- + Alta escalabilidade
- + Aggregation pipeline poderoso
- + JSON-like (familiar)
- + Sharding automático
- + Indexing avançado

## Contras

- - Não é relacional (sem joins)
- - ACID em documento único
- - Transactions limited em sharded
- - Memória intensiva

## Casos de Uso

| Appropriado | Inappropriado |
|-------------|---------------|
| Catálogos, perfis | Dados relacionais |
| Logs, eventos | OLAP complexo |
| cache | Transações ACID |
| Real-time analytics | Dados críticos |

## Referências

- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Aggregation Pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)
- [Indexing](https://www.mongodb.com/docs/manual/indexes/)