# Data Types

Redis data types.

## Strings

```redis
SET mykey "Hello"
GET mykey
INCR counter
DECR counter
APPEND mykey " World"
```

## Lists

```redis
RPUSH mylist "first"
LPUSH mylist "newfirst"
LRANGE mylist 0 -1
```

## Sets

```redis
SADD myset "member1"
SADD myset "member2"
SMEMBERS myset
SISMEMBER myset "member1"
```

## Sorted Sets

```redis
ZADD leaderboard 100 "player1"
ZADD leaderboard 200 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES
```

## Hashes

```redis
HSET user:1 name "João"
HGET user:1 name
HGETALL user:1
```

## Geospatial

```redis
GEOADD cities -122.4194 37.7749 "San Francisco"
GEODIST cities "San Francisco" "New York" km