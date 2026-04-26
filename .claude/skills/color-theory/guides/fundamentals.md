# Fundamentos das Cores

Guia completo dos fundamentos de teoria das cores.

---

## 1. O que é Cor?

Cor é a percepção visual resultante da luz refletida ou emitida por um objeto.

---

## 2. Atributos da Cor

### 2.1 Matiz (Hue)

| Categoria | Graus | Exemplo |
|-----------|------|--------|
| Vermelho | 0° | #FF0000 |
| Laranja | 30° | #FF8000 |
| Amarelo | 60° | #FFFF00 |
| Verde | 120° | #00FF00 |
| Cyan | 180° | #00FFFF |
| Azul | 240° | #0000FF |
| Magenta | 300° | #FF00FF |

### 2.2 Saturação (Saturation)

| Valor | Descrição | Exemplo |
|-------|----------|--------|
| 100% | Cor pura | #FF0000 |
| 50% | Cor moderada | #FF8080 |
| 0% | Preto e branco | #808080 |

### 2.3 Luminosidade (Lightness/Brightness)

| Valor | Descrição |
|-------|----------|
| 100% | Branco |
| 50% | Cor pura |
| 0% | Preto |

---

## 3. Modelos de Cor

### 3.1 RGB (Red, Green, Blue)

| Cor | R | G | B |
|-----|---|---|---|
| Preto | 0 | 0 | 0 |
| Branco | 255 | 255 | 255 |
| Vermelho | 255 | 0 | 0 |
| Verde | 0 | 255 | 0 |
| Azul | 0 | 0 | 255 |
| Amarelo | 255 | 255 | 0 |
| Ciano | 0 | 255 | 255 |
| Magenta | 255 | 0 | 255 |

### 3.2 HEX

```css
/* Notação HEX */
#RRGGBB      /* 6 caracteres */
#RGB         /* 3 caracteres */

/* Exemplos */
#FF0000      /* Vermelho */
#00FF00      /* Verde */
#0000FF     /* Azul */
```

### 3.3 HSL (Hue, Saturation, Lightness)

```css
/* hsl(hue, saturation, lightness) */
hsl(0, 100%, 50%)     /* Vermelho puro */
hsl(120, 100%, 50%)   /* Verde puro */
hsl(240, 100%, 50%)   /* Azul puro */
```

### 3.4 CMYK (Print)

| Cor | C | M | Y | K |
|-----|---|---|---|---|
| Preto | 0 | 0 | 0 | 100 |
| Branco | 0 | 0 | 0 | 0 |
| Vermelho | 0 | 100 | 100 | 0 |
| Azul | 100 | 100 | 0 | 0 |

---

## 4. Temperatura de Cor

### 4.1 Cores Quentes

| Cor | Humor | Uso |
|-----|------|-----|
| Vermelho | Energia, urgência | CTA, alertas |
| Laranja | Otimismo, criatividade | Destaques |
| Amarelo | Felicidade, atenção | Avisos |

### 4.2 Cores Frias

| Cor | Humor | Uso |
|-----|------|-----|
| Verde | Segurança, natureza | Sucesso, crescimento |
| Azul | Confiança, profissionalismo | Corp, links |
| Roxo | Criatividade, mistério | Luxo, premium |

---

## 5. Cores Neutras

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto | #000000 | Texto, contraste |
| Branco | #FFFFFF | Fundos |
| Cinza | #808080 | Elementos secundários |
| Bege | #F5F5DC | Fundos quentes |
| Marrom | #8B4513 | Elementos orgânicos |

---

## 6. Estrutura de Cores

### 6.1 Cores Base

| Nome | Definição |
|------|----------|
| Primary | Cor principal da marca |
| Secondary | Cor de suporte |
| Accent | Cor de destaque |

### 6.2 Cores Funcionais

| Nome | Uso | Exemplo |
|------|-----|--------|
| Success | Feedback positivo | #4CAF50 |
| Warning | Feedback de atenção | #FF9800 |
| Error | Feedback negativo | #F44336 |
| Info | Informação | #2196F3 |

### 6.3 Cores de Superfície

| Nome | Uso | Exemplo |
|------|-----|--------|
| Background | Fundo principal | #FFFFFF |
| Surface | Card/container | #F5F5F5 |
| Divider | Linhas de separação | #E0E0E0 |

---

## 7. Relação com Outras Skills

- [color-wheel.md](color-wheel.md) - Roda cromática
- [palettes.md](palettes.md) - Criação de paletas