# Styling - Next.js

CSS e estilização no Next.js.

---

## CSS Modules

```css
/* styles/Home.module.css */
.container {
  padding: 2rem;
}
.title {
  font-size: 2rem;
}
```

```tsx
// app/page.tsx
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Olá</h1>
    </main>
  );
}
```

---

## Global CSS

```css
/* app/globals.css */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

```tsx
// app/layout.tsx
import '@/app/globals.css';

export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>;
}
```

---

## Tailwind CSS

```bash
npx create-next-app@latest --tailwind
```

```tsx
export default function Home() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">Olá</h1>
    </div>
  );
}
```

---

## Styled Components

```tsx
// lib/registry.tsx
'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
```

---

## Emotion

```tsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
```

---

## Notes

- CSS Modules: built-in
- Tailwind: popular