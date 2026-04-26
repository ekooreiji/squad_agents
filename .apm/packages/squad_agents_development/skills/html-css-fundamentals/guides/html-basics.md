# HTML Basics

Guia completo de fundamentos HTML para designers.

---

## 1. O que é HTML

HTML (HyperText Markup Language) é a linguagem que define a estrutura de páginas web.

---

## 2. Estrutura Básica

### 2.1 Doctype e Html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo aqui -->
</body>
</html>
```

### 2.2 Partes Principais

| Tag | Descrição |
|-----|-----------|
| `<head>` | Metadados |
| `<body>` | conteúdo visível |
| `<title>` | Título da aba |
| `<meta>` | Dados sobre dados |

---

## 3. Tags Semânticas

### 3.1 Estrutura

```html
<header>
    <!-- Cabeçalho -->
</header>

<nav>
    <!-- Navegação -->
</nav>

<main>
    <article>
        <!-- Conteúdo principal -->
    </article>
    <aside>
        <!-- Conteúdo lateral -->
    </aside>
</main>

<footer>
    <!-- Rodapé -->
</footer>
```

### 3.2 Tags Common

| Tag | Uso | Quando Usar |
|-----|-----|-------------|
| `<header>` | Cabeçalho | Topo da página |
| `<nav>` | Navegação | Menu |
| `<main>` | Conteúdo principal | Área principal |
| `<article>` | Artigo | Conteúdo independente |
| `<section>` | Seção | Divisão temática |
| `<aside>` | Lateral | Conteúdo relacionado |
| `<footer>` | Rodapé | Final da página |
| `<div>` | Divisão genérica | Container semântico |

---

## 4. Tags de Conteúdo

### 4.1 Texto

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Parágrafo</p>
<span>Texto inline</span>
```

### 4.2 Links

```html
<a href="https://example.com">Link</a>
<a href="#section-id">Link interno</a>
<a href="mailto:email@example.com">Email</a>
```

### 4.3 Imagens

```html
<img src="image.jpg" alt="Descrição">
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <img src="small.jpg" alt="Descrição">
</picture>
```

### 4.4 Listas

```html
<!-- Não ordenada -->
<ul>
    <li>Item</li>
</ul>

<!-- Ordenada -->
<ol>
    <li>Item</li>
</ol>
```

### 4.5 Formulários

```html
<form action="/submit" method="POST">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name">
    
    <button type="submit">Enviar</button>
</form>
```

---

## 5. Atributos Comuns

| Atributo | Descrição |
|----------|-----------|
| `id` | Identificador único |
| `class` | Classe(s) para styling |
| `src` | Fonte (imagem, script) |
| `href` | URL do link |
| `alt` | Descrição da imagem |
| `title` | Tooltip |

---

## 6. Semântica vs Divs

### Quando Usar Tags Semânticas

| Tag Semânticas | DIV equivalent |
|----------------|----------------|
| `<header>` | `<div class="header">` |
| `<nav>` | `<div class="nav">` |
| `<main>` | `<div class="main">` |
| `<footer>` | `<div class="footer">` |

### Por que Importa

- Acessibilidade (screen readers)
- SEO (buscadores)
- Código mais limpo
- Manutenção mais fácil

---

## Cross-refs

- [css-basics.md](css-basics.md) - Fundamentos CSS
- [forms.md](forms.md) - Formulários HTML
- [selectors.md](selectors.md) - Seletores