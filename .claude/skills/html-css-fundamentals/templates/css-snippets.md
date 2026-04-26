# CSS Snippets

Template de snippets CSS úteis.

---

## Estrutura

```markdown
---
title: CSS Snippets
author: 
date: YYYY-MM-DD
---

# CSS Snippets

## Reset Básico

```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 100%;
}

body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}
```

---

## Container

```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

@media (min-width: 768px) {
    .container {
        padding: 0 24px;
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 32px;
    }
}
```

---

## Flexbox Utilities

```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
```

---

## Grid Utilities

```css
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
```

---

## Spacing

```css
.m-0 { margin: 0; }
.mt-1 { margin-top: 4px; }
.mt-2 { margin-top: 8px; }
.mt-4 { margin-top: 16px; }
.p-0 { padding: 0; }
.pt-4 { padding-top: 16px; }
.pb-4 { padding-bottom: 16px; }
```

---

## Typography

```css
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
.text-center { text-align: center; }
```

---

## Buttons

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-secondary {
    background: transparent;
    border: 1px solid #2563eb;
    color: #2563eb;
}
```

---

## Cards

```css
.card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background: white;
}
```

---

## Responsive

```css
/* Hide on mobile */
.hide-mobile {
    display: none;
}

@media (min-width: 768px) {
    .hide-mobile {
        display: block;
    }
}

/* Show on mobile only */
.show-mobile {
    display: block;
}

@media (min-width: 768px) {
    .show-mobile {
        display: none;
    }
}
```
```