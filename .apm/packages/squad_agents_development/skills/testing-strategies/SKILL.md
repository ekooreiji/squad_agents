# Testing Strategies

Skill para estratégias de testing - Unit, Integration, E2E, TDD com Python, JavaScript/TypeScript e Java.

---

## Visão Geral

Esta skill oferece guias, exemplos, templates e checklists para implementar estratégias de teste eficazes.

## Arquitetura de Diretórios

```
testing-strategies/
├── guides/
│   ├── concepts/          # Conceitos fundamentais
│   ├── unit/             # Testes unitários
│   ├── integration/       # Testes de integração
│   ├── e2e/             # Testes E2E
│   ├── mocking/          # Mocking e stubs
│   ├── coverage/         # Cobertura
│   └── ci-cd/           # Testing em CI/CD
├── structures/           # Estruturas de teste
├── templates/            # Templates
├── examples/             # Exemplos
└── checklists/          # Checklists
```

## Guias por Categoria

### Conceitos Fundamentais
- `guides/concepts/what-is-testing.md` - O que é testing
- `guides/concepts/pyramid.md` - Testing pyramid
- `guides/concepts/testing-types.md` - Tipos de testes
- `guides/concepts/tdd-bdd.md` - TDD e BDD

### Testes Unitários
- `guides/unit/python.md` - Unit tests Python
- `guides/unit/javascript.md` - Unit tests JS/TS
- `guides/unit/java.md` - Unit tests Java

### Testes de Integração
- `guides/integration/python.md` - Integração Python
- `guides/integration/javascript.md` - Integração JS/TS
- `guides/integration/database.md` - Database testing

### Testes E2E
- `guides/e2e/playwright.md` - Playwright
- `guides/e2e/cypress.md` - Cypress
- `guides/e2e/selenium.md` - Selenium

### Mocking
- `guides/mocking/python.md` - Mocking Python
- `guides/mocking/javascript.md` - Mocking JS/TS

### Coverage
- `guides/coverage/metrics.md` - Métricas
- `guides/coverage/tools.md` - Ferramentas

### CI/CD
- `guides/ci-cd/github-actions.md` - GitHub Actions
- `guides/ci-cd/gitlab-ci.md` - GitLab CI

## Templates
- `templates/test-template.md` - Template teste
- `templates/fixture-template.md` - Template fixture
- `templates/mock-template.md` - Template mock

## Exemplos
- `examples/python/unit-test-example.md`
- `examples/python/integration-test-example.md`
- `examples/javascript/unit-test-example.md`
- `examples/javascript/e2e-test-example.md`

## Checklists
- `checklists/unit-test-checklist.md`
- `checklists/integration-test-checklist.md`
- `checklists/e2e-test-checklist.md`

## Integração com Skills

Esta skill complementa:
- **[software-architecture](../software-architecture/SKILL.md)** - Validar arquitetura
- **[database-architecture](../database-architecture/SKILL.md)** - Testes de banco
- **[api-design](../api-design/SKILL.md)** - Testes de API
- **[code-review](../code-review/SKILL.md)** - Testes no review

### Fluxo de Integração

```
testing-strategies ←→ software-architecture
       ↓                    ↓
database-architecture  api-design
       ↓
    code-review
```