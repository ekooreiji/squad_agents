# Volumes

Data persistence.

## Volume Types

### Named Volumes

```bash
docker run -v mydata:/app/data myapp

# docker-compose.yml
services:
  app:
    volumes:
      - mydata:/app/data
```

### Bind Mounts

```bash
docker run -v $(pwd):/app myapp
```

### tmpfs

```bash
docker run --tmpfs /app/data myapp
```

## Manage Volumes

```bash
# List volumes
docker volume ls

# Remove unused
docker volume prune

# Remove specific
docker volume rm mydata
```