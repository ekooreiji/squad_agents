# DevOps

Skill para práticas DevOps - Docker, CI/CD, Kubernetes com Python, JavaScript/TypeScript e Java.

---

## Visão Geral

Esta skill oferece guias, exemplos, templates e checklists para implementar práticas DevOps eficazes.

## Arquitetura de Diretórios

```
devops/
├── guides/
│   ├── concepts/          # Conceitos fundamentais
│   ├── docker/          # Docker
│   ├── ci-cd/          # CI/CD
│   ├── kubernetes/      # Kubernetes
│   ├── container-orchestration/ # Orquestração
│   └── infrastructure/ # Infraestrutura
├── structures/         # Estruturas
├── templates/           # Templates
├── examples/           # Exemplos
└── checklists/        # Checklists
```

## Guias por Categoria

### Conceitos
- `guides/concepts/devops.md` - O que é DevOps
- `guides/concepts/principles.md` - Princípios DevOps

### Docker
- `guides/docker/intro.md` - Introdução
- `guides/docker/dockerfile.md` - Dockerfile
- `guides/docker/docker-compose.md` - Docker Compose

### CI/CD
- `guides/ci-cd/github-actions.md` - GitHub Actions
- `guides/ci-cd/gitlab-ci.md` - GitLab CI

### Kubernetes
- `guides/kubernetes/pods-deployments.md` - Pods e Deployments
- `guides/kubernetes/services.md` - Services
- `guides/kubernetes/ingress.md` - Ingress

### Templates
- `templates/docker-compose.yml`
- `templates/Dockerfile`
- `templates/github-actions.yml`

## Exemplos
- `examples/docker/python/`
- `examples/docker/javascript/`

## Checklists
- `checklists/docker-best-practices.md`
- `checklists/kubernetes-best-practices.md`

## Integração com Skills

Esta skill complementa:
- **[software-architecture](../software-architecture/SKILL.md)**
- **[database-architecture](../database-architecture/SKILL.md)**
- **[api-design](../api-design/SKILL.md)**
- **[code-review](../code-review/SKILL.md)**
- **[testing-strategies](../testing-strategies/SKILL.md)**

### Fluxo

```
devops ←→ testing-strategies (CI/CD)
       ↓
software-architecture
       ↓
database-architecture
       ↓
    api-design
```