# Grid System - Materialize

Sistema de grid 12 colunas.

---

## Container

```html
<div class="container">
    Conteúdo
</div>
```

---

## Row

```html
<div class="row">
    <div class="col s1">1</div>
    <div class="col s2">2</div>
    <div class="col s3">3</div>
    <div class="col s4">4</div>
    <div class="col s5">5</div>
    <div class="col s6">6</div>
    <div class="col s7">7</div>
    <div class="col s8">8</div>
    <div class="col s9">9</div>
    <div class="col s10">10</div>
    <div class="col s11">11</div>
    <div class="col s12">12</div>
</div>
```

---

## Responsive

```html
<div class="row">
    <div class="col s12 m6 l4">Mobile: full, Tablet: 1/2, Desktop: 1/3</div>
</div>
```

---

## Offset

```html
<div class="row">
    <div class="col s6 offset-s6">Offset</div>
</div>
```

---

## Push/Pull

```html
<div class="row">
    <div class="col s7 push-s5">Push</div>
    <div class="col s5 pull-s7">Pull</div>
</div>
```

---

## Breakpoints

| Breakpoint | Classe |
|-----------|--------|
| mobile | s1-s12 |
| tablet | m1-m12 |
| desktop | l1-l12 |
| large | xl1-xl12 |

---

## Notes

- 12 colunas
- Mobile-first