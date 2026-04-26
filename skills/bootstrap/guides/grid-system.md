# Sistema de Grid Bootstrap

Guia sobre o sistema de grid do Bootstrap.

---

## 1. Conceito Grid

O Bootstrap usa sistema de 12 colunas.

---

## 2. Estrutura Basic

```html
<div class="container">
  <div class="row">
    <div class="col-12">1 coluna</div>
  </div>
</div>
```

---

## 3. Colunas

### 3.1 Igual

```html
<div class="row">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
```

### 3.2 Tamanhos Diferentes

```html
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
```

---

## 4. Breakpoints

| Breakpoint | Largura | Classe |
|-----------|---------|--------|
| xs | <576px | col- |
| sm | ≥576px | col-sm- |
| md | ≥768px | col-md- |
| lg | ≥992px | col-lg- |
| xl | ≥1200px | col-xl- |
| xxl | ≥1400px | col-xxl- |

---

## 5. Exemplo Responsivo

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    Conteúdo 1
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    Conteúdo 2
  </div>
  <div class="col-12 col-lg-4">
    Conteúdo 3
  </div>
</div>
```

---

## Cross-refs

- [intro-bootstrap.md](intro-bootstrap.md) - Introdução
- [responsivo.md](responsivo.md) - Responsivo