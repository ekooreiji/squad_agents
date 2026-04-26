# Animations

Guia de animações CSS para designers.

---

## 1. @keyframes

### 1.1 Sintaxe Básica

```css
@keyframes nome-da-animacao {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
```

### 1.2 Exemplo Completo

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.elemento {
    animation: fadeIn 0.5s ease-out forwards;
}
```

---

## 2. Propriedades de Animation

### 2.1 animation-name

```css
.animation {
    animation-name: slideIn;
}
```

### 2.2 animation-duration

```css
.animation {
    animation-duration: 0.5s;
}
```

### 2.3 animation-timing-function

```css
.linear {
    animation-timing-function: linear;
}

.ease {
    animation-timing-function: ease;
}

.ease-in {
    animation-timing-function: ease-in;
}

.ease-out {
    animation-timing-function: ease-out;
}

.ease-in-out {
    animation-timing-function: ease-in-out;
}

.cubic-bezier {
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

### 2.4 animation-delay

```css
.delay {
    animation-delay: 0.5s;
}
```

### 2.5 animation-iteration-count

```css
.once {
    animation-iteration-count: 1;
}

.infinite {
    animation-iteration-count: infinite;
}
```

### 2.6 animation-direction

```css
.normal {
    animation-direction: normal;
}

.reverse {
    animation-direction: reverse;
}

.alternate {
    animation-direction: alternate;
}

.alternate-reverse {
    animation-direction: alternate-reverse;
}
```

### 2.7 animation-fill-mode

```css
.none {
    animation-fill-mode: none;
}

.forwards {
    animation-fill-mode: forwards;
}

.backwards {
    animation-fill-mode: backwards;
}

.both {
    animation-fill-mode: both;
}
```

---

## 3. Shorthand

```css
.elemento {
    animation: fadeIn 0.5s ease-in-out 0.2s infinite alternate forwards;
}
```

Ordem: `name duration timing-function delay iteration-count direction fill-mode`

---

## 4. Exemplos Práticos

### 4.1 Pulse

```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}
```

### 4.2 Spin

```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spin {
    animation: spin 1s linear infinite;
}
```

### 4.3 Shake

```css
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    75% {
        transform: translateX(10px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}
```

### 4.4 Slide In

```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}
```

---

## 5. Controlando Animations

### 5.1 Pausar

```css
.paused {
    animation-play-state: paused;
}
```

### 5.2 Rodar

```css
.running {
    animation-play-state: running;
}
```

---

## 6. Performance

### 6.1 Use transform e opacity

```css
/* BOM - Usa GPU */
@keyframes bom {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

/* RUIM - Causa reflow */
@keyframes ruim {
    from {
        left: 0;
    }
    to {
        left: 100px;
    }
}
```

### 6.2 will-change

```css
.optimizar {
    will-change: transform, opacity;
}
```

---

## Cross-refs

- [transitions.md](transitions.md) - Transições CSS
- [motion-design](../motion-design/SKILL.md) - Motion design
- [responsive-css.md](responsive-css.md) - Animações responsivas