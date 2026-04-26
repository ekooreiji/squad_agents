# Metodologias de Gestão

Guia sobre metodologias de gestão de projetos.

---

## 1. Visão Geral das Metodologias

| Metodologia | Quando Usar |
|------------|------------|
| Agile/Scrum | Projetos flexíveis, Requirements incertos |
| Kanban | Fluxo contínuo, manutenção |
| Waterfall | Projetos fixos, Requirements claros |
| Hybrid | Mistura de abordagens |

---

## 2. Scrum

### 2.1 Conceito

Framework ágil que usa ciclos iterativos chamados Sprints.

### 2.2 Papéis

| Papel | Responsabilidade |
|-------|-----------------|
| Product Owner | Priorizar backlog, validar |
| Scrum Master | Facilitar processos |
| Team | Entregar funcionalidades |

### 2.3 Eventos

| Evento | Duração | Frequência |
|--------|---------|-----------|
| Sprint Planning | 2-4h | Início de sprint |
| Daily Standup | 15min | Diário |
| Sprint Review | 1-2h | Fim de sprint |
| Sprint Retrospective | 1-2h | Fim de sprint |

### 2.4 Artefatos

- Product Backlog
- Sprint Backlog
- Increment

### 2.5 Quando Usar

- Requirements mudam frequentemente
- Entregas frequentes
- Equipe pequena/média

---

## 3. Kanban

### 3.1 Conceito

Método visual de fluxo contínuo.

### 3.2 Princípios

| Princípio | Descrição |
|----------|----------|
| Visualizar | Quadro Kanban |
| Limitar WIP | Máx items em progresso |
| Gerenciar fluxo | Tempo de ciclo |
| Tornar explícito | Políticas claras |
| Feedback loops | Melhoria contínua |

### 3.3 Quadro typical

```
| To Do | In Progress | Done |
|-------|------------|------|
```

### 3.4 Quando Usar

- Manutenção contínua
- Suporte
- Projetos pequenos

---

## 4. Waterfall

### 4.1 Conceito

Modelo sequencial linear.

### 4.2 Fases

| Fase | Saída |
|------|------|
| Requirements | Spec |
| Design | Mockups/Arquitetura |
| Implementation | Código |
| Verification | Testes |
| Maintenance | Entrega |

### 4.3 Quando Usar

- Requirements fixos
- Projeto de curta duração
- Setor regulado

---

## 5. Hybrid

### 5.1 Conceito

Mistura de metodologias.

### 5.2 Exemplos

| Abordagem | Descrição |
|----------|----------|
| Water-Scrum | Especificação Waterfall + Execução Scrum |
| Scrumban | Scrum + Kanban |
| Agile-Waterfall | Releases ágeis em projeto Waterfall |

### 5.3 Quando Usar

- Projetos grandes
- Múltiplas equipes
- Necessidade de previsibilidade

---

## 6. Escolhendo Metodologia

### 6.1 Por Tipo de Projeto

| Projeto | Metodologia Recomendada |
|---------|-------------------|
| Website novo | Scrum |
| Redesign | Scrum |
| Manutenção | Kanban |
| App mobile | Scrum |
| Projeto corporativo | Hybrid |

### 6.2 Por Complexidade

| Complexidade | Metodologia |
|------------|-----------|
| Baixa | Kanban |
| Média | Scrum |
| Alta | Hybrid |

---

## Cross-refs

- [intro-gestao.md](intro-gestao.md) - Conceitos
- [planning.md](planning.md) - Como planejar
- [rastreamento.md](rastreamento.md) - Como rastrear