# Redis

In-memory database.

## Install

```bash
# Docker
docker run -d -p 6379:6379 redis

# Ubuntu
sudo apt install redis-server
```

## Connect

```bash
redis-cli
```

## Use Cases

- Cache
- Session store
- Message queue
- Rate limiting