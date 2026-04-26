# SQL vs NoSQL

## Comparação por Características

| Característica | SQL | NoSQL |
|----------------|-----|-------|
| **Modelo de dados** | Tabular (linhas/colunas) | Documentos, chave-valor, grafo, colunar |
| **Schema** | Schema fixo (pré-definido) | Schema dinâmico/sem schema |
| **Consultas** | SQL padrão | APIs proprietárias |
| **Transações** | ACID completo | Eventual consistency (BASE) |
| **Escalabilidade** | Vertical (geralmente) | Horizontal (nativa) |
| **Relacionamentos** | Suporte nativo a JOINS | Dados aninhados ou referências |

## Quando Usar SQL

- **Dados estruturados e relacionados** - Sistemas que exigem integridade referencial
- **Transações complexas** - Banking, e-commerce, sistemas financeiros
- **Schema estável** - Quando a estrutura de dados é bem definida e raramente muda
- **Consultas analíticas** - Reporting, dashboards, business intelligence
- **Compatibilidade ACID** - Quando a consistência é crítica

### Recomendação: PostgreSQL
- Suporte a JSON (meio termo NoSQL)
- Tipos geometricos
- Full-text search
- Extensões丰富的

### Recomendação: MySQL
- Aplicações web (stack LAMP/WAMP)
-Read-heavy workloads
- Replicação confiável

### Recomendação: SQLite
- Aplicações desktop/mobile
- Prototyping
- Dados locais (Embedded)

## Quando Usar NoSQL

- **Dadossemi-estruturados ou desestruturados** - Logs, eventos, sensores
- **Escalabilidade horizontal massiva** - Aplicações com alto volume de escrita
- **Schema flexível** - Dados que mudam frequentemente
- **Alta disponibilidade** - Sistemas distribuídos tolerancia a falhas
- **Latência baixa** - Cache, sessões, real-time

### Recomendação: MongoDB
- Document store flexível
- APIs RESTful
- Prototyping rápido
- Dados de usuário/perfil

### Recomendação: Redis
- Cache em memória
- Filas e message brokers
- Sessões distribuídas
- Real-time

## Padrões de Uso Combinado

### Polyglot Persistence
```
┌─────────────────────────────────────────┐
│              Aplicação                  │
└─────────────┬─────────────────┬───────────┘
              │                 │
        ┌─────▼─────┐     ┌─────▼─────┐
        │  SQL DB   │     │ NoSQL DB  │
        │(Postgres) │     │(MongoDB) │
        └─────────┘     └──────────┘
```

### Casos de Uso
| Dado | SGBD Recomendado |
|------|------------------|
| Usuários, autenticação | PostgreSQL |
| Pedidos, transações | PostgreSQL |
| Logs, eventos | MongoDB |
| Cache, sessões | Redis |
| Arquivos, attachments | S3 ou similar |

## Decisão

### Perguntas para Decidir

1. **Dados são relacionais?** → SQL
2. **Precisa de transações ACID?** → SQL
3. **Volume massivo de escritas?** → NoSQL
4. **Schema flexibility necessário?** → NoSQL
5. **Escala horizontal necessária?** → NoSQL
6. **Mista (-relacional + flexível)?** → Polyglot ou PostgreSQL com JSON

## Referências

- [PostgreSQL JSON](https://www.postgresql.org/docs/current/functions-json.html)
- [MongoDB Use Cases](https://www.mongodb.com/use-cases)
- [Redis Use Cases](https://redis.io/docs/use-cases/)