# Transições - Motion UI

Transições CSS básicas.

---

## Fade

```html
<!-- Fade In -->
<div class="fade-in">Fade In</div>

<!-- Fade Out -->
<div class="fade-out">Fade Out</div>
```

---

## Slide

```html
<!-- Slide Down -->
<div class="slide-in-down">Slide Down</div>

<!-- Slide Up -->
<div class="slide-in-up">Slide Up</div>

<!-- Slide Right -->
<div class="slide-in-right">Slide Right</div>

<!-- Slide Left -->
<div class="slide-in-left">Slide Left</div>
```

---

## Zoom

```html
<!-- Zoom In -->
<div class="zoom-in">Zoom In</div>

<!-- Zoom Out -->
<div class="zoom-out">Zoom Out</div>
```

---

## Transition Classes

| Classe | Efeito |
|--------|--------|
| .fade-in | opacity: 0 → 1 |
| .fade-out | opacity: 1 → 0 |
| .slide-in-down | translateY(-100%) → 0 |
| .slide-in-up | translateY(100%) → 0 |
| .slide-in-right | translateX(100%) → 0 |
| .slide-in-left | translateX(-100%) → 0 |
| .zoom-in | scale(0) → 1 |
| .zoom-out | scale(1) → 0 |

---

## Usage

```html
<button data-toggle="elemento">Toggle</button>
<div id="elemento" class="animate slide-in-down">
    Conteúdo
</div>
```

```javascript
$(document).foundation();
```