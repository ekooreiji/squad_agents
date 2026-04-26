# Animation Spec Template

Template para documentar especificações de animação.

---

## Estrutura

```markdown
---
title: Animation Spec - [Nome da Animação]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# [Nome da Animação]

## Visão Geral

| Campo | Valor |
|-------|-------|
| Tipo | [Transition/Feedback/Decorative] |
| Duração | [ms] |
| Easing | [ease-out] |

---

## Trigger

| Evento | Ação |
|--------|------|
| [Click/Hover/Load] | [Descrição] |

---

## Specs

### CSS

```css
.class {
  animation: [name] [duration] [easing];
}

@keyframes [name] {
  from { [valor inicial] }
  to { [valor final] }
}
```

---

## Variants

| State | Specification |
|-------|--------------|
| Default | - |
| Hover | [Values] |
| Active | [Values] |
| Disabled | [Values] |

---

## Timing

| Fase | Time | Propriedade |
|------|------|--------------|
| 0% | start | value |
| 50% | mid | value |
| 100% | end | value |

---

## Testes

| Device | Status |
|--------|--------|
| Mobile | [ ] |
| Tablet | [ ] |
| Desktop | [ ] |

---

## Notes

[Notas adicionales]
```