# Mobile-First

Guia da abordagem mobile-first para design responsivo.

---

## 1. O que é Mobile-First

Mobile-first é uma abordagem onde você desenvolve primeiro para mobile e depois escala para telas maiores.

---

## 2. Por que Mobile-First

### 2.1 Vantagens

| Vantagem | Descrição |
|----------|----------|
| **Simplicidade** | Começa simples, adiciona complexidade |
| **Performance** | Forced a optimize for slow networks |
| **UX** | Focused na essência |
| **Progressive enhancement** | Adiciona features para maiores telas |

### 2.2 Contraste Desktop-First

```
DESKTOP-FIRST              MOBILE-FIRST
────────────              ────────────
Desktop                 Mobile
    ↓                       ↓
Tablet                 Tablet  
    ↓                       ↓
Mobile                  Desktop

Complex → Simple          Simple → Complex
```

---

## 3. Processo Mobile-First

### 3.1 Etapas

```
PASSO 1: Design para mobile (的核心功能)
          │
          ▼
PASSO 2: Testar e refinar
          │
          ▼
PASSO 3: Escalar para tablet (adicionar)
          │
          ▼
PASSO 4: Escalar para desktop (expandir)
```

### 3.2 CSS Structure

```css
/* Base - Mobile (default) */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

---

## 4. Content Prioritization

### 4.1 Hierarquia Mobile

| Prioridade | Conteúdo |
|-----------|---------|
| 1 | Main action (CTA) |
| 2 | Essential info |
| 3 | Secondary actions |
| 4 | Navigation |
| 5 | Footer |

### 4.2 Progressive Disclosure

```
MOBILE                   DESKTOP
══════                  ══════
[Ver mais ▼]           ──────────────────
                Menu expandido por padrão
                ───────────────────
[Mais +]        →         Tudo visível
```

---

## 5. Princípios

- **O que é essencial?** - Focus no.core
- **O que pode esperar?** - Adicionar para telas maiores
- **O que oculta?** - Progressive disclosure
- **Como simplificar?** - Minimize elementos

---

## Cross-refs

- [breakpoints.md](breakpoints.md) - Breakpoints
- [responsive-components.md](responsive-components.md) - Componentes