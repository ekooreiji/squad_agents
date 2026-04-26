# Estimativas de Projetos

Guia sobre como estimar prazos.

---

## 1. Por que Estimar é Difícil

### 1.1 Problemas Comuns

- Otimismo
- Viés de ancoragem
- Falácia do planejamento
- Incerteza não prevista

### 1.2 Erros Frequentes

| Erro | Ocorre Quando |
|------|--------------|
| Subestimar | Não considerar riscos |
| Superestimar | Safety margin excessivo |
| Estimar preciso | Números exatos |

---

## 2. Técnicas de Estimativa

### 2.1 Estimativa por Analogia

```
"Projeto similar levou X semanas"
=> Estimativa: X ± 20%
```

**Quando usar**: Projetos similares conhecidos.

### 2.2 Three-Point Estimation

| Otimista | Mais provável | Pessimista |
|----------|-------------|------------|
| 2 dias | 3 dias | 5 dias |

**Fórmula**: (O + 4M + P) / 6

### 2.3 Planning Poker

| user Story Points | Referência |
|----------------|-----------|
| 1 | 1-2 horas |
| 2 | 2-4 horas |
| 3 | 4-8 horas |
| 5 | 1-2 dias |
| 8 | 2-4 dias |
| 13 | 1 semana |

**Como funciona**:
1. PO lê story
2. Time levanta dúvidas
3. Cada um escolhe carta
4. Discussão de divergências
5. Repetir até consenso

---

## 3. Estimativa de Grandes Tarefas

### 3.1 Técnica

1. Dividir em tarefas menores (< 8h)
2. Estimar cada tarefa
3. Somar total
4. Adicionar margem (20-30%)

### 3.2 Exemplo

```
Page Login:
- [ ] Estrutura HTML: 2h
- [ ] Estilos CSS: 2h
- [ ] Validação JS: 1h
- [ ] API integração: 2h
- [ ] Testes: 1h
Total: 8h + 2h margem = 10h
```

---

## 4. Margem de Segurança

### 4.1 Por Tipo de Projeto

| Tipo | Margem Sugerida |
|------|---------------|
| Novo | 30-50% |
| Reforma | 20-30% |
| Manutenção | 10-20% |

### 4.2 Fatores a Considerar

| Fator | Impacto |
|--------|--------|
| Equipe nova | +20% |
| Requirements incertos | +30% |
| Integração externa | +20% |
| Prazo fixo | Margem menor |

---

## 5. Estimativa por Fase

### 5.1 Discovery (Semanas 1-2)

| Atividade | Estimativa |
|----------|----------|
| Entrevistas | 4-8h |
| Análise | 8-16h |
| Estratégia | 8-16h |
| Total | 20-40h |

### 5.2 Design (Semanas 3-6)

| Atividade | Estimativa |
|----------|----------|
| Wireframes | 40-60h |
| Mockups | 40-80h |
| Design System | 20-40h |
| Total | 100-180h |

### 5.3 Desenvolvimento (Semanas 7-12)

| Atividade | Estimativa |
|----------|----------|
| Frontend | 80-120h |
| Backend | 80-160h |
| Integrações | 40-80h |
| Total | 200-360h |

---

## 6. Ferramentas de Apoio

### 6.1 Tabelas de Referência

| Tarefa | Tempo Típico |
|--------|-------------|
| Landing page | 20-40h |
| Página interna | 8-16h |
| Blog post | 16-24h |
| Formulário | 8-16h |
| Dashboard | 40-60h |

### 6.2 Histórico

Manter registro de estimativas vs realizadas:

| Projeto | Estimado | Real | Diferença |
|---------|---------|------|---------|
| Projeto A | 100h | 110h | +10% |
| Projeto B | 200h | 180h | -10% |

---

## Cross-refs

- [planning.md](planning.md) - Como planejar
- [rastreamento.md](rastreamento.md) - Como rastrear
- [releases.md](releases.md) - Gestão de releases