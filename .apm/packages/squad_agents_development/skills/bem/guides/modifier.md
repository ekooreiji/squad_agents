# Modifiers - BEM

Variações de blocks e elements.

---

## O que é Modifier

Variação de apariencia/comportamento:
- Altera visual
- Altera estado
- Altera tamanho

---

## Sintaxe

```css
.block--modifier {}
.block__element--modifier {}
```

---

## Exemplos

### Button Modifiers

```css
.btn {}
.btn--primary {}
.btn--secondary {}
.btn--outline {}
.btn--disabled {}
.btn--small {}
.btn--large {}
.btn--full-width {}
```

```html
<button class="btn">Default</button>
<button class="btn btn--primary">Primary</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--disabled">Disabled</button>
```

### Card Modifiers

```css
.card {}
.card--featured {}
.card--horizontal {}
.card--compact {}
```

---

## States

```css
.btn {}
.btn--hover {}
.btn--active {}
.btn--focus {}
.btn--loading {}
```

```javascript
// Toggle state
btn.classList.add('btn--loading');
btn.classList.remove('btn--loading');
```

---

## Boolean Modifiers

```css
.btn--loading {}
.btn--active {}
.btn--open {}
```

```html
<button class="btn btn--loading">Carregando</button>
<button class="btn btn--active">Ativo</button>
```

---

## Notes

- Duplo hífen (--)
- Modificador = variação