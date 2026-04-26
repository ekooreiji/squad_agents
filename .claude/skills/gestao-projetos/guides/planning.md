# Planejamento de Projetos

Guia sobre como planejar projetos.

---

## 1. Elementos do Plano

### 1.1 Componentes Principais

| Componente | Descrição |
|-----------|-----------|
| Escopo | O que será incluído |
| Cronograma | Quando será entregue |
| Recursos | Quem fará o que |
| Orçamento | Custo total estimado |
| Riscos | Possible problems |

### 1.2 Documento de Escopo

```
## Escopo do Projeto
### Incluído
- [ ]
### Excluído
- [ ]
### Suposições
- [ ]
### Restrições
- [ ]
```

---

## 2. Estrutura de Decomposição do Trabalho (EDT)

### 2.1 O que é EDT

EDT é a divisão do projeto em partes menores gerenciáveis.

### 2.2 Exemplo de Estrutura

```
Projeto
├── Fase 1: Descoberta
│   ├── Pesquisa
│   ├── Análise
│   └── Estratégia
├── Fase 2: Design
│   ├── Wireframes
│   ├── Mockups
│   └── Design System
├── Fase 3: Desenvolvimento
│   ├── Frontend
│   ├── Backend
│   └── Integrações
└── Fase 4: Lançamento
    ├── Testes
    ├── Deploy
    └── Treinamento
```

### 2.3 Como Criar

1. Listar todas as tarefas
2. Agrupar em fases
3. Identificar dependências
4. Estimar esforço
5. Atribuir responsáveis

---

## 3. Cronograma

### 3.1 Elementos

| Elemento | Descrição |
|-----------|-----------|
| Início | Data de início |
| Fim | Data de entrega |
| Marcos | Milestones |
| Duração | Tempo por tarefa |

### 3.2 Marcos Principais

| Marco | Descrição |
|-------|-----------|
| Kickoff | Início oficial |
| Aprovação Briefing | Requisitos alinhados |
| Entrega Primeira Versão | Alpha |
| UAT | Testes do cliente |
| Lançamento | Go live |

### 3.3 Timeline Visual

```
Semana 1   Semana 2   Semana 3   Semana 4
|----|----|----|----|----|----|----|----|
[===FASE 1======][===FASE 2======][===FASE 3======]
                            ^
                        MARCO: Alpha
```

---

## 4. Atribuição de Recursos

### 4.1 Matriz RACI

| Tarefa | Responsável | Aprovador | Consultado | Informado |
|--------|------------|----------|----------|----------|
| Design | Designer | PM | Dev | Cliente |
| Desenvolvimento | Dev | TL | PM | Designer |
| Aprovação | Cliente | - | PM | Team |

### 4.2 Alocação

| Recurso | Disponibilidade |
|--------|-------------|
| Designer | 50% do projeto |
| Dev Frontend | 100% |
| Dev Backend | 100% |

---

## 5. Definition of Done (DoD)

### 5.1 Exemplo

```
- [ ] Código commitado
- [ ] Code review feito
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Testado em staging
```

### 5.2 Por Tipo

| Tipo | Itens |
|------|-------|
| Design | Brief, explorações, refinamento, handoff |
| Desenvolvimento | Código, testes, documentação |
| Projeto | Entrega, validação, retrospectiva |

---

## 6. Validação do Plano

### 6.1 Checklist

- [ ] Escopo definido
- [ ] Cronograma criado
- [ ] Recursos alocados
- [ ] Riscos identificados
- [ ] Dependências mapeadas
- [ ] DoD definido

### 6.2 Revisão

| Quem | Quando |
|------|--------|
| Team Lead | Antes de aprovar |
| Cliente | Em kickoff |
| Stakeholders | Se necessário |

---

## Cross-refs

- [intro-gestao.md](intro-gestao.md) - Conceitos
- [estimativas.md](estimativas.md) - Como estimar
- [rastreamento.md](rastreamento.md) - Como rastrear