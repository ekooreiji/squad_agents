# Data Types

PostgreSQL types.

## Numeric

```sql
-- Integers
SMALLINT   -- -32768 to 32767
INTEGER   -- -2147483648 to 2147483647
BIGINT    -- -9223372036854775808 to 9223372036854775807

-- Decimal
NUMERIC(10, 2)  -- Exact decimal
DECIMAL(10, 2)
REAL       -- 4-byte floating
DOUBLE PRECISION  -- 8-byte floating
SERIAL     -- Auto-increment
BIGSERIAL  -- Large auto-increment
```

## Character

```sql
CHAR(10)      -- Fixed length
VARCHAR(255)  -- Variable length
TEXT         -- Unlimited length
```

## Date/Time

```sql
DATE          -- Date only
TIME          -- Time only
TIMESTAMP     -- Date + time
TIMESTAMPTZ   -- Date + time + timezone
INTERVAL      -- Time interval
```

## Boolean

```sql
BOOLEAN  -- true/false/null
```

## JSON

```sql
JSON    -- Validates JSON
JSONB   -- Binary, faster
```

```sql
SELECT '{"name": "João"}'::JSON;
SELECT '{"name": "João"}'::JSONB;
```

## Array

```sql
CREATE TABLE products (
    name TEXT[],
    prices NUMERIC(10,2)[]
);

INSERT INTO products VALUES (ARRAY['Product A', 'Product B'], ARRAY[10.00, 20.00]);
```

## UUID

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT
);
```

## Enum

```sql
CREATE TYPE status AS ENUM ('draft', 'published', 'archived');

CREATE TABLE posts (
    status status DEFAULT 'draft'
);