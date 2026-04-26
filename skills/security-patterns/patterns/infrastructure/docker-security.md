# Docker Security Pattern

## Overview

Boas práticas de segurança para containers Docker.

## Dockerfile Security

### 1. Non-Root User

```dockerfile
# Use minimal base image
FROM node:20-alpine

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

# Copy files
COPY --chown=app:app . .

# Switch to non-root user
USER app

EXPOSE 3000

CMD ["node", "index.js"]
```

### 2. Nozzle Packages

```dockerfile
FROM node:20-alpine

# Install only what you need
RUN apk add --no-cache \
    libgcc \
    libstdc++ \
    && rm -rf /var/cache/apk/*

WORKDIR /app
COPY package*.json ./

# Don't copy dev dependencies
RUN npm ci --only=production

COPY --chown=app:app . .
```

### 3. Healthcheck

```dockerfile
FROM node:20-alpine

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

WORKDIR /app
EXPOSE 3000
```

## Docker Compose Security

```yaml
version: '3.8'

services:
  app:
    build: .
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp:rw,noexec,nosuid,size=64m
   CapDrop:
      - ALL
    networks:
      - backend
    secrets:
      - db_password
    profiles:
      - app

  database:
    image: postgres:16-alpine
    security_opt:
      - no-new-privileges:true
    environment:
      POSTGRES_USER: app
      POSTGRES_DB: app_db
    volumes:
      - db_data:/var/lib/postgresql/data
    networks:
      - backend
    secrets:
      - db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d app_db"]
      interval: 10s
      timeout: 5s
      retries: 5
    profiles:
      - app

secrets:
  db_password:
    file: ./secrets/db_password.txt

volumes:
  db_data:

networks:
  backend:
    driver: bridge
```

## Container Scanning

```bash
# Trivy (recommended)
trivy image --severity HIGH,CRITICAL myapp:latest

# Snyk
snyk container test myapp:latest

# Docker Scout
docker scout cves myapp:latest
```

## Best Practices Checklist

| Practice | Description | Priority |
|----------|------------|---------|
| Non-root user | Run as non-privileged user | Required |
| Nozzle packages | Minimal packages installed | Required |
| Read-only rootfs | Mount filesystem as read-only | Recommended |
| Healthcheck | Container health monitoring | Recommended |
| No new privileges | Prevent privilege escalation | Required |
| Capabilities drop | Drop unnecessary capabilities | Required |
| No secrets in image | External secrets management | Required |
| Multi-stage build | Minimize image size | Recommended |

## Image Hardening

```dockerfile
# Multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production image
FROM node:20-alpine AS production
WORKDIR /app

# Copy only build artifacts
COPY --from=builder --chown=app:app /app/dist ./dist
COPY --from=builder --chown=app:app /app/node_modules ./node_modules

# Switch to non-root
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

## Network Isolation

```yaml
services:
  frontend:
    networks:
      - frontend
    ports:
      - "80:80"

  backend:
    networks:
      - backend
    depends_on:
      - database

  database:
    networks:
      - backend
    networks:
      backend:
        internal: true

networks:
  frontend:
  backend:
    internal: true
```

## Secret Management

```yaml
services:
  app:
    secrets:
      - db_password
      - api_key
    environment:
      - DATABASE_PASSWORD_FILE=/run/secrets/db_password
    profiles:
      - app

secrets:
  db_password:
    file: ./secrets/db_password.txt
  api_key:
    file: ./secrets/api_key.txt
```