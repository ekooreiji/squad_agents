# Deploy - Node.js

Deploy para produção.

---

## Build

```bash
npm run build
```

---

## PM2

```bash
npm install -g pm2
pm2 start index.js
pm2 restart index.js
pm2 stop index.js
pm2 list
```

---

## Environment

```bash
# .env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=secret-key
```

```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

---

## Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

---

## Vercel

```json
// vercel.json
{
  "build": {
    "command": "npm run build",
    "output": "build"
  }
}
```

---

## Render/Railway

```yaml
# render.yaml
services:
  - type: web
    name: my-app
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

---

## Notes

- PM2 = production ready