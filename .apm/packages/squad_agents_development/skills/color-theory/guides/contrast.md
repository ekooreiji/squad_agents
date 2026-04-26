# Contraste Avançado

Guia completo de contraste para design de interfaces.

---

## 1. Importância do Contraste

Contraste é a diferença visual entre cores adjacentes. Afeta:

- Legibilidade
- Hierarquia visual
- Acessibilidade
- Usabilidade geral

---

## 2. Tipos de Contraste

### 2.1 Contraste de tonalidade

```
┌─────────────────────────────────────┐
│                                     │
│  ██████  ←→  █████████            │
│  Claro      Escuro                 │
│                                     │
└─────────────────────────────────────┘
```

Mesma cor, valores diferentes.

### 2.2 Contraste de matiz

```
┌─────────────────────────────────────┐
│                                     │
│  ██████  ←→  ██████                │
│  Azul       Laranja                 │
│                                     │
└─────────────────────────────────────┘
```

Cores diferentes.

### 2.3 Contraste de saturação

```
┌─────────────────────────────────────┐
│                                     │
│  ██████  ←→  ██████                │
│  Saturated  Desaturated             │
│                                     │
└─────────────────────────────────────┘
```

Mesma cor, saturação diferente.

---

## 3. Aplicações Práticas

### 3.1 Hierarquia Tipográfica

```
┌─────────────────────────────────────┐
│  TEXTO PRINCIPAL                   │
│  Maior + Mais escuro = Mais importante│
├─────────────────────────────────────┤
│  Texto secundário                  │
│  Menor + Mais claro = Menos Import│
├─────────────────────────────────────┤
│  Caption/disclaimer              │
│  Pequeno + Claro = De atenção    │
└─────────────────────────────────────┘
```

### 3.2 Botões

| Estado | Contraste | Usage |
|--------|-----------|-------|
| Default | 3:1 | Visível |
| Hover | 4.5:1+ | WCAG AA |
| Active | 7:1+ | WCAG AAA |
| Disabled | N/A | Sem contraste |

### 3.3 Imagens com Texto

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │
│  │                         │    │
│  │      IMAGEM             │    │
│  │                         │    │
│  │   ←→ OVERLAY ESCURO    │    │
│  │                         │    │
│  │      + TEXTO          │    │
│  │                         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

- Adicione overlay para garantir contraste
- Use 60-80% black em imagens

---

## 4. Contraste WCAG

### 4.1 Requisitos

| Nível | Texto Normal | Texto Grande | UI Components |
|-------|-------------|--------------|-------------|
| AA | 4.5:1 | 3:1 | 3:1 |
| AAA | 7:1 | 4.5:1 | 4.5:1 |

### 4.2 Texto Grande

- 18pt+ regular (24px+)
- 14pt+ bold (18px+)

### 4.3 Componentes de UI

- Inputs, buttons
- Checkboxes, radio buttons
- Sliders, dropdowns

---

## 5. Técnicas de Contraste

### 5.1 Ajustar Luminosidade

```css
/* Dark background */
.bg-dark {
  background: #1E293B;
  color: #F8FAFC;  /* 15:1 contrast ✓ */
}

/* Light background */
.bg-light {
  background: #F8FAFC;
  color: #1E293B;  /* 15:1 contrast ✓ */
}
```

### 5.2 Usar Overlay

```css
.image-container {
  background: url('image.jpg');
}

.image-overlay {
  background: rgba(0, 0, 0, 0.6); /* 60% black */
}

.text-on-image {
  color: white;  /* 7.5:1 with 60% black ✓ */
}
```

### 5.3 Usar Cores Semitransparentes

```css
.card {
  background: rgba(255, 255, 255, 0.95); /* Quase white */
  color: #1E293B;  /* 14:1 ✓ */
}
```

---

## 6. Ferramentas

| Ferramenta | Função |
|-----------|-------|
| WebAIM Contrast Checker | Verificar contraste |
| Coolors Contrast Tool | Contrast grid |
| Adobe Color | Extract palette + contrast |
| Figma Contrast Plugin | Check no design |

---

## 7. Checklist de Contraste

| # | Item | Ratio Mínimo |
|---|------|-------------|
| 1 | Texto em fundo | 4.5:1 |
| 2 | Texto grande | 3:1 |
| 3 | UI components | 3:1 |
| 4 | Texto em imagens | 4.5:1 |
| 5 | Icones + fundo | 3:1 |
| 6 | Links + texto | 4.5:1 |

---

## Cross-refs

- [accessibility.md](accessibility.md) - WCAG completo
- [implementation.md](implementation.md) - CSS