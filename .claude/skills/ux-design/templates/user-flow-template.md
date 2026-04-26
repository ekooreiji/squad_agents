# Template de User Flow

Template para documentação de fluxos de usuário.

---

## Estrutura

```markdown
# Flow: [Nome do Flow]

## Informações

| Campo | Descrição |
|-------|-----------|
| Objetivo | [O que usuário vai completar] |
| Pré-condições | [O que precisa antes] |
| Pós-condições | [O que acontece após] |
| Tipo | [Happy path / Alternativo / Erro] |

## Fluxo

### Versão Texto

```
[Passo 1: Ação] → [Passo 2: Ação] → [Passo 3: Ação]
    │                 ↘                    ↘
[Erro 1]          [Alternativa]        [Alternativa 2]
```

### Versão Tabular

| Step | Ação | Tela | Decisão | Resultado |
|------|------|------|--------|---------|
| 1 | [Ação] | [Tela] | - | - |
| 2 | [Ação] | [Tela] | [Condição] | [Resultado] |
| 3a | [Ação erro] | [Tela erro] | - | Retorna 2 |
| 3b | [Ação sucesso] | [Tela sucesso] | - | Fim |

## Wireframe

[Espaço para desenho simples]

```
┌──────────────────┐
│    [Tela 1]      │
│                  │
│  [Campo 1]       │
│  [Campo 2]       │
│                  │
│  [Botão]         │
└──────────────────┘
         │
         ▼
┌──────────────────┐
│    [Tela 2]      │
│                  │
│  [Conteúdo]      │
│                  │
│  [Botão 1]      │
│  [Botão 2]      │
└──────────────────┘
```

## Casos Especiais

| Caso | Behavior |
|------|----------|
| [Caso 1] | [Tratamento] |
| [Caso 2] | [Tratamento] |

## Pontos de Decisão

- [Ponto 1]: [Decisão vs alternativa]
- [Ponto 2]: [Decisão vs alternativa]

## Métricas

| Métrica | Meta |
|--------|------|
| Taxa de conclusão | > 90% |
| Tempo médio | < [X] min |
| Taxa de erro | < 5% |

---

## Cross-refs

- [user-journey-mapper](.../user-journey-mapper/SKILL.md) - Flow como parte da jornada
- [ui-design](.../ui-design/SKILL.md) - Interface do flow