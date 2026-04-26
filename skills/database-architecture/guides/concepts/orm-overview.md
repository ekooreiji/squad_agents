# ORM Overview

## O que é um ORM?

Object-Relational Mapping (ORM) é uma técnica que permite converter dados entre bancos de dados relacionais e objetos em linguagens orientadas a objetos.

## ORMs por Linguagem

### Python

| ORM | Tipo |特性 |
|-----|------|------|
| **SQLAlchemy** | Core + ORM | Flexível, completo, usado em Flask, FastAPI |
| **Django ORM** | Built-in | Integrado ao Django, simples |
| **Peewee** | Lightweight | SQLite-focused, simples |
| **Tortoise** | Async | AsyncIO, usado em FastAPI |

### JavaScript/TypeScript

| ORM | Tipo |特性 |
|-----|------|------|
| **Prisma** | Type-safe | TypeScript-first, migrations automáticas |
| **TypeORM** | Full-featured | TypeScript, decorators, João |
| **Sequelize** | Legacy | Promise-based, muitos dialects |
| **Mongoose** | ODM MongoDB | Schema validation, middleware |

## Comparação

### SQLAlchemy (Python)

```python
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100), unique=True)

engine = create_engine('postgresql://user:pass@localhost/mydb')
Session = sessionmaker(bind=engine)
session = Session()

user = User(name='John', email='john@example.com')
session.add(user)
session.commit()
```

### Django ORM (Python)

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

user = User.objects.create(name='John', email='john@example.com')
```

### Prisma (TypeScript)

```typescript
// schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}

// código
const user = await prisma.user.create({
  data: { name: 'John', email: 'john@example.com' }
})
```

### TypeORM (TypeScript)

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string
}
```

## Quando Usar Cada ORM

### SQLAlchemy
- + Flexibilidade em queries
- + Múltiplos dialects
- + Controle fino do SQL
- - Mais código boilerplate

### Django ORM
- + Integração com Django
- + Simples para apps Django
- - Acoplado ao Django

### Prisma
- + TypeScript-first
- + Migrations automáticas
- + DX excelente
- - Somente PostgreSQL, MySQL, SQLite

### TypeORM
- + Decorators
- + Suporte a múltiplos bancos
- - Documentação confusa

## Performance

| ORM | Sync | Async | Pool |
|-----|------|-------|------|
| SQLAlchemy | ✓ | ✓ | ✓ |
| Django ORM | ✓ | ✗ | ✓ |
| Prisma | ✗ | ✓ | ✓ |
| TypeORM | ✓ | ✓ | ✓ |

## Referências

- [SQLAlchemy Docs](https://docs.sqlalchemy.org/)
- [Django ORM](https://docs.djangoproject.com/en/stable/topics/db/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [TypeORM Docs](https://typeorm.io/)