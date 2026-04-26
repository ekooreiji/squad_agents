# RBAC (Role-Based Access Control) Pattern

## Overview

RBAC controla acesso baseado em papéis e permissões.

## Structure

```
┌─────────┐     ┌─────────┐     ┌───────────┐
│  User   │────▶│  Role   │────▶│Permission│
│         │     │         │     │           │
│ user-1  │     │ admin   │     │ users:*   │
│ user-2  │     │ manager │     │ orders:read│
│ user-3  │     │ user    │     │ orders:write
└─────────┘     │         │     │           │
                └────┬────┘     └───────────┘
                     │
                     │ Many-to-Many
                     ▼
                ┌─────────┐
                │ UserRole│
                │         │
                │user_id  │
                │role_id  │
                └─────────┘
```

## Implementation

### 1. Database Schema

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Roles
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT
);

-- Permissions
CREATE TABLE permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  resource VARCHAR(50) NOT NULL,
  action VARCHAR(20) NOT NULL
);

-- User-Role relationship
CREATE TABLE user_roles (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, role_id)
);

-- Role-Permission relationship
CREATE TABLE role_permissions (
  role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
  permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);
```

### 2. Seed Data

```javascript
const permissions = [
  // Users
  { name: 'users:read', resource: 'users', action: 'read' },
  { name: 'users:create', resource: 'users', action: 'create' },
  { name: 'users:update', resource: 'users', action: 'update' },
  { name: 'users:delete', resource: 'users', action: 'delete' },

  // Orders
  { name: 'orders:read', resource: 'orders', action: 'read' },
  { name: 'orders:create', resource: 'orders', action: 'create' },
  { name: 'orders:update', resource: 'orders', action: 'update' },
  { name: 'orders:delete', resource: 'orders', action: 'delete' },

  // Reports
  { name: 'reports:read', resource: 'reports', action: 'read' },
]

const roles = [
  { name: 'admin', permissions: ['*'] },
  { name: 'manager', permissions: [
    'users:read',
    'orders:*',
    'reports:read'
  ]},
  { name: 'employee', permissions: [
    'orders:read',
    'orders:create'
  ]},
]
```

### 3. Permission Checking

```javascript
// Permission service
class PermissionService {
  async getUserPermissions(userId) {
    const result = await db.query(`
      SELECT DISTINCT p.name
      FROM permissions p
      JOIN role_permissions rp ON p.id = rp.permission_id
      JOIN user_roles ur ON rp.role_id = ur.role_id
      WHERE ur.user_id = $1
    `, [userId])

    return result.rows.map(row => row.name)
  }

  async hasPermission(userId, permission) {
    const permissions = await this.getUserPermissions(userId)
    return permissions.includes('*') ||
           permissions.includes(permission)
  }

  async canAccessResource(userId, resource, action) {
    const permission = `${resource}:${action}`
    return this.hasPermission(userId, permission)
  }
}

// Middleware
async function requirePermission(resource, action) {
  return async (req, res, next) => {
    const canAccess = await permissionService.canAccessResource(
      req.user.id,
      resource,
      action
    )

    if (!canAccess) {
      return res.status(403).json({
        error: 'Permission denied'
      })
    }

    next()
  }
}
```

### 4. Route Protection

```javascript
// Protect routes
app.get('/users', requirePermission('users', 'read'), getUsers)
app.post('/users', requirePermission('users', 'create'), createUser)
app.put('/users/:id', requirePermission('users', 'update'), updateUser)
app.delete('/users/:id', requirePermission('users', 'delete'), deleteUser)

// Role-based routes
app.get('/admin/reports', requireRole('admin'), getReports)
```

### 5. Resource-Based Access

```javascript
// Check ownership or permission
async function canAccessResource(userId, resourceId, resource) {
  const user = await db.query(
    'SELECT user_id FROM resources WHERE id = $1',
    [resourceId]
  )

  // Owner can always access
  if (user.rows[0]?.user_id === userId) {
    return true
  }

  // Or has general permission
  return permissionService.canAccessResource(userId, resource, 'read')
}
```

## Role Hierarchy

```javascript
const roleHierarchy = {
  admin: 100,
  manager: 50,
  supervisor: 40,
  employee: 30,
  guest: 10
}

function hasRoleLevel(userRole, requiredRole) {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole]
}
```

## Caching

```javascript
// Cache permissions for 5 minutes
async function getUserPermissions(userId) {
  const cacheKey = `permissions:${userId}`

  const cached = await redis.get(cacheKey)
  if (cached) {
    return JSON.parse(cached)
  }

  const permissions = await permissionService.getUserPermissions(userId)

  await redis.setex(cacheKey, 300, JSON.stringify(permissions))

  return permissions
}

// Invalidate on role change
async function invalidateUserPermissions(userId) {
  await redis.del(`permissions:${userId}`)
}
```