---
name: security-patterns
description: Padrões de segurança, autenticação, autorização e boas práticas
---

# Security Patterns Skill

Guia completo de padrões de segurança para aplicações modernas.

---

## Referências Cruzadas

| Skill | Ver | Conteúdo |
|-------|-----|---------|
| [js-airbnb-style](../js-airbnb-style/SKILL.md) | Code patterns | Validação de entrada |
| [js-google-style](../js-google-style/SKILL.md) | Security coding | Best practices |
| [docker-implementation](../docker-implementation/SKILL.md) | Container security | Docker security |
| [python-integration-testing](../python-integration-testing/SKILL.md) | Test security | Security testing |

---

## 1. Authentication (Autenticação)

### 1.1 JWT (JSON Web Tokens)

Ver: [patterns/authentication/jwt.md](patterns/authentication/jwt.md)

| Aspecto | Recomendação |
|--------|--------------|
| **Algoritmo** | RS256 (assimétrico) |
| **Expiration** | 15-60 minutos |
| **Refresh Token** | Rotação necessária |
| **Storage** | HttpOnly cookies |

#### Token Structure

```javascript
// Access Token (short-lived)
{
  sub: "user-id",
  email: "user@example.com",
  role: "admin",
  iat: 1690000000,
  exp: 1690003600  // 1 hora
}

// Refresh Token (long-lived)
{
  sub: "user-id",
  type: "refresh",
  iat: 1690000000,
  exp: 1692592000  // 30 dias
}
```

#### Implementation

```javascript
// JWT Signing (Node.js)
import jwt from 'jsonwebtoken'

const accessToken = jwt.sign(
  {
    sub: user.id,
    email: user.email,
    role: user.role
  },
  privateKey,
  {
    algorithm: 'RS256',
    expiresIn: '1h',
    issuer: 'my-app'
  }
)

// JWT Verification
const decoded = jwt.verify(token, publicKey, {
  algorithms: ['RS256'],
  issuer: 'my-app'
})
```

### 1.2 OAuth 2.0

| Grant Type | Uso |
|-----------|-----|
| **Authorization Code** | Apps servidor (recomendado) |
| **PKCE** | SPAs e mobile apps |
| **Client Credentials** | Machine-to-machine |
| **Refresh Token** | Renovação de tokens |

#### Authorization Code Flow

```
┌─────────┐      ┌─────────┐      ┌──────────┐
│ Client  │─────▶│ Auth    │─────▶▶│ Resource │
│         │◀─────│ Server  │◀──────│ Server   │
└─────────┘      └─────────┘      └──────────┘
```

### 1.3 Password Hashing

Ver: [patterns/data-protection/password-hashing.md](patterns/data-protection/password-hashing.md)

| Algorithm | Recommendation |
|-----------|----------------|
| **Argon2id** | Preferred (víntima) |
| **bcrypt** | Legacy support |
| **PBKDF2** | Fallback |
| **SHA-256** | Never alone |

```javascript
// Argon2id (recommended)
import argon2 from 'argon2'

const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 65536,    // 64 MB
  timeCost: 3,          // 3 iterations
  parallelism: 4        // 4 threads
})

const valid = await argon2.verify(hash, password)
```

### 1.4 MFA (Multi-Factor Authentication)

| Method | Security | Usability |
|--------|----------|----------|
| **TOTP** | High | Medium |
| **WebAuthn/FIDO2** | Highest | High |
| **SMS** | Low | High |
| **Email** | Medium | Medium |

---

## 2. Authorization (Autorização)

### 2.1 RBAC (Role-Based Access Control)

Ver: [patterns/authorization/rbac.md](patterns/authorization/rbac.md)

#### Role Hierarchy

```
Admin
├── Manager
│   ├── Supervisor
│   │   ├── Employee
│   │   └── Contractor
│   └── Employee
└── Employee
```

#### Implementation

```javascript
// Permission checking
const permissions = {
  admin: ['*'],
  manager: ['users:read', 'users:write', 'orders:*', 'reports:read'],
  employee: ['users:read', 'orders:read', 'orders:create']
}

// Check permission
function hasPermission(role, permission) {
  const rolePermissions = permissions[role]
  return rolePermissions.includes('*') ||
         rolePermissions.includes(permission)
}
```

### 2.2 ABAC (Attribute-Based Access Control)

