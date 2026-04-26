# Device Testing

Guia para testar design responsivo em diferentes dispositivos.

---

## 1. Por que Testar

Testar em dispositivos reais é essencial porque emuladores não capturam todos os issues.

---

## 2. Device Categories

### 2.1 Smartphones

| Categoria | Dispositivos | Tamanhos |
|-----------|---------------|----------|
| Small | iPhone SE, Pixel | 320-375px |
| Medium | iPhone 12/13 | 390-414px |
| Large | iPhone 12/13 Pro Max | 428px+ |

### 2.2 Tablets

| Categoria | Dispositivos | Tamanhos |
|-----------|---------------|----------|
| Small | iPad Mini | 768px |
| Regular | iPad Air, Pro | 820-1024px |
| Large | iPad Pro 12.9 | 1024px+ |

### 2.3 Laptops

| Categoria | Tamanhos |
|-----------|----------|
| Small | 1280px |
| Regular | 1366-1440px |
| Large | 1920px+ |

---

## 3. Testing Tools

### 3.1 Browser DevTools

```javascript
// Chrome DevTools
F12 → Toggle Device Toolbar
// Cmd+Shift+M (Mac)
// Ctrl+Shift+M (Windows)
```

### 3.2 Online Tools

| Tool | URL |
|------|-----|
| BrowserStack | browserstack.com |
| Sauce Labs | saucelabs.com |
| LambdaTest | lambdatest.com |

---

## 4. Checklist de Testes

### 4.1 Por Breakpoint

| Breakpoint | Largura | Testar |
|-----------|--------|--------|
| xs | < 576px | Small phones |
| sm | 576-767px | Large phones |
| md | 768-991px | Tablets portrait |
| lg | 992-1199px | Tablets landscape |
| xl | 1200px+ | Desktops |

### 4.2 Por Orientação

| Orientação | Testar |
|------------|--------|
| Portrait | Mobile |
| Landscape | Tablet/Mobile |
| Both | Desktop |

---

## 5. Common Issues

### 5.1 Problemas Communs

| Issue | Causa | Solução |
|-------|-------|--------|
| Text too small | Fonte fixed px | Use rem/vw |
| Images blurry | Fixed sizes | Use responsive images |
| Touch targets | Too small | min 44px |
| Layout breaks | Fixed widths | Use % or fr |

---

## Cross-refs

- [touch-interactions.md](touch-interactions.md) - Interações
- [responsive-patterns.md](responsive-patterns.md) - Padrões