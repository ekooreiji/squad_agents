# Prototyping Tools

Guia completo de ferramentas de prototipagem UI/UX.

---

## 1. Ferramentas Principais

### 1.1 Figma

| Recurso | Descrição |
|---------|-----------|
| melhor para | UI design, prototyping, collaboration |
| Plataforma | Web + Desktop |
| Custo | Freemium (features limitadas) |

**Atalhos Essenciais:**

| Atalho | Função |
|--------|--------|
| Space + Drag | Pan |
| Cmd/Ctrl+D | Duplicate |
| Cmd/Ctrl+G | Group |
| Cmd/Ctrl+Shift+H | Hide |
| 1/2/3 | Preciso layers |
| Cmd/Ctrl+K | Quick action |

**Features:**

- Auto Layout
- Components
- Variants
- Prototyping
- Dev Mode

### 1.2 Sketch

| Recurso | Descrição |
|---------|-----------|
| melhor para | Mac-only UI design |
| Plataforma | macOS |
| Custo | Subscription |

### 1.3 Adobe XD

| Recurso | Descrição |
|---------|-----------|
| Status | Descontinuado (mar/2023) |
| Alternativa | Figma, Adobe dimensões |

---

## 2. Comparativo

| Feature | Figma | Sketch |
|----------|-------|---------|
| Collaboration | ✓ Real-time | ✗ |
| Platform | Web/Mac/Windows | Mac only |
| Prototyping | ✓ | ✓ |
| Developer Mode | ✓ | ✗ |
| Price | Freemium | Paid |

---

## 3. Workflow

### 3.1 Fluxo

```
1. Design System
   │ Create styles
   │ Create components
   │
2. Design
   │ Build screens
   │ Use components
   │
3. Prototype
   │ Link screens
   │ Add interactions
   │
4. Handoff
   │ inspect code
   └── Export assets
```

### 3.2 Estrutura de Projeto

```
File
├── Styles/
│   ├── Colors
│   ├── Typography
│   └── Effects
├── Components
│   ├── Buttons/
│   ├── Inputs/
│   └── Cards/
├── Screens
│   ├── Desktop/
│   ├── Mobile/
│   └── Tablet/
└── Prototypes
```

---

## Cross-refs

- [ui-ux-design/SKILL.md](../ui-ux-design/SKILL.md) - Wireframes
- [responsive-design/SKILL.md](../responsive-design/SKILL.md) - Layouts responsivos