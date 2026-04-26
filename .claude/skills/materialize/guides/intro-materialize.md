# Introdução ao Materialize

Framework CSS baseado em Material Design do Google.

---

## O que é Materialize

Framework CSS:
- Baseado em Material Design
- jQuery para interações
- Mobile-first
- v1.0.0 (latest)

---

## Versão Atual

v1.0.0 (2019)

---

## Instalação

### Via CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

### Via npm

```bash
npm install materialize

# ou
npm install material-css
```

---

## Diferenças Bootstrap

| Aspecto | Materialize | Bootstrap |
|---------|------------|-----------|
| Base | Material Design | Bootstrap |
| JS | jQuery | jQuery |
| Grid | 12-col | 12-col |

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Materialize</title>
    <link rel="stylesheet" href="materialize.min.css">
</head>
<body>
    <div class="container">
        <h1>Olá Materialize</h1>
        <p class="flow-text">Framework Material Design</p>
    </div>
    <script src="jquery.min.js"></script>
    <script src="materialize.min.js"></script>
    <script>M.initialize();</script>
</body>
</html>
```

---

## Características

- Cards com elevação
- Botões com ripple
- Cores Material Design
- Sidenav
- Modal
- Parallax

---

## Notas

- jQuery requerido
- jQuery UI Datepicker incluso
- Mobile-first