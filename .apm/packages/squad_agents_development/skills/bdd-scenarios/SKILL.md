---
name: bdd-scenarios
description: Converte requisitos de negócio em cenários Gherkin (Given/When/Then)
---

# BDD Scenarios

Converte requisitos de negócio ou fluxos de usuário em cenários Gherkin válidos no formato Given/When/Then.

## Como Usar

Forneça uma regra de negócio ou fluxo de usuário. A skill analisará o requisito e gerará cenários Gherkin apropriados em um arquivo `.feature`.

## Entrada

Regra de negócio ou fluxo descrevendo:

- Contexto inicial do sistema
- Ações que o usuário pode realizar
- Resultados esperados

## Processo

1. Identificar o contexto inicial (Given) - estado do sistema antes da ação
2. Identificar a ação do usuário (When) - interação ou evento
3. Identificar o resultado esperado (Then) - comportamento do sistema
4. Criar cenários alternativos para casos de borda e erros
5. Agrupar cenários relacionados em uma Feature

## Formato de Saída

```gherkin
Feature: [Nome da Feature]

  Scenario: [Título do cenário]
    Given [contexto inicial]
    And [condição adicional opcional]
    When [ação do usuário]
    Then [resultado esperado]
```

## Exemplo

### Entrada

Download versionado de asset:

- Usuário pode baixar versão mais recente sem especificar versão
- Usuário pode baixar versão específica
- Se versão não existir, sistema informa erro

### Saída Gerada

```gherkin
Feature: Download versionado de asset

  Scenario: Download da versão mais recente
    Given que o asset possui múltiplas versões
    And o usuário possui permissão de acesso
    When ele solicita o download sem especificar versão
    Then o sistema deve fornecer a versão mais recente

  Scenario: Download de versão específica
    Given que o asset possui múltiplas versões
    And o usuário possui permissão de acesso
    When ele solicita o download de uma versão específica
    Then o sistema deve fornecer a versão solicitada

  Scenario: Versão inexistente
    Given que o asset possui múltiplas versões
    And o usuário possui permissão de acesso
    When ele solicita uma versão inexistente
    Then o sistema deve informar que a versão não existe
```

## Boas Práticas

- Cada Scenario deve cobrir um único comportamento
- Usar linguagem ubíqua do domínio
- Evitar steps genéricos demais ("usuário está na página")
- Incluir cenários de erro quando relevante
- Manter descrição dos steps concisa e objetiva

## Skills Relacionadas

Esta skill complementa o workflow de Desenvolvimento:

- **[testing-strategies](../testing-strategies/SKILL.md)** - Implementar testes BDD automatizados com frameworks de teste

### Fluxo de Integração

```
acceptance-criteria-generator → bdd-scenarios → testing-strategies
```

### Workflow

1. **Crie ACs**: Use acceptance-criteria-generator para definir critérios
2. **Converta**: Use bdd-scenarios para criar cenários Gherkin
3. **Automatize**: Use testing-strategies para implementar testes (Cucumber, Behave, Jest with Gherkin)