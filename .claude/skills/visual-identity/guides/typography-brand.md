# Typography for Brand

Guia para definir tipografia de marca.

---

## 1. Fontes de Marca

### 1.1 Tipos de Famílias

| Tipo | Uso | Exemplo |
|------|-----|--------|
| **Display** | Títulos, headlines | Playfair Display |
| **Body** | Texto principal | Inter |
| **Accent** | Destaques, quotes | Lobster |
| **Monospace** | Código | Fira Code |

### 1.2 Hierarquia

```
┌─────────────────────────────────────────────┐
│  H1: Display Bold 48px           │
│  ────────────────────────────────            │
│  H2: Display SemiBold 36px     │
│  ───────────────────────────────            │
│  H3: Display Medium 28px      │
│  ─────────────────────────────             │
│  Body Regular 16px / 1.6 line-height   │
│  ─────────────────────────────             │
│  Caption: Body Small 14px       │
└─────────────────────────────────────────────┘
```

---

## 2. Selection Criteria

### 2.1 Legibilidade

- Funciona em múltiplos tamanhos
- Funciona em screens diferentes
- Caracteres distintos (I, l, 1)

### 2.2 Personalidade

| Mood | Fontes Sugeridas |
|------|---------------|
| Corporativo | Helvetica, Garamond |
| Moderno | Inter, Proxima Nova |
| Criativo | Futura, Baskerville |
| Tech | IBM Plex Sans |

---

## 3. Sistema Tipográfico

### 3.1 Escala

```css
:root {
  /* Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;  /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;     /* 48px */
}
```

### 3.2 Usage Guide

```markdown
| Element | Font | Size | Weight |
|--------|------|------|--------|
| H1 | Display | 48px | 700 |
| H2 | Display | 36px | 600 |
| H3 | Display | 28px | 600 |
| Body | Body | 16px | 400 |
| Caption | Body | 14px | 400 |
```

---

## Cross-refs

- [brand-basics.md](brand-basics.md)
- [brand-book.md](brand-book.md)