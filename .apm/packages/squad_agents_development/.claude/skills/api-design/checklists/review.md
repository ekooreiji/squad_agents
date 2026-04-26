# API Review Checklist

## Endpoint Design

- [ ] URLs use nouns (not verbs)
- [ ] Consistent naming convention
- [ ] Proper HTTP methods used
- [ ] Nested resources when appropriate
- [ ] Version strategy defined

## Request/Response

- [ ] Proper status codes
- [ ] Consistent response format
- [ ] Error responses follow RFC 7807
- [ ] Pagination implemented
- [ ] Filtering and sorting supported
- [ ] Field selection (optional)

## Authentication

- [ ] Authentication strategy defined
- [ ] Token validation implemented
- [ ] Authorization checks in place
- [ ] API keys or JWT properly handled

## Security

- [ ] HTTPS enforced
- [ ] Input validation
- [ ] SQL injection prevention
- [ ] Rate limiting implemented
- [ ] CORS properly configured

## Documentation

- [ ] OpenAPI spec updated
- [ ] Endpoint descriptions
- [ ] Request/Response examples
- [ ] Error codes documented
- [ ] Authentication requirements

## Performance

- [ ] Pagination for large datasets
- [ ] Indexes on filter columns
- [ ] Caching strategy
- [ ] Query optimization
- [ ] Connection pooling