# Docker Best Practices Checklist

## Build Optimization

- [ ] Use official base images
- [ ] Use specific tag versions
- [ ] Multi-stage builds for smaller images
- [ ] Order instructions by cache efficiency
- [ ] Use .dockerignore

## Security

- [ ] Don't run as root
- [ ] Use non-root user
- [ ] Don't expose secrets in image
- [ ] Scan for vulnerabilities
- [ ] Use read-only file system

## Health

- [ ] Add HEALTHCHECK
- [ ] Set proper startup time
- [ ] Graceful shutdown

## Image Size

- [ ] Use slim/alpine variants
- [ ] Remove unnecessary files
- [ ] Combine RUN statements
- [ ] Use multi-stage builds