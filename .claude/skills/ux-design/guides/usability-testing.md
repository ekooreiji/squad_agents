# Usability Testing

Guia completo para planejamento, condução e análise de testes de usabilidade.

---

## O que é Teste de Usabilidade

Método de avaliação onde usuários reais tentam completar tarefas no produto, identificando problemas de usabilidade.

---

## Tipos de Teste

### Moderado vs Não Moderado

| Tipo | Vantagens | Desvantagens |
|------|-----------|---------------|
| Moderado | Profundidade, flexibility | Custo, agendamento |
| Não moderado | Escala, menor custo | Menos contexto |

### Remoto vs Presencial

| Tipo | Quando |
|------|----------|
| Remoto | Equipes distribuídas |
| Presencial | Observação de contexto |

---

## Planejamento

### 1. Definir Objetivos

```markdown
## Teste: [Nome]

### Objetivo
[Avaliar/FVALIDAR/...]
```

### 2. Selecionar Tarefas

```markdown
### Tarefas

| # | Tarefa | MÉTRICA |
|---|--------|---------|
| 1 | [Tarefa 1] | [Sucesso/Tempo] |
| 2 | [Tarefa 2] | [Sucesso/Tempo] |
```

### 3. Definir Métricas

| Métrica | Definição |
|---------|-----------|
| Taxa de sucesso | % que completa tarefa |
| Tempo | Tempo para completar |
| Erros | Número de erros |
| Satisfação | NPS/SUS pós-teste |

### 4. Criar Roteiro

Ver `templates/usability-test-script.md`

---

## Condução

### Setup

1. Equipamento preparado
2. Gravação funcionando
3. Consentimento assinado
4. Ambiente sem distrações

### Estrutura

```
├── Abertura (5 min)
│   ├── Introdução
│   └── Consentimento
├── Warming (5 min)
│   └── Tarefa de prática
├── Tarefas (30-45 min)
│   ├── [Tarefa 1]
│   ├── [Tarefa 2]
│   └── ...
├── Questionário (5 min)
│   └── Satisfação
└── Entrevista (10 min)
    └── Perguntas abertas
```

### Papéis

- **Moderador**: Conduz teste
- **Observador**: Anotasilenciosamente

### Boas Práticas

- Não ajudar demais
- Deixar usuário errar
- Pedir "pensar alto"
- Anotar observações

---

## Análise

### Warm Data

1. Assistir gravações
2. Identificar problemas
3. Categorizar porseveridade

### Matriz de Severidade

| Severidade | Critério |
|-----------|----------|
| Crítica | Bloqueia tarefa |
| Maior | Dificulta muito |
| Menor | Causa frustração |
| Cosmético | Não afeta |

### Relatório

```markdown
## Relatório: Teste de Usabilidade

### Participantes
| ID | Perfil | Experiência |
|----|-------|--------------|
| P1 | ... | ... |

### Problemas Encontrados

| # | Problema | Severidade | Tarefa | Recomendação |
|---|----------|------------|---------|---------------|
| 1 | ... | ... | ... | ... |
```

---

## Número de Participantes

| Estudo | Participantes |
|-------|----------------|
| Qualitativo | 5-8 |
| Quantitativo | 10-12+ |

Regra: 5 participantes revelam 85% dos problemas.

---

## Cross-refs

- [user-research](../user-research.md) - Planejar pesquisa
- [template-library](../template-library/SKILL.md) - Documentar resultados