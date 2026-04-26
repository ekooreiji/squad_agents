# Touch Interactions

Guia de interações touch para dispositivos móveis.

---

## 1. Touch Events

### 1.1 Basic Touch Events

| Event | Description |
|-------|-------------|
| **touchstart** | Finger touches screen |
| **touchmove** | Finger moves |
| **touchend** | Finger leaves screen |
| **touchcancel** | Touch interrupted |

### 1.2 Click Delay

```css
/* Remove 300ms click delay */
touch-action: manipulation;
```

---

## 2. Gestures

### 2.1 Tap

```css
button {
  min-height: 44px; /* iOS minimum */
  min-width: 44px;
}
```

### 2.2 Swipe

```css
.swipeable {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.swipe-item {
  scroll-snap-align: start;
}
```

### 2.3 Pull to Refresh

```css
.pull-to-refresh {
  overflow-y: auto;
  overscroll-behavior-y: contain;
}
```

---

## 3. Touch-Friendly Design

### 3.1 Sizes

| Element | Minimum Size |
|---------|---------------|
| Touch targets | 44x44px |
| Buttons | 48x48px preferred |
| Links | 44x44px |

### 3.2 Spacing

```css
/* Touch-friendly spacing */
.button-group button {
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
}
```

---

## 4. Gestures to Implement

### 4.1 Pan/Scroll

- Vertical scroll
- Horizontal scroll

### 4.2 Pinch

- Pinch to zoom
- Two-finger scroll

### 4.3 Long Press

- Context menu

---

## Cross-refs

- [responsive-components.md](responsive-components.md) - Componentes
- [device-testing.md](device-testing.md) - Testes