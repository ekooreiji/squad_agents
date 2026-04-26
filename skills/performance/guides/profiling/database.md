# Database Profiling

## EXPLAIN

```sql
EXPLAIN ANALYZE
SELECT u.name, p.title
FROM users u
JOIN posts p ON u.id = p.user_id
WHERE u.id = 1;
```

## PostgreSQL Logs

```sql
-- Enable slow query log
ALTER SYSTEM SET log_min_duration_statement = 1000;

-- Check logs
SELECT query, calls, mean_time, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

## MySQL EXPLAIN

```sql
EXPLAIN FORMAT=JSON
SELECT * FROM users WHERE email = 'test@example.com';
```

## Index Usage

```sql
-- Check indexes
SELECT
    schemaname,
    tablename,
    indexname,
    idx_scan,
    idx_tup_read,
    idx_tup_fetch
FROM pg_stat_user_indexes;
```