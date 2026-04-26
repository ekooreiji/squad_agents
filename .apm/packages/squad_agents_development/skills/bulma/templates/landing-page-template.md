# Landing Page Template - Bulma

Template completo para landing page responsiva.

---

## Estrutura Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar is-light">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">Logo</a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#secao1">Seção 1</a>
                    <a class="navbar-item" href="#secao2">Seção 2</a>
                    <a class="navbar-item" href="#contato">Contato</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero is-primary is-medium">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-1">Título Principal</h1>
                <p class="subtitle">Descrição do produto</p>
                <a href="#contato" class="button is-large is-white is-outlined">Call to Action</a>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section id="secao1" class="section">
        <div class="container">
            <h2 class="title has-text-centered">Nossos Diferenciais</h2>
            <div class="columns is-centered">
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <h3 class="title is-4">Diferencial 1</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <h3 class="title is-4">Diferencial 2</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <h3 class="title is-4">Diferencial 3</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-6">
                    <h2 class="title has-text-centered">Fale Conosco</h2>
                    <form>
                        <div class="field">
                            <label class="label">Nome</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Nome">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mensagem</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Mensagem"></textarea>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary is-fullwidth">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container has-text-centered">
            <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
        </div>
    </footer>
</body>
</html>
```

---

## Quick Start

```bash
# Via CDN
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

# Via npm
npm install bulma
```

---

## Customização

```scss
// custom.scss
$primary: #yourColor;
$link: #yourColor;
$info: #yourColor;
$success: #yourColor;
$warning: #yourColor;
$danger: #yourColor;

@import "bulma/bulma.sass";
```

---

## Notas

- Bulma não inclui JS
- Flexbox por padrão
- Mobile-first
- Sass para customização