# Landing Page Template - Foundation CSS

Template completo para landing page responsiva.

---

## Estrutura Base

```html
<!DOCTYPE html>
<html class="no-js" lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.4/dist/css/foundation-prototype.min.css">
</head>
<body>
    <!-- Title Bar -->
    <div class="title-bar" data-responsive-toggle="menu-principal" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle="menu-principal"></button>
        <div class="title-bar-title">Marca</div>
    </div>

    <!-- Top Bar -->
    <nav class="top-bar" id="menu-principal">
        <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
                <li class="menu-text">Logo</li>
                <li><a href="#secao1">Seção 1</a></li>
                <li><a href="#secao2">Seção 2</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero-section">
        <div class="grid-container">
            <div class="grid-x grid-padding-x align-center">
                <div class="cell small-12 medium-6">
                    <h1>Título Principal</h1>
                    <p class="lead">Descrição do produto.</p>
                    <a href="#contato" class="button large primary">Call to Action</a>
                </div>
                <div class="cell small-12 medium-6">
                    <img src="placeholder.jpg" alt="Imagem" class="thumbnail">
                </div>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section id="secao1" class="grid-container py">
        <h2 class="text-center">Nossos Diferenciais</h2>
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 medium-4">
                <div class="card">
                    <div class="card-section">
                        <h5>Diferencial 1</h5>
                        <p>Descrição</p>
                    </div>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <div class="card">
                    <div class="card-section">
                        <h5>Diferencial 2</h5>
                        <p>Descrição</p>
                    </div>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <div class="card">
                    <div class="card-section">
                        <h5>Diferencial 3</h5>
                        <p>Descrição</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="grid-container py">
        <div class="grid-x align-center">
            <div class="cell small-12 medium-6">
                <h2 class="text-center">Fale Conosco</h2>
                <form data-abide>
                    <label>
                        Nome
                        <input type="text" required>
                        <span class="form-error">Obrigatório</span>
                    </label>
                    <label>
                        Email
                        <input type="email" required>
                        <span class="form-error">Email inválido</span>
                    </label>
                    <label>
                        Mensagem
                        <textarea rows="4" required></textarea>
                    </label>
                    <button class="button expanded" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py">
        <div class="grid-container text-center">
            <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.4/dist/js/foundation.min.js"></script>
    <script>$(document).foundation()</script>
</body>
</html>
```

---

## Quick Start

```bash
# Via CDN
<link href="foundation.min.css">
<script src="jquery.min.js"></script>
<script src="foundation.min.js"></script>
<script>$(document).foundation()</script>

# Via npm
npm install foundation-sites
```

---

## Customização

```scss
$primary-color: #yourColor;
@import 'foundation';
```

---

## Notas

- jQuery é obrigatório
- Foundation usa $(document).foundation() para inicializar
- Mobile-first por padrão
- Abide validation incluso