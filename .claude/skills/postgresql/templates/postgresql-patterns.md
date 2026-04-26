# PostgreSQL Patterns

## Table Pattern

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Query Pattern

```sql
SELECT u.name, p.title
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.active = true
ORDER BY p.created_at DESC
LIMIT 10;
```