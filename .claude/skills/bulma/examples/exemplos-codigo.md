# Exemplos de Código - Bulma

Exemplos práticos Bulma.

---

## Columns

### Básico

```html
<div class="columns">
    <div class="column">Coluna 1</div>
    <div class="column">Coluna 2</div>
    <div class="column">Coluna 3</div>
</div>
```

### Responsivo

```html
<div class="columns">
    <div class="column is-12-mobile is-6-tablet is-4-desktop">Coluna</div>
    <div class="column is-12-mobile is-6-tablet is-4-desktop">Coluna</div>
    <div class="column is-12-mobile is-6-tablet is-4-desktop">Coluna</div>
</div>
```

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
<button class="button is-large">Large</button>
<button class="button is-outlined">Outlined</button>
<button class="button is-loading">Loading</button>
```

---

## Cards

```html
<div class="card">
    <header class="card-header">
        <p class="card-header-title">Título</p>
    </header>
    <div class="card-content">
        <p>Conteúdo</p>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Link 1</a>
        <a class="card-footer-item">Link 2</a>
    </footer>
</div>
```

---

## Forms

```html
<form>
    <div class="field">
        <label class="label">Nome</label>
        <div class="control">
            <input class="input" type="text">
        </div>
    </div>
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
            <input class="input" type="email">
            <span class="icon is-small is-left">@</span>
        </div>
    </div>
    <div class="field">
        <label class="label">Mensagem</label>
        <div class="control">
            <textarea class="textarea"></textarea>
        </div>
    </div>
    <button class="button is-primary">Enviar</button>
</form>
```

---

## Navbar

```html
<nav class="navbar">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">Logo</a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="#">Link 1</a>
            <a class="navbar-item" href="#">Link 2</a>
        </div>
    </div>
</nav>
```

---

## Tabs

```html
<div class="tabs">
    <ul>
        <li class="is-active"><a>Tab 1</a></li>
        <li><a>Tab 2</a></li>
    </ul>
</div>
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

## Message

```html
<article class="message">
    <div class="message-header">
        <p>Título</p>
    </div>
    <div class="message-body">Conteúdo</div>
</article>
```