```javascript
// Policy Definition
const policies = [
  {
    effect: 'allow',
    action: 'read',
    resource: 'documents',
    condition: {
      owner: '${user.id}'
    }
  },
  {
    effect: 'allow',
    action: 'read',
    resource: 'documents',
    condition: {
      department: '${user.department}'
    }
  }
]
```

### 2.3 Zero Trust

Ver: [patterns/authorization/zero-trust.md](patterns/authorization/zero-trust.md)

**Core Principles:**
- Never trust, always verify
- Least privilege access
- Assume breach
- Verify explicitly

---

## 3. Data Protection

### 3.1 Encryption

Ver: [patterns/data-protection/encryption.md](patterns/data-protection/encryption.md)

| Type | Use Case |
|------|----------|
| **AES-256-GCM** | Data at rest |
| **ChaCha20-Poly1305** | Mobile/IoT |
| **TLS 1.3** | Data in transit |

```javascript
// Encryption (Node.js)
import crypto from 'crypto'

function encrypt(plaintext, key) {
  const iv = crypto.randomBytes(12)
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)

  const encrypted = Buffer.concat([
    cipher.update(plaintext, 'utf8'),
    cipher.final()
  ])

  const authTag = cipher.getAuthTag()

  return {
    iv: iv.toString('hex'),
    ciphertext: encrypted.toString('hex'),
    authTag: authTag.toString('hex')
  }
}
```

### 3.2 Secrets Management

| Service | Use |
|---------|-----|
| **HashiCorp Vault** | Self-hosted |
| **AWS Secrets Manager** | AWS |
| **GCP Secret Manager** | GCP |
| **Azure Key Vault** | Azure |
| **Doppler** | Multi-cloud |

```yaml
# Docker environment (NOT for production)
environment:
  - DATABASE_URL=postgresql://user:pass@postgres:5432/db
  - JWT_SECRET=${JWT_SECRET}

# Use secrets from Vault
secrets:
  - name: JWT_SECRET
    file: /run/secrets/jwt_secret
```

### 3.3 Data Masking

| Type | Description |
|------|-------------|
| **Static** | Replace with masked value |
| **Dynamic** | Mask on-demand |
| **Randomized** | Fake but consistent |

```javascript
// Data masking
function maskEmail(email) {
  const [user, domain] = email.split('@')
  return `${user.slice(0, 2)}***@${domain}`
}

function maskCreditCard(card) {
  return `****-****-****-${card.slice(-4)}`
}

function maskCPF(cpf) {
  return `***.***.***-${cpf.slice(-2)}`
}
```

---

## 4. API Security

### 4.1 Input Validation

Ver: [patterns/api-security/input-validation.md](patterns/api-security/input-validation.md)

| Validation | Library |
|------------|---------|
| **JavaScript/TypeScript** | Zod, Yup, Joi |
| **Python** | Pydantic, Marshmallow |
| **Schema** | JSON Schema, OpenAPI |

```javascript
// Zod validation (recommended)
import { z } from 'zod'

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  name: z.string().min(2).max(100),
  role: z.enum(['admin', 'user', 'guest'])
})

const result = UserSchema.safeParse(input)
if (!result.success) {
  return res.status(400).json(result.error.issues)
}
```

### 4.2 Rate Limiting

| Endpoint | Limit | Window |
|----------|-------|--------|
| **Public API** | 100 | 1 min |
| **Auth API** | 10 | 1 min |
| **Search** | 30 | 1 min |
| **Write API** | 50 | 1 min |

```yaml
# Rate limiting config
rateLimit:
  windowMs: 60000  # 1 minute
  maxRequests: 100

  byIp: true
  byUser: true

  skipSuccessfulRequests: false
  skipFailedRequests: false

  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests',
      retryAfter: 60
    })
  }
```

### 4.3 SQL Injection Prevention

```javascript
// NEVER do this
const query = `SELECT * FROM users WHERE email = '${email}'`

// ALWAYS use parameterized queries
const query = 'SELECT * FROM users WHERE email = $1'
const result = await db.query(query, [email])

// OR use ORM
const user = await User.findOne({ where: { email } })
```

### 4.4 XSS Prevention

```javascript
// Sanitize HTML
import DOMPurify from 'isomorphic-dompurify'

const clean = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
  ALLOWED_ATTR: []
})

// Content Security Policy
const csp = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
  base-uri 'self';
`.replace(/\s+/g, ' ')
```

### 4.5 CSRF Prevention

```javascript
// CSRF Token
function generateCsrfToken() {
  return crypto.randomBytes(32).toString('hex')
}

