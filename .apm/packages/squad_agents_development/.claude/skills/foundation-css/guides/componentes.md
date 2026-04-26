# Componentes - Foundation CSS

Principais componentes do Foundation.

---

## Buttons

```html
<button class="button">Padrão</button>
<button class="button primary">Primário</button>
<button class="button secondary">Secundário</button>
<button class="button success">Sucesso</button>
<button class="button alert">Alerta</button>
<button class="button warning">Aviso</button>
<button class="button disabled">Desabilitado</button>

<!-- Sizes -->
<button class="button tiny">Pequeno</button>
<button class="button small">Pequeno</button>
<button class="button large">Grande</button>

<!-- Expand -->
<button class="button expanded">Largura total</button>

<!-- Hollow -->
<button class="button hollow">Outline</button>

<!-- Clear -->
<button class="button clear">Limpo</button>
```

---

## Cards

```html
<div class="card">
    <div class="card-section">
        <h5>Título</h5>
        <p>Conteúdo</p>
    </div>
    <div class="card-section">
        <button class="button">Ação</button>
    </div>
</div>

<!-- Dividers -->
<div class="card">
    <div class="card-section">
        <h5>Seção 1</h5>
    </div>
    <div class="card-divider">
        <p>Divisor</p>
    </div>
    <div class="card-section">
        <h5>Seção 2</h5>
    </div>
</div>
```

---

## Navbar

```html
<div class="title-bar" data-responsive-toggle="menu-principal" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle="menu-principal"></button>
    <div class="title-bar-title">Menu</div>
</div>

<nav class="top-bar" id="menu-principal">
    <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">Logo</li>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="menu">
            <li><a href="#">Direita</a></li>
        </ul>
    </div>
</nav>
```

---

## Off-Canvas

```html
<!-- Wrapper -->
<div class="off-canvas-wrapper">
    <div id="meu-menu" class="off-canvas position-left" data-off-canvas>
        <button class="close-button" aria-label="Fechar" data-close>
            <span>&times;</span>
        </button>
        <ul class="vertical menu">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
        </ul>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
        <button class="button" type="button" data-toggle="meu-menu">Abrir Menu</button>
    </div>
</div>
```

---

## Modal (Reveal)

```html
<button class="button" data-open="meuModal">Abrir</button>

<div class="reveal" id="meuModal" data-reveal>
    <h4>Modal</h4>
    <p>Conteúdo</p>
    <button class="close-button" data-close>
        <span>&times;</span>
    </button>
</div>
```

---

## Accordion

```html
<ul class="accordion" data-accordion>
    <li class="accordion-item is-active" data-accordion-item>
        <a href="#" class="accordion-title">Item 1</a>
        <div class="accordion-content" data-tab-content>
            Conteúdo 1
        </div>
    </li>
    <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">Item 2</a>
        <div class="accordion-content" data-tab-content>
            Conteúdo 2
        </div>
    </li>
</ul>
```

---

## Tabs

```html
<ul class="tabs" data-tabs id="meus-tabs">
    <li class="tabs-title is-active"><a href="#painel1">Tab 1</a></li>
    <li class="tabs-title"><a href="#painel2">Tab 2</a></li>
</ul>

<div class="tabs-content" data-tabs-content="meus-tabs">
    <div class="tabs-panel is-active" id="painel1">
        Conteúdo 1
    </div>
    <div class="tabs-panel" id="painel2">
        Conteúdo 2
    </div>
</div>
```

---

## Badge, Progress, Switch

```html
<span class="badge">5</span>
<span class="badge primary">10</span>

<div class="progress" role="progressbar" tabindex="0">
    <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="switch">
    <input class="switch-input" id="meu-switch" type="checkbox">
    <label class="switch-paddle" for="meu-switch"></label>
</div>
```