# Typography Validation Checklist

Checklist para validar sistema tipográfico.

---

## 1. Fundamentos

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Fonte definida para display | [ ] | |
| 2 | Fonte definida para body | [ ] | |
| 3 | Fonte definida para código | [ ] | |
| 4 | Fallbacks definidos | [ ] | |
| 5 | Licença verificada | [ ] | |

---

## 2. Hierarchy

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Escala definida | [ ] | |
| 2 | H1-H6 configurados | [ ] | |
| 3 | Body configurado | [ ] | |
| 4 | Caption configurado | [ ] | |
| 5 | Responsive scale | [ ] | |

---

## 3. Espaçamento

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Line height body (1.5+) | [ ] | |
| 2 | Line height títulos (1.2-1.4) | [ ] | |
| 3 | Letter spacing适当 | [ ] | |
| 4 | Margens entre elementos | [ ] | |
| 5 | max-width parágrafo (65ch) | [ ] | |

---

## 4. Legibilidade

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Tamanho mínimo 16px | [ ] | |
| 2 | Contraste 4.5:1 | [ ] | |
| 3 | Não usar script para body | [ ] | |
| 4 | Alinhamento left/justify | [ ] | |
| 5 | Não tudo maiúsculas | [ ] | |

---

## 5. Performance

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Formato WOFF2 | [ ] | |
| 2 | font-display: swap | [ ] | |
| 3 | Preload fonts principais | [ ] | |
| 4 | Subset se necessário | [ ] | |
| 5 | Arquivo otimizado | [ ] | |

---

## 6. Acessibilidade

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | WCAG 1.4.3 (AA) | [ ] | |
| 2 | WCAG 1.4.4 (AA) | [ ] | |
| 3 | WCAG 1.4.12 (AA) | [ ] | |
| 4 | Reduced motion | [ ] | |
| 5 | High contrast | [ ] | |

---

## 7. Responsividade

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Mobile scale | [ ] | |
| 2 | Tablet scale | [ ] | |
| 3 | Breakpoints | [ ] | |
| 4 | clamp() ou media queries | [ ] | |
| 5 | touch targets | [ ] | |

---

## 8. CSS

| # | Item | Status | Observação |
|---|------|--------|----------|
| 1 | Custom properties | [ ] | |
| 2 | Units (rem) | [ ] | |
| 3 | Media queries | [ ] | |
| 4 | Font display swap | [ ] | |
| 5 | Fallback stack | [ ] | |

---

## Score Final

| Seção | Score |
|------|-------|
| Fundamentos | _/5 |
| Hierarchy | _/5 |
| Espaçamento | _/5 |
| Legibilidade | _/5 |
| Performance | _/5 |
| Acessibilidade | _/5 |
| Responsividade | _/5 |
| CSS | _/5 |
| **Total** | _/40 |

---

## Ações

| Prioridade | O que fazer |
|-----------|-------------|
| Crítica | Corrigir imediatamente |
| Alta | Corrigir na próxima sprint |
| Média | Planejar |
| Baixa | Manter como está |

---

## Ferramentas de Teste

| Ferramenta | Teste |
|-----------|------|
| Google Lighthouse | Performance, A11y |
| axe DevTools | Acessibilidade |
| WebAIM Contrast | Contraste |
| Typewolf | Inspiração |