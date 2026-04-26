# Customização - Bulma

Customização via Sass.

---

## Install Sass

```bash
npm install bulma sass
```

---

## Configuração

```scss
// custom.scss

// Cores customizadas
$primary: #yourColor;
$link: #yourColor;
$info: #yourColor;
$success: #yourColor;
$warning: #yourColor;
$danger: #yourColor;

// Typography customizada
$family-sans-serif: "Inter", system-ui, sans-serif;

// Importar Bulma
@import "bulma/bulma.sass";
```

---

## Variables Principais

```scss
// Cores
$primary: #485ceb;
$link: #3273dc;
$info: #3298dc;
$success: #48c774;
$warning: #ffdd57;
$danger: #f14668;

// Typography
$family-sans-serif: "Helvetica Neue", Helvetica, Arial, sans-serif;
$family-monospace: monospace;
$size-1: 3rem;
$size-2: 2.5rem;

// Spacing
$gap: 24px;
$radius: 4px;

// Features
$navbar-height: 3.25rem;
```

---

## Compilar

```json
{
    "scripts": {
        "build": "sass custom.scss:custom.css --no-source-map"
    }
}
```

```bash
npm run build
```

---

## Notes

- Modificar variáveis antes do import
- Usar Dart Sass