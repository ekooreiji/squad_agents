# Backup e Recovery

## PostgreSQL

### Backup

```bash
# Full backup (dump)
pg_dump -U user -Fc mydb > backup.dump

# Plain SQL
pg_dump -U user mydb > backup.sql

# Schema only
pg_dump -U user --schema-only mydb > schema.sql

# Data only
pg_dump -U user --data-only mydb > data.sql
```

### Restore

```bash
# From custom format
pg_restore -U user -d mydb backup.dump

# From SQL
psql -U user mydb < backup.sql
```

### Point-in-Time Recovery (PITR)

```ini
# postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /backup/wal/%f'
```

```bash
# Recovery
restore_command = 'cp /backup/wal/%f %p'
recovery_target_time = '2024-01-15 10:00:00'
```

## MySQL

### Backup

```bash
# Full backup
mysqldump -u user -p mydb > backup.sql

# All databases
mysqldump -u user -p --all-databases > backup.sql

# With locks
mysqldump -u user -p --single-transaction mydb > backup.sql
```

### Restore

```bash
mysql -u user -p mydb < backup.sql
```

## MongoDB

### Backup

```bash
# Full dump
mongodump --host localhost --out /backup/

# Specific database
mongodump --db mydb --out /backup/
```

### Restore

```bash
mongorestore /backup/
mongorestore --db mydb /backup/mydb/
```

## Redis

### Backup

```bash
# BGSAVE (async)
redis-cli BGSAVE

# Save RDB
redis-cli SAVE
```

### Restore

```bash
# Copy dump.rdb to redis data dir
cp backup/dump.rdb /var/lib/redis/dump.rdb
```

## Backup Strategy

| Strategy | Frequência | Retention |
|----------|------------| --------|
| Full backup | Diário | 30 dias |
| Incremental | A cada hora | 7 dias |
| WAL/OPlog | Contínuo | 7 dias |

## Test Restore

```bash
# Always test restore in DEV
1. Restore to staging
2. Verify data integrity
3. Run application tests
```