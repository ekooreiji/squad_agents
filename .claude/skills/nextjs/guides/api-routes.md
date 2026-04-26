# API Routes - Next.js

Backend endpoints no Next.js.

---

## API Routes (Pages Router)

```tsx
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Olá Next.js API!' });
}
```

---

## App Router API (Route Handlers)

```tsx
// app/api/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Olá API!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
```

---

## Estrutura API

```
pages/api/
├── hello.ts          # /api/hello
├── users/
│   └── index.ts    # /api/users
└── users/
    └── [id].ts    # /api/users/1
```

```
app/api/
├── route.ts        # /api
└── users/
    ├── route.ts  # /api/users
    └── [id]/
        └── route.ts # /api/users/1
```

---

## GET

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
  ];
  return NextResponse.json(users);
}
```

---

## POST

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Salvar no banco
  return NextResponse.json({ success: true, user: body }, { status: 201 });
}
```

---

## GET by ID

```tsx
// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = { id, name: 'Usuário' };
  return NextResponse.json(user);
}
```

---

## Verbose Methods

```tsx
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  return NextResponse.json({ success: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ success: true });
}
```

---

## Notes

- API Routes = full-stack