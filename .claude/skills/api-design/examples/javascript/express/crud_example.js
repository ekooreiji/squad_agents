const express = require('express');
const app = express();

app.use(express.json());

let users = [];
let nextId = 1;

app.get('/users', (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  res.json({
    data: users,
    pagination: { page: Number(page), limit: Number(limit), total: users.length }
  });
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ data: user });
});

app.post('/users', (req, res) => {
  const newUser = { id: nextId++, ...req.body };
  users.push(newUser);
  res.status(201).json({ data: newUser });
});

app.patch('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  Object.assign(user, req.body);
  res.json({ data: user });
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('API running on port 3000'));