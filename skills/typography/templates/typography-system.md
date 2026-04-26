# Template: Typography System

Template para criar sistema tipográfico completo.

---

## Estrutura

```markdown
---
title: Typography System - [Nome do Projeto]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Typography System: [Nome do Projeto]

## Overview

| Item | Valor |
|------|-------|
| Versão | 1.0.0 |
| Última Atualização | [Data] |
| Fontes | [Lista] |

---

## Font Stack

### Primary

| Propriedade | Valor |
|-------------|-------|
| Família | [Nome] |
| Fabricante | [Fabricante] |
| Licença | [Licença] |
| URL | [Link] |
| Pesos | [Lista] |

### Secondary

| Propriedade | Valor |
|-------------|-------|
| Família | [Nome] |
| ... | ... |

---

## Scale

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| --text-xs | 0.75rem (12px) | 1.5 | Caption |
| --text-sm | 0.875rem (14px) | 1.5 | Small |
| --text-base | 1rem (16px) | 1.6 | Body |
| --text-lg | 1.125rem (18px) | 1.6 | Large Body |
| --text-xl | 1.25rem (20px) | 1.4 | H4 |
| --text-2xl | 1.5rem (24px) | 1.3 | H3 |
| --text-3xl | 1.875rem (30px) | 1.2 | H2 |
| --text-4xl | 2.25rem (36px) | 1.2 | H1 |
| --text-5xl | 3rem (48px) | 1.1 | Display |

### Responsive Scale

| Breakpoint | Base | H1 | H2 | H3 |
|------------|------|----|----|----|
| Mobile (<768px) | 16px | 28px | 24px | 20px |
| Tablet (768-1024) | 16px | 36px | 28px | 24px |
| Desktop (>1024) | 16px | 48px | 36px | 28px |

---

## Weights

| Token | Peso | Nome | Uso |
|------|------|------|-----|
| --font-light | 300 | Light | Decorative |
| --font-regular | 400 | Regular | Body |
| --font-medium | 500 | Medium | Labels |
| --font-semibold | 600 | Semi Bold | Subtítulos |
| --font-bold | 700 | Bold | Títulos |
| --font-black | 900 | Black | Display |

---

## Usage by Context

### Blog/Editorial

```
Display: Serif
Body: Serif or Sans

Example: Playfair Display + Source Sans Pro
```

### SaaS/Dashboard

```
Display: Sans-Serif
Body: Sans-Serif

Example: Inter + Inter
```

### Landing/Marketing

```
Display: Display
Body: Sans

Example: Poppins + Open Sans
```

---

## CSS Implementation

```css
:root {
  /* Font Families */
  --font-display: 'Font Name', sans-serif;
  --font-body: 'Font Name', sans-serif;

  /* Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;

  /* Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
}

/* Usage */
h1 { font-size: var(--text-5xl); font-weight: var(--font-bold); }
h2 { font-size: var(--text-4xl); font-weight: var(--font-bold); }
h3 { font-size: var(--text-3xl); font-weight: var(--font-semibold); }
h4 { font-size: var(--text-xl); font-weight: var(--font-semibold); }
body { font-size: var(--text-base); font-weight: var(--font-regular); }
small { font-size: var(--text-sm); }
caption { font-size: var(--text-xs); }
```

---

## Accessibility

| Check | Status |
|-------|--------|
| Contraste 4.5:1 | [x] |
| Tamanho 16px+ | [x] |
| Line height 1.5+ | [x] |
| Alinhamento left | [x] |

---

## Alternatives

### Fallback Stack

```css
font-family: 'Primary Font', system-ui, -apple-system, sans-serif;
```

### Font Loading

```javascript
// Font Face Observer
const font = new FontFace('Font Name', 'url(font.woff2)');
font.load().then(f => document.fonts.add(f));
```

---

## Documentação

| Version | Date | Changes |
|---------|------|--------|
| 1.0.0 | YYYY-MM-DD | Initial |
```

---

## Approval

| Role | Name | Date |
|------|------|------|
| Designer | | |
| Lead | | |
| Accessibilidade | | |
```