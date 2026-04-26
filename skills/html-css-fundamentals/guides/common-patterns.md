# Common Patterns

Guia de padrões comuns de UI em CSS.

---

## 1. Center Content

### 1.1 Flexbox

```css
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 1.2 Grid

```css
.center-grid {
    display: grid;
    place-items: center;
}
```

### 1.3 Absolute

```css
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

---

## 2. Card

### 2.1 Estrutura

```html
<div class="card">
    <div class="card__image">
        <img src="image.jpg" alt="">
    </div>
    <div class="card__content">
        <h3 class="card__title">Título</h3>
        <p class="card__text">Texto</p>
    </div>
</div>
```

### 2.2 CSS

```css
.card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card__image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card__content {
    padding: 16px;
}
```

---

## 3. Button

### 3.1 Base

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### 3.2 Variantes

```css
.btn--primary {
    background: #2563eb;
    color: white;
}

.btn--secondary {
    background: transparent;
    border: 1px solid #2563eb;
    color: #2563eb;
}
```

---

## 4. Input

### 4.1 CSS

```css
.input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.2s;
}

.input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

---

## 5. Navbar

### 5.1 Estrutura

```html
<nav class="navbar">
    <div class="navbar__logo">Logo</div>
    <ul class="navbar__menu">
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

### 5.2 CSS

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.navbar__menu {
    display: flex;
    gap: 24px;
    list-style: none;
}
```

---

## 6. Grid de Cards

### 6.1 CSS

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}
```

---

## Cross-refs

- [flexbox.md](flexbox.md) - Flexbox
- [grid.md](grid.md) - Grid
- [forms.md](forms.md) - Formulários
- [transitions.md](transitions.md) - Transições
- [animations.md](animations.md) - Animações