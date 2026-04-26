# Customização - Materialize

Customização via Sass.

---

## Install Sass

```bash
npm install materialize
npm install node-sass
```

---

## Configuração

```scss
// custom.scss
@charset "UTF-8";

// Cores customizadas
$primary-color: #yourColor;
$secondary-color: #yourColor;
$link-color: #yourColor;

// Typography
$font-family: "Inter", sans-serif;

// Importar materialize
@import "materialize/sass/materialize";
```

---

## Variables

```scss
$primary-color: #202020;
$secondary-color: #202020;
$link-color: #428bca;
$success-color: #4caf50;
$error-color: #f44336;
```

---

## Notes

- Modificar variáveis antes do import