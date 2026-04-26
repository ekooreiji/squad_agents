# Customização Bootstrap

Guia sobre customização.

---

## 1. Via CSS

```css
/* Sobrescrever variáveis CSS */
:root {
  --bs-primary: #ff6600;
  --bs-font-family-sans-serif: 'Inter', sans-serif;
}
```

---

## 2. Via SASS

### 2.1 Variáveis

```scss
// Customizações
$primary: #ff6600;
$enable-negative-margins: true;

// Importar depois das variáveis padrão
@import "bootstrap/scss/bootstrap";
```

### 2.2 Partials Importar

```scss
// O que precisa
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
```

---

## 3. Build Custom

```bash
npm install -g sass
sass input.scss output.css
```

---

## Cross-refs

- [cores-themes.md](cores-themes.md) - Cores
- [melhores-praticas.md](melhores-praticas.md) - Práticas