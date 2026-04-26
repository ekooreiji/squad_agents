# Keys

Key patterns and management.

## Key Patterns

```redis
KEYS pattern
SCAN 0 MATCH user:* COUNT 100
```

## Delete Keys

```redis
DEL key1 key2 key3
DEL user:*
```

## Expire

```redis
EXPIRE key 60
EXPIREAT key 1609459200
PERSIST key
```

## Rename

```redis
RENAME key newkey
RENAMENX key newkey
```