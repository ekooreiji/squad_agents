# Padrões de Acesso a Dados

## Repository Pattern

Abstrai a camada de dados, forneindo uma coleção-like interface.

```python
# interfaces/user_repository.py
from abc import ABC, abstractmethod
from typing import List, Optional
from entities.user import User

class UserRepository(ABC):
    @abstractmethod
    def find_by_id(self, user_id: int) -> Optional[User]:
        pass

    @abstractmethod
    def find_all(self) -> List[User]:
        pass

    @abstractmethod
    def save(self, user: User) -> User:
        pass

    @abstractmethod
    def delete(self, user_id: int) -> None:
        pass
```

```python
# repositories/sqlalchemy_user_repository.py
from typing import List, Optional
from sqlalchemy.orm import Session
from entities.user import User
from interfaces.user_repository import UserRepository

class SQLAlchemyUserRepository(UserRepository):
    def __init__(self, session: Session):
        self.session = session

    def find_by_id(self, user_id: int) -> Optional[User]:
        return self.session.query(User).filter(User.id == user_id).first()

    def find_all(self) -> List[User]:
        return self.session.query(User).all()

    def save(self, user: User) -> User:
        self.session.add(user)
        self.session.commit()
        return user

    def delete(self, user_id: int) -> None:
        user = self.find_by_id(user_id)
        if user:
            self.session.delete(user)
            self.session.commit()
```

## Unit of Work

Garante atomicidade em operações compostas.

```python
from sqlalchemy.orm import Session

class UnitOfWork:
    def __init__(self, session: Session):
        self.session = session
        self.users = SQLAlchemyUserRepository(session)
        self.orders = SQLAlchemyOrderRepository(session)

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.rollback()

    def commit(self):
        self.session.commit()

    def rollback(self):
        self.session.rollback()

# Uso
with UnitOfWork(session) as uow:
    uow.users.save(new_user)
    uow.orders.save(new_order)
    uow.commit()  # Atomic commit
```

## DAO (Data Access Object)

Similar ao Repository, mas mais próximo do banco.

```typescript
// interfaces/user-dao.ts
interface UserDAO {
  findById(id: number): Promise<User | null>
  findAll(): Promise<User[]>
  create(user: CreateUserDTO): Promise<User>
  update(id: number, user: UpdateUserDTO): Promise<User>
  delete(id: number): Promise<void>
}

// implementations/prisma-user-dao.ts
class PrismaUserDAO implements UserDAO {
  constructor(private prisma: PrismaClient) {}

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async findAll() {
    return this.prisma.user.findMany()
  }

  async create(data: CreateUserDTO) {
    return this.prisma.user.create({ data })
  }

  async update(id: number, data: UpdateUserDTO) {
    return this.prisma.user.update({ where: { id }, data })
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
```

## Active Record

Modelo que encapsula a lógica de persistence no próprio entity.

```python
# Django-style
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    class Meta:
        db_table = 'users'

# Uso direto no modelo
user = User(name='John', email='john@example.com')
user.save()  # Método no próprio objeto
user.delete()
```

## Data Mapper

Separa completamente entity de persistence.

```python
# entity pura (sem conhecimento do banco)
class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email
        self.id = None

# mapper separado
class UserMapper:
    def to_row(self, user: User) -> dict:
        return {'name': user.name, 'email': user.email}

    def to_entity(self, row: dict) -> User:
        user = User(name=row['name'], email=row['email'])
        user.id = row['id']
        return user

class UserRepository:
    def save(self, user: User) -> User:
        mapper = UserMapper()
        if user.id:
            self.db.update('users', mapper.to_row(user))
        else:
            user.id = self.db.insert('users', mapper.to_row(user))
        return user
```

##cqrs (Command Query Responsibility Segregation)

Separa leitura de escrita.

```
┌─────────────────────────────────────────────┐
│                API Layer                   │
└─────────────────┬─────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
   ┌────▼────┐        ┌────▼────┐
   │ Commands│        │ Queries│
   │ (Write) │        │ (Read) │
   └────┬────┘        └────┬────┘
        │                   │
   ┌────▼──────────────┐    │
   │ Write Database   │◄───┘
   │ (PostgreSQL)     │
   └─────────────────┘
        │
   ┌────▼────────────────────┐
   │ Event / Projection      │
   └────────────┬───────────┘
                │
         ┌──────▼──────┐
         │ Read Database│
         │ (Elastic)   │
         └─────────────┘
```

## Escolhendo o Padrão

| Padrão | Quando Usar |
|--------|------------|
| **Repository** | Necessidade de testar com mock, abstrair persistence |
| **Unit of Work** | Operações atômicas multi-tabela |
| **DAO** | ORM já fornece, necessidade de interface específica |
| **Active Record** | Simplicidade, Django, Rails |
| **Data Mapper** | Entities de domínio separáveis |
| **CQRS** | Read/write heavy,event sourcing |

## Referências

- [Repository Pattern - Martin Fowler](https://martinfowler.com/eaaCatalog/repository.html)
- [Unit of Work - Martin Fowler](https://martinfowler.com/eaaCatalog/unitOfWork.html)
- [CQRS - Greg Young](https://martinfowler.com/bliki/CQRS.html)