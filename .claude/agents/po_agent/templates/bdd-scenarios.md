# BDD Scenarios: {Nome da Feature}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Product Owner Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | bdd-scenarios |

---

## Feature: {Nome da Feature}

### Como Ator
Eu como **{ator}** desejo **{ação}** para **{benefício}**

### Descrição
{Descrição da feature em linhas gerais}

---

## Background: Contexto Comum

**Dado que** {condição inicial global}
**E** {condição adicional}
**Cuando** {contexto}

---

## Cenários

### Scenario: {Título do Cenário 1} - Happy Path

**Dado que** {contexto inicial}
**E** {condição adicional opcional}
**Quando** {ação do usuário}
**Então** {resultado esperado}
**E** {verificação adicional}

### Scenario: {Título do Cenário 2} - Caso de Erro

**Dado que** {contexto}
**Quando** {ação que causa erro}
**Então** {mensagem de erro esperada}
**E** {estado do sistema}

### Scenario: {Título do Cenário 3} - Caso de Borda

**Dado que** {condição limite}
**Quando** {ação do usuário}
**Então** {resultado esperado}

### Scenario: {Título do Cenário 4} - Fluxo Alternativo

**Dado que** {contexto}
**E** {condição}
**Quando** {ação alternativa}
**Então** {resultado alternativo}

---

## Variáveis de Teste

| Variável | Valor | Cenário Aplicável |
|----------|-------|------------------|
| username | "" | Erro |
| username | "admin" | Erro (permissão) |
| password | "123" |Erro (curto) |
| email | "invalid" |Erro (formato) |

---

## Dados de Teste

### Fixture: Usuário Padrão
```json
{
  "username": "user@example.com",
  "password": "SecurePass123!",
  "role": "user"
}
```

---

## Mapeamento para Testes

| Scenario | Teste Unitário | Teste Integração | Teste E2E |
|----------|---------------|-----------------|------------|
| Happy Path | ✓ | ✓ | ✓ |
| Erro | ✓ | ✓ | - |
| Borda | ✓ | - | - |
| Alternativo | ✓ | ✓ | - |

---

## Regras de Negócio

| Regra | Descrição |
|-------|----------|
| RN-001 | {Regra 1} |
| RN-002 | {Regra 2} |

---

## Observações

### Técnicas
- {Observação técnica 1}

### Negócio
- {Observação de negócio 1}

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | ... | ... |
| 2 | ... | ... |

---

## Próximos Passos
- [ ] Revisar cenários com time de desenvolvimento
- [ ] Implementar steps em código (Cucumber/Behave)
- [ ] Executar testes BDD
- [ ] Validar cobertura

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Product Owner Agent | Versão inicial |