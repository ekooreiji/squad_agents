---
name: documentation-generators
description: Geradores de documentação (JSDoc, OpenAPI, AsyncAPI, Sphinx)
---

# Documentation Generators Skill

Guia para gerar documentação automática usando JSDoc, OpenAPI, AsyncAPI e Sphinx.

---

## Referências Cruzadas

| Skill | Ver | Conteúdo |
|-------|-----|---------|
| [js-airbnb-style](../js-airbnb-style/SKILL.md) | JSDoc examples | JS/TS |
| [pep8-reference](../pep8-reference/SKILL.md) | Python docs | Docstrings |
| [js-standard-style](../js-standard-style/SKILL.md) | Code patterns | Exemplos |

---

## 1. JSDoc (JavaScript/TypeScript)

### 1.1 Instalação

```bash
npm install --save-dev jsdoc @types/jsdoc
```

### 1.2 Tags Comuns

| Tag | Descrição | Exemplo |
|-----|----------|--------|
| `@param` | Parâmetro | `@param {string} name - Description` |
| `@returns` | Retorno | `@returns {Promise<User>}` |
| `@throws` | Exceção | `@throws {Error} On failure` |
| `@example` | Exemplo | `@example myFunction('test')` |
| `@see` | Referência | `@see OtherClass` |
| `@deprecated` | Deprecado | `@deprecated Use newFunc` |
| `@private` | Privado | `@private` |
| `@public` | Público | `@public` |
| `@async` | Async | `@async` |
| `@template` | Generics TS | `@template T` |

### 1.3 Templates

#### Basic Function

```javascript
/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the two numbers
 * @example
 * add(1, 2) // returns 3
 * add(0, 0) // returns 0
 */
function add(a, b) {
  return a + b
}
```

#### Class

```javascript
/**
 * A user service class.
 *
 * @class
 * @example
 * const service = new UserService()
 * await service.create({ name: 'John' })
 */
class UserService {
  /**
   * Creates a new user.
   *
   * @param {CreateUserDTO} data - User data
   * @returns {Promise<User>} The created user
   * @throws {ConflictError} If email already exists
   * @example
   * const user = await service.create({ name: 'John', email: 'john@example.com' })
   */
  async create(data) {
    const existing = await this.repository.findByEmail(data.email)
    if (existing) {
      throw new ConflictError('Email already exists')
    }
    return this.repository.save(data)
  }
}
```

#### TypeScript Interface

```typescript
/**
 * User entity.
 *
 * @template T - The user type
 */
interface User {
  /** Unique identifier */
  id: string

  /** User's full name */
  name: string

  /** User's email address */
  email: string

  /** User's role */
  role: 'admin' | 'user' | 'guest'

  /** Creation timestamp */
  readonly createdAt: Date
}

/**
 * User service with generic support.
 *
 * @template T - User type extending base User
 * @extends BaseService
 */
class UserService<T extends User> extends BaseService {
  /**
   * Find user by ID.
   *
   * @param {string} id - User ID
   * @returns {Promise<T | null>} User or null
   */
  async findById(id: string): Promise<T | null> {
    return this.repository.findById(id)
  }
}
```

### 1.4 Configuração (jsdoc.json)

```json
{
  "source": {
    "include": ["src"],
    "exclude": ["node_modules"]
  },
  "opts": {
    "template": "templates/node_modules/minami",
    "encoding": "utf8",
    "verbose": true,
    "destination": "./docs"
  },
  "plugins": ["plugins/markdown"]
}
```

### 1.5 Gerar Documentação

```bash
npx jsdoc -c jsdoc.json
```

---

## 2. OpenAPI/Swagger (REST API)

### 2.1 Instalação

```bash
npm install --save-dev swagger-jsdoc swagger-ui-express
```

### 2.2 Swagger JSDoc

```javascript
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users
 *     tags:
 *       - Users
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *         description: Page number
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 meta:
 *                   $ref: '#/components/schemas/Pagination'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUser'
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         role:
 *           type: string
 *           enum: [admin, user, guest]
 *         createdAt:
 *           type: string
 *           format: date-time
 *     CreateUser:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *     Pagination:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *         limit:
 *           type: integer
 *         total:
 *           type: integer
 *   responses:
 *     Unauthorized:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */
```

### 2.3 Swagger UI Setup

```javascript
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development' },
    ],
  },
  apis: ['./src/**/*.js'],
}

const specs = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
```

### 2.4 Redoc (Alternativa)

```bash
npm install redoc
```

```javascript
import Redoc from 'redoc'

app.get('/docs', (req, res) => {
  res.send(Redoc.standalone({ spec }))
})
```

---

## 3. AsyncAPI (Event-Driven)

