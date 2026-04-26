# Password Storage

## Não use:
- MD5
- SHA-1 sem salt
- Senha pura

## Use:

### Python (bcrypt)
```python
import bcrypt

# Hash
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verify
bcrypt.checkpw(password.encode(), hashed)
```

### JavaScript (bcrypt)
```javascript
const bcrypt = require('bcrypt');
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);
const valid = await bcrypt.compare(password, hash);
```

## Consider:
- Argon2id - vencedor PHC
- bcrypt - amplamente suportado