# Docker - Introdução

## O que é Docker

Docker é uma plataforma para desenvolver, enviar e executar aplicações em containers.

## Conceitos

| Conceito | Descrição |
|----------|-----------|
| **Image** | Template readonly |
| **Container** | Instance de uma image |
| **Dockerfile** | Recipe para criar image |
| **Registry** | Repository de images |

## Comandos Básicos

```bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 8080:8080 myapp:1.0

# List containers
docker ps

# Stop container
docker stop container_id

# Logs
docker logs container_id

# Remove container
docker rm container_id
```

## Arquitetura

```
┌─────────────────────────────────────────┐
│              Host                       │
├─────────────────────────────────────────┤
│  ┌──────────┐    ┌──────────┐         │
│  │Container │    │Container │         │
│  │   A      │    │   B      │         │
│  └────┬─────┘    └────┬─────┘         │
│       │               │               │
│  ┌────▼───────────────▼────┐          │
│  │    Docker Engine       │          │
│  └───────────────────────┘          │
└─────────────────────────────────────────┘
```