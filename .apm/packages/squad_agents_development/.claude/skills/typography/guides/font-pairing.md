# Como Combinar Fontes

Guia completo de font pairing - combinação eficaz de fontes.

---

## 1. Princípios de Pairing

### 1.1 Regras Fundamentais

| Regra | Descrição |
|-------|-----------|
| **Limite a 2 famílias** | Máximo de 2 famílias distintas |
| **Contraste é chave** | Fontes similares = sem impacto |
| **Mesma era** | Combinar fontes da misma época |
| **Familia relacionada** | Evitar conflito visual |

### 1.2 Tipos de Contraste

```
┌────────────────────────────────────────────────────┐
│              FONT PAIRING STRATEGIES              │
├────────────────────────────────────────────────┤
│                                                    │
│  CONTRASTE           vs           HARMONIA           │
│  ──────────                        ─────────       │
│  • Peso diferente              • Mesma categoria  │
│  • Categoria diferente        • x-height similar│
│  • Estilo diferente           • Família similar │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## 2. Estratégias de Combinação

### 2.1 Estratégia 1: Serif + Sans-Serif

**A mais versátil e segura.**

| Serif | Sans-Serif | Contexto |
|-------|------------|---------|
| Merriweather | Open Sans | Blog |
| Playfair Display | Lato | Landing |
| Lora | Roboto | Editorial |
| Bitter | Poppins | Tech blog |

**Por que funciona:**
- Contraste visual claro
- Hierarquia natural (serif = texto, sans = títulos)
- Leitura agradável

### 2.2 Estratégia 2: Same Family

**mais segura para iniciantes.**

| Família | Uso |
|---------|-----|
| Roboto | Sans (500 body, 700 títulos) |
| Open Sans | (400 body, 700 títulos) |
| Lato | (300 body, 700 títulos) |
| Inter | (400 body, 600 títulos) |

**Por que funciona:**
- Sem conflito visual
- Coesão garantida
- Performance otimizada

### 2.3 Estratégia 3: Superfamily

**Para projetos avançados.**

| Superfamily | Pesos |
|------------|------|
| Roboto | 100-900 |
| Inter | 100-900 |
| Noto | 100-900 |

---

## 3. Pares icônicos

### 3.1 Pares Clássicos

| Par | Creator | Estilo |
|-----|---------|-------|
| Helvetica + Univers | classic |
| Garamond + Futura | Editorial |
| Caslon + Gotham | Corp |
| Freight + Proxima Nova | Moderno |

### 3.2 Pares Google Fonts

| Display (Títulos) | Body (Texto) | Estilo |
|------------------|-------------|-------|
| Playfair Display | Source Sans Pro | Elegante |
| Montserrat | Open Sans | Moderno |
| Oswald | Lato | Tech |
| Raleway | Roboto | Minimal |
| Merriweather | Open Sans | Blog |

### 3.3 Pares Gratuitos

| Display | Body | Downloads |
|---------|------|----------|
| Bebas Neue | Roboto | Google |
| Poppins | Inter | Google |
| Oswald | Roboto | Google |
| Fraunces | Source Sans | Google |

---

## 4. Como criar seu Próprio Par

### 4.1 Processo

```
PASSO 1: Escolha a fonte principal
       │
       ▼
PASSO 2: Defina o uso (display vs body)
       │
       ▼
PASSO 3: Busque contraste na categoria
       │
       ▼
PASSO 4: Teste em contexto real
       │
       ▼
PASSO 5: Ajuste hierarchy
       │
       ▼
PASSO 6: Documente o sistema
```

### 4.2 Checklist de Contraste

| # | Critério | Verificação |
|---|---------|------------|
| 1 | Categorias diferentes? | Serif + Sans |
| 2 | Pesos diferentes? | Body light, display bold |
| 3 | x-height similar? | Teste visual |
| 4 | Semelhantes mas não iguais? | Não clonar |
| 5 | Funciona em múltiplos tamanhos? | Teste 12px-72px |

---

## 5. Fontes que Funcionam Juntas

### 5.1 Por Estilo

| Estilo | Fonte 1 | Fonte 2 |
|-------|---------|---------|
| **Minimal** | Proxima Nova | Proxima Nova |
| **Elegante** | Garamond | Proxima Nova |
| **Tech** | Fira Code | Inter |
| **Corp** | Helvetica | Sabon |
| **Creative** | Futura | Caslon |

### 5.2 Combinação Perigosa (Evitar)

| Combinação | Problema |
|-----------|---------|
| duas script | Ilegível |
| duas display | Conflito |
| duas thin | Sem hierarchy |
| pesos muito próximos | Confusão |

---

## 6. Exemplo Prático: Blog

### 6.1 Estrutura

```
┌────────────────────────────────┐
│  H1: Playfair Display (Bold)    │
│  48px / 1.2                   │
├────────────────────────────────┤
│  H2: Playfair Display          │
│  32px / 1.3                   │
├────────────────────────────────┤
│  Body: Source Sans Pro          │
│  18px / 1.6                   │
├────────────────────────────────┤
│  Caption: Source Sans Pro      │
│  14px / 1.5                   │
└────────────────────────────────┘
```

### 6.2 CSS

```css
:root {
  --font-display: 'Playfair Display', serif;
  --font-body: 'Source Sans Pro', sans-serif;
}

h1, h2 {
  font-family: var(--font-display);
}

body, p {
  font-family: var(--font-body);
}
```

---

## 7. Recursos

| Recurso | URL |
|---------|-----|
| Font Pair | fontpair.guide |
| Typewolf | typewolf.com |
| Google Font Combos | fonts.google.com combos |

---

## Cross-refs

- [font-selection.md](font-selection.md) - Como escolher
- [hierarchy.md](hierarchy.md) - Hierarquia
- [web-fonts.md](web-fonts.md) - Implementação