# Database

Async ORM.

## Install

```bash
pip install sqlalchemy
```

## Setup

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = 'sqlite+aiosqlite:///db.sqlite'
engine = create_async_engine(DATABASE_URL)
async_session = sessionmaker(engine, class_=AsyncSession)

async def get_db():
    async with async_session() as session:
        yield session
```

## SQLAlchemy Model

```python
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
```

## CRUD

```python
from fastapi import Depends

async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User))
    return result.scalars().all()
```