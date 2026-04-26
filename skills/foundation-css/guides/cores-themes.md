# Cores e Temas - Foundation CSS

Customização de cores e temas via Sass.

---

## Cores Padrão

| Variável | Cor |
|---------|-----|
| $primary-color | #1779ba |
| $secondary-color | #767676 |
| $success-color | #3adb76 |
| $warning-color: | #ffae00 |
| $alert-color | #cc4b37 |

---

## Cores Body

| Variável | Descrição |
|----------|------------|
| $body-background | Background |
| $body-font-color | Cor do texto |
| $body-font-family | Fonte principal |
| $body-antialiased | Font-smoothing |

---

## Customização Sass

```scss
// Custom settings
$global-font-size: 100%;
$global-width: rem-calc(1200);
$global-lineheight: 1.5;

$primary-color: #yourColor;
$secondary-color: #yourColor;

// Importar Foundation
@import 'foundation';

// Incluir apenas o necessário
@include foundation-grid;
@include foundation-xy-grid-classes;
@include foundation-button;
@include foundation-forms;
@include foundation-typography;
@include foundation-visual-classes;
@include foundation-float-classes;
@include foundation-flex-classes;
```

---

## Theming

```scss
// Criar tema escuro
$dark-theme: (
    background: #1a1a1a,
    text: #ffffff,
    primary: #3498db,
);

body.dark {
    background: map-get($dark-theme, background);
    color: map-get($dark-theme, text);
}
```

---

## CSS Customizado

```css
:root {
    --primary-color: #1779ba;
    --secondary-color: #767676;
}
```

---

## Notes

- Modificar variáveis antes do import
- Usar func rem-calc() para pixels → rem
- Compilar com npm scripts