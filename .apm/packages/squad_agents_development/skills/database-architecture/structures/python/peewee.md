# Peewee Structure

## Project Structure

```
src/
├── config/
│   └── database.py      # Database config
├── models/
│   ├── __init__.py
│   ├── base.py         # Base model
│   ├── user.py          # User model
│   └── post.py          # Post model
├── repositories/
│   ├── __init__.py
│   ├── user_repository.py
│   └── post_repository.py
├── services/
│   ├── __init__.py
│   └── user_service.py
├── main.py
└── database.py
```

## Database Config

```python
from peewee import SqliteDatabase, PostgresqlDatabase

db = SqliteDatabase('mydb.sqlite')

# For PostgreSQL
db = PostgresqlDatabase(
    'mydb',
    user='user',
    password='pass',
    host='localhost',
    port=5432
)
```

## Base Model

```python
from peewee import Model

class BaseModel(Model):
    class Meta:
        database = db
```

## Models

```python
from peewee import CharField, BooleanField, DateTimeField, ForeignKeyField, TextField
from datetime import datetime

class User(BaseModel):
    name = CharField(max_length=100)
    email = CharField(max_length=255, unique=True)
    is_active = BooleanField(default=True)
    created_at = DateTimeField(default=datetime.now)

    class Meta:
        table_name = 'users'

class Post(BaseModel):
    title = CharField(max_length=200)
    content = TextField(null=True)
    author = ForeignKeyField(User, backref='posts')
    created_at = DateTimeField(default=datetime.now)

    class Meta:
        table_name = 'posts'
```

## Repository Pattern

```python
from peewee import fn
from models.user import User

class UserRepository:
    def find_by_id(self, user_id):
        return User.get_or_none(User.id == user_id)

    def find_all(self):
        return User.select()

    def create(self, data):
        return User.create(**data)

    def count(self):
        return User.select().count()
```

## Connection Pool (Avançado)

```python
from playhouse.pool import PooledDatabase

db = PooledDatabase(
    'postgres',
    max_connections=20,
    stale_timeout=10,
    timeout=30,
    user='user',
    password='pass',
    database='mydb'
)
```

## Migrations

```bash
peewee migrate --database sqlite:///mydb create users
peewee migrate --database sqlite:///mydb apply
```