# Database Architecture

Skill para arquitetura de banco de dados, SGBDs e ORMs em Python e JavaScript.

## Visão Geral

Esta skill oferece guias, exemplos, templates e comparações para trabalhar com bancos de dados em projetos Python e JavaScript/TypeScript.

## Arquitetura de Diretórios

```
database-architecture/
├── guides/
│   ├── concepts/       # Conceitos fundamentais
│   ├── sql/           # Guias SGBDs SQL
│   ├── nosql/         # Guias SGBDs NoSQL
│   └── tutorials/    # Tutoriais por linguagem
├── structures/       # Estruturas recomendadas
├── diagrams/         # Diagramas ER e migrations
├── templates/        # Templates reutilizáveis
├── examples/        # Exemplos de código
└── checklists/      # Checklists de revisão
```

## Guias por Categoria

### Conceitos Fundamentais
- `guides/concepts/sql-vs-nosql.md` - Comparação SQL vs NoSQL
- `guides/concepts/orm-overview.md` - Overview de ORMs
- `guides/concepts/patterns.md` - Padrões de acesso a dados

### SGBDs SQL
- `guides/sql/postgresql.md` - PostgreSQL
- `guides/sql/mysql.md` - MySQL
- `guides/sql/sqlite.md` - SQLite

### SGBDs NoSQL
- `guides/nosql/mongodb.md` - MongoDB
- `guides/nosql/redis.md` - Redis

### Tutoriais Python
- `guides/tutorials/python/sqlalchemy.md` - SQLAlchemy
- `guides/tutorials/python/django-orm.md` - Django ORM
- `guides/tutorials/python/peewee.md` - Peewee

### Tutoriais JavaScript/TypeScript
- `guides/tutorials/javascript/prisma.md` - Prisma
- `guides/tutorials/javascript/typeorm.md` - TypeORM
- `guides/tutorials/javascript/mongoose.md` - Mongoose
- `guides/tutorials/javascript/sequelize.md` - Sequelize

## Integração com Software Architecture

Esta skill complementa a skill [software-architecture](../software-architecture/SKILL.md), fornecendo informações específicas para decisões de banco de dados em diferentes tipos de arquitetura.

## Conceitos Avançados

### Async Operations
- `guides/concepts/async-patterns.md` - Operações assíncronas

### Migrations
- `guides/concepts/migrations-guide.md` - Melhores práticas

### Error Handling
- `guides/concepts/error-handling.md` - Tratamento de erros

### Testing
- `guides/concepts/testing.md` - Testes com banco de dados

### Backup/Recovery
- `guides/concepts/backup-recovery.md` - Backup strategies

### Diagramas Avançados
- `diagrams/erd/advanced-erd.md` - Modelos complexos (E-commerce, Blog, Multi-tenant)
- `diagrams/migrations/migration-flow.md` - Fluxo de migrations

## Templates

| Template | Uso |
|----------|-----|
| `templates/model.md` | Modelo de dados |
| `templates/migration.md` | Migration |
| `templates/repository.md` | Repository pattern |
| `templates/connection-pooling.md` | Connection pool |
| `templates/adr-template.md` | Architecture Decision Record |

## Checklists

| Checklist | Descrição |
|-----------|-----------|
| `checklists/review.md` | Revisão de banco de dados |
| `checklists/security.md` | Segurança |
| `checklists/performance.md` | Performance |
| `checklists/debugging.md` | Troubleshooting |

## Integração

Esta skill integra-se com [software-architecture](../software-architecture/SKILL.md) para decisões completas de arquitetura.