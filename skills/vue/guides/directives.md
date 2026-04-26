# Directives - Vue.js

Diretivas integradas.

---

## v-if / v-else / v-else-if

```html
<div v-if="isLogged">Olá usuário!</div>
<div v-else>Por favor, faça login</div>

<div v-if="role === 'admin'">Admin</div>
<div v-else-if="role === 'user'">User</div>
<div v-else>Guest</div>
```

---

## v-show

```html
<div v-show="isVisible">Visível ou não</div>
```

| v-if | v-show |
|------|-------|
| Remove do DOM | display: none |
| Lazy | Always rendered |

---

## v-for

```html
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>

<!-- Com índice -->
<li v-for="(item, index) in items" :key="index">
  {{ index }} - {{ item.name }}
</li>

<!-- Objeto -->
<li v-for="(value, key) in object" :key="key">
  {{ key }}: {{ value }}
</li>
```

---

## v-model

Two-way binding:

```html
<input v-model="text">
<textarea v-model="text"></textarea>
<select v-model="selected">
  <option>A</option>
  <option>B</option>
</select>
```

Modifiers:

```html
<input v-model.lazy="text"> <!-- lazy -->
<input v-model.number="num"> <!-- number -->
<input v-model.trim="text"> <!-- trim -->
```

---

## v-on (ou @)

Event handlers:

```html
<button v-on:click="handleClick">Clique</button>
<button @click="handleClick">Clique</button>
<input @input="handleInput">
<input @keyup.enter="submit">
```

---

## v-bind (ou :)

Dynamic attributes:

```html
<img :src="imageUrl">
<a :href="url">Link</a>
<button :disabled="isDisabled">Botão</button>
<button :class="{ active: isActive }">Botão</button>
```

---

## v-text / v-html

```html
<span v-text="message"></span>
<div v-html="htmlContent"></div>
```

---

## v-once

```html
<span v-once>{{ message }}</span>
```

---

## v-cloak

```html
<div v-cloak>{{ message }}</div>

[v-cloak] { display: none; }
```

---

## Custom Directives

```javascript
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
```

```html
<input v-focus>
```

---

## Notes

- Diretivas built-in