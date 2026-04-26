---
name: documentation-docusaurus
description: Documentação com Docusaurus (v3)
---

# Docusaurus Documentation Skill

Guia completo para criar e manter documentação usando Docusaurus v3.

---

## Referências Cruzadas

| Skill | Ver | Conteúdo |
|-------|-----|---------|
| [js-airbnb-style](../js-airbnb-style/SKILL.md) | Code examples | JS/TS |
| [pep8-reference](../pep8-reference/SKILL.md) | Python docstrings | Python |
| [diagram-drawing](../diagram-drawing/SKILL.md) | Diagrams | Mermaid |

---

## 1. Introdução

### 1.1 O que é Docusaurus?

Framework do Facebook para criar **documentação** com Markdown/MDX, versionamento, search e i18n.

### 1.2 Features

| Feature | Descrição |
|---------|-----------|
| **Markdown/MDX** | Markdown com componentes React |
| **Versioning** | Multiple doc versions |
| **Search** | Algolia ou local |
| **i18n** | Internationalização |
| **Theming** | Customização completa |
| **Code Blocks** | Syntax highlighting |

---

## 2. Setup

### 2.1 Criar Projeto

```bash
npx create-docusaurus@latest my-docs classic

cd my-docs
npm install
```

### 2.2 Estrutura de Diretórios

```
my-docs/
├── docs/
│   ├── intro.md
│   ├── getting-started.md
│   ├── api/
│   │   ├── users.md
│   │   └── orders.md
│   └── guides/
│       ├── deployment.md
│       └── configuration.md
├── src/
│   ├── css/
│   │   └── custom.css
│   ├── pages/
│   │   └── en/
│   │       └── showcase.mdx
│   └── components/
│       └── HomepageFeatures/
├── static/
│   └── img/
├── babel.config.js
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── versions.json
```

---

## 3. Configuração

### 3.1 docusaurus.config.js

```javascript
module.exports = {
  title: 'My Documentation',
  tagline: 'Documentation for my project',
  url: 'https://my-docs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/my-org/my-docs/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'v2 (next)',
              path: 'next',
              banner: 'unreleased',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: 'Copyright © 2024',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/my-org/my-docs',
          position: 'right',
          className: 'github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'API Reference', to: '/docs/api/users' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/my-docs' },
            { label: 'Twitter', href: 'https://twitter.com/my-docs' },
          ],
        },
      ],
      copyright: 'Built with Docusaurus',
    },
    prism: {
      theme: 'vscDarkPlus',
      darkTheme: 'vscDarkPlus',
      additionalLanguages: ['ruby', 'yaml', 'toml', 'php'],
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 800,
        min: 400,
        multiplier: 2,
      },
    ],
    [
      'content-docs',
      {
        id: 'api',
        path: 'api-docs',
        routeBasePath: 'api',
      },
    ],
  ],
}
```

### 3.2 sidebars.js

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started',
        'installation',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'category',
          label: 'Users',
          items: ['api/users/get-user', 'api/users/create-user'],
        },
        {
          type: 'category',
          label: 'Orders',
          items: ['api/orders/get-order', 'api/orders/create-order'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/deployment',
        'guides/monitoring',
        'guides/troubleshooting',
      ],
    },
  ],
}
```

### 3.3 custom.css

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784d;
  --ifm-color-primary-darker: #277248;
  --ifm-font-family-base: system-ui, -apple-system, sans-serif;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #1a1a1a;
}

.navbar {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

.markdown > h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

---

## 4. Documentação MD

### 4.1 Documentação Básica

```markdown
---
id: intro
title: Introduction
sidebar_position: 1
---

# Introduction

Welcome to the documentation!

## Features

- Feature 1
- Feature 2
- Feature 3

:::note
This is an informational note.
:::

:::tip
This is a helpful tip.
:::

:::warning
This is a warning.
:::

:::danger
This is danger!
:::
```

### 4.2 Admonitions

| Type | Description |
|------|-------------|
| `note` | Informational notes |
| `tip` | Helpful tips |
| `info` | General info |
| `caution` | Caution warnings |
| `warning` | Important warnings |
| `danger` | Critical warnings |

```markdown
:::note
This is a note with **markdown** support.
:::

:::tip How to do this
This tip has a custom title.
:::
```

### 4.3 Code Blocks

````markdown
```javascript title="src/index.js"
const app = express()

app.get('/api/users', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

export default app
```

```python title="app.py"
from flask import Flask

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    users = User.find_all()
    return jsonify(users)
```
````

### 4.4 Tabs

```markdown
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install my-package
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add my-package
```

</TabItem>
</Tabs>
```

### 4.5 Details

```markdown
<details>
<summary>Click to expand</summary>

This content is hidden by default.

</details>
```

---

## 5. Versionamento

### 5.1 Criar Versão

```bash
npm run docusaurus docs:version 1.0.0
```

### 5.2 versions.json

```json
["1.0.0"]
```

### 5.3 Arquivos Versionados

```
docs/
├── intro.md                    # Current (v2)
├── getting-started.md          # Current (v2)
├── versions.json
└── versioned_docs/
    └── version-1.0.0/
        ├── intro.md
        └── getting-started.md
```

---

## 6. i18n

### 6.1 config

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'pt-BR', 'es'],
}
```

### 6.2 Tradução

```
website/
├── i18n/
│   ├── en/
│   │   └── code.json
│   └── pt-BR/
│       ├── docusaurus-theme/
│       │   └── navbar.json
│       └── code.json
```

### 6.3 Traduzir Docs

```bash
npm run write-translations -- --locale pt-BR
```

---

## 7. Search

### 7.1 Algolia (Produção)

```javascript
themeConfig: {
  algolia: {
    appId: 'APP_ID',
    apiKey: 'API_KEY',
    indexName: 'docs',
    contextualSearch: true,
  },
}
```

### 7.2 Local Search (Desenvolvimento)

```bash
npm install @easyops-cn/docusaurus-search-online
```

```javascript
plugins: [
  [
    '@easyops-cn/docusaurus-search-online',
    {
      indexDocs: true,
      docsRouteBasePath: '/docs',
    },
  ],
]
```

---

## 8. Deploy

### 8.1 GitHub Pages

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 8.2 Netlify

```toml
[build]
  command = "npm run build"
  publish = "build"
```

### 8.3 Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}
```

---

## 9. Templates

### 9.1 getting-started.md

```markdown
---
id: getting-started
title: Getting Started
sidebar_position: 2
---

# Getting Started

This guide will help you get started with the project.

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
npm install my-project
```

## Quick Start

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm run dev
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn dev
```

</TabItem>
</Tabs>

## Next Steps

- [Configuration](/docs/configuration)
- [API Reference](/docs/api/users)
```

### 9.2 api-endpoint.md

```markdown
---
id: get-users
title: GET /users
sidebar_position: 1
---

# GET /users

Retrieve all users.

## Endpoint

```
GET /api/v1/users
```

## Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `limit` | integer | Items per page (default: 20) |
| `sort` | string | Sort field |
| `order` | string | Sort order (asc/desc) |

## Response

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 500 | Server Error |
```

---

## Referências

- [Docusaurus](https://docusaurus.io/)
- [Docusaurus v3](https://docusaurus.io/blog)
- [MDX](https://mdxjs.com/)