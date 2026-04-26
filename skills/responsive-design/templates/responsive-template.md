# Responsive Template

Template para projetos responsivos.

---

## Estrutura

```markdown
---
title: Projeto Responsivo - [Nome]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# [Nome] - Design Responsivo

## Breakpoints

| Breakpoint | Largura | Colunas |
|-----------|--------|---------|
| Mobile | < 768px | 4 |
| Tablet | 768-1024px | 8 |
| Desktop | > 1024px | 12 |

---

## Grid

### HTML
```html
<div class="container">
  <div class="row">
    <div class="col-12 md-col-6 lg-col-4">Content</div>
  </div>
</div>
```

### CSS
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container { padding: 0 2rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 3rem; }
}
```

---

## Typography

```css
/* Fluid type */
html {
  font-size: clamp(100%, 1.5vw, 125%);
}
```

---

## Components

### Responsivo

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Grid | 1 col | 2 col | 3 col |
| Nav | Hamburger | Auto | Horizontal |
| Table | Scroll | Scroll | Full |

---

## Testes

| Dispositivo | Status |
|------------|--------|
| Mobile | [ ] |
| Tablet | [ ] |
| Desktop | [ ] |
```