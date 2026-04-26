# Prototyping

Guia completo para criar protótipos interativos.

---

## 1. O que são Protótipos

Protótipos são versões interativas testáveis do design final.

---

## 2. Tipos de Protótipos

### 2.1 Por Fidelidade

| Tipo | Interatividade | Uso |
|------|---------------|-----|
| **Clickable** | Clicksonly | Validação básica |
| **Flow-based** | Flows completos | Teste de fluxo |
| **High-fi** | near-final | handoff |

### 2.2 Por Ferramenta

| Ferramenta | Uso | Prós |
|-----------|-----|------|
| **Figma** | Web, mobile | Colaborativo |
| **Sketch** | Web, mobile | Completo |
| **Adobe XD** | Web, mobile | Prototype |
| **InVision** | Web | Free option |
| **Principle** | Mobile | Animation |

---

## 3. Processo

### 3.1 Etapas

```
PASSO 1: Definir Objetivos
          │
          ▼
PASSO 2: Selecionar fidelidade
          │
          ▼
PASSO 3: Criar tela base
          │
          ▼
PASSO 4: Adicionar interações
          │
          ▼
PASSO 5: Testar
          │
          ▼
PASSO 6: Iterar
```

### 3.2 Interações Básicas

| Interaction | Usage |
|-------------|-------|
| Tap/Click | Navigate |
| Hover | highlight |
| Long press | Context menu |
| Swipe | Carrossel |
| Drag | Reorder |

---

## 4. Estrutura de Protótipo

### 4.1 Páginas Necessárias

- Login/Cadastro (se aplicável)
- Onboarding (se aplicável)
- Home/Dashboard
- Detail screen
- Error states
- Empty states

### 4.2 Anotações

```markdown
## Interaction Spec

| State | Interaction | Destination | Notes |
|-------|------------|-------------|-------|
| Default | Click | Home | Navigate |
| Loading | Wait | Home | Delay 500ms |
```

---

## Cross-refs

- [usability-testing.md](usability-testing.md) - Testes
- [wireframing.md](wireframing.md) - Wireframes