// Validate CSRF
function validateCsrfToken(token, sessionToken) {
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(sessionToken)
  )
}

// Set-Cookie header
res.setHeader('Set-Cookie', [
  `session=${sessionId}; HttpOnly; Secure; SameSite=Strict`,
  `csrf=${csrfToken}; Secure; SameSite=Strict`
])
```

---

## 5. Infrastructure Security

### 5.1 TLS/SSL

Ver: [patterns/infrastructure/tls.md](patterns/infrastructure/tls.md)

| Setting | Recommendation |
|---------|--------------|
| **TLS Version** | TLS 1.3 only |
| **Cipher Suite** | Mozilla Modern |
| **Certificate** | Let's Encrypt (free) |
| **HSTS** | Preload enabled |

```nginx
# Nginx configuration
ssl_protocols TLSv1.3;
ssl_prefer_server_ciphers off;

ssl_certificate /etc/ssl/certs/cert.pem;
ssl_certificate_key /etc/ssl/private/key.pem;

# HSTS
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

# Security headers
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### 5.2 Container Security

Ver: [patterns/infrastructure/docker-security.md](patterns/infrastructure/docker-security.md)

```dockerfile
# Non-root user
FROM node:20-alpine
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app
COPY --chown=app:app . .

USER app

EXPOSE 3000
CMD ["node", "index.js"]
```

```yaml
# docker-compose.yml
services:
  app:
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp:rw,noexec,nosuid,size=64m
    networks:
      - backend
    secrets:
      - db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

### 5.3 Security Headers

| Header | Value |
|--------|-------|
| **Strict-Transport-Security** | max-age=2 years |
| **X-Frame-Options** | DENY |
| **X-Content-Type-Options** | nosniff |
| **X-XSS-Protection** | 1; mode=block |
| **Referrer-Policy** | strict-origin |
| **Permissions-Policy** | geolocation=(), microphone=() |
| **Content-Security-Policy** | Restrictive |

---

## 6. Security Checklist

Ver: [checklists/security-checklist.md](checklists/security-checklist.md)

### Development

- [ ] Input validation on all endpoints
- [ ] Parameterized queries only
- [ ] Sanitize user input
- [ ] Use HTTPS everywhere
- [ ] Secure cookie settings
- [ ] Rate limiting
- [ ] Security logging

### Authentication

- [ ] Strong password policy
- [ ] Argon2id/bcrypt hashing
- [ ] MFA available
- [ ] Token rotation
- [ ] Session timeout
- [ ] Account lockout

### Authorization

- [ ] RBAC implemented
- [ ] Least privilege
- [ ] Permission checks
- [ ] Audit logging

### Data Protection

- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] Secrets management
- [ ] Data masking
- [ ] Backup encryption

### Infrastructure

- [ ] TLS 1.3
- [ ] Non-root containers
- [ ] Container scanning
- [ ] Network segmentation
- [ ] WAF in production
- [ ] DDoS protection

---

## 7. Common Vulnerabilities

### OWASP Top 10 (2021)

| # | Vulnerability | Prevention |
|---|--------------|------------|
| 1 | Broken Access Control | RBAC, ABAC |
| 2 | Cryptographic Failures | TLS, encryption |
| 3 | Injection | Parameterized queries |
| 4 | Insecure Design | Threat modeling |
| 5 | Security Misconfiguration | Hardening |
| 6 | Vulnerable Components | Dependency scanning |
| 7 | Auth Failures | MFA, rate limiting |
| 8 | Data Integrity Failures | Integrity checks |
| 9 | Logging Failures | Centralized logging |
| 10 | SSRF | URL validation |

---

## 8. Tools

### Scanning

| Tool | Use |
|------|-----|
| **SAST** | Static analysis (SonarQube) |
| **DAST** | Dynamic testing (OWASP ZAP) |
| **SCA** | Dependency scanning |
| **SAST** | Secrets scanning (Trufflehog) |

### Dependencies

```bash
# npm audit
npm audit --audit-level=high

# Snyk
npx snyk test

# Dependency Check
dependency-check --project Project
```

---

## Referências

- [OWASP Top 10](https://owasp.org/Top10/)
- [NIST Guidelines](https://csrc.nist.gov/)
- [CIS Benchmarks](https://www.cisecurity.org/)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/)