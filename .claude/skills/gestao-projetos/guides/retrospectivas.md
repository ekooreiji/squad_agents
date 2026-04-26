# Retrospectivas

Guia sobre como conduzir retrospectivas e melhoria contínua.

---

## 1. O que é Retrospectiva

Retrospectiva é uma reunião para revisar o que foi feito e identificar melhorias.

---

## 2. Formatos de Retrospectiva

### 2.1 Start-Stop-Continue

| Categoria | Pergunta |
|-----------|---------|
| Start | O que devemos começar a fazer? |
| Stop | O que devemos parar de fazer? |
| Continue | O que devemos continuar fazendo? |

### 2.2 Glad-Sad-Mad

| Emoção | Exemplo |
|---------|--------|
| Glad | "Gostei da colaboração da equipe" |
| Sad | "Senti falta de mais tempo para design" |
| Mad | "Frustrado com as mudanças de escopo" |

### 2.3 4Ls

| Letdown | O que nos失望 |
|---------|--------------|
| Liked | O que gostamos |
| Learned | O que aprendemos |
| Lacked | O que sentiu falta |
| Longed for | O que desejamos |

---

## 3. Estrutura da Reunião

### 3.1 Duração

| Tipo | Duração |
|------|----------|
| Sprint retrospective | 1-1.5h |
| Project retrospective | 2-4h |
| Quarterly review | Half-day |

### 3.2 Estrutura

```
1. Abertura (5 min)
2. Data gathering (15 min)
3. Generate insights (20 min)
4. Decide actions (30 min)
5. Close (10 min)
```

---

## 4. Perguntas por Fase

### 4.1 O que Foi Bem

- O que funcionou bem?
- O que devemos continuar?

### 4.2 O que Poderia Melhorar

- Onde tuvimos difficulties?
- O que causou bottlenecks?

### 4.3 O que Aprendemos

- Qual nova prática vamos adotar?
- O que mudaremos?

---

## 5. Ações de Melhoria

### 5.1 Definition of action

| Campo | Descrição |
|-------|-----------|
| O que | Descrição clara |
| Quem | Responsável |
| Quando | Prazo |
| Como | Métrica de sucesso |

### 5.2 Exemplo

```
| Ação | Responsável | Prazo | Métrica |
|------|-----------|------|---------|
| Daily standup às 10h | Team | Próxima sprint | 100% participação |
```

### 5.3 Follow-up

- Revisar ações na próxima retrospectiva
- Marcar como conclusão
- Celebrar melhorias implementadas

---

## 6. Best Practices

### 6.1 Preparação

- Coletar dados antes (velocity, bugs, etc)
- Pedir contribuições anônimas
- Preparar visualização

### 6.2 Durante

- Manter segurança psicológica
- Focar em processos, não pessoas
- Evitar blame
- Priorizar ações

### 6.3 Depois

- Publicar resumo
- Rastrear ações
- Revisar progresso

---

## 7. Templates de Ação

### 7.1 Action Item Template

```
## Ação de Melhoria

**ID**: #001
**O que**: Implementar code review antes de merge
**Quem**: @dev
**Quando**: Imediato
**Como**: Verificar no pull request
**Status**: Pendente
```

### 7.2 Improvements Log

| ID | Ação | Responsável | Prazo | Status |
|----|------|-------------|------|--------|
| 001 | Daily standup | TL | Sprint 2 | Concluído |
| 002 | Code review | Dev | Sprint 3 | Em andamento |

---

## Cross-refs

- [intro-gestao.md](intro-gestao.md) - Conceitos
- [rastreamento.md](rastreamento.md) - Métricas
- [releases.md](releases.md) - Releases