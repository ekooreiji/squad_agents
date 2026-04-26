# Design Responsivo Bootstrap

Guia sobre design responsivo.

---

## 1. Mobile-First

Bootstrap usa mobile-first - estilos base são para mobile, depois expande para telas maiores.

---

## 2. Breakpoints

| Breakpoint | Largura | Container max-width |
|------------|---------|---------------------|
| sm | 540px | 540px |
| md | 720px | 720px |
| lg | 960px | 960px |
| xl | 1140px | 1140px |
| xxl | 1320px | 1320px |

---

## 3. Display Utilities

```html
<!-- Só em mobile -->
<div class="d-block d-md-none">Mobile only</div>

<!-- Mobile até Desktop -->
<div class="d-none d-md-block">Desktop only</div>
```

---

## 4. Responsive Grid

```html
<!-- stack em mobile, side-by-side em desktop -->
<div class="row">
  <div class="col-12 col-md-6">
    Coluna 1
  </div>
  <div class="col-12 col-md-6">
    Coluna 2
  </div>
</div>
```

---

## Cross-refs

- [grid-system.md](grid-system.md) - Grid
- [componentes.md](componentes.md) - Componentes