---
name: hexagonal-architecture
description: Guia completo de Arquitetura Hexagonal (Ports & Adapters) com implementações em Python, TypeScript e JavaScript
---

# Arquitetura Hexagonal (Ports & Adapters)

Referência completa para implementação de Arquitetura Hexagonal em diferentes linguagens e frameworks.

---

## Conceitos Fundamentais

### O que é Arquitetura Hexagonal?

A Arquitetura Hexagonal (também conhecida como **Ports & Adapters**) é um padrão arquitetural criado por Alistair Cockburn em 2005. Seu objetivo principal é **isolar a lógica de negócio** do acoplamento com frameworks externos, bancos de dados e APIs.

### Princípios Centrais

```
                    ┌─────────────────────────────────────┐
                    │         ADAPTERS (Entrada)           │
                    │   REST API • CLI • GraphQL • gRPC   │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │          INPUT PORTS               │
                    │     (Interfaces de Uso Cases)      │
                    └──────────────┬──────────────────────┘
                                   │
        ┌───────────────────────────▼───────────────────────────┐
        │                  DOMÍNIO                          │
        │         (Regras de Negócio Puras)                  │
        │    Entities • Value Objects • Domain Services      │
        └───────────────────────────┬───────────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │         OUTPUT PORTS                 │
                    │    (Interfaces de Repositórios)    │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │       ADAPTERS (Saída)                  │
                    │  Database • Cache • External APIs    │
                    └─────────────────────────────────────┘
```

### Terminologia

| Termo | Descrição |
|-------|------------|
| **Domain** | Núcleo da aplicação com regras de negócio (não depende de nada externo) |
| **Port** | Interface abstrata que define como o mundo externo se comunica com o domínio |
| **Adapter** | Implementação concreta de uma porta |
| **Input Port** | Porta de entrada (driver port) - como drivers externos chamam a aplicação |
| **Output Port** | Porta de saída (driven port) - como a aplicação chama serviços externos |
| **Input Adapter** | Adapter que expõe a aplicação (REST, CLI, GraphQL) |
| **Output Adapter** | Adapter que conecta a infraestrutura (DB, Cache, API) |

---

## Por Que Usar?

### Benefícios

1. **Testabilidade** - Teste domínio sem依赖ências externas
2. **Troca de Infraestrutura** - Mude de PostgreSQL para MongoDB sem mudar código de domínio
3. **Flexibilidade** - Adicione novos adapters sem tocar no domínio
4. **Manutenibilidade** - Separe claras responsabilidades
5. **Independência de Framework** - Business logic não know framework

### Quando Usar

- Sistemas com lógica de negócio complexa
- Aplicações que precisam trocar de banco de dados
- Projetos com múltiplos pontos de entrada (REST + CLI + gRPC)
- Apps que dependem de serviços externos (APIs, caches)
- Necessidade de alta testabilidade

---

## Estruturas Suportadas

### Python

- **FastAPI** - `structures/python-fastapi.md`
- **Django** - `structures/python-django.md`
- **Flask** - `structures/python-flask.md`

### TypeScript / Node.js

- **Node.js Native** - `structures/typescript-nodejs.md`
- **Express** - `structures/typescript-express.md`

### JavaScript / Frontend

- **Vanilla JS** - `structures/javascript-vanilla.md`
- **React + Backend** - `structures/react-backend.md`
- **Angular + Backend** - `structures/angular-backend.md`
- **Astro + Backend** - `structures/astro-backend.md`

---

## Processo de Implementação

### 1. Definir Domain
```
domain/
├── entities/           # Entidades do negócio
│   └── user.py
├── value-objects/    # Objetos de valor
│   └── email.py
└── services/        # Serviços de domínio
    └── user_service.py
```

### 2. Definir Ports (Interfaces)
```
ports/
├── input/            # Input ports (use cases)
│   └── create_user.py
└── output/           # Output ports (repositories)
    └── user_repository.py
```

### 3. Implementar Adapters
```
adapters/
├── api/             # FastAPI, Express, Django, etc
│   └── user_controller.py
└── persistence/     # SQLAlchemy, MongoDB, etc
    └── sqlalchemy_user.py
```

### 4. Wiring (Composition Root)
```
main.py  # OndeTudo se conecta
```

---

## Referências

- [Alistair Cockburn - Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [PEP 8 — Style Guide for Python Code](https://peps.python.org/pep-0008/)
- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)