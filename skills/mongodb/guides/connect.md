# Connection

Connecting to MongoDB.

## Connection String

```javascript
// Local
mongodb://localhost:27017/myapp

// Atlas
mongodb+srv://username:password@cluster.mongodb.net/myapp
```

## Node.js Driver

```javascript
const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://localhost:27017');
  
  await client.connect();
  const db = client.db('myapp');
  
  await client.close();
}

main().catch(console.error);
```

## Mongoose (ODM)

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('Connected'))
  .catch(err => console.error(err));
```