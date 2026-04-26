# Testing Database

## Python - Pytest with SQLAlchemy

```python
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, User

@pytest.fixture
def db_session():
    engine = create_engine('sqlite:///:memory:')
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.close()

def test_create_user(db_session):
    user = User(name='John', email='john@test.com')
    db_session.add(user)
    db_session.commit()
    
    result = db_session.query(User).first()
    assert result.name == 'John'
    assert result.email == 'john@test.com'
```

## Python - Django Test

```python
from django.test import TestCase
from myapp.models import User

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(
            name='John',
            email='john@test.com'
        )
        self.assertEqual(user.name, 'John')
        self.assertFalse(user.is_active)
```

## TypeScript - Prisma Test

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

beforeAll(async () => {
  await prisma.$connect()
})

afterAll(async () => {
  await prisma.$disconnect()
})

beforeEach(async () => {
  await prisma.user.deleteMany()
})

test('create user', async () => {
  const user = await prisma.user.create({
    data: { name: 'John', email: 'john@test.com' }
  })
  
  expect(user.name).toBe('John')
})
```

## Testing Strategies

| Strategy | Use |
|----------|-----|
| In-memory DB | Fast unit tests |
| Docker DB | Integration tests |
| Transaction rollback | Isolate tests |
| Fixtures | Reusable data |

## Transaction Rollback Pattern

```python
@pytest.fixture
def db_with_rollback(db_session):
    transaction = db_session.begin()
    yield db_session
    transaction.rollback()
```

```typescript
// Prisma
beforeEach(async () => {
  await prisma.$transaction([
    prisma.user.deleteMany(),
  ])
})
```