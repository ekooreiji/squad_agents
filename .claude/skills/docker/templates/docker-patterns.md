# Docker Patterns

## Basic Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

## Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
```

## Run Commands

```bash
docker build -t myapp .
docker run -d -p 8080:80 myapp
docker-compose up -d
```