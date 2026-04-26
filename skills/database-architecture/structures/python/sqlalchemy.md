# SQLAlchemy Structure

## Project Structure

```
src/
├── config/
│   └── database.py      # Database configuration
├── models/
│   ├── __init__.py
│   ├── user.py          # User model
│   ├── post.py         # Post model
│   └── base.py         # Base model
├── repositories/
│   ├── __init__.py
│   ├── user_repository.py
│   └── post_repository.py
├── schemas/
│   ├── __init__.py
│   ├── user_schema.py  # Pydantic schemas
│   └── post_schema.py
├── services/
│   ├── __init__.py
│   └── user_service.py
├── routers/
│   ├── __init__.py
│   └── user_router.py
├── main.py
└── database.py         # Connection setup
```

## Database Config

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

engine = create_engine(
    'postgresql://user:pass@localhost/mydb',
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True
)

Session = sessionmaker(bind=engine)

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()
```

## Models Convention

```python
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from config.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    created_at = Column(DateTime, server_default=func.now())

    posts = relationship('Post', back_populates='author', cascade='all, delete-orphan')
```

## Repository Pattern

```python
from sqlalchemy.orm import Session
from models.user import User
from typing import List, Optional

class UserRepository:
    def __init__(self, session: Session):
        self.session = session

    def find_by_id(self, user_id: int) -> Optional[User]:
        return self.session.query(User).filter(User.id == user_id).first()

    def find_all(self) -> List[User]:
        return self.session.query(User).all()

    def create(self, user: User) -> User:
        self.session.add(user)
        self.session.commit()
        return user
```