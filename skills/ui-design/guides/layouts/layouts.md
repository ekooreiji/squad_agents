# Layouts e Grids

## Introdução

Guia para criação de layouts responsivos e grids.

---

## Sistema de Grid

### Grid de 12 Colunas

| Colunas | Largura |
|---------|---------|
| 1 | 8.33% |
| 2 | 16.66% |
| 3 | 25% |
| 4 | 33.33% |
| 6 | 50% |
| 8 | 66.66% |
| 12 | 100% |

### Gutter (Espaçamento)
- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

### Margin
- Mobile: 16px
- Tablet: 32px
- Desktop: 48px

---

## Breakpoints

| Dispositivo | Largura | Colunas |
|-------------|---------|---------|
| Mobile | < 768px | 4 |
| Tablet | 768-1024px | 8 |
| Desktop | > 1024px | 12 |

---

## Layouts Comuns

### Header Fixo
```
┌─────────────────────┐
│       Header       │
├─────────────────────┤
│                     │
│      Conteúdo       │
│                     │
└─────────────────────┘
```

### Com Sidebar
```
┌──────┬──────────────┐
│      │             │
│ Side │  Conteúdo   │
│ bar  │             │
│      │             │
└──────┴──────────────┘
```

### Com Footer
```
┌─────────────────────┐
│                     │
│      Conteúdo       │
│                     │
├─────────────────────┤
│       Footer        │
└─────────────────────┘
```

### Dashboard Layout
```
┌─────────────────────┐
│        Header       │
├──────┬──────────────┤
│      │              │
│ Side │   Cards/    │
│ bar  │   Grid      │
│      │              │
└──────┴──────────────┘
```

---

## Layouts de Conteúdo

### Centered
- Max-width: 1200px
- Margin: auto
- Padding: 24px

### Full Width
- Width: 100%
- Padding: 16px mobile, 48px desktop

### Boxed
- Background: white
- Border-radius: 8px
- Box-shadow

---

## Mobile First

1. Desenvolva para mobile primeiro
2. Expanda para tablet
3. Adicione desktop

---

## Boas Práticas

- Usar grid consistente
- Manter alinhamento
- Respeitar breakpoints
- Testar em dispositivos reais