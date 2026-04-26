# Export Formats

Guia de formatos de exportação para diferentes usos.

---

## 1. Vídeo

### 1.1 Formatos

| Formato | Extensão | Uso | Qualidade |
|--------|---------|-----|----------|
| **MP4** | .mp4 | Universal | Alta |
| **MOV** | .mov | Apple | Muito Alta |
| **WebM** | .webm | Web | Média |
| **GIF** | .gif | Animação | Baixa |

### 1.2 Codecs

| Codec | Uso | Compat |
|-------|-----|--------|
| **H.264** | Universal | Wide |
| **H.265/HEVC** | Modern | Limited |
| **ProRes** | Professional | Apple |
| **VP9** | WebM | Modern |

### 1.3 Settings

```javascript
// Web - H.264
{
  format: 'mp4',
  codec: 'h264',
  quality: 'high',
  bitrate: '8Mbps'
}

// Social - H.264  
{
  format: 'mp4',
  codec: 'h264',
  quality: 'high',
  resolution: '1080p',
  aspect: '9:16'
}
```

---

## 2. Animação Web

### 2.1 GIF

| Uso | Settings |
|-----|----------|
| Emoji/reação | 64-128px, 10-15fps |
| Demo | 300-500px, 15fps |
| Banner | 728px, 15fps, <2MB |

### 2.2 WebM

- Alpha transparency support
- Smaller file size
- Modern browsers

### 2.3 Lottie

- JSON format
- After Effects export
- Lightweight
- Scalable

---

## 3. Resolution Guide

### 3.1 Standard

| Resolution | Aspect | Nome |
|------------|--------|------|
| 1280x720 | 16:9 | HD 720p |
| 1920x1080 | 16:9 | Full HD 1080p |
| 3840x2160 | 16:9 | 4K UHD |

### 3.2 Social

| Plataforma | Resolution |
|--------------|-------------|
| Instagram Reel | 1080x1920 |
| TikTok | 1080x1920 |
| YouTube | 1920x1080 |
| Facebook | 1080x1080 |

---

## Cross-refs

- [social-media-video.md](social-media-video.md) - Especificações por plataforma
- [video-editing.md](video-editing.md) - Settings de edição