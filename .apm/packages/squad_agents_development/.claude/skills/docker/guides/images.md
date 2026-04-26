# Images

Building images.

## Build Image

```bash
docker build -t myapp .
docker build -t myapp:1.0 .
docker build -t registry/myapp:latest .
```

## List Images

```bash
docker images
docker image ls
```

## Remove Image

```bash
docker rmi myapp
docker image prune
```

## Tag Image

```bash
docker tag myapp:latest myapp:1.0
docker tag myapp registry/myapp:latest
```

## Push to Registry

```bash
docker login
docker push registry/myapp:latest
```

## Pull from Registry

```bash
docker pull nginx
docker pull nginx:latest
```