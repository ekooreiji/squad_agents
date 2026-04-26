# Timing Functions

Controle de velocidade e easing.

---

## Timing Functions

```css
.timing {
    transition: transform 0.3s timing-function;
}
```

---

## Predefined

```css
.linear {
    transition-timing-function: linear;
}
.ease {
    transition-timing-function: ease;
}
.ease-in {
    transition-timing-function: ease-in;
}
.ease-out {
    transition-timing-function: ease-out;
}
.ease-in-out {
    transition-timing-function: ease-in-out;
}
```

---

## Bezier Curve

```css
/* Custom easing */
.custom {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Ease out custom */
.ease-out-custom {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

/* Bounce effect */
.bounce {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

---

## Common Bezier

```css
/* Ease In Out Quad */
.ease-in-out-quad {
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

/* Ease In Out Cubic */
.ease-in-out-cubic {
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Ease Out Cubic */
.ease-out-cubic {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

/* Ease In Cubic */
.ease-in-cubic {
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
```

---

## Steps

```css
/* Jump animation */
.steps {
    transition-timing-function: steps(5, end);
}
.steps-start {
    transition-timing-function: steps(5, start);
}
```

---

## Visual Reference

| Easing | Curve |
|--------|-------|
| linear | Straight line |
| ease | Slight curve |
| ease-in | Slow start |
| ease-out | Slow end |
| ease-in-out | Slow start/end |

---

## Animation Timing

```css
.animation-timing {
    animation-timing-function: ease-in-out;
}
```

---

## Tools

- cubic-bezier.com - Visual editor
- easings.net - Common eases

---

## Notes

- ease-in-out é mais natural
- cubic-bezier oferece controle total
- steps para jump animations