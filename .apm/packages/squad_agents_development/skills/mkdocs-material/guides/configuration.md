# MkDocs Configuration

Guia completo de configuração do mkdocs.yml.

---

## 1. Estrutura Completa

### 1.1 mkdocs.yml Completo

```yaml
site_name: My Documentation
site_url: https://docs.myproject.com/
site_description: Documentation for My Project
site_author: My Name

repo_url: https://github.com/my-org/my-project
repo_name: my-org/my-project

# Navigation
nav:
  - Home: index.md
  - Getting Started:
      - Installation: getting-started/installation.md
      - Configuration: getting-started/configuration.md
  - API Reference:
      - API: api/index.md
      - Endpoints:
          - Users: api/users.md
          - Orders: api/orders.md
  - Guides:
      - deployment.md
      - troubleshooting.md
  - CHANGELOG: changelog.md

# Theme (Material)
theme:
  name: material
  language: en
  palette:
    primary: indigo
    accent: blue
    media: "(prefers-color-scheme: dark)"
  font:
    - sans: Roboto
    - mono: Roboto Mono
  icon:
    repo: fontawesome/brands/github

  features:
    - navigation.instant
    - navigation.tracking
    - navigation.tabs
    - navigation.sections
    - navigation.top
    - search.highlight
    - search.share
    - search.preprocessing
    - toc.integrate

# Markdown Extensions
markdown_extensions:
  # Admonitions
  - admonition
  - pymdownx.details
  - pymdownx.allure
  - pymdownx.alerts
  
  # Code
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: span
      pygments_lang_class: highlight-all
  - pymdownx.inlinehilite
  - pymdownx.snippets:
      auto_append_on_include: false
  
  # Tabs
  - pymdownx.tabbed:
      alternate_style: true
  
  # Tables
  - tables
  - fenced_cube
  
  # MkDocs
  - meta
  - toc:
      permalink: true
  - attr_list

# Plugins
plugins:
  - search:
      separator: '[\s\-\.]+'
      prebuild_index: true
  - roam:
      alias: "@/docs"
  - macros
  - mermaid2:
      version: "10.8.0"

# Footer
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/my-org/my-project
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/myproject

copyright: "Copyright &copy; 2024 My Project"

# Extra CSS/JS
extra_css:
  - stylesheets/extra.css

extra_javascript:
  - javascripts/extra.js
```

---

## 2. Navegação

### 2.1 Navegação Simples

```yaml
nav:
  - index.md
  - installation.md
  - api.md
```

### 2.2 Navegação com Sections

```yaml
nav:
  - Home: index.md
  - Getting Started:
      - introduction.md
      - installation.md
      - configuration.md
  - API Reference:
      - api/users.md
      - api/orders.md
```

### 2.3 Navegação com Subtitles

```yaml
nav:
  - Home: index.md
  - Getting Started:
      - Introduction: getting-started/intro.md
      - Installation: getting-started/install.md
  - "API Reference":
      - "Users API": api/users.md
      - "Orders API": api/orders.md
```

---

## 3. Plugins

### 3.1 Search

```bash
pip install mkdocs-material search
```

```yaml
plugins:
  - search:
      separator: '[\s\-\.]+'
      prebuild_index: true
```

### 3.2 Mermaid

```bash
pip install mkdocs-mermaid2-plugin
```

```yaml
plugins:
  - mermaid2:
      version: "10.8.0"
```

### 3.3 MiniMACROS

```bash
pip install mkdocs-macros-plugin
```

```yaml
plugins:
  - macros
```

---

## 4. Variáveis

### 4.1 Variáveis de Site

```yaml
extra:
  version: "2.0.0"
  release: "stable"
```

### 4.2 Variáveis no Template

```markdown
# Current version: {{ config.extra.version }}
# Release: {{ config.extra.release }}
```

---

## 5. Multi-idioma

### 5.1 Configurar Idiomas

```yaml
nav:
  - index.md
  - "pt-BR":
      - translation.md
```

### 5.2 i18n Plugin

```bash
pip install mdx-i18n
```

```yaml
plugins:
  - i18n:
      default_language: en
      languages:
        en: English
        pt-BR: Português
```

---

## 6. Validação

### 6.1 Verificar Configuração

```bash
mkdocs.yml
mkdocs build --strict
```

### 6.2 Lint

```yaml
# Enable strict mode
strict: true
```

---

## Referências

- [MkDocs Configuration](https://www.mkdocs.org/user-guide/configuration/)
- [Material Theme Options](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/)