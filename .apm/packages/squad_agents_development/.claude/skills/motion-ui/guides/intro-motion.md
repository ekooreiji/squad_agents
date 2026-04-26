# Introdução ao Motion UI

Biblioteca de animações da Foundation.

---

## O que é Motion UI

Biblioteca de animações CSS:
- Transições (fade, slide, zoom)
- Animações (hinge, shake, bounce)
- Toggle classes
- Magellan (scroll)
- Usarstandalone ou integrado

---

## Versão Atual

Motion UI v2 (standalone)

---

## Instalação

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/motion-ui@2.0.4/dist/motion-ui.min.css">
<script src="https://cdn.jsdelivr.net/npm/motion-ui@2.0.4/dist/motion-ui.min.js"></script>
```

### Via npm

```bash
npm install motion-ui
```

### Via Foundation

Motion UI já incluso no Foundation CSS.

---

## Quick Start

```html
<!-- Toggle -->
<button class="button" data-toggle="elemento">Toggle</button>

<!-- Elemento -->
<div id="elemento" class="reveal" hidden>
    Conteúdo
</div>
```

```javascript
// Inicializar
$(document).foundation();
```

---

## Classes de Toggle

| Classe | Descrição |
|--------|------------|
| .reveal | Mostrar |
| .hidden | Esconder |
| .hide |.display: none |
| .invisible | visibility: hidden |

---

## Animações

```html
<div class="animate fade-in">Fade</div>
<div class="animate spin">Spin</div>
<div class="animate hinge">Hinge</div>
```

---

## Recursos

- Transições CSS3
- Suporte a Sass
- Performance otimizada
- Usarstandalone