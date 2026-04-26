# Template: Relatório de Necessidades

Template para relatório gerado pelo Test Agent quando precisar de implementação.

---

## Estrutura

```markdown
---
title: Relatório de Necessidades: [Feature]
description: Relatório de dependências de implementação para Test Agent
author: Test Agent
date: YYYY-MM-DD
status: pending
---

# Relatório de Necessidades: [Nome da Feature]

## Contexto

[Breve descrição do por que esta implementação é necessária para os testes]

## O que Precisa Ser Implementado

| # | Item | Descrição | Prioridade |
|---|------|-----------|-------------|
| 1 | [Nome do item] | [Descrição detalhada] | Alta |
| 2 | [Nome do item] | [Descrição detalhada] | Média |
| 3 | [Nome do item] | [Descrição detalhada] | Baixa |

## Casos de Teste Dependentes

### Bloqueados

| # | Caso de Teste | Dependência | Status |
|---|--------------|------------|--------|
| 1 | [Caso de teste 1] | [Dependência 1] | 🔴 Bloqueado |
| 2 | [Caso de teste 2] | [Dependência 2] | 🔴 Bloqueado |

### Pendentes

| # | Caso de Teste | Dependência | Status |
|---|--------------|------------|--------|
| 3 | [Caso de teste 3] | N/A | ⏳ Aguardando |

## Dependências Técnicas

- **API**: [Endpoint necessário]
- **Módulo**: [Módulo necessário]
- **Serviço**: [Serviço necessário]
- **Database**: [Tabela/Coleção necessária]

## Interface Esperada

```typescript
// ou Python
interface ExpectedInterface {
  // métodos esperados
}
```

## Blocker

[Descrição clara do que está impedindo a criação dos testes]

## Impacto

- [Impacto 1]
- [Impacto 2]

## Próximos Passos

- [ ] Aguardar implementação do Developer
- [ ] Implementar testes após código pronto
- [ ] Executar testes de regressão

## Referências

- [Link para issue]
- [Link para documentação]

---

## Metadata

| Campo | Valor |
|-------|-------|
| Status | 🟡 Pendente |
| Prioridade | Alta |
| Dependências | [Lista] |
| Bloqueado por | [Implementação] |
```