# Components - Vue.js

Componentes reutilizáveis.

---

## Criar Componente

```vue
<!-- MyButton.vue -->
<template>
  <button class="my-button" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: 'Clique' }
  },
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.my-button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
```

---

## Props (Entrada)

```javascript
export default {
  props: {
    title: String,
    count: { type: Number, default: 0 },
    items: { type: Array, required: true }
  }
}
```

```html
<MyComponent title="Olá" :count="5" :items="[1,2,3]" />
```

---

## Events (Saída)

```javascript
export default {
  emits: ['update', 'delete'],
  methods: {
    notify() {
      this.$emit('update', { id: 1 })
      this.$emit('delete', 1)
    }
  }
}
```

```html
<MyComponent @update="handleUpdate" @delete="handleDelete" />
```

---

## Slots

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

```html
<Card>
  <template #header><h3>Título</h3></template>
  Conteúdo principal
  <template #footer><button>OK</button></template>
</Card>
```

---

## v-model

```vue
<!-- TextInput.vue -->
<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
```

```html
<TextInput v-model="texto" />
```

---

## Exemplo: Card Component

```vue
<!-- ArticleCard.vue -->
<template>
  <article class="article-card">
    <img v-if="image" :src="image" :alt="title" class="card-image">
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <slot name="actions"></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  padding: 1rem;
}
</style>
```

---

## Notes

- props = entrada
- $emit = saída