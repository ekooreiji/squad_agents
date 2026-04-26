# Boas Práticas de Performance

Princípios para animaçõesperformantes.

---

## Performance Guidelines

- Usar transform e opacity
- Evitar propriedades que causam reflow
- Manter animações curtas
- will-change com moderação

---

## Transform e Opacity

** BOM ** (GPU acceleration):

```css
.good {
    transform: translateX(100px);
    opacity: 0.5;
    filter: blur(2px); /* Também bom */
}
```

---

## Evitar property changes

** RUIM ** (causam reflow):

```css
.bad {
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    margin: 10px;
    padding: 10px;
    border-width: 2px;
}
```

---

## will-change

```css
/* Antecipar mudança */
.will-change {
    will-change: transform;
}

/* Remover después */
.will-change-done {
    will-change: auto;
}
```

---

## Compositing

```css
/* Forçar layer */
.layer {
    transform: translateZ(0);
    /* ou */
    will-change: transform;
}
```

---

## animation vs transition

** Transition**: único estado

```css
.btn {
    transition: transform 0.2s;
}
.btn:hover {
    transform: scale(1.05);
}
```

** Animation**: estados múltiplos

```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
.ball {
    animation: bounce 0.5s infinite;
}
```

---

## Debug Animation

```css
/* Desabilitar animações */
* {
    animation: none !important;
    transition: none !important;
}
```

---

## DevTools

- Chrome DevTools > Performance
- FPS meter
- Paint flashing

---

## Checklist Performance

- [ ]Usar transform/opacity
- [ ] Evitar width/height/top/left
- [ ] Animações curtas
- [ ] will-change moderado
- [ ] Testar em device real

---

## Notas

- 60fps = 16ms por frame
- Transform e opacity não causam reflow
- Compositing é expensive