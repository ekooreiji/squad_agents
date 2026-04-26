# Redis Patterns

## String

```redis
SET key value
GET key
INCR counter
```

## List

```redis
RPUSH queue task
LPOP queue
```

## Hash

```redis
HSET user:1 name "João"
HGETALL user:1
```