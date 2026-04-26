# Design Responsivo - Foundation CSS

Responsive utilities e Interchange.

---

## Breakpoints

Foundation usa 5 breakpoints:

```scss
$breakpoints: (
    small: 0,
    medium: 640px,
    large: 1024px,
    xlarge: 1280px,
    xxlarge: 1920px
);
```

---

## Show/Hide

```html
<!-- Mostrar apenas em small -->
<p class="show-for-small">Apenas mobile</p>

<!-- Mostrar para small only -->
<p class="show-for-small-only">Só mobile</p>

<!-- Mostrar para medium up -->
<p class="show-for-medium">Tablet+</p>

<!-- Esconder em small -->
<p class="hide-for-small-only">Esconde mobile</p>
```

---

## Orientation

```html
<!-- Landscape -->
<p class="show-for-landscape">Landscape</p>

<!-- Portrait -->
<p class="show-for-portrait">Portrait</p>
```

---

## Interchange

Imagens responsivas automáticas:

```html
<img data-responsive-interchange="[
    imgs/small.jpg, (small),
    imgs/medium.jpg, (medium),
    imgs/large.jpg, (large)
]">
```

---

## Visibility

```html
.visible:not(.is-active) { /* Visible */ }
.hidden { display: none; }
```

---

## Orbit (Slider)

```html
<div class="orbit" role="region" aria-label="Slider" data-orbit>
    <ul class="orbit-wrapper">
        <li class="is-active orbit-slide">
            <img class="orbit-image" src="slide1.jpg" alt="Slide 1">
        </li>
    </ul>
    <button class="orbit-previous"><span class="show-for-sr">Anterior</span> &#9664;</button>
    <button class="orbit-next"><span class="show-for-sr">Próximo</span> &#9654;</button>
</div>
```

---

## Equalizer

Colunas com mesma altura:

```html
<div class="grid-x grid-margin-x" data-equalizer="meu-equalizer">
    <div class="cell small-4" data-equalizer-watch>
        Conteúdo 1
    </div>
    <div class="cell small-4" data-equalizer-watch>
        Conteúdo 2
    </div>
</div>
```

---

## Sticky (Magellan)

Menu fixo ao rolar:

```html
<div class="sticky" data-sticky data-anchor="menu-area">
    <nav data-magellan id="menu-area">
        <ul>
            <li><a href="#secao1">Seção 1</a></li>
        </ul>
    </nav>
</div>
```

---

## Smooth Scroll

```scss
$html-scroll-behavior: smooth;
```

---

## Responsive Embed

```html
<div class="responsive-embed">
    <iframe src="video.html"></iframe>
</div>
```