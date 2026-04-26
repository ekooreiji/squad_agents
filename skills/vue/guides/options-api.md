# Options API - Vue.js

API de opções do Vue.

---

## data()

Estado do componente:

```javascript
export default {
  data() {
    return {
      message: 'Olá!',
      items: ['Item 1', 'Item 2'],
      user: { name: 'João', age: 30 }
    }
  }
}
```

---

## methods()

Métodos:

```javascript
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    },
    greet() {
      alert('Olá!')
    }
  }
}
```

---

## computed()

Propriedades calculadas:

```javascript
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    total() {
      return this.items.reduce((sum, item) => sum + item, 0)
    },
    positiveItems() {
      return this.items.filter(item => item > 0)
    }
  }
}
```

---

## watch()

Observadores:

```javascript
export default {
  data() {
    return { count: 0 }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(`De ${oldVal} para ${newVal}`)
    }
  }
}
```

---

## filters()

Filtros (deprecated em Vue 3, usar método):

```javascript
export default {
  methods: {
    uppercase(text) {
      return text.toUpperCase()
    }
  }
}
```

---

##生命周期

| Hook | Use |
|------|-----|
| created | Setup completo |
| mounted | DOM disponível |
| updated | Dados alterados |
| unmounted | Cleanup |

---

## Exemplo Completo: Contador

```javascript
export default {
  data() {
    return { count: 0 }
  },
  computed: {
    isEven() {
      return this.count % 2 === 0
    }
  },
  methods: {
    increment() { this.count++ },
    decrement() { this.count-- },
    reset() { this.count = 0 }
  }
}
```

---

## Notes

- Options API: tradicional
- Vue 3 suporta ambos