# Integration Tests - JavaScript/TypeScript

## Frameworks

| Framework | Uso |
|----------|-----|
| **Supertest** | Express API |
| **Playwright** | Browser |
| **Nock** | HTTP mocking |

## Testando Express API

```typescript
// tests/integration/api.test.ts
import request from 'supertest';
import { app } from '../src/app';

describe('User API', () => {
  describe('POST /users', () => {
    it('creates a user', async () => {
      const response = await request(app)
        .post('/users')
        .send({ name: 'John', email: 'john@example.com' })
        .expect(201);
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('John');
    });
    
    it('validates email', async () => {
      const response = await request(app)
        .post('/users')
        .send({ name: 'John' })
        .expect(422);
    });
  });
  
  describe('GET /users/:id', () => {
    it('returns a user', async () => {
      // Create user first
      const created = await request(app)
        .post('/users')
        .send({ name: 'John', email: 'john@example.com' });
      
      const response = await request(app)
        .get(`/users/${created.body.id}`)
        .expect(200);
      
      expect(response.body.name).toBe('John');
    });
    
    it('returns 404 for non-existent', async () => {
      await request(app)
        .get('/users/999')
        .expect(404);
    });
  });
});
```

## Testando com MongoDB

```typescript
// tests/integration/mongodb.test.ts
import { MongoClient } from 'mongodb';

describe('Database Integration', () => {
  let connection: MongoClient;
  let db: any;
  
  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URI!);
    db = connection.db('test');
  });
  
  afterAll(async () => {
    await connection.close();
  });
  
  beforeEach(async () => {
    await db.collection('users').deleteMany({});
  });
  
  it('inserts and retrieves user', async () => {
    await db.collection('users').insertOne({
      name: 'John',
      email: 'john@example.com'
    });
    
    const user = await db.collection('users').findOne({ name: 'John' });
    expect(user?.name).toBe('John');
  });
});
```

## Testando PostgreSQL

```typescript
// tests/integration/postgres.test.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.TEST_DATABASE_URL,
});

describe('Postgres Integration', () => {
  beforeAll(async () => {
    await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL, name TEXT)');
  });
  
  afterAll(async () => {
    await pool.end();
  });
  
  beforeEach(async () => {
    await pool.query('DELETE FROM users');
  });
  
  it('inserts and queries', async () => {
    await pool.query('INSERT INTO users (name) VALUES ($1)', ['John']);
    
    const result = await pool.query('SELECT * FROM users');
    expect(result.rows.length).toBe(1);
    expect(result.rows[0].name).toBe('John');
  });
});
```