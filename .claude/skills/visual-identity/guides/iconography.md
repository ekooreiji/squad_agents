# Iconography

Guia para criar e implementar sistema de ícones de marca.

---

## 1. Sistema de Ícones

### 1.1 Estilos

| Estilo | Características | Exemplo |
|--------|--------------|----------|
| **Line** | Contornos, strokes | Feather |
| **Filled** | Sólido, filled | Material |
| **Duotone** | Dois tons | Stripe |
| **3D** | Profundidade | Discord |

### 1.2 Princípios

- Consistência de stroke (2px padrão)
- Consistência de corner radius
- Consistência de size grid (24px)
- Consistência de optical balance

---

## 2. Grid de Ícones

### 2.1 Estrutura

```
┌─────────────────────┐
│                     │
│    ╱╲     ╱╲    │  ← 2px margin
│   ╱  ╲   ╱  ╲   │
│  ╱    ╲ ╱    ╲  │  
│ ────────────────   │
│  ╱    ╲╱    ╲  │
│  ╱  ╱╲╲╲  ╲  │
│ ╱         ╲    ╲  │
│                 │
│     20x20       │  ← 20px área de design
│    (24px grid)   │
└─────────────────────┘
```

### 2.2 Tamanhos Padrão

| Size | Uso |
|------|-----|
| 16px | Inline text |
| 20px | Small UI |
| 24px | Standard |
| 32px | Large |
| 48px | Hero |

---

## 3. Cores de Ícones

### 3.1 Cores Permitidas

| Uso | Cor |
|-----|-----|
| Primary | brand-primary |
| Secondary | brand-secondary |
| Neutral | neutral-500 |
| Inverse | white |

### 3.2 Estados

```
Default   → neutral-500
Hover     → brand-primary
Active    → brand-primary-dark
Disabled  → neutral-300
```

---

## 4. Biblioteca Recomendada

| Biblioteca | Estilo | Uso |
|-----------|--------|-----|
| Feather Icons | Line | Moderno |
| Heroicons | Line/Filled | UI |
| Phosphor | Multiple | Flexível |
| Material Icons | Filled | Google |

---

## Cross-refs

- [logo-design.md](logo-design.md)
- [color-system.md](color-system.md)