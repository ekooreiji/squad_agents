# Moléculas - Atomic Design

Combinação de átomos formando unidades funcionais.

---

## O que são Moléculas

Combinação simples de 2+ átomos:
- Search form
- Card
- Alert
- Badge

---

## Exemplos

### Search Form

```html
<form class="search-form" role="search">
    <input type="search" class="input" placeholder="Buscar...">
    <button type="submit" class="btn btn-primary">Buscar</button>
</form>
```

```css
.search-form {
    display: flex;
    gap: 0.5rem;
}
```

---

### Card

```html
<article class="card">
    <img src="img.jpg" class="card-img" alt="Imagem">
    <div class="card-body">
        <h3 class="card-title">Título</h3>
        <p class="card-text">Descrição</p>
        <a href="#" class="link">Leia mais</a>
    </div>
</article>
```

```css
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}
.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.card-body {
    padding: 1rem;
}
```

---

### Alert

```html
<div class="alert alert-success">
    <span class="alert-text">Sucesso!</span>
    <button class="btn-close">&times;</button>
</div>
```

```css
.alert {
    padding: 1rem;
    border-radius: 4px;
}
.alert-success {
    background: #d4edda;
    border: 1px solid #c3e6cb;
}
```

---

### Badge

```html
<span class="badge">
    <span class="badge-text">Novo</span>
</span>
```

---

## Notes

- Functional units
- Reutilizáveis