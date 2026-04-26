# CSS Basics

Guia completo de fundamentos CSS para designers.

---

## 1. O que é CSS

CSS (Cascading Style Sheets) é a linguagem que define a aparência de elementos HTML.

---

## 2. Formas de Aplicar CSS

### 2.1 Inline (não recomendado)

```html
<p style="color: blue; font-size: 16px;">Texto</p>
```

### 2.2 Internal (no head)

```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

### 2.3 External (arquivo separado) - Mais comum

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### 2.4 Via CDN

```html
<link rel="stylesheet" href="https://cdn.example.com/style.css">
```

---

## 3. Propriedades Common

### 3.1 Cores

```css
.color-name {
    color: blue;
    background-color: #ffffff;
    border-color: rgb(255, 0, 0);
}
```

### 3.2 Texto

```css
.text-style {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
}
```

### 3.3 Dimensões

```css
.dimensions {
    width: 100px;
    height: auto;
    max-width: 100%;
    min-height: 50px;
}
```

### 3.4 Fundo

```css
.background {
    background-color: #f5f5f5;
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 4. Units

### 4.1 Units Absolutas

| Unit | Descrição |
|------|-----------|
| `px` | Pixels |
| `pt` | Points |

### 4.2 Units Relativas

| Unit | Relativo a |
|------|------------|
| `%` | Elemento pai |
| `em` | Fonte do elemento |
| `rem` | Fonte do root |
| `vw` | 1% da largura da viewport |
| `vh` | 1% da altura da viewport |

---

## 5. Propriedades de Exibição

### 5.1 Display

```css
.block {
    display: block;
}

.inline {
    display: inline;
}

.inline-block {
    display: inline-block;
}
```

### 5.2 Visibility

```css
.hidden {
    display: none; /* Remove completamente */
}

.visible {
    visibility: visible;
}
```

---

## 6. Position

### 6.1 Valores

```css
.static {
    position: static;
}

.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

.absolute {
    position: absolute;
    top: 0;
    left: 0;
}

.fixed {
    position: fixed;
    top: 0;
}
```

---

## Cross-refs

- [box-model.md](box-model.md) - Box model details
- [selectors.md](selectors.md) - Seletores