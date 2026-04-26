# App Router - Next.js

Next.js 13+ App Router.

---

## app/page.tsx

```tsx
export default function Home() {
  return <h1>Olá Next.js!</h1>;
}
```

---

## Pasta de rotas

```
app/
├── page.tsx           # /
├── about/
│   └── page.tsx      # /about
├── products/
│   ├── page.tsx     # /products
│   └── [id]/
│       └── page.tsx   # /products/1
└── blog/
    └── [slug]/
        └── page.tsx   # /blog/any-slug
```

---

## Dynamic Routes

```tsx
// app/products/[id]/page.tsx
export default function Product({ params }: { params: { id: string } }) {
  return <h1>Produto {params.id}</h1>;
}
```

---

## Layout

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

## Example: Todo App (App Router)

```tsx
// app/page.tsx
'use client';

import { useState } from 'react';

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
  );
}
```

---

## Server Components vs Client Components

```tsx
// Server Component (default)
export default function Page() {
  const data = await fetchData(); // await funciona
  return <div>{data.title}</div>;
}

// Client Component
'use client';
export default function Page() {
  const [state, setState] = useState();
  return <button onClick={() => setState('clicked')}>{state}</button>;
}
```

---

## Data Fetching

```tsx
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.exemplo.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <h1>{data.title}</h1>;
}
```

---

## Notes

- App Router = Next.js 13+