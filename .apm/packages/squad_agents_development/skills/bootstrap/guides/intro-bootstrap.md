# Introdução ao Bootstrap

Guia introdutório sobre Bootstrap.

---

## 1. O que é Bootstrap

Bootstrap é um framework CSS open-source para criar interfaces responsivas e mobile-first.

---

## 2. Versões

| Versão | Status | Características |
|--------|--------|------------------|
| BS4 | Legacy | grid flexbox |
| BS5 | Atual | CSS custom properties, novo design |

---

## 3. Instalação

### 3.1 Via CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### 3.2 Via npm

```bash
npm install bootstrap
```

---

## 4. Estrutura Básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <h1>Olá, Bootstrap!</h1>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 5. Conceitos Basic

### Classes Utility

| Classe | Descrição |
|--------|-----------|
| container | Container centralizado |
| container-fluid | Container full width |
| row | Linha do grid |
| col | Coluna |

---

## Cross-refs

- [grid-system.md](grid-system.md) - Grid
- [componentes.md](componentes.md) - Componentes