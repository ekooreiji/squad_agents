# Composição Visual

Guia sobre composição e layout para comunicação clara.

---

## 1. O que é Composição

Composição é o arranjo de elementos visuais num espaço definido.

---

## 2. Princípios de Composição

### 2.1 Equilíbrio

| Tipo | Descrição | Sensação |
|------|-----------|----------|
| Simétrico | Peso igual em ambos os lados | Estável, formal |
| Assimétrico | Pesos diferentes | Dinâmico, moderno |

### 2.2 Ritmo

```
✓ Repetição → Consistency
✓ Variação → Interest

[Box][Box][Box] → ✓✓✓
[Box]    [Box] → ✓ ✓
```

### 2.3 Espaço

| Tipo | Uso |
|------|-----|
| Espaço negativo | Respiração, clareza |
| Espaço apertado | Urgência, informação |

---

## 3. Grid System

### 3.1 Column Grid

| Colunas | Uso |
|--------|-----|
| 2 | Split simples |
| 4 | E-commerce |
| 6 | Blog/News |
| 12 | Complex layouts |

### 3.2 Exemplos de Grid

```
4 Colunas:
[1][2][3][4]

6 Colunas:
[1][2][3][4][5][6]
```

### 3.3 Gutter

```
[Col] ↔ [Col] ↔ [Col]
         ↔ = gutter (típico: 16-32px)
```

---

## 4. Layouts Comuns

### 4.1 F-Pattern

```
+------------------------+
| ████████              |
| ████████              |
| ████████              |
|        ████████████  |
|        ████████████  |
+------------------------+
```

### 4.2 Z-Pattern

```
+------------------------+
| ████████████         |
|                  ████|
|                  ████|
| ████████████         |
+------------------------+
```

### 4.3 Container-centered

```
      +------------+
      |            |
      |  Content   |
      |            |
      +------------+
```

---

## 5. Princípios de Layout

### 5.1 Proximidade

```
✓ Itens relacionados = próximos

[Título]
[Subtítulo] ← Próximo ao título

[Footer]
[Data] ← Próximo ao footer
```

### 5.2 Alinhamento

| Tipo | Uso |
|------|-----|
| Left | Padrão, fácil leitura |
| Center | Títulos, equilíbrio |
| Right | Dados, números |

### 5.3 Continuidade

```
✓→→→→→→ Fluxo visual
     ↓
   ←←←←←←
```

---

## 6. Espaçamento

### 6.1 Sistema de Espaçamento

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

### 6.2 Regra 8pt

Múltiplos de 8 para consistency:

```
8, 16, 24, 32, 40, 48...
```

---

## 7. Exemplos Práticos

### 7.1 Card Grid

```
+------------------+------------------+
| Card 1          | Card 2          |
| [Image]         | [Image]         |
| Title           | Title           |
| Description     | Description     |
+------------------+------------------+
| Card 3          | Card 4          |
| [Image]         | [Image]         |
| Title           | Title           |
| Description     | Description     |
+------------------+------------------+
```

### 7.2 Two-Column

```
+------------------------+-------------+
|                        |            |
|   Conteúdo Principal    |  Sidebar   |
|                        |  - Link    |
|                        |  - CTA     |
+------------------------+-------------+
```

---

## Cross-refs

- [intro-comunicacao.md](intro-comunicacao.md) - Introdução
- [hierarquia-visual.md](hierarquia-visual.md) - Hierarquia
- [composicao.md](composicao.md) - Composição