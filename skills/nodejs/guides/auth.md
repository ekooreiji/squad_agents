# Autenticação JWT - Node.js

JWT para autenticação.

---

## Instalação

```bash
npm install jsonwebtoken bcryptjs
```

---

## Setup JWT

```javascript
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'secret-key';

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: '24h' }
  );
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}
```

---

## Middleware de Auth

```javascript
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

---

## Login Route

```javascript
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = generateToken(user);
  res.json({ token, user: { id: user.id, email: user.email } });
});
```

---

## Register Route

```javascript
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({
    name,
    email,
    password: hashedPassword
  });
  
  await user.save();
  
  const token = generateToken(user);
  res.status(201).json({ token, user: { id: user.id, email: user.email } });
});
```

---

## Protected Route

```javascript
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});
```

---

## Notes

- JWT = stateless auth