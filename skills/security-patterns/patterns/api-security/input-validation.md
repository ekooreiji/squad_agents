# Input Validation Pattern

## Overview

Validação robusta de entrada para prevenir ataques de injeção e outros vetores.

## Validation Libraries

| Language | Library | Recommendation |
|---------|---------|-------------|
| JS/TS | Zod | Preferred |
| JS/TS | Yup | Good alternative |
| JS/TS | Joi | Legacy |
| Python | Pydantic | Preferred |
| Python | Marshmallow | Good alternative |

## Zod (JavaScript/TypeScript)

```javascript
import { z } from 'zod'

// String validations
const stringSchema = z.string()
  .min(1, 'Required')
  .max(1000, 'Too long')
  .trim()

// Email
const emailSchema = z.string().email('Invalid email')

// URL
const urlSchema = z.string().url('Invalid URL')

// UUID
const uuidSchema = z.string().uuid('Invalid UUID')

// Enum
const roleSchema = z.enum(['admin', 'user', 'guest'])

// Number ranges
const ageSchema = z.number()
  .int('Must be integer')
  .min(0, 'Must be positive')
  .max(150, 'Invalid age')

// Optional with default
const nameSchema = z.string().min(1).default('Anonymous')
```

### User Schema

```javascript
const createUserSchema = z.object({
  name: z.string()
    .min(2, 'Name too short')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters'),

  email: z.string()
    .email()
    .transform(email => email.toLowerCase()),

  password: z.string()
    .min(12)
    .max(128)
    .regex(/[A-Z]/, 'Must have uppercase')
    .regex(/[a-z]/, 'Must have lowercase')
    .regex(/[0-9]/, 'Must have number')
    .regex(/[^A-Za-z0-9]/, 'Must have special character'),

  role: z.enum(['admin', 'user', 'guest']).default('user'),

  age: z.number().int().min(13).max(150).optional(),

  website: z.string().url().optional(),

  tags: z.array(z.string()).max(10)
})

// Parse with error handling
function validateUser(input) {
  const result = createUserSchema.safeParse(input)

  if (!result.success) {
    return {
      valid: false,
      errors: result.error.issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message
      }))
    }
  }

  return {
    valid: true,
    data: result.data
  }
}
```

### Query Parameters

```javascript
const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sort: z.enum(['createdAt', 'name', 'email']).default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc')
})

const searchSchema = z.object({
  q: z.string().max(100).optional(),
  filter: z.enum(['all', 'active', 'inactive']).default('all')
})
```

## SQL Injection Prevention

### NEVER DO THIS

```javascript
// NEVER interpolate user input directly
const query = `SELECT * FROM users WHERE email = '${email}'`

// NEVER use template literals
const query = `DELETE FROM users WHERE id = ${id}`

// NEVER concatenate
const query = 'SELECT * FROM users WHERE name = ' + name
```

### ALWAYS DO THIS

```javascript
// Parameterized query
const query = 'SELECT * FROM users WHERE email = $1'
const result = await db.query(query, [email])

// Named parameters
const query = `
  SELECT * FROM users
  WHERE name = :name AND email = :email
`
const result = await db.query(query, { name, email })

// ORM (auto-parameterized)
const user = await User.findOne({ where: { email } })
```

## XSS Prevention

```javascript
import DOMPurify from 'isomorphic-dompurify'

// Sanitize HTML
function sanitizeHTML(input) {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href'],
    FORBID_ATTR: ['onerror', 'onclick']
  })
}

// Escape for JavaScript
function escapeJavaScript(input) {
  return input
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
}

// Escape for HTML
function escapeHTML(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
```

## Path Traversal Prevention

```javascript
import path from 'path'

// Safe path resolution
function safePath(userPath, basePath) {
  const resolved = path.resolve(basePath, userPath)

  if (!resolved.startsWith(basePath)) {
    throw new Error('Access denied')
  }

  return resolved
}

// Validate filename
function isValidFilename(filename) {
  // No path separators, no null bytes
  return !filename.includes('/') &&
         !filename.includes('\\') &&
         !filename.includes('\0') &&
         filename.length <= 255
}
```

## Command Injection Prevention

```javascript
// NEVER execute user input directly
// exec(`ls ${userPath}`) <- NEVER DO THIS

// Use spawn with array
import { spawn } from 'child_process'

function safeExec(command, args) {
  // Whitelist allowed commands
  const allowed = ['ls', 'cat', 'pwd']

  if (!allowed.includes(command)) {
    throw new Error('Command not allowed')
  }

  return spawn(command, args, {
    shell: false,
    cwd: '/safe/directory'
  })
}

// For shell scripts, use proper escaping
function escapeShellArg(arg) {
  return `'${arg.replace(/'/g, "'\\''")}'`
}
```

## NoSQL Injection Prevention

```javascript
// Mongoose (MongoDB)
// NEVER do this
User.find({ $where: '...' })

// ALWAYS validate queries
const querySchema = z.object({
  email: z.string().email(),
  name: z.string().optional()
})

function safeFind(query) {
  const validated = querySchema.parse(query)
  return User.find(validated)
}
```

## File Upload Validation

```javascript
const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf'
]

const maxSize = 5 * 1024 * 1024 // 5MB

function validateFileUpload(file) {
  // Check MIME type
  if (!allowedMimeTypes.includes(file.mimetype)) {
    return { valid: false, error: 'File type not allowed' }
  }

  // Check size
  if (file.size > maxSize) {
    return { valid: false, error: 'File too large' }
  }

  // Check filename
  if (!isValidFilename(file.originalname)) {
    return { valid: false, error: 'Invalid filename' }
  }

  // Generate safe filename
  const ext = path.extname(file.originalname)
  const safeName = `${crypto.randomUUID()}${ext}`

  return { valid: true, safeName }
}
```