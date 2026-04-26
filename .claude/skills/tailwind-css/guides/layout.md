# Layout em Tailwind CSS

Guia sobre Flexbox, Grid e sistema de layout.

---

## 1. Display

### 1.1 Classes

| Classe | Descrição |
|--------|-----------|
| block | display: block |
| inline-block | display: inline-block |
| flex | display: flex |
| inline-flex | display: inline-flex |
| grid | display: grid |
| hidden | display: none |

---

## 2. Flexbox

### 2.1 Direção

| Classe | Descrição |
|--------|-----------|
| flex-row | Linha (padrão) |
| flex-row-reverse | Linha invertida |
| flex-col | Coluna |
| flex-col-reverse | Coluna invertida |

### 2.2 Justify Content

```html
<div class="flex justify-start">Início</div>
<div class="flex justify-center">Centro</div>
<div class="flex justify-end">Fim</div>
<div class="flex justify-between">Entre</div>
<div class="flex justify-around">Ao redor</div>
```

### 2.3 Align Items

```html
<div class="flex items-start">Topo</div>
<div class="flex items-center">Centro</div>
<div class="flex items-end">Fim</div>
```

### 2.4 Gap

```html
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 3. Grid

### 3.1 Colunas

```html
<div class="grid grid-cols-1">1 coluna</div>
<div class="grid grid-cols-2">2 colunas</div>
<div class="grid grid-cols-3">3 colunas</div>
<div class="grid grid-cols-4">4 colunas</div>
```

### 3.2 Spanning

```html
<div class="grid grid-cols-3">
  <div class="col-span-2">Ocupa 2 colunas</div>
  <div>1 coluna</div>
</div>
```

---

## 4. Spacing

### 4.1 Padding

| Classe | Valor |
|--------|-------|
| p-0 | 0 |
| p-1 | 0.25rem |
| p-2 | 0.5rem |
| p-4 | 1rem |
| p-8 | 2rem |
| p-16 | 4rem |

### 4.2 Margin

| Classe | Valor |
|--------|-------|
| m-0 | 0 |
| m-1 | 0.25rem |
| m-auto | auto |
| mx-auto | auto horizontal |

---

## 5. Width e Height

### 5.1 Width

```html
<div class="w-full">100%</div>
<div class="w-1/2">50%</div>
<div class="w-auto">auto</div>
<div class="w-64">16rem</div>
```

### 5.2 Height

```html
<div class="h-full">100%</div>
<div class="h-screen">100vh</div>
<div class="h-64">16rem</div>
```

---

## Cross-refs

- [responsivo.md](responsivo.md) - Responsivo
- [componentes.md](componentes.md) - Componentes