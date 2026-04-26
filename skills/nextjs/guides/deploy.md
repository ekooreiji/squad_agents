# Deploy - Next.js

Deploy para Vercel e outros serviços.

---

## Vercel (Recomendado)

```bash
npm i -g vercel
vercel
# ou
# Deploy automático no push para GitHub
```

---

## Build local

```bash
npm run build
npm run start   # produção
npm run dev   # desenvolvimento
```

---

## Static Export

```tsx
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
```

```bash
npm run build
# Gera pasta out/
```

---

## GitHub Pages

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run start
```

---

## Docker

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./next
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

---

## VPS (Node.js)

```bash
npm run build
# PM2
pm2 start npm --name "nextjs" -- start
```

---

## Notes

- Vercel = easiest