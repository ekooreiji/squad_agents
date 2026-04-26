# Cores em Tailwind CSS

Guia sobre sistema de cores.

---

## 1. Cores Padrão

### 1.1 Paleta de Cores

| Cor | shadowns | Uso |
|-----|----------|-----|
| gray | gray-50 até gray-900 | Neutro |
| red | red-50 até red-900 | Erro |
| yellow | yellow-50 até yellow-900 | Alerta |
| green | green-50 até green-900 | Sucesso |
| blue | blue-50 até blue-900 | Info |
| indigo | indigo-50 até indigo-900 | Primário |
| purple | purple-50 até purple-900 | Destaque |
| pink | pink-50 até pink-900 | Feminino |

---

## 2. Aplicação

### 2.1 Background

```html
<div class="bg-blue-500">Fundo azul</div>
<div class="bg-gray-100">Fundo cinza claro</div>
```

### 2.2 Texto

```html
<p class="text-gray-900">Texto muito escuro</p>
<p class="text-gray-500">Texto médio</p>
<p class="text-gray-300">Texto claro</p>
```

### 2.3 Border

```html
<div class="border border-gray-300">Borda cinza</div>
<div class="border-2 border-blue-500">Borda azul grossa</div>
```

---

## 3. Opacidade

### 3.1 text

```html
<p class="text-black opacity-100">100%</p>
<p class="text-black opacity-75">75%</p>
<p class="text-black opacity-50">50%</p>
<p class="text-black opacity-25">25%</p>
```

### 3.2 bg

```html
<div class="bg-blue-500/100">100%</div>
<div class="bg-blue-500/75">75%</div>
<div class="bg-blue-500/50">50%</div>
```

---

## 4. Cores Customizadas

### 4.1 Configuração

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#3b82f6',
        light: '#60a5fa',
        dark: '#1d4ed8',
      }
    }
  }
}
```

### 4.2 Uso

```html
<div class="bg-brand">Brand padrão</div>
<div class="bg-brand-light">Brand claro</div>
<div class="bg-brand-dark">Brand escuro</div>
```

---

## Cross-refs

- [tipografia.md](tipografia.md) - Tipografia
- [configuracao.md](configuracao.md) - Configuração