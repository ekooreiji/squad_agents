# Fluid Typography

Guia de tipografia fluida que se adapta a qualquer tamanho de tela.

---

## 1. O que é Tipografia Fluida

Tipografia fluida usa unidades relativas e funções CSS para redimensionar texto suavemente.

---

## 2. Unidades

### 2.1 Unidades Absolutas

| Unidade | Descrição |
|---------|----------|
| **px** | Pixels absolutos |
| **pt** | Points (impressão) |

### 2.2 Unidades Relativas

| Unidade | Relativo a |
|---------|----------|
| **em** | Elemento pai |
| **rem** | Raiz (html) |
| **%** | Elemento pai |
| **vw** | 1% da largura da viewport |
| **vh** | 1% da altura da viewport |

### 2.3 Quando Usar

| Unidade | Uso |
|---------|-----|
| rem | Font-size, padding |
| em | Component-level spacing |
| % | Layout widths |
| vw/vh | Fluid typography |

---

## 3. Funções CSS

### 3.1 clamp()

```css
/* clamp(min, preferred, max) */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

/*
Min: 1.5rem (24px)
Preferred: escala com viewport
Max: 3rem (48px)
*/
```

### 3.2 Exemplos

```css
/* Headline */
h1 {
  font-size: clamp(2rem, 8vw, 4rem);
  line-height: 1.1;
}

/* Subtitle */
h2 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.2;
}

/* Body */
p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
}
```

---

## 4. Implementação

### 4.1 CSS Variables

```css
:root {
  /* Fluid typography scale */
  --fs-xs: clamp(0.75rem, 1vw, 0.875rem);
  --fs-sm: clamp(0.875rem, 1.5vw, 1rem);
  --fs-base: clamp(1rem, 2vw, 1.125rem);
  --fs-lg: clamp(1.125rem, 2.5vw, 1.25rem);
  --fs-xl: clamp(1.5rem, 4vw, 2rem);
  --fs-2xl: clamp(2rem, 5vw, 2.5rem);
  --fs-3xl: clamp(2.5rem, 6vw, 3rem);
  --fs-4xl: clamp(3rem, 8vw, 4rem);
}
```

### 4.2 With Media Queries (fallback)

```css
/* Fallback for older browsers */
.title {
  font-size: 1.5rem;
}

@supports (font-size: clamp(1rem, 2vw, 2rem)) {
  .title {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
}
```

---

## Cross-refs

- [breakpoints.md](breakpoints.md) - Breakpoints
- [responsive-grid.md](responsive-grid.md) - Grid responsivo