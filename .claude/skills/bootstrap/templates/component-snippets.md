# Component Snippets Bootstrap

Snippets de componentes úteis.

---

## Buttons

```html
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-sm">Small</button>
```

---

## Forms

```html
<form class="row g-3">
  <div class="col-md-6">
    <label class="form-label">Nome</label>
    <input type="text" class="form-control">
  </div>
  <div class="col-md-6">
    <label class="form-label">Email</label>
    <input type="email" class="form-control">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
```

---

## Cards Grid

```html
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
  </div>
</nav>
```

---

## Alerts

```html
<div class="alert alert-primary" role="alert">
  Alerta primary!
</div>
<div class="alert alert-success" role="alert">
  Alerta success!
</div>
<div class="alert alert-danger" role="alert">
  Alerta danger!
</div>
```