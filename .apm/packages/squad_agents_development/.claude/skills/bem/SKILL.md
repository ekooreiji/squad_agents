---
name: bem
description: Skill de BEM (Block Element Modifier) para nomenclatura CSS
---

# BEM Skill

Metodologia de nomenclatura CSS.

---

## Visão Geral

BEM ensina:

- Nomenclatura clara
- Estrutura hierárquica
- Reutilização
- Comparações com outras metodologias

---

## Guias

- `guides/intro-bem.md` - Conceitos
- `guides/block.md` - Blocks
- `guides/element.md` - Elements
- `guides/modifier.md` - Modifiers
- `guides/naming.md` - Naming
- `guides/examples.md` - Exemplos

---

## Templates

- `templates/bem-patterns.md` - Padrões

---

## Checklists

- `checklists/bem-validation.md` - Checklist

---

## Skills Relacionadas

| Skill | Quando usar |
|-------|-------------|
| [bootstrap](../bootstrap/SKILL.md) | UI Framework |
| [atomic-design](../atomic-design/SKILL.md) | Metodologia |

---

## Estrutura

```
bem/
├── guides/
├── templates/
└── checklists/
```

---

## Conceitos

| Conceito | Descrição | Exemplo |
|----------|----------|--------|
| Block | Componente | .btn |
| Element | Parte | .btn__text |
| Modifier | Variação | .btn--primary |

---

## Comparações

| Metodologia | Prós | Contras |
|-------------|------|---------|
| BEM | Estrutura clara | Nomes longos |
| CSS Modules | Escopo local | Build |
| SMACSS | Organizado | Flexível |