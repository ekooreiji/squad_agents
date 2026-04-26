# Template: Multi-Language

Template para documentação com múltiplos idiomas usando MkDocs Material.

---

## Estrutura de Diretórios

```
docs/
├── index.en.md
├── index.pt-BR.md
├── index.es.md
├── getting-started/
│   ├── installation.en.md
│   ├── installation.pt-BR.md
│   └── installation.es.md
```

---

## mkdocs.yml - i18n

```yaml
plugins:
  - i18n:
      default_language: en
      languages:
        en: English
        pt-BR: Português
        es: Español
      nav_translations:
        en:
          Home: Home
          Guide: Guide
        pt-BR:
          Home: Início
          Guide: Guia
        es:
          Home: Inicio
          Guide: Guía
```

---

## Arquivo em Inglês

```markdown
---
title: Getting Started
description: Get started with the project
---

# Getting Started

Welcome to the documentation!

## Installation

Follow these steps to install...

## Next Steps

- [Configuration](configuration.md)
```

---

## Arquivo em Português

```markdown
---
title: Primeiros Passos
description: Comece a usar o projeto
---

# Primeiros Passos

Bem-vindo à documentação!

## Instalação

Siga estes passos para instalar...

## Próximos Passos

- [Configuração](configuration.md)
```

---

## Arquivo em Español

```markdown
---
title: Primeros Pasos
description: Comienza a usar el proyecto
---

# Primeros Pasos

¡Bienvenido a la documentación!

## Instalación

Sigue estos pasos para instalar...

## Siguientes Pasos

- [Configuración](configuration.md)
```

---

## Navegação com Idiomas

```yaml
nav:
  - index.en.md
  - "Português":
      - index.pt-BR.md
  - "Español":
      - index.es.md
```

---

## Links Entre Idiomas

```markdown
[English version](./index.en.md)
[Versão em Português](./index.pt-BR.md)
[Versión en Español](./index.es.md)
```

---

## Tradução de Strings

### Admonitions

```markdown
!!! note "Note (EN)"
    English content.

!!! note "Nota (PT-BR)"
    Conteúdo em português.

!!! note "Nota (ES)"
    Contenido en español.
```

---

## Variáveis por Idioma

```yaml
extra:
  versions:
    en:
      changelog: CHANGELOG
    pt-BR:
      changelog: CHANGELOG
```

---

## Botão de Idioma

```yaml
theme:
  language_selector: true
```

---

## Cross-refs

- [doc-page.md](doc-page.md) - Template genérico
- [api-doc.md](api-doc.md) - Template de API