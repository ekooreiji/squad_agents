# Páginas - Atomic Design

Instâncias completas com conteúdo real.

---

## O que são Páginas

Templates com conteúdo específico:
- Home
- About
- Contact
- Product Details

---

## Exemplo: Home Page

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Empresa</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="/" class="logo">Empresa</a>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="/" class="nav-link active">Home</a></li>
                    <li><a href="/sobre" class="nav-link">Sobre</a></li>
                    <li><a href="/contato" class="nav-link">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Bem-vindo</h1>
            <p>Sua descrição aqui</p>
            <a href="/contato" class="btn btn-primary">Fale Conosco</a>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <h2>Nossos Diferenciais</h2>
            <div class="features-grid">
                <div class="card">
                    <h3>Diferencial 1</h3>
                    <p>Descrição</p>
                </div>
                <div class="card">
                    <h3>Diferencial 2</h3>
                    <p>Descrição</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
        </div>
    </footer>
</body>
</html>
```

---

## Exemplo: About Page

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sobre - Empresa</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="/" class="logo">Empresa</a>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="/" class="nav-link">Home</a></li>
                    <li><a href="/sobre" class="nav-link active">Sobre</a></li>
                    <li><a href="/contato" class="nav-link">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <h1>Sobre Nós</h1>
            <p>Empresa fundada em 2020...</p>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Empresa</p>
        </div>
    </footer>
</body>
</html>
```

---

## Notes

- Instâncias completas
- Dado real