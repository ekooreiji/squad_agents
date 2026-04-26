# Next.js Patterns

Padrões Next.js.

---

## Page Patterns (App Router)

```tsx
// app/page.tsx
export default async function Page() {
  const data = await fetchData();
  return <h1>{data.title}</h1>;
}

async function fetchData() {
  const res = await fetch('https://api.exemplo.com/data');
  return res.json();
}
```

---

## API Route

```tsx
// app/api/tasks/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([{ id: 1, text: 'Task 1' }]);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, task: body }, { status: 201 });
}
```

---

## Server Component

```tsx
// app/dashboard/page.tsx
export default async function Dashboard() {
  const user = await getUser();
  
  return (
    <div>
      <h1>Bem-vindo, {user.name}</h1>
    </div>
  );
}

async function getUser() {
  return { name: 'João' };
}
```

---

## Client Component

```tsx
// app/counter/page.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```