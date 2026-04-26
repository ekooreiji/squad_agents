# Migrations Best Practices

## Python - Alembic

### Create Migration

```bash
# Init alembic
alembic init alembic

# Create migration
alembic revision --autogenerate -m "add user table"

# Apply
alembic upgrade head

# Rollback
alembic downgrade -1
```

### Migration Template

```python
"""add user table

Revision ID: 001
Revises:
Create Date: 2024-01-01

"""
from alembic import op
import sqlalchemy as sa

revision = '001'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(100), nullable=False),
        sa.Column('email', sa.String(255), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_users_email', 'users', ['email'], unique=True)

def downgrade():
    op.drop_index('ix_users_email', 'users')
    op.drop_table('users')
```

### Best Practices

- Always define `downgrade`
- Use transactions where possible
- Test rollback in dev
- Avoid changing large tables in production
- Use `batch_mode` for SQLite

## Django Migrations

```bash
# Create
python manage.py makemigrations

# Apply
python manage.py migrate

# Show SQL
python manage.py sqlmigrate app_name 0001
```

## TypeScript - Prisma

```bash
# Auto-generate
npx prisma migrate dev --name init

# Apply
npx prisma migrate deploy

# Reset
npx prisma migrate reset
```

## TypeScript - TypeORM

```bash
# Generate migration
npm run typeorm migration:generate -- -n init

# Run
npm run typeorm migration:run
```

## Sequelize

```bash
# Generate
npx sequelize-cli migration:generate -- -n init

# Run
npx sequelize-cli db:migrate
```

## Migration Checklist

- [ ] Test migration in dev/staging first
- [ ] Have rollback plan
- [ ] Run during low traffic
- [ ] Monitor after deployment
- [ ] Keep migrations small
- [ ] No schema changes in hot paths