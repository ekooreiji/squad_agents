# User Flows

Guia para mapeamento de fluxos de usuário, desde a concepção até a documentação.

---

## O que são User Flows

Representação visual ou textual do caminho que o usuário segue para completar uma tarefa no produto.

Diferente do journey map:
- **Journey**: Foco em estágio/emocionale
- **Flow**: Foco em aces/concrete

---

## Tipos de Fluxos

### Happy Path
Caminho ideal sem erros ou obstáculos.

### Fluxo Alternativo
Ramificações (erros, retornos).

### Fluxo de Error
Tratamento de erros e exceções.

---

## Notação

### Formato Texto

```
[Tela 1] → [Tela 2] → [Tela 3]
   ↓              ↘
[Tela 1a]      [Tela 3a]
```

### Formato Tabela

| Step | Ação | Tela | Decisão |
|------|------|------|---------|
| 1 | Usuário acessa | Login | - |
| 2 | Insere credenciais | Login | válidas? |
| 3a | Msg erro | Login | não |
| 3b | Redireciona | Dashboard | sim |

### Fluxograma

```
┌─────────┐
│  START  │
└────┬────┘
     ▼
┌─────────┐
│  LOGIN  │──┐
└────┬────┘  │
     ▼      │
  válido?   │
   ┌───┐   │
  ┌┴┐ └┐  │
  │ │  │  │
 SIM│  │NÃO│ │
  ┴─┘  └──┘
   ▼
┌─────────┐
│DASHBOARD│
└────┬────┘
     ▼
┌─────────┐
│  END    │
└─────────┘
```

---

## Criação de Flow

### 1. Definir Objetivo

```markdown
## Flow: [Nome do Flow]

### Objetivo
[O que usuário vai completar]

### Pré-condições
- [Condição 1]
- [Condição 2]
```

### 2. Mapear Passos

1. Identificar starting point
2. Listar ações do usuário
3. Identificar decisões
4. Mapear ramificações
5. Definir endpoint

### 3. Validar

- Testar com usuários
- Verificar completude
- Identificar gaps

---

## Exemplo: Login

```
┌─────────────────────────────────────────────────────────────┐
│                  FLOW: LOGIN                                 │
├─────────────────────────────────────────────────────────────┤
│ START                                                        │
│   │                                                         │
│   ▼                                                         │
│ [Tela Login]  ─────────────────────────────────────────  │
│   │                                                         │
│   ├─[INPUT email]                                          │
│   │                                                         │
│   ├─[INPUT senha]                                          │
│   │                                                         │
│   ▼                                                         │
│ [BUTTON "Entrar"]                                           │
│   │                                                         │
│   ▼                                                         │
│ ┌──────────┐                                                │
│ │válido?   │                                                │
│ └────┬─────┘                                                │
│    SIM│NÃO                                                  │
│ ┌────┴────┐    ┌────────────────────────────────────┐      │
│ ▼        ▼    ▼                                    │      │
│ [Dashboard]  [Msg: "Credenciais inválidas"]         │      │
│             │         │                            │      │
│             └────────┴────────────────────────────┘      │
│   │                                                         │
│   ▼                                                         │
│  END                                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Boas Práticas

- Manter simples
- Focar em tarefa específica
- Documentar alternativas
- Incluir tratamento de erros
- Validar com usuários reais

---

## Ferramentas

- Miro, Figma (visual)
- Mermaid (texto estruturado)
- draw.io (fluxogramas)

---

## Template

Ver `templates/user-flow-template.md`

---

## Cross-refs

- [user-journey-mapper](../user-journey-mapper/SKILL.md) - Flow como parte da journey
- [ui-design](../ui-design/SKILL.md) - Implementar interface do flow