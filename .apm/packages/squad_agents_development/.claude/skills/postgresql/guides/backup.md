# Backup

pg_dump, restore.

## Backup

```sql
-- Dump database
pg_dump -U postgres mydb > backup.sql

-- Backup specific table
pg_dump -U postgres -t users mydb > users_backup.sql

-- Backup with custom format
pg_dump -U postgres -Fc mydb > backup.dump
```

## Restore

```sql
-- Restore from SQL
psql -U postgres mydb < backup.sql

-- Restore from custom format
pg_restore -U postgres -d mydb backup.dump
```

## Schedule (cron)

```bash
# crontab
0 2 * * * pg_dump -U postgres mydb > /backups/mydb_$(date +\%Y\%m\%d).sql
```

## Point-in-Time Recovery

```bash
# Set WAL level
ALTER SYSTEM SET wal_level = replica;
ALTER SYSTEM SET max_wal_senders = 3;

# Backup base
pg_basebackup -h localhost -D /backups/base -U replica
```