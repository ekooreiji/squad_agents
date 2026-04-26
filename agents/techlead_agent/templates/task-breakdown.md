# Task Breakdown: {Nome do Projeto}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Tech Lead Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | testing-strategies |

---

## Visão Geral

{Descrição do projeto em 1-2 linhas}

---

## Bloco 1: Setup e Configuração

### T1.1: Configurar Projeto
| Campo | Valor |
|-------|-------|
| Descrição | Inicializar projeto com estrutura base |
| Estimativa | {X} dia(s) |
| Dependências | Nenhuma |
| Critério de Pronto | Projeto configurado e rodando |
| Skills Associadas | software-architecture |

### T1.2: Configurar Linting e Formatting
| Campo | Valor |
|-------|-------|
| Descrição | Configurar ESLint, Prettier, Black |
| Estimativa | {X} dia(s) |
| Dependências | T1.1 |
| Critério de Pronto | Lint passing |
| Skills Associadas | js-standard-style, pep8-reference |

### T1.3: Configurar Testing
| Campo | Valor |
|-------|-------|
| Descrição | Configurar Jest, Pytest |
| Estimativa | {X} dia(s) |
| Dependências | T1.1 |
| Critério de Pronto | Testes rodando |
| Skills Associadas | testing-strategies, jest-unit-testing |

---

## Bloco 2: Backend

### T2.1: Implementar Modelo de Dados
| Campo | Valor |
|-------|-------|
| Descrição | Criar entidades e migrations |
| Estimativa | {X} dia(s) |
| Dependências | T1.1 |
| Critério de Pronto | Schema criado no banco |
| Skills Associadas | database-architecture |

### T2.2: Implementar API - Autenticação
| Campo | Valor |
|-------|-------|
| Descrição | Criar endpoints de auth (login, register) |
| Estimativa | {X} dia(s) |
| Dependências | T2.1 |
| Critério de Pronto | Endpoints funcionais |
| Skills Associadas | api-design |

### T2.3: Implementar API - Recursos Principais
| Campo | Valor |
|-------|-------|
| Descrição | CRUD de {recurso principal} |
| Estimativa | {X} dia(s) |
| Dependências | T2.2 |
| Critério de Pronto | Endpoints funcionais |
| Skills Associadas | api-design |

### T2.4: Implementar Lógica de Negócio
| Campo | Valor |
|-------|-------|
| Descrição | Business logic para {feature} |
| Estimativa | {X} dia(s) |
| Dependências | T2.3 |
| Critério de Pronto | Lógica implementada |
| Skills Associadas | software-architecture |

---

## Bloco 3: Frontend

### T3.1: Configurar Frontend
| Campo | Valor |
|-------|-------|
| Descrição | Setup React/Vue com TypeScript |
| Estimativa | {X} dia(s) |
| Dependências | T1.1 |
| Critério de Pronto | Frontend rodando |

### T3.2: Implementar UI - Componentes Base
| Campo | Valor |
|-------|-------|
| Descrição | Criar componentes compartilhados |
| Estimativa | {X} dia(s) |
| Dependências | T3.1 |
| Critério de Pronto | Componentes prontos |

### T3.3: Implementar UI - Páginas
| Campo | Valor |
|-------|-------|
| Descrição | Criar páginas {login, dashboard} |
| Estimativa | {X} dia(s) |
| Dependências | T3.2 |
| Critério de Pronto | Páginas funcionais |

---

## Bloco 4: Testing

### T4.1: Unit Tests - Backend
| Campo | Valor |
|-------|-------|
| Descrição | Testes unitários para {módulos} |
| Estimativa | {X} dia(s) |
| Dependências | T2.4 |
| Critério de Pronto | {X}% cobertura |
| Skills Associadas | jest-unit-testing, pytest-unit-testing |

### T4.2: Integration Tests
| Campo | Valor |
|-------|-------|
| Descrição | Testes de integração API |
| Estimativa | {X} dia(s) |
| Dependências | T2.4 |
| Critério de Pronto | Tests passando |
| Skills Associadas | testing-strategies |

### T4.3: E2E Tests
| Campo | Valor |
|-------|-------|
| Descrição | Testes end-to-end |
| Estimativa | {X} dia(s) |
| Dependências | T3.3 |
| Critério de Pronto | Cenários críticos testados |
| Skills Associadas | testing-strategies |

---

## Bloco 5: DevOps

### T5.1: Configurar Ambiente
| Campo | Valor |
|-------|-------|
| Descrição | Variáveis de ambiente |
| Estimativa | {X} dia(s) |
| Dependências | T1.1 |
| Critério de Pronto | Ambiente configurado |
| Skills Associadas | devops |

### T5.2: Docker
| Campo | Valor |
|-------|-------|
| Descrição | Criar Dockerfile e docker-compose |
| Estimativa | {X} dia(s) |
| Dependências | T5.1 |
| Critério de Pronto | Container rodando |
| Skills Associadas | devops |

---

## Sequência de Execução

```
┌─────────────────────────────────────────────────────────┐
│ BLOCO 1: Setup (T1.1 → T1.2 → T1.3)                  │
│    ↓                                                 │
│ BLOCO 2: Backend (T2.1 → T2.2 → T2.3 → T2.4)        │
│    ↓                                                 │
│ BLOCO 3: Frontend (T3.1 → T3.2 → T3.3)             │
│    ↓                           ↓                     │
│ BLOCO 4: Testing (T4.1 → T4.2 → T4.3)              │
│    ↓                                                 │
│ BLOCO 5: DevOps (T5.1 → T5.2)                       │
└─────────────────────────────────────────────────────────┘
```

---

## Estimativa Total

| Bloco | Estimativa |
|-------|-----------|
| Bloco 1: Setup | {X} dia(s) |
| Bloco 2: Backend | {X} dia(s) |
| Bloco 3: Frontend | {X} dia(s) |
| Bloco 4: Testing | {X} dia(s) |
| Bloco 5: DevOps | {X} dia(s) |
| **Total** | **{X} dia(s)** |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | {Pergunta 1} | {Justificativa 1} |
| 2 | {Pergunta 2} | {Justificativa 2} |

---

## Próximos Passos
- [ ] Revisar tasks com a equipe
- [ ] Estimar effort
- [ ] Iniciar implementação

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Tech Lead Agent | Versão inicial |