# Component Diagram: {Nome da Feature}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Solution Architect Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | uml-architecture |

---

## Visão Geral

{Breve descrição dos componentes desta feature ou módulo}

---

## Diagrama de Componentes

```mermaid
graph TB
    subgraph Presentation
        A[Web Client]
        B[Mobile Client]
    end
    
    subgraph API
        C[API Gateway]
        D[API Controller]
    end
    
    subgraph Domain
        E[Domain Service]
        F[Domain Entity]
        G[Domain Event]
    end
    
    subgraph Infrastructure
        H[Repository]
        I[External Client]
        J[Message Queue]
    end
    
    A --> C
    B --> C
    C --> D
    D --> E
    E --> F
    E --> G
    G --> J
    E --> H
    H --> I
```

---

## Componentes

### {Nome do Componente 1}
| Atributo | Valor |
|---------|-------|
| Responsabilidade | {Descrição da responsabilidade} |
| Interfaces | {Interfaces expostas} |
| Dependências | {Dependências internas} |
| Tecnologia | {Tech stack} |

### {Nome do Componente 2}
| Atributo | Valor |
|---------|-------|
| Responsabilidade | {Descrição da responsabilidade} |
| Interfaces | {Interfaces expostas} |
| Dependências | {Dependências internas} |
| Tecnologia | {Tech stack} |

---

## Interfaces de Componentes

### {Interface Name}
| Método | Entrada | Saída | Descrição |
|--------|--------|------|----------|
| {Method} | {Input} | {Output} | {Description} |

---

## Fluxo de Dados Entre Componentes

```mermaid
sequenceDiagram
    participant Client
    participant Gateway
    participant Service
    participant Repository
    participant External
    
    Client->>Gateway: Request
    Gateway->>Service: Forward
    Service->>Repository: Query
    Repository-->>Service: Result
    Service->>External: Call
    External-->>Service: Response
    Service-->>Gateway: Response
    Gateway-->>Client: Result
```

---

## Estados

| Componente | Estados Possíveis |
|------------|------------------|
| {Component} | {State1}, {State2}, {State3} |

---

## Exceções

| Cenário | Componente | Ação |
|---------|------------|-------|
| {Error 1} | {Component} | {Action} |
| {Error 2} | {Component} | {Action} |

---

## Padrões de Projeto Utilizados

| Padrão | Componente | Justificativa |
|--------|------------|--------------|
| {Pattern 1} | {Component} | {Reason} |
| {Pattern 2} | {Component} | {Reason} |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | {Pergunta 1} | {Justificativa 1} |
| 2 | {Pergunta 2} | {Justificativa 2} |

---

## Próximos Passos
- [ ] Detalhar cada componente
- [ ] Definir контраtos de interface
- [ ] Criar protótipos
- [ ] Implementar componentes

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Solution Architect Agent | Versão inicial |