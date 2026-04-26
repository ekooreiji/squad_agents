# Express.js - Node.js

Framework web minimalista.

---

## Instalação

```bash
npm install express
```

---

## Primeiro App

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá Express!');
});

app.listen(3000, () => {
  console.log('Servidor na porta 3000');
});
```

---

## Routes

```javascript
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'João' }]);
});

app.post('/api/users', (req, res) => {
  res.status(201).json({ success: true });
});

app.put('/api/users/:id', (req, res) => {
  res.json({ success: true });
});

app.delete('/api/users/:id', (req, res) => {
  res.json({ success: true });
});
```

---

## Middleware

```javascript
// Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// JSON parser
app.use(express.json());

// Body parser
app.use(express.urlencoded({ extended: true }));
```

---

## Parâmetros

```javascript
// Route params
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

// Query params
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.json({ q });
});

// Body
app.post('/create', (req, res) => {
  const { name } = req.body;
  res.json({ name });
});
```

---

## Router

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json([]));
router.post('/', (req, res) => res.status(201).json({}));

module.exports = router;

// main.js
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
```

---

## Error Handling

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno' });
});
```

---

## Notes

- Express = web framework mais popular