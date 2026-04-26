---
name: documentation-material-design
description: Documentação de código com Material Design (MDX)
---

# Material Design Documentation Skill

Guia completo para criar documentação usando Material Design e MDX.

---

## Referências Cruzadas

| Skill | Ver | Conteúdo |
|-------|-----|---------|
| [js-airbnb-style](../js-airbnb-style/SKILL.md) | Naming, code style | Exemplos JS/TS |
| [js-google-style](../js-google-style/SKILL.md) | Naming conventions | Code patterns |
| [js-standard-style](../js-standard-style/SKILL.md) | Style guide | Exemplos |
| [pep8-reference](../pep8-reference/SKILL.md) | Python docstrings | Python docs |

---

## 1. Introdução

### 1.1 O que é Material Design Docs?

Documentação usando **Material Design** (Google) com **MDX** para componentes interativos.

### 1.2 Características

| Feature | Descrição |
|---------|-----------|
| **Material UI** | Componentes React padronizados |
| **MDX** | Markdown + JSX |
| **Theming** | Customização completa |
| **Dark Mode** | Suporte a tema escuro |
| **Code Highlighting** | Syntax highlighting |

---

## 2. Setup

### 2.1 Instalação

```bash
npm init -y
npm install react react-dom @mui/material @emotion/react @emotion/styled next mdx-loader next-mdx-remote gray-matter rehype-slug rehype-autolink-headings prismjs
```

### 2.2 Estrutura de Diretórios

```
docs/
├── src/
│   ├── components/
│   │   ├── ComponentCard.jsx
│   │   ├── ApiTable.jsx
│   │   └── CodeBlock.jsx
│   ├── pages/
│   │   ├── docs/
│   │   │   └── [...slug].jsx
│   │   └── index.jsx
│   ├── styles/
│   │   └── theme.js
│   └── content/
│       ├── getting-started.mdx
│       └── components/
│           └── button.mdx
├── next.config.js
└── package.json
```

### 2.3 next.config.js

```javascript
const withMDX = require('next-mdx-remote')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
})
```

---

## 3. Configuração de Tema

### 3.1 theme.js

```javascript
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.5rem', fontWeight: 600 },
    code: { fontFamily: '"Fira Code", monospace' },
  },
  components: {
    MuiCode: {
      styleOverrides: {
        root: {
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.9rem',
        },
      },
    },
  },
})

export default theme
```

### 3.2 _app.js

```javascript
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

---

## 4. Componentes MDX

### 4.1 ComponentCard.jsx

```jsx
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

