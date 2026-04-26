# Componentes - Bulma

Principais componentes Bulma.

---

## Buttons

```html
<button class="button">Padrão</button>
<button class="button is-primary">Primary</button>
<button class="button is-link">Link</button>
<button class="button is-info">Info</button>
<button class="button is-success">Success</button>
<button class="button is-warning">Warning</button>
<button class="button is-danger">Danger</button>

<button class="button is-small">Small</button>
<button class="button is-normal">Normal</button>
<button class="button is-medium">Medium</button>
<button class="button is-large">Large</button>

<button class="button is-outlined">Outlined</button>
<button class="button is-inverted">Inverted</button>
<button class="button is-loading">Loading</button>
<button class="button is-static">Static</button>
```

---

## Card

```html
<div class="card">
    <header class="card-header">
        <p class="card-header-title">Título</p>
        <a class="card-header-icon">
            <span class="icon">Icon</span>
        </a>
    </header>
    <div class="card-content">
        <div class="content">Conteúdo</div>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Link 1</a>
        <a class="card-footer-item">Link 2</a>
    </footer>
</div>
```

---

## Navbar

```html
<nav class="navbar is-light">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">Logo</a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="#">Link 1</a>
            <a class="navbar-item" href="#">Link 2</a>
            <div class="navbar-item has-dropdown">
                <a class="navbar-link">Dropdown</a>
                <div class="navbar-dropdown">
                    <a class="navbar-item">Item 1</a>
                    <a class="navbar-item">Item 2</a>
                </div>
            </div>
        </div>
        <div class="navbar-end">
            <a class="navbar-item">Direita</a>
        </div>
    </div>
</nav>
```

---

## Menu

```html
<aside class="menu">
    <p class="menu-label">Label</p>
    <ul class="menu-list">
        <li><a>Link 1</a></li>
        <li><a>Link 2</a></li>
    </ul>
    <p class="menu-label">Label 2</p>
    <ul class="menu-list">
        <li><a>Link 3</a></li>
    </ul>
</aside>
```

---

## Tags

```html
<span class="tag">Tag</span>
<span class="tag is-primary">Primary</span>
<span class="tag is-link">Link</span>
<span class="tag is-info">Info</span>
<span class="tag is-success">Success</span>
<span class="tag is-warning">Warning</span>
<span class="tag is-danger">Danger</span>
<span class="tag is-rounded">Rounded</span>
<span class="tag is-delete">Delete</span>
```

---

## Box

```html
<div class="box">
    <h1 class="title">Título</h1>
    <p class="subtitle">Subtítulo</p>
    <p>Conteúdo</p>
</div>
```

---

## Notification

```html
<div class="notification">Default</div>
<div class="notification is-primary">Primary</div>
<div class="notification is-info">Info</div>
<div class="notification is-success">Success</div>
<div class="notification is-warning">Warning</div>
<div class="notification is-danger">Danger</div>
<button class="delete"></button>
```

---

## Message

```html
<article class="message">
    <div class="message-header">
        <p>Título</p>
        <button class="delete"></button>
    </div>
    <div class="message-body">Conteúdo</div>
</article>
```

---

## Progress

```html
<progress class="progress" value="30" max="100">30%</progress>
<progress class="progress is-primary" value="30" max="100">30%</progress>
<progress class="progress is-small" value="30" max="100">30%</progress>
<progress class="progress is-medium" value="30" max="100">30%</progress>
```