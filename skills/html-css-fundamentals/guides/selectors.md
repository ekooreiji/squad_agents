# Selectors

Guia completo de seletores CSS e specificity.

---

## 1. Tipos de Seletores

### 1.1 Universal

```css
* {
    margin: 0;
}
```

### 1.2 Tipo (tag)

```css
p {
    color: blue;
}
```

### 1.3 Classe

```css
.button {
    background: blue;
}
```

### 1.4 ID

```css
#header {
    height: 60px;
}
```

### 1.5 Atributo

```css
[type="text"] {
    border: 1px solid #ccc;
}
```

---

## 2. Combinadores

### 2.1 Descendente (espaço)

```css
/* Todos os .item dentro de .container */
.container .item {
    padding: 10px;
}
```

### 2.2 Filho (>)

```css
/* Apenas .item diretamente dentro de .container */
.container > .item {
    padding: 10px;
}
```

### 2.3 Irmão Adjacente (+)

```css
/* .item imediatamente após .title */
.title + .item {
    margin-top: 0;
}
```

### 2.4 Irmão Geral (~)

```css
/* Todos os .item após .title */
.title ~ .item {
    margin-top: 10px;
}
```

---

## 3. Pseudo-classes

### 3.1 Estado

```css
.button:hover {
    background: blue;
}

.button:active {
    background: darkblue;
}

.button:focus {
    outline: 2px solid blue;
}

.input:disabled {
    background: #eee;
}
```

### 3.2 Estrutura

```css
/* Primeiro filho */
.item:first-child {
    margin-top: 0;
}

/* Último filho */
.item:last-child {
    margin-bottom: 0;
}

/* nth-child */
.item:nth-child(2) { }
.item:nth-child(odd) { }
.item:nth-child(3n) { }

/* Primeiro e último */
:first-of-type { }
:last-of-type { }
```

---

## 4. Pseudo-elements

```css
/* Primeira linha */
p::first-line {
    font-weight: bold;
}

/* Primeira letra */
p::first-letter {
    font-size: 2em;
}

/* Antes do conteúdo */
.element::before {
    content: "→ ";
}

/* Depois do conteúdo */
.element::after {
    content: " (novo)";
}
```

---

## 5. Specificity

### 5.1 Calculando

| Seletor | Pontos |
|---------|--------|
| `*` | 0 |
| `element` | 1 |
| `.class` | 10 |
| `[attr]` | 10 |
| `ID` | 100 |
| `inline` | 1000 |

### 5.2 Exemplos

```css
/* 1 ponto */
p { }

/* 10 pontos */
.text { }

/* 100 pontos */
#header { }

/* 11 pontos */
p.text { }

/* 110 pontos */
#header .text { }
```

### 5.3 Regras

1. ID > Classe > Tag
2. Mesmo specificity: último aplicado vence
3. Evitar `!important`

---

## 6. Boas Práticas

### 6.1 Use Classes

```css
/* Bom: Use classes */
.button { }
.button-primary { }
.button-secondary { }

/* Evite: Tags muito específicas */
div.container ul li.item { }
```

### 6.2 Naming Conventions

```css
/* BEM-like */
.button { }
.button__icon { }
.button--primary { }
```

---

## Cross-refs

- [css-basics.md](css-basics.md) - Fundamentos CSS
- [box-model.md](box-model.md) - Box model