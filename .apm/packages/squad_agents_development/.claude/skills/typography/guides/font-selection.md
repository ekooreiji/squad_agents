# Como Escolher Fontes

Guia para selecionar fontes adequadas para cada projeto e contexto.

---

## 1. Critérios de Escolha

### 1.1 Perguntas Fundamentais

Antes de escolher, responda:

| # | Pergunta | Por que importa |
|---|----------|----------------|
| 1 | Onde será usado? | Digital vs impressão |
| 2 | Qual o tamanho mínimo? | Legibilidade |
| 3 | Quantidade de texto? | Leitura contínua |
| 4 | Qual o tom/mood? | Personalidade |
| 5 | Precisa de múltiplos weights? | Hierarquia |

### 1.2 Matriz de Decisão

```
┌─────────────────────────────────────────────────────────┐
│                  FLOW DE ESCOLHA                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  [Contexto]                                       │
│       │                                          │
│       ▼                                          │
│  ┌─────────────┐                                 │
│  │ Digital?   │───Yes───→ Sans-Serif preferida  │
│  └─────┬─────┘                                 │
│      No│                                        │
│        ▼                                        │
│  ┌─────────────┐                                 │
│  │ Impressão? │───Yes───→ Serif para texto     │
│  └─────┬─────┘                                 │
│      No│                                        │
│        ▼                                        │
│  ┌─────────────┐                                 │
│  │ Legível?   │───Yes───→ UI/Display           │
│  └───────────┘                                 │
└─────────────────────────────────────────────────┘
```

---

## 2. Escolha por Contexto

### 2.1 Websites

| Tipo de Site | Fonte Recomendada | Por que |
|-------------|-----------------|---------|
| Blog | Merriweather, Lora | Leitura longa |
| E-commerce | Open Sans, Roboto | Clareza |
| Corp/SaaS | Inter, SF Pro | Moderno |
| Landing | Poppins, Montserrat | Impacto |
| Portfolio | Playfair, Lato | Personalidade |

### 2.2 Aplicativos

| Tipo | Fonte | Alternativa |
|------|-------|-----------|
| Mobile | SF Pro | Roboto |
| Dashboard | Inter | IBM Plex Sans |
| Finance | DM Sans | Satoshi |

### 2.3 Impressão

| Uso | Fonte | Pesos |
|-----|-------|------|
| Livro | Garamond, Caslon | Regular, Italic |
| Revista | Helvetica | Bold, Regular |
| Banner | Bebas Neue | Bold only |
| Logo | Logotype | Custom |

---

## 3. Fontes por Mood

### 3.1 Mapeamento Mood x Fonte

| Mood | Características | Fontes |
|------|---------------|--------|
| **Corporativo** | Sério, confiante | Helvetica, Garamond |
| **Moderno** | Limpo, minimal | Inter, SF Pro |
| **Tradicional** | Clássico, elegante | Caslon, Baskerville |
| **Tech/Futuro** | Geométrico | Futura, Proxima Nova |
| **Criativo** | Expressivo | Cooper Black, Lobster |
| **Luxo** | Sofisticado | Didot, Bodoni |
| **Acessível** | Legível, amigável | Open Sans, Atkinson |

### 3.2 Exemplos de Associações

| Projeto | Mood | Fonte |
|---------|------|-------|
| Banco | Corporativo | Helvetica Now |
| Startup tech | Moderno | Inter |
| Restaurante | Acolhedor | Lato |
| Moda | Luxo | Didot |
| Infantil | Divertido | Fredoka |

---

## 4. Legibilidade vs Personalidade

### 4.1 trade-off

```
PERSONALIDADE ◀────────────────▶ LEGIBILIDADE

Display    ──────────►   Corpo de texto
(Impacto)              (Leitura)
─────────────────────────────
• Script              • Sans-Serif
• Decorative         • Serif tradicional
• Handwriting        • Grotesque
```

### 4.2 Regra Prática

- **Títulos/Display**: Prioritize personalidade
- **Corpo de texto**: Prioritize legibilidade
- **Nunca use Display para corpo**

---

## 5. Fontes por Idioma

### 5.1 Suporte a Caracteres

| Idioma | Fontes com Suporte |
|--------|-------------------|
| Português | google fonts (pt-BR) |
| Árabe | Noto Sans Arabic |
| CJK | Noto Sans CJK |
| Cirílico | Roboto, Open Sans |

### 5.2 Multi-idioma

Para projetos multilíngues:
- Use variáveis de fonte
- Teste todos os alfabetos
- Considere noto (Google)

---

## 6. Fontes Populares por Categoria

### 6.1 Sans-Serif (UI)

| Fonte | Uso Ideal | Característica |
|-------|----------|---------------|
| Inter | Dashboard, App | Neutra, escala |
| Roboto | Material | Android default |
| SF Pro | Apple | Premium |
| Open Sans | Web | Amigável |
| Poppins | Títulos | Geométrica |

### 6.2 Serif (Texto)

| Fonte | Uso Ideal | Característica |
|-------|----------|---------------|
| Merriweather | Blog | Leitura longa |
| Lora | Blog editorial | Elegante |
| PT Serif | Português | Legal |
| Bitter | Títulos | Robusta |

### 6.3 Display

| Fonte | Uso Ideal | Característica |
|-------|----------|---------------|
| Playfair Display | Títulos | Elegante |
| Montserrat | Títulos | Versátil |
| Bebas Neue | Caps only | Impacto |
| Oswald | Títulos | Condensed |

### 6.4 Monospace

| Fonte | Uso Ideal | Característica |
|-------|----------|---------------|
| Fira Code | Code, IDE | Ligatures |
| JetBrains Mono | Code | Legível |
| Roboto Mono | UI | Clean |
| IBM Plex Mono | Code, data | Técnica |

---

## 7. Checkpoint de Escolha

| # | Critério | Verificação |
|---|---------|------------|
| 1 | Legível no tamanho mínimo | Teste em 12px |
| 2 | Funciona em bold e light | Não quebrada |
| 3 | Tem todos os glyphs necessários | Ç, acentos |
| 4 | Licença permitindo uso | Comercial |
| 5 | Performance web | WOFF2 |

---

## Quick Reference

| Contexto | Primeira Escolha | Alternativa |
|---------|------------------|------------|
| Blog | Merriweather | Lora |
| App | Inter | SF Pro |
| Landing | Poppins | Montserrat |
| Dashboard | DM Sans | IBM Plex Sans |
| Código | Fira Code | JetBrains Mono |

---

## Cross-refs

- [font-pairing.md](font-pairing.md) - Como combinar
- [hierarchy.md](hierarchy.md) - Hierarquia visual