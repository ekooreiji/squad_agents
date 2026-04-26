# Integration Tests - Python

## Frameworks

| Framework | Uso |
|----------|-----|
| **pytest** + **requests** | API testing |
| **FastAPI TestClient** | FastAPI |
| **Django TestClient** | Django |
| **SQLAlchemy** | Database |

## Testando API com FastAPI

```python
# tests/integration/test_api.py
from fastapi.testclient import TestClient
from myapp import app

client = TestClient(app)

def test_create_user():
    response = client.post(
        "/users",
        json={"name": "John", "email": "john@example.com"}
    )
    assert response.status_code == 201
    assert response.json()["name"] == "John"

def test_get_user():
    # Create first
    client.post("/users", json={"name": "John", "email": "john@example.com"})
    
    # Get
    response = client.get("/users/1")
    assert response.status_code == 200

def test_list_users():
    response = client.get("/users")
    assert response.status_code == 200
    assert "data" in response.json()
```

## Testando Database

```python
# conftest.py
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from myapp.models import Base

@pytest.fixture
def db():
    engine = create_engine("sqlite:///:memory:")
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.close()

@pytest.fixture
def test_db():
    """Database fixture for tests"""
    return TestDatabase()
```

## Testes de Banco

```python
# tests/integration/test_database.py
def test_create_and_get_user(db):
    # Create
    user = User(name="John", email="john@example.com")
    db.add(user)
    db.commit()
    
    # Get
    result = db.query(User).first()
    assert result.name == "John"
    assert result.email == "john@example.com"

def test_update_user(db):
    user = User(name="John")
    db.add(user)
    db.commit()
    
    user.name = "Jane"
    db.commit()
    
    result = db.query(User).first()
    assert result.name == "Jane"

def test_delete_user(db):
    user = User(name="John")
    db.add(user)
    db.commit()
    
    db.delete(user)
    db.commit()
    
    result = db.query(User).first()
    assert result is None
```

## Testes de Integração com Flask

```python
# tests/integration/test_flask.py
import pytest
from myapp import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_index(client):
    response = client.get("/")
    assert response.status_code == 200

def test_api_endpoint(client):
    response = client.post(
        "/api/data",
        json={"key": "value"}
    )
    assert response.status_code == 201
```