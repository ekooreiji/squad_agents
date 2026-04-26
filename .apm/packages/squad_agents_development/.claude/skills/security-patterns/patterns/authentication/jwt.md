# JWT (JSON Web Tokens) Pattern

## Overview

JWT é um padrão stateless para autenticação e autorização em APIs REST.

## Token Structure

```
┌─────────┐ ───────────────────────┐
│ Header  │ │ {"alg":"RS256"...}    │
├─────────┼─┼───────────────────────┤
│ Payload │ │ {"sub":"user-1"..}    │
├─────────┼─┼───────────────────────┤
│ Verify  │ │ HMACSHA256(header+pay)│
└─────────┘ ───────────────────────┘
```

## Security Best Practices

| Aspect | Recommendation |
|--------|--------------|
| Algorithm | RS256 (RSA-SHA256) or ES256 (ECDSA) |
| Key Size | 2048-bit RSA minimum |
| Expiration | 15-60 minutes |
| Refresh | Token rotation required |
| Storage | HttpOnly cookies only |
| Transport | HTTPS mandatory |

## Implementation

### 1. Token Generation (Node.js)

```javascript
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

// Generate RSA key pair (do once)
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
})

// Access Token
function generateAccessToken(user) {
  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
    permissions: user.permissions
  }

  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1h',
    issuer: 'my-app',
    audience: 'my-app-api'
  })
}

// Refresh Token
function generateRefreshToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      type: 'refresh'
    },
    privateKey,
    {
      algorithm: 'RS256',
      expiresIn: '30d',
      issuer: 'my-app'
    }
  )
}
```

### 2. Token Verification

```javascript
async function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
      issuer: 'my-app',
      audience: 'my-app-api'
    })
    return { valid: true, payload: decoded }
  } catch (error) {
    return { valid: false, error: error.message }
  }
}
```

### 3. Token Revocation

```javascript
// Redis-based token blacklist
const revokedTokens = new Set()

async function revokeToken(token) {
  const decoded = jwt.decode(token)
  const ttl = decoded.exp - Math.floor(Date.now() / 1000)

  if (ttl > 0) {
    await redis.setex(`revoked:${token}`, ttl, '1')
    revokedTokens.add(token)
  }
}

async function isTokenRevoked(token) {
  return await redis.exists(`revoked:${token}`)
}
```

### 4. Middleware

```javascript
async function authMiddleware(req, res, next) {
  const token = req.cookies.accessToken ||
               req.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  const revoked = await isTokenRevoked(token)
  if (revoked) {
    return res.status(401).json({ error: 'Token revoked' })
  }

  const { valid, payload, error } = await verifyToken(token)
  if (!valid) {
    return res.status(401).json({ error })
  }

  req.user = payload
  next()
}

// Permission middleware
function requirePermission(permission) {
  return (req, res, next) => {
    if (req.user.permissions.includes(permission) ||
        req.user.permissions.includes('*')) {
      return next()
    }
    return res.status(403).json({ error: 'Permission denied' })
  }
}
```

### 5. Token Refresh Flow

```javascript
app.post('/auth/refresh', async (req, res) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res.status(401).json({ error: 'No refresh token' })
  }

  const { valid, payload, error } = await verifyToken(refreshToken)
  if (!valid || payload.type !== 'refresh') {
    return res.status(401).json({ error: 'Invalid refresh token' })
  }

  // Revoke old refresh token
  await revokeToken(refreshToken)

  // Generate new tokens
  const user = await getUserById(payload.sub)
  const newAccessToken = generateAccessToken(user)
  const newRefreshToken = generateRefreshToken(user)

  res.cookie('accessToken', newAccessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 3600000
  })

  res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 2592000000
  })

  res.json({ success: true })
})
```

### 6. Cookie Configuration

```javascript
const cookieOptions = {
  httpOnly: true,     // JavaScript cannot access
  secure: true,      // HTTPS only
  sameSite: 'strict', // CSRF protection
  path: '/',
  domain: '.example.com'
}
```

## Anti-Patterns to Avoid

| Anti-Pattern | Why | Solution |
|--------------|-----|----------|
| HS256 with shared secret | Key distribution | RS256 |
| No expiration | Token stolen forever | Set exp |
| Storing token in localStorage | XSS vulnerable | Cookies |
| Sensitive data in payload | Visible to client | Encrypted field |
| No audience claim | Token reuse | Set audience |