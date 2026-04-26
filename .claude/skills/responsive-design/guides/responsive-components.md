# Responsive Components

Guia de criação de componentes responsivos.

---

## 1. Cards Responsivos

### 1.1 Basic Card

```css
.card {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .card {
    width: 33.33%;
  }
}
```

### 1.2 Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

---

## 2. Navigation Responsiva

### 2.1 Mobile Navigation

```css
/* Hidden by default on mobile */
.nav-menu {
  display: none;
}

.nav-menu.active {
  display: block;
}

/* Tablet - horizontal */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
  }
}

/* Desktop - full */
@media (min-width: 1024px) {
  .nav-menu {
    justify-content: flex-end;
  }
}
```

---

## 3. Tables Responsivas

### 3.1 Table Scroll

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  min-width: 600px;
}
```

### 3.2 Table Card (Mobile)

```css
@media (max-width: 767px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tbody tr {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
  
  td {
    padding-left: 50%;
  }
  
  td::before {
    position: absolute;
    left: 0.5rem;
    width: 45%;
    white-space: nowrap;
  }
}
```

---

## 4. Images Responsivas

### 4.1 Fluid Image

```css
img {
  max-width: 100%;
  height: auto;
}
```

### 4.2 Picture Element

```html
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="image-lg.jpg">
  <source 
    media="(min-width: 768px)" 
    srcset="image-md.jpg">
  <img 
    src="image-sm.jpg" 
    alt="Responsive image">
</picture>
```

---

## 5. Videos Responsivos

### 5.1 Aspect Ratio

```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## Cross-refs

- [responsive-patterns.md](responsive-patterns.md) - Padrões
- [touch-interactions.md](touch-interactions.md) - Interações