# Acessibilidade Tipográfica

Guia de acessibilidade em tipografia para garantir leitura para todos.

---

## 1. WCAG e Tipografia

### 1.1 Requisitos WCAG

| Critério | Nível | Descrição |
|---------|-------|-----------|
| 1.4.3 | AA | Contraste 4.5:1 |
| 1.4.11 | AA | Contraste não-texto 3:1 |
| 1.4.4 | AA | Redimensionar texto 200% |
| 1.4.12 | AA | Espaçamento de texto |

### 1.2 Tamanho Mínimo

| Contexto | Mínimo | Recomendado |
|----------|--------|------------|
| Body | 16px | 18px+ |
| Labels | 14px | 16px |
| Captions | 12px | 14px |
| Títulos | 24px | 32px+ |

---

## 2. Contraste de Cores

### 2.1 Relação Texto/Fundo

| Combinação | Razão Mínima |
|-----------|-------------|
| Preto no Branco | 21:1 |
| #333 no Branco | 12.6:1 |
| #666 no Branco | 7.9:1 |
| #999 no Branco | 3.1:1 |
| # CCC no Preto | 16:1 |
| #888 no Preto | 8.3:1 |

### 2.2 Ferramentas

| Ferramenta | URL |
|-----------|-----|
| WebAIM Contrast Checker | webaim.org/resources/contrastchecker/ |
| Coolors Contrast Tool | coolors.co/contrast-checker |

### 2.3 Implementação

```css
/* Bom contraste */
.text-primary {
  color: #1a1a1a;
  background: #ffffff;
  /* Ratio: 18.1:1 ✓ */
}

/* Contraste insuficiente */
.text-muted {
  color: #888888;
  background: #ffffff;
  /* Ratio: 3.8:1 ✗ */
}
```

---

## 3. Espaçamento Acessível

### 3.1 Line Height

| Tipo | Valor | WCAG |
|------|-------|------|
| Tight | 1.2 | ✓ |
| Normal | 1.5 | ✓✓ |
| Loose | 1.75 | ✓✓ |

### 3.2 Letter Spacing

| Tipo | Tracking | WCAG |
|------|----------|------|
| Normal | 0 | ✓ |
| maiúsculas | +30 | ✓ |
| Muito largo | +50 | ✗ |

### 3.3 Word Spacing

```css
/* WCAG 1.4.12 */
p {
  letter-spacing: 0.12em; /* Recomendado */
  word-spacing: 0.16em;
  line-height: 1.5;
}
```

---

## 4. Tamanho de Texto

### 4.1 Unidades Relativas

```css
/* Use rem, não px */
html {
  font-size: 100%; /* 16px base */
}

body {
  font-size: 1rem; /* 16px */
  font-size: 1.125rem; /* 18px - mais legível */
}

/* Scale com clamp() */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### 4.2 Zoom

```css
/* Suporte a zoom do browser */
html {
  font-size: 100%;
}

body {
  /* Texto redimensiona com zoom */
  font-size: 1rem;
}

/* Evita overflow horizontal */
html {
  overflow-x: hidden;
}
```

---

## 5. Recursos de Leitura

### 5.1 Comprimento de Linha

| Dispositivo | Caracteres | WCAG |
|-------------|-----------|------|
| Mobile | 30-40 | ✓ |
| Tablet | 45-65 | ✓ |
| Desktop | 60-75 | ✓ |
| > 80 | Não legível | ✗ |

### 5.2 Parágrafos

```css
p {
  max-width: 65ch; /* 60-75 caracteres */
}
```

### 5.3 Alinhamento

| Alinhamento | Legibilidade |
|-------------|-------------|
| Esquerda | ✓✓✓ Recomendado |
| Direita | ✓✓ (RTL) |
| Centralizado | ✓ Raramente |
| Justified | ✗ Evitar |

---

## 6. High Contrast Mode

### 6.1 Detectar

```javascript
if (window.matchMedia('(prefers-contrast: more)').matches) {
  document.body.classList.add('high-contrast');
}
```

### 6.2 Estilos

```css
@media (prefers-contrast: more) {
  body {
    --text-color: #000000;
    --bg-color: #ffffff;
  }
  
  a {
    text-decoration: underline;
  }
}
```

### 6.3 Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --bg-color: #1a1a1a;
  }
}
```

---

## 7. Reduced Motion

### 7.1 Prefere

```javascript
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
```

### 7.2 CSS

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 8. Checklist de Acessibilidade

### 8.1 Verificação

| # | Critério | Status |
|---|---------|--------|
| 1 | Tamanho mínimo 16px | [ ] |
| 2 | Contraste 4.5:1 | [ ] |
| 3 | Line height 1.5 | [ ] |
| 4 | Alinhamento left | [ ] |
| 5 | max-width 65ch | [ ] |
| 6 | Unidades relatives | [ ] |
| 7 | Reduced motion | [ ] |

### 8.2 Ferramentas

| Ferramenta | Teste |
|-----------|------|
| axe DevTools | 자동 |
| WAVE | Manual |
| Lighthouse | Automático |

---

## Cross-refs

- [hierarchy.md](hierarchy.md) - Hierarquia
- [web-fonts.md](web-fonts.md) - Fonts web