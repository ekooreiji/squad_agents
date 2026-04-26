# Component Library Template

## Visão Geral

Template para documentar biblioteca de componentes.

---

## Cores

### Primárias
| Nome | Hex | Uso |
|------|-----|-----|
| Primary 500 | #2196F3 | Principal |
| Primary 700 | #1976D2 | Hover |

### Secundárias
| Nome | Hex | Uso |
|------|-----|-----|
| Secondary 500 | #9C27B0 | Destaque |

### Feedback
| Tipo | Cor | Hex |
|------|-----|-----|
| Success | Verde | #4CAF50 |
| Warning | Amarelo | #FFC107 |
| Error | Vermelho | #F44336 |

---

## Tipografia

| Elemento | Fonte | Tamanho | Peso |
|---------|-------|---------|------|
| H1 | Inter | 48px | 700 |
| H2 | Inter | 36px | 600 |
| H3 | Inter | 24px | 600 |
| Body | Inter | 16px | 400 |
| Caption | Inter | 14px | 400 |

---

## Espaçamento

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| xxl | 48px |

---

## Componentes

### Button

#### Variantes
- Primary
- Secondary
- Outline
- Ghost

#### Tamanhos
- Small (32px)
- Medium (40px)
- Large (48px)

#### Estados
- Default
- Hover
- Active
- Disabled

### Input

#### Estados
- Default
- Focus
- Error
- Disabled

### Card

- Default
- Hover
- Selected

---

## Breakpoints

| Dispositivo | Largura |
|-------------|---------|
| Mobile | < 768px |
| Tablet | 768-1024px |
| Desktop | > 1024px |

---

## Usage

```jsx
import { Button } from '@components/Button';

<Button variant="primary" size="medium">
  Click me
</Button>
```