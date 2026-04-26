# Technical Plan: {Nome do Projeto}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Tech Lead Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | software-architecture |

---

## Visão Geral

{Breve descrição do projeto em 1-2 linhas}

---

## Entrada

### Dados do PO Agent
- requirements-report.md
- acceptance-criteria.md
- bdd-scenarios.md

### Dados do Architect Agent
- solution-architecture.md
- component-diagram.md
- api-design.md

---

## Avaliação de Stack

### Stack Atual do Projeto
| Componente | Tecnologia | Versão | Status |
|-----------|------------|--------|--------|
| Backend | {Node.js/Python/Java} | {vX} | {Atual/Novo} |
| Frontend | {React/Vue/Angular} | {vX} | {Atual/Novo} |
| Database | {PostgreSQL/MongoDB} | {vX} | {Atual/Novo} |

### Dependências Existentes
| Pacote | Versão | Propósito |
|--------|-------|----------|
| {package} | {vX} | {purpose} |

---

## Stack Proposta

### Runtime
| Componente | Tecnologia | Versão | Justificativa |
|-----------|------------|--------|--------------|
| Runtime | {Node.js 18/Python 3.11} | {vX} | {Reason} |
| Framework | {FastAPI/Express/NestJS} | {vX} | {Reason} |
| ORM | {Prisma/SQLAlchemy} | {vX} | {Reason} |

### Dependencies
| Pacote | Versão | Propósito | Tipo |
|--------|-------|----------|----------|------|
| {package} | {vX} | {purpose} | Runtime |

---

## Decisões Técnicas

### Framework Backend
| Decisão | Recomendação | Justificativa |
|---------|--------------|--------------|
| {Type} | {Framework} | {Reason} |

### Testing
| Decisão | Ferramenta | Justificativa |
|---------|------------|--------------|
| Unit Tests | Jest / Pytest | {Reason} |
| Integration | Supertest / Requests | {Reason} |
| E2E | Playwright / Cypress | {Reason} |

### Estilo de Código
| Decisão | Style Guide | Justificativa |
|---------|------------|--------------|
| JavaScript/TypeScript | js-standard-style | {Reason} |
| Python | pep8-reference | {Reason} |

---

## Skills Associadas

| Skill | Propósito |
|-------|----------|
| testing-strategies | Estratégia de testes |
| jest-unit-testing | Testes unitários JS/TS |
| pytest-unit-testing | Testes unitários Python |
| js-standard-style | Estilo de código |
| pep8-reference | Estilo Python |
| api-design | Design de APIs |
| database-architecture | Modelo de dados |
| devops | Configuração de ambientes |

---

## Blockers e Riscos

| Blocker/Risco | Impacto | Mitigação |
|--------------|---------|-----------|
| {Blocker} | {High/Medium/Low} | {Mitigation} |

---

## Decision Points

| Ponto | Status | Discussão Necessária |
|-------|--------|-------------------|
| {Decision} | {Pendente/Aprovado} | {Yes/No} |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | {Pergunta 1} | {Justificativa 1} |
| 2 | {Pergunta 2} | {Justificativa 2} |

---

## Próximos Passos
- [ ] Validar stack técnica com a equipe
- [ ] Revisar dependências
- [ ] Iniciar implementação das tasks
- [ ] Configurar ambiente de desenvolvimento

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Tech Lead Agent | Versão inicial |