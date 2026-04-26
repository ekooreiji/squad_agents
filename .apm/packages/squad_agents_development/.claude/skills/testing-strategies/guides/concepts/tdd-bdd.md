# TDD e BDD

## TDD - Test-Driven Development

### Ciclo TDD

```
┌─────────────────────────────────────────────────────────┐
│  1. Red    → Escreve teste que falha                  │
│  2. Green  → Faz teste passar                         │
│  3. Refactor → Melhora código                        │
└─────────────────────────────────────────────────────────┘
```

### Exemplo TDD

```python
# 1. Red - escreva teste que falha
def test_add():
    assert add(2, 3) == 5  # Fail!

# 2. Green - implemente para passar
def add(a, b):
    return a + b  # Pass!

# 3. Refactor - melhore
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b
```

### Benefícios TDD

| Benefício | Descrição |
|----------|-----------|
| Design melhor | Código testável |
| Confiança | Testes cobrem funcionalidades |
| Documentação | Testes são especificação |
| Regressão | Bugs não regresam |

## BDD - Behavior-Driven Development

### Estrutura Gherkin

```gherkin
Feature: Login
  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials
    Then they should be redirected to dashboard
```

### BDD em Código

#### Python (Behave)
```python
from behave import given, when, then

@given('the user is on the login page')
def step_user_on_login(context):
    context.page.goto("/login")

@when('the user enters valid credentials')
def step_enters_credentials(context):
    context.page.fill("#email", "test@test.com")
    context.page.fill("#password", "password")
    context.page.click("button[type='submit']")

@then('they should be redirected to dashboard')
def step_redirected(context):
    assert context.page.url == "/dashboard"
```

#### JavaScript (Cucumber)
```javascript
import { Given, When, Then } from '@cucumber/cucumber';

Given('the user is on the login page', async function() {
  await page.goto('/login');
});

When('the user enters valid credentials', async function() {
  await page.fill('#email', 'test@test.com');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
});

Then('they should be redirected to dashboard', async function() {
  expect(page.url()).toBe('/dashboard');
});
```

## TDD vs BDD

| Aspecto | TDD | BDD |
|--------|-----|-----|
| **Foco** | Testes técnicos | Comportamento de negócio |
| **Público** | Desenvolvedores | Todos stakeholders |
| **Linguagem** | Código | Gherkin (Given/When/Then) |
| **Quando** | Desenvolvimento | Especificação + desenvolvimento |

## Quando Usar

| Cenário | Recomendado |
|---------|-----------|
| Lógica de negócio | TDD |
| Critérios de aceitação | BDD |
| Bugs | TDD |
| Features | BDD |
| Refatoração | TDD |

## Referências

- [TDD - Kent Beck](https://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530)
- [BDD - Cucumber](https://cucumber.io/)