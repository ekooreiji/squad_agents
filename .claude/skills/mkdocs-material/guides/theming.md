# MkDocs Material Theming

Guia de customização do tema Material.

---

## 1. Cores

### 1.1 Paleta de Cores

```yaml
theme:
  palette: 
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: indigo
      accent: blue
    
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: deep orange
      accent: amber
```

### 1.2 Cores Disponíveis

| Primary | Accent |
|---------|--------|
| red | red |
| pink | pink |
| purple | purple |
| deep purple | deep purple |
| indigo | indigo |
| blue | blue |
| light blue | light blue |
| cyan | cyan |
| teal | teal |
| green | green |
| light green | light green |
| lime | lime |
| yellow | yellow |
| amber | amber |
| orange | orange |
| deep orange | deep orange |

---

## 2. Tipografia

### 2.1 Fontes do Sistema

```yaml
theme:
  font:
    - sans: Roboto
    - mono: Roboto Mono
```

### 2.2 Google Fonts

```yaml
theme:
  font:
    - text: IBM Plex Sans
    - code: IBM Plex Mono
```

### 2.3 Tipos de Fonte

```css
/* Override no custom.css */
:root {
  --md-text-font-family: "IBM Plex Sans", sans-serif;
  --md-code-font-family: "IBM Plex Mono", monospace;
}
```

---

## 3. Logo e Ícones

### 3.1 Logo

```yaml
theme:
  icon:
    logo: material/library
```

### 3.2 Ícones Customizados

```yaml
theme:
  icon:
    repo: fontawesome/brands/github
    discord: fontawesome/brands/discord
```

### 3.3 Ícones Disponíveis

| Ícone | Valor |
|-------|-------|
| Logo do repo | `repo` |
| GitHub | `fontawesome/brands/github` |
| GitLab | `fontawesome/brands/gitlab` |
| Discord | `fontawesome/brands/discord` |

---

## 4. Features

### 4.1 Navigation Features

```yaml
theme:
  features:
    - navigation.instant        # Instant navigation
    - navigation.tracking    # Track scroll
    - navigation.tabs       # Top tabs
    - navigation.sections   # Section folders
    - navigation.top       # Back to top
    - navigation.footer  # Footer navigation
```

### 4.2 Search Features

```yaml
theme:
  features:
    - search.highlight       # Highlight matches
    - search.share      # Share search
    - search.suggest    # Suggest queries
    - search.topbtn    # Top button
```

### 4.3 Content Features

```yaml
theme:
  features:
    - toc.integrate      # Integrate TOC
    - toc.follow        # Follow heading
    - announce.dismiss # Dismiss announcement
```

---

## 5. Header

### 5.1 Header Estável

```yaml
theme:
  features:
    - header.autoshow
```

### 5.2 Announcement Bar

```yaml
theme:
  announcement:
    content: Welcome to our docs!
    button: Try Now
```

---

## 6. Footer

### 6.1 Links

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/my-org
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/myorg
```

### 6.2 Footer Navigation

```yaml
extra:
  footer:
    - columns: 3
      align: left
      rows:
        - title: Product
          items:
            - name: Features
              link: /features
            - name: Pricing
              link: /pricing
            - name: Changelog
              link: /changelog
        - title: Company
          items:
            - name: About
              link: /about
            - name: Blog
              link: /blog
            - name: Careers
              link: /careers
```

---

## 7. Custom CSS

### 7.1 Arquivo custom.css

```css
/* docs/stylesheets/custom.css */
:root {
  --md-primary-color: #6200ea;
  --md-accent-color: #00b0ff;
}

[data-theme='dark'] {
  --md-primary-color: #bb86fc;
  --md-accent-color: #03dac6;
}

/* Custom styles */
.md-header {
  background: linear-gradient(45deg, #6200ea, #b388ff);
}
```

### 7.2 Referenciar CSS

```yaml
extra_css:
  - stylesheets/custom.css
```

---

## 8. Custom JavaScript

### 8.1 Arquivo custom.js

```javascript
// docs/javascripts/custom.js
document.addEventListener('DOMContentLoaded', function() {
  console.log('Docs loaded!');
});
```

### 8.2 Referenciar JS

```yaml
extra_javascript:
  - javascripts/custom.js
```

---

## 9. Animações

### 9.1 Animações CSS

```css
/* Animate on scroll */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.md-content {
  animation: fadeIn 0.3s ease-in;
}
```

---

## 10. Mode Toggle

### 10.1 Habilitar Toggle

```yaml
theme:
  palette:
    - scheme: default
      primary: indigo
      accent: blue
    - scheme: slate
      primary: deep orange
      accent: amber
```

---

## Cross-refs

- [setup.md](setup.md) - Setup inicial
- [configuration.md](configuration.md) - Configuração completa