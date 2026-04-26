# Repository Template

## Python (SQLAlchemy)

```python
from sqlalchemy.orm import Session
from typing import List, Optional, Type, TypeVar
from models.base import Base

ModelType = TypeVar('ModelType', bound=Base)

class Repository:
    def __init__(self, model: Type[ModelType], session: Session):
        self.model = model
        self.session = session

    def find_by_id(self, id: int) -> Optional[ModelType]:
        return self.session.query(self.model).filter(self.model.id == id).first()

    def find_all(self) -> List[ModelType]:
        return self.session.query(self.model).all()

    def find_by(self, **kwargs) -> List[ModelType]:
        return self.session.query(self.model).filter_by(**kwargs).all()

    def create(self, data: dict) -> ModelType:
        instance = self.model(**data)
        self.session.add(instance)
        self.session.commit()
        return instance

    def update(self, id: int, data: dict) -> Optional[ModelType]:
        instance = self.find_by_id(id)
        if instance:
            for key, value in data.items():
                setattr(instance, key, value)
            self.session.commit()
        return instance

    def delete(self, id: int) -> bool:
        instance = self.find_by_id(id)
        if instance:
            self.session.delete(instance)
            self.session.commit()
            return True
        return False
```

## TypeScript (Prisma)

```typescript
interface Repository<T> {
  findById(id: number): Promise<T | null>
  findAll(): Promise<T[]>
  create(data: Partial<T>): Promise<T>
  update(id: number, data: Partial<T>): Promise<T>
  delete(id: number): Promise<void>
}

function createRepository<T>(model: any): Repository<T> {
  return {
    async findById(id: number) {
      return model.findUnique({ where: { id } })
    },
    async findAll() {
      return model.findMany()
    },
    async create(data: Partial<T>) {
      return model.create({ data })
    },
    async update(id: number, data: Partial<T>) {
      return model.update({ where: { id }, data })
    },
    async delete(id: number) {
      return model.delete({ where: { id } })
    },
  }
}
```

## TypeScript (Mongoose)

```typescript
interface Repository<T extends Document> {
  findById(id: string): Promise<T | null>
  findAll(): Promise<T[]>
  create(data: Partial<T>): Promise<T>
  update(id: string, data: Partial<T>): Promise<T | null>
  delete(id: string): Promise<void>
}

function createRepository<T extends Document>(model: Model<T>): Repository<T> {
  return {
    async findById(id: string) {
      return model.findById(id)
    },
    async findAll() {
      return model.find()
    },
    async create(data: Partial<T>) {
      return model.create(data)
    },
    async update(id: string, data: Partial<T>) {
      return model.findByIdAndUpdate(id, data, { new: true })
    },
    async delete(id: string) {
      return model.findByIdAndDelete(id)
    },
  }
}
```