# CSS Grid

Guia completo de CSS Grid para layouts bidimensionais.

---

## 1. O que é Grid

CSS Grid é um sistema de layout bidimensional (linhas e colunas).

---

## 2. Container

### 2.1 Display Grid

```css
.container {
    display: grid;
}
```

### 2.2 Colunas

```css
.container {
    /* 3 colunas iguais */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* Com unidades */
    grid-template-columns: 200px 1fr 100px;
    
    /* Repeat */
    grid-template-columns: repeat(3, 1fr);
    
    /* Auto-fit */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### 2.3 Linhas

```css
.container {
    /* 4 linhas automático */
    grid-template-rows: auto;
    
    /* Linhas fixas */
    grid-template-rows: 100px 200px auto;
}
```

---

## 3. Gap

```css
.container {
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
}
```

---

## 4. Áreas

### 4.1 Nomeando Áreas

```css
.container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 4.2 Template Resultado

```
┌─────────────────────────────────┐
│            HEADER                │
├────────────┬────────────────────┤
│            │                    │
│  SIDEBAR  │       MAIN         │
│            │                    │
│            │                    │
├────────────┴────────────────────┤
│            FOOTER               │
└─────────────────────────────────┘
```

---

## 5. Itens

### 5.1 Span

```css
.item {
    grid-column: span 2;
    grid-row: span 2;
}
```

### 5.2 Posicionamento

```css
.item {
    grid-column: 1 / 3; /* Início / Fim */
    grid-column: 2; /* Apenas coluna 2 */
    grid-row: 1 / -1; /* Primeira até última */
}
```

---

## 6. Alignment

### 6.1 Justify (horizontal)

```css
.container {
    justify-items: start | end | center | stretch;
}
```

### 6.2 Align (vertical)

```css
.container {
    align-items: start | end | center | stretch;
}
```

### 6.3 Place

```css
.container {
    /* Shorthand */
    place-items: center;
}
```

---

## 7. Exemplo: Layout Responsivo

### 7.1 Código

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}
```

### 7.2 Resultado

- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3-4 colunas

---

## Cross-refs

- [flexbox.md](flexbox.md) - Flexbox
- [responsive-css.md](responsive-css.md) - Media queries