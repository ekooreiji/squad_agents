# Color Validation Checklist

Checklist para validar sistemas de cores.

---

## 1. Estrutura

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Primary definida | [ ] |
| 2 | Secondary definida | [ ] |
| 3 | Accent definida | [ ] |
| 4 | Escala 50-900 | [ ] |
| 5 | Neutrals definidos | [ ] |
| 6 | Semantic colors | [ ] |

---

## 2. Contraste

| # | Item | Status | Ratio |
|---|------|--------|-------|
| 1 | Texto principal | [ ] | 4.5:1+ |
| 2 | Texto secundário | [ ] | 4.5:1+ |
| 3 | Texto em botões | [ ] | 4.5:1+ |
| 4 | Ícones | [ ] | 3:1+ |
| 5 | Bordas de inputs | [ ] | 3:1+ |

---

## 3. Acessibilidade

| # | Item | Status |
|---|------|--------|
| 1 | WCAG AA texto | [ ] |
| 2 | WCAG AA UI | [ ] |
| 3 | WCAG AAA (se aplicável) | [ ] |
| 4 | Não depende só de cor | [ ] |
| 5 | Funciona para daltônicos | [ ] |

---

## 4. Sistema

| # | Item | Status |
|---|------|--------|
| 1 | Limite de 10-12 cores | [ ] |
| 2 | Nomenclatura consistente | [ ] |
| 3 | CSS variables definidas | [ ] |
| 4 | Fallbacks definidos | [ ] |
| 5 | Dark mode | [ ] |

---

## 5. Usage

| # | Item | Status |
|---|------|--------|
| 1 | Uso claro definido | [ ] |
| 2 | Não mais de 3 cores primary | [ ] |
| 3 | Não combinar mais de 4 cores | [ ] |
| 4 | semantic colors usage | [ ] |
| 5 | Consistent application | [ ] |

---

## 6. Implementation

| # | Item | Status |
|---|------|--------|
| 1 | HSL/RGB consistentes | [ ] |
| 2 | Nomes semânticos | [ ] |
| 3 | Documentação | [ ] |
| 4 | Export functionality | [ ] |
| 5 | Version control | [ ] |

---

## Score Final

| Seção | Score |
|------|-------|
| Estrutura | _/6 |
| Contraste | _/5 |
| Acessibilidade | _/5 |
| Sistema | _/5 |
| Usage | _/5 |
| Implementation | _/5 |
| **Total** | _/31 |

---

## Ações

| Prioridade | O que fazer |
|-----------|-------------|
| Critical | Corrigir imediatamente |
| High | Corrigir na sprint |
| Medium | Planejar |
| Low | Manter como está |