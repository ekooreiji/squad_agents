# SQLAlchemy Tutorial

## Visão Geral

SQLAlchemy é o ORM Python mais flexível e completo, fornece tanto alto nível (ORM) quanto baixo nível (Core).

## Instalação

```bash
pip install sqlalchemy
pip install psycopg2-binary  # PostgreSQL
pip install pymysql         # MySQL
```

## Configuração

### Engine e Session
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

engine = create_engine(
    'postgresql://user:pass@localhost/mydb',
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True
)

Session = sessionmaker(bind=engine)
Base = declarative_base()
```

### Async (opcional)
```python
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

async_engine = create_async_engine(
    'postgresql+asyncpg://user:pass@localhost/mydb'
)

AsyncSession = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False
)
```

## Models

### Model Básico
```python
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.sql import func

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    def __repr__(self):
        return f'<User {self.email}>'

# Criar tables
Base.metadata.create_all(engine)
```

### Relacionamentos
```python
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    posts = relationship('Post', back_populates='author', cascade='all, delete-orphan')

class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    content = Column(Text)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    author = relationship('User', back_populates='posts')
```

### One-to-Many
```python
class Parent(Base):
    __tablename__ = 'parents'

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    children = relationship('Child', back_populates='parent')

class Child(Base):
    __tablename__ = 'children'

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    parent_id = Column(Integer, ForeignKey('parents.id'))
    parent = relationship('Parent', back_populates='children')
```

### Many-to-Many
```python
association_table = Table(
    'user_roles',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('users.id')),
    Column('role_id', Integer, ForeignKey('roles.id'))
)

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    roles = relationship('Role', secondary=association_table, back_populates='users')

class Role(Base):
    __tablename__ = 'roles'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    users = relationship('User', secondary=association_table, back_populates='roles')
```

## CRUD

### Create
```python
session = Session()

# Single
user = User(name='John', email='john@example.com')
session.add(user)
session.commit()

# Multiple
users = [
    User(name='Alice', email='alice@example.com'),
    User(name='Bob', email='bob@example.com')
]
session.add_all(users)
session.commit()
```

### Read
```python
session = Session()

# Get by ID
user = session.get(User, 1)

# Query
user = session.query(User).filter(User.email == 'john@example.com').first()

# All
users = session.query(User).all()

# With filter
users = session.query(User).filter(
    User.is_active == True,
    User.name.like('J%')
).all()

# Order by
users = session.query(User).order_by(User.name).all()

# Limit/Offset
users = session.query(User).limit(10).offset(20).all()

# Count
count = session.query(User).count()
```

### Update
```python
session = Session()

# Update single
user = session.query(User).filter(User.id == 1).first()
user.name = 'John Updated'
session.commit()

# Update multiple
session.query(User).filter(
    User.is_active == False
).update({'status': 'inactive'})
session.commit()
```

### Delete
```python
session = Session()

# Delete single
user = session.query(User).filter(User.id == 1).first()
session.delete(user)
session.commit()

# Delete multiple
session.query(User).filter(User.is_active == False).delete()
session.commit()
```

## Relationships

### lazy Loading
```python
# Default: lazy='select'
posts = user.posts  # Separate query

# lazy='joined' - JOIN in same query
class User(Base):
    __tablename__ = 'users'
    posts = relationship('Post', back_populates='author', lazy='joined')

# lazy='selectin' - SELECT IN
class User(Base):
    __tablename__ = 'users'
    posts = relationship('Post', back_populates='author', lazy='selectin')

# lazy='subquery'
class User(Base):
    __tablename__ = 'users'
    posts = relationship('Post', back_populates='author', lazy='subquery')
```

### Eager Loading
```python
from sqlalchemy.orm import selectinload, joinedload, subqueryload

# selectinload
users = session.query(User).options(selectinload(User.posts)).all()

# joinedload
users = session.query(User).options(joinedload(User.posts)).all()
```

## Joins

```python
# Join
results = session.query(User, Post).join(Post).all()

# Multiple joins
results = session.query(User, Post, Comment).join(Post).join(Comment).all()

# Outer join
from sqlalchemy.orm import outerjoin
results = session.query(User, Post).outerjoin(Post).all()
```

## Aggregations

```python
from sqlalchemy import func, desc

# Count
session.query(func.count(User.id)).scalar()

# Sum
session.query(func.sum(Order.amount)).scalar()

# Avg
session.query(func.avg(Salary.amount)).scalar()

# Group by
results = session.query(
    User.department,
    func.count(User.id).label('count')
).group_by(User.department).all()
```

## Async com SQLAlchemy

```python
from sqlalchemy.ext.asyncio import AsyncSession

async def get_users():
    async with AsyncSession(async_engine) as session:
        result = await session.execute(
            select(User).where(User.is_active == True)
        )
        return result.scalars().all()

async def create_user(user: User):
    async with AsyncSession(async_engine) as session:
        session.add(user)
        await session.commit()
        await session.refresh(user)
        return user
```

## Connection Pool

```python
from sqlalchemy.pool import QueuePool

engine = create_engine(
    'postgresql://user:pass@localhost/mydb',
    poolclass=QueuePool,
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True,
    pool_recycle=3600
)
```

## Troubleshooting

### N+1 Queries
```python
# Solução: eager loading
users = session.query(User).options(selectinload(User.posts)).all()
```

### Connection Leaks
```python
# Sempre fechar session
session = Session()
try:
    # work
finally:
    session.close()

# Ou usar context manager
from contextlib import contextmanager

@contextmanager
def get_session():
    session = Session()
    try:
        yield session
    finally:
        session.close()
```

## Referências

- [SQLAlchemy Docs](https://docs.sqlalchemy.org/)
- [ORM Tutorial](https://docs.sqlalchemy.org/en/20/orm/tutorial.html)
- [Expressions](https://docs.sqlalchemy.org/en/20/core/tutorial.html)