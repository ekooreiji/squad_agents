# Migration Flow

## Workflow Diagram

```mermaid
flowchart LR
    A[Create Migration] --> B[DEV Environment]
    B --> C[Test Migration]
    C --> D[Staging Environment]
    D --> E[Production]
    
    F[Rollback] -.-> G[DEV]
    F -.-> H[Staging]
    G --> I[Verify]
    H --> I
    I --> E
```

## Migration States

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Pending
    Pending --> Running
    Running --> Applied
    Running --> Failed
    Failed --> RollingBack
    RollingBack --> Pending
    Applied --> [*]
    Failed --> [*]
```

## Alembic Flow

```
┌─────────────────────────────────────────────┐
│              Development                    │
├─────────────────────────────────────────────┤
│ 1. model.create_all() / alter table        │
│ 2. alembic revision --autogenerate         │
│ 3. alembic upgrade head                  │
│ 4. Test / Verify                        │
└─────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│              CI/CD Pipeline                 │
├─────────────────────────────────────────────┤
│ 1. alembic upgrade +1                     │
│ 2. Run tests                           │
│ 3. alembic downgrade +1 (rollback test) │
│ 4. Deploy                              │
└─────────────────────────────────────────────┘
```