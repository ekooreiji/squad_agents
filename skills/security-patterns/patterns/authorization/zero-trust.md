# Zero Trust Architecture Pattern

## Overview

Zero Trust: "Never trust, always verify" - security model assuming breach and verifying every request.

## Core Principles

| Principle | Description |
|-----------|-------------|
| Verify explicitly | Auth and authorize with all available data |
| Least privilege | Just-in-time and minimum access |
| Assume breach | Verify end-to-end encryption, use analytics |
| Never trust | Always authenticate and authorize |

## Implementation

### 1. Continuous Verification

```javascript
// Token verification on every request
async function verifyAccess(req, resource) {
  const token = req.cookies.accessToken

  // Verify token
  const decoded = await verifyToken(token)
  if (!decoded.valid) {
    throw new AuthError('Invalid token')
  }

  // Check permissions
  const hasPermission = await checkPermission(
    decoded.sub,
    resource
  )
  if (!hasPermission) {
    throw new AuthError('Permission denied')
  }

  // Check risk score
  const riskScore = await evaluateRisk(req, decoded)
  if (riskScore > 0.7) {
    // Require MFA for high risk
    const mfaVerified = await verifyMFA(req)
    if (!mfaVerified) {
      throw new AuthError('Additional verification required')
    }
  }

  // Check device posture
  const deviceTrusted = await checkDevicePosture(req)
  if (!deviceTrusted) {
    throw new AuthError('Untrusted device')
  }

  return decoded
}
```

### 2. Just-in-Time Access

```javascript
// PAM (Privileged Access Management)
async function requestAccess(resource, role, duration) {
  const request = {
    userId: req.user.id,
    resource,
    role,
    duration: Math.min(duration, 60 * 60), // Max 1 hour
    justification: req.body.justification,
    approvers: await getApprovers(resource)
  }

  // Create approval request
  const approvalRequest = await approvalService.create(request)

  // Send to approvers
  await notificationService.notifyApprovers(
    approvalRequest
  )

  return approvalRequest
}

// Grant access after approval
async function grantAccess(requestId, approverId) {
  const approved = await approvalService.approve(
    requestId,
    approverId
  )

  if (approved) {
    // Grant temporary access
    await redis.setex(
      `access:${requestId}`,
      request.duration,
      'granted'
    )
  }
}
```

### 3. Network Segmentation

```yaml
# Kubernetes Network Policies
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-isolation
spec:
  podSelector:
    matchLabels:
      app: web
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: gateway
  egress:
    - to:
        - podSelector:
            matchLabels:
              app: api
      ports:
        - port: 8080
    - to:
        - namespaceSelector:
            matchLabels:
              name: database
      ports:
        - port: 5432
```

### 4. Device Trust

```javascript
// Device posture check
async function checkDevicePosture(req) {
  const deviceId = req.headers['x-device-id']

  if (!deviceId) {
    return false
  }

  // Check device in database
  const device = await deviceService.getDevice(deviceId)

  if (!device) {
    return false
  }

  // Check device compliance
  const checks = [
    device.managed,         // MDM enrolled
    device.encryption,    // Disk encrypted
    device.OSUpdated,     // OS up-to-date
    device.antivirus,      // AV installed
    device.jailbroken     // Not jailbroken
  ]

  const compliant = checks.every(c => c)

  if (!compliant) {
    await deviceService.markNonCompliant(deviceId)
  }

  return compliant
}
```