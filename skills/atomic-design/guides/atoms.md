# Átomos - Atomic Design

Menores unidades do design.

---

## O que são Átomos

Elementos básicos que não podem ser quebrados:
- Buttons
- Inputs
- Labels
- Links
- Imagens
- Texto

---

## Exemplos

### Button (HTML)

```html
<button class="btn btn-primary">Click me</button>
```

### Button (CSS)

```css
.btn {
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
}
```

---

### Input (HTML)

```html
<input type="text" class="input" placeholder="Digite...">
<input type="email" class="input" placeholder="Email">
<input type="password" class="input" placeholder="Senha">
```

### Input (CSS)

```css
.input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
```

---

### Label (HTML)

```html
<label class="label">Nome</label>
```

---

### Link (HTML)

```html
<a href="#" class="link">Link</a>
```

### Link (CSS)

```css
.link {
    color: #007bff;
    text-decoration: none;
}
.link:hover {
    text-decoration: underline;
}
```

---

##原子 CSS

```css
/* Colors */
:root {
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --danger: #dc3545;
    --text: #333;
}

/* Typography */
.label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
}
```

---

## Notes

- Não podem ser quebrados
- São a base