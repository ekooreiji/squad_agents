# Customização - Foundation CSS

Customização via Sass.

---

## Install Sass

```bash
npm install foundation-sites --save-dev
npm install sass
```

---

## Configuração

```scss
// settings.scss
@import 'settings';

// Custom variables
$global-font-size: 100%;
$global-width: rem-calc(1200);
$grid-column-count: 12;

// Foundation components
@import 'foundation';

// Include what you need
@include foundation-global-styles;
@include foundation-grid;
@include foundation-xy-grid-classes;
@include foundation-flex-classes;
@include foundation-float-classes;
@include foundation-typography;
@include foundation-forms;
@include foundation-button;
@include foundation-accordion;
@include foundation-badge;
@include foundation-card;
@include foundation-close-button;
@include foundation-drilldown-menu;
@include foundation-dropdown-menu;
@include foundation-interactive;
@include foundation-media-object;
@include foundation-menu;
@include foundation-off-canvas;
@include foundation-reveal;
@include foundation-slider;
@include foundation-sticky;
@include foundation-title-bar;
@include foundation-top-bar;
@include foundation-visibility-classes;
@include foundation-float-classes;
```

---

## Custom Grid

```scss
// Grid customizado
$grid-row-width: rem-calc(1000);
$grid-column-count: 16;
$grid-column-gutter: (
    small: 20px,
    medium: 30px,
);
```

---

## Custom Breakpoints

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

## Custom Cores

```scss
$primary-color: #yourColor;
$secondary-color: #yourColor;
$success-color: #okGreen;
$warning-color: #warnYellow;
$alert-color: #alertRed;
```

---

## Compilar

```json
{
    "scripts": {
        "build": "sass --style=compressed scss:css"
    }
}
```

```bash
npm run build
```

---

## Notes

- Usar Node Sass ou Dart Sass
- Custom variables antes do import
- Includeonly componentes necessários