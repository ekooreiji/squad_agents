# Toggler - Motion UI

Toggle classes para mostrar/esconder elementos.

---

## Toggle Basic

```html
<button class="button" data-toggle="meuElemento">Toggle</button>
<div id="meuElemento" hidden>
    Conteúdo toggleado
</div>
```

---

## Classes

```html
<!-- Toggle visibility -->
<div class="reveal">Visible</div>
<div class="hidden">Hidden</div>
<div class="hide">Display none</div>
<div class="invisible">Opacity 0</div>
```

---

## Toggle with Animation

```html
<button class="button" data-toggle="animatedElement">Toggle Animado</button>
<div id="animatedElement" class="fade-in">
    Fade in/out
</div>
```

---

## Toggle Multiple

```html
<!-- Multiple targets -->
<button data-toggle="el1 el2 el3">Toggle All</button>
<button data-toggle="el1">Toggle 1</button>

<div id="el1">Elemento 1</div>
<div id="el2">Elemento 2</div>
<div id="el3">Elemento 3</div>
```

---

## Toggler Options

```javascript
$(document).foundation({
    toggler: {
        enableScrollTracking: false
    }
});
```

---

## Classes de Toggle

| Classe | Descrição |
|--------|------------|
| .reveal | display: block |
| .hidden | visibility: hidden |
| .hide | display: none |
| .invisible | opacity: 0 |

---

## Usage

```html
<button data-toggle="elemento">Show/Hide</button>
<div id="elemento" class="reveal hidden" hidden>
    Conteúdo
</div>
```