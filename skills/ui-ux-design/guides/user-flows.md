# User Flows

Guia para criar fluxos de usuário (user flows).

---

## 1. O que são User Flows

User flows são a jornada que o usuário segue para completar uma tarefa.

---

## 2. Estrutura de User Flow

### 2.1 Notação Básica

```
[Passo 1] → [Passo 2] → [Passo 3]
   │            ↘            ↘
[Passo 1a] [Passo 2a] [Passo 3a]
```

### 2.2 Fluxo com Decisões

```
         [Início]
            │
            ▼
     ┌────[Login]────┐
     │              │
   válido      inválido
     │              │
     ▼              ▼
[Dashboard]   [Msg erro]
     │              │
     └──────┬──────┘
            │
            ▼
        [Fim]
```

---

## 3. Níveis de Detail

| Nível | Uso | Quando |
|--------|-----|--------|
| **Task flow** | Alta visão | Quick wins |
| **User flow** | Detalhado | Development |
| **Wire flow** | Completo | handoff |

---

## 4. Criação

### 4.1 Processo

```
1. Definir tarefa do usuário
2. Listar passos
3. Identificar decisões
4. Mapear ramificações
5. Validar com usuários
```

### 4.2 Template

```markdown
## Flow: [Nome da Tarefa]

### Objetivo
[O que o usuário vai completar]

### Pré-condições
- [Condição 1]

### Passos
| # | Passo | Decisão | Resultado |
|---|-------|---------|---------|
| 1 | [Ação] | - | - |
| 2 | [Ação] | [Condição] | [Resultado] |
```

---

## Cross-refs

- [wireframing.md](wireframing.md) -Wireframes
- [prototyping.md](prototyping.md) - Protótipos