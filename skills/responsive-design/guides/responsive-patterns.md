# Responsive Patterns

Guia de padrões de design responsivo comuns.

---

## 1. Layout Patterns

### 1.1 Single Column → Multi-Column

```
┌─────────┐          ┌─────────┬─────────┐
│ Block 1 │   →      │ Block 1 │ Block 2 │
└─────────┘          ├─────────┼─────────┤
┌─────────┐          │ Block 3 │ Block 4 │
│ Block 2 │          └─────────┴─────────┘
└─────────┘
Mobile                Desktop
```

### 1.2 Stacked → Side-by-side

```
[Image] [Text]    →    [━━━━ Image/Text ━━━━]
```

---

## 2. Navigation Patterns

### 2.1 Bottom Navigation (Mobile)

```
┌──────────────────────┐
│                      │
│      Content         │
│                      │
├──────────────────────┤
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│  │Home│ │Search│ │ │ │ │
│  └──┘ └──┘ └──┘ └──┘│
```

### 2.2 Hamburger → Horizontal

```
☰        →      Home | About | Contact
```

---

## 3. Content Patterns

### 3.1 Hide/Show

```
[Read More ▼]    →    Expanded content
```

### 3.2 Accordion → Expand

```
[Section A +]     →    [Section A −]
[Section B +]            [Section A content]
[Section C +]           [Section A content]
                       ─────────────────────
                       [Section B +]
```

---

## 4. Grid Patterns

### 4.1 Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .card-grid.grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid.grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .card-grid.grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 5. Form Patterns

### 5.1 Stacked → Inline

```
Name  [      ]    →    Name [      ]  Email[      ]
Email [      ]          tel  [      ]
Tel   [      ]            [Submit]
─────────────────────────────────────
Mobile                   Desktop
```

---

## Cross-refs

- [responsive-components.md](responsive-components.md) - Componentes
- [mobile-first.md](mobile-first.md) - Abordagem