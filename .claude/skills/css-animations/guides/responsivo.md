# Animações Responsivas

Animações que funcionam bem em dispositivos móveis.

---

## Considerações Mobile

- Preferred reduced motion
- Touch events
- Performance (60fps priority)

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## Touch Hover

```css
/* Mobile touch animation */
.button:active {
    transform: scale(0.95);
}
```

---

## Disable Animation

```css
@media (max-width: 768px) {
    .heavy-animation {
        animation: none;
        transition: none;
    }
}
```

---

## Lightweight Animations

```css
/* Usar transform */
.mobile-box {
    transition: transform 0.2s ease;
}

/* Evitar */
.mobile-box {
    transition: width 0.2s ease; /* Reflow - evitar */
}
```

---

## Prefers Reduced Motion

```css
/* Para quem desabilita animação */
@keyframes slideIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.box {
    animation: slideIn 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
    .box {
        animation: none;
        transition: none;
    }
}
```

---

## Touch Feedback

```css
/* Button press */
.btn:active {
    transform: scale(0.97);
}

/* Link press */
a:active {
    opacity: 0.7;
}
```

---

## Passive Listeners

Para scroll animations:

```javascript
element.addEventListener('touchmove', handler, { passive: true });
```

---

## Performance mobile

- Usar transform e opacity
- Evitar width, height, top, left
- will-change se necessário
- Usar requestAnimationFrame

---

## Notas

- Sempre testar em device real
- Prefers-reduced-motion é essencial
- Animações simples no mobile