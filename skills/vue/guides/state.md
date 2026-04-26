# State - Vue.js

Gerenciamento de estado com Pinia.

---

## O que é Pinia

State management moderno:
- API simples
- TypeScript support
- Modular

---

## Setup Pinia

```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    isEven: (state) => state.count % 2 === 0
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
```

---

## Store com Composition API

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)
  
  function login(userData) {
    user.value = userData
  }
  
  function logout() {
    user.value = null
  }
  
  return { user, isLoggedIn, login, logout }
})
```

---

## Usar Store

```javascript
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    
    return { counter }
  }
}
```

```html
<template>
  <p>Count: {{ counter.count }}</p>
  <button @click="counter.increment()">+</button>
  <button @click="counter.decrement()">-</button>
</template>
```

---

## Store com múltiplos módulos

```javascript
// stores/index.js
import { createPinia } from 'pinia'

export const pinia = createPinia()

// stores/user.js
import { useUserStore } from './user'
import { useCartStore } from './cart'

export { useUserStore, useCartStore }
```

---

## Notes

- Pinia > Vuex (atual)