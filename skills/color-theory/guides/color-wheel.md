# Color Wheel (Roda Cromática)

Guia completo da roda cromática de 12 cores e suas relações.

---

## 1. O que é a Roda Cromática

A roda cromática é uma representação circular das cores baseada no espectro visível.

---

## 2. Roda de 12 Cores

### 2.1 Estrutura

```
                    AMARELO
                   /        \
          AMARELO-     |      LARANJA
          LARANJA              |
        /          \         /         \
VERMELHO-ROXO ----- VERMELHO ----- LARANJA-AMARELO
        \          /         \          /
          MAGENTA              AMARELO
                   \        /
                    AZUL
                  /        \
        AZUL-ROXO ----- AZUL ----- CYAN
                  \        /
                    VERDE
                  /        \
        VERDE-CYAN ----- CYAN ----- AZUL-CYAN
                  \        /
                   CIANO
                   /       \
             AZUL-VERDE     AZUL
                   \       /
                    VERDE
```

### 2.2 Cores Primárias (3)

| Cor | Ângulo | Hex |
|-----|--------|-----|
| Vermelho | 0° | #FF0000 |
| Amarelo | 120° | #FFFF00 |
| Azul | 240° | #0000FF |

### 2.3 Cores Secundárias (3)

| Cor | Mistura | Hex |
|-----|---------|-----|
| Verde | Amarelo + Azul | #00FF00 |
| Laranja | Vermelho + Amarelo | #FF8000 |
| Roxo | Azul + Vermelho | #8000FF |

### 2.4 Cores Terciárias (6)

| Cor | Mistura | Hex |
|-----|---------|-----|
| Amarelo-Laranja | Amarelo + Laranja | #FFCC00 |
| Laranja-Vermelho | Laranja + Vermelho | #FF6600 |
| Vermelho-Roxo | Vermelho + Roxo | #CC0066 |
| Roxo-Azul | Roxo + Azul | #6600CC |
| Azul-Cyan | Azul + Cyan | #0066CC |
| Cyan-Verde | Cyan + Verde | #00CC66 |

---

## 3. Relações na Roda

### 3.1 Cores Adjacentes

```
┌─────────────────────────────┐
│                             │
│    COR A   ←→   COR B      │
│    (30° apart)             │
│                             │
└─────────────────────────────┘
```

- Diferença de 30° na roda
- Alta similaridade
- Harmonioso, mas pode ser monótono

### 3.2 Cores Opostas (Complementares)

```
┌─────────────────────────────┐
│                             │
│    COR A   ←→   COR B      │
│    (180° apart)            │
│                             │
└─────────────────────────────┘
```

- Opostas na roda (180°)
- Alto contraste
- Cria destaque visual

### 3.3 Triângulo (Triádico)

```
         COR A
           /\
          /  \
         /    \
    COR B     COR C
     (120° cada)
```

- 3 cores a 120° de distância
- Equilíbrio visual
- Vibrante e dinámico

---

## 4. Criando Harmonias

### 4.1 Monocromática

```
COR BASE + variação de saturação/luminosidade

Exemplo: #FF0000, #CC0000, #990000, #660000
```

### 4.2 Analógica

```
Cores adjacentes na roda (30-60° apart)

Exemplo: Laranja → Amarelo-Laranja → Amarelo
```

### 4.3 Complementar

```
Cores opostas na roda (180° apart)

Exemplo: Azul ←→ Laranja
```

### 4.4 Split-Complementar

```
Uma cor + duas adjacentes à oposta

Exemplo: Azul + (Laranja-Amarelo + Roxo)
```

### 4.5 Triádica

```
Três cores a 120° equal distance

Exemplo: Vermelho + Amarelo + Azul
```

### 4.6 Tetrádica (Square)

```
Quatro cores a 90° apart

Exemplo: Vermelho + Verde + Azul + Laranja
```

---

## 5. Aplicações Práticas

### 5.1 Escolha de Cor Base

| Contexto | Cor Base Sugerida |
|----------|-------------------|
| Corporativo | Azul |
| Criativo | Roxo ou Laranja |
| Natureza | Verde |
| Luxo | Dourado ou Preto |
| Infantil | Amarelo ou Vermelho |

### 5.2 Proporção de Uso

| Uso | Porcentagem |
|-----|------------|
| Cor dominante (60%) | Fundo/principal |
| Cor secundária (30%) | Suporte |
| Cor de acento (10%) | Destaque/CTAs |

---

## Cross-refs

- [harmony.md](harmony.md) - Harmonias detalhadas
- [palettes.md](palettes.md) - Criação de paletas