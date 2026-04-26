# Transformações CSS (Transforms)

Transformações 2D e 3D com transform.

---

## Propriedade Transform

```css
.element {
    transform: function();
}
```

---

## Translate (Mover)

### 2D

```css
.move-right {
    transform: translateX(50px);
}
.move-down {
    transform: translateY(50px);
}
.move {
    transform: translate(50px, 50px);
}
```

### 3D

```css
.move-z {
    transform: translateZ(50px);
}
.move-3d {
    transform: translate3d(50px, 50px, 50px);
}
```

---

## Scale (Escala)

```css
.scale-2x {
    transform: scale(2);
}
.scale-x {
    transform: scaleX(2);
}
.scale-y {
    transform: scaleY(2);
}
.scale-negative {
    transform: scale(-1);
}
```

---

## Rotate (Rotação)

```css
.rotate-90 {
    transform: rotate(90deg);
}
.rotate-180 {
    transform: rotate(180deg);
}
.rotate-x {
    transform: rotateX(180deg);
}
.rotate-y {
    transform: rotateY(180deg);
}
.rotate-3d {
    transform: rotate3d(1, 1, 1, 180deg);
}
```

---

## Skew (Inclinar)

```css
.skew-x {
    transform: skewX(20deg);
}
.skew-y {
    transform: skewY(20deg);
}
.skew {
    transform: skew(20deg, 10deg);
}
```

---

## Multiple Transforms

```css
.combined {
    transform: translateX(50px) rotate(45deg) scale(1.5);
}
```

---

## Transform Origin

```css
.rotate-center {
    transform-origin: center;
}
.rotate-top {
    transform-origin: top;
}
.rotate-corner {
    transform-origin: top right;
}
.rotate-pixel {
    transform-origin: 100px 100px;
}
```

---

## Perspective

```css
.parent {
    perspective: 1000px;
}
.child {
    transform: rotateX(45deg);
}
```

---

## Transform Style

```css
.flat {
    transform-style: flat;
}
.preserve-3d {
    transform-style: preserve-3d;
}
```

---

## Backface Visibility

```css
.visible {
    backface-visibility: visible;
}
.hidden {
    backface-visibility: hidden;
}
```

---

## Notas

- Use translate/scale/rotate (não causa reflow)
- transform-origin por padrão é center
- translate3d ativa hardware acceleration