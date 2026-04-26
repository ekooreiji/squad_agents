# Micro-Interactions

Guia para criar micro-interações em interfaces.

---

## 1. O que são Micro-Interactions

Micro-interactions são pequenas animações que fornecem feedback e Guidance ao usuário.

---

## 2. Quando Usar

| Situação | Exemplo |
|----------|----------|
| Button click | Scale, ripple |
| Hover | Color change, shadow |
| Loading | Spinner progress |
| Success | Check animation |
| Error | Shake animation |
| Navigation | Page transition |

---

## 3. CSS Animations

### 3.1 Fade In/Out

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 300ms ease-out;
}
```

### 3.2 Scale

```css
@keyframes scaleIn {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
```

### 3.3 Slide

```css
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

### 3.4 Shake

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
```

---

## 4. Popular Animations

### 4.1 Button Hover

```css
.btn {
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### 4.2 Loading Spinner

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### 4.3 Heart/Like Animation

```css
@keyframes like {
  0% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
```

---

## Cross-refs

- [principles-easing.md](principles-easing.md) - Timing
- [tools-workflow.md](tools-workflow.md) - Ferramentas