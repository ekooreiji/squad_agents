# TLS/SSL Configuration Pattern

## Overview

Configuração segura de TLS para aplicações.

## TLS 1.3 (Recommended)

### Server Configuration

```nginx
# /etc/nginx/nginx.conf

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate /etc/ssl/certs/server.pem;
    ssl_certificate_key /etc/ssl/private/server.key;
    ssl_trusted_certificate /etc/ssl/certs/ca.pem;

    # TLS 1.3 only (most secure)
    ssl_protocols TLSv1.3;

    # Mozilla Modern cipher suite
    ssl_ciphers TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256;

    # Prefer server cipher order
    ssl_prefer_server_ciphers off;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;

    # Session
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;
}
```

## Security Headers

```nginx
# Security headers
add_header Strict-Transport-Security
    "max-age=63072000; includeSubDomains; preload"
    always;

add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options nosniff always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=()"
    always;
```

## Certificate Management

### Let's Encrypt (Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal
sudo crontab -e
# Add: 0 0 * * * certbot renew --quiet
```

### Manual Certificate Renewal

```javascript
// Certificate health check
async function checkCertificate() {
  const cert = await fetch('https://example.com')
    .then(r => r.connection.getPeerCertificate())

  const expiresAt = new Date(cert.valid_to)
  const daysUntilExpiry = (expiresAt - Date.now()) / (1000 * 60 * 60 * 24)

  if (daysUntilExpiry < 30) {
    await notificationService.send({
      type: 'certificate_expiry',
      days: daysUntilExpiry
    })
  }

  return { expiresAt, daysUntilExpiry }
}
```

## Mutual TLS (mTLS)

### Server Configuration

```javascript
// Node.js mTLS server
const https = require('https')
const fs = require('fs')

const server = https.createServer({
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  ca: fs.readFileSync('ca-cert.pem'),

  // Require client certificate
  requestCert: true,
  rejectUnauthorized: true
})
```

### Client Certificate

```javascript
// API client with mTLS
async function createClient() {
  const agent = new https.Agent({
    cert: fs.readFileSync('client-cert.pem'),
    key: fs.readFileSync('client-key.pem'),
    ca: fs.readFileSync('ca-cert.pem')
  })

  return agent
}

const response = await fetch('https://api.example.com', {
  agent: await createClient()
})
```