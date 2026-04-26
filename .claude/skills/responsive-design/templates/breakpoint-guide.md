# Breakpoint Guide

Template para documentar breakpoints do projeto.

---

## Estrutura

```markdown
---
title: Breakpoint Guide - [Nome do Projeto]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Breakpoint Guide: [Nome]

## Visão Geral

| Breakpoint | Min-width | Max-width | Dispositivo | Colunas |
|-----------|-----------|-----------|------------|---------|
| xs | - | 575px | Small phone | 4 |
| sm | 576px | 767px | Large phone | 4 |
| md | 768px | 991px | Tablet | 8 |
| lg | 992px | 1199px | Desktop | 12 |
| xl | 1200px | 1399px | Large desktop | 12 |
| xxl | 1400px | - | XLarge desktop | 12 |

---

## Breakpoints Detalhados

### xs: < 576px (Small Phones)

```css
/* Example styles */
.container { padding: 0 1rem; }
h1 { font-size: 2rem; }
```

### sm: 576-767px (Large Phones)

```css
.container { padding: 0 1.5rem; }
h1 { font-size: 2.25rem; }
```

### md: 768-991px (Tablets)

```css
.container { padding: 0 2rem; }
h1 { font-size: 2.5rem; }
```

### lg: 992-1199px (Desktop)

```css
.container { padding: 0 2.5rem; }
h1 { font-size: 3rem; }
```

### xl: 1200-1399px (Large Desktop)

```css
.container { padding: 0 3rem; max-width: 1400px; }
```

### xxl: ≥ 1400px (XL Desktop)

```css
.container { max-width: 1600px; }
```

---

## Gutter e Margin

| Breakpoint | Gutter | Margin |
|-----------|--------|--------|
| xs-sm | 16px | 16px |
| md | 24px | 24px |
| lg-xl | 32px | 48px |

---

## Testes

| Breakpoint | Testado |Issues |
|-----------|--------|-------|
| xs | [ ] | |
| sm | [ ] | |
| md | [ ] | |
| lg | [ ] | |
| xl | [ ] | |
| xxl | [ ] | |
```