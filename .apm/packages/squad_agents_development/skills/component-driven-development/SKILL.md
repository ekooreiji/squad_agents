---
name: component-driven-development
description: Skill de CDD para desenvolvimento baseado em componentes
---

# Component-Driven Development Skill

Metodologia de desenvolvimento baseada em componentes.

---

## Visão Geral

CDD ensina:

- Componentes first
- API de componentes
- Composição
- Design tokens
- Tooling

---

## Guias

- `guides/intro-cdd.md` - Conceitos
- `guides/components.md` - Componentes
- `guides/component-api.md` - API
- `guides/composition.md` - Composição
- `guides/design-tokens.md` - Tokens
- `guides/tooling.md` - Ferramentas

---

## Templates

- `templates/cdd-patterns.md` - Padrões

---

## Checklists

- `checklists/cdd-validation.md` - Checklist

---

## Skills Relacionadas

| Skill | Quando usar |
|-------|-------------|
| [atomic-design](../atomic-design/SKILL.md) | Hierarquia |
| [bem](../bem/SKILL.md) | Naming |

---

## Estrutura

```
component-driven-development/
├── guides/
├── templates/
└── checklists/
```

---

## Diferenças

| CDD | Atomic Design |
|------|------------|
| foco: componentes | foco: hierarquia |
| props/API | naming |
| versionável | instâncias |

---

## Origem

Netflix, Google (anos 2010)