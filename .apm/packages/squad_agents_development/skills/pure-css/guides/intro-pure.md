# Introdução ao Pure.css

Framework CSS leve e modular da Yahoo.

---

## O que é Pure.css

Framework CSS:
- Leve (~4KB total)
- Modular
- Responsive
- v0.8.0 (latest)

---

## Versão Atual

v0.8.0 (2023)

---

## Instalação

### Via CDN (módulos individuais)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@0.8.0/build/pure-min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@0.8.0/build/grids-responsive-min.css">
```

### Via npm

```bash
npm install purecss
```

---

## Módulos

| Módulo | Arquivo |
|--------|---------|
| Base | pure-min.css |
| Grid | grids-min.css |
| Forms | forms-min.css |
| Buttons | buttons-min.css |
| Tables | tables-min.css |
| Menus | menus-min.css |

---

## Diferenças Bootstrap

| Aspecto | Pure.css | Bootstrap |
|--------|----------|-----------|
| Tam | ~4KB | ~300KB |
| Base | Yahoo | Twitter |
| Módulos | 6 | Tudo |

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pure.css</title>
    <link rel="stylesheet" href="pure-min.css">
    <link rel="stylesheet" href="grids-responsive-min.css">
</head>
<body>
    <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-2">
            <h1>Olá Pure.css</h1>
        </div>
    </div>
</body>
</html>
```

---

## Notes

- Total ~4KB
- Responsivo por padrão