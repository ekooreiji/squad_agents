# Composition API - Vue.js

Nova API de composição do Vue 3.

---

## setup()

Ponto de entrada:

```javascript
import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const user = reactive({ name: 'João', age: 30 })
    
    const increment = () => count.value++
    
    return { count, user, increment }
  }
}
```

---

## ref()

Para valores primitivos:

```javascript
import { ref } from 'vue'

const count = ref(0)
count.value++ // modificar
console.log(count.value) // acessar
```

---

## reactive()

Para objetos:

```javascript
import { reactive } from 'vue'

const user = reactive({
  name: 'João',
  age: 30
})
user.name = 'Maria' // modificar diretamente
```

---

## computed()

Propriedades calculadas:

```javascript
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])
const total = computed(() => items.value.reduce((s, i) => s + i, 0))
```

---

## watch()

Observadores:

```javascript
import { ref, watch } from 'vue'

const count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log(`De ${oldVal} para ${newVal}`)
})
```

---

## watchEffect()

Observador automático:

```javascript
import { ref, watchEffect } from 'vue'

const count = ref(0)
watchEffect(() => {
  console.log('Count mudou:', count.value)
})
```

---

## onMounted() e outros hooks

```javascript
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    onMounted(() => {
      console.log('Componente montou!')
    })
    
    onUnmounted(() => {
      console.log('Componente desmontou!')
    })
    
    return { count }
  }
}
```

---

## Exemplo Completo: Todo App

```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const todos = ref([
      { id: 1, text: 'Aprender Vue', done: false }
    ])
    const newTodo = ref('')
    
    const addTodo = () => {
      todos.value.push({
        id: Date.now(),
        text: newTodo.value,
        done: false
      })
      newTodo.value = ''
    }
    
    const toggleTodo = (todo) => {
      todo.done = !todo.done
    }
    
    const remaining = computed(() => 
      todos.value.filter(t => !t.done).length
    )
    
    return { todos, newTodo, addTodo, toggleTodo, remaining }
  }
}
```

```html
<template>
  <input v-model="newTodo" @keyup.enter="addTodo">
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
  </ul>
  <p>{{ remaining }} pendentes</p>
</template>
```

---

## Notes

- Vue 3
- script setup (shorthand)