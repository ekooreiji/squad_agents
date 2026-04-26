# Peewee Tutorial

## Visão Geral

Peewee é um ORM Python leve e simples, focado em SQLite mas suporta múltiplos bancos.

## Instalação

```bash
pip install peewee
pip install psycopg2  # PostgreSQL
pip install pymysql   # MySQL
```

## Configuração

```python
from peewee import SqliteDatabase, PostgresqlDatabase

# SQLite
db = SqliteDatabase('mydb.sqlite')

# PostgreSQL
db = PostgresqlDatabase('mydb', user='user', password='pass')

# MySQL
db = MySQLDatabase('mydb', user='user', password='pass')
```

## Models

### Base
```python
from peewee import Model

class BaseModel(Model):
    class Meta:
        database = db
```

### Basic Model
```python
class User(BaseModel):
    name = CharField(max_length=100)
    email = CharField(max_length=255, unique=True)
    is_active = BooleanField(default=True)
    created_at = DateTimeField(default=datetime.now)

    class Meta:
        table_name = 'users'

    def __str__(self):
        return self.email
```

### Relationships
```python
class User(BaseModel):
    name = CharField(max_length=100)

class Post(BaseModel):
    title = CharField(max_length=200)
    content = TextField()
    author = ForeignKeyField(User, backref='posts', on_delete='CASCADE')
```

### ManyToMany
```python
class Student(BaseModel):
    name = CharField(max_length=100)

class Course(BaseModel):
    name = CharField(max_length=100)

# Through model
class Enrollment(BaseModel):
    student = ForeignKeyField(Student)
    course = ForeignKeyField(Course)
    enrolled_at = DateTimeField(default=datetime.now)

    class Meta:
        table_name = 'enrollments'

# Access
student.courses  # via Enrollment
course.students  # via Enrollment
```

## CRUD

### Create
```python
# Create
user = User.create(name='John', email='john@example.com')

# Save
user = User(name='John', email='john@example.com')
user.save()

# bulk_create
User.insert_many([
    {'name': 'Alice', 'email': 'alice@example.com'},
    {'name': 'Bob', 'email': 'bob@example.com'}
]).execute()
```

### Read
```python
# Get
user = User.get_by_id(1)
user = User.get(User.email == 'john@example.com')

# All
users = User.select()

# Filter
users = User.select().where(User.is_active == True)
users = User.select().where(User.name.contains('John'))
users = User.select().where(User.age >= 18)

# Order
users = User.select().order_by(User.name)

# Limit/Offset
users = User.select().limit(10).offset(20)

# First
user = User.select().where(User.is_active == True).first()

# Exists
User.select().where(User.email == 'john@example.com').exists()
```

### Update
```python
# Update single
user = User.get_by_id(1)
user.name = 'John Updated'
user.save()

# Update multiple
User.update(is_active=False).where(User.is_active == True).execute()
```

### Delete
```python
# Delete single
user = User.get_by_id(1)
user.delete_instance()

# Delete multiple
User.delete().where(User.is_active == False).execute()
```

## Queries Avançadas

### Joins
```python
# Join
posts = (Post
    .select(Post, User)
    .join(User)
    .where(User.is_active == True)
    .execute())

# Multiple joins
posts = (Post
    .select()
    .join(User)
    .join(Comment)
    .where(Comment.id > 0))
```

### Aggregations
```python
from peewee import fn

# Count
User.select().count()

# Sum
Order.select(fn.SUM(Order.amount))

# Group by
query = (User
    .select(User.department, fn.COUNT(User.id).alias('count'))
    .group_by(User.department))
```

### Subqueries
```python
# Subquery in WHERE
users = (User
    .select()
    .where(User.id.in_(
        Post.select(Post.author).group_by(Post.author)
    )))

# Subquery in SELECT
query = (User
    .select(User, fn.COUNT(Post.id).alias('post_count'))
    .join(Post, on=(User.id == Post.author))
    .group_by(User.id))
```

### Raw SQL
```python
users = User.raw('SELECT * FROM users WHERE is_active = ?', True)
users = User.raw('SELECT * FROM users WHERE is_active = $1', True)
```

## Transactions

```python
from peewee import atomic

# Atomic
with db.atomic():
    user = User.create(name='John')
    Post.create(title='Hello', author=user)

# Savepoint
with db.atomic() as txn:
    try:
        user = User.create(name='John')
        Post.create(title='Hello', author=user)
    except:
        txn.rollback()
```

## Migrations

```bash
# Create migrations
peewee migrate --database sqlite:///mydb create users

# Apply
peewee migrate --database sqlite:///mydb apply

# Rollback
peewee migrate --database sqlite:///mydb rollback
```

## Connection Pool

```python
from playhouse.pool import PooledDatabase

db = PooledDatabase(
    'postgres',
    max_connections=10,
    stale_timeout=10,
    timeout=30,
    user='user',
    password='pass',
    database='mydb'
)
```

## Prós

- + Leve e simples
- + Interface limpa
- + SQLite-first
- + Rápido para apps simples
- + Código legível

## Contras

- - Menos features que SQLAlchemy
- - Menos dialects
- - Comunidade menor
- - Async limitado

## Casos de Uso

| Appropriado | Inappropriado |
|-------------|---------------|
| Apps simples | Apps complexos |
| SQLite primary | Multi-banco complexo |
| Prototyping | Sistemas críticos |
| Scripts | Enterprise |

## Referências

- [Peewee Docs](https://docs.peewee-orm.com/)
- [Peewee Examples](https://examples.peewee-orm.com/)