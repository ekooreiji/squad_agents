# Node.js Patterns

Padrões Node.js.

---

## Express App

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'João' }]);
});

app.listen(3000, () => console.log('Porta 3000'));
```

---

## CRUD API

```javascript
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});
```

---

## JWT Auth

```javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ id: user.id }, 'secret', { expiresIn: '24h' });
}
```