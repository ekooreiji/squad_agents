---
name: atomic-design
description: Skill de Atomic Design para metodologias de design de interfaces
---

# Atomic Design Skill

Metodologia de design de interfaces baseada em química.

---

## Visão Geral

Atomic Design ensina:

- Estrutura hierárquica
- Componentes reutilizáveis
- Naming conventions
- Workflow completo

---

## Guias

### Hierarquia

- `guides/intro-atomic.md` - Conceitos
- `guides/atoms.md` - Átomos
- `guides/molecules.md` - Moléculas
- `guides/organisms.md` - Organismos
- `guides/templates.md` - Templates
- `guides/pages.md` - Páginas

### Processo

- `guides/naming.md` - Naming
- `guides/workflow.md` - Processo

---

## Templates

- `templates/atomic-patterns.md` - Padrões

---

## Checklists

- `checklists/atomic-validation.md` - Checklist

---

## Skills Relacionadas

| Skill | Quando usar |
|-------|-------------|
| [bootstrap](../bootstrap/SKILL.md) | UI Framework |
| [css-animations](../css-animations/SKILL.md) | Animações |

---

## Estrutura

```
atomic-design/
├── guides/
│   ├── intro-atomic.md
│   ├── atoms.md
│   ├── molecules.md
│   ├── organisms.md
│   ├── templates.md
│   ├── pages.md
│   ├── naming.md
│   └── workflow.md
├── templates/
│   └── atomic-patterns.md
└── checklists/
    └── atomic-validation.md
```

---

## Níveis

| Nível | Descrição | Exemplo |
|-------|----------|--------|
| Átomos | Elementos básicos | Button, Input |
| Moléculas | Combo de átomos | Search Form, Card |
| Organismos | Componentes complexos | Header, Footer |
| Templates | Layouts | Blog, Dashboard |
| Páginas | Instâncias completas | Home, About |