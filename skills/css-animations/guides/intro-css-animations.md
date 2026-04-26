# Introdução às CSS Animations

Animações CSS nativas para interfaces modernas.

---

## O que são CSS Animations

Conjunto de propriedades CSS para criar animações:
- Transições (transitions)
- Keyframes (animações completas)
- Transforms (transformações)
- Timing functions (controle de veloc

---

## Propriedades Principais

```css
/* Transition */
transition: property duration timing-function;

/* Animation */
animation: name duration timing-function delay iteration-count direction;
```

---

## Propriedades de Animação

| Propriedade | Descrição |
|------------|------------|
| animation-name | Nome do @keyframes |
| animation-duration | Tempo (s ou ms) |
| animation-timing-function | Easing |
| animation-delay | Atraso |
| animation-iteration-count | Repetições |
| animation-direction | Direction |
| animation-fill-mode | Fill mode |
| animation-play-state | Play/pause |

---

## Propriedades de Transition

| Propriedade | Descrição |
|------------|------------|
| transition-property | Propriedade |
| transition-duration | Tempo |
| transition-timing-function | Easing |
| transition-delay | Atraso |

---

## Exemplo Básico

```css
.box {
    transition: transform 0.3s ease;
}

.box:hover {
    transform: scale(1.1);
}
```

---

## Suporte

Todos os browsers modernos suportam CSS Animations.

---

## Recursos

- Transition: hover, focus, active
- Keyframes: animações completas
- Transform: 2D e 3D
- Performance-optimizado