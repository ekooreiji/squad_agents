# Introdução ao Next.js

Framework React para produção pela Vercel.

---

## O que é Next.js

Framework React:
- SSR
- SSG
- API Routes
- File-based routing

---

## Instalação

```bash
npx create-next-app@latest my-app
# ou
npm install next react react-dom
```

---

## Estrutura App Router

```
app/
├── page.tsx        # Home /
├── about/
│   └── page.tsx   # /about
├── layout.tsx     # Layout raiz
└── globals.css
```

---

## Estrutura Pages Router

```
pages/
├── index.tsx      # Home /
├── about.tsx      # /about
├── _app.tsx      # App wrapper
├── _document.tsx # Document wrapper
└── api/
    └── hello.ts  # API /api/hello
```

---

## Comparações

| Next.js | Create React App |
|--------|----------------|
| SSR/SSG | Client-only |
| File routing | React Router |
| API Routes | Express separado |

---

## App Router vs Pages Router

| Feature | App Router | Pages Router |
|---------|-----------|-------------|
| Versão | Next.js 13+ | Legacy |
| Directory | app/ | pages/ |
| Components | React Server | Client/Server |
| Fetching | async/await | getServerSideProps |

---

## Quick Start

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm run dev
```

---

## Notes

- Next.js 13+ usa App Router