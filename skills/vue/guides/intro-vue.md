# Introdução ao Vue.js

Framework progressivo criado por Evan You.

---

## O que é Vue.js

Framework progressivo para UI:
- Reativo
- Componentes
- Two-way binding
- Vue 3 (2022)

---

## Instalação

### Via CDN

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

### Via CLI

```bash
npm init vue@latest
```

### Via Vite

```bash
npm create vue@latest
```

---

## Primeiro Exemplo

```html
<div id="app">
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse</button>
</div>

<script>
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Olá Vue!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}).mount('#app')
</script>
```

---

## Comparações

| Vue.js | React |
|-------|-------|
| Template-based | JSX |
| Two-way binding | onChange |
| Options + Composition | Composition only |

---

## Options API vs Composition API

```javascript
// Options API
export default {
  data() { return { count: 0 } },
  methods: { increment() { this.count++ } }
}

// Composition API
export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return { count, increment }
  }
}
```

---

## Notes

- Vue 3 é atual
- dois estilos disponíveis