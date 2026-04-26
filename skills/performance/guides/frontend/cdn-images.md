# CDN e Imagens

## CDN

- Servir assets estaticos
- Reduzir latência
- Cache no edge

## Formatos de Imagem

| Formato | Uso |
|--------|-----|
| JPEG | Fotos |
| PNG | Transparência |
| WebP | Moderno (30% menor) |
| AVIF | Mais Compacto |

## Otimização

```javascript
// Next.js
<Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  placeholder="blur"
/>

// srcSet para responsive
<Image
  srcSet={`
    /photo-400.jpg 400w,
    /photo-800.jpg 800w,
    /photo-1200.jpg 1200w
  `}
/>
```

## Lazy Loading

```javascript
// Native
<img loading="lazy" src="image.jpg" />

// React
import { LazyImage } from 'react-lazy-image';

<LazyImage src="photo.jpg" />;