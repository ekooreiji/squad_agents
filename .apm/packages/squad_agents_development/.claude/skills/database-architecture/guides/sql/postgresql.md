# PostgreSQL

## Visão Geral

PostgreSQL é um SGBD relacional open-source robusto com mais de 35 anos de desenvolvimento.

## Características

| Característica | Descrição |
|---------------|-----------|
| **ACID** | Suporte completo a transações |
| **Tipos** | JSON/JSONB, UUID, Array, HStore, PostGIS, Range |
| **Extensões** | Rich ecosystem (PostGIS, pg_trgm, etc.) |
| **Particionamento** | Table partitioning nativo |
| **Replicação** | Streaming replication, Logical replication |
| **Full-text search** |(tsvector/tsquery) nativo |

## Instalação

### macOS
```bash
brew install postgresql@16
brew services start postgresql@16
```

### Docker
```bash
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  postgres:16
```

### Conexão
```bash
psql -h localhost -U postgres -d mydb
```

## Tipos de Dados

### Tipos Básicos
```sql
-- Numéricos
INTEGER, BIGINT, SMALLINT
DECIMAL(p, s), NUMERIC(p, s)
REAL, DOUBLE PRECISION

-- String
CHAR(n), VARCHAR(n), TEXT

-- Data/hora
DATE, TIME, TIMESTAMP, TIMESTAMPTZ, INTERVAL

-- Boolean
BOOLEAN
```

### Tipos Avançados
```sql
-- JSON
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    data JSONB,
    metadata JSONB GENERATED ALWAYS AS (data->>'metadata') STORED
);

-- Array
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    values TEXT[]);

-- Enum
CREATE TYPE status AS ENUM ('pending', 'active', 'completed');

-- Range
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    room_id INTEGER,
    period TSRANGE,
    EXCLUDE USING gist (room_id WITH =, period WITH &&));
```

## Índices

```sql
-- B-tree (padrão)
CREATE INDEX idx_users_email ON users(email);

-- Hash
CREATE INDEX idx_users_email_hash ON users USING HASH (email);

-- GiST (dados espaciais)
CREATE INDEX idx_locations ON locations USING GIST (geom);

-- GIN (JSONB, array)
CREATE INDEX idx_data_gin ON documents USING GIN (data);

-- BRIN (grande volume sequencial)
CREATE INDEX idx_created_brin ON logs USING BRIN (created_at);
```

## Constraints

```sql
-- Unique
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);

-- Check
ALTER TABLE orders ADD CONSTRAINT positive_amount
    CHECK (amount > 0);

-- Foreign Key
ALTER TABLE orders ADD CONSTRAINT fk_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE;

-- Exclusion (sobrescreve)
ALTER TABLE reservations ADD CONSTRAINT no_overlap
    EXCLUDE USING gist (room_id WITH =, period WITH &&);
```

## Views

```sql
-- View simples
CREATE VIEW active_users AS
SELECT id, email, name
FROM users
WHERE status = 'active';

-- View materializada (cache)
CREATE MATERIALIZED VIEW monthly_sales AS
SELECT date_trunc('month', created_at) as month,
       SUM(amount) as total
FROM orders
GROUP BY 1
WITH DATA;

-- Refresh
REFRESH MATERIALIZED VIEW monthly_sales;
```

## Window Functions

```sql
-- Running total
SELECT id, amount,
       SUM(amount) OVER (ORDER BY id) as running_total
FROM orders;

-- Ranking
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- Partition
SELECT department, name, salary,
       AVG(salary) OVER (PARTITION BY department) as dept_avg
FROM employees;
```

## Common Table Expressions (CTE)

```sql
-- Recursive
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;
```

## Migrations (Python)

```python
# alembic/env.py
from alembic import op
import sqlalchemy as sa

revision = '001'
down_revision = None

def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('email', sa.String(255), unique=True),
        sa.Column('name', sa.String(100)),
        sa.Column('created_at', sa.DateTime(), server_default=func.now())
    )

def downgrade():
    op.drop_table('users')
```

## Connection Pool (Python)

```python
from sqlalchemy.pool import QueuePool
from sqlalchemy import create_engine

engine = create_engine(
    'postgresql://user:pass@localhost/mydb',
    poolclass=QueuePool,
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True
)
```

## Prós

- + Tipos avançados (JSON, arrays, geospatial)
- + Extensões poderosas
- + Performance em leituras
- + FULL-text search nativo
- + ACID completo
- + Window functions

## Contras

- - Tuning necessário para máximo desempenho
- - Replicação mais complexa
- - Curva de aprendizado para features avançadas

## Referências

- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [PostGIS](https://postgis.net/)
- [Full-text Search](https://www.postgresql.org/docs/current/textsearch.html)