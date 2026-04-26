# Principles & Easing

Guia completo de princípios de timing e curvas de easing.

---

## 1. Timing Principles

### 1.1 Duração Appropriate

| Duração | Sensação | Uso |
|---------|----------|-----|
| 100-200ms | Instantâneo | Respostas rápidas |
| 200-300ms | Rápido | Interações simples |
| 300-500ms | Natural | Transições UI |
| 500-800ms | Lento | Animações complexas |

### 1.2 Regra do Polegar

- Animações curtas (< 300ms): Elementos interativos
- Animações médias (300-600ms): Transições de tela
- Animações longas (> 600ms): Démarrages, introduções

---

## 2. Curvas de Easing

### 2.1 Linear

```css
animation-timing-function: linear;
```
- Movimento constante
- Pouco natural
- Raramente usado

### 2.2 Ease-in

```css
animation-timing-function: ease-in;
/* same as cubic-bezier(0.42, 0, 1, 1) */
```
- Começa devagar, acelera
- Para entradas

### 2.3 Ease-out

```css
animation-timing-function: ease-out;
/* same as cubic-bezier(0, 0, 0.58, 1) */
```
- Começa rápido, desacelera
- Para saídas (mais comum)

### 2.4 Ease-in-out

```css
animation-timing-function: ease-in-out;
/* same as cubic-bezier(0.42, 0, 0.58, 1) */
```
- Começa devagar, acelera, desacelera
- Para movimentos completos

---

## 3. Custom Bezier

### 3.1 Common Values

```css
/* Bounce-like */
cubic-bezier(0.68, -0.55, 0.265, 1.55)

/* Sharp */
cubic-bezier(0.05, 0.96, 0.05, 1)

/* Smooth */
cubic-bezier(0.4, 0, 0.2, 1)
```

### 3.2 Examples

```css
.bounce {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.sharp {
  animation-timing-function: cubic-bezier(0.05, 0.96, 0.05, 1);
}
```

---

## Cross-refs

- [micro-interactions.md](micro-interactions.md) - Aplicações práticas
- [social-media-video.md](social-media-video.md) - Video timing