# Magellan - Motion UI

Menu fixo com scroll animado.

---

## O que é Magellan

Menu fixo que:
- Fica no topo ao rolar
- Destaca item ativo
- Anima scroll

---

## Uso

```html
<!-- Menu -->
<div class="sticky" data-sticky data-anchor="menu">
    <nav data-magellan id="menu">
        <ul>
            <li><a href="#secao1">Seção 1</a></li>
            <li><a href="#secao2">Seção 2</a></li>
            <li><a href="#secao3">Seção 3</a></li>
        </ul>
    </nav>
</div>

<!-- Sections -->
<section id="secao1" data-magellan-target="secao1">
    Conteúdo 1
</section>

<section id="secao2" data-magellan-target="secao2">
    Conteúdo 2
</section>
```

---

## Configuração

```javascript
$(document).foundation({
    magellan: {
        activeClass: 'active',
        threshold: 0,
        destinationThreshold: 400,
        fixedWidth: 0,
        onlyIfNeeded: false
    }
});
```

---

## CSS

```css
.sticky {
    z-index: 100;
}

[data-magellan] a.active {
    color: active-color;
}
```

---

## Smooth Scroll

```scss
$html-scroll-behavior: smooth;
```

---

## Notas

- Requer Foundation
- Usar data-anchor e data-magellan-target
- Threshold define distância