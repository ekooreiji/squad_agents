# Integration Tests - Database

## Estratégias de Database Testing

## 1. In-Memory Database

```python
# SQLite in-memory
engine = create_engine("sqlite:///:memory:")
```

## 2. Docker Database

```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres-test:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: test
      POSTGRES_DB: test
    ports:
      - "5432:5432"
```

## 3. Test Containers

```python
import pytest
from testcontainers.postgres import PostgresContainer

@pytest.fixture
def postgres():
    with PostgresContainer("postgres:15") as postgres:
        yield postgres
```

## Python com PostgreSQL

```python
# tests/integration/test_database.py
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

@pytest.fixture
def db():
    engine = create_engine("postgresql://user:pass@localhost/testdb")
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.close()
```

## Testes de Transação

```python
def test_create_user_transaction(db):
    user = User(name="John")
    db.add(user)
    db.commit()
    
    result = db.query(User).first()
    assert result.name == "John"

def test_rollback_on_error(db):
    user = User(name="John")
    db.add(user)
    
    try:
        # This will fail
        db.add(User(name=None))
    except:
        db.rollback()
    
    # User should not be created
    assert db.query(User).count() == 0
```

## Fixture Factory

```python
@pytest.fixture
def user_factory(db):
    def _create_user(name, email):
        user = User(name=name, email=email)
        db.add(user)
        db.commit()
        return user
    return _create_user

def test_create_multiple_users(user_factory):
    user1 = user_factory("John", "john@test.com")
    user2 = user_factory("Jane", "jane@test.com")
    
    assert db.query(User).count() == 2
```

## Migration em Tests

```python
@pytest.fixture(autouse=True)
def migrate_db():
    # Run migrations before each test
    run_migrations()
    yield
    # Clean up after
    drop_all_tables()
```

## Referências

- [Test Containers](https://testcontainers.com/)
- [Database Integration Testing](https://docs.pytest.org/en/stable/)