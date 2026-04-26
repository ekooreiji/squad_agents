# Component Snippets - Bulma

Snippets de componentes Bulma.

---

## Button

```html
<button class="button">Button</button>
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
```

---

## Card

```html
<div class="card">
    <header class="card-header">
        <p class="card-header-title">Título</p>
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

## Form

```html
<div class="field">
    <label class="label">Nome</label>
    <div class="control">
        <input class="input" type="text" placeholder="Texto">
    </div>
</div>

<div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">@</span>
    </div>
</div>

<div class="field">
    <label class="label">Mensagem</label>
    <div class="control">
        <textarea class="textarea" placeholder="Mensagem"></textarea>
    </div>
</div>

<div class="field">
    <div class="control">
        <button class="button is-primary">Enviar</button>
    </div>
</div>
```

---

## Navbar

```html
<nav class="navbar" role="navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">Logo</a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="#">Link 1</a>
            <a class="navbar-item" href="#">Link 2</a>
        </div>
        <div class="navbar-end">
            <a class="navbar-item" href="#">Direita</a>
        </div>
    </div>
</nav>
```

---

## Columns

```html
<div class="columns">
    <div class="column">Coluna 1</div>
    <div class="column">Coluna 2</div>
    <div class="column">Coluna 3</div>
</div>
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
</aside>
```

---

## Message

```html
<article class="message">
    <div class="message-header">
        <p>Título</p>
    </div>
    <div class="message-body">Conteúdo</div>
</article>

<article class="message is-primary">...</article>
<article class="message is-info">...</article>
<article class="message is-success">...</article>
```

---

## Tags

```html
<span class="tag">Tag</span>
<span class="tag is-primary">Primary</span>
<span class="tag is-info">Info</span>
<span class="tag is-success">Success</span>
<span class="tag is-warning">Warning</span>
<span class="tag is-danger">Danger</span>

<span class="tag is-rounded">Rounded</span>
```

---

## Box

```html
<div class="box">
    <h1>Título</h1>
    <p>Conteúdo</p>
</div>
```

---

## Notification

```html
<div class="notification">
    <button class="delete"></button>
    Conteúdo
</div>
```