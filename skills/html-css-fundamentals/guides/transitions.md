# Transitions

Guia de transições CSS para designers.

---

## 1. O que são Transições

Transições permitem mudar propriedades CSS de forma suave.

---

## 2. Sintaxe Básica

```css
.elemento {
    transition: propriedade duração timing-function;
}
```

---

## 3. Propriedades de Transition

### 3.1 transition-property

```css
.cor {
    transition-property: color;
}

.multiplas {
    transition-property: color, background-color, transform;
}

.todas {
    transition-property: all;
}
```

### 3.2 transition-duration

```css
.lento {
    transition-duration: 0.5s;
}

.rapido {
    transition-duration: 0.2s;
}
```

### 3.3 transition-timing-function

```css
.linear {
    transition-timing-function: linear;
}

.ease {
    transition-timing-function: ease;
}

.ease-in {
    transition-timing-function: ease-in;
}

.ease-out {
    transition-timing-function: ease-out;
}

.ease-in-out {
    transition-timing-function: ease-in-out;
}
```

### 3.4 transition-delay

```css
.atrasado {
    transition-delay: 0.3s;
}
```

---

## 4. Shorthand

```css
.botao {
    transition: all 0.3s ease;
}

.cor-e-transform {
    transition: color 0.3s ease, transform 0.3s ease;
}
```

---

## 5. Exemplos Práticos

### 5.1 Hover de Botão

```css
.botao {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.botao:hover {
    background-color: darkblue;
}
```

### 5.2 Hover de Link

```css
.link {
    color: blue;
    transition: color 0.2s ease;
}

.link:hover {
    color: darkblue;
}
```

### 5.3 Scale no Hover

```css
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}
```

### 5.4 Opacity

```css
.imagem {
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.imagem:hover {
    opacity: 1;
}
```

### 5.5 Box Shadow

```css
.card {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### 5.6 Background + Transform

```css
.botao {
    background-color: #3498db;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.botao:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}
```

---

## 6. Propriedades Animáveis

| Categoria | Propriedades |
|-----------|-------------|
| Cores | `color`, `background-color`, `border-color` |
| Tamanho | `width`, `height`, `padding`, `margin` |
| Texto | `font-size`, `line-height`, `letter-spacing` |
| Posição | `transform`, `top`, `left` |
| Opacidade | `opacity` |
| Sombras | `box-shadow` |
| Bordas | `border-radius` |

---

## 7. Performance

### 7.1 Propriedades Ideais

Use `transform` e `opacity` - usam GPU:

```css
/* BOM */
.card {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
```

### 7.2 Evitar transições em

Evite propriedades que causam reflow:

```css
/* RUIM */
.card {
    transition: width 0.3s ease, height 0.3s ease;
}
```

---

## 8. Transições vs Animações

| Transições | Animações |
|------------|----------|
| Requer triggers (hover, focus) | AUTO-executa |
| Propriedades únicas | Múltiplos keyframes |
| Simples | Complexo |

---

## Cross-refs

- [animations.md](animations.md) - Animações CSS
- [motion-design](../motion-design/SKILL.md) - Motion design
- [common-patterns.md](common-patterns.md) - Padrões de UI