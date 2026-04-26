# Templates - Atomic Design

Layouts sem conteúdo específico.

---

## O que são Templates

Estruturas de layout:
- Blog
- Dashboard
- E-commerce
- Landing Page

---

## Exemplo: Blog Template

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Template</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="/" class="logo">Blog</a>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#" class="nav-link">Home</a></li>
                    <li><a href="#" class="nav-link">Sobre</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <article class="blog-grid">
                <article class="card">
                    <img src="post.jpg" class="card-img" alt="">
                    <div class="card-body">
                        <h2 class="card-title">Título Post</h2>
                        <p class="card-text">Excerpt...</p>
                    </div>
                </article>
            </article>

            <aside class="sidebar">
                <div class="widget">
                    <h3>Categorias</h3>
                </div>
            </aside>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Blog</p>
        </div>
    </footer>
</body>
</html>
```

---

## Exemplo: Dashboard Template

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
</head>
<body>
    <div class="dashboard">
        <aside class="sidebar">
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Configurações</a></li>
                </ul>
            </nav>
        </aside>
        <main class="content">
            <header class="page-header">
                <h1>Título Página</h1>
            </header>
            <div class="page-content">
                <!-- Content here -->
            </div>
        </main>
    </div>
</body>
</html>
```

---

## Notes

- Estrutura sem dados
- Placeholders