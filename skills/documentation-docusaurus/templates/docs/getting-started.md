---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

Welcome to the documentation! This guide will help you get started quickly.

## Prerequisites

- Node.js 18 or higher
- npm 8+ or yarn 1.22+

## Installation

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install my-project
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add my-project
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm add my-project
```

</TabItem>
</Tabs>

## Quick Start

### 1. Create your first file

Create a file named `index.js`:

```javascript
import { createApp } from 'my-project'

const app = createApp({
  name: 'My App',
  version: '1.0.0',
})

app.start()
```

### 2. Run the application

```bash
node index.js
```

### 3. View the result

Open your browser at `http://localhost:3000`.

## Next Steps

- [Configuration](/docs/configuration)
- [API Reference](/docs/api)
- [Deployment](/docs/deployment)

:::tip
Check out our [guides](/docs/guides) for more advanced usage.
:::