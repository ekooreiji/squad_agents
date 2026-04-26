# Test Plan: {Nome do Projeto}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Test Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | testing-strategies |

---

## Visão Geral

{Descrição breve do que será testado neste projeto}

---

## Entrada

### Dados do Tech Lead
- task-breakdown.md
- technical-plan.md

### Dados do Developer
- implementation-summary.md
- Código fonte

### Dados do Architect
- solution-architecture.md

---

## Escopo de Testes

### Módulos a Testar
| Módulo | Descrição | Prioridade |
|--------|----------|-----------|
| {module} | {Description} | Must |
| {module} | {Description} | Should |

---

## Tipos de Testes

### Unit Tests
| Módulo | Casos de Teste | Cobertura Meta |
|--------|----------------|-----------------|
| {module} | {N} | {X}% |
| {module} | {N} | {X}% |
| **Total** | **{N}** | **{X}%** |

### Integration Tests
| Endpoint | Método | Casos de Teste |
|----------|--------|--------------|
| {endpoint} | GET | {N} |
| {endpoint} | POST | {N} |
| {endpoint} | PUT | {N} |
| {endpoint} | DELETE | {N} |

### E2E Tests
| Fluxo | Casos de Teste |
|-------|--------------|
| {fluxo} | {N} |
| {fluxo} | {N} |

---

## Casos de Teste

### Unit Tests
| ID | Módulo | Caso de Teste | Esperado | Prioridade |
|----|--------|---------------|----------|------------|
| UT-001 | {module} | {test case} | {expected} | Must |
| UT-002 | {module} | {test case} | {expected} | Should |
| UT-003 | {module} | {test case} | {expected} | Could |

### Integration Tests
| ID | Endpoint | Método | Caso de Teste | Esperado | Prioridade |
|----|----------|--------|--------|---------------|----------|------------|
| IT-001 | {endpoint} | GET | {test case} | {status} | Must |
| IT-002 | {endpoint} | POST | {test case} | {status} | Must |
| IT-003 | {endpoint} | PUT | {test case} | {status} | Should |

### E2E Tests
| ID | Fluxo | Caso de Teste | Esperado | Prioridade |
|----|-------|---------------|----------|------------|
| E2E-001 | {flow} | {test case} | {expected} | Must |
| E2E-002 | {flow} | {test case} | {expected} | Should |

---

## Frameworks e Ferramentas

### JavaScript / TypeScript
| Tipo | Framework | Propósito |
|------|------------|-----------|
| Unit | Jest | Testes unitários |
| Integration | Supertest | Testes de API |
| E2E | Playwright | Testes de navegador |
| Mock | Jest mocks | Mocking |

### Python
| Tipo | Framework | Propósito |
|------|------------|-----------|
| Unit | Pytest | Testes unitários |
| Integration | Requests + Pytest | Testes de API |
| Mock | unittest.mock | Mocking |

---

## Estrutura de Arquivos

```
tests/
├── unit/
│   ├── {module}.test.ts
│   └── {module}.test.py
├── integration/
│   ├── api/
│   │   └── {endpoint}.test.ts
│   └── api/
│       └── test_{endpoint}.py
├── e2e/
│   └── {flow}.spec.ts
└── fixtures/
    ├── {module}.fixture.ts
    └── {module}.fixture.py
```

---

## Cobertura Meta

| Módulo | Meta | Prioridade |
|--------|-----|------------|
| {module} | {X}% | Must |
| {module} | {X}% | Should |
| **Total** | **{X}%** | Must |

---

## Skills Associadas

| Skill | Propósito |
|-------|----------|
| testing-strategies | Estratégia geral de testes |
| jest-unit-testing | Testes unitários JS/TS |
| jest-integration-testing | Testes integração JS/TS |
| pytest-unit-testing | Testes unitários Python |
| python-integration-testing | Testes integração Python |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | {Pergunta 1} | {Justificativa 1} |
| 2 | {Pergunta 2} | {Justificativa 2} |

---

## Status dos Testes

| Status | Descrição |
|--------|------------|
| ✅ Testes Concluídos | Todos os testes criados |
| ⏳ Aguardando Review | Pronto para code review |
| 🔄 Em Correção | Necessita correções |

---

## Resumo dos Testes Criados

### Testes Unitários Criados
| Arquivo | Módulo | Casos | Status |
|--------|--------|-------|--------|--------|
| {file}.test.ts | {module} | {N} | ✅ Passando |

### Testes de Integração Criados
| Arquivo | Endpoint | Métodos | Status |
|--------|----------|--------|--------|
| {file}.test.ts | /api/{endpoint} | GET, POST | ✅ Passando |

### Cobertura Alcançada
| Módulo | Cobertura |
|--------|----------|
| {module} | {X}% |
| **Total** | **{X}%** |

---

## Próximos Passos

### Se Aguardando Review
- [ ] Aguardar code review do Code Review Agent
- [ ] Se houver correções nos testes → Aplicar e resubmeter
- [ ] Se aprovado → Finalizado

### Se Em Correção
- [ ] Aplicar correções solicitadas
- [ ] Executar testes
- [ ] Verificar cobertura
- [ ] Resubmeter para review

### Se Aprovado
- [ ] Testes prontos para CI/CD
- [ ] Executar em pipeline

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Test Agent | Versão inicial |