# Componentes de UI

## Introdução

Biblioteca de componentes reutilizáveis para interfaces.

---

## Componentes Base

### Botões (Button)

| Tipo | Uso |
|------|-----|
| Primary | Ação principal |
| Secondary | Ação secundária |
| Outline | Ação terciária |
| Ghost | Ações em toolbar |
| Danger | Ações destructivas |

#### Estados
- Default
- Hover
- Active
- Focus
- Disabled

### Campos de Formulário

| Componente | Descrição |
|------------|-----------|
| Text Input | Entrada de texto |
| Select | Seleção dropdown |
| Checkbox | Seleção múltipla |
| Radio | Seleção única |
| Toggle | Switch on/off |
| Date Picker | Seleção de data |

### Cards

- Card simples
- Card com imagem
- Card com ações
- Card interativo

### Navigation

- Header/Navbar
- Sidebar
- Breadcrumbs
- Tabs
- Pagination

---

## Anatomia de Componentes

### Botão
```
[Ícone] [Label] [Ícone]
  ↓        ↓        ↓
Opcional  Obrigatório Opcional
```

### Input
```
[Label]
[Campo com placeholder]
[Mensagem de erro]
```

### Card
```
┌─────────────────────┐
│      Imagem        │
├─────────────────────┤
│       Título        │
│     Descrição      │
├─────────────────────┤
│   [Ação 1][Ação 2]│
└─────────────────────┘
```

---

## Tamanhos

| Tamanho | Altura | Font |
|---------|--------|------|
| Small | 32px | 14px |
| Medium | 40px | 16px |
| Large | 48px | 16px |

---

## Espaçamento Interno

- Padding padrão: 16px
- Padding compacto: 8px
- Padding expandido: 24px

---

## Estados Visuais

| Estado | Indicador |
|--------|-----------|
| Hover | Fundo mais claro |
| Active | Fundo mais escuro |
| Focus | Borda azul |
| Disabled | Opacidade 50% |

---

## Boas Práticas

- Consistência visual
- Feedback claro
- Estados bem definidos
- Acessibilidade (ARIA)
-keyboard navigation