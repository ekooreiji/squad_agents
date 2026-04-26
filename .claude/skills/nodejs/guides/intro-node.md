# Introdução ao Node.js

Runtime JavaScript do lado do servidor.

---

## O que é Node.js

Runtime JavaScript:
- V8 engine (Chrome)
- Non-blocking I/O
- npm ecosystem

---

## Instalação

```bash
# Via nvm (recomendado)
nvm install 20
nvm use 20

# Via installer
# nodejs.org
```

---

## Primeiro Servidor

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Olá Node.js!');
});

server.listen(3000, () => {
  console.log('Servidor na porta 3000');
});
```

```bash
node server.js
```

---

## npm

```bash
npm init -y
npm install express
npm install -D nodemon
```

---

## package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

---

## Async/Await

```javascript
const fs = require('fs').promises;

async function lerArquivo() {
  const data = await fs.readFile('arquivo.txt', 'utf8');
  console.log(data);
}

lerArquivo();
```

---

## CommonJS vs ESM

```javascript
// CommonJS (padrão)
const express = require('express');

// ESM
import express from 'express';
```

```json
// package.json
{
  "type": "module"
}
```

---

## Notes

- npm = package manager
- CommonJS default