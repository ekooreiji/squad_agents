# Exemplos de Código - Foundation CSS

Exemplos práticos de Foundation CSS.

---

## Grid

### Básico 3 colunas

```html
<div class="grid-container">
    <div class="grid-x grid-padding-x">
        <div class="cell">Coluna 1</div>
        <div class="cell">Coluna 2</div>
        <div class="cell">Coluna 3</div>
    </div>
</div>
```

### Responsivo

```html
<div class="grid-x">
    <div class="cell small-12 medium-6 large-4">Coluna</div>
    <div class="cell small-12 medium-6 large-4">Coluna</div>
    <div class="cell small-12 medium-6 large-4">Coluna</div>
</div>
```

---

## Buttons

```html
<button class="button">Padrão</button>
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button alert">Alert</button>
<button class="button warning">Warning</button>
<button class="button hollow">Hollow</button>
<button class="button expanded">Expanded</button>
<button class="button disabled">Disabled</button>
```

---

## Cards

```html
<div class="card">
    <div class="card-section">
        <h5>Título</h5>
        <p>Conteúdo</p>
        <button class="button">Ação</button>
    </div>
</div>
```

---

## Forms

```html
<form data-abide>
    <label>
        Nome
        <input type="text" required>
        <span class="form-error">Obrigatório</span>
    </label>
    <label>
        Email
        <input type="email" required>
        <span class="form-error">Email inválido</span>
    </label>
    <label>
        Mensagem
        <textarea rows="4"></textarea>
    </label>
    <button class="button" type="submit">Enviar</button>
</form>
```

---

## Navbar (Top Bar)

```html
<nav class="top-bar">
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

## Modal (Reveal)

```html
<button class="button" data-open="meuModal">Abrir</button>

<div class="reveal" id="meuModal">
    <h4>Título</h4>
    <p>Conteúdo</p>
    <button class="close-button" data-close>&times;</button>
</div>
```

---

## Callout

```html
<div class="callout">Padrão</div>
<div class="callout primary">Primary</div>
<div class="callout secondary">Secondary</div>
<div class="callout success">Success</div>
<div class="callout warning">Warning</div>
<div class="callout alert">Alert</div>
```

---

## Tabs

```html
<ul class="tabs" data-tabs>
    <li class="tabs-title is-active"><a href="#painel1">Tab 1</a></li>
    <li class="tabs-title"><a href="#painel2">Tab 2</a></li>
</ul>

<div class="tabs-content" data-tabs-content>
    <div class="tabs-panel is-active" id="painel1">Conteúdo 1</div>
    <div class="tabs-panel" id="painel2">Conteúdo 2</div>
</div>
```

---

## Accordion

```html
<ul class="accordion" data-accordion>
    <li class="accordion-item is-active">
        <a class="accordion-title">Item 1</a>
        <div class="accordion-content">Conteúdo 1</div>
    </li>
    <li class="accordion-item">
        <a class="accordion-title">Item 2</a>
        <div class="accordion-content">Conteúdo 2</div>
    </li>
</ul>
```

---

## Typography

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3 class="subheader">Subheading</h3>
<p class="lead">Lead paragraph</p>
<p class="text-center">Centralizado</p>
```