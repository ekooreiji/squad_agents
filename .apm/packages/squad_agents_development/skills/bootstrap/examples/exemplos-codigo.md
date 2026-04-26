# Exemplos de Código Bootstrap

Exemplos práticos de componentes Bootstrap.

---

## Grid

### Básico 3 colunas

```html
<div class="container">
    <div class="row">
        <div class="col">Coluna 1</div>
        <div class="col">Coluna 2</div>
        <div class="col">Coluna 3</div>
    </div>
</div>
```

### Responsivo

```html
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">Mobile: full, Desktop: 1/3</div>
    <div class="col-12 col-md-6 col-lg-4">Mobile: full, Desktop: 1/3</div>
    <div class="col-12 col-md-6 col-lg-4">Mobile: full, Desktop: 1/3</div>
</div>
```

---

## Botões

```html
<button class="btn btn-primary">Primário</button>
<button class="btn btn-secondary">Secundário</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-success btn-lg">Grande</button>
<button class="btn btn-danger btn-sm">Pequeno</button>
```

---

## Cards

```html
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto</p>
        <a href="#" class="btn btn-primary">Ação</a>
    </div>
</div>
```

---

## Formulários

```html
<form>
    <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control">
    </div>
    <div class="mb-3">
        <label class="form-label">Senha</label>
        <input type="password" class="form-control">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check">
        <label class="form-check-label">Lembrar</label>
    </div>
    <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

---

## Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            </ul>
        </div>
    </div>
</nav>
```

---

## Modal

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meuModal">
    Abrir
</button>

<div class="modal fade" id="meuModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Título</h5>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">Conteúdo</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </div>
</div>
```

---

## Alertas

```html
<div class="alert alert-success">Sucesso!</div>
<div class="alert alert-warning">Aviso!</div>
<div class="alert alert-danger">Erro!</div>
<div class="alert alert-info">Info!</div>
```

---

## Utilitários

```html
<!-- Espaçamento -->
<p class="mt-3">margin-top</p>
<p class="mb-3">margin-bottom</p>
<p class="p-4">padding</p>

<!-- Texto -->
<p class="text-center">centralizado</p>
<p class="text-end">direita</p>
<p class="fw-bold">negrito</p>

<!-- Cores -->
<p class="text-primary">azul</p>
<p class="text-success">verde</p>

<!-- Display -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-4">Display 4</h1>