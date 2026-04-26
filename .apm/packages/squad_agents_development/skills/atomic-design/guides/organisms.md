# Organismos - Atomic Design

Componentes complexos combinando moléculas.

---

## O que são Organismos

Conjuntos de moléculas formando seções:
- Header
- Footer
- Navigation
- Product Card

---

## Exemplos

### Header

```html
<header class="header">
    <div class="container">
        <a href="/" class="logo">Logo</a>
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">Sobre</a></li>
                <li><a href="#" class="nav-link">Contato</a></li>
            </ul>
        </nav>
    </div>
</header>
```

```css
.header {
    background: white;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}
```

---

### Footer

```html
<footer class="footer">
    <div class="container">
        <nav class="footer-nav">
            <ul class="nav-list">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </nav>
        <p class="copyright">&copy; 2024 Empresa</p>
    </div>
</footer>
```

---

### Product Card

```html
<article class="product-card">
    <img src="product.jpg" class="product-img" alt="Produto">
    <div class="product-info">
        <h3 class="product-title">Produto</h3>
        <p class="product-price">R$ 99,00</p>
        <button class="btn btn-primary">Comprar</button>
    </div>
</article>
```

---

## Notes

- Múltiplas moléculas
- Seções funcionais