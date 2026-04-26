# Melhores Práticas com Tailwind CSS

Guia sobre boas práticas e patterns.

---

## 1. Organização

### 1.1 Arquivo CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Componentes customizados */
@layer components {
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-lg;
  }
}
```

### 1.2 HTML Organizado

```html
<!-- Header -->
<header class="bg-white shadow-sm">
  <nav class="flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="logo.png" alt="Logo" class="h-8">
    </div>
    
    <!-- Navigation -->
    <div class="hidden md:flex space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Sobre</a>
    </div>
  </nav>
</header>
```

---

## 2. Reutilização

### 2.1 Componentes

```html
<!-- Button Component -->
<button class="btn-primary">
  <slot />
</button>

<!-- Card Component -->
<div class="card">
  <slot />
</div>
```

### 2.2 Extracting Components

```javascript
// Em React
function Button({ children, variant = 'primary' }) {
  return (
    <button class={`btn-${variant}`}>
      {children}
    </button>
  )
}
```

---

## 3. Performance

### 3.1 Purge

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
}
```

### 3.2 Classes Dinâmicas

```javascript
// Bom
<div className={`btn ${isActive ? 'bg-blue-600' : 'bg-gray-200'}`>

// Ruim - pode não funcionar
<div className={`btn bg-${color}-500`}>
```

---

## 4. Patterns Comuns

### 4.1 Centro Content

```html
<div class="flex items-center justify-center min-h-screen">
  Conteúdo centralizado
</div>
```

### 4.2 Sidebar Layout

```html
<div class="flex min-h-screen">
  <aside class="w-64 bg-gray-100">Sidebar</aside>
  <main class="flex-1 p-8">Content</main>
</div>
```

### 4.3 Responsivo Grid

```html
<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <li>Item</li>
</ul>
```

---

## 5. Anti-Patterns

### 5.1 Evitar

| Anti-Pattern | Problema |
|-------------|----------|
| Classes inline muito longas | Difícil manter |
| Hardcoding cores | Manutenção difícil |
| Repetir mesma estrutura | DRY violated |

### 5.2 Preferir

- Extract components
- Use @apply for repetidas
- Configurar theme

---

## Cross-refs

- [configuracao.md](configuracao.md) - Configuração
- [componentes.md](componentes.md) - Componentes