# Box Model

Guia completo do modelo de caixa (box model) em CSS.

---

## 1. O que é Box Model

Todo elemento HTML é uma caixa. O box model define como essas caixas são calculadas.

---

## 2. Componentes

```
┌─────────────────────────────────────┐
│            MARGIN                    │
│  ┌───────────────────────────────┐   │
│  │         BORDER               │   │
│  │  ┌────────────────────────┐  │   │
│  │  │      PADDING         │  │   │
│  │  │  ┌──────────────┐    │  │   │
│  │  │  │   CONTENT    │    │  │   │
│  │  │  │              │    │  │   │
│  │  │  └──────────────┘    │  │   │
│  │  └────────────────────────┘  │   │
│  └───────────────────────────────┘   │
│            MARGIN                    │
└─────────────────────────────────────┘
```

| Componente | Descrição |
|-----------|-----------|
| Content | Conteúdo (texto, imagem) |
| Padding | Espaço interno |
| Border | Borda |
| Margin | Espaço externo |

---

## 3. Calculando Largura Total

### 3.1 Padrão (content-box)

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total: 200 + 20 + 20 + 5 + 5 = 250px */
}
```

### 3.2 border-box (mais comum)

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total: 200px (inclui padding e border) */
}
```

---

## 4. Margin

### 4.1 Sintaxe

```css
.margin {
    /* Todos os lados */
    margin: 20px;
    
    /* Vertical / Horizontal */
    margin: 10px 20px;
    
    /* Top / Right / Bottom / Left */
    margin: 10px 20px 30px 40px;
    
    /* Individuais */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```

### 4.2 Collapsing Margins

```css
/* Margins verticais colapsam */
.element1 { margin-bottom: 20px; }
.element2 { margin-top: 30px; }
/* Resultado: 30px (o maior) */
```

---

## 5. Padding

### 5.1 Sintaxe (igual ao margin)

```css
.padding {
    padding: 20px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

---

## 6. Border

### 6.1 Propriedades

```css
.border {
    /* Todas as bordas */
    border: 2px solid #000;
    
    /* Individuais */
    border-width: 2px;
    border-style: solid;
    border-color: #000;
    
    /* Bordas específicas */
    border-top: 2px solid #000;
    border-bottom: 1px dashed #333;
}
```

### 6.2 Border Radius

```css
.rounded {
    border-radius: 8px;
    
    /* Círculos */
    border-radius: 50%;
    
    /* Elipse */
    border-radius: 50% / 10px;
}
```

---

## 7. Box Shadow

### 7.1 Exemplos

```css
.shadow {
    /* Sombra suave */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    /* Sombra elevated */
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    
    /* Sombra intensa */
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
```

---

## 8. Reset Básico

```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

---

## Cross-refs

- [flexbox.md](flexbox.md) - Layout flexível
- [grid.md](grid.md) - Grid layout