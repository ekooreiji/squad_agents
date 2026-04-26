# API Validation Checklist

## REST

- [ ] Proper HTTP methods (GET, POST, PUT, DELETE)
- [ ] Correct status codes (200, 201, 204, 400, 401, 404, 500)
- [ ] HATEOAS links

## Authentication

- [ ] JWT authentication
- [ ] Token refresh
- [ ] Scopes
- [ ] mTLS (optional)

## Versioning

- [ ] Clear versioning strategy
- [ ] Deprecation notices
- [ ] Migration path

## Documentation

- [ ] OpenAPI schema
- [ ] Swagger documentation
- [ ] API reference

## Rate Limiting

- [ ] Rate limits implemented
- [ ] Proper headers (X-RateLimit-*)
- [ ] Error responses (429)

## Security

- [ ] Input validation
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CORS configured