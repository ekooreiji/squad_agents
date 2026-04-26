# Design Responsivo com Tailwind CSS

Guia sobre breakpoints e design responsivo.

---

## 1. Breakpoints Padrão

| Breakpoint | Largura | Classe |
|------------|---------|--------|
| sm | 640px | sm: |
| md | 768px | md: |
| lg | 1024px | lg: |
| xl | 1280px | xl: |
| 2xl | 1536px | 2xl: |

---

## 2. Mobile-First

### 2.1 Conceito

Tailwind é mobile-first. Classes sem breakpoint aplicam-se a todos os tamanhos.

```html
<!-- Mobile -->
<div class="flex flex-col">
  <!-- Desktop -->
  <div class="md:flex-row">
    Mudança em 768px+
  </div>
</div>
```

### 2.2 Exemplo

```html
<div class="text-base md:text-lg lg:text-xl">
  Texto que aumenta em diferentes breakpoints
</div>
```

---

## 3. Responsive Patterns

### 3.1 Stack to Side

```html
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Coluna 1</div>
  <div class="w-full md:w-1/2">Coluna 2</div>
</div>
```

### 3.2隐藏 to Show

```html
<div class="hidden md:block">
  Visível só em desktop
</div>
```

### 3.3 Grid Responsivo

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>
```

---

## 4. Breakpoints Customizados

### 4.1 Configuração

```javascript
theme: {
  screens: {
    'xs': '480px',
    '3xl': '1920px',
  }
}
```

### 4.2 Uso

```html
<div class="text-sm xs:text-base">
  Texto responsivo
</div>
```

---

## Cross-refs

- [layout.md](layout.md) - Layout
- [cores.md](cores.md) - Cores