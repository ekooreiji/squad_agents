# Template: Color System

Template para criar sistema de cores completo.

---

## Estrutura

```markdown
---
title: Color System - [Nome do Projeto]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Color System: [Nome do Projeto]

## Overview

| Campo | Valor |
|------|-------|
| Projeto | [Nome] |
| Versão | 1.0.0 |
| last Updated | YYYY-MM-DD |

---

## 1. Base Colors

### Brand

| Color | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary | #XXXXXX | R, G, B | main brand |
| Secondary | #XXXXXX | R, G, B | support |
| Accent | #XXXXXX | R, G, B | highlights |

---

## 2. Extended Palette

### 2.1 Primary Scale

| Token | Hex | RGB |
|------|-----|-----|
| primary-50 | #XXXXXX | |
| primary-100 | #XXXXXX | |
| primary-200 | #XXXXXX | |
| primary-300 | #XXXXXX | |
| primary-400 | #XXXXXX | |
| primary-500 | #XXXXXX | |
| primary-600 | #XXXXXX | |
| primary-700 | #XXXXXX | |
| primary-800 | #XXXXXX | |
| primary-900 | #XXXXXX | |

### 2.2 Neutral Scale (same for secondary/accent)

---

## 3. Semantic Colors

| Token | Hex | Light Mode | Dark Mode |
|------|-----|----------|----------|
| success | #22C55E | |
| warning | #EAB308 | |
| error | #EF4444 | |
| info | #3B82F6 | |

---

## 4. Dark Mode

### Color Adjustments

| Token | Light | Dark |
|-------|-------|------|
| bg-primary | #FFFFFF | #0F172A |
| bg-secondary | #F5F5F5 | #1E293B |
| text-primary | #171717 | #F8FAFC |
| text-secondary | #525252 | #CBD5E1 |

---

## 5. Usage by Context

### 5.1 Typography

| Context | Color | Contrast |
|--------|-------|----------|
| H1 | neutral-900 | 21:1 |
| Body | neutral-700 | 7:1 |
| Caption | neutral-500 | 4.5:1 |

### 5.2 Components

| Component | Color | State |
|-----------|-------|-------|
| Button Primary | primary-600 | default |
| Button Primary | primary-700 | hover |
| Button Primary | primary-800 | pressed |
| Input Border | neutral-300 | default |
| Input Border | primary-500 | focus |

---

## 6. Accessibility

| Check | Status |
|-------|--------|
| Text contrast 4.5:1 | [x] |
| Large text 3:1 | [x] |
| UI components 3:1 | [x] |
| Color blind safe | [x] |

---

## 7. Implementation

### 7.1 CSS Variables

```css
:root {
  /* Base */
  --color-primary: #XXXXXX;
  --color-primary-light: #XXXXXX;
  --color-primary-dark: #XXXXXX;
  
  /* Semantic */
  --color-success: #XXXXXX;
  --color-warning: #XXXXXX;
  --color-error: #XXXXXX;
  
  /* Surface */
  --bg-primary: #XXXXXX;
  --bg-secondary: #XXXXXX;
  
  /* Text */
  --text-primary: #XXXXXX;
  --text-secondary: #XXXXXX;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #XXXXXX;
    --text-primary: #XXXXXX;
  }
}
```

### 7.2 JSON Tokens

```json
{
  "color": {
    "primary": {
      "value": "#XXXXXX",
      "type": "color"
    }
  }
}
```

---

## Sign-offs

| Role | Name | Date | Status |
|------|------|------|--------|
| Designer | | | [ ] |
| Accessibility | | | [ ] |
| Dev Lead | | | [ ] |
```