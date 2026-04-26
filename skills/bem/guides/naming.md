# Naming Conventions - BEM

Convenções de nomenclatura BEM.

---

## Regras

- Kebab-case
- Nomes descritivos
- Sem abreviações

---

## Padrão

```
block__element--modifier
```

---

## Estrutura de Pastas

```
src/
├── blocks/
│   ├── button/
│   │   ├── button.css
│   │   └── button.js
│   ├── card/
│   │   ├── card.css
│   │   └── card.js
│   └── menu/
└── elements/
```

---

## Nomenclatura

### Blocks

```css
.btn {}
.card {}
.menu {}
.header {}
.footer {}
.form {}
.input {}
.modal {}
```

### Elements

```css
.btn__icon {}
.btn__text {}
.card__image {}
.card__title {}
.card__description {}
.menu__item {}
.menu__link {}
.form__field {}
.form__label {}
.form__error {}
```

### Modifiers

```css
.btn--primary {}
.btn--secondary {}
.btn--disabled {}
.btn--large {}
.card--featured {}
.card--horizontal {}
.menu--horizontal {}
```

---

## Mixes

```css
.block .other-block {}
.block--modifier .other-block {}
```

---

## Examples

| Errado | Correto |
|--------|--------|
| .button | .btn |
| .btnText | .btn__text |
| .btn_primary | .btn--primary |