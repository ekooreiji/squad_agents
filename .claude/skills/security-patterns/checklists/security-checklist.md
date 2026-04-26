# Security Checklist

## 1. Authentication

### Password Security
- [ ] Minimum 12 characters
- [ ] Mixed case letters
- [ ] Numbers
- [ ] Special characters
- [ ] Not in breach database
- [ ] Argon2id/bcrypt hashing

### Token Security
- [ ] JWT with RS256/ES256
- [ ] Short expiration (< 1 hour)
- [ ] Refresh token rotation
- [ ] HttpOnly cookies
- [ ] Secure flag
- [ ] SameSite=Strict

### MFA
- [ ] TOTP available
- [ ] WebAuthn supported
- [ ] Recovery codes
- [ ] Backup methods

## 2. Authorization

### Access Control
- [ ] RBAC implemented
- [ ] Permission checks on every endpoint
- [ ] Least privilege
- [ ] Resource ownership validation

### Audit
- [ ] Login attempts logged
- [ ] Permission changes logged
- [ ] Admin actions logged
- [ ] Failed access logged

## 3. Input Validation

### Data Validation
- [ ] All inputs validated
- [ ] Type checking
- [ ] Length limits
- [ ] Format validation
- [ ] Whitelist validation

### SQL Injection
- [ ] Parameterized queries only
- [ ] No string concatenation
- [ ] ORM usage
- [ ] Query validation

### XSS Prevention
- [ ] HTML sanitization
- [ ] Output encoding
- [ ] CSP headers
- [ ] HttpOnly cookies

## 4. Data Protection

### Encryption
- [ ] TLS 1.3 in transit
- [ ] AES-256 at rest
- [ ] Key management
- [ ] Certificate rotation

### Secrets
- [ ] No hardcoded secrets
- [ ] Secrets manager
- [ ] Environment separation
- [ ] Key rotation

### Privacy
- [ ] PII encryption
- [ ] Data masking
- [ ] GDPR compliance
- [ ] Data retention

## 5. API Security

### Rate Limiting
- [ ] Global limits
- [ ] Per-user limits
- [ ] Per-IP limits
- [ ] Auth rate limits

### Headers
- [ ] Strict-Transport-Security
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Content-Security-Policy
- [ ] Referrer-Policy

### CORS
- [ ] Whitelist origins
- [ ] Allowed methods
- [ ] Allowed headers
- [ ] Credentials flag

## 6. Infrastructure

### Container Security
- [ ] Non-root user
- [ ] Read-only filesystem
- [ ] No new privileges
- [ ] Image scanning

### Network Security
- [ ] Network segmentation
- [ ] Firewall rules
- [ ] WAF in production
- [ ] DDoS protection

### Monitoring
- [ ] Centralized logging
- [ ] Alert rules
- [ ] Anomaly detection
- [ ] Audit trail

## 7. Dependencies

### Package Security
- [ ] Dependency scanning
- [ ] Automated updates
- [ ] Vulnerability monitoring
- [ ] License compliance

### Code Security
- [ ] SAST tools
- [ ] DAST tools
- [ ] Secret scanning
- [ ] Code review

## 8. Compliance

### OWASP Top 10
- [ ] Broken Access Control
- [ ] Cryptographic Failures
- [ ] Injection
- [ ] Insecure Design
- [ ] Security Misconfiguration
- [ ] Vulnerable Components
- [ ] Auth Failures
- [ ] Data Integrity
- [ ] Logging Failures
- [ ] SSRF

### GDPR
- [ ] Data minimization
- [ ] Consent management
- [ ] Right to access
- [ ] Right to deletion
- [ ] Breach notification