export function ComponentCard({ title, description, status, version }) {
  const statusColors = {
    stable: 'success',
    beta: 'warning',
    deprecated: 'error',
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Chip label={status} color={statusColors[status]} size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {version && (
          <Typography variant="caption" sx={{ mt: 2, display: 'block' }}>
            v{version}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
```

### 4.2 ApiTable.jsx

```jsx
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'

export function ApiTable({ properties }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Required</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code>{prop.name}</code>
              </TableCell>
              <TableCell>
                <Chip label={prop.type} size="small" variant="outlined" />
              </TableCell>
              <TableCell>
                {prop.required ? 'Yes' : 'No'}
              </TableCell>
              <TableCell>{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
```

### 4.3 CodeBlock.jsx

```jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import CopyButton from './CopyButton'

export function CodeBlock({ code, language, filename }) {
  const [tab, setTab] = useState(0)

  const languages = ['javascript', 'typescript', 'python']
  const codeBlocks = Array.isArray(code) ? code : [code]

  return (
    <Box sx={{ borderRadius: 1, overflow: 'hidden', bgcolor: 'grey.900' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1, borderBottom: '1px solid grey.800' }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ minHeight: 36 }}>
          {languages.map((lang) => (
            <Tab key={lang} label={lang} sx={{ minHeight: 36, color: 'white' }} />
          ))}
        </Tabs>
        <CopyButton text={codeBlocks[tab]} />
      </Box>
      <Box sx={{ p: 2 }}>
        <pre style={{ margin: 0, color: '#e0e0e0' }}>
          <code>{codeBlocks[tab]}</code>
        </pre>
      </Box>
    </Box>
  )
}
```

### 4.4 PropsTable.jsx

```jsx
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export function PropsTable({ props }) {
  return (
    <TableContainer component={Paper} sx={{ mb: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: 'grey.100' }}>
            <TableCell>Prop</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code>{prop.name}</code>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{prop.type}</Typography>
              </TableCell>
              <TableCell>
                {prop.default ? (
                  <Typography variant="body2" color="text.secondary">
                    {prop.default}
                  </Typography>
                ) : (
                  '-'
                )}
              </TableCell>
              <TableCell>{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
```

---

## 5. Templates

### 5.1 index.mdx (Homepage)

```markdown
---
title: Documentation
---

export function GettingStartedCard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <ComponentCard
          title="Quick Start"
          description="Get up and running in 5 minutes"
          status="stable"
        />
      </Grid>
    </Grid>
  )
}

# Welcome

This is the documentation for our project.

<GettingStartedCard />

## Features

- Material Design components
- Dark mode support
- Code highlighting
- Responsive layout
```

### 5.2 component.mdx (Component Page)

```markdown
---
title: Button
description: A button component with multiple variants
---

import { Button, Box } from '@mui/material'
import { CodeBlock } from '../components/CodeBlock'
import { PropsTable } from '../components/PropsTable'
import { ComponentCard } from '../components/ComponentCard'

export const buttonProps = [
  { name: 'variant', type: "'contained' | 'outlined' | 'text'", default: "'contained'", description: 'Visual variant' },
  { name: 'color', type: 'string', default: "'primary'", description: 'Color of the button' },
  { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Size of the button' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
  { name: 'onClick', type: '() => void', default: '-', description: 'Click handler' },
]

# Button

<ComponentCard
  title="Button"
  description="A versatile button component"
  status="stable"
  version="1.0.0"
/>

## Overview

The Button component is used for triggering actions.

## Examples

<CodeBlock
  code={`import { Button } from '@mui/material'

function Example() {
  return (
    <Button variant="contained" color="primary">
      Click me
    </Button>
  )
}`}
/>

## Props

<PropsTable props={buttonProps} />
```

### 5.3 api.mdx (API Reference)

```markdown
---
title: API Reference
---

import { ApiTable } from '../components/ApiTable'
import { CodeBlock } from '../components/CodeBlock'

export const userApi = [
  { name: 'id', type: 'uuid', required: true, description: 'Unique identifier' },
  { name: 'name', type: 'string', required: true, description: 'User name' },
  { name: 'email', type: 'string', required: true, description: 'User email' },
  { name: 'createdAt', type: 'datetime', required: false, description: 'Creation timestamp' },
]

# API Reference

## User

<ApiTable properties={userApi} />

## Endpoints

### GET /users

Retrieve all users.

<CodeBlock code={`fetch('/api/users')`} />
```

---

## 6. Admonitions

### 6.1 InfoBox.jsx

```jsx
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'

export function InfoBox({ title, children }) {
  return (
    <Box sx={{ my: 3 }}>
      <Alert severity="info">
        <AlertTitle>{title}</AlertTitle>
        {children}
      </Alert>
    </Box>
  )
}

export function WarningBox({ title, children }) {
  return (
    <Box sx={{ my: 3 }}>
      <Alert severity="warning">
        <AlertTitle>{title}</AlertTitle>
        {children}
      </Alert>
    </Box>
  )
}

export function TipBox({ title, children }) {
  return (
    <Box sx={{ my: 3 }}>
      <Alert severity="success">
        <AlertTitle>{title}</AlertTitle>
        {children}
      </Alert>
    </Box>
  )
}
```

### 6.2 Uso

```markdown
export function MyPage() {
  return (
    <Box>
      <InfoBox title="Note">
        This is an informational note.
      </InfoBox>

      <WarningBox title="Warning">
        Be careful with this operation.
      </WarningBox>

      <TipBox title="Tip">
        Use this shortcut for better performance.
      </TipBox>
    </Box>
  )
}
```

---

## 7. Versionamento

### 7.1 Versões MDX

```
docs/
├── content/
│   ├── v1/
│   │   └── getting-started.mdx
│   └── v2/
│       └── getting-started.mdx
└── versions.js
```

### 7.2 versions.js

```javascript
module.exports = [
  {
    label: 'v2 (latest)',
    path: '/docs/v2',
    banner: 'This is the latest version.',
  },
  {
    label: 'v1',
    path: '/docs/v1',
    banner: null,
  },
]
```

---

## 8. Search

### 8.1 Algolia Setup

```bash
npm install react-instantsearch-hooks-web
```

### 8.2 Search Component

```jsx
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web'
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(APP_ID, SEARCH_KEY)

export function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="docs">
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}
```

---

## 9. Deploy

### 9.1 Vercel

```bash
npm install -g vercel
vercel
```

### 9.2 Netlify

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### 9.3 GitHub Pages

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## Referências

- [Material UI](https://mui.com/)
- [MDX](https://mdxjs.com/)
- [Next.js](https://nextjs.org/)