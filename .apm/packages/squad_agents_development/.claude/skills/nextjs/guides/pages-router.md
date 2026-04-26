# Pages Router - Next.js

Next.js Pages Router (legacy).

---

## pages/index.tsx

```tsx
export default function Home() {
  return <h1>Olá Next.js!</h1>;
}
```

---

## Rotas

```
pages/
├── index.tsx           # /
├── about.tsx         # /about
├── products/
│   └── index.tsx    # /products
│   └── [id].tsx  # /products/1
└── api/
    └── hello.ts    # /api/hello
```

---

## Dynamic Routes

```tsx
// pages/products/[id].tsx
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Produto {id}</h1>;
}
```

---

## getServerSideProps

```tsx
// pages/index.tsx
export async function getServerSideProps() {
  const res = await fetch('https://api.exemplo.com/data');
  const data = await res.json();
  
  return {
    props: { data }
  };
}

export default function Home({ data }) {
  return <h1>{data.title}</h1>;
}
```

---

## getStaticProps (SSG)

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.exemplo.com/posts');
  const posts = await res.json();
  
  return {
    props: { posts },
    revalidate: 60 // ISR
  };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## Example: Todo App (Pages Router)

```tsx
// pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';

type Todo = { id: number; text: string; done: boolean };

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Todo App</h1>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && addTodo()}
            placeholder="Nova tarefa..."
            style={{ flex: 1, padding: '0.5rem' }}
          />
          <button onClick={addTodo} style={{ padding: '0.5rem 1rem' }}>Add</button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
              <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
```

---

## _app.tsx

```tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

---

## Notes

- Pages Router = legacy but still supported