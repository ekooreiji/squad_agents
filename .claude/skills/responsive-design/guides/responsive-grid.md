# Responsive Grid

Guia completo de implementação de grid responsivo.

---

## 1. Grid Systems

### 1.1 12-Column Grid

| Colunas | Largura % |
|---------|-----------|
| 1 | 8.33% |
| 2 | 16.66% |
| 3 | 25% |
| 4 | 33.33% |
| 5 | 41.66% |
| 6 | 50% |
| 7 | 58.33% |
| 8 | 66.66% |
| 9 | 75% |
| 10 | 83.33% |
| 11 | 91.66% |
| 12 | 100% |

### 1.2 Gutter e Margin

| Breakpoint | Gutter | Margin |
|-----------|--------|--------|
| Mobile | 16px | 16px |
| Tablet | 24px | 24px |
| Desktop | 32px | 32px |

---

## 2. CSS Grid

### 2.1 Basic Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 0 1rem;
}
```

### 2.2 Responsive Grid

```css
.container {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(8, 1fr); /* Tablet: 8 columns */
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(12, 1fr); /* Desktop: 12 columns */
    gap: 1.5rem;
    padding: 0 2rem;
  }
}
```

---

## 3. Flexbox Grid

### 3.1 Flexbox Implementation

```css
.row {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
}

.col {
  flex: 0 0 100%;
  padding: 0.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .col-4 { flex: 0 0 50%; }
  .col-8 { flex: 0 0 100%; }
}

/* Desktop */
@media (min-width: 1024px) {
  .col-4 { flex: 0 0 33.33%; }
  .col-6 { flex: 0 0 50%; }
  .col-8 { flex: 0 0 66.66%; }
}
```

---

## 4. Utility Classes

### 4.1 Grid Utilities

```css
.col-12 { width: 100%; }
.col-6 { width: 50%; }
.col-4 { width: 33.33%; }
.col-3 { width: 25%; }
.col-2 { width: 16.66%; }

@media (min-width: 768px) {
  .md-col-6 { width: 50%; }
}

@media (min-width: 1024px) {
  .lg-col-4 { width: 33.33%; }
}
```

---

## Cross-refs

- [breakpoints.md](breakpoints.md) - Breakpoints
- [responsive-components.md](responsive-components.md) - Componentes