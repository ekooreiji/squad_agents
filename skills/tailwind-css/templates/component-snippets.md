# Component Snippets

Snippets de componentes útiles em Tailwind CSS.

---

## 1. Botões

### Primary

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
  Primary Button
</button>
```

### Secondary

```html
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300">
  Secondary Button
</button>
```

### Outline

```html
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300">
  Outline Button
</button>
```

---

## 2. Inputs

### Text Input

```html
<input 
  type="text" 
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
  placeholder="Digite aqui..."
/>
```

### Textarea

```html
<textarea 
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
  rows="4"
  placeholder="Sua mensagem..."
></textarea>
```

---

## 3. Cards

### Card Básico

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold mb-2">Título</h3>
  <p class="text-gray-600">Descrição do card.</p>
</div>
```

### Card com Imagem

```html
<div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Card">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Título</h3>
    <p class="text-gray-600">Descrição</p>
  </div>
</div>
```

---

## 4. Alerts

### Success

```html
<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
  <p class="font-bold">Sucesso!</p>
  <p>Operação realizada com sucesso.</p>
</div>
```

### Error

```html
<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
  <p class="font-bold">Erro!</p>
  <p>Ocorreu um erro ao processar.</p>
</div>
```

---

## 5. Navigation

### Navbar

```html
<nav class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <span class="text-xl font-bold text-gray-800">Logo</span>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-blue-600 transition">Home</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition">Sobre</a>
        <a href="#" class="text-gray-600 hover:text-blue-600 transition">Contato</a>
      </div>
    </div>
  </div>
</nav>
```

---

## 6. Badges

```html
<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
  Badge
</span>
```

---

## 7. Footer

```html
<footer class="bg-gray-800 text-white py-8">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 class="text-lg font-semibold mb-4">Sobre</h4>
        <p class="text-gray-400">Descrição da empresa.</p>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-4">Links</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white">Link 1</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Link 2</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-lg font-semibold mb-4">Contato</h4>
        <p class="text-gray-400">email@exemplo.com</p>
      </div>
    </div>
  </div>
</footer>
```