# Animações - Motion UI

Animações completas (keyframe).

---

## Hinge

```html
<div class="hinge-in-from-top">Hinge Top</div>
<div class="hinge-in-from-bottom">Hinge Bottom</div>
<div class="hinge-in-from-left">Hinge Left</div>
<div class="hinge-in-from-right">Hinge Right</div>
```

---

## Shake

```html
<div class="shake">Shake</div>
```

---

## Swing

```html
<div class="swing-in-from-top">Swing Top</div>
<div class="swing-in-from-bottom">Swing Bottom</div>
```

---

## Spin

```html
<div class="spin-in">Spin In</div>
<div class="spin-out">Spin Out</div>
```

---

## Bounce

```html
<div class="bounce-in">Bounce In</div>
<div class="bounce-out">Bounce Out</div>
</div>
```

---

## Fade

```html
<div class="fade-in-scale">Fade + Scale</div>
</div>
```

---

## Animation Classes

| Classe | Efeito |
|--------|--------|
| .hinge-in-from-top | rotateX(-90deg) → 0 |
| .hinge-in-from-bottom | rotateX(90deg) → 0 |
| .hinge-in-from-left | rotateY(-90deg) → 0 |
| .hinge-in-from-right | rotateY(90deg) → 0 |
| .shake | translateX shake |
| .swing-in-from-top | rotate from - |
| .swing-in-from-bottom | rotate from + |
| .spin-in | rotate 360deg in |
| .spin-out | rotate 360deg out |
| .bounce-in | bounce effect |
| .bounce-out | bounce reverse |
| .fade-in-scale | opacity + scale |

---

## Usage

```html
<div class="animate hinge-in-from-top">
    Animated
</div>
```