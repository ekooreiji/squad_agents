# Introdução ao Bulma

Framework CSS moderno baseado em Flexbox.

---

## O que é Bulma

Framework CSS:
- Flexbox-only
- Moderno e leve (~200KB)
- Sem JavaScript
- 100% responsive

---

## Versão Atual

v0.9.4

---

## Instalação

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
```

### Via npm

```bash
npm install bulma
```

### Via Sass

```bash
npm install bulma sass
```

```scss
@import "bulma/bulma.sass";
```

---

## Diferenças Bootstrap

| Aspecto | Bulma | Bootstrap |
|---------|--------|----------|
| Base | Flexbox | Grid |
| JS | Não | jQuery |
| Tamanho | ~200KB | ~300KB |
| Variables | Sass | Sass |

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulma</title>
    <link rel="stylesheet" href="bulma.min.css">
</head>
<body>
    <section class="section">
        <div class="container">
            <h1 class="title">Olá Bulma</h1>
            <p class="subtitle">Framework CSS moderno</p>
        </div>
    </section>
</body>
</html>
```

---

## Estrutura básica

```html
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column">Coluna 1</div>
            <div class="column">Coluna 2</div>
        </div>
    </div>
</section>
```

---

## Componentes

- Buttons
- Cards
- Navbar
- Forms
- Columns
- Tags
- Box
- Message

---

## Notas

- 100% Flexbox
- Mobile-first
- Sem dependências JS
- Customização via Sass