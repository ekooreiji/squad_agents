# Fontes para Web

Guia de implementação de fontes web, incluindo Google Fonts, Adobe Fonts e self-hosted.

---

## 1. Opções de Fontes Web

### 1.1 Tipos de Hospedagem

| Tipo | Vantagens | Desvantagens |
|------|----------|------------|
| **Google Fonts** | Grátis, fácil | Limitações |
| **Adobe Fonts** | Alta qualidade | Pago |
| **Self-hosted** | Controle total | Setup manual |
| **CDN** | Performance | Custo |

---

## 2. Google Fonts

### 2.1 Como Usar

**Método 1: Import (HTML)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Método 2: CSS @import**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### 2.2 Fontes Populares

| Fonte | Estilo | Pesos |
|-------|-------|------|
| Inter | Sans | 100-900 |
| Roboto | Sans | 100-900 |
| Open Sans | Sans | 300-800 |
| Lato | Sans | 100-900 |
| Montserrat | Sans | 100-900 |
| Poppins | Sans | 100-900 |
| Merriweather | Serif | 300-900 |
| Lora | Serif | 400-700 |
| Roboto Mono | Mono | 100-700 |

### 2.3 Performance

```css
/* Carregar apenas pesos necessários */
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">

/* Subset se necessário */
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" rel="stylesheet">
```

### 2.4 Variables Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

```css
/* Um peso para cada variável */
h1 { font-weight: 750; } /* Interpolated */
```

---

## 3. Adobe Fonts

### 3.1 Configuração

**1. Adicionar ao projeto**
- Acesse Adobe Fonts
- Crie projeto
- Adicione fonts

**2. Embed code**

```html
<link rel="stylesheet" href="https://use.typekit.net/[PROJECT_ID].css">
```

### 3.2 Fontes Populares Adobe

| Fonte | Estilo |
|-------|-------|
| Proxima Nova | Sans |
| Gotham | Sans |
| Freight | Serif |
| Chronicle | Serif |
| Museo | Sans |
| Bryant | Sans |

### 3.3 Customization

```html
<link rel="stylesheet" href="https://use.typekit.net/[PROJECT_ID].css">
<script>
  (function(d) {
    var config = {
      kitId: '[PROJECT_ID]',
      scriptTimeout: 3000,
      async: true
    },
    t=d.readyState,function(){
      if(t!="complete"&&t!="loading")return;
      var e=Array.prototype.slice.call(d.querySelectorAll("script"));
      e.forEach(function(e){e.parentNode.removeChild(e)})
    }(d);
    var e=setTimeout(function(){},config.scriptTimeout);
    d.write('<script src="'+config.use + 
      '//d2i2buyvgmk3sr.cloudfront.net' + 
      '/kit/' + config.kitId + '.js"><\/script>');
  })(document);
</script>
```

---

## 4. Self-Hosted

### 4.1 Formatos

| Formato | Suporte | Uso |
|--------|---------|-----|
| **WOFF2** | Modernos | Recomendado |
| **WOFF** | legacy | Fallback |
| **TTF** | legacy | Mobile antigo |
| **EOT** | IE legacy | Apenas IE |

### 4.2 Setup

**1. Baixar fonts**
```bash
# Diretório de fonts
/project/fonts/
  ├── Inter-Regular.woff2
  ├── Inter-Medium.woff2
  └── Inter-Bold.woff2
```

**2. CSS**

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2'),
       url('/fonts/Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 4.3 Subset (Otimização)

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-subset.woff2') format('woff2');
  unicode-range: U+0025-0025, U+00-00FF;
}
```

---

## 5. Performance

### 5.1 Font Display

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-display: swap; /* Evita FOIT */
}
```

| Valor | Comportamento |
|-------|-------------|
| **swap** | Texto visível imediatamente |
| **block** | Texto invisível temporário |
| **fallback** | Timeout curta |
| **optional** | Sem timeout |

### 5.2 Preload

```html
<link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### 5.3 Font Loading API

```javascript
const font = new FontFace('Inter', 'url(/fonts/Inter-Bold.woff2)');
font.load().then(loaded => {
  document.fonts.add(loaded);
});
```

---

## 6. Fallback fonts

### 6.1 Stack de Fontes

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### 6.2 Sistema de Fallbacks

```css
/* Sans-Serif */
font-family: 'Font', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Serif */
font-family: 'Font', Georgia, 'Times New Roman', Times, serif;

/* Monospace */
font-family: 'Font', 'Fira Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
```

---

## Cross-refs

- [font-pairing.md](font-pairing.md) - Combinação
- [introduction.md](introduction.md) - Fundamentos