# Sistema de Grid - Foundation CSS

XY Grid: sistema de grid flexível e semântico.

---

## XY Grid

O XY Grid é o sistema de grid principal do Foundation:

```html
<div class="grid-container">
    <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-6 large-4">
            Coluna 1
        </div>
        <div class="cell small-12 medium-6 large-4">
            Coluna 2
        </div>
        <div class="cell small-12 medium-6 large-4">
            Coluna 3
        </div>
    </div>
</div>
```

---

## Breakpoints

| Breakpoint | Largura |
|------------|---------|
| small | 0 - 639px |
| medium | 640px - 1023px |
| large | 1024px - 1279px |
| xlarge | 1280px - 1919px |
| xxlarge | 1920px+ |

---

## Auto Layout

```html
<!-- Fill remaining space -->
<div class="grid-x">
    <div class="cell small-4">Auto</div>
    <div class="cell auto">Ocupar resto</div>
</div>
```

---

## Grid Padding

```html
<div class="grid-padding-x">
    <!-- Padding sides: 1rem -->
</div>

<div class="grid-padding-y">
    <!-- Padding vertical -->
</div>
```

---

## Nested Grid

```html
<div class="grid-x">
    <div class="cell">
        <div class="grid-x grid-padding-x">
            <div class="cell small-6">Aninhado</div>
            <div class="cell small-6">Aninhado</div>
        </div>
    </div>
</div>
```

---

## Gutters

```html
<!-- Default gutter -->
<div class="grid-x grid-margin-x">
    <div class="cell">Gutter</div>
</div>

<!-- Collapse (no gutter) -->
<div class="grid-x grid-margin-x">
    <div class="cell collapse">Sem gutter</div>
</div>

<!-- Shallow gutter -->
<div class="grid-x grid-margin-x">
    <div class="cell shaleow">Gutter pequeno</div>
</div>
```

---

## Classes Úteis

| Classe | Descrição |
|--------|------------|
| .grid-container | Container principal |
| .grid-x | Row horizontal |
| .grid-y | Row vertical |
| .cell | Coluna |
| .small-12 | Mobile |
| .medium-6 | Tablet |
| .large-4 | Desktop |