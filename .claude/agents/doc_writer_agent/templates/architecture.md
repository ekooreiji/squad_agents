# Architecture Documentation

## Visão Geral do Sistema

{Descrição breve do sistema em 1-2 linhas}

{Descrição detalhada do sistema}

---

## Diagrama de Arquitetura

```mermaid
graph TB
    subgraph "Client Layer"
        A[Web Application]
        B[Mobile Application]
    end
    
    subgraph "API Gateway Layer"
        C[API Gateway]
    end
    
    subgraph "Application Layer"
        D[Auth Service]
        E[Business Service]
        F[Notification Service]
    end
    
    subgraph "Data Layer"
        G[(Primary Database)]
        H[(Cache)]
        I[(Search Index)]
    end
    
    subgraph "External Services"
        J[External API 1]
        K[External API 2]
    end
    
    A --> C
    B --> C
    C --> D
    C --> E
    E --> F
    E --> G
    E --> H
    E --> I
    D --> J
    F --> K
```

---

## Componentes

### API Gateway

| Propriedade | Valor |
|-------------|-------|
| Responsabilidade | Roteamento, autenticação, rate limiting |
| Tecnologia | Express/NestJS |
| Porta | 3000 |

### Auth Service

| Propriedade | Valor |
|-------------|-------|
| Responsabilidade | Autenticação, autorização, JWT |
| Tecnologia | Node.js/TypeScript |
| Dependências | Database, External APIs |

### Business Service

| Propriedade | Valor |
|-------------|-------|
| Responsabilidade | Lógica de negócio principal |
| Tecnologia | Node.js/TypeScript |
| Dependências | Database, Cache, Search |

### Notification Service

| Propriedade | Valor |
|-------------|-------|
| Responsabilidade | Envio de notificações |
| Tecnologia | Node.js/TypeScript |
| Dependências | External Notification APIs |

---

## Fluxo de Dados

### Fluxo de Autenticação

```mermaid
sequenceDiagram
    participant User
    participant API
    participant Auth
    participant Database
    participant Cache
    
    User->>API: POST /auth/login
    API->>Auth: Validate Credentials
    Auth->>Database: Query User
    Database-->>Auth: User Data
    Auth->>Cache: Store Token
    Cache-->>Auth: Confirm
    Auth-->>API: JWT Token
    API-->>User: Login Success
```

### Fluxo de Operações CRUD

```mermaid
sequenceDiagram
    participant User
    participant API
    participant Business
    participant Database
    
    User->>API: GET /resource/:id
    API->>Business: Fetch Resource
    Business->>Database: Query
    Database-->>Business: Resource Data
    Business-->>API: Response
    API-->>User: Resource
```

---

## Modelo de Dados

### Diagrama ER

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER ||--o{ REVIEW : writes
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : included_in
    PRODUCT ||--o{ REVIEW : has
    CATEGORY ||--o{ PRODUCT : categorizes
```

### Tabelas Principais

#### User Table

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| email | VARCHAR(255) | Email único |
| password_hash | VARCHAR(255) | Hash de senha |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

#### Order Table

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | FK para User |
| status | ENUM | Status do pedido |
| total | DECIMAL | Valor total |
| created_at | TIMESTAMP | Data de criação |

---

## Segurança

### Camadas de Segurança

| Camada | Implementação |
|--------|---------------|
| HTTPS | TLS 1.3 obrigatório |
| Autenticação | JWT com refresh tokens |
| Autorização | RBAC |
| Dados | Criptografia em repouso (AES-256) |
| API | Rate limiting, WAF |

### Vulnerabilidades Comuns Protegidas

- ✅ SQL Injection prevention
- ✅ XSS prevention
- ✅ CSRF protection
- ✅ Rate limiting
- ✅ Input validation

---

## Escalabilidade

### Estratégias

| Estratégia | Implementação |
|------------|-------------|
| Horizontal | Auto-scaling groups |
| Database | Read replicas |
| Cache | Redis/Memcached |
| CDN | CloudFront/Cloudflare |

---

## Monitoramento

### Métricas

| Métrica | Ferramenta |
|--------|------------|
| Logging | Pino/Winston |
| Metrics | Prometheus |
| Tracing | Jaeger |
| Alerting | PagerDuty |

---

## Infraestrutura

### Ambiente de Produção

```mermaid
graph LR
    subgraph "Cloud Provider"
        subgraph "VPC"
            subgraph "Public Subnet"
                LB[Load Balancer]
            end
            
            subgraph "Private Subnet"
                APP1[App Instance 1]
                APP2[App Instance 2]
            end
            
            subgraph "Data Subnet"
                DB[(Primary DB)]
                DB_R[(Read Replica)]
                REDIS[(Redis)]
            end
        end
    end
    
    CDN[CDN] --> LB
    LB --> APP1
    LB --> APP2
    APP1 --> DB
    APP1 --> REDIS
    APP2 --> DB_R
```

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|------------|
| Backend | Node.js 18, TypeScript |
| API | Express/NestJS |
| Database | PostgreSQL 15 |
| Cache | Redis 7 |
| Search | Elasticsearch |
| Container | Docker, Docker Compose |
| Cloud | AWS |

---

## Glossário

| Termo | Definição |
|------|-----------|
| RBAC | Role-Based Access Control |
| JWT | JSON Web Token |
| API | Application Programming Interface |
| CRUD | Create, Read, Update, Delete |

---

## Referências

- [Solution Architecture](../architect_agent/solution-architecture.md)
- [API Documentation](./API-documentation.md)
- [Security Guidelines](./SECURITY.md)