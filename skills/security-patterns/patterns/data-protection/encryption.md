# Encryption Pattern

## Overview

Proteção de dados em repouso e em trânsito.

## At-Rest Encryption

### AES-256-GCM (Recommended)

```javascript
import crypto from 'crypto'

class EncryptionService {
  constructor(key) {
    this.key = Buffer.from(key, 'hex') // 32 bytes
  }

  encrypt(plaintext) {
    const iv = crypto.randomBytes(12)
    const cipher = crypto.createCipheriv(
      'aes-256-gcm',
      this.key,
      iv
    )

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

  decrypt({ iv, ciphertext, authTag }) {
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      this.key,
      Buffer.from(iv, 'hex')
    )

    decipher.setAuthTag(Buffer.from(authTag, 'hex'))

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(ciphertext, 'hex')),
      decipher.final()
    ])

    return decrypted.toString('utf8')
  }
}
```

### Field-Level Encryption

```javascript
class FieldEncryption {
  constructor(keys) {
    this.service = new EncryptionService(keys.data)
    this.serviceName = 'fieldEncryption'
  }

  async encryptFields(record, fields) {
    const encrypted = { ...record }

    for (const field of fields) {
      if (record[field]) {
        const { ciphertext, iv, authTag } = this.service.encrypt(
          JSON.stringify(record[field])
        )
        encrypted[field] = { ciphertext, iv, authTag }
      }
    }

    return encrypted
  }

  async decryptFields(record, fields) {
    const decrypted = { ...record }

    for (const field of fields) {
      if (record[field]?.ciphertext) {
        const data = this.service.decrypt(record[field])
        decrypted[field] = JSON.parse(data)
      }
    }

    return decrypted
  }
}
```

## In-Transit Encryption

### TLS 1.3 Configuration

```javascript
// Node.js HTTPS server
const https = require('https')
const fs = require('fs')

const server = https.createServer({
  key: fs.readFileSync('/etc/ssl/private/key.pem'),
  cert: fs.readFileSync('/etc/ssl/certs/cert.pem'),
  minVersion: 'TLSv1.3',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_AES_128_GCM_SHA256',
    'TLS_CHACHA20_POLY1305_SHA256'
  ].join(':'),
  honorCipherOrder: false,
  ecdhCurve: 'secp384r1',
  dhparam: null // Disable DH for performance
})

// Force TLS 1.3
server.on('tlsClientError', (err) => {
  if (err.message.includes('TLS')) {
    console.error('TLS error:', err)
  }
})
```

### Certificate Pinning

```javascript
// Certificate pinning for mobile apps
const pinnedCertificates = [
  // Leaf certificate
  'sha256/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
  // Intermediate
  'sha256/BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB='
]

function validateCertificate(cert) {
  const certFingerprint = crypto
    .createHash('sha256')
    .update(cert)
    .digest('base64')

  return pinnedCertificates.includes(certFingerprint)
}
```

## Key Management

### Key Rotation

```javascript
class KeyRotation {
  constructor() {
    this.activeKeyVersion = 2
  }

  async rotateKey() {
    const newVersion = this.activeKeyVersion + 1

    // Generate new key
    const newKey = crypto.randomBytes(32)

    // Store new key
    await this.storeKey(newVersion, newKey)

    // Mark old key as deprecated
    await this.deprecateKey(this.activeKeyVersion)

    this.activeKeyVersion = newVersion
  }

  async reEncryptData(oldKeyVersion, newKeyVersion) {
    const data = await this.getAllEncryptedData(oldKeyVersion)

    for (const record of data) {
      // Decrypt with old key
      const plaintext = await this.decrypt(record.ciphertext, oldKeyVersion)

      // Encrypt with new key
      const newCiphertext = await this.encrypt(plaintext, newKeyVersion)

      await this.updateRecord(record.id, newCiphertext)
    }
  }
}
```

## Database Encryption

```sql
-- PostgreSQL with TDE
-- Enable pgcrypto extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Encrypt sensitive fields
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  encrypted_ssn BYTEA, -- Encrypted SSN
  encrypted_salary BYTEA, -- Encrypted salary
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert with encryption
INSERT INTO users (email, encrypted_ssn)
VALUES (
  'user@example.com',
  pgp_sym_encrypt('123-45-6789', :encryption_key)
);

-- Decrypt on select
SELECT
  email,
  pgp_sym_decrypt(encrypted_ssn, :encryption_key) as ssn
FROM users;
```