# Commands

Redis commands.

## String Commands

```redis
SET key value
GET key
DEL key
EXISTS key
EXPIRE key 60
TTL key
```

## List Commands

```redis
LPUSH key value
RPUSH key value
LPOP key
RPOP key
LRANGE key 0 -1
```

## Set Commands

```redis
SADD key member
SREM key member
SCARD key
SMEMBERS key
```

## Hash Commands

```redis
HSET key field value
HGET key field
HDEL key field
HGETALL key
```

## Transaction

```redis
MULTI
SET key1 value1
SET key2 value2
EXEC
```