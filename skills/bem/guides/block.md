# Blocks - BEM

Componentes independentes.

---

## O que é Block

Componente reutilizável independente:
- semanticamente significativo
- pode ser aninhado
- pode ser posicionado em qualquer lugar

---

## Exemplos

### Button (Block)

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

### Card (Block)

```css
.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}
```

### Header (Block)

```css
.header {
    background: white;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
}
```

---

## Características

- Não depende de outros blocks
- Pode conter elements
- Pode ter modifiers

---

## Notes

- Bloco = componente