# Componentes em Tailwind CSS

Guia sobre componentes principais.

---

## 1. Botões

### 1.1 Botão Primário

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
  Clique aqui
</button>
```

### 1.2 Estados

| Estado | Classe |
|--------|--------|
| Hover | hover:bg-blue-700 |
| Active | active:bg-blue-800 |
| Disabled | disabled:opacity-50 |
| Loading | opacity-75 cursor-wait |

---

## 2. Forms

### 2.1 Input

```html
<input 
  type="text" 
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Digite aqui"
/>
```

### 2.2 Label + Input

```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-medium text-gray-700">Nome</label>
  <input type="text" class="border rounded-md p-2" />
</div>
```

---

## 3. Cards

### 3.1 Card Simples

```html
<div class="bg-white rounded-xl shadow-md overflow-hidden">
  <img src="image.jpg" alt="" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-lg font-semibold">Título</h3>
    <p class="text-gray-600 mt-2">Descrição</p>
  </div>
</div>
```

### 3.2 Card com Actions

```html
<div class="bg-white rounded-lg shadow p-4 flex items-center justify-between">
  <div>
    <h4 class="font-medium">Título</h4>
    <p class="text-sm text-gray-500">Subtítulo</p>
  </div>
  <button class="text-blue-600 hover:text-blue-800">Ver mais</button>
</div>
```

---

## 4. Alerts

### 4.1 Success

```html
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
  Operação realizada com sucesso!
</div>
```

### 4.2 Error

```html
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
  Ocorreu um erro!
</div>
```

---

## 5. Navigation

### 5.1 Navbar

```html
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <span class="text-xl font-bold">Logo</span>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Sobre</a>
      </div>
    </div>
  </div>
</nav>
```

---

## Cross-refs

- [layout.md](layout.md) - Layout
- [cores.md](cores.md) - Cores