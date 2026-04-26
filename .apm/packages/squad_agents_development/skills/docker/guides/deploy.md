# Deploy

Deploy to production.

## Build for Production

```bash
docker build -t myapp .
```

## Run in Production

```bash
docker run -d --restart unless-stopped \
  -p 80:80 \
  -e NODE_ENV=production \
  -v app_data:/app/data \
  --name myapp \
  myapp
```

## Docker Swarm

```bash
# Initialize
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml myapp

# List services
docker service ls
```

## Kubernetes

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 80
```