# Responsive CSS

Guia de CSS responsivo com media queries.

---

## 1. O que é Responsive

Responsive design faz layouts se adaptarem a diferentes tamanhos de tela.

---

## 2. Media Queries

### 2.1 Sintaxe

```css
/* Mobile first - min-width */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 1024px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1280px) {
    .container {
        width: 1200px;
    }
}
```

### 2.2 Max-width (desktop first)

```css
/* Desktop first */
@media (max-width: 1023px) {
    .sidebar {
        display: none;
    }
}
```

---

## 3. Breakpoints Common

### 3.1 Bootstrap-style

| Breakpoint | Largura |
|-----------|---------|
| sm | ≥ 576px |
| md | ≥ 768px |
| lg | ≥ 992px |
| xl | ≥ 1200px |
| xxl | ≥ 1400px |

### 3.2 Tailwind-style

| Breakpoint | Largura |
|-----------|---------|
| sm | ≥ 640px |
| md | ≥ 768px |
| lg | ≥ 1024px |
| xl | ≥ 1280px |
| 2xl | ≥ 1536px |

---

## 4. Units Responsivos

### 4.1 Viewport Units

```css
.hero {
    height: 100vh; /* 100% da altura */
    width: 100vw; /* 100% da largura */
}

.container {
    max-width: 90vw;
}
```

### 4.2 Clamp

```css
.title {
    font-size: clamp(1.5rem, 5vw, 3rem);
}
```

---

## 5. Mobile First vs Desktop First

### 5.1 Mobile First (Recomendado)

```css
/* Base - mobile */
.container {
    width: 100%;
    padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 24px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 970px;
        padding: 32px;
    }
}
```

### 5.2 Desktop First

```css
/* Desktop */
.sidebar {
    width: 300px;
}

/* Mobile */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
    }
}
```

---

## 6. Imagens Responsivas

### 6.1 Max-width

```css
img {
    max-width: 100%;
    height: auto;
}
```

### 6.2 Picture Element

```html
<picture>
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Imagem">
</picture>
```

---

## Cross-refs

- [flexbox.md](flexbox.md) - Flexbox
- [grid.md](grid.md) - Grid
- [forms.md](forms.md) - Formulários responsivos