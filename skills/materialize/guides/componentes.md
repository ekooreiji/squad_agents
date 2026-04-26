# Componentes - Materialize

Principais componentes Materialize.

---

## Buttons

```html
<a class="btn">Button</a>
<a class="btn btn-large">Large</a>
<a class="btn btn-small">Small</a>
<a class="btn-floating btn-large"><i class="material-icons">add</i></a>

<a class="btn waves-effect">Wave Effect</a>
<a class="btn waves-light">Wave Light</a>

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

## Sidenav

```html
<ul id="slide-out" class="sidenav">
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
</ul>

<a href="#" data-target="slide-out" class="sidenav-trigger">
    <i class="material-icons">menu</i>
</a>
```

---

## Navbar

```html
<nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </div>
</nav>
```

---

## Modal

```html
<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

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
        <li class="tab"><a href="#test1">Tab 1</a></li>
        <li class="tab"><a href="#test2">Tab 2</a></li>
    </ul>
</div>
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