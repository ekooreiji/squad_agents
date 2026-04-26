# ERD - Basic Models

## Mermaid

```mermaid
erDiagram
    USER ||--o{ POST : writes
    USER {
        int id PK
        string name
        string email UK
        boolean is_active
        datetime created_at
    }
    POST {
        int id PK
        string title
        text content
        int author_id FK
        datetime created_at
    }
```

## ASCII

```
┌─────────────┐       ┌─────────────┐
│    USER    │       │    POST    │
├─────────────┤       ├─────────────┤
│ id (PK)     │       │ id (PK)    │
│ name        │       │ title      │
│ email (UK)  │───┐   │ content   │
│ is_active  │   │───│ author_id│
│ created_at │       │ created_at │
└─────────────┘       └─────────────┘
```

## Relationship Types

| Type | Symbol |
|------|--------|
| One to One | `||--||` |
| One to Many | `||--o{` |
| Many to Many | `o{--o{` |