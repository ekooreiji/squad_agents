# Code Review

Skill para práticas de code review, checklists e processos de revisão de código para times de desenvolvimento.

---

## Visão Geral

Esta skill oferece guias, templates, exemplos e checklists para realizar code reviews eficazes e construtivos.

## Arquitetura de Diretórios

```
code-review/
├── guides/
│   ├── concepts/           # Conceitos fundamentais
│   ├── process/           # Processo de review
│   ├── best-practices/    # Melhores práticas
│   ├── checklist-categories/ # Checklists por categoria
│   └── tools/            # Ferramentas
├── templates/             # Templates reutilizáveis
├── examples/             # Exemplos de PRs e comentários
└── checklists/          # Checklists completos
```

## Guias por Categoria

### Conceitos Fundamentais
- `guides/concepts/what-is-code-review.md` - O que é code review
- `guides/concepts/benefits.md` - Benefícios
- `guides/concepts/approaches.md` - Abordagens
- `guides/concepts/review-cycles.md` - Ciclos de review

### Processo
- `guides/process/workflow.md` - Workflow padrão
- `guides/process/roles.md` - Papéis
- `guides/process/feedback.md` - Como dar feedback
- `guides/process/handling-conflicts.md` - Lidando com conflitos

### Melhores Práticas
- `guides/best-practices/pr-size.md` - Tamanho de PR
- `guides/best-practices/descriptions.md` - Descrições claras
- `guides/best-practices/self-review.md` - Auto-revista antes
- `guides/best-practices/response-time.md` - SLAs de resposta

### Checklist Categories
- `guides/checklist-categories/logic.md` - Lógica
- `guides/checklist-categories/security.md` - Segurança
- `guides/checklist-categories/performance.md` - Performance
- `guides/checklist-categories/testing.md` - Testes
- `guides/checklist-categories/documentation.md` - Documentação
- `guides/checklist-categories/code-style.md` - Estilo de código
- `guides/checklist-categories/accessibility.md` - Acessibilidade

### Ferramentas
- `guides/tools/github.md` - GitHub PRs
- `guides/tools/gitlab.md` - GitLab MRs
- `guides/tools/bitbucket.md` - Bitbucket
- `guides/tools/linters.md` - Linters e static analysis

## Templates
- `templates/pr-description.md` - Template PR
- `templates/review-checklist.md` - Checklist de review
- `templates/self-review-guide.md` - Guia auto-revista

## Exemplos
- `examples/good-pr-description.md` - Boas descrições PR
- `examples/effective-comments.md` - Comentários eficazes
- `examples/feedback-examples.md` - Exemplos de feedback

## Checklists
- `checklists/general.md` - Checklist geral
- `checklists/security-focused.md` - Focado em segurança
- `checklists/performance-focused.md` - Focado em performance

## Integração com Skills

Esta skill complementa:
- **[software-architecture](../software-architecture/SKILL.md)** - Padrões arquiteturais
- **[database-architecture](../database-architecture/SKILL.md)** - Models e queries
- **[api-design](../api-design/SKILL.md)** - APIs e endpoints

### Fluxo de Integração

```
code-review ←→ software-architecture
       ↓
database-architecture
       ↓
    api-design
```

## Recursos Adicionais

### Ferramentas Common
- GitHub Pull Requests
- GitLab Merge Requests
- Bitbucket Pull Requests
- GitHub Actions / GitLab CI
- Linters (ESLint, Pylint, Prettier)