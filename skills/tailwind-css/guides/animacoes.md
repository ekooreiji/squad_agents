# Animações em Tailwind CSS

Guia sobre transições e animações.

---

## 1. Transitions

### 1.1 Propriedades

```html
<button class="transition-all">Todas as props</button>
<button class="transition-colors">Apenas cores</button>
<button class="transition-transform">Apenas transform</button>
```

### 1.2 Duração

| Classe | Duração |
|--------|---------|
| duration-75 | 75ms |
| duration-100 | 100ms |
| duration-200 | 200ms |
| duration-300 | 300ms |
| duration-500 | 500ms |

### 1.3 Timing

```html
<div class="ease-linear">Linear</div>
<div class="ease-in">Ease in</div>
<div class="ease-out">Ease out</div>
<div class="ease-in-out">Ease in out</div>
```

---

## 2. Hover

### 2.1 Escala

```html
<button class="hover:scale-110">Escala</button>
```

### 2.2 Opacidade

```html
<div class="hover:opacity-75">Opacity no hover</div>
```

### 2.3 Cores

```html
<button class="hover:bg-blue-700">Cor no hover</button>
```

---

## 3. Transform

### 3.1 Translate

```html
<div class="translate-x-4">Move right</div>
<div class="hover:-translate-y-1">Move up on hover</div>
```

### 3.2 Rotate

```html
<button class="hover:rotate-45">Rotate on hover</button>
```

---

## 4. Keyframe Animations

### 4.1 Animações Include

```html
<div class="animate-spin">Spin</div>
<div class="animate-pulse">Pulse</div>
<div class="animate-bounce">Bounce</div>
```

### 4.2 Custom Animation

```javascript
// tailwind.config.js
theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  }
}
```

---

## 5. Exemplos Práticos

### 5.1 Button com Hover

```html
<button class="
  bg-blue-600 
  hover:bg-blue-700 
  text-white 
  font-semibold 
  py-2 
  px-4 
  rounded 
  transition 
  duration-300
  hover:scale-105
">
  Botão Animado
</button>
```

### 5.2 Card Hover

```html
<div class="
  bg-white 
  rounded-lg 
  shadow-md 
  transition 
  duration-300 
  hover:shadow-lg 
  hover:-translate-y-1
">
  Card Content
</div>
```

---

## Cross-refs

- [componentes.md](componentes.md) - Componentes
- [melhores-praticas.md](melhores-praticas.md) - Boas práticas