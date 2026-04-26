# Advanced ERD

## E-commerce Model

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER ||--o{ ADDRESS : has
    USER ||--o{ REVIEW : writes
    ORDER ||--o{ ORDER_ITEM : contains
    ORDER ||--|| PAYMENT : has
    PRODUCT ||--o{ ORDER_ITEM : in
    PRODUCT ||--o{ REVIEW : has
    PRODUCT ||--o{ PRODUCT_CATEGORY : belongs
    CATEGORY ||--o{ PRODUCT_CATEGORY : has

    USER {
        int id PK
        string name
        string email UK
        string password_hash
        boolean is_active
        datetime created_at
    }

    ORDER {
        int id PK
        int user_id FK
        decimal total
        string status
        datetime created_at
    }

    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal price
    }

    PRODUCT {
        int id PK
        string name
        text description
        decimal price
        int stock
        boolean is_active
    }

    PAYMENT {
        int id PK
        int order_id FK UK
        string method
        string status
        decimal amount
    }

    REVIEW {
        int id PK
        int user_id FK
        int product_id FK
        int rating
        text comment
        datetime created_at
    }

    ADDRESS {
        int id PK
        int user_id FK
        string street
        string city
        string state
        string zip_code
    }

    CATEGORY {
        int id PK
        string name
        int parent_id FK
    }

    PRODUCT_CATEGORY {
        int product_id FK
        int category_id FK
    }
```

## Blog System

```mermaid
erDiagram
    USER ||--o{ POST : writes
    USER ||--o{ COMMENT : posts
    USER ||--o{ LIKE : gives
    POST ||--o{ COMMENT : has
    POST ||--o{ POST_TAG : has
    POST ||--o{ LIKE : has
    TAG ||--o{ POST_TAG : used_in

    POST {
        int id PK
        int author_id FK
        string title
        text content
        string status
        datetime published_at
    }

    COMMENT {
        int id PK
        int post_id FK
        int user_id FK
        int parent_id FK
        text content
        datetime created_at
    }

    LIKE {
        int user_id FK
        int post_id FK
        datetime created_at
    }

    TAG {
        int id PK
        string name UK
    }

    POST_TAG {
        int post_id FK
        int tag_id FK
    }
```

## Multi-tenant System

```mermaid
erDiagram
    TENANT ||--o{ USER : has
    TENANT ||--o{ SUBSCRIPTION : owns
    TENANT ||--o{ DATA : owns
    USER ||--o{ ROLE : has

    TENANT {
        uuid id PK
        string name
        string domain UK
        string plan
        boolean is_active
    }

    USER {
        int id PK
        int tenant_id FK
        string name
        string email
        string password_hash
    }

    SUBSCRIPTION {
        int id PK
        int tenant_id FK
        string plan
        datetime start_date
        datetime end_date
    }

    ROLE {
        int id PK
        int tenant_id FK
        string name
        json permissions
    }
```

## Full-text Search Integration

```mermaid
flowchart TD
    A[App写入数据] --> B[PostgreSQL]
    A --> C[Elasticsearch]
    B --> D[wal2json]
    D --> E[Logstash/Fluentd]
    E --> C
    
    F[Search Query] --> G[Elasticsearch]
    G --> H[Results]
    
    I[Write Query] --> J[PostgreSQL]
    J --> K[Primary DB]
    
    L[Bulk Sync] --> M[Reindex]
    M --> C
```

## Read/Write Separation

```mermaid
flowchart LR
    A[App] --> B[Load Balancer]
    
    B -->|Write| C[Primary DB]
    B -->|Read| D[Replica 1]
    B -->|Read| E[Replica 2]
    B -->|Read| F[Replica 3]
    
    C --> G[Binlog]
    G -->|Replication| D
    G -->|Replication| E
    G -->|Replication| F
```