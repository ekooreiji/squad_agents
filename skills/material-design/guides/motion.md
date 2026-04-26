# Motion - Material Design

Animações Material.

---

## Princípios

- Movement = feedback
- Suave, contínuo
- Funcional

---

## Timing Curves

| Curve | Bezier |
|-------|--------|
| Fast | cubic-bezier(0.4, 0, 1, 1) |
| Normal | cubic-bezier(0.4, 0, 0.2, 1) |
| Slow | cubic-bezier(0.4, 0, 0.6, 1) |

---

## Duration

| Duration | Use |
|----------|------|
| < 200ms | Interactions |
| 200-300ms | Expanding |
| 300-400ms | Entering |
| 400-500ms | Exiting |

---

## Shared Axis

```css
/* Transition */
.md-transition {
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
                opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Elevation Transition

```css
.md-elevation--1 {
    transition: box-shadow 200ms ease;
}

.md-elevation--1:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

---

## Ripple Effect

```css
.md-ripple {
    position: relative;
    overflow: hidden;
}

.md-ripple:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%);
    transform: scale(0);
    transition: transform 0.5s;
}

.md-ripple:active:after {
    transform: scale(2);
    opacity: 0;
}
```

---

## Notes

- 200-500ms typical