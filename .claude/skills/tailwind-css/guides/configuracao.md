# Configuração do Tailwind CSS

Guia sobre configuração e customização.

---

## 1. Arquivo de Configuração

### 1.1 Estrutura Básica

```javascript
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 2. Content

### 2.1 Definição de Arquivos

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
]
```

### 2.2 Padrões Common

| Padrão | Uso |
|--------|-----|
| "./src/**/*.{html,js}" | HTML e JS básico |
| "./src/**/*.{html,jsx,ts,tsx}" | React |
| "./src/**/*.{vue,js,ts,jsx}" | Vue |

---

## 3. Theme

### 3.1 Cores Customizadas

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',
      secondary: '#64748b',
      brand: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#1d4ed8',
      }
    }
  }
}
```

### 3.2 Fontes

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace'],
    }
  }
}
```

---

## 4. Spacing

```javascript
theme: {
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    }
  }
}
```

---

## 5. Breakpoints

```javascript
theme: {
  screens: {
    'tablet': '640px',
    'laptop': '1024px',
    'desktop': '1280px',
  }
}
```

---

## 6. Plugins

### 6.1 Install

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography
```

### 6.2 Configuração

```javascript
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]
```

---

## Cross-refs

- [intro-tailwind.md](intro-tailwind.md) - Introdução
- [cores.md](cores.md) - Cores
- [tipografia.md](tipografia.md) - Tipografia