# Flexbox

Guia completo de Flexbox para layouts flexíveis.

---

## 1. O que é Flexbox

Flexbox é um modelo de layout unidimensional para distribuir espaço entre itens.

---

## 2. Container

### 2.1 Display Flex

```css
.container {
    display: flex;
}
```

### 2.2 Direction

```css
.container {
    /* Linha (padrão) */
    flex-direction: row;
    
    /* Coluna */
    flex-direction: column;
    
    /* Inverter */
    flex-direction: row-reverse;
    flex-direction: column-reverse;
}
```

---

## 3. Principais Propriedades

### 3.1 Justify Content (eixo principal)

```css
.container {
    /* Alinha no início */
    justify-content: flex-start;
    
    /* Alinha no fim */
    justify-content: flex-end;
    
    /* Centraliza */
    justify-content: center;
    
    /* Espaço igual entre */
    justify-content: space-between;
    
    /* Espaço igual ao redor */
    justify-content: space-around;
    
    /* Espaço igual (novo) */
    justify-content: space-evenly;
}
```

### 3.2 Align Items (eixo transversal)

```css
.container {
    /* Estica para preencher */
    align-items: stretch;
    
    /* Alinha no início */
    align-items: flex-start;
    
    /* Alinha no fim */
    align-items: flex-end;
    
    /* Centraliza */
    align-items: center;
    
    /* Alinha pela linha de base */
    align-items: baseline;
}
```

### 3.3 Flex Wrap

```css
.container {
    /* Não quebra (padrão) */
    flex-wrap: nowrap;
    
    /* Quebra para próxima linha */
    flex-wrap: wrap;
    
    /* Quebra reverso */
    flex-wrap: wrap-reverse;
}
```

---

## 4. Itens

### 4.1 Flex Grow/Shrink

```css
.item {
    /* Cresce para preencher espaço */
    flex-grow: 1;
    
    /* Encolhe se necessário */
    flex-shrink: 1;
    
    /* Shorthand: grow shrink basis */
    flex: 1 1 auto;
}
```

### 4.2 Order

```css
.item:first-child {
    order: 2;
}

.item:last-child {
    order: -1;
}
```

### 4.3 Align Self

```css
.item {
    align-self: auto;
    align-self: flex-start;
    align-self: center;
    align-self: flex-end;
}
```

---

## 5. Exemplo Prático: Card Grid

### 5.1 Código

```css
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;
    /* flex: 1 1 = grow e shrink */
    /* 300px = basis mínimo */
}
```

### 5.2 Resultado

- Container: flex-wrap: wrap
- Itens: flex: 1 1 300px
- Cards se reorganizam automáticamente

---

## 6. Shorthands

### 6.1 gap

```css
.container {
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
}
```

---

## Cross-refs

- [grid.md](grid.md) - CSS Grid
- [responsive-css.md](responsive-css.md) - Media queries