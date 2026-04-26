# Transições CSS

Transições para mudança suave entre estados.

---

## Transition Básico

```css
.element {
    transition: property duration;
}

.element:hover {
    property: value;
}
```

---

## Sintaxe

```css
transition: property duration timing-function delay;
```

---

## Propriedades

### Background

```css
.button {
    background: #ccc;
    transition: background 0.3s ease;
}
.button:hover {
    background: #999;
}
```

### Color

```css
.link {
    color: blue;
    transition: color 0.2s ease;
}
.link:hover {
    color: red;
}
```

### Opacity

```css
.box {
    opacity: 0.5;
    transition: opacity 0.3s ease;
}
.box:hover {
    opacity: 1;
}
```

---

## Multiple Properties

```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

---

## All Properties

```css
.box {
    transition: all 0.3s ease;
}
```

---

## Transition Timing

| Valor | Descrição |
|-------|------------|
| ease | Início lento, rápido, fim lento |
| linear | Velocidade constante |
| ease-in | Início lento |
| ease-out | Fim lento |
| ease-in-out | Início e fim lentos |

---

## Delay

```css
.box {
    transition: transform 0.3s ease 0.5s;
}
```

---

## Exemplos

```css
/* Button hover */
.btn {
    transition: background 0.2s, transform 0.1s;
}

/* Link color */
a {
    transition: color 0.2s ease;
}

/* Image zoom */
.img {
    transition: transform 0.3s ease;
}
.img:hover {
    transform: scale(1.05);
}
```

---

## Notes

- Usar transition apenas em propriedades animáveis
- Evitar "all" para performance
- Manter duration curto (0.2-0.5s)