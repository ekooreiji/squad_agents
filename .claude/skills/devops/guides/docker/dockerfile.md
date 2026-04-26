# Dockerfile

## Estrutura

```dockerfile
# Base image
FROM python:3.11-slim

# Labels
LABEL maintainer="dev@example.com"
LABEL version="1.0"

# Work directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy code
COPY . .

# Environment variables
ENV PORT=8080
ENV NODE_ENV=production

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/health || exit 1

# Entrypoint
CMD ["python", "main.py"]
```

## Python Multi-stage

```dockerfile
# Build stage
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt --prefix=/deps
COPY --from=/deps /deps /usr/local/lib/python3.11/site-packages

# Production stage
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .
CMD ["python", "main.py"]
```

## Best Practices

- Use official base images
- Multi-stage builds for smaller images
- .dockerignore file
- Don't run as root