# Rastreamento de Projetos

Guia sobre como rastrear e monitorar progresso.

---

## 1. Por que Rastrear

### 1.1 Benefícios

- Visibilidade do progresso
- Identificação precoce de problemas
- Decisões baseadas em dados
- Comunicação efetiva

### 1.2 O que Rastrear

| Métrica | Por que |
|---------|---------|
| Progresso | Quanto foi feito |
| Velocidade | Ritmo da equipe |
| Qualidade | Bug rate |
| Moral | Engajamento |

---

## 2. Burndown Chart

### 2.1 O que é

Gráfico que mostra trabalho restante ao longo do tempo.

### 2.2 Exemplo

```
Story Points
20 |\
15 | \
10 |  \
 5 |   *----* (ideal)
 0 |-----------------
    S1  S2  S3  Sprint
```

### 2.3 Como Criar

| Dia | Restante | Acumulado |
|-----|---------|----------|
| 1 | 20 | 0 |
| 2 | 18 | 2 |
| 3 | 15 | 5 |
| 4 | 10 | 10 |
| 5 | 5 | 15 |

---

## 3. Burnup Chart

### 3.1 O que é

Gráfico que mostra progresso acumulado.

### 3.2 Exemplo

```
Story Points
    |        *---* (total)
20  |     /
    |  --
15  | /
    |/
 0  |-----------------
    S1  S2  S3  Sprint
```

---

## 4. KPIs de Projeto

### 4.1 Velocidade

```
Velocidade = Story points completados por sprint
```

| Velocidade | Interpretação |
|------------|-------------|
| Constante | Equipe estável |
| Crescendo | Melhorando |
| Caindo | Problemas |

### 4.2 Cycle Time

```
Cycle Time = Tempo do início ao fim de uma tarefa
```

| Tipo | Meta |
|------|-----|
| Bug | < 24h |
| Feature | < 1 semana |
| Review | < 48h |

### 4.3 Acompanhamento de Bug

| Métrica | Meta |
|---------|-----|
| Bug open | < 10 |
| Avg age | < 48h |
| Reopen rate | < 5% |

---

## 5. Status Reports

### 5.1 Estrutura

```
## Status Report - [Projeto]

**Período**: [Data] - [Data]

### Progresso

| Entregável | Status | Notas |
|-----------|--------|-------|
| Item 1 | ✅ Feito | |
| Item 2 | 🔄 Em progresso | |
| Item 3 | 🔴 Bloqueado | |

### Próximos Passos

- [ ] Item para fazer

### Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|-------------|--------|------------|
| X | Média | Alto | Y |

### Decisões Needed

- [ ] Item pendente
```

### 5.2 Frequência

| Tipo | Frequência |
|-------|-----------|
| Diário | Daily standup |
| Semanal | Report à equipe |
| Quinzenal | Report a stakeholders |

---

## 6. Problemas e Soluções

### 6.1 Sinais de Alerta

| Sinal | Problema Possível |
|-------|----------------|
| Burndown flat | Estagnado |
| Aumento de bugs | Qualidade caindo |
| Atraso constante | Estimativa ruim |
| Baixo moral | Sobrecarga |

### 6.2 Ações Corretivas

| Problema | Ação |
|---------|------|
| Escopo creep | Priorizar backlog |
| Bloqueios | Escalonar |
| Atrasos | Re-estimar |
| Bugs | Debugging day |

---

## Cross-refs

- [intro-gestao.md](intro-gestao.md) - Conceitos
- [estimativas.md](estimativas.md) - Como estimar
- [releases.md](releases.md) - Gestão de releases
- [retrospectivas.md](retrospectivas.md) - Melhoria