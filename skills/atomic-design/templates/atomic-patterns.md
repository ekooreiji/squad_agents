# Atomic Patterns - Atomic Design

Padrões reutilizáveis.

---

## Button (Átomo)

```css
.atom-button {
    padding: 0.5rem 1rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

---

## Card (Molécula)

```css
.molecule-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}
.molecule-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.molecule-card-body {
    padding: 1rem;
}
```

---

## Header (Organismo)

```css
.organism-header {
    background: white;
    border-bottom: 1px solid #ddd;
}
.organism-header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}
```

---

## Blog Template

```html
<templateBlog>
    <header class="organism-header">...</header>
    <main>
        <moleculeCard>...</moleculeCard>
    </main>
    <footer class="organism-footer">...</footer>
</templateBlog>
```