# Naming Conventions - Atomic Design

Convenções de nomenclatura para Atomic Design.

---

## Estrutura de Pastas

```
src/
├── atoms/
│   ├── button/
│   │   ├── button.css
│   │   └── button.html
│   └── input/
│       ├── input.css
│       └── input.html
├── molecules/
│   ├── search-form/
│   │   ├── search-form.css
│   │   └── search-form.html
│   └── card/
│       ├── card.css
│       └── card.html
├── organisms/
│   ├── header/
│   │   ├── header.css
│   │   └── header.html
│   └── footer/
├── templates/
│   └── blog/
└── pages/
    └── home/
```

---

## Naming CSS

### Módulos

```css
/* BEM-like */
.atom-button {}
.atom-input {}
.molecule-card {}
.organism-header {}
```

---

## Padrão de Nomeclatura

| Nível | Prefixo | Exemplo |
|-------|--------|--------|
| Átomo | atom- | .atom-button |
| Molécula | molecule- | .molecule-card |
| Organismo | organism- | .organism-header |
| Template | template- | .template-blog |
| Página | page- | .page-home |

---

## Nomes de Arquivos

```
button.css
button.js
button.stories.jsx
button.test.js
```

---

## Conventions

- Kebab-case
- Sem abreviações
- Descritivo