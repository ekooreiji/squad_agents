# TypeScript

Typed JavaScript.

## Install

```bash
npm install -g typescript
tsc --version
```

## Initial Setup

```bash
tsc --init
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Compile

```bash
tsc
tsc --watch
```