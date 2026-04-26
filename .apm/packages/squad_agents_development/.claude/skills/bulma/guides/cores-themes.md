# Cores e Temas - Bulma

Customização de cores via Sass.

---

## Cores Padrão

| Variável | Cor |
|---------|-----|
| $primary | #485ceb |
| $link | #3273dc |
| $info | #3298dc |
| $success | #48c774 |
| $warning | #ffdd57 |
| $danger | #f14668 |

---

## Cores Base

| Variável | Cor |
|---------|-----|
| $black | #0a0a0a |
| $black-bis | #363636 |
| $black-ter | #4a4a4a |
| $grey-darker | #5c5c5c |
| $grey-dark | #7a7a7a |
| $grey | #b5b5b5 |
| $grey-light | #ededed |
| $grey-lighter | #f5f5f5 |
| $white | #ffffff |
| $white-bis | #fafafa |
| $white-ter | #f5f5f5 |

---

## Customização Sass

```scss
$primary: #yourColor;
$link: #yourColor;
$info: #yourColor;
$success: #yourColor;
$warning: #yourColor;
$danger: #yourColor;

@import "bulma/bulma.sass";
```

---

## Cores Texto

```scss
$text: #4a4a4a;
$text-light: #7a7a7a;
$text-strong: #363636;
```

---

## Background

```scss
$scheme-main: #ffffff;
$scheme-main-bis: #fafafa;
$scheme-main-ter: #f5f5f5;
```

---

## Notes

- Modificar variáveis antes do import
- Compiler com Sass