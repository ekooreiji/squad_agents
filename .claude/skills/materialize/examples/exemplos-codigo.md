# Exemplos de Código - Materialize

Exemplos práticos Materialize.

---

## Grid

### Básico

```html
<div class="container">
    <div class="row">
        <div class="col s1">1</div>
        <div class="col s2">2</div>
        <div class="col s3">3</div>
    </div>
</div>
```

### Responsivo

```html
<div class="row">
    <div class="col s12 m6 l4">Responsivo</div>
    <div class="col s12 m6 l4">Responsivo</div>
    <div class="col s12 m6 l4">Responsivo</div>
</div>
```

---

## Buttons

```html
<a class="btn">Button</a>
<a class="btn btn-large">Large</a>
<a class="btn btn-small">Small</a>
<a class="btn-floating"><i class="material-icons">add</i></a>
<a class="btn waves-effect">Wave Effect</a>
<a class="btn disabled">Disabled</a>
```

---

## Cards

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

## Forms

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

<button class="btn waves-effect waves-light">Enviar</button>
```

---

## Navbar

```html
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
            <li><a href="#">Link</a></li>
        </ul>
    </div>
</nav>
```

---

## Modal

```html
<a class="btn modal-trigger" href="#modal1">Abrir</a>

<div id="modal1" class="modal">
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
<div class="col s12">
    <ul class="tabs">
        <li class="tab"><a href="#t1">Tab 1</a></li>
        <li class="tab"><a href="#t2">Tab 2</a></li>
    </ul>
</div>
```

---

## Chips

```html
<div class="chip">Tag<i class="close material-icons">close</i></div>
<div class="chip">Tag 2</div>
```

---

## Cores

```html
<div class="red">Red</div>
<div class="blue">Blue</div>
<div class="green">Green</div>
<div class="grey lighten-2">Grey</div>
```