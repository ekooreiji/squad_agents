# Component Snippets - Materialize

Snippets de componentes Materialize.

---

## Button

```html
<a class="btn">Button</a>
<a class="btn btn-large">Large</a>
<a class="btn btn-small">Small</a>
<a class="btn-floating btn-large"><i class="material-icons">add</i></a>
```

---

## Card

```html
<div class="card">
    <div class="card-content">
        <span class="card-title">Título</span>
        <p>Conteúdo</p>
    </div>
    <div class="card-action">
        <a href="#">Link</a>
    </div>
</div>
```

---

## Card Image

```html
<div class="card">
    <div class="card-image">
        <img src="img.jpg">
        <span class="card-title">Título</span>
    </div>
    <div class="card-content">
        <p>Conteúdo</p>
    </div>
</div>
```

---

## Form

```html
<div class="input-field">
    <input type="text" id="nome">
    <label for="nome">Nome</label>
</div>

<div class="input-field">
    <input type="email" id="email">
    <label for="email">Email</label>
</div>

<div class="input-field">
    <textarea id="mensagem" class="materialize-textarea"></textarea>
    <label for="mensagem">Mensagem</label>
</div>
```

---

## Navbar

```html
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Link</a></li>
        </ul>
    </div>
</nav>
```

---

## Sidenav

```html
<ul id="slide-out" class="sidenav">
    <li><a href="#">Link</a></li>
</ul>

<a href="#" data-target="slide-out" class="sidenav-trigger">
    <i class="material-icons">menu</i>
</a>
```

---

## Modal

```html
<a class="btn modal-trigger" href="#modal">Abrir</a>

<div id="modal" class="modal">
    <div class="modal-content">
        <h4>Título</h4>
        <p>Conteúdo</p>
    </div>
    <div class="modal-footer">
        <a href="#" class="modal-close btn">Fechar</a>
    </div>
</div>
```

---

## Tabs

```html
<ul class="tabs">
    <li class="tab"><a href="#tab1">Tab 1</a></li>
    <li class="tab"><a href="#tab2">Tab 2</a></li>
</ul>
```

---

## Chips

```html
<div class="chip">Tag<i class="close material-icons">close</i></div>
```

---

## Pagination

```html
<ul class="pagination">
    <li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#">1</a></li>
    <li class="waves-effect"><a href="#">2</a></li>
    <li class="waves-effect"><a href="#"><i class="material-icons">chevron_right</i></a></li>
</ul>
```