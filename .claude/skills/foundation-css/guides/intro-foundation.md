# Introdução ao Foundation CSS

Framework CSS profissional da Zurb para interfaces responsivas.

---

## O que é Foundation

Framework CSS:
- Semântico e acessível
- Mobile-first
- XY Grid flexível
- Componentes moduláveis

---

## Versão Atual

Foundation v6 (2024)

---

## Instalação

### Via CDN (mais simples)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.4/dist/css/foundation-prototype.min.css" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.4/dist/js/foundation.min.js"></script>
```

### Via npm

```bash
npm install foundation-sites
```

---

## Diferenças Bootstrap

| Aspecto | Foundation | Bootstrap |
|---------|------------|-----------|
| Grid | XY Grid | 12-col |
| Semantic | Sim | Parcial |
| Menu | Off-canvas | Navbar |
| Validação | Abide | HTML5 |

---

## Quick Start

```html
<!DOCTYPE html>
<html class="no-js" lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation</title>
    <link rel="stylesheet" href="foundation.min.css">
</head>
<body>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell">
                <h1>Olá Foundation</h1>
            </div>
        </div>
    </div>
    <script src="jquery.min.js"></script>
    <script src="foundation.min.js"></script>
    <script>$(document).foundation()</script>
</body>
</html>
```

---

## Estrutura Básica

```html
<!-- Container principal -->
<div class="grid-container">
    <!-- Row -->
    <div class="grid-x grid-padding-x">
        <!-- Colunas -->
        <div class="cell small-12 medium-6 large-4">
            Conteúdo
        </div>
    </div>
</div>
```

---

## Componentes Incluços

- XY Grid
- Botões
- Cards
- Off-canvas
- Menu
- Forms (Abide)
- Modal
- Reveal
- Tabs
- Accordion

---

## Recursos Adicionais

- Motion UI (animações)
- Interchange (imagens responsivas)
- Abide (validação)
- Equalizer (alturas iguais)

---

## Notas

- jQuery requerido
- Inicializar com $(document).foundation()
- Mobile-first por padrão