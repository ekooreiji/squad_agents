# Como Criar Paletas

Guide to creating effective, cohesive color palettes.

---

## 1. O que é uma Paleta

Uma paleta de cores é um conjunto coordenado de cores usadas consistentemente em um projeto.

---

## 2. Estrutura de Paleta

### 2.1 Paleta Mínima

```
┌─────────────────────────────────────────────┐
│                                             │
│  PRIMARY       → Cor principal da marca       │
│  SECONDARY     → Cor de suporte              │
│  ACCENT        → Cor de destaque            │
│  NEUTRAL       → Fundos e texto            │
│  SEMANTIC      → Feedback (sucesso/erro)     │
│                                             │
└─────────────────────────────────────────────┘
```

### 2.2 Paleta Completa

| Categoria | Cores | Descrição |
|-----------|-------|----------|
| Primary | 3 | main brand color + dark + light |
| Secondary | 3 | support + dark + light |
| Accent | 2 | highlights + complementary |
| Neutral | 7 | from white to black |
| Semantic | 4 | success, warning, error, info |
| Surface | 3 | background, surface, divider |

---

## 3. Processo de Criação

### 3.1 Passo a Passo

```
PASSO 1: Definir cor base (primary)
        │
        ▼
PASSO 2: Criar escala de primary
        │
        ▼
PASSO 3: Escolher secondary
        │
        ▼
PASSO 4: Adicionar accent (se necessário)
        │
        ▼
PASSO 5: Definir neutrals
        │
        ▼
PASSO 6: Adicionar semantic colors
        │
        ▼
PASSO 7: Testar combinações
        │
        ▼
PASSO 8: Validar contraste
```

### 3.2 Ferramentas

| Ferramenta | Uso |
|-----------|-----|
| Coolors | Gerador de paletas |
| Adobe Color | Extractor, wheel |
| Color Hunt | Paletas prontas |
| Stripe | Referência de paletas |

---

## 4. Criando Escalas

### 4.1 Escala de Primary

```css
/* 50-900 scale */
--primary-50: #E3F2FD;   /* lightest */
--primary-100: #BBDEFB;
--primary-200: #90CAF9;
--primary-300: #64B5F6;
--primary-400: #42A5F5;
--primary-500: #2196F3;   /* base */
--primary-600: #1E88E5;
--primary-700: #1976D2;
--primary-800: #1565C0;
--primary-900: #0D47A1;   /* darkest */
```

### 4.2 Técnica de Geração

**Tinta (ink) method:**

1. Start with base color
2. Add small amounts of black → darkens
3. Add small amounts of white → lightens
4. Aim for consistent perceptual steps

**HSL method:**

- Mantenha hue
- Ajuste lightness: +20%, +40%, +60%, +80%
- Ajuste saturation se necessário

---

## 5. Paletas por Tipo de Projeto

### 5.1 Corporate/Saas

```
Primary:     #2563EB (Blue)
Secondary:   #64748B (Slate)
Accent:      #10B981 (Green)
Neutrals:    Gray scale
Semantic:   Standard
```

### 5.2 E-commerce

```
Primary:     #E11D48 (Rose)
Secondary:   #F97316 (Orange)
Accent:      #FBBF24 (Yellow)
Neutrals:    Stone/warm gray
Semantic:   Vibrant
```

### 5.3 Health/Wellness

```
Primary:     #059669 (Emerald)
Secondary:   #0EA5E9 (Sky)
Accent:      #8B5CF6 (Violet)
Neutrals:    Warm neutrals
Semantic:   Muted
```

### 5.4 Creator/Creative

```
Primary:     #7C3AED (Purple)
Secondary:   #EC4899 (Pink)
Accent:      #F59E0B (Amber)
Neutrals:    Zinc
Semantic:   High contrast
```

---

## 6. Paletas Prontas (Referências)

### 6.1 Material Design

```
Red:     #F44336
Pink:    #E91E63
Purple:  #9C27B0
DeepPurple: #673AB7
Indigo:  #3F51B5
Blue:    #2196F3
Cyan:    #00BCD4
Teal:    #009688
Green:   #4CAF50
Lime:    #CDDC39
Yellow:  #FFEB3B
Orange:  #FF9800
```

### 6.2 Tailwind

```
Slate:   #64748B
Gray:    #6B7280
Zinc:    #71717A
Neutral: #737373
Stone:  #78716C
Red:    #EF4444
Orange: #F97316
Amber:  #F59E0B
Yellow: #EAB308
Lime:    #84CC16
Green:  #22C55E
Emerald:#10B981
Teal:   #14B8A6
Cyan:   #06B6D4
Blue:   #3B82F6
Indigo: #6366F1
Violet: #8B5CF6
Purple: #A855F7
Fuchsia: #D946EF
Rose:   #F43F5E
```

---

## 7. Checklist de Paleta

| # | Item | Status |
|---|------|--------|
| 1 | Primary definida | [ ] |
| 2 | Secondary definida | [ ] |
| 3 | Escala de primary (50-900) | [ ] |
| 4 | Neutrals definidos | [ ] |
| 5 | Semantic colors | [ ] |
| 6 | Contraste verificado | [ ] |
| 7 | Funciona em dark mode | [ ] |
| 8 | Limitado a 10-12 cores | [ ] |

---

## Cross-refs

- [contrast.md](contrast.md) - Contraste avançado
- [accessibility.md](accessibility.md) - WCAG