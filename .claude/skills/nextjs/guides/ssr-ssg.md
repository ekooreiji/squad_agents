# SSR e SSG - Next.js

Server-Side Rendering e Static Site Generation.

---

## SSR (Server-Side Rendering)

Render no servidor a cada request:

```tsx
// App Router
async function Page() {
  const res = await fetch('https://api.exemplo.com/data', {
    cache: 'no-store' // SSR
  });
  const data = await res.json();
  return <h1>{data.title}</h1>;
}
```

```tsx
// Pages Router
export async function getServerSideProps() {
  const res = await fetch('https://api.exemplo.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

---

## SSG (Static Site Generation)

Buildtime:

```tsx
// App Router
async function Page() {
  const res = await fetch('https://api.exemplo.com/data'); // default cache
  const data = await res.json();
  return <h1>{data.title}</h1>;
}
```

```tsx
// Pages Router
export async function getStaticProps() {
  const res = await fetch('https://api.exemplo.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

---

## ISR (Incremental Static Regeneration)

Rebuild após interval:

```tsx
// App Router
async function Page() {
  const res = await fetch('https://api.exemplo.com/data', {
    next: { revalidate: 60 } // 60 segundos
  });
  const data = await res.json();
  return <h1>{data.title}</h1>;
}
```

```tsx
// Pages Router
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 60 // ISR
  };
}
```

---

## Quando usar

| Render | Use Case | Cache |
|--------|---------|-------|
| SSR | Dados dinâmicos | não |
| SSG | Blog, docs | sim |
| ISR | Ecommerce | sim/não |

---

## getStaticPaths (Dynamic SSG)

```tsx
// pages/products/[id].tsx
export async function getStaticPaths() {
  const res = await fetch('https://api.exemplo.com/products');
  const products = await res.json();
  
  return {
    paths: products.map(p => ({ params: { id: p.id })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.exemplo.com/products/${params.id}`);
  const product = await res.json();
  
  return { props: { product } };
}
```

---

## Notas

- SSR: a cada request
- SSG: build time
- ISR: interval