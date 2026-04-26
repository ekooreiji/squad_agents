# Introdução ao Tailwind CSS

Guia introdutório sobre Tailwind CSS.

---

## 1. O que é Tailwind CSS

Tailwind CSS é um framework de CSS utility-first para criar interfaces modernas e responsivas.

---

## 2. Instalação

### 2.1 Via npm

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2.2 Via CDN (para desenvolvimento)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## 3. Configuração Básica

### 3.1 tailwind.config.js

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3.2 Directives CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. Conceitos Fundamentais

### 4.1 Utility Classes

```
Classe              → Propriedade CSS
-----------------------------------
p-4                → padding: 1rem;
text-center        → text-align: center;
bg-blue-500        → background-color: #3b82f6;
flex               → display: flex;
```

### 4.2 Mobile-First

```html
<!-- Mobile first -->
<div class="text-base md:text-lg lg:text-xl">
  Conteúdo responsivo
</div>
```

---

## 5. Exemplos Básicos

### 5.1 Container

```html
<div class="max-w-7xl mx-auto px-4">
  Conteúdo centralizado
</div>
```

### 5.2 Card Simples

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold">Título</h2>
  <p class="text-gray-600">Descrição</p>
</div>
```

---

## 6. Benefícios

| Benefício | Descrição |
|----------|-----------|
| Velocidade | Desenvolvimento rápido |
| Flexibilidade | Customize completo |
| Performance | CSS mínimo |
| Consistência | Design system |

---

## Cross-refs

- [configuracao.md](configuracao.md) - Configuração
- [componentes.md](componentes.md) - Componentes