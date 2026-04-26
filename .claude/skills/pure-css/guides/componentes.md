# Componentes - Pure.css

Buttons e menus Pure.css.

---

## Buttons

```html
<a class="pure-button">Button</a>
<a class="pure-button pure-primary">Primary</a>
<a class="pure-button pure-secondary">Secondary</a>
<a class="pure-button pure-button-disabled">Disabled</a>
```

---

## Button Groups

```html
<div class="pure-button-group">
    <a class="pure-button">1</a>
    <a class="pure-button">2</a>
    <a class="pure-button">3</a>
</div>
```

---

## Menus

### Horizontal

```html
<div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Item</a></li>
    </ul>
</div>
```

### Vertical

```html
<div class="pure-menu">
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Item 1</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Item 2</a></li>
    </ul>
</div>
```

---

## Menu with Dropdown

```html
<div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" class="pure-menu-link">Dropdown</a>
            <ul class="pure-menu-children">
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sub-item</a></li>
            </ul>
        </li>
    </ul>
</div>
```

---

## Tables

```html
<table class="pure-table">
    <thead>
        <tr><th>Header</th></tr>
    </thead>
    <tbody>
        <tr><td>Data</td></tr>
    </tbody>
</table>
```

```html
<table class="pure-table pure-table-bordered">Bordered</table>
<table class="pure-table pure-table-horizontal">Horizontal</table>
<table class="pure-table pure-table-striped">Striped</table>
```

---

## Notes

- Módulos minimalistas