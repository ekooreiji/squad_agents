# Tables

Tables e constraints.

## CREATE TABLE

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Constraints

```sql
-- PRIMARY KEY
id INTEGER PRIMARY KEY

-- FOREIGN KEY
user_id INTEGER REFERENCES users(id)

-- UNIQUE
email VARCHAR(255) UNIQUE

-- NOT NULL
name VARCHAR(100) NOT NULL

-- CHECK
age INTEGER CHECK (age >= 18)

-- DEFAULT
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

## Multiple Constraints

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT title_not_empty CHECK (LENGTH(TRIM(title)) > 0)
);
```

## ALTER TABLE

```sql
-- Add column
ALTER TABLE users ADD COLUMN age INTEGER;

-- Add constraint
ALTER TABLE users ADD CONSTRAINT age_positive CHECK (age >= 0);

-- Rename
ALTER TABLE users RENAME TO accounts;

-- Drop column
ALTER TABLE users DROP COLUMN age;
```

## Foreign Keys

```sql
-- On delete
CREATE TABLE posts (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- On update
CREATE TABLE orders (
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE
);

-- Both
CREATE TABLE orders (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
```