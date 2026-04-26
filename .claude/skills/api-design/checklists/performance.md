# API Performance Checklist

## Database Optimization

- [ ] Database indexes on filter columns
- [ ] Database indexes on sort columns
- [ ] Connection pooling configured
- [ ] Query optimization (no N+1)
- [ ] Eager loading when needed

## Caching Strategy

- [ ] Response caching for immutable data
- [ ] Cache invalidation strategy
- [ ] ETags implemented
- [ ] Cache headers (Cache-Control)
- [ ] Redis or Memcached

## Pagination

- [ ] Pagination for all list endpoints
- [ ] Default limit defined
- [ ] Maximum limit enforced
- [ ] Cursor-based for large datasets

## Rate Limiting

- [ ] Rate limits defined
- [ ] Different tiers (free/paid)
- [ ] Per-user limits
- [ ] Per-IP limits
- [ ] Graceful degradation

## Network

- [ ] GZIP compression
- [ ] Keep-alive connections
- [ ] CDN for static assets
- [ ] Connection timeouts
- [ ] Request/response size limits