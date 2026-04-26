# Password Hashing Pattern

## Overview

Armazenamento seguro de senhas usando algoritmos modernos.

## Algorithm Comparison

| Algorithm | Recommendation | Memory | Time |
|-----------|-------------|--------|------|
| **Argon2id** | Preferred | 64 MB | ~200ms |
| **bcrypt** | Legacy | 68 MB | ~200ms |
| **PBKDF2** | Fallback | 64 MB | ~200ms |
| **SHA-256** | Never alone | - | - |

## Argon2id (Recommended)

```javascript
import argon2 from 'argon2'

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 65536,    // 64 MB
    timeCost: 3,          // 3 iterations
    parallelism: 4,        // 4 threads
    hashLength: 32,         // 32 bytes output
    saltLength: 16           // 16 bytes salt
  })
}

async function verifyPassword(password, hash) {
  return argon2.verify(hash, password)
}
```

## bcrypt (Legacy)

```javascript
import bcrypt from 'bcrypt'

const BCRYPT_ROUNDS = 12

async function hashPassword(password) {
  return bcrypt.hash(password, BCRYPT_ROUNDS)
}

async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash)
}
```

## Password Policy

```javascript
const passwordPolicy = {
  minLength: 12,
  maxLength: 128,
  requireUppercase: true,    // A-Z
  requireLowercase: true,   // a-z
  requireNumbers: true,      // 0-9
  requireSpecial: true,      // !@#$%^&*...
  maxRepeating: 3,         // max 3 repeating chars
  maxSequential: 3         // max 3 sequential chars
}

function validatePassword(password) {
  const errors = []

  if (password.length < passwordPolicy.minLength) {
    errors.push('Password must be at least 12 characters')
  }

  if (password.length > passwordPolicy.maxLength) {
    errors.push('Password too long')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Must contain uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Must contain lowercase letter')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Must contain number')
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Must contain special character')
  }

  // Check repeating characters
  if (/(.)\1{3,}/.test(password)) {
    errors.push('Too many repeating characters')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}
```

## Password Strength Meter

```javascript
function calculatePasswordStrength(password) {
  let score = 0

  // Length
  if (password.length >= 8) score += 20
  if (password.length >= 12) score += 10
  if (password.length >= 16) score += 10

  // Character types
  if (/[a-z]/.test(password)) score += 10
  if (/[A-Z]/.test(password)) score += 10
  if (/[0-9]/.test(password)) score += 10
  if (/[^a-zA-Z0-9]/.test(password)) score += 20

  return Math.min(score, 100)
}
```

## Breached Password Check

```javascript
import crypto from 'crypto'

async function isPasswordBreached(password) {
  // SHA-1 hash of password
  const hash = crypto
    .createHash('sha1')
    .update(password)
    .digest('hex')
    .toUpperCase()

  const prefix = hash.slice(0, 5)
  const suffix = hash.slice(5)

  // Check Have I Been Pwned API
  const response = await fetch(
    `https://api.pwnedpasswords.com/range/${prefix}`
  )

  const data = await response.text()
  const breached = data.split('\n').some(line => {
    const [hashSuffix] = line.split(':')
    return hashSuffix === suffix
  })

  return breached
}

async function validateAndCheckPassword(password) {
  const policy = validatePassword(password)
  if (!policy.valid) {
    return policy
  }

  const breached = await isPasswordBreached(password)
  if (breached) {
    return {
      valid: false,
      errors: ['This password has been exposed in data breaches']
    }
  }

  return { valid: true, errors: [] }
}
```

## Reset Token

```javascript
import crypto from 'crypto'

function generatePasswordResetToken() {
  return crypto.randomBytes(32).toString('hex')
}

async function createPasswordResetToken(userId) {
  const token = generatePasswordResetToken()
  const expiresAt = new Date(Date.now() + 3600000) // 1 hour

  await db.query(`
    INSERT INTO password_resets (user_id, token, expires_at)
    VALUES ($1, $2, $3)
  `, [userId, token, expiresAt])

  return token
}

async function validatePasswordResetToken(token) {
  const result = await db.query(`
    SELECT user_id, expires_at
    FROM password_resets
    WHERE token = $1 AND used_at IS NULL
  `, [token])

  if (result.rows.length === 0) {
    return { valid: false, error: 'Invalid token' }
  }

  const reset = result.rows[0]
  if (new Date() > reset.expires_at) {
    return { valid: false, error: 'Token expired' }
  }

  return { valid: true, userId: reset.user_id }
}
```