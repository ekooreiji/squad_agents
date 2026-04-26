# Breakpoints

Guia completo de breakpoints estratégicos para design responsivo.

---

## 1. O que são Breakpoints

Breakpoints são pontos onde o layout muda para adaptar-se ao tamanho da tela.

---

## 2. Breakpoints Padrão

### 2.1 Common Breakpoints

| Dispositivo | Largura | Breakpoint | Columns |
|-------------|---------|------------|---------|
| **xs** | < 576px | phone | 4 |
| **sm** | 576-767px | large-phone | 4 |
| **md** | 768-991px | tablet | 8 |
| **lg** | 992-1199px | desktop | 12 |
| **xl** | 1200-1399px | large-desktop | 12 |
| **xxl** | ≥ 1400px | xlarge-desktop | 12 |

### 2.2 Bootstrap-style

| Breakpoint | Largura |
|-----------|---------|
| xs | < 576px |
| sm | ≥ 576px |
| md | ≥ 768px |
| lg | ≥ 992px |
| xl | ≥ 1200px |
| xxl | ≥ 1400px |

### 2.3 Tailwind-style

| Breakpoint | Largura |
|-----------|---------|
| sm | ≥ 640px |
| md | ≥ 768px |
| lg | ≥ 1024px |
| xl | ≥ 1280px |
| 2xl | ≥ 1536px |

---

## 3. Estratégia de Breakpoints

### 3.1 Content-First

```
/*
Consider content first, not devices
* /
.container {
  max-width: 1200px;
  padding: 1rem;
}

/* Base - Small screens first */
element { width: 100%; }

/* Then add breakpoints */
@media (min-width: 768px) {
  element { width: 50%; }
}
```

### 3.2 Quando Adicionar Breakpoints

- Quando o conteúdo quebra
- Quando elementos ficam muito pequenos
- Quando layout fica apertado
- Quando用户体验 suffers

---

## 4. Custom Breakpoints

### 4.1 Exemplos de Projeto

```css
/* Small phone */
@media (max-width: 320px) { }

/* Large phone */
@media (min-width: 480px) { }

/* Tablet portrait */
@media (min-width: 600px) { }

/* Tablet landscape */
@media (min-width: 900px) { }

/* Desktop */
@media (min-width: 1200px) { }

/* Large desktop */
@media (min-width: 1800px) { }
```

---

## 5. Best Practices

- Use min-width, not max-width
- Keep it simple (3-5 breakpoints)
- Test real content
- Prioritize common devices
- Consider future devices

---

## Cross-refs

- [fluid-typography.md](fluid-typography.md) - Tipografia fluida
- [responsive-grid.md](responsive-grid.md) - Grid responsivo