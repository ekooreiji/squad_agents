# Componentes Bootstrap

Guia sobre componentes principais do Bootstrap.

---

## 1. Buttons

### Primary

```html
<button class="btn btn-primary">Primary</button>
```

### Estados

| Classe | Descrição |
|--------|-----------|
| btn-primary | Azul principal |
| btn-secondary | Cinza |
| btn-success | Verde |
| btn-danger | Vermelho |
| btn-warning | Amarelo |
| btn-info | Ciano |
| btn-light | Claro |
| btn-dark | Escuro |

---

## 2. Cards

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Texto.</p>
    <a href="#" class="btn btn-primary">Botão</a>
  </div>
</div>
```

---

## 3. Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

## 4. Modals

```html
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Conteúdo
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</div>
```

---

## 5. Alerts

```html
<div class="alert alert-success" role="alert">
  Operação realizada com sucesso!
</div>
```

---

## Cross-refs

- [formularios.md](formularios.md) - Forms
- [tipografia.md](tipografia.md) - Tipografia