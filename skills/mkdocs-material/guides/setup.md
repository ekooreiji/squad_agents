# MkDocs Material Setup

Guia completo para configurar MkDocs Material do zero.

---

## 1. Instalação

### 1.1 Requisitos

| Requisito | Versão Mínima |
|----------|-------------|
| Python | 3.8+ |
| pip | 20.0+ |

### 1.2 Instalar MkDocs e Material

```bash
pip install mkdocs-material
```

### 1.3 Verificar Instalação

```bash
mkdocs --version
# mkdocs, version 1.5.0
```

---

## 2. Criar Projeto

### 2.1 Novo Projeto

```bash
mkdocs new my-docs
cd my-docs
```

### 2.2 Estrutura Criada

```
my-docs/
├── docs/
│   └── index.md
├── mkdocs.yml
└── site/ (após build)
```

### 2.3 Preview Local

```bash
mkdocs serve
# http://127.0.0.1:8000
```

---

## 3. Configuração Inicial

### 3.1 mkdocs.yml Básico

```yaml
site_name: My Documentation
site_url: https://my-docs.com/
repo_url: https://github.com/my-org/my-docs
repo_name: my-org/my-docs

theme:
  name: material
```

### 3.2 Habilitar Recursos

```yaml
theme:
  name: material
  palette:
    primary: indigo
    accent: blue
  features:
    - navigation.tabs
    - navigation.sections
    - search.suggest

markdown_extensions:
  - admonition
  - codehilite
```

---

## 4. Extensões Recomendadas

### 4.1 Instalar Extras

```bash
pip install mkdocs-material[pymdown]
```

### 4.2 Extensões Úteis

```yaml
markdown_extensions:
  # Admonitions (note, tip, warning)
  - admonition
  - pymdownx.details
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
```

---

## 5. Arquivo de Conteúdo

### 5.1 docs/index.md

```markdown
# Welcome

Welcome to the documentation!

## Getting Started

- [Installation](installation.md)
- [Configuration](configuration.md)

## API

- [Reference](api/reference.md)
```

### 5.2 Frontmatter

```markdown
---
title: Page Title
description: Page description
---

# Content starts here
```

---

## 6. Build e Deploy

### 6.1 Build Local

```bash
mkdocs build
```

### 6.2 Limpar Cache

```bash
mkdocs build --clean
```

---

## Próximos Passos

- [configuration.md](configuration.md) - Configuração completa
- [theming.md](theming.md) - Customizar tema
- [deploy.md](deploy.md) - Deploy