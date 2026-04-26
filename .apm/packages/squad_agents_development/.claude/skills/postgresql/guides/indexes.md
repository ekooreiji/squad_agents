# Indexes

Indexes and performance.

## CREATE INDEX

```sql
-- Basic index
CREATE INDEX idx_users_name ON users(name);

-- Unique index
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Composite index
CREATE INDEX idx_posts_user_published ON posts(user_id, published);

-- Partial index
CREATE INDEX idx_posts_published ON posts(published) WHERE published = true;
```

## Index Types

```sql
-- B-tree (default)
CREATE INDEX idx_users_name ON users(name);

-- Hash
CREATE INDEX idx_users_name_hash ON users USING HASH(name);

-- GIN (for JSON/arrays)
CREATE INDEX idx_products_tags ON products USING GIN(tags);

-- GiST (full-text, spatial)
CREATE INDEX idx_content_fts ON content USING GIN(to_tsvector('portuguese', content));
```

## REINDEX

```sql
REINDEX INDEX idx_users_name;
REINDEX DATABASE mydb;
```

## EXPLAIN

```sql
EXPLAIN SELECT * FROM users WHERE age > 18;
EXPLAIN ANALYZE SELECT * FROM users WHERE age > 18;
```

## VACUUM

```sql
-- Reclaim space
VACUUM users;

-- Full vacuum
VACUUM FULL users;

-- Analyze for statistics
ANALYZE users;
```