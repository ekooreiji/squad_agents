# Docker

Containerization.

## Install

```bash
# Ubuntu
curl -fsSL https://get.docker.com | sh

# macOS
brew install --cask docker

# Verify
docker --version
```

## Concepts

### Image
Template for container.

### Container
Running instance of image.

## Commands

```bash
# Run container
docker run hello-world
docker run -d nginx
docker run -p 8080:80 nginx

# List containers
docker ps
docker ps -a

# Stop/Start
docker stop mycontainer
docker start mycontainer

# Remove
docker rm mycontainer
```