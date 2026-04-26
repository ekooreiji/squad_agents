# Containers

Run containers.

## Run Commands

```bash
# Basic run
docker run myapp

# Interactive
docker run -it myapp /bin/bash

# Detached
docker run -d myapp

# Port mapping
docker run -p 8080:80 myapp

# Environment
docker run -e ENV=production myapp

# Volume mount
docker run -v /path:/container/path myapp
```

## Container Lifecycle

```bash
# Start
docker start mycontainer

# Stop
docker stop mycontainer

# Restart
docker restart mycontainer

# Pause
docker pause mycontainer

# Unpause
docker unpause mycontainer
```

## Logs

```bash
docker logs mycontainer
docker logs -f mycontainer
docker logs --tail 100 mycontainer
```

## Exec into Container

```bash
docker exec -it mycontainer /bin/bash
docker exec mycontainer ls -la
```