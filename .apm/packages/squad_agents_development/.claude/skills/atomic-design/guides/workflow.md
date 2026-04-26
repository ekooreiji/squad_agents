# Workflow - Atomic Design

Processo de trabalho com Atomic Design.

---

## Processo

### 1. Design System

1. Definir variáveis (cores, fontes)
2. Criar átomos
3. Combinar em moléculas
4. Montar organismos
5. Criar templates

---

## Fluxo

```
Atoms → Molecules → Organisms → Templates → Pages
```

---

## Ferramentas

### Pattern Lab

```bash
npm install patternlab
```

### Storybook

```bash
npx storybook@latest init
```

### Fractal

```bash
npm init fractal
```

---

## Steps

### Step 1: Setup

1. Definir design tokens
2. Setup tooling
3. Criar library

### Step 2: Átomos

- Buttons
- Inputs
- Labels

### Step 3: Moléculas

- Search form
- Card
- Alert

### Step 4: Organismos

- Header
- Footer
- Product grid

### Step 5: Templates

- Blog layout
- Dashboard layout

### Step 6: Páginas

- Home
- About

---

## Versionamento

```
v1.0.0 - Major.Minor.Patch
v1.1.0 - Novos componentes
v1.0.1 - Bug fixes
```

---

## Notes

- Iterativo
- Documentar mudanças