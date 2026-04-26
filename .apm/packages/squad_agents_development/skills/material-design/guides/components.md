# Componentes - Material Design

Componentes Material.

---

## Button

```html
<button class="md-btn md-btn--contained">Contained</button>
<button class="md-btn md-btn--outlined">Outlined</button>
<button class="md-btn md-btn--text">Text</button>
```

```css
.md-btn {
    padding: 0 16px;
    height: 36px;
    border-radius: 4px;
    text-transform: uppercase;
}
.md-btn--contained { background: var(--md-primary); color: white; }
.md-btn--outlined { border: 1px solid var(--md-primary); }
.md-btn--text { background: transparent; }
```

---

## FAB (Floating Action Button)

```html
<button class="md-fab">+</button>
```

```css
.md-fab {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--md-secondary);
}
```

---

## Card

```html
<div class="md-card md-elevation--1">
    <div class="md-card__media">
        <img src="image.jpg" />
    </div>
    <div class="md-card__primary">
        <h3 class="md-card__title">Title</h3>
    </div>
    <div class="md-card__supporting-text">
        Description
    </div>
</div>
```

---

## Text Field

```html
<div class="md-text-field">
    <input class="md-text-field__input" type="text" id="input">
    <label class="md-text-field__label" for="input">Label</label>
</div>
```

---

## Toolbar/App Bar

```html
<header class="md-app-bar">
    <button class="md-app-bar__nav">☰</button>
    <h1 class="md-app-bar__title">Title</h1>
</header>
```

---

## Bottom Navigation

```html
<nav class="md-bottom-nav">
    <a class="md-bottom-nav__item md-bottom-nav__item--active">Home</a>
    <a class="md-bottom-nav__item">Search</a>
    <a class="md-bottom-nav__item">Favorites</a>
</nav>
```

---

## Notes

- Follows elevation