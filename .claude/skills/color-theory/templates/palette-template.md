# Template: Color Palette

Template para documentar paletas de cores.

---

## Estrutura

```markdown
---
title: Color Palette - [Nome do Projeto]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Color Palette: [Nome do Projeto]

## Overview

| Item | Valor |
|------|-------|
| Primary | [Hex] |
| Secondary | [Hex] |
| Accent | [Hex] |
| Version | 1.0.0 |

## Brand Colors

### Primary

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| primary-500 | #XXXXXX | R, G, B | [Usage] |
| primary-600 | #XXXXXX | R, G, B | [Usage] |
| primary-700 | #XXXXXX | R, G, B | [Usage] |

### Secondary

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| secondary-500 | #XXXXXX | R, G, B | [Usage] |

---

## Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| success | #XXXXXX | [Usage] |
| warning | #XXXXXX | [Usage] |
| error | #XXXXXX | [Usage] |
| info | #XXXXXX | [Usage] |

---

## Neutral Colors

| Token | Hex | Usage |
|-------|-----|-------|
| neutral-50 | #XXXXXX | [Usage] |
| neutral-100 | #XXXXXX | [Usage] |
| neutral-200 | #XXXXXX | [Usage] |
| neutral-300 | #XXXXXX | [Usage] |
| neutral-400 | #XXXXXX | [Usage] |
| neutral-500 | #XXXXXX | [Usage] |
| neutral-600 | #XXXXXX | [Usage] |
| neutral-700 | #XXXXXX | [Usage] |
| neutral-800 | #XXXXXX | [Usage] |
| neutral-900 | #XXXXXX | [Usage] |

---

## Usage Guide

| Element | Color | Ratio |
|---------|-------|-------|
| Primary text | neutral-900 | [Ratio] |
| Secondary text | neutral-600 | [Ratio] |
| Primary button | primary-600 | [Ratio] |
| Background | neutral-50 | - |

---

## CSS Variables

```css
:root {
  --primary-500: #XXXXXX;
  --primary-600: #XXXXXX;
  --primary-700: #XXXXXX;
  --secondary-500: #XXXXXX;
  --accent-500: #XXXXXX;
  --success: #XXXXXX;
  --warning: #XXXXXX;
  --error: #XXXXXX;
  --info: #XXXXXX;
}
```

---

## Download

- [Figma File]
- [CSS Variables]
- [JSON Tokens]

---

## Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Designer | | | [ ] |
| Lead | | | [ ] |
| Accessibility | | | [ ] |
```