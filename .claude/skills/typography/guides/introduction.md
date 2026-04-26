# Tipografia: Introdução

Guia completo de fundamentos tipográficos, anatomia e terminologia.

---

## 1. O que é Tipografia

Tipografia é a arte e técnica de escolher e organizar letras para tornar a informação legível, legible e atraente.

---

## 2. Anatomia das Letras

### Partes da Letra

```
  ╭───────────╮
  │    ◯     │  Apex (ápice)
  │   ╱ ╲    │  Arm (braço)
  │  ╱   ╲   │  Stem (haste)
  │ ╱     ╲  │  Bowl (taça)
  │╱       ╲ │  Counter (contador)
  │         ╲│  Tail (cauda)
  │   __    │  Baseline (linha de base)
  ╰─────────╯
    ↑ Descender
```

### Termos Essenciais

| Termo | Significado |
|------|-----------|
| **Baseline** | Linha onde letras descansam |
| **x-height** | Altura da letra "x" |
| **Cap height** | Altura das maiúsculas |
| **Ascender** | Parte acima da x-height |
| **Descender** | Parte abaixo da baseline |
| **Stem** | Traço principal |
| **Bowl** | Parte curva fechada |
| **Counter** | Espaço interno fechado |
| **Apex** | Ponto superior de junção |
| **Tail** | Projeção decorativa |
| **Terminal** | Fim de haste sem serifas |

---

## 3. Classificações de Fontes

### 3.1 Serif

Fontes com serifas (pequenos traços no final das hastes).

| Classificação | Características | Exemplos |
|--------------|----------------|----------|
| **Old Style** | Contraste moderado, eixo inclinado | Garamond, Caslon |
| **Transitional** | Contraste forte, eixo vertical | Times, Baskerville |
| **Modern/Didone** | Contraste extremo, sem eixo | Didot, Bodoni |
| **Slab Serif** | Serifas quadradas | Rockwell, Courier |

### 3.2 Sans-Serif

Fontes sem serifas.

| Classificação | Características | Exemplos |
|--------------|----------------|----------|
| **Grotesque** | Contra moderate, terminal reto | Helvetica, Arial |
| **Neo-Grotesque** | Limpas, neutras | Roboto, Inter |
| **Geometric** | Baseada em formas geométricas | Futura, Proxima Nova |
| **Humanist** | Variação humana, eixo inclinado | Open Sans, Lato |

### 3.3 Other Categories

| Categoria | Descrição | Exemplos |
|-----------|-----------|---------|
| **Script** | Caligrafia | Brush Script, Lobster |
| **Display** | Decorativas | Cooper Black |
| **Monospace** | Largura fixa | Fira Code, Roboto Mono |
| **Handwriting** | Manuscritas | Patrick Hand |

---

## 4. Métricas Tipográficas

### 4.1 Medidas Fundamentais

```
         Ascender
            ↑
  ⌈━━━━━━━━━━━━━━━━━┐  ← Cap Height
  ┃       H         ┃
  ┃                 ┃  ← x-height
  ┃       x         ┃
  ┃                 ┃
  ┗━━━━━━━━━━━━━━━━━┘
            ↓
         Baseline
  ╱╲
 g   ← Descender
```

| Medida | Descrição |
|--------|----------|
| **Cap height** | Altura das maiúsculas |
| **x-height** | Altura das minúsculas sem ascendentes |
| **Ascender** | Altura máxima das ascendentes (b, d, h, k, l) |
| **Descender** | Profundidade das descendentes (g, j, p, q, y) |
| **Baseline** | Linha de referência |

### 4.2 Medidas Horizontais

| Medida | Descrição |
|--------|----------|
| **Em** | Largura do quadrado perfeito |
| **En** | Metade do em |
| **Point (pt)** | 1/72 de polegada |
| **Pica** | 12 pontos |

---

## 5. Espaçamento

### 5.1 Kerning

Ajustar espaço entre pares específicos.

| Par | Kerning Típico |
|-----|----------------|
| AV | Reduzir |
| To | Reduzir |
| WA | Ajustar |
| ff | Juntar |

### 5.2 Tracking (Letter-Spacing)

Espaçamento uniforme entre todas as letras.

| Contexto | Ajuste |
|---------|--------|
| Maiúsculas | +10 a +30 |
| Body text | 0 |
| Legible text | +20 a +40 |
| Condensed | -20 a -50 |

### 5.3 Word Spacing

Espaçamento entre palavras.

| Contexto | Valor Ideal |
|---------|-------------|
| Body | 0.25em |
| Títulos | 0.3em |
| Justified | Variável |

---

## 6. Medida de Linha (Line Length)

### 6.1 Caracteres por Linha

| Dispositivo | Caracteres Ideais |
|-------------|------------------|
| Mobile | 30-40 caracteres |
| Tablet | 40-60 caracteres |
| Desktop | 60-75 caracteres |
| Ótimo | 45-75 caracteres |

### 6.2 Line Height ( Leading)

| Tipo | Valor | Uso |
|------|-------|-----|
| Tight | 1.2 | Títulos |
| Normal | 1.5 | Corpo |
| Loose | 1.75 | Textos longos |
| Very Loose | 2.0 | Acessibilidade |

---

## 7. Terminologia de Medidas

### 7.1 Font Size

| Unidade | Descrição |
|---------|-----------|
| **px** | Pixels absolutos |
| **em** | Relativo ao elemento pai |
| **rem** | Relativo ao root |
| **pt** | Points (impressão) |

### 7.2 Scale

| Escala | Razão | Uso |
|--------|-------|-----|
| Minor Third | 1.2 | Apps mobile |
| Major Third | 1.25 | Websites |
| Perfect Fourth | 1.33 | Títulos grandes |
| Golden Ratio | 1.618 | Displays |

---

## 8. Quick Reference

| Categoria | Quando Usar |
|-----------|-------------|
| Serif | Textos longos, tradisional |
| Sans-Serif | UI moderna, digital |
| Display | Títulos, promoções |
| Monospace | Código, dados |

---

## Cross-refs

- [font-selection.md](font-selection.md) - Como escolher
- [font-pairing.md](font-pairing.md) - Como combinar