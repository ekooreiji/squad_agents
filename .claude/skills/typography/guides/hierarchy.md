# Hierarquia Visual Tipográfica

Guia para criar hierarquia visual com tipografia.

---

## 1. O que é Hierarquia

Hierarquia tipográfica organiza conteúdo por importância, guiando o leitor através da informação.

### 1.1 Elementos de Hierarquia

| Elemento | Função |
|----------|--------|
| **Tamanho** | O que é maior chama atenção |
| **Peso** | O que é mais bold destaca |
| **Cor** | Contraste cria separação |
| **Espaço** | Espaço em branco respira |
| **Position** | Posição superior = mais importante |

### 1.2 Exemplo Visual

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  TÍTULO PRINCIPAL (H1)                          │
│  Maior + Bold + Espaço                           │
│  ←─┐                                            │
│     │  Subtítulo (H2)                           │
│     │  Médio + Semibold + Menor                  │
│     │  ←──┤                                     │
│     │     │  Seção (H3)                         │
│     │     │  Menor + Medium                     │
│     │     │  ←─────┤                           │
│     │     │         │  Corpo (p)              │
│     │     │         │  Regular + Maior que H3  │
│     │     │         │  ←──────────┤            │
│     │     │         │             │ Caption    │
│     │     │         │             │ Small     │
└──────────────────────────────────────────────────┘
```

---

## 2. Escalas Tipográficas

### 2.1 Typescale

| Nível | Minor Third (1.2) | Major Third (1.25) | Perfect Fourth (1.333) |
|------|-------------------|-------------------|----------------------|
| H1 | 3.583rem | 4.768rem | 6.594rem |
| H2 | 2.986rem | 3.815rem | 4.945rem |
| H3 | 2.488rem | 3.052rem | 3.709rem |
| H4 | 2.074rem | 2.441rem | 2.782rem |
| H5 | 1.728rem | 1.953rem | 2.087rem |
| Body | 1rem | 1rem | 1rem |
| Small | 0.833rem | 0.8rem | 0.75rem |

### 2.2 Recomendação por Uso

| Uso | Escala |
|-----|--------|
| Mobile | Minor Third (1.2) |
| Website | Major Third (1.25) |
| Display/App | Perfect Fourth (1.333) |

---

## 3. Sistema de Tamanhos

### 3.1 Website Padrão

```
H1: 48px (3rem)
H2: 36px (2.25rem)
H3: 28px (1.75rem)
H4: 24px (1.5rem)
Body: 16px (1rem)
Small: 14px (0.875rem)
Caption: 12px (0.75rem)
```

### 3.2 Mobile

```
H1: 32px (2rem)
H2: 28px (1.75rem)
H3: 24px (1.5rem)
Body: 16px (1rem)
Small: 14px (0.875rem)
```

### 3.3 Dashboard/Saas

```
H1: 24px (1.5rem)
H2: 20px (1.25rem)
H3: 16px (1rem)
Body: 14px (0.875rem)
Label: 12px (0.75rem)
```

---

## 4. Peso Visual

### 4.1 Pesos Disponíveis

| Peso | Valor | Nome | Uso |
|------|-------|------|-----|
| 100 | Thin/Light | Extra Light | Display |
| 300 | Light | Light | Body longo |
| 400 | Regular | Regular | Body |
| 500 | Medium | Medium | Labels |
| 600 | Semibold | Semi Bold | Subtítulos |
| 700 | Bold | Bold | Ênfase |
| 800 | Extra Bold | Extra Bold | Destaque |
| 900 | Black | Black | Display |

### 4.2 Hierarquia por Peso

| Nível | Peso Ideal | Evitar |
|-------|-----------|-------|
| Display | 700-900 | 400 |
| Subtítulo | 500-600 | 700+ |
| Body | 400 | 700 |
| Caption | 400 | 700 |

### 4.3 Exemplo

```
H1: Bold (700)
H2: Semi Bold (600)
H3: Medium (500)
Body: Regular (400)
Caption: Regular (400)
```

---

## 5. Espaçamento (Whitespace)

### 5.1 Between Elements

| Relação | Margem |
|---------|-------|
| H1 → H2 | 0.5em |
| H2 → Body | 1em |
| Parágrafos | 1em |
| Section | 2em |

### 5.2 Exemplo CSS

```css
h1, h2, h3 {
  margin-bottom: 0.5em;
  line-height: 1.2;
}

p {
  margin-bottom: 1em;
  line-height: 1.6;
}
```

---

## 6. Responsive Hierarchy

### 6.1 Breakpoints

| Breakpoint | Tamanho Base | H1 | H2 | H3 |
|----------|-------------|-----|-----|-----|
| Mobile | 16px | 28px | 24px | 20px |
| Tablet | 16px | 36px | 28px | 24px |
| Desktop | 16px | 48px | 36px | 28px |

### 6.2 CSS

```css
/* Mobile first */
body { font-size: 16px; }
h1 { font-size: 1.75rem; }

@media (min-width: 768px) {
  body { font-size: 16px; }
  h1 { font-size: 2.25rem; }
}

@media (min-width: 1024px) {
  h1 { font-size: 3rem; }
}
```

---

## 7. Implementação

### 7.1 CSS Custom Properties

```css
:root {
  /* Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  /* Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 7.2 Usage

```css
h1 { font-size: var(--text-5xl); font-weight: var(--font-bold); }
h2 { font-size: var(--text-4xl); font-weight: var(--font-semibold); }
p { font-size: var(--text-base); font-weight: var(--font-regular); }
```

---

## Cross-refs

- [font-pairing.md](font-pairing.md) - Pares de fontes
- [web-fonts.md](web-fonts.md) - Implementação web