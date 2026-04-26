# Color Harmonies

Guide to creating effective color combinations using harmony rules.

---

## 1. O que são Harmonias

Harmonias de cores são combinações previsíveis que criam equilíbrio visual.

---

## 2. Tipos de Harmonia

### 2.1 Monochromatic

```
┌────────────────────────────────────────┐
│                                        │
│  ██████  ██████  ██████  ██████      │
│  Base  -20%   -40%   -60%   -80%      │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- Same hue, different saturation/lightness
- Very cohesive, safe choice
- Good for data visualization

**Exemplo:**
```css
--primary-100: #E3F2FD;
--primary-300: #90CAF9;
--primary-500: #2196F3;
--primary-700: #1565C0;
--primary-900: #0D47A1;
```

**Quando usar:**
- Interfaces limpas
-Dashboards
- Data-heavy apps

---

### 2.2 Analogous

```
┌────────────────────────────────────────┐
│                                        │
│  ██████ ←→ ██████ ←→ ██████          │
│   Blue   Cyan    Teal                   │
│   (30° apart)                         │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- Cores adjacentes na roda (30-60°)
- Harmonioso, visualmente pleasing
- Common in nature

**Exemplo:**
```css
--color-1: #3F51B5;  /* Indigo */
--color-2: #5C6BC0;  /* Indigo-300 */
--color-3: #7986CB; /* Indigo-200 */
```

**Quando usar:**
- Navigation menus
- Categories related
- Brand cohesiva

---

### 2.3 Complementary

```
┌────────────────────────────────────────┐
│                                        │
│  ██████ ←───────────→ ██████           │
│   Blue         180°       Orange        │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- Opostas na roda (180°)
- Alto contraste, vibrance
- Cria foco visual

**Exemplo:**
```css
--primary: #2196F3;   /* Blue */
--accent: #FF9800;     /* Orange */
```

**Quando usar:**
- CTAs, botões
- Highlights
-warning/error states

**Atenção:**
- Evite 50/50, use 60/40 or 70/30

---

### 2.4 Split-Complementary

```
┌────────────────────────────────────────┐
│                                        │
│  ██████ ←────────────────→ ██████     │
│   Blue                180°               │
│         ←────────────→ ██████            │
│         (Orange's neighbors)            │
│         Yellow   Magenta                   │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- Uma cor + duas adjacentes à oposta
- Alto contraste, menos tensão
- Mais flexível que complementary

**Exemplo:**
```css
--primary: #2196F3;   /* Blue */
--accent-1: #FFEB3B;  /* Yellow */
--accent-2: #E91E63;  /* Pink */
```

**Quando usar:**
- variety needed
- Highlighting múltiplos elementos

---

### 2.5 Triadic

```
┌────────────────────────────────────────┐
│                                        │
│        ██████                         │
│         ↙  120°                       │
│   ██████      120°  ██████           │
│     120°         ↘   120°            │
│           ██████                     │
│                                        │
│  Blue + Yellow + Red                  │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- 3 cores a 120° equal distance
- Equilibrado e vibrante
- Requires care

**Exemplo:**
```css
--color-1: #2196F3;  /* Blue */
--color-2: #FFEB3B;  /* Yellow */
--color-3: #F44336;    /* Red */
```

**Quando usar:**
- Branded apps
- Children's products
- Sports teams

**Dica:**
- Use one dominant, two as accents

---

### 2.6 Tetradic (Double Complementary)

```
┌────────────────────────────────────────┐
│                                        │
│  ██████ ←───────→ ██████              │
│   Blue           Orange                 │
│                                        │
│        90°                           │
│  ██████ ←───────→ ██████              │
│   Green          Red                   │
│                                        │
└────────────────────────────────────────┘
```

**Características:**
- 4 cores em quadrado (90° apart)
- Max variety, complex
- Riqueza de opções

**Exemplo:**
```css
--primary: #2196F3;   /* Blue */
--secondary: #FF9800; /* Orange */
--tertiary: #4CAF50;  /* Green */
--quaternary: #E91E63; /* Pink */
```

**Quando usar:**
- Complex branded systems
- Detailed dashboards

**Atenção:**
- Pode parecer visualmente pesado

---

## 3. Choosing Harmony

### 3.1 Decision Matrix

| Con | Harmony | Cohesion | Contrast | Complexity |
|-----|---------|---------|----------|------------|
| Simple UI | Mono | High | Low | Easy |
| Related items | Analogous | High | Medium | Easy |
| Call-to-action | Complementary | Medium | High | Medium |
| Vibrant brand | Triadic | Medium | High | Medium |
| Complex system | Tetradic | Low | High | Hard |

### 3.2 Quick Reference

| Vibe | Harmony |
|------|---------|
| Corporate | Analogous, Complementary |
| Modern | Monochromatic, Split-comp |
| Creative | Triadic, Tetradic |
| Minimal | Monochromatic |
| Bold | Complementary |

---

## Cross-refs

- [palettes.md](palettes.md) - Criação de paletas
- [psychology.md](psychology.md) - Significado das cores