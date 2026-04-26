# Landing Page Template - Materialize

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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="nav-wrapper">
        <div class="container">
            <a href="#" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-menu" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#secao1">Seção 1</a></li>
                <li><a href="#secao2">Seção 2</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    </nav>

    <!-- Sidenav -->
    <ul class="sidenav" id="mobile-menu">
        <li><a href="#secao1">Seção 1</a></li>
        <li><a href="#secao2">Seção 2</a></li>
        <li><a href="#contato">Contato</a></li>
    </ul>

    <!-- Hero -->
    <section class="section no-pad-bot">
        <div class="container">
            <h1 class="header">Título Principal</h1>
            <h5 class="header col s12 light">Descrição do produto</h5>
            <div class="row center">
                <a href="#contato" class="btn-large waves-effect waves-light">Call to Action</a>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section id="secao1" class="section">
        <div class="container">
            <h2 class="header">Nossos Diferenciais</h2>
            <div class="row">
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Diferencial 1</span>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Diferencial 2</span>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Diferencial 3</span>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="section grey lighten-4">
        <div class="container">
            <h2 class="header">Fale Conosco</h2>
            <div class="row">
                <div class="col s12 m6">
                    <div class="input-field">
                        <input type="text" id="nome">
                        <label for="nome">Nome</label>
                    </div>
                    <div class="input-field">
                        <input type="email" id="email">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                        <textarea id="mensagem" class="materialize-textarea"></textarea>
                        <label for="mensagem">Mensagem</label>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit">Enviar</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="page-footer">
        <div class="container">
            <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    </script>
</body>
</html>
```

---

## Quick Start

```bash
# Via CDN
<link rel="stylesheet" href="materialize.min.css">
<script src="jquery.min.js"></script>
<script src="materialize.min.js"></script>

# Init
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});
```

---

## Customização

```scss
$primary-color: #yourColor;
$secondary-color: #yourColor;
@import "materialize/sass/materialize";
```

---

## Notes

- jQuery requerido
- Material icons
- AutoInit() para inicializar componentes