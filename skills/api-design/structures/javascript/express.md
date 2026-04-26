# Express Structure

## Project Structure

```
src/
├── index.js              # Entry point
├── config/
│   └── index.js        # Configuration
├── routes/
│   ├── index.js       # Route aggregator
│   └── user.routes.js
├── controllers/
│   ├── index.js
│   └── user.controller.js
├── middleware/
│   ├── auth.js       # Authentication
│   ├── error.js      # Error handling
│   └── validate.js   # Validation
├── models/
│   └── user.model.js
├── utils/
│   ├── response.js
│   └── security.js
└── app.js            # Express app
```

## Entry Point (index.js)

```javascript
const express = require('express');
const cors = require('cors');
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', require('./routes/user.routes'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Routes

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

## Controller

```javascript
class UserController {
  async getUsers(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query;
      const users = await UserService.findAll({ page, limit });
      
      res.json({
        data: users.items,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: users.total
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUser(req, res) {
    const user = await UserService.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ data: user });
  }

  async createUser(req, res) {
    const user = await UserService.create(req.body);
    res.status(201).json({ data: user });
  }
}

module.exports = new UserController();
```

## Error Middleware

```javascript
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
      code: err.code
    }
  });
}

module.exports = errorHandler;
```

## Authentication Middleware

```javascript
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authenticate;
```

## Pagination

```javascript
function paginatedResponse(query, page, limit) {
  const offset = (page - 1) * limit;
  
  return {
    data: query.offset(offset).limit(limit),
    pagination: {
      page,
      limit,
      offset
    }
  };
}
```