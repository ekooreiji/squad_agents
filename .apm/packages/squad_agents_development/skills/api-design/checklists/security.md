# API Security Checklist

## Authentication

- [ ] Authentication required for protected endpoints
- [ ] Strong password policies
- [ ] Token expiration (short-lived)
- [ ] Secure token storage
- [ ] Multi-factor authentication (optional)

## Authorization

- [ ] Role-based access control
- [ ] Resource ownership validation
- [ ] Least privilege principle
- [ ] Permission checks on mutations

## Input Validation

- [ ] Validate all input
- [ ] Use parameterized queries
- [ ] Sanitize user input
- [ ] Limit request size
- [ ] Type checking

## OWASP API Security Top 10

- [ ] BOLA (Broken Object Level Authorization)
- [ ] Broken Authentication
- [ ] Broken Object Property Authorization
- [ ] Unrestricted Resource Consumption
- [ ] Broken Function Level Authorization
- [ ] Unrestricted Access to Sensitive Business Flows
- [ ] Server-Side Request Forgery
- [ ] Security Misconfiguration
- [ ] Improper Inventory Management
- [ ] Unsafe Consumption of APIs

## Data Protection

- [ ] Encryption at rest
- [ ] Encryption in transit (TLS)
- [ ] Sensitive data masking
- [ ] Secure headers
- [ ] CORS properly configured

## Monitoring

- [ ] Request logging
- [ ] Authentication events
- [ ] Error logging
- [ ] Rate limit violations
- [ ] Anomaly detection