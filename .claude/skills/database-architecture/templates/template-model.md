# Model Template

## SQLAlchemy (Python)

```python
from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from config.database import Base

class EntityName(Base):
    __tablename__ = 'entity_names'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    description = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    related_entities = relationship(
        'RelatedEntity',
        back_populates='entity',
        cascade='all, delete-orphan',
        lazy='selectin'
    )

    def __repr__(self):
        return f'<EntityName {self.name}>'
```

## Django ORM (Python)

```python
from django.db import models

class EntityName(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'entity_names'
        ordering = ['-created_at']

    def __str__(self):
        return self.name
```

## Prisma (TypeScript)

```prisma
model EntityName {
  id          Int      @id @default(autoincrement())
  name        String
  email       String   @unique
  description String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  relatedEntities RelatedEntity[]

  @@map("entity_names")
}
```

## TypeORM (TypeScript)

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { RelatedEntity } from './related-entity'

@Entity('entity_names')
export class EntityName {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => RelatedEntity, entity => entity.entity)
  relatedEntities: RelatedEntity[]
}
```

## Mongoose (TypeScript)

```typescript
import mongoose, { Schema, Document } from 'mongoose'

export interface IEntityName extends Document {
  name: string
  email: string
  description?: string
  isActive: boolean
}

const EntityNameSchema = new Schema<IEntityName>(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true },
    description: { type: String },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export const EntityName = mongoose.model<IEntityName>('EntityName', EntityNameSchema)
```

## Sequelize (TypeScript)

```typescript
import { DataTypes, Model } from 'sequelize'

export class EntityName extends Model {
  declare id: number
  declare name: string
  declare email: string
  declare description: string | null
  declare isActive: boolean
}

EntityName.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'entity_names',
    timestamps: true,
  }
)
```