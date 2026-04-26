# Component Snippets - Foundation CSS

Snippets de componentes comuns.

---

## Button

```html
<button class="button">Button</button>
<button class="button primary">Primary</button>
<button class="button small">Small</button>
<button class="button expanded">Expanded</button>
```

---

## Card

```html
<div class="card">
    <div class="card-section">
        <h5>Título</h5>
        <p>Conteúdo</p>
    </div>
</div>
```

---

## Form

```html
<form data-abide>
    <label>
        Nome
        <input type="text" required>
        <span class="form-error">Obrigatório</span>
    </label>
    <button class="button" type="submit">Enviar</button>
</form>
```

---

## Navbar (Top Bar)

```html
<nav class="top-bar">
    <div class="top-bar-left">
        <ul class="dropdown menu">
            <li class="menu-text">Logo</li>
            <li><a href="#">Link</a></li>
        </ul>
    </div>
</nav>
```

---

## Grid 3 Colunas

```html
<div class="grid-x grid-margin-x">
    <div class="cell small-12 medium-4">1</div>
    <div class="cell small-12 medium-4">2</div>
    <div class="cell small-12 medium-4">3</div>
</div>
```

---

## Modal (Reveal)

```html
<button class="button" data-open="modal">Abrir</button>
<div class="reveal" id="modal">
    <p>Conteúdo</p>
    <button class="close-button" data-close>&times;</button>
</div>
```

---

## Accordion

```html
<ul class="accordion" data-accordion>
    <li class="accordion-item">
        <a class="accordion-title">Titulo</a>
        <div class="accordion-content">Conteúdo</div>
    </li>
</ul>
```

---

## Tabs

```html
<ul class="tabs" data-tabs>
    <li class="tabs-title"><a href="#p1">Tab 1</a></li>
</ul>
<div class="tabs-content">
    <div id="p1">Conteúdo</div>
</div>
```

---

## Off-Canvas

```html
<div class="off-canvas-wrapper">
    <div class="off-canvas position-left" id="menu">
        <ul class="vertical menu">Links</ul>
    </div>
    <div class="off-canvas-content">
        <button data-toggle="menu">Menu</button>
    </div>
</div>
```

---

## Alert

```html
<div class="callout">
    <p>Alerta</p>
</div>
<div class="callout primary">
    <p>Primary</p>
</div>
<div class="callout success">
    <p>Success</p>
</div>
```