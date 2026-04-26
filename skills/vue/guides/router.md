# Router - Vue.js

Vue Router para navegação.

---

## Setup Router

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/user/:id', component: User, name: 'User' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```

---

## Usar Router

```javascript
// main.js
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
```

---

## Router View

```html
<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
```

---

## Navigation

```html
<router-link to="/">Home</router-link>
<router-link :to="{ name: 'User', params: { id: 1 }}">User 1</router-link>
```

```javascript
// programmatic
router.push('/about')
router.replace('/user/1')
router.go(-1)
```

---

## Route Params

```javascript
export default {
  setup() {
    const route = useRoute()
    const id = route.params.id
    
    return { id }
  }
}
```

---

## Navigation Guards

```javascript
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next('/login')
  } else {
    next()
  }
})
```

---

## Lazy Loading

```javascript
const routes = [
  { path: '/admin', component: () => import('./views/Admin.vue') },
]
```

---

## Notes

- Vue Router 4 para Vue 3