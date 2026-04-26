# Melhores Práticas Bootstrap

Guia sobre boas práticas.

---

## 1. Estrutura

### 1.1 Container Sempre

```html
<div class="container">
  <!-- Conteúdo -->
</div>
```

---

## 2. Grid

### 2.1 Sempre Usar Row

```html
<div class="row">
  <div class="col">...</div>
</div>
```

### 2.2 Gutter

```html
<!-- Sem gutter -->
<div class="row g-0">

<!-- Com gutter -->
<div class="row g-3">
```

---

## 3. Componentes

### 3.1 Acessibilidade

```html
<!-- Bom -->
<button class="btn btn-primary" aria-label="Fechar">

<!-- Ruim -->
<button class="btn btn-primary">X</button>
```

---

## 4. Performance

### 4.1 CDN

Usar CDN para produção.

### 4.2 Otimizar Imagens

```html
<img src="..." class="img-fluid" alt="...">
```

---

## Cross-refs

- [componentes.md](componentes.md) - Componentes
- [responsivo.md](responsivo.md) - Responsivo