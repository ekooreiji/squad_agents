# Template: Font Pairing

Template para documentar combinações de fontes.

---

## Estrutura

```markdown
---
title: Font Pairing - [Nome do Projeto]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Font Pairing: [Nome do Projeto]

## Overview

| Item | Valor |
|------|-------|
| Display Font | [Nome] |
| Body Font | [Nome] |
| Versão | 1.0.0 |

## Rationale

### Por que este par?

[Explique a escolha]

### Mood/Tonalidade

- [Mood 1]
- [Mood 2]

---

## Especificação

### Display Font

| Propriedade | Valor |
|-------------|-------|
| Família | [Nome] |
| Pesos | 400, 700 |
| URL | [Link] |

### Body Font

| Propriedade | Valor |
|-------------|-------|
| Família | [Nome] |
| Pesos | 400, 500 |
| URL | [Link] |

---

## Usage

### Hierarchy

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Display | 48px | 700 |
| H2 | Display | 36px | 700 |
| H3 | Display | 28px | 600 |
| Body | Body | 16px | 400 |
| Caption | Body | 14px | 400 |

---

## Exemplos

### Heading Example

```
H1: Display Bold 48px
H2: Display Bold 36px
H3: Display SemiBold 28px
```

### Body Example

```
Body text: Body Regular 16px / 1.6
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

---

## CSS

```css
:root {
  --font-display: 'Display Font', [fallback];
  --font-body: 'Body Font', [fallback];
}

h1, h2, h3 {
  font-family: var(--font-display);
}

body {
  font-family: var(--font-body);
}
```

---

## Alternatives

| Alternativa | Quando Usar |
|-------------|-------------|
| [Alt 1] | [Caso] |
| [Alt 2] | [Caso] |

---

## Metadata

| Campo | Valor |
|-------|-------|
| Status | 🟢 Approved |
| Created | [Data] |
| Updated | [Data] |
| Review | [Data] |

---

## Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Designer |  |  |  |
| Lead |  |  |  |
| Dev |  |  |  |
```