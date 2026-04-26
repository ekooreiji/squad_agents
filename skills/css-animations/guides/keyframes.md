# Keyframes CSS

Animações completas com @keyframes.

---

## Sintaxe

```css
@keyframes nome {
    0% {
        property: value;
    }
    100% {
        property: value;
    }
}
```

---

## Exemplo Básico

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.box {
    animation: fadeIn 0.5s ease;
}
```

---

## Exemplo com Múltiplos Steps

```css
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
```

---

## animation-fill-mode

```css
/* Mantém estado final */
.box {
    animation: fadeIn 0.5s forwards;
}

/* Mantém estado inicial */
.box {
    animation: fadeIn 0.5s backwards;
}

/* Mantém ambos */
.box {
    animation: fadeIn 0.5s both;
}
```

---

## animation-direction

```css
/* Normal */
animation-direction: normal;

/* Reverse */
animation-direction: reverse;

/* Alterna */
animation-direction: alternate;

/* Alterna reverse */
animation-direction: alternate-reverse;
```

---

## animation-iteration-count

```css
/* Uma vez */
animation-iteration-count: 1;

/* Infinito */
animation-iteration-count: infinite;

/* 3 vezes */
animation-iteration-count: 3;
```

---

## Delay com Animation

```css
.box {
    animation: slideIn 0.5s ease 0.5s;
}
```

---

## Exemplo Completo

```css
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.ball {
    animation: bounce 1s ease infinite;
}
```

---

## Animatable Properties

- opacity
- transform
- color
- background
- width, height
- border
- box-shadow
- margin, padding

---

## Notas

- Evitar propriedades que causam reflow
- Usar transform para performance
- Manter animações curtas