### 3.1 Instalação

```bash
npm install --save-dev asyncapi-cli
```

### 3.2 asyncapi.yaml

```yaml
asyncapi: '3.0.0'
info:
  title: User Service
  version: '1.0.0'
  description: User service with event-driven architecture

servers:
  development:
    host: 'kafka:9092'
    protocol: kafka
  production:
    host: 'kafka-prod:9092'
    protocol: kafka

channels:
  user.created:
    address: 'user.created'
    messages:
      UserCreated:
        $ref: '#/components/messages/UserCreated'
    subscribe:
      operationId: handleUserCreated
      summary: Handle new user creation

operations:
  handleUserCreated:
    action: receive
    channel:
      $ref: '#/channels/user.created'
    messages:
      - $ref: '#/channels/user.created/messages/UserCreated'

components:
  messages:
    UserCreated:
      payload:
        type: object
        properties:
          id:
            type: string
            format: uuid
          name:
            type: string
          email:
            type: string
            format: email
          timestamp:
            type: string
            format: date-time
    UserDeleted:
      payload:
        type: object
        properties:
          id:
            type: string
            format: uuid
          timestamp:
            type: string
            format: date-time

  schemas:
    User:
      type: object
      required:
        - id
        - name
        - email
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
        email:
          type: string
          format: email
        role:
          type: string
          enum:
            - admin
            - user
            - guest

  channelBindings:
    kafka:
      cluster:
        type: string
        enum:
          - development
          - production
      topic:
        type: string
        enum:
          - user.created
          - user.deleted
```

### 3.3 Gerar Documentação

```bash
# HTML
asyncapi bundle asyncapi.yaml -o docs.html

# PDF
asyncapi bundle asyncapi.yaml -o docs.pdf --pdf
```

---

## 4. Sphinx (Python)

### 4.1 Instalação

```bash
pip install sphinx sphinx-rtd-theme sphinx-autodoc2
```

### 4.2 Setup

```bash
sphinx-quickstart docs
cd docs
pip install sphinx-rtd-theme
```

### 4.3 conf.py

```python
import os
import sys
sys.path.insert(0, os.path.abspath('../src'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode',
    'sphinx.ext.intersphinx',
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '**/.DS_Store']

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

autodoc_default_options = {
    'members': True,
    'undoc-members': True,
    'show-inheritance': True,
}

napoleon_google_docstring = True
napoleon_numpy_docstring = True
```

### 4.4 Docstrings (Google Style)

```python
class UserService:
    """Service for managing users.

    Args:
        repository: User repository implementation
        logger: Logger instance

    Example:
        >>> service = UserService(repository, logger)
        >>> user = await service.create({'name': 'John'})
        >>> print(user.name)
        John
    """

    def __init__(self, repository, logger=None):
        """Initialize the service.

        Args:
            repository: User repository instance
            logger: Optional logger instance
        """
        self.repository = repository
        self.logger = logger

    async def create(self, data):
        """Create a new user.

        Args:
            data: User data dictionary

        Returns:
            The created user

        Raises:
            ConflictError: If email already exists
            ValidationError: If data is invalid

        Example:
            >>> user = await service.create({'name': 'John', 'email': 'john@example.com'})
            >>> print(user.id)
            uuid
        """
        existing = await self.repository.find_by_email(data['email'])
        if existing:
            raise ConflictError('Email already exists')
        return await self.repository.save(data)
```

### 4.5 index.rst

```rst
Welcome to My Library's documentation!
======================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   api
   guides

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
```

### 4.6 Build

```bash
cd docs
make html
```

---

## 5. Compodoc (Angular/TypeScript)

### 5.1 Instalação

```bash
npm install --save-dev @compodoc/compodoc
```

### 5.2 package.json

```json
{
  "scripts": {
    "compodoc": "npx compodoc -tsconfig tsconfig.app.json -d docs"
  }
}
```

### 5.3 Gerar

```bash
npm run compodoc
```

---

## 6. Comparação

| Método | Linguagem | Uso | Output |
|--------|----------|-----|--------|
| **JSDoc** | JS/TS | Inline comments | HTML |
| **Swagger/OpenAPI** | REST API | Decorators/JSdoc | Swagger UI |
| **AsyncAPI** | Async API | YAML/JSON | HTML/PDF |
| **Sphinx** | Python | Docstrings | HTML/PDF |
| **Compodoc** | Angular | Decorators | HTML |

---

## Referências

- [JSDoc](https://jsdoc.app/)
- [Swagger/OpenAPI](https://swagger.io/)
- [AsyncAPI](https://www.asyncapi.com/)
- [Sphinx](https://www.sphinx-doc.org/)
- [Compodoc](https://compodoc.app/)